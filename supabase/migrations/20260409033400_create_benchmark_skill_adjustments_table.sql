create table public.benchmark_skill_adjustments (
  id uuid primary key default gen_random_uuid(),
  benchmark_id uuid not null references public.salary_benchmarks(id) on delete cascade,
  skill_id uuid not null references public.benchmark_dimensions(id),
  monthly_adjustment numeric(12,2) not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint benchmark_skill_adjustments_unique
    unique (benchmark_id, skill_id)
);

create trigger set_benchmark_skill_adjustments_updated_at
before update on public.benchmark_skill_adjustments
for each row
execute function public.set_updated_at();
