# Database Migrations — Supabase

## Where Migrations Live

Supabase migrations live **outside `src/`** at the project root — they are infrastructure, not app code.

```txt
supabase/
  migrations/
    20240101000000_create_employees_table.sql
    20240102000000_add_status_to_employees.sql
    20240103000000_create_billing_table.sql
  seed.sql
  config.toml

src/
  lib/
    db/
      client.ts        ← Supabase browser client
      server.ts        ← Supabase server client (SSR/RSC)
      admin.ts         ← Supabase admin client (service role)
```

## Migration File Naming

Always use a **timestamp prefix** so migrations run in order:

```txt
YYYYMMDDHHMMSS_description_of_change.sql
```

Examples:
```txt
20240101000000_create_employees_table.sql
20240115000000_add_department_to_employees.sql
20240120000000_create_billing_table.sql
20240201000000_add_rls_policies_employees.sql
```

## Example Migration File

```sql
-- 20240101000000_create_employees_table.sql

create table public.employees (
  id          uuid primary key default gen_random_uuid(),
  first_name  text not null,
  last_name   text not null,
  email       text not null unique,
  status      text not null default 'active' check (status in ('active', 'inactive')),
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

-- Enable RLS
alter table public.employees enable row level security;

-- Policies
create policy "Authenticated users can read employees"
  on public.employees for select
  to authenticated
  using (true);

create policy "Authenticated users can insert employees"
  on public.employees for insert
  to authenticated
  with check (true);
```

## Supabase Client Setup in `lib/db/`

### Browser client (`client.ts`)
```ts
// lib/db/client.ts
import { createBrowserClient } from "@supabase/ssr";
import type { Database } from "@/types/database.types";

export function createClient() {
  return createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
```

### Server client (`server.ts`)
```ts
// lib/db/server.ts
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import type { Database } from "@/types/database.types";

export async function createClient() {
  const cookieStore = await cookies();
  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() { return cookieStore.getAll(); },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options)
          );
        },
      },
    }
  );
}
```

### Admin client (`admin.ts`)
```ts
// lib/db/admin.ts
// ⚠️ Server-only — never expose service role key to the browser
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/types/database.types";

export const supabaseAdmin = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);
```

## Generated Types

Supabase can generate TypeScript types directly from your schema. Store them at:

```txt
src/
  types/
    database.types.ts   ← auto-generated, do not edit manually
```

Generate with:
```bash
npx supabase gen types typescript --project-id <your-project-id> > src/types/database.types.ts
```

Add this as an npm script:
```json
{
  "scripts": {
    "db:types": "supabase gen types typescript --project-id <your-project-id> > src/types/database.types.ts"
  }
}
```

## Common Migration Commands

```bash
# Apply migrations to local Supabase instance
npx supabase db push

# Create a new migration file
npx supabase migration new <migration_name>

# Reset local database and re-run all migrations
npx supabase db reset

# Pull remote schema changes into a new migration
npx supabase db pull

# Check migration status
npx supabase migration list
```

## Seed File

Use `supabase/seed.sql` for development data:

```sql
-- supabase/seed.sql
insert into public.employees (first_name, last_name, email, status) values
  ('Jane', 'Doe', 'jane@example.com', 'active'),
  ('John', 'Smith', 'john@example.com', 'active'),
  ('Alice', 'Brown', 'alice@example.com', 'inactive');
```

Seed is automatically run on `supabase db reset`.

## RLS Policy Convention

Every table should have RLS enabled. Name policies clearly:

```sql
-- Pattern: "<Who> can <action> <table>"
create policy "Authenticated users can read employees" ...
create policy "Admins can delete employees" ...
create policy "Users can update their own profile" ...
```

## Environment Variables

```bash
# .env.local
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key  # server-only, never expose
```
