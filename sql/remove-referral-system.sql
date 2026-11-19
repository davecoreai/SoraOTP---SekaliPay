-- Run once in Supabase SQL Editor after taking a database backup.
-- Removes legacy invitation-program objects and restores top-up settlement.
begin;

drop trigger if exists profiles_generate_referral_code on public.profiles;
drop function if exists public.generate_profile_referral_code();
drop table if exists public.referral_rewards;

create or replace function public.credit_sekalipay_topup_once(
  p_merchant_ref_id text,
  p_invoice text,
  p_paid_amount bigint,
  p_paid_at timestamptz,
  p_is_sandbox boolean
) returns boolean
language plpgsql security definer set search_path = pg_catalog, public as $$
declare t public.topups;
begin
  if p_merchant_ref_id is null or length(p_merchant_ref_id) > 100
     or p_paid_amount is null or p_paid_amount <= 0 or p_is_sandbox is null then
    raise exception 'Invalid payment data';
  end if;
  select * into t from public.topups where merchant_ref_id = p_merchant_ref_id for update;
  if not found then raise exception 'Top up not found'; end if;
  if t.amount <> p_paid_amount or t.is_sandbox is distinct from p_is_sandbox then
    raise exception 'Payment attributes mismatch';
  end if;
  if t.status in ('paid','completed') then return false; end if;
  update public.topups set status='paid', invoice=coalesce(p_invoice, invoice), paid_at=coalesce(p_paid_at, now()) where id=t.id;
  update public.profiles set balance=balance+t.amount, total_deposit=total_deposit+t.amount where id=t.user_id;
  return true;
end;
$$;
revoke all on function public.credit_sekalipay_topup_once(text,text,bigint,timestamptz,boolean) from public, anon, authenticated;
grant execute on function public.credit_sekalipay_topup_once(text,text,bigint,timestamptz,boolean) to service_role;

alter table public.profiles
  drop column if exists referral_code,
  drop column if exists referred_by,
  drop column if exists referral_bonus_total;

commit;
