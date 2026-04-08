create table public.methodology_snapshots (
  id uuid primary key default gen_random_uuid(),
  version text not null unique,
  title text not null,
  summary text not null,
  content jsonb not null,
  is_current boolean not null default false,
  published_at timestamptz not null default now()
);

create unique index methodology_snapshots_one_current_idx
on public.methodology_snapshots (is_current)
where is_current = true;
