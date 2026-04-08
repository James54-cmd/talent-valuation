create table public.source_batches (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  source_type text not null,
  notes text,
  published_on date,
  imported_at timestamptz not null default now(),
  is_active boolean not null default true
);
