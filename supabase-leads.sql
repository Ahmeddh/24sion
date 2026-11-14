-- ═══════════════════════════════════════════════════════════════════
--  Leads: people who asked for the free 200-Week Cycle Plan
--  Run this once in: Supabase Dashboard → SQL Editor
-- ═══════════════════════════════════════════════════════════════════

create table if not exists public.leads (
  id          uuid        primary key default gen_random_uuid(),
  name        text        not null,
  email       text        not null unique,   -- stored lower case by the server action
  whatsapp    text,                           -- E.164 style, digits with a leading +
  locale      text        not null default 'en',
  source      text        not null default 'unknown',  -- which button or page opened the form
  consent     boolean     not null default false,      -- agreed to be contacted
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);

-- Row-Level Security: no access from the browser. The server action uses
-- the service_role key, which bypasses RLS.
alter table public.leads enable row level security;

drop policy if exists "No direct client access" on public.leads;
create policy "No direct client access"
  on public.leads
  for all
  to anon, authenticated
  using (false)
  with check (false);
