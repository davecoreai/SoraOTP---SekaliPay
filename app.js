const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];
const money = n => new Intl.NumberFormat((navigator.language||'id-ID'),{style:'currency',currency:'IDR',maximumFractionDigits:0}).format(Number(n||0));
const esc = s => String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

const deviceLocale = (navigator.languages?.[0] || navigator.language || 'id').toLowerCase();
const uiLang = /^id(?:-|$)/i.test(deviceLocale) ? 'id' : 'en';
const dateLocale = uiLang === 'id' ? 'id-ID' : deviceLocale;
const translations = {
  en: {
    'Selamat datang': 'Welcome', 'Beranda': 'Home', 'Beli': 'Buy', 'Top up': 'Top up', 'Riwayat': 'History', 'Profil': 'Profile',
    'Beli nomor': 'Buy number', 'Beli nomor.': 'Buy a number.', 'Riwayat transaksi.': 'Transaction history.',
    'Peringkat pengguna': 'User leaderboard', 'PERINGKAT / PENGGUNA': 'RANK / USER', 'TOTAL DEPOSIT': 'TOTAL DEPOSIT', 'NILAI PESANAN': 'ORDER VALUE',
    'Peringkat diperbarui otomatis saat transaksi berubah.': 'Rankings update automatically when transactions change.',
    'TOTAL PESANAN': 'TOTAL ORDERS', 'Pesanan seluruh pengguna': 'Orders from all users', 'Saldo akun': 'Account balance',
    'Pilih negara': 'Choose a country', 'Pilih aplikasi terlebih dahulu': 'Choose a service first', 'Memuat negara...': 'Loading countries...',
    'Pilih negara...': 'Choose a country...', 'Pilih negara untuk melihat server.': 'Choose a country to view available servers.',
    'Pilih aplikasi dan negara untuk melihat penawaran server.': 'Choose a service and country to view server offers.',
    'Memuat penawaran...': 'Loading offers...', 'Tidak ada server tersedia untuk pilihan ini.': 'No servers available for this selection.',
    'Gagal memuat negara': 'Could not load countries', 'Negara tujuan': 'Destination country', 'Pilihan server': 'Server options',
    'Aplikasi populer': 'Popular services', 'Cari WhatsApp, Telegram, Google...': 'Search WhatsApp, Telegram, Google...',
    'Mengambil katalog layanan...': 'Loading service catalog...', 'Layanan tidak ditemukan.': 'No services found.',
    'Pilih nominal': 'Choose amount', 'Metode pembayaran': 'Payment method', 'SALDO SAAT INI': 'CURRENT BALANCE',
    'Isi saldo dengan pembayaran QRIS yang praktis.': 'Add balance easily using QRIS.', 'Pembelian nomor': 'Number purchases',
    'Semua pembelian nomor dan top up kamu.': 'Your number purchases and top-ups.', 'Akun aktif': 'Account active', 'AKUN AKTIF': 'ACCOUNT ACTIVE',
    'Edit nama': 'Edit name', 'Keluar akun': 'Sign out', 'Lanjutkan pembayaran': 'Continue to payment', 'Pilih aplikasi dan server terbaik sesuai kebutuhanmu.':'Choose the service and server that best fit your needs.',
    'Saldo setelah beli': 'Balance after purchase', 'Total harga': 'Total price', 'Beli nomor sekarang': 'Buy number now',
    'Scan dari bank atau e-wallet': 'Scan with a bank or e-wallet', 'Belum ada data deposit.': 'No deposit data yet.',
    'Memuat papan peringkat...': 'Loading leaderboard...', 'Memuat riwayat...': 'Loading history...', 'Pilih nominal':'Choose amount', 'Ringkasan pesanan':'Order summary', 'Metode pembayaran':'Payment method', 'Belum ada transaksi.': 'No transactions yet.',
    'Layanan sementara tidak tersedia. Coba lagi.': 'Service temporarily unavailable. Please try again.',
    'Peringkat diperbarui otomatis saat transaksi berubah.': 'Rankings update automatically as transactions change.',
    'TOTAL BALANCE': 'TOTAL BALANCE', 'Mulai beli nomor': 'Buy a number', 'Verifikasi lebih mudah.': 'Verify with ease.',
    'Pilih aplikasi, server, dan negara dalam beberapa langkah.': 'Choose a service, server, and country in a few steps.',
    'Pilih aplikasi dan server terbaik sesuai kebutuhanmu.': 'Choose the best service and server for your needs.',
    'Pilih aplikasi dan negara untuk melihat penawaran server.': 'Choose a service and country to view server offers.',
    'Negara tujuan': 'Destination country', 'Aplikasi populer': 'Popular services', 'Pilihan server': 'Server options',
    'Pilih nominal': 'Choose an amount', 'Metode pembayaran': 'Payment method', 'Pembelian nomor': 'Number purchases',
    'Top up': 'Top up', 'Semua pembelian nomor dan top up kamu.': 'Your number purchases and top-ups.',
    'Isi saldo dengan pembayaran QRIS yang praktis.': 'Add balance easily using QRIS.', 'Available balance': 'Available balance',
    'Saldo akun': 'Account balance', 'Pilih negara untuk melihat server.': 'Choose a country to view servers.',
    'Pilih negara untuk melihat penawaran server.': 'Choose a country to view offers.',
    'Memuat katalog layanan live...': 'Loading live service catalog...', 'Mengambil katalog layanan...': 'Loading service catalog...',
    'Layanan tidak ditemukan.': 'No services found.', 'Tidak ada server tersedia untuk pilihan ini.': 'No servers available for this selection.',
    'Memuat penawaran...': 'Loading offers...', 'Memuat negara...': 'Loading countries...', 'Pilih negara...': 'Choose a country...',
    'Pilih aplikasi terlebih dahulu': 'Choose a service first', 'Gagal memuat negara': 'Could not load countries',
    'Lanjutkan pembayaran': 'Continue to payment', 'Scan dari bank atau e-wallet': 'Scan with a bank or e-wallet',
    'Beli nomor sekarang': 'Buy number now', 'Saldo setelah beli': 'Balance after purchase', 'Total harga': 'Total price',
    'Layanan sementara tidak tersedia. Coba lagi.': 'Service temporarily unavailable. Please try again.',
    'Belum ada data deposit.': 'No deposit data yet.', 'Belum ada transaksi.': 'No transactions yet.',
    'Memuat papan peringkat...': 'Loading leaderboard...', 'Memuat riwayat...': 'Loading history...', 'Pilih nominal':'Choose amount', 'Ringkasan pesanan':'Order summary', 'Metode pembayaran':'Payment method',
    'Peringkat pengguna': 'User leaderboard', 'PERINGKAT / PENGGUNA': 'RANK / USER', 'NILAI PESANAN': 'ORDER VALUE',
    'Pesanan seluruh pengguna': 'Orders across all users', 'SALDO SAAT INI': 'CURRENT BALANCE',
    'Edit nama': 'Edit name', 'Keluar akun': 'Sign out', 'AKUN AKTIF': 'ACCOUNT ACTIVE',
    'Verifikasi email': 'Verify email', 'Masukkan kode 6 digit yang dikirim ke email kamu.': 'Enter the 6-digit code sent to your email.',
    'MEMBALAS': 'REPLYING TO', 'Ruang komunitas': 'Community room', 'Menghubungkan...': 'Connecting...', 'Belum ada percakapan': 'No conversations yet', 'Jadilah orang pertama yang menyapa komunitas Garda OTP.': 'Be the first to say hello to the Garda OTP community.', 'Muat pesan sebelumnya': 'Load older messages', 'Membalas': 'Replying to', 'Tulis pesan untuk komunitas...': 'Write a message to the community...', 'Pesan dapat dilihat semua pengguna': 'Messages are visible to all users', 'Enter untuk kirim · Shift + Enter untuk baris baru': 'Enter to send · Shift + Enter for a new line',
    'Verifikasi akun': 'Verify account', 'Kirim ulang kode': 'Resend code', 'Pilih layanan terlebih dahulu': 'Choose a service first',
    'Harga dan stok mengikuti penawaran live provider. Harga dikunci saat konfirmasi.': 'Price and stock follow live provider offers. The price is checked again at confirmation.',
    'Tagihan QRIS memiliki batas waktu. Saldo hanya bertambah setelah webhook SekaliPay terverifikasi.': 'QRIS invoices expire. Your balance is credited only after the SekaliPay webhook is verified.',
        'Verifikasi digital,':'Digital verification,','lebih praktis.':'made simple.','Garda OTP menyediakan akses pemesanan nomor virtual untuk kebutuhan penerimaan kode verifikasi pada layanan yang tersedia. Pilih layanan, negara, dan penawaran server, lalu kelola pesanan dari satu dashboard.':'Garda OTP lets you order virtual numbers to receive verification codes on supported services. Choose a service, country, and server offer, then manage orders from one dashboard.',
    'Mulai sekarang':'Get started','Lihat cara penggunaan':'How it works','Ketersediaan nomor, harga, dan masa aktif mengikuti informasi yang diberikan provider saat pemesanan.':'Number availability, pricing, and validity depend on provider information at the time of order.',
    'Semua kebutuhan OTP dalam satu tempat.':'All your OTP needs in one place.','Kelola proses pemesanan dan transaksi dengan alur yang jelas, mulai dari memilih layanan sampai memeriksa status pesanan.':'Manage orders and transactions through a clear flow, from choosing a service to checking order status.',
    'Katalog layanan':'Service catalog','Temukan aplikasi dan platform yang tersedia dari katalog provider.':'Find available apps and platforms in the provider catalog.','Pilihan negara':'Country selection','Pilih negara berdasarkan ketersediaan untuk layanan yang dipilih.':'Choose a country based on availability for the selected service.',
    'Harga dan stok server':'Server prices and stock','Periksa harga dan stok dari penawaran server sebelum membeli.':'Check server prices and stock before purchasing.','Pembayaran QRIS':'QRIS payments','Buat tagihan top up dan scan QRIS yang diterbitkan untuk transaksi tersebut.':'Create a top-up invoice and scan the QRIS issued for that transaction.',
    'Riwayat transaksi':'Transaction history','Periksa referensi, nominal, dan status pembelian maupun top up.':'Check references, amounts, and purchase or top-up status.','Saldo akun':'Account balance','Pantau saldo akun dan gunakan untuk transaksi pembelian nomor.':'Monitor your balance and use it to purchase numbers.',
    'Alur penggunaan yang sederhana.':'A simple way to get started.','Setiap pembelian dilakukan melalui akun Garda OTP. Periksa detail pesanan sebelum mengonfirmasi transaksi.':'Every purchase is made through your Garda OTP account. Review order details before confirming.',
    'Daftar atau masuk':'Sign up or sign in','Buat akun menggunakan email, lalu masuk untuk membuka dashboard pribadi.':'Create an account with your email, then sign in to open your dashboard.','Pilih layanan dan negara':'Choose a service and country','Cari layanan tujuan, pilih negara, lalu lihat server yang tersedia.':'Find the service you need, choose a country, and view available servers.',
    'Periksa penawaran':'Review offers','Pastikan harga, stok, dan saldo sudah sesuai sebelum mengirim pesanan.':'Check the price, stock, and balance before placing an order.','Pantau pesanan':'Track your order','Lihat detail dan status pesanan melalui halaman riwayat akun.':'View order details and status in your account history.',
    'Pembayaran dan saldo':'Payments and balance','Top up dilakukan dengan membuat tagihan QRIS. Gunakan QRIS yang muncul pada tagihan aktif dan selesaikan pembayaran sebelum batas waktu berakhir. Saldo hanya diperbarui setelah pembayaran berhasil diverifikasi oleh sistem pembayaran.':'Top up by creating a QRIS invoice. Pay using the QRIS shown on the active invoice before it expires. Your balance is updated only after the payment provider verifies the payment.',
    'Informasi nomor virtual':'Virtual number information','Nomor virtual disediakan berdasarkan stok provider. Penerimaan kode OTP dapat dipengaruhi oleh kebijakan aplikasi tujuan, negara, dan kondisi nomor. Garda OTP tidak menjamin setiap nomor dapat digunakan pada seluruh layanan.':'Virtual numbers are supplied based on provider stock. OTP delivery may depend on the destination app, country, and number status. Garda OTP cannot guarantee that every number works with every service.',
    'Penggunaan yang bertanggung jawab':'Responsible use','Gunakan layanan sesuai hukum dan ketentuan platform tujuan. Jangan gunakan nomor untuk penipuan, spam, penyamaran identitas, atau aktivitas yang melanggar hak orang lain.':'Use the service lawfully and follow the destination platform rules. Do not use numbers for fraud, spam, impersonation, or activities that violate others’ rights.',
    'Pertanyaan yang sering diajukan.':'Frequently asked questions.','Apa itu Garda OTP?':'What is Garda OTP?','Apakah semua aplikasi dan negara tersedia?':'Are all apps and countries available?','Bagaimana cara mengisi saldo?':'How do I add balance?','Kapan saldo akan masuk?':'When will my balance be credited?','Apakah nomor pasti menerima OTP?':'Will the number definitely receive an OTP?','Di mana saya melihat status pesanan?':'Where can I check my order status?',
    'Mulai gunakan Garda OTP.':'Start using Garda OTP.','Buat akun untuk melihat katalog, penawaran server, dan transaksi dari dashboard.':'Create an account to view the catalog, server offers, and transactions from your dashboard.','Masuk ke Garda OTP':'Open Garda OTP','Nomor virtual dan layanan verifikasi.':'Virtual numbers and verification services.','Seluruh hak cipta dilindungi.':'All rights reserved.',
    'Masuk ke akun':'Sign in to your account','Masuk untuk melanjutkan ke dashboard Garda OTP.':'Sign in to continue to your Garda OTP dashboard.','Buat akun':'Create account','Lengkapi data berikut untuk membuat akun Garda OTP.':'Complete the details below to create your Garda OTP account.','Login Dengan Google':'Continue with Google','atau dengan email':'or continue with email','Nama':'Name','Nama lengkap':'Full name','Minimal 8 karakter':'At least 8 characters','Belum punya akun? Daftar':'New here? Sign up','Sudah punya akun? Masuk':'Already have an account? Sign in',
    'Beli':'Buy','nomor.':'number.','transaksi.':'history.','Top up':'Top up','stok':'stock','tersedia':'available','LANGKAH 01':'STEP 01','LANGKAH 02':'STEP 02','LANGKAH 03':'STEP 03','LANGSUNG':'LIVE','AKTIF':'ACTIVE'
  },
  id: {
    'TOTAL BALANCE':'TOTAL SALDO','GLOBAL ORDERS':'TOTAL PESANAN','TODAY':'HARI INI','AVAILABLE BALANCE':'SALDO TERSEDIA',
    'STEP 01':'LANGKAH 01','STEP 02':'LANGKAH 02','STEP 03':'LANGKAH 03','LIVE CATALOG':'KATALOG AKTIF','LIVE PRICE & STOCK':'HARGA & STOK LIVE',
    'ORDER SUMMARY':'RINGKASAN PESANAN','YOUR OTP CODE':'KODE OTP ANDA','RANK / USER':'PERINGKAT / PENGGUNA',
    'TOTAL ORDER VALUE':'NILAI TOTAL PESANAN','GLOBAL RANKING':'PERINGKAT GLOBAL','Garda OTP — Verification, Simplified':'Garda OTP — Verifikasi Lebih Praktis',
    'Verification, simplified.':'Verifikasi lebih praktis.','All your OTP needs in one place.':'Semua kebutuhan OTP dalam satu tempat.',
    'Popular services':'Layanan populer','Choose a country':'Pilih negara','Server options':'Pilihan server','CURRENT BALANCE':'SALDO SAAT INI',
    'EMAIL VERIFICATION':'VERIFIKASI EMAIL','YOUR VERIFICATION CODE':'KODE VERIFIKASI ANDA','ACCOUNT SECURITY':'KEAMANAN AKUN',
    'COPY CODE':'SALIN KODE','SECURITY NOTICE':'INFORMASI KEAMANAN','PROFILE':'PROFIL','HOME':'BERANDA','BUY':'BELI',
    'HISTORY':'RIWAYAT','SIGN OUT':'KELUAR','AVAILABLE':'TERSEDIA','available':'tersedia','Pilih server':'Choose a server','Total harga':'Total price','Saldo akun':'Account balance','Beli nomor sekarang':'Buy number now','Lanjutkan pembayaran':'Continue to payment','Pembelian nomor':'Number purchases','Top up saldo':'Add balance','Menunggu alokasi':'Awaiting allocation','Tidak ada server tersedia untuk pilihan ini.':'No servers available for this selection.','TOTAL DEPOSIT':'TOTAL DEPOSIT','Beli':'Buy','nomor.':'number.','transaksi.':'history.','stok':'stock','LANGSUNG':'LIVE',
    'VERIFIKASI DIGITAL':'DIGITAL VERIFICATION','BERANDA':'HOME','PILIH LAYANAN':'CHOOSE A SERVICE'
  }
};
Object.assign(translations.en,{
 'Kelola identitas dan tampilan akun Garda OTP kamu.':'Manage your Garda OTP account identity and appearance.',
 'Atur nama tampilan, foto profil, dan banner akun.':'Customize your display name, profile photo, and account banner.',
 'AKUN AKTIF':'ACCOUNT ACTIVE','Edit Profile':'Edit Profile','Nama tampilan':'Display name',
 'Username akun':'Account username','Username tidak dapat diubah dari halaman ini.':'Your username cannot be changed here.',
 'Foto profil':'Profile photo','Banner profil':'Profile banner','Pilih foto':'Choose photo','Pilih banner':'Choose banner',
 'Batal':'Cancel','Simpan perubahan':'Save changes','Nama yang ditampilkan':'Displayed name',
 'Nama tampilan tidak mengubah username login kamu.':'Your display name does not change your login username.',
 'Profile diperbarui':'Profile updated','Perubahan nama, username, foto profil, dan banner sudah disimpan.':'Your name, profile photo, and banner have been saved.',
 'Username belum diatur':'Username not set','PREVIEW BANNER':'BANNER PREVIEW'
});
const tr = value => (translations[uiLang] || {})[value] || value;
function localize(root=document){
  const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
  const nodes=[]; while(walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(node=>{const raw=node.nodeValue;const trimmed=raw.trim();if(!trimmed)return;const translated=tr(trimmed);if(translated!==trimmed)node.nodeValue=raw.replace(trimmed,translated);});
  root.querySelectorAll?.('[placeholder],[aria-label],[title]').forEach(el=>['placeholder','aria-label','title'].forEach(attr=>{const v=el.getAttribute(attr);if(v)el.setAttribute(attr,tr(v));}));
}
function serviceDisplayName(name=''){
 return String(name).replace(/\s*(?:[-–—|:]\s*)?Indonesia\s*$/i,'').trim();
}
const serviceLogoRules=[
 [/whatsapp|\bwa\b/i,'whatsapp.png'],[/telegram/i,'logo-02.png'],[/google|gmail/i,'logo-04.png'],[/facebook/i,'logo-05.png'],[/adidas/i,'logo-06.png'],[/airbnb/i,'logo-07.png'],[/alibaba/i,'logo-08.png'],[/alfagift/i,'logo-09.png'],[/aliexpress/i,'logo-10.png'],[/akulaku/i,'logo-11.png'],[/alipay/i,'logo-12.png'],[/amazon/i,'logo-13.png'],[/bereal/i,'logo-15.png'],[/blibli/i,'logo-16.png'],[/blizzard/i,'logo-17.png'],[/bolt/i,'logo-18.png'],[/badoo/i,'logo-19.png'],[/bumble/i,'logo-20.png'],[/openai|chatgpt/i,'logo-21.png'],[/dana/i,'logo-22.png'],[/claude/i,'logo-23.png'],[/carousell/i,'logo-24.png'],[/hago/i,'logo-25.png'],[/discord/i,'logo-28.png'],[/tiktok/i,'logo-29.png'],[/shopee/i,'logo-30.png'],[/snapchat/i,'logo-31.png'],[/depop/i,'logo-27.png']
];
function serviceLogoFile(name=''){return serviceLogoRules.find(([pattern])=>pattern.test(String(name)))?.[1]||null;}
const countryIsoByName=Object.fromEntries([["aruba","AW"],["afghanistan","AF"],["islamic republic of afghanistan","AF"],["angola","AO"],["republic of angola","AO"],["anguilla","AI"],["aland islands","AX"],["albania","AL"],["republic of albania","AL"],["andorra","AD"],["principality of andorra","AD"],["united arab emirates","AE"],["argentina","AR"],["argentine republic","AR"],["armenia","AM"],["republic of armenia","AM"],["american samoa","AS"],["antarctica","AQ"],["french southern territories","TF"],["antigua and barbuda","AG"],["australia","AU"],["austria","AT"],["republic of austria","AT"],["azerbaijan","AZ"],["republic of azerbaijan","AZ"],["burundi","BI"],["republic of burundi","BI"],["belgium","BE"],["kingdom of belgium","BE"],["benin","BJ"],["republic of benin","BJ"],["bonaire sint eustatius and saba","BQ"],["burkina faso","BF"],["bangladesh","BD"],["people s republic of bangladesh","BD"],["bulgaria","BG"],["republic of bulgaria","BG"],["bahrain","BH"],["kingdom of bahrain","BH"],["bahamas","BS"],["commonwealth of the bahamas","BS"],["bosnia and herzegovina","BA"],["republic of bosnia and herzegovina","BA"],["saint barthelemy","BL"],["belarus","BY"],["republic of belarus","BY"],["belize","BZ"],["bermuda","BM"],["bolivia plurinational state of","BO"],["plurinational state of bolivia","BO"],["bolivia","BO"],["brazil","BR"],["federative republic of brazil","BR"],["barbados","BB"],["brunei darussalam","BN"],["bhutan","BT"],["kingdom of bhutan","BT"],["bouvet island","BV"],["botswana","BW"],["republic of botswana","BW"],["central african republic","CF"],["canada","CA"],["cocos keeling islands","CC"],["switzerland","CH"],["swiss confederation","CH"],["chile","CL"],["republic of chile","CL"],["china","CN"],["people s republic of china","CN"],["cote d ivoire","CI"],["republic of cote d ivoire","CI"],["cameroon","CM"],["republic of cameroon","CM"],["congo the democratic republic of the","CD"],["congo","CG"],["republic of the congo","CG"],["cook islands","CK"],["colombia","CO"],["republic of colombia","CO"],["comoros","KM"],["union of the comoros","KM"],["cabo verde","CV"],["republic of cabo verde","CV"],["costa rica","CR"],["republic of costa rica","CR"],["cuba","CU"],["republic of cuba","CU"],["curacao","CW"],["christmas island","CX"],["cayman islands","KY"],["cyprus","CY"],["republic of cyprus","CY"],["czechia","CZ"],["czech republic","CZ"],["germany","DE"],["federal republic of germany","DE"],["djibouti","DJ"],["republic of djibouti","DJ"],["dominica","DM"],["commonwealth of dominica","DM"],["denmark","DK"],["kingdom of denmark","DK"],["dominican republic","DO"],["algeria","DZ"],["people s democratic republic of algeria","DZ"],["ecuador","EC"],["republic of ecuador","EC"],["egypt","EG"],["arab republic of egypt","EG"],["eritrea","ER"],["the state of eritrea","ER"],["western sahara","EH"],["spain","ES"],["kingdom of spain","ES"],["estonia","EE"],["republic of estonia","EE"],["ethiopia","ET"],["federal democratic republic of ethiopia","ET"],["finland","FI"],["republic of finland","FI"],["fiji","FJ"],["republic of fiji","FJ"],["falkland islands malvinas","FK"],["france","FR"],["french republic","FR"],["faroe islands","FO"],["micronesia federated states of","FM"],["federated states of micronesia","FM"],["gabon","GA"],["gabonese republic","GA"],["united kingdom","GB"],["united kingdom of great britain and northern ireland","GB"],["georgia","GE"],["guernsey","GG"],["ghana","GH"],["republic of ghana","GH"],["gibraltar","GI"],["guinea","GN"],["republic of guinea","GN"],["guadeloupe","GP"],["gambia","GM"],["republic of the gambia","GM"],["guinea bissau","GW"],["republic of guinea bissau","GW"],["equatorial guinea","GQ"],["republic of equatorial guinea","GQ"],["greece","GR"],["hellenic republic","GR"],["grenada","GD"],["greenland","GL"],["guatemala","GT"],["republic of guatemala","GT"],["french guiana","GF"],["guam","GU"],["guyana","GY"],["republic of guyana","GY"],["hong kong","HK"],["hong kong special administrative region of china","HK"],["heard island and mcdonald islands","HM"],["honduras","HN"],["republic of honduras","HN"],["croatia","HR"],["republic of croatia","HR"],["haiti","HT"],["republic of haiti","HT"],["hungary","HU"],["indonesia","ID"],["republic of indonesia","ID"],["isle of man","IM"],["india","IN"],["republic of india","IN"],["british indian ocean territory","IO"],["ireland","IE"],["iran islamic republic of","IR"],["islamic republic of iran","IR"],["iran","IR"],["iraq","IQ"],["republic of iraq","IQ"],["iceland","IS"],["republic of iceland","IS"],["israel","IL"],["state of israel","IL"],["italy","IT"],["italian republic","IT"],["jamaica","JM"],["jersey","JE"],["jordan","JO"],["hashemite kingdom of jordan","JO"],["japan","JP"],["kazakhstan","KZ"],["republic of kazakhstan","KZ"],["kenya","KE"],["republic of kenya","KE"],["kyrgyzstan","KG"],["kyrgyz republic","KG"],["cambodia","KH"],["kingdom of cambodia","KH"],["kiribati","KI"],["republic of kiribati","KI"],["saint kitts and nevis","KN"],["korea republic of","KR"],["south korea","KR"],["kuwait","KW"],["state of kuwait","KW"],["lao people s democratic republic","LA"],["laos","LA"],["lebanon","LB"],["lebanese republic","LB"],["liberia","LR"],["republic of liberia","LR"],["libya","LY"],["saint lucia","LC"],["liechtenstein","LI"],["principality of liechtenstein","LI"],["sri lanka","LK"],["democratic socialist republic of sri lanka","LK"],["lesotho","LS"],["kingdom of lesotho","LS"],["lithuania","LT"],["republic of lithuania","LT"],["luxembourg","LU"],["grand duchy of luxembourg","LU"],["latvia","LV"],["republic of latvia","LV"],["macao","MO"],["macao special administrative region of china","MO"],["saint martin french part","MF"],["morocco","MA"],["kingdom of morocco","MA"],["monaco","MC"],["principality of monaco","MC"],["moldova republic of","MD"],["republic of moldova","MD"],["moldova","MD"],["madagascar","MG"],["republic of madagascar","MG"],["maldives","MV"],["republic of maldives","MV"],["mexico","MX"],["united mexican states","MX"],["marshall islands","MH"],["republic of the marshall islands","MH"],["north macedonia","MK"],["republic of north macedonia","MK"],["mali","ML"],["republic of mali","ML"],["malta","MT"],["republic of malta","MT"],["myanmar","MM"],["republic of myanmar","MM"],["montenegro","ME"],["mongolia","MN"],["northern mariana islands","MP"],["commonwealth of the northern mariana islands","MP"],["mozambique","MZ"],["republic of mozambique","MZ"],["mauritania","MR"],["islamic republic of mauritania","MR"],["montserrat","MS"],["martinique","MQ"],["mauritius","MU"],["republic of mauritius","MU"],["malawi","MW"],["republic of malawi","MW"],["malaysia","MY"],["mayotte","YT"],["namibia","NA"],["republic of namibia","NA"],["new caledonia","NC"],["niger","NE"],["republic of the niger","NE"],["norfolk island","NF"],["nigeria","NG"],["federal republic of nigeria","NG"],["nicaragua","NI"],["republic of nicaragua","NI"],["niue","NU"],["netherlands","NL"],["kingdom of the netherlands","NL"],["norway","NO"],["kingdom of norway","NO"],["nepal","NP"],["federal democratic republic of nepal","NP"],["nauru","NR"],["republic of nauru","NR"],["new zealand","NZ"],["oman","OM"],["sultanate of oman","OM"],["pakistan","PK"],["islamic republic of pakistan","PK"],["panama","PA"],["republic of panama","PA"],["pitcairn","PN"],["peru","PE"],["republic of peru","PE"],["philippines","PH"],["republic of the philippines","PH"],["palau","PW"],["republic of palau","PW"],["papua new guinea","PG"],["independent state of papua new guinea","PG"],["poland","PL"],["republic of poland","PL"],["puerto rico","PR"],["korea democratic people s republic of","KP"],["democratic people s republic of korea","KP"],["north korea","KP"],["portugal","PT"],["portuguese republic","PT"],["paraguay","PY"],["republic of paraguay","PY"],["palestine state of","PS"],["the state of palestine","PS"],["french polynesia","PF"],["qatar","QA"],["state of qatar","QA"],["reunion","RE"],["romania","RO"],["russian federation","RU"],["rwanda","RW"],["rwandese republic","RW"],["saudi arabia","SA"],["kingdom of saudi arabia","SA"],["sudan","SD"],["republic of the sudan","SD"],["senegal","SN"],["republic of senegal","SN"],["singapore","SG"],["republic of singapore","SG"],["south georgia and the south sandwich islands","GS"],["saint helena ascension and tristan da cunha","SH"],["svalbard and jan mayen","SJ"],["solomon islands","SB"],["sierra leone","SL"],["republic of sierra leone","SL"],["el salvador","SV"],["republic of el salvador","SV"],["san marino","SM"],["republic of san marino","SM"],["somalia","SO"],["federal republic of somalia","SO"],["saint pierre and miquelon","PM"],["serbia","RS"],["republic of serbia","RS"],["south sudan","SS"],["republic of south sudan","SS"],["sao tome and principe","ST"],["democratic republic of sao tome and principe","ST"],["suriname","SR"],["republic of suriname","SR"],["slovakia","SK"],["slovak republic","SK"],["slovenia","SI"],["republic of slovenia","SI"],["sweden","SE"],["kingdom of sweden","SE"],["eswatini","SZ"],["kingdom of eswatini","SZ"],["sint maarten dutch part","SX"],["seychelles","SC"],["republic of seychelles","SC"],["syrian arab republic","SY"],["syria","SY"],["turks and caicos islands","TC"],["chad","TD"],["republic of chad","TD"],["togo","TG"],["togolese republic","TG"],["thailand","TH"],["kingdom of thailand","TH"],["tajikistan","TJ"],["republic of tajikistan","TJ"],["tokelau","TK"],["turkmenistan","TM"],["timor leste","TL"],["democratic republic of timor leste","TL"],["tonga","TO"],["kingdom of tonga","TO"],["trinidad and tobago","TT"],["republic of trinidad and tobago","TT"],["tunisia","TN"],["republic of tunisia","TN"],["turkiye","TR"],["republic of turkiye","TR"],["tuvalu","TV"],["taiwan province of china","TW"],["taiwan","TW"],["tanzania united republic of","TZ"],["united republic of tanzania","TZ"],["tanzania","TZ"],["uganda","UG"],["republic of uganda","UG"],["ukraine","UA"],["united states minor outlying islands","UM"],["uruguay","UY"],["eastern republic of uruguay","UY"],["united states","US"],["united states of america","US"],["uzbekistan","UZ"],["republic of uzbekistan","UZ"],["holy see vatican city state","VA"],["saint vincent and the grenadines","VC"],["venezuela bolivarian republic of","VE"],["bolivarian republic of venezuela","VE"],["venezuela","VE"],["virgin islands british","VG"],["british virgin islands","VG"],["virgin islands u s","VI"],["virgin islands of the united states","VI"],["viet nam","VN"],["socialist republic of viet nam","VN"],["vietnam","VN"],["vanuatu","VU"],["republic of vanuatu","VU"],["wallis and futuna","WF"],["samoa","WS"],["independent state of samoa","WS"],["yemen","YE"],["republic of yemen","YE"],["south africa","ZA"],["republic of south africa","ZA"],["zambia","ZM"],["republic of zambia","ZM"],["zimbabwe","ZW"],["republic of zimbabwe","ZW"],["usa","US"],["us","US"],["uk","GB"],["great britain","GB"],["england","GB"],["russia","RU"],["korea","KR"],["republic of korea","KR"],["holland","NL"],["uae","AE"],["turkey","TR"],["burma","MM"],["ivory coast","CI"],["cape verde","CV"],["swaziland","SZ"],["macedonia","MK"],["brunei","BN"],["east timor","TL"],["palestine","PS"],["kosovo","XK"]]);
function normalizeCountryName(name=''){
 return String(name).normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
}
function countryFlag(country={}){
 const explicit=country.flag_emoji??country.emoji??country.flag;
 if(typeof explicit==='string' && /[\p{Extended_Pictographic}\p{Regional_Indicator}]/u.test(explicit))return explicit;
 const raw=String(country.iso2??country.iso_code??country.alpha2??country.country_code??country.code??'').trim();
 let iso=/^[a-z]{2}$/i.test(raw)?raw.toUpperCase():'';
 if(!iso)iso=countryIsoByName[normalizeCountryName(country.name??country.country_name??country.title??'')]||'';
 if(!iso)return '🌐';
 return String.fromCodePoint(...[...iso].map(ch=>127397+ch.charCodeAt(0)));
}
function selectedCountryInfo(){
 const item=countries.find(c=>String(c.country_code??c.code??c.id??'')===String(selectedCountry??''));
 return item?{code:String(item.country_code??item.code??item.id??''),name:String(item.name??item.country_name??item.title??'')}:null;
}
let sb=null, session=null, profile=null, services=[], popularServices=[], popularCountById=new Map(), selectedService=null, countries=[], selectedCountry=null, offers=[], selectedOffer=null, provider='provider_1', selectedAmount=0, historyMode='orders';
let leaderboardChannel=null, leaderboardFallback=null, liveRefreshQueued=false;
let publicChatChannel=null, chatFallbackTimer=null, chatTypingTimer=null, chatTypingSent=false, chatEnabled=true;
let chatMessages=[], chatLoaded=false, chatLoading=false, chatSending=false, chatReplyTarget=null, chatHasMore=true, chatUnread=0;
let chatCryptoDbPromise=null, chatCryptoRecord=null, chatE2EE=null, chatE2EEReady=false, chatE2EEInitPromise=null;
let currentOrderId=sessionStorage.getItem('sora_active_order_id')||null, otpPollTimer=null, otpPollInFlight=false, currentOrderCreatedAt=Date.now();
const DASHBOARD_PAGE_KEY='sora_dashboard_page_v1';
const validDashboardPages=new Set(['home','buy','chat','topup','history','profile','edit-profile','otp']);
let showAllServices=false,catalogLoaded=false,bootstrapPromise=null,countryLoadGeneration=0;
const countryCacheMemory=new Map();
const COUNTRY_CACHE_TTL=10*60*1000;
function getSavedDashboardPage(){try{const value=localStorage.getItem(DASHBOARD_PAGE_KEY);return validDashboardPages.has(value)?value:'home';}catch{return 'home';}}

async function api(path, opts={}) { const token=session?.access_token; const res=await fetch(`/api/${path}`,{...opts,headers:{...(opts.body?{'Content-Type':'application/json'}:{}),...(token?{Authorization:`Bearer ${token}`} : {}),...(opts.headers||{})}}); const data=await res.json().catch(()=>({})); if(!res.ok) throw Object.assign(new Error(data.error||`Request gagal (${res.status})`),{status:res.status,data}); return data; }
function alertError(message){Swal.fire({icon:'error',title:'Terjadi kendala',text:message,confirmButtonText:'Mengerti'});}
function showLanding(){ resetGoogleLoginButton(); if(session?.access_token){showApp();if(!$('.page.active'))setPage(getSavedDashboardPage());return;} $('#app').classList.add('hidden'); $('#authScreen').classList.add('hidden'); $('#landingScreen').classList.remove('hidden'); }
function showAuth(){ resetGoogleLoginButton(); if(session?.access_token){showApp();if(!$('.page.active'))setPage(getSavedDashboardPage());return;} $('#landingScreen').classList.add('hidden'); $('#app').classList.add('hidden'); $('#authScreen').classList.remove('hidden'); }
function showApp(){ $('#landingScreen').classList.add('hidden'); $('#authScreen').classList.add('hidden'); $('#app').classList.remove('hidden'); }
function setPage(name){
 if(session?.access_token&&validDashboardPages.has(name)){try{localStorage.setItem(DASHBOARD_PAGE_KEY,name);}catch{}}
 if(otpPollTimer){clearTimeout(otpPollTimer);otpPollTimer=null;}
 $$('.page').forEach(p=>p.classList.toggle('active',p.id===`page-${name}`));
 const navName=name==='otp'?'buy':name==='edit-profile'?'profile':name;
 const navPages=['home','buy','chat','topup','history','profile'];
 $$('.nav-item').forEach(b=>b.classList.toggle('active',b.dataset.page===navName));
 const idx=navPages.indexOf(navName);const indicator=$('.nav-indicator');
 if(indicator)indicator.style.transform=`translateX(${Math.max(0,idx)*100}%)`;
 if(name==='buy')loadCatalog();if(name==='history')loadHistory();if(name==='home')loadDashboard();
 if(name==='profile')renderProfile();if(name==='edit-profile')populateProfileEditor();if(name==='topup')refreshProfile();
 if(name==='chat'){chatUnread=0;updateChatUnreadBadge();if(chatE2EEReady)loadChatMessages({initial:!chatLoaded});else showChatCryptoStatus('Menyiapkan enkripsi…');}
 if(name==='otp')loadCurrentOrder();else if(currentOrderId&&session?.access_token)scheduleOtpPoll({next_check_after_seconds:15});
 const activePage=document.querySelector(`#page-${name}`);if(activePage)localize(activePage);window.scrollTo({top:0,behavior:'smooth'});
}
$$('[data-page]').forEach(b=>b.addEventListener('click',()=>setPage(b.dataset.page)));
$$('[data-go]').forEach(b=>b.addEventListener('click',()=>setPage(b.dataset.go)));
$('#headerAvatar').addEventListener('click',()=>{const menu=$('#headerMenu');const opening=menu.classList.contains('hidden');menu.classList.toggle('hidden',!opening);$('#headerAvatar').setAttribute('aria-expanded',String(opening));});
function closeHeaderMenu(){const menu=$('#headerMenu');menu?.classList.add('hidden');$('#headerAvatar')?.setAttribute('aria-expanded','false');}
$('#headerSettings').addEventListener('click',()=>{closeHeaderMenu();setPage('edit-profile');});
document.addEventListener('click',e=>{if(!e.target.closest('.header-menu-wrap'))closeHeaderMenu();});
async function init(){
 resetGoogleLoginButton();
 try {
  const response=await fetch('/api/public-config',{cache:'no-store'});
  if(!response.ok)throw new Error(`Konfigurasi auth gagal dimuat (${response.status})`);
  const cfg=await response.json();
  if(cfg.supabaseUrl&&cfg.supabaseAnonKey&&window.supabase){
   sb=window.supabase.createClient(cfg.supabaseUrl,cfg.supabaseAnonKey,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true,flowType:'pkce',storage:window.localStorage}});
   const {data,error}=await sb.auth.getSession();
   if(error)throw error;
   session=data.session;
   sb.auth.onAuthStateChange((event,s)=>{
    session=s;
    if(s){showApp();if(event==='SIGNED_IN')bootstrapAndRestorePage();}
    else{stopLeaderboardRealtime();stopPublicChatRealtime();resetPublicChatState();if(otpPollTimer){clearTimeout(otpPollTimer);otpPollTimer=null;}try{localStorage.removeItem(DASHBOARD_PAGE_KEY);}catch{}showLanding();}
   });
  }
 } catch(e){console.warn('Supabase initialization error',e);}
 if(session?.access_token){
  showApp();await bootstrap();
  const returnedTopup=new URLSearchParams(location.search).get('topup');
  if(returnedTopup){setPage('topup');await handleTopupReturn(returnedTopup);}
  else if(currentOrderId){setPage('otp');await refreshCurrentOrder(true);}
  else setPage(getSavedDashboardPage());
 } else showLanding();
 $('#todayLabel').textContent=new Intl.DateTimeFormat(dateLocale,{weekday:'short',day:'2-digit',month:'short'}).format(new Date()).toUpperCase();
 $('#landingYear').textContent=new Date().getFullYear();document.documentElement.lang=uiLang;document.documentElement.setAttribute('translate','yes');localize(document.body);
}
$('#landingLogin').addEventListener('click',showAuth);
$('#landingLoginMobile').addEventListener('click',()=>{ $('#landingMenu').classList.remove('open'); $('#menuToggle').setAttribute('aria-expanded','false'); showAuth(); });
$('#menuToggle').addEventListener('click',()=>{const open=$('#landingMenu').classList.toggle('open');$('#menuToggle').setAttribute('aria-expanded',String(open));$('#menuToggle i').className=open?'fa-solid fa-xmark':'fa-solid fa-bars';});
$$('#landingMenu a').forEach(a=>a.addEventListener('click',()=>$('#landingMenu').classList.remove('open')));
let googleOAuthInFlight=false;
function resetGoogleLoginButton(){googleOAuthInFlight=false;const button=$('#googleLogin');if(button){button.disabled=false;button.removeAttribute('aria-busy');button.classList.remove('is-loading');}}
window.addEventListener('pageshow',resetGoogleLoginButton);
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible')resetGoogleLoginButton();});
$('#googleLogin').addEventListener('click',async()=>{
 if(!sb)return alertError('Supabase belum terhubung. Periksa /api/public-config dan Environment Variables Vercel.');
 if(googleOAuthInFlight)return;
 const button=$('#googleLogin');googleOAuthInFlight=true;button.disabled=true;button.setAttribute('aria-busy','true');button.classList.add('is-loading');
 try{
  const redirectTo=new URL('/',window.location.origin).toString();
  const {data,error}=await sb.auth.signInWithOAuth({provider:'google',options:{redirectTo,queryParams:{prompt:'select_account'}}});
  if(error)throw error;
  if(!data?.url)resetGoogleLoginButton();
 }catch(error){console.error('Google OAuth error:',error);alertError(error.message||'Login Google gagal dimulai. Periksa konfigurasi OAuth Supabase.');resetGoogleLoginButton();}
});
$('#landingStart').addEventListener('click',showAuth);
$('#landingBottomStart').addEventListener('click',showAuth);

let registering=false, pendingEmail='', pendingPassword='', pendingUsername='', pendingName='';
function setAuthMode(isRegister){registering=isRegister;$('#authTitle').textContent=isRegister?'Buat akun':'Masuk ke akun';$('#authSubtitle').textContent=isRegister?'Lengkapi data berikut untuk membuat akun Garda OTP.':'Masuk untuk melanjutkan ke dashboard Garda OTP.';$('#nameField').classList.toggle('hidden',!isRegister);$('#usernameField').classList.toggle('hidden',!isRegister);$('#authName').required=isRegister;$('#authUsername').required=isRegister;$('#authPassword').autocomplete=isRegister?'new-password':'current-password';$('#passwordMeter').classList.toggle('hidden',!isRegister);$('#authSubmit').textContent=isRegister?'Buat akun':'Masuk';$('#authToggle').textContent=isRegister?'Sudah punya akun? Masuk':'Belum punya akun? Daftar';$('#emailOtpPanel').classList.add('hidden');$('#authForm').classList.remove('hidden');$('#googleLogin').classList.toggle('hidden',isRegister);}
$('#authToggle').addEventListener('click',()=>{setAuthMode(!registering);localize($('#authScreen'));});
$('#authPassword').addEventListener('input',()=>{const v=$('#authPassword').value;let score=0;if(v.length>=8)score++;if(/[a-z]/.test(v)&&/[A-Z]/.test(v))score++;if(/\d/.test(v))score++;if(/[^A-Za-z0-9]/.test(v))score++;$('#passwordStrength').style.width=(score*25)+'%';$('#passwordStrength').dataset.level=String(score);$('#passwordHint').textContent=(uiLang==='id'?['Sangat lemah','Lemah','Cukup','Kuat','Sangat kuat']:['Very weak','Weak','Fair','Strong','Very strong'])[score];});
$('#authUsername').addEventListener('input',e=>{e.target.value=e.target.value.toLowerCase().replace(/[^a-z0-9]/g,'');});
$('#authForm').addEventListener('submit',async e=>{e.preventDefault();if(!sb)return alertError('Isi SUPABASE_URL dan SUPABASE_ANON_KEY di Environment Variables Vercel, lalu deploy ulang.');const email=$('#authEmail').value.trim().toLowerCase(),password=$('#authPassword').value;$('#authSubmit').disabled=true;try{if(registering){const username=$('#authUsername').value.trim(),name=$('#authName').value.trim();if(!/^[a-z0-9]{3,20}$/.test(username))throw new Error('Username harus 3–20 karakter, hanya huruf kecil dan angka.');if(password.length<8)throw new Error('Password minimal 8 karakter.');const {data:available,error:lookupError}=await sb.rpc('username_available',{p_username:username});if(lookupError)throw lookupError;if(available!==true)throw new Error('Username sudah digunakan. Silakan pilih username lain.');const result=await sb.auth.signUp({email,password,options:{data:{display_name:name,username},emailRedirectTo:window.location.origin}});if(result.error)throw result.error;pendingEmail=email;pendingPassword=password;pendingUsername=username;pendingName=name;$('#authForm').classList.add('hidden');$('#googleLogin').classList.add('hidden');$('#authToggle').classList.add('hidden');$('#emailOtpPanel').classList.remove('hidden');Swal.fire({icon:'success',title:'Kode verifikasi dikirim',text:`Periksa email ${email} dan masukkan kode 6 digit.`});}else{const result=await sb.auth.signInWithPassword({email,password});if(result.error)throw result.error;session=result.data.session;showApp();await bootstrap();setPage(getSavedDashboardPage());}}catch(err){alertError(err.message);}finally{$('#authSubmit').disabled=false;}});
function readOtp(){return $$('#otpInputs input').map(x=>x.value).join('');}
$$('#otpInputs input').forEach((input,i,all)=>{input.addEventListener('input',()=>{input.value=input.value.replace(/\D/g,'').slice(0,1);if(input.value&&all[i+1])all[i+1].focus();});input.addEventListener('keydown',e=>{if(e.key==='Backspace'&&!input.value&&all[i-1])all[i-1].focus();});});
$('#verifyOtp').addEventListener('click',async()=>{const token=readOtp();if(token.length!==6)return alertError('Masukkan seluruh 6 digit kode OTP.');$('#verifyOtp').disabled=true;try{const {data,error}=await sb.auth.verifyOtp({email:pendingEmail,token,type:'signup'});if(error)throw error;session=data.session;if(!session){const login=await sb.auth.signInWithPassword({email:pendingEmail,password:pendingPassword});if(login.error)throw login.error;session=login.data.session;}showApp();await bootstrap();setPage(getSavedDashboardPage());}catch(e){alertError(e.message);}finally{$('#verifyOtp').disabled=false;}});
$('#resendOtp').addEventListener('click',async()=>{try{const {error}=await sb.auth.resend({type:'signup',email:pendingEmail});if(error)throw error;Swal.fire({icon:'success',title:'Kode dikirim ulang',text:'Periksa kotak masuk dan folder spam.'});}catch(e){alertError(e.message);}});
async function bootstrap(){
 if(bootstrapPromise)return bootstrapPromise;
 bootstrapPromise=(async()=>{await loadDashboard();renderProfile();await startLeaderboardRealtime();await startPublicChatRealtime();})();
 try{return await bootstrapPromise;}finally{bootstrapPromise=null;}
}
async function bootstrapAndRestorePage(){await bootstrap();if(session?.access_token){showApp();setPage(getSavedDashboardPage());}}

async function startLeaderboardRealtime(){
 if(!sb||!session?.access_token)return;
 if(leaderboardChannel){await sb.removeChannel(leaderboardChannel);leaderboardChannel=null;}
 if(leaderboardFallback)clearInterval(leaderboardFallback);
 try{
  await sb.realtime.setAuth(session.access_token);
  leaderboardChannel=sb.channel('leaderboard:global',{config:{private:true}})
   .on('broadcast',{event:'leaderboard-update'},()=>{
    if(liveRefreshQueued)return;
    liveRefreshQueued=true;
    setTimeout(async()=>{liveRefreshQueued=false;await loadDashboard();},200);
   })
   .subscribe(status=>{if(status==='CHANNEL_ERROR'||status==='TIMED_OUT')console.warn('Leaderboard Realtime status:',status);});
 }catch(error){console.warn('Leaderboard Realtime unavailable; refresh fallback enabled.',error);}
 // Safety refresh in case a websocket reconnect or a database broadcast is missed.
 leaderboardFallback=setInterval(()=>{if(session?.access_token)loadDashboard();},30000);
}
function stopLeaderboardRealtime(){if(leaderboardFallback)clearInterval(leaderboardFallback);leaderboardFallback=null;if(leaderboardChannel&&sb)sb.removeChannel(leaderboardChannel);leaderboardChannel=null;}
const CHAT_PAGE_SIZE=50;
const CHAT_FIELDS='id,user_id,username,avatar_url,body,reply_to,reply_to_name,reply_to_body,created_at';
const CHAT_CRYPTO_DB='soraotp-chat-e2ee-v1';
const CHAT_ROOM_ID='global';
const CHAT_E2EE_PREFIX='E2EE1.';
const CHAT_E2EE_AAD=new TextEncoder().encode('SORAOTP|PUBLIC-CHAT|GLOBAL|MESSAGE|V1');
const chatEncoder=new TextEncoder();
const chatDecoder=new TextDecoder();
function showChatCryptoStatus(message,ready=false){
 const node=$('#chatEncryptionStatus');if(node){node.innerHTML=`<i class="fa-solid ${ready?'fa-lock':'fa-shield-halved'}" aria-hidden="true"></i> ${esc(message)}`;node.classList.toggle('is-ready',ready);node.classList.toggle('is-error',!ready&&/gagal|tidak|menunggu/i.test(message));}
 const input=$('#chatInput'),button=$('#chatSendButton');if(button)button.disabled=!chatE2EEReady||!chatEnabled||!input?.value.trim()||chatSending;
 if(input){input.disabled=!chatE2EEReady||!chatEnabled;if(!chatEnabled)input.placeholder='Chat Public sedang dinonaktifkan.';}
}
function chatBytesToBase64(bytes){let binary='';for(let i=0;i<bytes.length;i+=0x8000)binary+=String.fromCharCode(...bytes.subarray(i,i+0x8000));return btoa(binary);}
function chatBase64ToBytes(value){const binary=atob(value);const bytes=new Uint8Array(binary.length);for(let i=0;i<binary.length;i++)bytes[i]=binary.charCodeAt(i);return bytes;}
function openChatCryptoDb(){
 if(chatCryptoDbPromise)return chatCryptoDbPromise;
 chatCryptoDbPromise=new Promise((resolve,reject)=>{
  if(!window.indexedDB){reject(new Error('Browser ini tidak mendukung penyimpanan kunci enkripsi.'));return;}
  const request=indexedDB.open(CHAT_CRYPTO_DB,1);
  request.onupgradeneeded=()=>{const db=request.result;if(!db.objectStoreNames.contains('keys'))db.createObjectStore('keys',{keyPath:'user_id'});};
  request.onsuccess=()=>resolve(request.result);request.onerror=()=>reject(request.error||new Error('Penyimpanan kunci tidak dapat dibuka.'));
 });
 return chatCryptoDbPromise;
}
async function getChatCryptoRecord(userId){const db=await openChatCryptoDb();return new Promise((resolve,reject)=>{const request=db.transaction('keys','readonly').objectStore('keys').get(userId);request.onsuccess=()=>resolve(request.result||null);request.onerror=()=>reject(request.error);});}
async function saveChatCryptoRecord(record){const db=await openChatCryptoDb();return new Promise((resolve,reject)=>{const tx=db.transaction('keys','readwrite');tx.objectStore('keys').put(record);tx.oncomplete=()=>resolve();tx.onerror=()=>reject(tx.error||new Error('Kunci enkripsi gagal disimpan pada perangkat.'));tx.onabort=()=>reject(tx.error||new Error('Penyimpanan kunci dibatalkan.'));});}
async function ensureChatDeviceIdentity(){
 if(chatCryptoRecord?.user_id===session?.user?.id&&chatCryptoRecord.private_key&&chatCryptoRecord.public_key)return chatCryptoRecord;
 const userId=session?.user?.id;if(!userId)throw new Error('Sesi login tidak tersedia.');
 let record=await getChatCryptoRecord(userId);
 if(!record?.private_key||!record?.public_key||!record?.device_id){
  const pair=await crypto.subtle.generateKey({name:'ECDH',namedCurve:'P-256'},false,['deriveBits']);
  const publicKey=await crypto.subtle.exportKey('jwk',pair.publicKey);
  record={user_id:userId,device_id:crypto.randomUUID(),private_key:pair.privateKey,public_key:publicKey,room_key:null,room_key_version:null,created_at:new Date().toISOString()};
  await saveChatCryptoRecord(record);
 }
 const {error}=await sb.from('public_chat_devices').upsert({device_id:record.device_id,user_id:userId,public_key:record.public_key,device_label:'Garda OTP browser',updated_at:new Date().toISOString()},{onConflict:'device_id'});
 if(error)throw new Error(`Registrasi kunci perangkat gagal: ${error.message}`);
 chatCryptoRecord=record;return record;
}
async function fetchChatRoomState(){const {data,error}=await sb.from('public_chat_room_state').select('room_id,key_version,owner_device_id,owner_user_id').eq('room_id',CHAT_ROOM_ID).maybeSingle();if(error)throw error;return data;}
async function deriveChatEnvelopeKey(privateKey,publicJwk,localDeviceId,peerDeviceId){
 const publicKey=await crypto.subtle.importKey('jwk',publicJwk,{name:'ECDH',namedCurve:'P-256'},false,[]);
 const sharedBits=await crypto.subtle.deriveBits({name:'ECDH',public:publicKey},privateKey,256);
 const material=await crypto.subtle.importKey('raw',sharedBits,'HKDF',false,['deriveKey']);
 const pair=[String(localDeviceId),String(peerDeviceId)].sort().join('|');
 return crypto.subtle.deriveKey({name:'HKDF',hash:'SHA-256',salt:chatEncoder.encode('SORAOTP|CHAT-KEY-WRAP|V1'),info:chatEncoder.encode(pair)},material,{name:'AES-GCM',length:256},false,['encrypt','decrypt']);
}
function chatEnvelopeAad(senderDeviceId,recipientDeviceId,keyVersion){return chatEncoder.encode(`SORAOTP|PUBLIC-CHAT|KEY|V1|${CHAT_ROOM_ID}|${keyVersion}|${senderDeviceId}|${recipientDeviceId}`);}
async function shareChatRoomKeyWithDevice(device){
 if(!chatE2EEReady||!chatE2EE?.room_key||!device?.device_id||device.device_id===chatCryptoRecord?.device_id||!device.public_key)return;
 try{
  const wrapKey=await deriveChatEnvelopeKey(chatCryptoRecord.private_key,device.public_key,chatCryptoRecord.device_id,device.device_id);
  const iv=crypto.getRandomValues(new Uint8Array(12));
  const rawRoomKey=await crypto.subtle.exportKey('raw',chatE2EE.room_key);
  const wrapped=await crypto.subtle.encrypt({name:'AES-GCM',iv,additionalData:chatEnvelopeAad(chatCryptoRecord.device_id,device.device_id,chatE2EE.key_version)},wrapKey,rawRoomKey);
  const {error}=await sb.from('public_chat_key_envelopes').insert({room_id:CHAT_ROOM_ID,key_version:chatE2EE.key_version,sender_device_id:chatCryptoRecord.device_id,sender_user_id:session.user.id,recipient_device_id:device.device_id,iv:chatBytesToBase64(iv),wrapped_key:chatBytesToBase64(new Uint8Array(wrapped))});
  if(error&&error.code!=='23505')throw error;
 }catch(error){console.warn('Chat key share skipped:',device.device_id,error.message||error);}
}
async function shareChatRoomKeyWithRegisteredDevices(){
 if(!chatE2EEReady)return;
 const {data,error}=await sb.from('public_chat_devices').select('device_id,user_id,public_key').limit(500);
 if(error){console.warn('Could not load chat devices for key sharing:',error);return;}
 await Promise.allSettled((data||[]).filter(device=>device.device_id!==chatCryptoRecord.device_id).map(shareChatRoomKeyWithDevice));
}
async function findAndUnwrapChatRoomKey(roomState){
 const {data:envelopes,error}=await sb.from('public_chat_key_envelopes').select('sender_device_id,recipient_device_id,key_version,iv,wrapped_key').eq('room_id',CHAT_ROOM_ID).eq('recipient_device_id',chatCryptoRecord.device_id).eq('key_version',roomState.key_version).order('created_at',{ascending:false}).limit(30);
 if(error)throw error;if(!envelopes?.length)return null;
 const senderIds=[...new Set(envelopes.map(x=>x.sender_device_id))];
 const {data:devices,error:deviceError}=await sb.from('public_chat_devices').select('device_id,public_key').in('device_id',senderIds);
 if(deviceError)throw deviceError;
 const deviceMap=new Map((devices||[]).map(x=>[x.device_id,x]));
 for(const envelope of envelopes){
  try{
   const sender=deviceMap.get(envelope.sender_device_id);if(!sender?.public_key)continue;
   const wrapKey=await deriveChatEnvelopeKey(chatCryptoRecord.private_key,sender.public_key,envelope.recipient_device_id,envelope.sender_device_id);
   const raw=await crypto.subtle.decrypt({name:'AES-GCM',iv:chatBase64ToBytes(envelope.iv),additionalData:chatEnvelopeAad(envelope.sender_device_id,envelope.recipient_device_id,envelope.key_version)},wrapKey,chatBase64ToBytes(envelope.wrapped_key));
   return await crypto.subtle.importKey('raw',raw,{name:'AES-GCM'},true,['encrypt','decrypt']);
  }catch(error){console.warn('Chat key envelope could not be opened:',error.message||error);}
 }
 return null;
}
async function initializeChatE2EE(){
 if(chatE2EEReady)return chatE2EE;
 if(chatE2EEInitPromise)return chatE2EEInitPromise;
 chatE2EEInitPromise=(async()=>{
  showChatCryptoStatus('Menyiapkan kunci enkripsi…');
  const record=await ensureChatDeviceIdentity();let roomState=await fetchChatRoomState();
  if(!roomState){
   const candidateKey=await crypto.subtle.generateKey({name:'AES-GCM',length:256},true,['encrypt','decrypt']);
   record.room_key=candidateKey;record.room_key_version=1;await saveChatCryptoRecord(record);
   const {data:created,error:createError}=await sb.from('public_chat_room_state').insert({room_id:CHAT_ROOM_ID,key_version:1,owner_device_id:record.device_id,owner_user_id:session.user.id}).select('room_id,key_version,owner_device_id,owner_user_id').maybeSingle();
   if(!createError&&created)roomState=created;
   else{
    roomState=await fetchChatRoomState();
    if(!roomState)throw createError||new Error('Ruang enkripsi global belum dapat dibuat.');
    if(roomState.owner_device_id!==record.device_id){record.room_key=null;record.room_key_version=null;await saveChatCryptoRecord(record);}
   }
  }
  let roomKey=null;
  if(record.room_key&&Number(record.room_key_version)===Number(roomState.key_version))roomKey=record.room_key;
  else{
   roomKey=await findAndUnwrapChatRoomKey(roomState);
   if(!roomKey&&publicChatChannel){
    await publicChatChannel.send({type:'broadcast',event:'key-request',payload:{device_id:record.device_id,user_id:session.user.id,key_version:roomState.key_version}});
    for(let attempt=0;attempt<16&&!roomKey;attempt++){
     await new Promise(resolve=>setTimeout(resolve,500));
     roomKey=await findAndUnwrapChatRoomKey(roomState);
    }
   }
   if(!roomKey)throw new Error('Kunci E2EE belum tersedia. Perangkat anggota lama harus online sebentar untuk membagikan kunci ruang secara terenkripsi.');
   record.room_key=roomKey;record.room_key_version=roomState.key_version;await saveChatCryptoRecord(record);
  }
  chatCryptoRecord=record;chatE2EE={room_id:CHAT_ROOM_ID,key_version:roomState.key_version,room_key:roomKey};chatE2EEReady=true;
  showChatCryptoStatus(uiLang==='id'?'Terenkripsi end-to-end':'End-to-end encrypted',true);
  await shareChatRoomKeyWithRegisteredDevices();
  if($('#page-chat')?.classList.contains('active'))loadChatMessages({initial:!chatLoaded});
  return chatE2EE;
 })();
 try{return await chatE2EEInitPromise;}catch(error){chatE2EEReady=false;chatE2EE=null;showChatCryptoStatus(error.message||'Enkripsi gagal disiapkan');throw error;}finally{chatE2EEInitPromise=null;}
}
async function encryptChatMessage(plainText){
 if(!chatE2EEReady||!chatE2EE?.room_key)throw new Error('Enkripsi belum siap. Tunggu sampai status E2EE aktif.');
 const iv=crypto.getRandomValues(new Uint8Array(12));
 const encrypted=await crypto.subtle.encrypt({name:'AES-GCM',iv,additionalData:CHAT_E2EE_AAD},chatE2EE.room_key,chatEncoder.encode(plainText));
 const payload=`${CHAT_E2EE_PREFIX}${chatBytesToBase64(iv)}.${chatBytesToBase64(new Uint8Array(encrypted))}`;
 if(payload.length>7900)throw new Error('Pesan terlalu besar setelah dienkripsi. Kurangi panjang pesan.');
 return payload;
}
async function decodeChatMessageRow(row){
 if(!row?.body?.startsWith(CHAT_E2EE_PREFIX))return {...row,body:row?.body||'',e2ee:false};
 try{
  if(!chatE2EEReady||!chatE2EE?.room_key)throw new Error('Kunci perangkat belum tersedia.');
  const parts=row.body.slice(CHAT_E2EE_PREFIX.length).split('.');if(parts.length!==2)throw new Error('Format pesan terenkripsi tidak valid.');
  const plain=await crypto.subtle.decrypt({name:'AES-GCM',iv:chatBase64ToBytes(parts[0]),additionalData:CHAT_E2EE_AAD},chatE2EE.room_key,chatBase64ToBytes(parts[1]));
  return {...row,body:chatDecoder.decode(plain),e2ee:true};
 }catch(error){return {...row,body:'Pesan terenkripsi tidak dapat dibuka di perangkat ini.',e2ee:true,decryption_error:true};}
}
function chatCurrentUser(){
 const user=session?.user||{};
 return {user_id:user.id,username:profile?.username||user.user_metadata?.username||'',avatar_url:profile?.avatar_url?resolveProfileAssetUrl(profile.avatar_url):'',is_typing:false,updated_at:Date.now()};
}
function chatAvatarMarkup(user={},extra=''){
 const name=String(user.username||'Sora');const src=user.avatar_url?resolveProfileAssetUrl(user.avatar_url):'';
 return `<span class="chat-user-avatar ${extra}">${src?`<img src="${esc(src)}" alt="" loading="lazy" referrerpolicy="no-referrer" onerror="this.remove()">`:''}<span>${esc(name.slice(0,1).toUpperCase())}</span></span>`;
}
function chatBadgeMarkup(){return '';}
function chatTime(value){try{return new Intl.DateTimeFormat(dateLocale,{hour:'2-digit',minute:'2-digit'}).format(new Date(value));}catch{return '';}}
function chatDate(value){try{return new Intl.DateTimeFormat(dateLocale,{day:'numeric',month:'long',year:'numeric'}).format(new Date(value));}catch{return '';}}
function chatScrollToBottom(){const box=$('#chatMessages');if(box)requestAnimationFrame(()=>{box.scrollTop=box.scrollHeight;});}
function updateChatUnreadBadge(){const badge=$('#chatUnreadBadge');if(!badge)return;badge.classList.toggle('hidden',chatUnread<1);badge.textContent=chatUnread>9?'9+':String(chatUnread);}
function chatMessageMarkup(message,withDate=true){
 const own=message.user_id===session?.user?.id;const username=message.username?`@${message.username}`:'@user';
 const replyTarget=message.reply_to?chatMessages.find(item=>item.id===message.reply_to):null;
 const reply=message.reply_to?`<div class="chat-quoted-message"><small><i class="fa-solid fa-reply" aria-hidden="true"></i> ${esc(message.reply_to_name||'@user')}</small><span>${esc(replyTarget?.body||'Pesan sebelumnya')}</span></div>`:'';
 const body=esc(message.body||'').replace(/\n/g,'<br>');
 const legacyNote=message.e2ee?'':'<small class="chat-legacy-note">Pesan lama · tidak terenkripsi</small>';
 const decryptNote=message.decryption_error?'<small class="chat-decrypt-note">Perangkat ini belum memiliki kunci untuk pesan tersebut.</small>':'';
 const day=withDate?`<div class="chat-date-divider" data-chat-date="${esc(new Date(message.created_at).toISOString().slice(0,10))}"><span>${esc(chatDate(message.created_at))}</span></div>`:'';
 return `${day}<div class="chat-message-row ${own?'is-own':''}" data-message-id="${esc(message.id)}">
  ${chatAvatarMarkup(message,'chat-message-avatar')}
  <div class="chat-message-main"><div class="chat-message-meta"><strong>${esc(username)}</strong>${chatBadgeMarkup(message)}<time datetime="${esc(message.created_at)}">${chatTime(message.created_at)}</time></div>
   <div class="chat-bubble">${reply}<p>${body}</p>${legacyNote}${decryptNote}</div>
   <button class="chat-swipe-reply" type="button" data-reply-id="${esc(message.id)}" aria-label="Balas pesan ${esc(username)}"><i class="fa-solid fa-reply" aria-hidden="true"></i></button>
  </div>
 </div>`;
}
function renderChatMessages({scrollBottom=false,preserveScroll=false,oldHeight=0,oldTop=0}={}){
 const box=$('#chatMessages');if(!box)return;
 const sorted=[...chatMessages].sort((a,b)=>new Date(a.created_at)-new Date(b.created_at));
 if(!sorted.length){box.innerHTML=`<div class="chat-empty"><span><i class="fa-regular fa-comments" aria-hidden="true"></i></span><strong>${uiLang==='id'?'Belum ada percakapan':'No conversations yet'}</strong><p>${uiLang==='id'?'Jadilah orang pertama yang menyapa komunitas Garda OTP.':'Be the first to say hello to the Garda OTP community.'}</p></div>`;}
 else box.innerHTML=sorted.map(message=>chatMessageMarkup(message,true)).join('');
 const older=$('#chatLoadOlder');if(older)older.classList.toggle('hidden',!chatHasMore||!sorted.length);
 if(scrollBottom)chatScrollToBottom();else if(preserveScroll)requestAnimationFrame(()=>{box.scrollTop=oldTop+(box.scrollHeight-oldHeight);});
}
function appendChatMessage(message){
 const box=$('#chatMessages');if(!box||!message?.id)return;
 box.querySelector('.chat-empty')?.remove();
 const day=new Date(message.created_at).toISOString().slice(0,10);
 const lastDate=[...box.querySelectorAll('.chat-date-divider')].at(-1)?.dataset.chatDate;
 box.insertAdjacentHTML('beforeend',chatMessageMarkup(message,day!==lastDate));
}
function setChatReply(message){
 chatReplyTarget=message||null;const panel=$('#chatReplyPreview');if(!panel)return;
 panel.classList.toggle('hidden',!message);
 if(message){const username=message.username?`@${message.username}`:'@user';$('#chatReplyName').textContent=username;$('#chatReplyBody').textContent=String(message.body||'').slice(0,180);$('#chatInput').placeholder=uiLang==='id'?`Balas ${username}...`:`Reply to ${username}...`;$('#chatInput').focus();}
 else $('#chatInput').placeholder=uiLang==='id'?'Tulis pesan untuk komunitas...':'Write a message to the community...';
}
function addChatMessage(message,{own=false}={}){
 if(!message?.id||chatMessages.some(x=>x.id===message.id))return;
 const box=$('#chatMessages');const nearBottom=!box||box.scrollHeight-box.scrollTop-box.clientHeight<140;
 chatMessages.push(message);chatMessages.sort((a,b)=>new Date(a.created_at)-new Date(b.created_at));
 if(chatLoaded)appendChatMessage(message);else renderChatMessages({scrollBottom:own||nearBottom});
 if(own||nearBottom)chatScrollToBottom();
 if(!own&&$('#page-chat')&&!$('#page-chat').classList.contains('active')){chatUnread++;updateChatUnreadBadge();}
}
async function loadChatMessages({initial=false,older=false,silent=false}={}){
 if(!sb||!session?.access_token||chatLoading||!chatE2EEReady)return;
 if(!initial&&!older&&!chatLoaded)return;
 chatLoading=true;const box=$('#chatMessages');const oldHeight=box?.scrollHeight||0;const oldTop=box?.scrollTop||0;const nearBottom=!box||box.scrollHeight-box.scrollTop-box.clientHeight<140;
 try{
  let query=sb.from('public_chat_messages').select(CHAT_FIELDS).order('created_at',{ascending:false}).limit(CHAT_PAGE_SIZE);
  if(older&&chatMessages.length)query=query.lt('created_at',chatMessages[0].created_at);
  if(!older&&!initial&&chatMessages.length)query=query.gt('created_at',chatMessages[chatMessages.length-1].created_at);
  const {data,error}=await query;if(error)throw error;
  const rawRows=(data||[]).reverse();const rows=await Promise.all(rawRows.map(decodeChatMessageRow));
  if(initial||!chatLoaded){const liveRows=chatMessages;const byId=new Map([...rows,...liveRows].map(row=>[row.id,row]));chatMessages=[...byId.values()];chatMessages.sort((a,b)=>new Date(a.created_at)-new Date(b.created_at));chatHasMore=rows.length===CHAT_PAGE_SIZE;chatLoaded=true;renderChatMessages({scrollBottom:initial||nearBottom});}
  else if(older){chatMessages=[...rows,...chatMessages.filter(m=>!rows.some(r=>r.id===m.id))];chatMessages.sort((a,b)=>new Date(a.created_at)-new Date(b.created_at));chatHasMore=rows.length===CHAT_PAGE_SIZE;renderChatMessages({preserveScroll:true,oldHeight,oldTop});}
  else{
   const fresh=[];rows.forEach(row=>{if(!chatMessages.some(m=>m.id===row.id)){chatMessages.push(row);fresh.push(row);}});
   chatMessages.sort((a,b)=>new Date(a.created_at)-new Date(b.created_at));fresh.sort((a,b)=>new Date(a.created_at)-new Date(b.created_at));fresh.forEach(appendChatMessage);
   if(fresh.length&&nearBottom)chatScrollToBottom();
  }
 }catch(error){
  console.error('Public chat load error:',error);
  if(box&&!chatLoaded)box.innerHTML=`<div class="chat-setup-error"><i class="fa-solid fa-triangle-exclamation"></i><strong>Chat belum aktif</strong><p>${esc(error.message||'Tabel chat belum tersedia.')}</p><small>Pastikan file <b>sql/public-chat-e2ee-migration.sql</b> dan migrasi chat terbaru sudah dijalankan di Supabase SQL Editor.</small></div>`;
  else if(!silent)console.warn('Chat refresh failed:',error);
 }finally{chatLoading=false;}
}
function updateChatPresence(){
 if(!publicChatChannel)return;
 const raw=publicChatChannel.presenceState?.()||{};const all=Object.values(raw).flat();
 const byUser=new Map();all.forEach(item=>{if(item?.user_id)byUser.set(item.user_id,item);});
 const online=[...byUser.values()];$('#chatOnlineCount').textContent=uiLang==='id'?`${online.length} pengguna online`:`${online.length} users online`;
 const now=Date.now();const typing=online.filter(item=>item.user_id!==session?.user?.id&&item.is_typing&&now-Number(item.updated_at||0)<9000).slice(0,20);
 const row=$('#chatTypingIndicator');row.classList.toggle('hidden',typing.length===0);
 const avatars=$('#chatTypingAvatars');avatars.innerHTML=typing.slice(0,4).map(user=>chatAvatarMarkup(user,'chat-typing-avatar')).join('');
 const names=typing.slice(0,2).map(x=>x.username?`@${x.username}`:'@user');
 let label='';if(typing.length===1)label=uiLang==='id'?`${names[0]} sedang mengetik`:`${names[0]} is typing`;else if(typing.length===2)label=uiLang==='id'?`${names[0]} dan ${names[1]} sedang mengetik`:`${names[0]} and ${names[1]} are typing`;else label=uiLang==='id'?`${typing.length} orang sedang mengetik`:`${typing.length} people are typing`;
 $('#chatTypingText').textContent=label;
}
async function publishChatTyping(isTyping){
 if(!publicChatChannel||!session?.user?.id)return;
 try{await publicChatChannel.track({...chatCurrentUser(),is_typing:Boolean(isTyping),updated_at:Date.now()});chatTypingSent=Boolean(isTyping);}catch(error){console.warn('Chat typing presence error:',error);}
}
async function startPublicChatRealtime(){
 if(!sb||!session?.access_token)return;
 if(publicChatChannel){sb.removeChannel(publicChatChannel);publicChatChannel=null;}
 if(chatFallbackTimer)clearInterval(chatFallbackTimer);
 chatE2EEReady=false;chatE2EE=null;chatE2EEInitPromise=null;
 try{await sb.realtime.setAuth(session.access_token);await ensureChatDeviceIdentity();}
 catch(error){console.error('Chat E2EE device setup failed:',error);showChatCryptoStatus(error.message||'Enkripsi gagal disiapkan');return;}
 publicChatChannel=sb.channel('public-chat:global',{config:{private:true,presence:{key:session.user.id}}})
  .on('postgres_changes',{event:'INSERT',schema:'public',table:'public_chat_messages'},async payload=>{
   if(!chatE2EEReady)return;
   const decoded=await decodeChatMessageRow(payload.new);const own=payload.new?.user_id===session?.user?.id;addChatMessage(decoded,{own});
  })
  .on('broadcast',{event:'key-request'},async({payload})=>{
   if(payload?.device_id&&payload.device_id!==chatCryptoRecord?.device_id&&chatE2EEReady){
    const {data:device,error}=await sb.from('public_chat_devices').select('device_id,user_id,public_key').eq('device_id',payload.device_id).maybeSingle();
    if(!error&&device)await shareChatRoomKeyWithDevice(device);
   }
  })
  .on('presence',{event:'sync'},updateChatPresence)
  .on('presence',{event:'join'},updateChatPresence)
  .on('presence',{event:'leave'},updateChatPresence)
  .subscribe(async status=>{
   const label=$('#chatConnectionStatus');
   if(status==='SUBSCRIBED'){
    label?.classList.add('is-connected');
    await publishChatTyping(false);updateChatPresence();
    try{await initializeChatE2EE();}
    catch(error){console.error('Public chat E2EE initialization failed:',error);showChatCryptoStatus(error.message||'Enkripsi gagal disiapkan');const box=$('#chatMessages');if(box&&!chatLoaded)box.innerHTML=`<div class="chat-setup-error"><i class="fa-solid fa-lock"></i><strong>Enkripsi belum siap</strong><p>${esc(error.message||'Kunci enkripsi belum tersedia.')}</p><small>Pastikan setidaknya satu perangkat anggota lama masih memiliki kunci dan sedang online, lalu muat ulang halaman ini.</small></div>`;}
   }else if(status==='CHANNEL_ERROR'||status==='TIMED_OUT'||status==='CLOSED'){
    label?.classList.remove('is-connected');
   }
  });
 chatFallbackTimer=setInterval(()=>{if(session?.access_token&&chatLoaded&&chatE2EEReady)loadChatMessages({silent:true});},20000);
}
function resetPublicChatState(){
 chatMessages=[];chatLoaded=false;chatHasMore=true;chatUnread=0;chatReplyTarget=null;chatLoading=false;chatSending=false;chatE2EEReady=false;chatE2EE=null;chatCryptoRecord=null;chatE2EEInitPromise=null;showChatCryptoStatus('Enkripsi belum aktif');updateChatUnreadBadge();
 const input=$('#chatInput');if(input){input.value='';input.style.height='auto';}$('#chatReplyPreview')?.classList.add('hidden');
 const list=$('#chatMessages');if(list)list.innerHTML=`<div class="chat-empty"><span><i class="fa-regular fa-comments" aria-hidden="true"></i></span><strong>${uiLang==='id'?'Belum ada percakapan':'No conversations yet'}</strong><p>${uiLang==='id'?'Jadilah orang pertama yang menyapa komunitas Garda OTP.':'Be the first to say hello to the Garda OTP community.'}</p></div>`;
}
function stopPublicChatRealtime(){
 if(chatFallbackTimer)clearInterval(chatFallbackTimer);chatFallbackTimer=null;
 if(chatTypingTimer)clearTimeout(chatTypingTimer);chatTypingTimer=null;chatTypingSent=false;
 if(publicChatChannel&&sb)sb.removeChannel(publicChatChannel);publicChatChannel=null;
 $('#chatTypingIndicator')?.classList.add('hidden');
}
async function sendPublicChatMessage(){
 const input=$('#chatInput');const body=input.value.trim();if(!body||chatSending||!session?.access_token)return;if(!chatEnabled)return alertError('Chat Public sedang tidak tersedia.');
 if(body.length>1200){alertError('Pesan maksimal 1.200 karakter.');return;}
 if(!chatE2EEReady){alertError('Enkripsi end-to-end belum siap. Pesan tidak dikirim dalam bentuk teks biasa.');return;}
 chatSending=true;$('#chatSendButton').disabled=true;$('#chatSendButton').classList.add('is-sending');
 try{
  const encryptedBody=await encryptChatMessage(body);
  const payload={user_id:session.user.id,body:encryptedBody};if(chatReplyTarget?.id)payload.reply_to=chatReplyTarget.id;
  const {data,error}=await sb.from('public_chat_messages').insert(payload).select(CHAT_FIELDS).single();if(error)throw error;
  const decoded=await decodeChatMessageRow(data);
  input.value='';input.style.height='auto';setChatReply(null);await publishChatTyping(false);addChatMessage(decoded,{own:true});
 }catch(error){console.error('Public chat send error:',error);alertError(error.message||'Pesan belum berhasil dikirim.');}
 finally{chatSending=false;$('#chatSendButton').classList.remove('is-sending');$('#chatSendButton').disabled=!chatE2EEReady||!input.value.trim();input.focus();}
}
$('#chatComposer').addEventListener('submit',event=>{event.preventDefault();sendPublicChatMessage();});
$('#chatInput').addEventListener('input',event=>{
 const input=event.currentTarget;input.style.height='auto';input.style.height=`${Math.min(input.scrollHeight,116)}px`;
 $('#chatSendButton').disabled=!chatE2EEReady||!input.value.trim()||chatSending;
 if(chatTypingTimer)clearTimeout(chatTypingTimer);
 if(input.value.trim()){if(!chatTypingSent)publishChatTyping(true);chatTypingTimer=setTimeout(()=>publishChatTyping(false),2200);}else publishChatTyping(false);
});
$('#chatInput').addEventListener('keydown',event=>{if(event.key==='Enter'&&!event.shiftKey&&!event.isComposing){event.preventDefault();if(!$('#chatSendButton').disabled)sendPublicChatMessage();}});
let chatSwipeState=null;
$('#chatMessages').addEventListener('pointerdown',event=>{
 const bubble=event.target.closest('.chat-bubble');if(!bubble||event.button!==0)return;
 const row=bubble.closest('.chat-message-row');if(!row)return;
 chatSwipeState={row,bubble,pointerId:event.pointerId,startX:event.clientX,startY:event.clientY,delta:0};
});
$('#chatMessages').addEventListener('pointermove',event=>{
 if(!chatSwipeState||chatSwipeState.pointerId!==event.pointerId)return;
 const dx=event.clientX-chatSwipeState.startX,dy=event.clientY-chatSwipeState.startY;
 if(Math.abs(dy)>Math.abs(dx)*1.25){chatSwipeState=null;return;}
 chatSwipeState.delta=Math.max(-68,Math.min(68,dx));
 chatSwipeState.bubble.style.transform=`translateX(${chatSwipeState.delta}px)`;
});
function finishChatSwipe(event){
 if(!chatSwipeState||chatSwipeState.pointerId!==event.pointerId)return;
 const state=chatSwipeState;chatSwipeState=null;state.bubble.style.transform='';
 if(Math.abs(state.delta)>=44){
  $$('.chat-message-row.is-reply-revealed').forEach(row=>row.classList.remove('is-reply-revealed'));
  state.row.classList.add('is-reply-revealed');
  state.row.querySelector('.chat-swipe-reply')?.focus({preventScroll:true});
 }
}
$('#chatMessages').addEventListener('pointerup',finishChatSwipe);
$('#chatMessages').addEventListener('pointercancel',finishChatSwipe);
$('#chatMessages').addEventListener('click',event=>{
 const button=event.target.closest('[data-reply-id]');if(!button)return;
 const target=chatMessages.find(message=>message.id===button.dataset.replyId);
 if(target){setChatReply(target);button.closest('.chat-message-row')?.classList.remove('is-reply-revealed');}
});
$('#chatCancelReply').addEventListener('click',()=>setChatReply(null));
$('#chatLoadOlder').addEventListener('click',()=>loadChatMessages({older:true}));

async function refreshProfile(){try{const d=await api('dashboard');profile=d.profile;$('#topupBalance').textContent=money(profile.balance);$('#homeBalance').textContent=money(profile.balance);}catch(e){console.error(e);}}
function applyWebsiteSettings(settings={}){
 chatEnabled=true;
 const banner=$('#siteAnnouncement');
 const announcement=String(settings.announcement||'').trim();
 if(banner){banner.textContent=announcement;banner.classList.toggle('hidden',!announcement);}
 if(!chatEnabled){$('#chatInput').placeholder='Chat Public sedang dinonaktifkan.';$('#chatInput').disabled=true;$('#chatSendButton').disabled=true;}
 else if(chatE2EEReady){showChatCryptoStatus('Enkripsi end-to-end aktif',true);}
}
async function loadDashboard(){
 try{const d=await api('dashboard');profile=d.profile;applyWebsiteSettings(d.websiteSettings||{});$('#homeBalance').textContent=money(profile.balance);$('#topupBalance').textContent=money(profile.balance);$('#globalOrders').textContent=Number(d.totalOrders||0).toLocaleString(uiLang==='id'?'id-ID':'en-US');$('#leaderboard').innerHTML=(d.leaderboard||[]).length?d.leaderboard.map((r,i)=>leaderRow([r.display_name,r.total_deposit,r.total_order_value],i)).join(''):`<div class="empty-state">${tr('Belum ada data deposit.')}</div>`;updateWelcome();localize($('#leaderboard')); }catch(e){$('#leaderboard').innerHTML=`<div class="empty-state">${esc(e.message)}</div>`;if(e.status===503&&/pemeliharaan/i.test(e.message)){const banner=$('#siteAnnouncement');if(banner){banner.textContent=e.message;banner.classList.remove('hidden');}}}
}
function leaderRow(r,i){return `<div class="leader-row"><div class="leader-user"><span class="rank ${i<3?'top':''}">${i+1}</span><span>${esc(r[0])}</span></div><strong>${money(r[1])}</strong><strong class="value-muted">${money(r[2])}</strong></div>`;}
function updateWelcome(){const title=$('#welcomeTitle');if(!title)return;const name=profile?.display_name||session?.user?.user_metadata?.display_name||session?.user?.email?.split('@')[0]|| (uiLang==='id'?'Pengguna':'User');title.textContent=`${uiLang==='id'?'Selamat datang':'Welcome'}, ${name}`;}
function resolveProfileAssetUrl(value){
 const raw=String(value||'').trim();
 if(!raw)return '';
 if(raw.startsWith('https://')||raw.startsWith('http://')||raw.startsWith('blob:')||raw.startsWith('data:'))return raw;
 let clean=raw;
 while(clean.startsWith('/'))clean=clean.slice(1);
 if(clean.startsWith('profile-assets/'))clean=clean.slice('profile-assets/'.length);
 const {data}=sb.storage.from('profile-assets').getPublicUrl(clean);
 return data?.publicUrl||'';
}
function renderProfile(){const name=profile?.display_name||session?.user?.user_metadata?.display_name||session?.user?.email?.split('@')[0]||'Pengguna';$('#profileName').textContent=name;
 $('#profileEmail').textContent=session?.user?.email||'';
 const username=profile?.username||session?.user?.user_metadata?.username||'';
 const usernameLabel=username?`@${username}`:'Username belum diatur';
 $('#profileUsername').innerHTML=`${esc(usernameLabel)} ${username?chatBadgeMarkup(profile||{}):''}`;
 const initial=name.trim().slice(0,1).toUpperCase()||'S';
 $('#profileAvatarFallback').textContent=initial;
 const avatarImage=$('#profileAvatarImage');
 if(profile?.avatar_url){avatarImage.src=resolveProfileAssetUrl(profile.avatar_url);avatarImage.classList.remove('hidden');$('#profileAvatarFallback').classList.add('hidden');}
 else{avatarImage.removeAttribute('src');avatarImage.classList.add('hidden');$('#profileAvatarFallback').classList.remove('hidden');}
 const banner=$('#profileBanner');
 const bannerImage=$('#profileBannerImage');
 if(profile?.banner_url){
  bannerImage.onload=()=>{banner.classList.add('has-custom-banner');bannerImage.classList.remove('hidden');};
  bannerImage.onerror=()=>{banner.classList.remove('has-custom-banner');bannerImage.classList.add('hidden');console.error('Banner profil gagal dimuat:',profile.banner_url);};
  bannerImage.src=resolveProfileAssetUrl(profile.banner_url);
 }else{bannerImage.removeAttribute('src');bannerImage.classList.add('hidden');banner.classList.remove('has-custom-banner');}
 $('#headerAvatar').innerHTML=profile?.avatar_url?`<img src="${esc(resolveProfileAssetUrl(profile.avatar_url))}" alt="">`:esc(initial);

 updateWelcome();localize($('#page-profile'));}
let pendingAvatarFile=null,pendingBannerFile=null,avatarObjectUrl=null,bannerObjectUrl=null;
function profileInitial(){const name=profile?.display_name||session?.user?.email?.split('@')[0]||'Sora';return name.trim().slice(0,1).toUpperCase()||'S';}
function paintEditorPreview(){
 const name=$('#displayNameInput').value.trim()||'Nama kamu';
 $('#editorNamePreview').textContent=name;
 const username=profile?.username||session?.user?.user_metadata?.username||'';
 const usernameLabel=username?`@${username}`:'Username belum diatur';
 $('#editorUsernamePreview').innerHTML=`${esc(usernameLabel)} ${username?chatBadgeMarkup(profile||{}):''}`;
 const avatarSrc=avatarObjectUrl||(profile?.avatar_url?resolveProfileAssetUrl(profile.avatar_url):'');
 if(avatarSrc){$('#editorAvatarImage').src=avatarSrc;$('#editorAvatarImage').classList.remove('hidden');$('#editorAvatarFallback').classList.add('hidden');}
 else{$('#editorAvatarImage').removeAttribute('src');$('#editorAvatarImage').classList.add('hidden');$('#editorAvatarFallback').textContent=name.slice(0,1).toUpperCase();$('#editorAvatarFallback').classList.remove('hidden');}
 const banner=$('#editorBannerPreview');
 const bannerImage=$('#editorBannerPreviewImage');
 const bannerSrc=bannerObjectUrl||(profile?.banner_url?resolveProfileAssetUrl(profile.banner_url):'');
 if(bannerSrc){
  bannerImage.onload=()=>{banner.classList.add('has-custom-banner');bannerImage.classList.remove('hidden');};
  bannerImage.onerror=()=>{banner.classList.remove('has-custom-banner');bannerImage.classList.add('hidden');};
  bannerImage.src=bannerSrc;
 }else{bannerImage.removeAttribute('src');bannerImage.classList.add('hidden');banner.classList.remove('has-custom-banner');}
}
function populateProfileEditor(){
 $('#displayNameInput').value=profile?.display_name||session?.user?.user_metadata?.display_name||session?.user?.email?.split('@')[0]||'';
 $('#usernameInput').value=profile?.username||session?.user?.user_metadata?.username||'';
 pendingAvatarFile=null;pendingBannerFile=null;
 if(avatarObjectUrl)URL.revokeObjectURL(avatarObjectUrl);if(bannerObjectUrl)URL.revokeObjectURL(bannerObjectUrl);
 avatarObjectUrl=null;bannerObjectUrl=null;
 $('#avatarUpload').value='';$('#bannerUpload').value='';paintEditorPreview();
}
async function cropBanner16x9(file){
 const imageUrl=URL.createObjectURL(file);
 const image=await new Promise((resolve,reject)=>{const img=new Image();img.onload=()=>resolve(img);img.onerror=reject;img.src=imageUrl;});
 URL.revokeObjectURL(imageUrl);
 const targetRatio=16/9,sourceRatio=image.width/image.height;let sx=0,sy=0,sw=image.width,sh=image.height;
 if(sourceRatio>targetRatio){sw=image.height*targetRatio;sx=(image.width-sw)/2;}else{sh=image.width/targetRatio;sy=(image.height-sh)/2;}
 const canvas=document.createElement('canvas');canvas.width=1600;canvas.height=900;const ctx=canvas.getContext('2d');ctx.drawImage(image,sx,sy,sw,sh,0,0,1600,900);
 const blob=await new Promise(resolve=>canvas.toBlob(resolve,'image/jpeg',.88));if(!blob)throw new Error('Canvas export failed');return new File([blob],`banner-${Date.now()}.jpg`,{type:'image/jpeg'});
}
async function handleProfileImageInput(input,type){
 const file=input.files?.[0];if(!file)return;
 if(!['image/png','image/jpeg','image/webp'].includes(file.type)){input.value='';return alertError('Format gambar harus PNG, JPG, atau WebP.');}
 if(file.size>4*1024*1024){input.value='';return alertError('Ukuran gambar maksimal 4 MB.');}
 let selectedFile=file;
 if(type==='banner'){try{selectedFile=await cropBanner16x9(file);}catch(error){input.value='';return alertError('Banner tidak dapat diproses. Coba gambar lain.');}}
 const url=URL.createObjectURL(selectedFile);
 if(type==='avatar'){pendingAvatarFile=file;if(avatarObjectUrl)URL.revokeObjectURL(avatarObjectUrl);avatarObjectUrl=url;}
 else{pendingBannerFile=selectedFile;if(bannerObjectUrl)URL.revokeObjectURL(bannerObjectUrl);bannerObjectUrl=url;}
 paintEditorPreview();
}
$('#editProfileButton').addEventListener('click',()=>setPage('edit-profile'));
$('#cancelProfileEdit').addEventListener('click',()=>setPage('profile'));
$('#displayNameInput').addEventListener('input',paintEditorPreview);
$('#avatarUpload').addEventListener('change',e=>handleProfileImageInput(e.currentTarget,'avatar'));
$('#bannerUpload').addEventListener('change',e=>handleProfileImageInput(e.currentTarget,'banner'));
async function uploadProfileImage(file,kind){
 const ext=file.type==='image/png'?'png':file.type==='image/webp'?'webp':'jpg';
 const path=`${session.user.id}/${kind}/${crypto.randomUUID()}.${ext}`;
 const {data,error}=await sb.storage.from('profile-assets').upload(path,file,{upsert:false,cacheControl:'3600',contentType:file.type});
 if(error){
  const detail=String(error.message||'');
  if(/bucket.*not found|not found/i.test(detail))throw new Error('Bucket profile-assets belum tersedia. Jalankan SQL profile-verification-storage-fix.sql di Supabase SQL Editor.');
  if(/row-level security|permission|not authorized|403/i.test(detail))throw new Error('Supabase Storage menolak upload. Jalankan SQL profile-verification-storage-fix.sql dan pastikan pengguna sudah login ulang.');
  throw new Error(`Upload ${kind==='avatar'?'foto profil':'banner'} gagal: ${detail||'kesalahan Storage'}`);
 }
 if(!data?.path)throw new Error('Upload selesai tetapi lokasi file dari Supabase tidak diterima.');
 return data.path;
}
$('#editProfileForm').addEventListener('submit',async e=>{
 e.preventDefault();if(!sb||!session?.user?.id)return alertError('Sesi login tidak ditemukan. Silakan masuk kembali.');
 const displayName=$('#displayNameInput').value.trim();
 const username=$('#usernameInput').value.trim().toLowerCase();
 if(!displayName||displayName.length>32)return alertError('Nama tampilan wajib diisi dan maksimal 32 karakter.');
 if(!/^[a-z0-9]{3,20}$/.test(username))return alertError('Username harus 3–20 karakter, hanya huruf kecil dan angka.');
 const button=$('#saveProfileButton');button.disabled=true;button.setAttribute('aria-busy','true');
 try{
  const {data:available,error:availabilityError}=await sb.rpc('username_available_for_current_user',{p_username:username});
  if(availabilityError)throw availabilityError;
  if(available!==true)throw new Error('Username sudah digunakan. Silakan pilih username lain.');
  const changes={display_name:displayName,username};
  if(pendingAvatarFile)changes.avatar_url=await uploadProfileImage(pendingAvatarFile,'avatar');
  if(pendingBannerFile)changes.banner_url=await uploadProfileImage(pendingBannerFile,'banner');
  const {data:savedProfile,error}=await sb.from('profiles').update(changes).eq('id',session.user.id).select('id,display_name,username,avatar_url,banner_url').maybeSingle();
  if(error)throw error;
  if(!savedProfile)throw new Error('Data profil tidak ditemukan. Pastikan baris profiles untuk akun ini sudah dibuat.');
  const refreshed=await api('dashboard');profile=refreshed.profile;renderProfile();
  if(avatarObjectUrl)URL.revokeObjectURL(avatarObjectUrl);if(bannerObjectUrl)URL.revokeObjectURL(bannerObjectUrl);avatarObjectUrl=null;bannerObjectUrl=null;pendingAvatarFile=null;pendingBannerFile=null;
  await Swal.fire({icon:'success',title:'Profile diperbarui',text:'Perubahan nama, username, foto profil, dan banner sudah disimpan.'});setPage('profile');
 }catch(error){console.error('Profile update failed:',error);const detail=String(error.message||'');if(/permission denied|not allowed|42501/i.test(detail))alertError('Database menolak perubahan profil. Jalankan SQL profile-verification-storage-fix.sql setelah semua migrasi keamanan agar izin update username, avatar_url, dan banner_url dipulihkan.');else alertError(detail||'Profil gagal diperbarui. Periksa bucket dan policy Supabase Storage.');}
 finally{button.disabled=false;button.removeAttribute('aria-busy');}
});
$('#logoutButton').addEventListener('click',async()=>{stopLeaderboardRealtime();if(otpPollTimer){clearTimeout(otpPollTimer);otpPollTimer=null;}if(sb)await sb.auth.signOut();session=null;showLanding();});

async function loadCatalog(){
 if(catalogLoaded){renderServices();return;}
 $('#serviceGrid').innerHTML=`<div class="loading-card glass">${tr('Memuat katalog layanan live...')}</div>`;
 try{
  const d=await api('catalog');
  const upstream=Array.isArray(d.data)?d.data:(Array.isArray(d.data?.data)?d.data.data:(Array.isArray(d.data?.services)?d.data.services:[]));
  services=upstream.filter(row=>serviceLogoFile(serviceDisplayName(row.name||row.service_name||''))).slice(0,31);
  popularServices=Array.isArray(d.popular)?d.popular:[];
  popularCountById=new Map(popularServices.map(x=>[String(x.service_id),Number(x.order_count||0)]));
  catalogLoaded=true;renderServices();localize($('#page-buy'));
 }catch(e){$('#serviceGrid').innerHTML=`<div class="loading-card glass">${esc(e.message)}</div>`;}
}
function renderServices(){
 const q=$('#serviceSearch').value.trim().toLowerCase();
 const sorted=services.slice().sort((a,b)=>{
  const aId=String(a.id),bId=String(b.id),aCount=popularCountById.get(aId)||0,bCount=popularCountById.get(bId)||0;
  if(aCount!==bCount)return bCount-aCount;
  return String(serviceDisplayName(a.name||a.service_name)).localeCompare(String(serviceDisplayName(b.name||b.service_name)));
 });
 const list=sorted.filter(s=>serviceDisplayName(s.name||s.service_name).toLowerCase().includes(q)||String(s.name||s.service_name||'').toLowerCase().includes(q)||String(s.slug||'').toLowerCase().includes(q));
 const visible=showAllServices||q?list:list.slice(0,6);
 const grid=$('#serviceGrid');
 grid.classList.toggle('is-list',showAllServices||Boolean(q));
 grid.innerHTML=visible.length?visible.map(s=>{
  const name=serviceDisplayName(s.name||s.service_name)||String(s.name||s.service_name||'');
  const logo=serviceLogoFile(name);
  return `<button type="button" class="service-card ${String(selectedService?.id)===String(s.id)?'selected':''}" data-service="${esc(s.id)}" aria-pressed="${String(selectedService?.id)===String(s.id)}"><span class="service-logo"><img src="/assets/service-logos/${esc(logo)}" alt="${esc(name)}" loading="lazy" decoding="async"></span><span class="service-meta"><b>${esc(name)}</b></span></button>`;
 }).join(''):`<div class="loading-card glass">${tr('Layanan tidak ditemukan.')}</div>`;
 $$('[data-service]').forEach(b=>b.addEventListener('click',()=>chooseService(b.dataset.service)));
 const toggle=$('#toggleAllServices');
 if(toggle){toggle.classList.toggle('hidden',!list.length||Boolean(q)||list.length<=6);toggle.textContent=showAllServices?'Tampilkan 6':'Lihat Semua';toggle.setAttribute('aria-expanded',String(showAllServices));}
 localize(grid);
}
$('#serviceSearch').addEventListener('input',()=>renderServices());
$('#toggleAllServices').addEventListener('click',()=>{showAllServices=!showAllServices;renderServices();});
async function chooseService(id){selectedService=services.find(s=>String(s.id)===String(id));selectedOffer=null;renderServices();updateSummary();await loadCountries();}
function renderCountryDropdown(){
 const list=$('#countryDropdownList'),button=$('#countryDropdownButton'),label=$('#countryDropdownLabel'),flag=$('#countryDropdownFlag');
 button.disabled=!countries.length;
 const selected=selectedCountryInfo();
 label.textContent=selected?selected.name:tr(countries.length?'Pilih negara...':'Pilih aplikasi terlebih dahulu');
 if(flag)flag.textContent=selected?countryFlag(selected):'🌐';
 list.innerHTML=countries.map(c=>{
  const code=String(c.country_code??c.code??c.id??'');
  const name=String(c.name??c.country_name??c.title??code);
  const selectedOption=String(selectedCountry??'')===code;
  return `<button type="button" class="country-option ${selectedOption?'selected':''}" role="option" aria-selected="${selectedOption}" data-country-code="${esc(code)}"><span class="country-flag" aria-hidden="true">${esc(countryFlag(c))}</span><span>${esc(name)}</span>${selectedOption?'<i class="fa-solid fa-check" aria-hidden="true"></i>':''}</button>`;
 }).join('');
 list.querySelectorAll('[data-country-code]').forEach(option=>option.addEventListener('click',async()=>{
  selectedCountry=option.dataset.countryCode;$('#countrySelect').value=selectedCountry;list.classList.add('hidden');button.setAttribute('aria-expanded','false');renderCountryDropdown();selectedOffer=null;await loadOffers();updateSummary();
 }));
 localize(list);
}
$('#countryDropdownButton').addEventListener('click',()=>{const list=$('#countryDropdownList');const opening=list.classList.contains('hidden');list.classList.toggle('hidden',!opening);$('#countryDropdownButton').setAttribute('aria-expanded',String(opening));});
document.addEventListener('click',e=>{if(!e.target.closest('.country-dropdown-wrap')){$('#countryDropdownList')?.classList.add('hidden');$('#countryDropdownButton')?.setAttribute('aria-expanded','false');}});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){$('#countryDropdownList')?.classList.add('hidden');$('#countryDropdownButton')?.setAttribute('aria-expanded','false');}});
function applyCountryRows(rows,preserveCountry=null){
 countries=(Array.isArray(rows)?rows:[]).slice().sort((a,b)=>(a.name||a.country_name||'').localeCompare(b.name||b.country_name||''));
 const select=$('#countrySelect');
 select.innerHTML='<option value=""></option>'+countries.map(c=>{const code=c.country_code??c.code??c.id;return `<option value="${esc(code)}">${esc(c.name??c.country_name??c.title??code)}</option>`;}).join('');
 selectedCountry=null;
 if(preserveCountry){
  const previousName=normalizeCountryName(preserveCountry.name),previousCode=String(preserveCountry.code||'');
  const match=countries.find(c=>normalizeCountryName(c.name??c.country_name??c.title??'')===previousName)||countries.find(c=>String(c.country_code??c.code??c.id??'')===previousCode);
  if(match){selectedCountry=String(match.country_code??match.code??match.id??'');select.value=selectedCountry;}
 }
 renderCountryDropdown();
}
async function loadCountries({preserveCountry=null}={}){
 const requestId=++countryLoadGeneration;
 const select=$('#countrySelect');
 select.innerHTML='<option value=""></option>';
 $('#offerList').innerHTML=`<div class="empty-state">${tr('Pilih negara untuk melihat penawaran server.')}</div>`;
 countries=[];selectedCountry=null;selectedOffer=null;offers=[];renderCountryDropdown();updateSummary();
 if(!selectedService)return;
 const key=`${String(selectedService.id)}:${provider}`;
 const cachedMemory=countryCacheMemory.get(key);
 let cached=cachedMemory&&Date.now()-cachedMemory.savedAt<COUNTRY_CACHE_TTL?cachedMemory.data:null;
 if(!cached){
  try{const saved=JSON.parse(localStorage.getItem('sora_country_cache_v1')||'{}');const item=saved[key];if(item&&Array.isArray(item.data)&&Date.now()-item.savedAt<COUNTRY_CACHE_TTL)cached=item.data;}catch{}
 }
 if(cached){applyCountryRows(cached,preserveCountry);if(selectedCountry)loadOffers();}
 else $('#countryDropdownLabel').textContent=uiLang==='id'?'Memuat negara...':'Loading countries...';
 try{
  const d=await api(`offers?resource=countries&service_id=${encodeURIComponent(selectedService.id)}&provider=${provider}`);
  if(requestId!==countryLoadGeneration||key!==`${String(selectedService?.id)}:${provider}`)return;
  const data=Array.isArray(d.data)?d.data:(Array.isArray(d.data?.data)?d.data.data:(Array.isArray(d.data?.countries)?d.data.countries:[]));
  countryCacheMemory.set(key,{data,savedAt:Date.now()});
  try{const saved=JSON.parse(localStorage.getItem('sora_country_cache_v1')||'{}');saved[key]={data,savedAt:Date.now()};const entries=Object.entries(saved).sort((a,b)=>b[1].savedAt-a[1].savedAt).slice(0,40);localStorage.setItem('sora_country_cache_v1',JSON.stringify(Object.fromEntries(entries)));}catch{}
  const previous=selectedCountryInfo()||preserveCountry;
  applyCountryRows(data,previous);
  if(selectedCountry)await loadOffers();
  else $('#offerList').innerHTML=`<div class="empty-state">${tr('Pilih negara untuk melihat penawaran server.')}</div>`;
 }catch(e){
  if(requestId!==countryLoadGeneration||key!==`${String(selectedService?.id)}:${provider}`)return;
  if(!cached){$('#countryDropdownLabel').textContent=uiLang==='id'?'Gagal memuat negara':'Could not load countries';alertError(e.message);}
  else console.warn('Country cache kept after refresh error:',e.message);
 }
 updateSummary();
}
$$('.provider-tab').forEach(b=>b.addEventListener('click',async()=>{
 if(b.dataset.provider===provider)return;
 $$('.provider-tab').forEach(x=>x.classList.toggle('active',x===b));
 const previousCountry=selectedCountryInfo();
 provider=b.dataset.provider;
 // Keep the selected service. Country is rematched by display name because provider country codes differ.
 if(selectedService)await loadCountries({preserveCountry:previousCountry});
 updateSummary();
}));
async function loadOffers(){if(!selectedService||!selectedCountry)return;$('#offerList').innerHTML=`<div class="empty-state">${tr('Memuat penawaran...')}</div>`;try{const d=await api(`offers?service_id=${encodeURIComponent(selectedService.id)}&provider=${provider}&country_code=${encodeURIComponent(selectedCountry)}`);const data=Array.isArray(d.data)?d.data:(d.data?.data||[]);offers=data;renderOffers();}catch(e){offers=[];$('#offerList').innerHTML=`<div class="empty-state">${esc(e.message)}</div>`;}localize($('#offerList'));}
function renderOffers(){$('#offerList').innerHTML=offers.length?offers.map((o,i)=>`<label class="offer-row ${selectedOffer?.provider_id===o.provider_id?'selected':''}"><span><b>${esc(o.server_label||`Server ${i+1}`)} ${o.recommended?'<i class="fa-solid fa-star offer-recommended-icon" aria-label="Recommended"></i>':''}</b><small>${esc(o.provider_id||'')}</small></span><span class="offer-stock">${Number(o.stock||0)} stok</span><span class="offer-price">${money(o.price)}</span><input type="radio" name="offer" value="${i}" ${selectedOffer?.provider_id===o.provider_id?'checked':''} ${Number(o.stock||0)<=0?'disabled':''}></label>`).join(''):'<div class="empty-state">Tidak ada server tersedia untuk pilihan ini.</div>';
 $$('.offer-row').forEach((row,i)=>row.addEventListener('click',()=>{if(Number(offers[i].stock||0)<=0)return;selectedOffer=offers[i];renderOffers();updateSummary();}));localize($('#offerList'));}
function updateSummary(){const price=Number(selectedOffer?.price||0),balance=Number(profile?.balance||0);$('#orderTotal').textContent=money(price);$('#balanceAfter').textContent=money(balance-price);$('#buyButton').disabled=!(selectedService&&selectedCountry&&selectedOffer&&price>0);}
$('#buyButton').addEventListener('click',async()=>{if(!selectedOffer)return;const price=Number(selectedOffer.price);if(Number(profile?.balance||0)<price){await Swal.fire({icon:'warning',title:'Saldo Anda Kurang',text:'Silakan top up saldo terlebih dahulu untuk melanjutkan pembelian.',showCancelButton:true,confirmButtonText:'Topup sekarang',cancelButtonText:'Nanti'}).then(r=>{if(r.isConfirmed)setPage('topup');});return;}
 const confirm=await Swal.fire({title:'Konfirmasi pembelian',html:`<div style="text-align:left">${esc(selectedService.name)}<br>${esc(selectedOffer.server_label||provider)}<br><b>${money(price)}</b></div>`,showCancelButton:true,confirmButtonText:'Beli nomor',cancelButtonText:'Batal'});if(!confirm.isConfirmed)return;$('#buyButton').disabled=true;try{const result=await api('order',{method:'POST',body:JSON.stringify({service_id:selectedService.id,service_name:selectedService.name,provider,country_code:selectedCountry,provider_id:selectedOffer.provider_id,quoted_price:price})});await refreshProfile();updateSummary();currentOrderId=result.custom_order_id||result.order?.custom_order_id||null;currentOrderCreatedAt=Date.now();if(!currentOrderId)throw new Error('Pesanan dibuat tetapi ID belum diterima. Periksa menu Riwayat sebelum mencoba membeli lagi.');sessionStorage.setItem('sora_active_order_id',currentOrderId);setPage('otp');}catch(e){if(e.status===402||e.message.includes('Saldo Anda Kurang')){await Swal.fire({icon:'warning',title:'Saldo Anda Kurang',text:'Saldo tidak cukup untuk pembelian ini.',showCancelButton:true,confirmButtonText:'Topup',cancelButtonText:'Tutup'}).then(r=>{if(r.isConfirmed)setPage('topup');});}else alertError(e.message);}finally{$('#buyButton').disabled=!(selectedOffer&&selectedService&&selectedCountry);}});

let pendingTopupRequestKey=sessionStorage.getItem('sora_topup_request_key')||null;
if(pendingTopupRequestKey){selectedAmount=Number(sessionStorage.getItem('sora_topup_amount')||0);$$('[data-amount]').forEach(b=>b.classList.toggle('selected',Number(b.dataset.amount)===selectedAmount));$('#topupButton').disabled=!selectedAmount;}
$$('[data-amount]').forEach(b=>b.addEventListener('click',()=>{$$('[data-amount]').forEach(x=>x.classList.toggle('selected',x===b));const nextAmount=Number(b.dataset.amount);if(nextAmount!==selectedAmount){pendingTopupRequestKey=null;sessionStorage.removeItem('sora_topup_request_key');}selectedAmount=nextAmount;sessionStorage.setItem('sora_topup_amount',String(selectedAmount));$('#topupButton').disabled=false;}));
$('#topupButton').addEventListener('click',async()=>{if(!selectedAmount)return;$('#topupButton').disabled=true;try{if(!pendingTopupRequestKey){pendingTopupRequestKey=crypto.randomUUID();sessionStorage.setItem('sora_topup_request_key',pendingTopupRequestKey);sessionStorage.setItem('sora_topup_amount',String(selectedAmount));}let d=await api('create-payment',{method:'POST',headers:{'Idempotency-Key':pendingTopupRequestKey},body:JSON.stringify({amount:selectedAmount})});const p=d.payment||{};$('#paymentResult').classList.remove('hidden');const checkout=p.payment_link||'';$('#paymentResult').innerHTML=`<b>${d.already_paid?'Pembayaran sudah diterima':'Tagihan dibuat'} · ${money(selectedAmount)}</b><p>Ref: ${esc(d.merchant_ref_id||'')}</p><p>Batas bayar: ${esc(p.expired_at||'-')}</p>${p.qr_link?`<img src="${esc(p.qr_link)}" alt="QRIS" referrerpolicy="no-referrer" style="width:190px;max-width:100%;border-radius:12px;background:#fff;padding:8px">`:''}${checkout?`<a href="${esc(checkout)}" target="_blank" rel="noopener noreferrer">Buka halaman pembayaran <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i></a>`:''}<p class="tiny-note">Saldo hanya bertambah setelah webhook pembayaran SekaliPay terverifikasi.</p>`;if(checkout)window.open(checkout,'_blank','noopener,noreferrer');pendingTopupRequestKey=null;sessionStorage.removeItem('sora_topup_request_key');sessionStorage.removeItem('sora_topup_amount');}catch(e){alertError(e.message);}finally{$('#topupButton').disabled=!selectedAmount;}});

async function loadHistory(){try{const d=await api('history');renderHistory(d);}catch(e){$('#historyList').innerHTML=`<div class="loading-card glass">${esc(e.message)}</div>`;}}
function renderHistory(d){
 const rows=historyMode==='orders'?(d.orders||[]):(d.topups||[]);
 $('#historyList').innerHTML=rows.length?rows.map(r=>{
  const id=r.custom_order_id||r.merchant_ref_id;const name=r.service_name||'Top up saldo';const status=String(r.status||'pending');
  return `<div class="history-item"><div><b>${esc(id)}</b><small>${esc(name)} · ${new Date(r.created_at).toLocaleString(uiLang==='id'?'id-ID':deviceLocale)}</small><span class="status-pill ${status==='pending'||status==='awaiting_otp'?'pending':''}">${esc(r.refunded_at?'refunded 100%':status.replaceAll('_',' '))}</span>${historyMode==='orders'?`<button class="mini-glass history-open-order" type="button" data-open-order="${esc(id)}">Buka detail OTP</button>`:''}</div><strong>${money(r.amount)}</strong></div>`;
 }).join(''):`<div class="loading-card glass">${tr('Belum ada transaksi.')}</div>`;
 localize($('#historyList'));
 $$('#historyList [data-open-order]').forEach(button=>button.addEventListener('click',()=>{currentOrderId=button.dataset.openOrder;sessionStorage.setItem('sora_active_order_id',currentOrderId);currentOrderCreatedAt=Date.now();setPage('otp');}));
}
$$('[data-history]').forEach(b=>b.addEventListener('click',()=>{$$('[data-history]').forEach(x=>x.classList.toggle('active',x===b));historyMode=b.dataset.history;loadHistory();}));

// OTP order detail: poll the same order ID, reveal Copy only after a code is received,
// and never credit a refund until NokosPusat confirms a no-OTP terminal state.
function setOtpStatus(message,kind='pending'){
 const el=$('#otpStatus');el.textContent=message;el.className=`otp-state ${kind}`;
}
function renderOtpSnapshot(data){
 $('#otpOrderRef').textContent=data.custom_order_id||currentOrderId||'—';
 $('#otpNumber').textContent=data.phone||'Nomor sedang dialokasikan';
 const code=String(data.otp||'').trim();
 $('#otpValue').textContent=code||'Menunggu OTP';
 $('#copyOtpButton').classList.toggle('hidden',!code);
 $('#otpCancelButton').classList.toggle('hidden',!data.can_cancel||Boolean(code)||Boolean(data.has_receipt)||Boolean(data.refunded_at)||Boolean(data.cancel_requested_at));
 if(data.refunded_at){setOtpStatus('Refund 100% berhasil dikembalikan ke saldo','success');$('#otpCancelButton').classList.add('hidden');}
 else if(code||['completed','success'].includes(data.status)){setOtpStatus('OTP diterima','success');$('#otpCancelButton').classList.add('hidden');}
 else if(data.has_receipt){setOtpStatus('Bukti pesan tercatat. Sinkronisasi OTP…','pending');$('#otpCancelButton').classList.add('hidden');}
 else if(data.cancel_requested_at){setOtpStatus('Menunggu konfirmasi pembatalan dari provider','pending');$('#otpCancelButton').classList.add('hidden');}
 else if(data.allocation_pending||['allocating','allocation_uncertain','pending'].includes(data.status)&&!data.phone){setOtpStatus('Menunggu alokasi nomor','pending');}
 else if(['cancelled','canceled','expired'].includes(data.status)){setOtpStatus('Pesanan berakhir. Memastikan refund saldo 100%','pending');$('#otpCancelButton').classList.add('hidden');}
 else{setOtpStatus('Menunggu OTP','pending');}
 const note=data.refunded_at?'Saldo telah dikembalikan penuh ke saldo Garda OTP.':data.has_receipt?'NokosPusat sudah mencatat bukti pesan/receipt. Kode mungkin masih disinkronkan. Pesanan dengan bukti pesan tidak memenuhi syarat refund 100%, walaupun kolom OTP masih kosong.':data.cancel_requested_at?'Permintaan pembatalan sedang diverifikasi. Saldo belum dikembalikan sebelum status terminal dikonfirmasi.':data.can_cancel?'Nomor belum menerima OTP atau bukti pesan. Kamu dapat mengajukan pembatalan sesuai kelayakan provider.':'Garansi 100% berlaku bila tidak ada OTP/bukti pesan dan NokosPusat mengonfirmasi status cancelled/expired. Pengembalian masuk ke saldo Garda OTP, bukan ke rekening atau QRIS.';
 $('#otpWarrantyNote').textContent=note;
}
function scheduleOtpPoll(data={}){
 if(otpPollTimer)clearTimeout(otpPollTimer);
 if(!currentOrderId||!session?.access_token)return;
 if(data.refunded_at||data.otp||['completed','success'].includes(data.status))return;
 const age=Date.now()-currentOrderCreatedAt;
 const defaultDelay=age<120000?5000:15000;
 const providerDelay=Math.max(0,Number(data.next_check_after_seconds||0))*1000;
 const delay=Math.max(defaultDelay,providerDelay||defaultDelay);
 otpPollTimer=setTimeout(()=>refreshCurrentOrder(true),delay);
}
async function refreshCurrentOrder(silent=false){
 if(!currentOrderId||otpPollInFlight)return;
 otpPollInFlight=true;
 try{const data=await api(`order-status?id=${encodeURIComponent(currentOrderId)}`);renderOtpSnapshot(data);scheduleOtpPoll(data);}
 catch(error){if(!silent)setOtpStatus('Status OTP belum dapat diperbarui. Mencoba lagi…','pending');scheduleOtpPoll({});}
 finally{otpPollInFlight=false;}
}
function loadCurrentOrder(){
 if(!currentOrderId){$('#otpOrderRef').textContent='—';$('#otpNumber').textContent='—';$('#otpValue').textContent='Menunggu OTP';$('#copyOtpButton').classList.add('hidden');setOtpStatus('Pilih pesanan dari menu Riwayat untuk melihat OTP','pending');return;}
 $('#otpOrderRef').textContent=currentOrderId;$('#otpNumber').textContent='Memuat nomor…';$('#otpValue').textContent='Menunggu OTP';$('#copyOtpButton').classList.add('hidden');setOtpStatus('Memeriksa status pesanan…','pending');refreshCurrentOrder(false);
}
$('#copyOtpButton').addEventListener('click',async()=>{const value=$('#otpValue').textContent;if(!value||value==='Menunggu OTP')return;try{await navigator.clipboard.writeText(value);Swal.fire({toast:true,position:'top',icon:'success',title:'OTP berhasil disalin',showConfirmButton:false,timer:1500});}catch{alertError('Clipboard tidak tersedia di browser ini.');}});
$('#otpCancelButton').addEventListener('click',async()=>{
 const confirmed=await Swal.fire({icon:'warning',title:'Ajukan pembatalan?',text:'Saldo akan kembali 100% hanya setelah NokosPusat mengonfirmasi pesanan dibatalkan/kedaluwarsa dan tidak ada OTP atau bukti pesan.',showCancelButton:true,confirmButtonText:'Ajukan pembatalan',cancelButtonText:'Kembali'});
 if(!confirmed.isConfirmed||!currentOrderId)return;
 $('#otpCancelButton').disabled=true;
 try{const data=await api('cancel-order',{method:'POST',body:JSON.stringify({id:currentOrderId})});renderOtpSnapshot(data);await Swal.fire({icon:data.refunded?'success':'info',title:data.refunded?'Saldo dikembalikan':'Pembatalan diproses',text:data.message||'Status pembatalan sedang diverifikasi provider.'});scheduleOtpPoll(data);}
 catch(error){await Swal.fire({icon:'info',title:'Belum dapat dipastikan',text:error.message});refreshCurrentOrder(true);}
 finally{$('#otpCancelButton').disabled=false;}
});
async function handleTopupReturn(merchantRef){
 const cleanUrl=location.pathname;history.replaceState({},'',cleanUrl);
 $('#paymentResult').classList.remove('hidden');$('#paymentResult').textContent='Memverifikasi pembayaran QRIS. Saldo baru bertambah setelah webhook SekaliPay terkonfirmasi.';
 const started=Date.now();
 while(Date.now()-started<90000){
  try{const h=await api('history');const topup=(h.topups||[]).find(x=>x.merchant_ref_id===merchantRef);if(topup&&['paid','completed'].includes(String(topup.status).toLowerCase())){await refreshProfile();$('#paymentResult').textContent='Pembayaran QRIS berhasil. Saldo sudah masuk. Pilih aplikasi untuk membeli nomor OTP.';await Swal.fire({icon:'success',title:'Saldo berhasil ditambahkan',text:'Sekarang pilih aplikasi dan beli nomor untuk membuka halaman OTP.'});setPage('buy');return;}if(topup&&['expired','failed','cancelled','canceled'].includes(String(topup.status).toLowerCase())){break;}}catch{}
  await new Promise(resolve=>setTimeout(resolve,5000));
 }
 $('#paymentResult').textContent='Pembayaran belum terkonfirmasi. Jangan membayar ulang tagihan yang sama; periksa status transaksi atau hubungi dukungan bila pembayaran sudah terdebit.';
}

init();
