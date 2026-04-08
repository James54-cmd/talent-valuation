alter table public.benchmark_roles enable row level security;
alter table public.benchmark_dimensions enable row level security;
alter table public.source_batches enable row level security;
alter table public.salary_benchmarks enable row level security;
alter table public.benchmark_skill_adjustments enable row level security;
alter table public.estimate_requests enable row level security;
alter table public.methodology_snapshots enable row level security;

create policy "Public can read benchmark roles"
  on public.benchmark_roles
  for select
  to public
  using (true);

create policy "Public can read active benchmark dimensions"
  on public.benchmark_dimensions
  for select
  to public
  using (is_active = true);

create policy "Public can read current methodology snapshots"
  on public.methodology_snapshots
  for select
  to public
  using (is_current = true);
