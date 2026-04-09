# Next.js + Supabase Implementation Plan

## Goal

Turn the current Philippine salary estimator into a production-ready Next.js application backed by Supabase for:

- localized salary benchmark data
- methodology transparency
- future admin tooling
- saved benchmark snapshots
- analytics-ready product events

This plan assumes the current app remains on Next.js App Router and keeps the existing `app / features / components / lib` structure.

## Current State

Today the product is:

- a Next.js App Router frontend
- feature-structured under `src/features/salary-estimator`
- powered by in-memory mock logic in `salary-estimator-data.ts`
- visually aligned to a Philippines-first product direction

What is still missing:

- persistent benchmark data
- admin-editable salary logic
- source freshness tracking
- auditable methodology
- user/session persistence
- event logging and analytics

## Recommended Architecture

```txt
src/
  app/
    (public)/
      page.tsx
    api/
      salary-estimates/
        route.ts
      benchmark-options/
        route.ts
      methodology/
        route.ts
  features/
    salary-estimator/
      actions/
        create-salary-estimate.ts
      components/
      hooks/
        use-benchmark-options-query.ts
        use-salary-estimate-mutation.ts
      lib/
        estimate-salary.ts
        benchmark-mapper.ts
      schemas/
        salary-estimator.schema.ts
      types/
        salary-estimator.types.ts
  lib/
    db/
      client.ts
      server.ts
      admin.ts
    constants/
    utils/
services/
  salary-benchmark.service.ts
supabase/
  migrations/
  seed.sql
```

## Product Boundaries

### `src/app`

Keep thin.

Responsibilities:

- route entry files
- layout
- public API route handlers
- loading/error/not-found files

Do not place benchmark calculation logic here.

### `src/features/salary-estimator`

Owns:

- form UI
- result UI
- validation schema
- domain types
- benchmark mapping
- salary estimation orchestration

### `src/lib/db`

Owns:

- Supabase client initialization
- browser vs server clients
- admin client for server-only maintenance tasks

### `services/`

Use only for cross-feature orchestration later.

Examples:

- importing benchmark reports
- syncing source freshness timestamps
- admin bulk recalculation jobs

## Supabase Data Model

Use normalized data for filters and benchmark logic, but keep the query path simple enough for result generation.

### 1. `benchmark_roles`

Stores supported job titles.

Recommended columns:

- `id uuid primary key`
- `slug text unique not null`
- `title text not null`
- `category text null`
- `created_at timestamptz default now()`
- `updated_at timestamptz default now()`

### 2. `benchmark_dimensions`

Stores standardized filters.

Recommended columns:

- `id uuid primary key`
- `dimension_type text not null`
- `slug text not null`
- `label text not null`
- `sort_order int default 0`
- `is_active boolean default true`

Examples of `dimension_type`:

- `location`
- `experience`
- `industry`
- `work_setup`
- `company_type`
- `skill`

### 3. `salary_benchmarks`

Core benchmark table.

Recommended columns:

- `id uuid primary key`
- `role_id uuid references benchmark_roles(id)`
- `location_id uuid references benchmark_dimensions(id)`
- `experience_id uuid references benchmark_dimensions(id)`
- `industry_id uuid references benchmark_dimensions(id)`
- `work_setup_id uuid references benchmark_dimensions(id)`
- `company_type_id uuid references benchmark_dimensions(id)`
- `median_monthly_gross numeric not null`
- `p25_monthly_gross numeric not null`
- `p75_monthly_gross numeric not null`
- `thirteenth_month_included boolean default true`
- `estimated_annual_bonus numeric default 0`
- `estimated_monthly_allowances numeric default 0`
- `confidence_score int default 80`
- `sample_size int default 0`
- `effective_date date not null`
- `source_batch_id uuid references source_batches(id)`
- `created_at timestamptz default now()`
- `updated_at timestamptz default now()`

This is the table your estimator should query first.

### 4. `benchmark_skill_adjustments`

Optional per-skill uplift/downlift values.

Recommended columns:

- `id uuid primary key`
- `benchmark_id uuid references salary_benchmarks(id)`
- `skill_id uuid references benchmark_dimensions(id)`
- `monthly_adjustment numeric not null`

This keeps skill logic editable instead of hardcoded.

### 5. `source_batches`

Tracks data provenance and freshness.

Recommended columns:

- `id uuid primary key`
- `name text not null`
- `source_type text not null`
- `notes text null`
- `published_on date null`
- `imported_at timestamptz default now()`
- `is_active boolean default true`

Examples:

- `JobStreet PH Q1 2026 normalized import`
- `Michael Page Philippines Salary Guide 2026`
- `PSA labor baseline April 2026`

### 6. `estimate_requests`

Stores anonymized estimator usage for analytics and future model tuning.

Recommended columns:

- `id uuid primary key`
- `session_id text null`
- `role_slug text not null`
- `experience_slug text not null`
- `location_slug text not null`
- `industry_slug text not null`
- `work_setup_slug text not null`
- `company_type_slug text not null`
- `skills text[] default '{}'`
- `result_median_monthly_gross numeric not null`
- `result_confidence int not null`
- `created_at timestamptz default now()`

This table should avoid personal data in V1.

### 7. `methodology_snapshots`

Public-facing methodology content.

Recommended columns:

- `id uuid primary key`
- `version text not null`
- `title text not null`
- `summary text not null`
- `content jsonb not null`
- `is_current boolean default false`
- `published_at timestamptz default now()`

This lets product/content update methodology without code deploys later.

## Initial Migration Plan

Create these migrations in order:

1. `create_benchmark_roles_table`
2. `create_benchmark_dimensions_table`
3. `create_source_batches_table`
4. `create_salary_benchmarks_table`
5. `create_benchmark_skill_adjustments_table`
6. `create_estimate_requests_table`
7. `create_methodology_snapshots_table`
8. `add_rls_policies`

## Seed Data Plan

Seed the following minimum benchmark dimensions:

- Locations: NCR / Metro Manila, Cebu, Davao, Other Philippine region
- Experience: Fresh Grad, Junior, Mid, Senior, Lead
- Industries: BPO, Tech, Finance, Government, Healthcare, E-commerce, Others
- Work setup: Onsite, Hybrid, Remote (PH-based), Remote (International client)
- Company type: Local SME, MNC, Startup

Seed at least 8 to 12 benchmark roles for launch:

- Software Engineer
- Senior Software Engineer
- Customer Service Representative
- Data Analyst
- Product Manager
- Accountant
- HR Specialist
- Virtual Assistant
- Registered Nurse
- Graphic Designer

## Estimation Strategy

### V1

Use deterministic benchmark lookup plus additive adjustments.

Flow:

1. Find the closest benchmark row by:
   - role
   - experience
   - location
   - industry
   - work setup
   - company type
2. Apply skill adjustments from `benchmark_skill_adjustments`
3. Return:
   - monthly range
   - midpoint
   - annualized base
   - annualized with 13th month
   - estimated annual total
4. Attach:
   - confidence
   - source freshness
   - methodology summary

This is better than ML for V1 because:

- easier to audit
- easier to explain
- easier to localize
- easier to trust

### V2

Add weighted scoring and source confidence blending.

### V3

Optional predictive model only after enough local request and benchmark data exists.

## API Design

### `POST /api/salary-estimates`

Purpose:

- validate input
- fetch benchmark
- apply adjustments
- persist request analytics
- return estimate

Request body:

```json
{
  "title": "software-engineer",
  "experience": "mid",
  "location": "metro-manila",
  "industry": "tech",
  "workSetup": "hybrid",
  "companyType": "mnc",
  "skills": ["react", "nodejs", "sql"]
}
```

Response:

```json
{
  "monthlyGross": {
    "min": 65000,
    "median": 74000,
    "max": 86000
  },
  "annualGrossWith13thMonth": 962000,
  "annualTotalEstimate": 1084000,
  "confidence": 89,
  "sampleSize": 482,
  "updatedAt": "2026-04-01",
  "sources": []
}
```

### `GET /api/benchmark-options`

Purpose:

- return dynamic filter values from Supabase

### `GET /api/methodology`

Purpose:

- return current methodology snapshot for public trust UI

## Feature-Level Files To Add

### `src/features/salary-estimator/schemas/salary-estimator.schema.ts`

Use Zod for validating:

- title
- experience
- location
- industry
- workSetup
- companyType
- skills

### `src/features/salary-estimator/lib/estimate-salary.ts`

Core estimation logic:

- benchmark lookup
- adjustment math
- annualization logic
- confidence shaping

### `src/features/salary-estimator/actions/create-salary-estimate.ts`

Server action or server-side mutation wrapper for estimate generation.

### `src/features/salary-estimator/hooks/use-salary-estimate-mutation.ts`

Client hook for form submit flow.

### `src/features/salary-estimator/hooks/use-benchmark-options-query.ts`

Client hook for loading dynamic form options.

## Supabase Client Setup

Create these files:

### `src/lib/db/client.ts`

Browser client for client-side reads when needed.

### `src/lib/db/server.ts`

Server client for route handlers and server actions.

### `src/lib/db/admin.ts`

Server-only admin client for maintenance scripts and imports.

## RLS Strategy

### Public read access

Allow read access to:

- benchmark roles
- benchmark dimensions
- methodology snapshots where `is_current = true`

### Restricted write access

Disallow public writes to:

- salary benchmarks
- source batches
- methodology snapshots

### Controlled write access

Allow inserts to `estimate_requests` only through server-side logic.

## Admin / Internal Roadmap

Not required for MVP, but the schema should support it.

Future admin features:

- upload benchmark CSVs
- publish new source batches
- mark current methodology version
- review stale benchmark rows
- compare regional salary drift

## Observability

Track these product events:

- estimator_started
- estimator_submitted
- estimate_viewed
- methodology_opened
- source_details_opened

Keep event payloads anonymous in V1.

## Rollout Sequence

### Phase 1: Data Foundation

- add Supabase project
- create migrations
- add seed data
- add DB clients

### Phase 2: Estimation Backend

- add Zod schema
- add benchmark lookup service
- add `/api/salary-estimates`
- persist `estimate_requests`

### Phase 3: Frontend Integration

- replace in-memory estimator data with API-backed hooks
- load dynamic options from Supabase
- render live methodology and source freshness

### Phase 4: Trust and Admin Readiness

- show methodology snapshot from DB
- add source attribution pages or modal
- add stale-data alerts for internal ops

## Immediate Code Tasks

If we execute this plan in the current repo, the next coding tasks should be:

1. Add `supabase/` with first migration set
2. Add `src/lib/db/client.ts`, `server.ts`, and `admin.ts`
3. Add `src/features/salary-estimator/schemas/salary-estimator.schema.ts`
4. Extract current in-memory logic into `estimate-salary.ts`
5. Create `src/app/api/salary-estimates/route.ts`
6. Replace local form submit with API-backed estimation
7. Add `estimate_requests` logging

## Recommended MVP Definition

Ship when all of these are true:

- dynamic options come from Supabase
- salary results come from `salary_benchmarks`
- 13th month pay is explicitly shown
- methodology and updated date are visible
- requests are logged anonymously
- benchmark ranges are PH-specific and editable without code changes

## Key Product Guardrails

- Monthly gross is always the primary result
- Annual output must always explain whether 13th month is included
- Remote international must stay separate from local remote
- Results should stay range-based, not falsely precise
- Trust copy must be visible on the result page, not hidden in a footer
