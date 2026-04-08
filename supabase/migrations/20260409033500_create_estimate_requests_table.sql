create table public.estimate_requests (
  id uuid primary key default gen_random_uuid(),
  session_id text,
  role_slug text not null,
  experience_slug text not null,
  location_slug text not null,
  industry_slug text not null,
  work_setup_slug text not null,
  company_type_slug text not null,
  skills text[] not null default '{}'::text[],
  result_median_monthly_gross numeric(12,2) not null check (result_median_monthly_gross >= 0),
  result_confidence integer not null check (result_confidence between 0 and 100),
  created_at timestamptz not null default now()
);
