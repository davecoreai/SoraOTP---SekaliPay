# Garda OTP

Garda OTP adalah aplikasi mobile-first dengan landing page, autentikasi Supabase, dashboard, pemesanan nomor melalui NokosPusat, dan top up QRIS melalui **SekaliPay**. Payment gateway yang digunakan hanya SekaliPay.

## Struktur
- `index.html`, `style.css`, `app.js`: frontend.
- `api/`: 11 Vercel serverless API routes, termasuk `create-payment.js` dan `sekalipay-webhook.js`.
- `lib/server.js`: autentikasi, Supabase admin client, rate limit, HMAC, dan helper server.
- `sql/schema.sql`: skema database untuk instalasi baru.
- `sql/security-hardening-sekalipay.sql`: migration hardening untuk database yang sudah ada.
- `sql/leaderboard-realtime.sql`: view leaderboard terbaru dan notifikasi Supabase Realtime Broadcast.
- `sql/otp-guarantee.sql`: migration OTP, cancellation, popularity ranking, event ledger webhook, dan refund saldo 100% yang idempoten.
- `.env.example`: daftar environment variable.

## Domain Garda OTP

Domain utama proyek ini adalah `https://gardaotp.my.id`. Di Vercel, tambahkan `gardaotp.my.id` pada **Project → Settings → Domains**, lalu pasang record DNS persis seperti nilai yang ditampilkan Vercel untuk project ini. Atur environment variable `APP_URL=https://gardaotp.my.id` pada seluruh environment yang digunakan dan redeploy.

Pada Supabase → Authentication → URL Configuration, set **Site URL** ke `https://gardaotp.my.id` dan tambahkan URL redirect yang digunakan aplikasi di domain tersebut. Daftarkan callback pembayaran ke `https://gardaotp.my.id/api/sekalipay-webhook` dan webhook NokosPusat ke `https://gardaotp.my.id/api/nokos-webhook`.

## Environment variables Vercel
Wajib diatur sebagai server-side environment variables:
`SUPABASE_URL`, `SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, `NOKOS_API_KEY`, `NOKOS_BASE_URL`, `NOKOS_WEBHOOK_SECRET`, `SEKALIPAY_API_KEY`, `SEKALIPAY_SECRET_KEY`, `SEKALIPAY_BASE_URL`, `SEKALIPAY_PAYMENT_CODE`, `SEKALIPAY_IS_SANDBOX`, `APP_URL`.

Jangan pernah menaruh `SUPABASE_SERVICE_ROLE_KEY`, `NOKOS_API_KEY`, `SEKALIPAY_API_KEY`, atau `SEKALIPAY_SECRET_KEY` di frontend, source map, atau variabel `NEXT_PUBLIC_*`/`VITE_*`.

## NokosPusat (API live)
Backend memanggil API resmi NokosPusat dari server Vercel, bukan dari browser: katalog `/api/v1/services`, negara, offers, order, status/OTP, dan pembatalan. Kunci API harus disimpan sebagai environment variable server-side `NOKOS_API_KEY`; `NOKOS_BASE_URL` diarahkan ke `https://nokospusat.com`. Kode pembelian mengambil ulang penawaran di server, memeriksa `quoted_price`, dan mengirim `Idempotency-Key`. Katalog hanya menampilkan layanan yang memiliki pasangan logo eksplisit di `assets/service-logos`, dengan 6 kartu awal dalam grid 3 kolom dan mode daftar melalui tombol “Lihat Semua”. Bundle ini berisi 31 file logo; 28 nama layanan sudah dipasangkan secara eksplisit. Tiga gambar yang belum dapat diidentifikasi tidak ditampilkan agar tidak salah merek. Sumber `PDFlogo.pdf` yang dirujuk oleh catatan aset tidak ikut tersedia di ZIP awal.

**Penting:** API key live dan endpoint pembelian melakukan transaksi nyata serta mendebit saldo NokosPusat. Jangan menguji tombol beli dengan saldo live kecuali memang siap melakukan pembelian. Saya hanya memeriksa source dan kecocokan endpoint terhadap dokumentasi; tidak ada transaksi real yang dijalankan dalam proses revisi ini.

## Alur top up dan OTP
- QRIS melalui SekaliPay adalah **top up saldo**, bukan pembayaran langsung satu nomor. Setelah webhook pembayaran menyatakan `paid`, saldo dikreditkan dan pengguna dapat memilih aplikasi lalu membeli nomor dengan saldo.
- Setelah order berhasil dibuat, frontend langsung membuka halaman OTP yang menampilkan nomor, status `Menunggu OTP`, dan kode OTP saat provider mengirimkannya. Tombol Copy baru muncul setelah kode tersedia.
- Status OTP disinkronkan dari backend NokosPusat. Polling awal 5 detik dan kemudian melambat, serta mengikuti jeda yang diberikan provider. Webhook menerima event status/OTP saat NokosPusat mengirimkannya, meski halaman browser sedang tertutup. Catatan: dokumentasi provider menyebut tidak ada event tambahan hanya karena deadline lewat; bila masa kelayakan terlewati tanpa event status, pemeriksaan GET akan berjalan lagi saat halaman OTP dibuka dari riwayat atau saat pesanan aktif dipulihkan.
- Garansi Garda OTP: pengembalian **100% dari nilai order ke saldo internal Garda OTP** ketika NokosPusat mengonfirmasi status `cancelled`/`expired` dan tidak ada OTP, receipt, atau bukti penerimaan pesan. Refund dikunci oleh transaksi database agar tidak dapat dikreditkan dua kali.
- Pembatalan dikirim hanya saat snapshot provider memberi `can_cancel: true`. Permintaan DELETE dikirim paling banyak sekali; jika provider masih memverifikasi pelepasan nomor, sistem hanya membaca status dan tidak mengulang DELETE. Jika provider menolak karena cooldown/kelayakan (409/429), penanda permintaan dilepas dan status diperiksa lagi sebelum pengguna bisa mencoba pembatalan baru.
- Jika OTP atau receipt sudah diterima, order tidak memenuhi syarat refund biasa. Saat status provider belum pasti, saldo tetap tertahan sampai ada konfirmasi; jangan menjanjikan refund instan.

## SekaliPay
- Endpoint pembuatan tagihan memakai adapter SekaliPay yang sudah ada di source project awal (`POST /api/v1/gateway/payment`).
- Webhook callback: `https://gardaotp.my.id/api/sekalipay-webhook`.
- Webhook memverifikasi HMAC-SHA256 atas raw request body melalui header `X-Signature`.
- Saldo hanya dikreditkan untuk status `paid`/`completed`, dengan nominal dan mode pembayaran yang cocok terhadap record top up.
- RPC `credit_sekalipay_topup_once` mengunci record top up dan mengkredit saldo secara atomik, sehingga webhook berulang tidak menambah saldo dua kali.
- Request top up memakai `Idempotency-Key` UUID dan unique constraint per user di database. Retry memakai merchant reference yang sama.

**Penting:** implementasi SekaliPay dipertahankan dari adapter yang terdapat pada ZIP project awal. Format signature dan nama field yang digunakan mengikuti implementasi tersebut; konfirmasikan kembali dengan dokumentasi/akun merchant SekaliPay dan lakukan pengujian sandbox sebelum live. Tidak ada klaim bahwa webhook telah diuji terhadap akun merchant nyata.

## Database
### Instalasi baru
Jalankan `sql/schema.sql` pada Supabase SQL Editor, kemudian jalankan `sql/leaderboard-realtime.sql`.

### Project yang sudah memiliki database
Backup database terlebih dahulu, lalu jalankan `sql/security-hardening-sekalipay.sql` jika belum pernah diterapkan, `sql/otp-guarantee.sql`, kemudian `sql/leaderboard-realtime.sql`. Migration OTP menambah kolom status/receipt/cancel dan memperbarui refund function serta fungsi ranking aplikasi. Jangan deploy route baru sebelum migration ini dijalankan. Migration leaderboard memperbarui view agregat, membuat private Broadcast topic `leaderboard:global`, dan mengirim sinyal refresh saat profil, pesanan, atau top up berubah. Payload broadcast hanya berisi sinyal refresh; data leaderboard dimuat ulang melalui endpoint terautentikasi. Frontend juga memiliki refresh cadangan tiap 30 detik.

Pastikan Realtime Supabase aktif untuk project. Channel leaderboard bersifat private dan hanya bisa diikuti pengguna yang sudah login. Jangan mengubah policy topic menjadi public.

Daftarkan juga webhook NokosPusat dengan URL `https://gardaotp.my.id/api/nokos-webhook`, aktifkan event `order.status_changed` dan `order.otp_received`, lalu simpan secret webhook sebagai `NOKOS_WEBHOOK_SECRET` di Vercel dan redeploy. Webhook memverifikasi tanda tangan lalu membaca ulang detail order terkini dari NokosPusat sebelum menyimpan status/refund. Migration ini harus dijalankan di Supabase SQL Editor agar fitur live benar-benar aktif; mengunggah file frontend saja tidak memasang trigger database. Tinjau kebijakan RLS serta grants sesuai kebutuhan aplikasi sebelum produksi.

## Pengujian
```bash
npm install
npm run check
npm test
```

Lakukan tes sandbox: invoice pending, pembayaran sukses, signature salah, nominal salah, mode sandbox/live mismatch, webhook berulang, dan webhook untuk referensi tidak dikenal. Jangan aktifkan live sebelum semua skenario lulus.


## Edit Profile: foto dan banner

Untuk mengaktifkan fitur Edit Profile pada halaman akun, jalankan sekali isi `sql/profile-assets-storage.sql` melalui Supabase Dashboard → SQL Editor. Migrasi ini menambahkan `avatar_url` dan `banner_url`, memberi izin update hanya untuk kolom profil yang dapat diedit, serta membuat bucket publik `profile-assets` dengan kebijakan upload/update/delete yang membatasi setiap akun ke folder UUID miliknya sendiri. Nama tampilan dapat diubah; username tidak diubah dari halaman ini.


## Chat Public (Global)

1. Buka Supabase Dashboard → SQL Editor.
2. Jalankan seluruh isi `sql/public-chat.sql` pada project Supabase yang dipakai Garda OTP.
3. Pastikan Realtime aktif pada project. Script akan menambahkan tabel `public_chat_messages` ke publication `supabase_realtime` jika publication tersedia.
4. Deploy perubahan website dari branch `main`.

Chat hanya dapat digunakan oleh pengguna yang sudah login. Pesan disimpan permanen di Supabase dan dapat dibaca semua pengguna terautentikasi. Pengirim diambil dari profil akun oleh trigger database, bukan dari nama yang dikirim browser. Reply disimpan sebagai relasi pesan. Status typing dan online bersifat sementara menggunakan Supabase Realtime Presence.

## Chat Public — End-to-End Encryption

Chat Public encrypts newly sent message bodies in the browser before they reach Supabase:

- Message encryption: Web Crypto AES-256-GCM with a fresh 96-bit IV per message and authenticated context.
- Per-device identity: non-extractable ECDH P-256 private key stored locally in IndexedDB; only the public JWK is registered in Supabase.
- Group-key delivery: ECDH P-256 shared secret + HKDF-SHA-256 derives a device-specific AES-GCM wrapping key. The global room key is wrapped separately for each recipient device.
- Database enforcement: the message trigger rejects new inserts unless the body uses the `E2EE1.` ciphertext envelope format.
- Metadata such as display name, username, avatar, timestamps, and reply relationships remains visible to Supabase. Only message body content is encrypted.

### Supabase setup

Run `sql/public-chat.sql` in Supabase SQL Editor. This updates the Chat Public schema and policies for device public keys, the global room key version, wrapped key envelopes, Realtime key requests, and rejection of plaintext new messages. Keep RLS enabled on all chat tables.

### Device and history behavior

The private device key and room key are held in that browser's IndexedDB. A newly enrolled browser/device asks an existing connected room member to wrap and deliver the room key. For this reason, at least one device that already has the room key must be online during first enrollment of another device. Do not clear browser site data or IndexedDB: if every device copy of the room key is lost, encrypted history cannot be recovered. New devices can decrypt the global room history after receiving the room key because this is a shared public room.

Messages sent before E2EE was enabled remain legacy plaintext; they are identified in the interface as not encrypted. They cannot be made end-to-end encrypted retroactively. New messages are rejected by the database if the client tries to send plaintext.

### Security scope and limitations

This is a practical browser-based E2EE layer for the Garda OTP public group, not a formally audited messaging protocol and not a replacement for Signal's Double Ratchet. The global room uses a shared room key, so any authenticated participant who receives that key can read the room history and could share it onward. There is no forward secrecy or per-message sender signing/key rotation in this implementation. Device public-key discovery uses the Supabase directory without an independent fingerprint-verification step; a maliciously modified frontend or trusted database administrator could attack key enrollment. Keep the frontend origin protected against XSS, deploy only reviewed code, and do not treat this room as suitable for highly sensitive secrets.


## Admin Dashboard removal

Admin Dashboard endpoints, UI, roles, and database settings have been removed from this build. Review and run `sql/remove-admin-dashboard.sql` manually only after backing up the Supabase database. Public Chat E2EE remains separate in `sql/public-chat-e2ee-migration.sql`.


## Profile Storage

Jalankan migrasi `sql/profile-storage-migration.sql` untuk bucket dan policies penyimpanan foto profil. Upload profil memakai object path unik per pengguna.



## Pembersihan database lama

Jika database Supabase sebelumnya sudah pernah dipasangi migrasi program undangan, backup database lalu jalankan `sql/remove-referral-system.sql` satu kali melalui SQL Editor. Script ini menghapus tabel/kolom/trigger lama dan mengembalikan fungsi settlement top up ke versi tanpa bonus program undangan. Data riwayat program lama yang berada di tabel tersebut akan ikut dihapus; saldo yang sudah pernah dikreditkan sebelumnya tidak dikurangi otomatis.
