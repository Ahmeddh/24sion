-- ═══════════════════════════════════════════════════════════════════
--  Newsletter Subscribers — Supabase schema
--  Run this in: Supabase Dashboard → SQL Editor
-- ═══════════════════════════════════════════════════════════════════

-- 1. Create the table
create table if not exists public.newsletter_subscribers (
  id         uuid        primary key default gen_random_uuid(),
  email      text        not null,
  status     text        not null default 'active'
                         check (status in ('active', 'unsubscribed')),
  created_at timestamptz not null default now()
);

-- 2. Unique index on email (also enforces uniqueness constraint)
create unique index if not exists newsletter_subscribers_email_idx
  on public.newsletter_subscribers (lower(email));

-- 3. Index on status for quick active-subscriber queries
create index if not exists newsletter_subscribers_status_idx
  on public.newsletter_subscribers (status);

-- 4. Row-Level Security — enable but allow service-role to bypass
alter table public.newsletter_subscribers enable row level security;

-- 5. Policy: deny all access from the anon/authenticated roles
--    (the Server Action uses the service_role key which bypasses RLS)
create policy "No direct client access"
  on public.newsletter_subscribers
  for all
  to anon, authenticated
  using (false)
  with check (false);


-- ═══════════════════════════════════════════════════════════════════
--  Optional: unsubscribe helper function
--  Call via: select unsubscribe_email('user@example.com');
-- ═══════════════════════════════════════════════════════════════════
create or replace function public.unsubscribe_email(target_email text)
returns void
language sql
security definer
as $$
  update public.newsletter_subscribers
  set    status = 'unsubscribed'
  where  lower(email) = lower(target_email);
$$;


-- ═══════════════════════════════════════════════════════════════════
--  Optional: subscriber count view for analytics
-- ═══════════════════════════════════════════════════════════════════
create or replace view public.subscriber_stats
  with (security_invoker = true)
as
select
  count(*)                                          as total,
  count(*) filter (where status = 'active')         as active,
  count(*) filter (where status = 'unsubscribed')   as unsubscribed,
  min(created_at)                                   as first_signup,
  max(created_at)                                   as latest_signup
from public.newsletter_subscribers;
