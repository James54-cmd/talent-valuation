create table public.salary_benchmarks (
  id uuid primary key default gen_random_uuid(),
  role_id uuid not null references public.benchmark_roles(id) on delete cascade,
  location_id uuid not null references public.benchmark_dimensions(id),
  experience_id uuid not null references public.benchmark_dimensions(id),
  industry_id uuid not null references public.benchmark_dimensions(id),
  work_setup_id uuid not null references public.benchmark_dimensions(id),
  company_type_id uuid not null references public.benchmark_dimensions(id),
  median_monthly_gross numeric(12,2) not null check (median_monthly_gross >= 0),
  p25_monthly_gross numeric(12,2) not null check (p25_monthly_gross >= 0),
  p75_monthly_gross numeric(12,2) not null check (p75_monthly_gross >= 0),
  thirteenth_month_included boolean not null default true,
  estimated_annual_bonus numeric(12,2) not null default 0 check (estimated_annual_bonus >= 0),
  estimated_monthly_allowances numeric(12,2) not null default 0 check (estimated_monthly_allowances >= 0),
  confidence_score integer not null default 80 check (confidence_score between 0 and 100),
  sample_size integer not null default 0 check (sample_size >= 0),
  effective_date date not null,
  source_batch_id uuid references public.source_batches(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint salary_benchmarks_percentile_order_check
    check (p25_monthly_gross <= median_monthly_gross and median_monthly_gross <= p75_monthly_gross),
  constraint salary_benchmarks_unique_slice
    unique (role_id, location_id, experience_id, industry_id, work_setup_id, company_type_id, effective_date)
);

create trigger set_salary_benchmarks_updated_at
before update on public.salary_benchmarks
for each row
execute function public.set_updated_at();
