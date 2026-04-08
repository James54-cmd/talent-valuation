# `lib/` vs `services/`

## `lib/` — Low-level Shared Technical Helpers

Shared infrastructure and utilities with **no feature-specific business logic**.

```txt
lib/
  auth/
    session.ts
    permissions.ts
  db/
      client.ts      ← Supabase browser client
      server.ts      ← Supabase server client (SSR/RSC)
      admin.ts       ← Supabase admin client (service role)
  utils/
    cn.ts
    format-date.ts
    format-currency.ts
  validations/
    common.schema.ts
  constants/
    routes.ts
    app-config.ts
```

Examples of what belongs here:
- Auth session handling
- Database client setup
- `cn()` class merging utility
- Date/currency formatters
- Route name constants

## `services/` — Business Workflow Orchestration

Higher-level files that combine multiple libs or features to implement a business workflow.

```txt
services/
  employee.service.ts
  billing.service.ts
```

Example:
```ts
// employee.service.ts
// Combines: db queries + email notification + audit log
export async function terminateEmployee(id: string) { ... }
```

## Decision Rule

| Code | Where it goes |
|------|---------------|
| Shared formatter, DB client, auth helper | `lib/` |
| Multi-step business workflow | `services/` |
| Feature-specific helper | `features/<n>/lib/` |

> If you don't have complex orchestration yet, skip `services/` entirely.
