create table public.benchmark_dimensions (
  id uuid primary key default gen_random_uuid(),
  dimension_type text not null,
  slug text not null,
  label text not null,
  sort_order integer not null default 0,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint benchmark_dimensions_type_check
    check (dimension_type in ('location', 'experience', 'industry', 'work_setup', 'company_type', 'skill')),
  constraint benchmark_dimensions_type_slug_unique
    unique (dimension_type, slug)
);

create trigger set_benchmark_dimensions_updated_at
before update on public.benchmark_dimensions
for each row
execute function public.set_updated_at();
