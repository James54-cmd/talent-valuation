# Project Structure — Next.js + TypeScript + Tailwind

## Core Principle

**Route by app, feature by domain, shared by purpose.**

- **`app/`** — routing and page entry points
- **`features/`** — domain/business logic
- **`components/`** — reusable presentation pieces
- **`lib/`** — framework-agnostic utilities and infrastructure

```txt
supabase/
  migrations/
    20240101000000_create_employees_table.sql
    20240102000000_add_status_to_employees.sql
  seed.sql
  config.toml

src/
  app/
    (public)/
      layout.tsx
      page.tsx
      pricing/
        page.tsx
      about/
        page.tsx
      login/
        page.tsx
      register/
        page.tsx

    (private)/
      layout.tsx
      dashboard/
        page.tsx
      employees/
        page.tsx
      employees/[id]/
        page.tsx
      settings/
        page.tsx

    api/
      auth/
        route.ts
      employees/
        route.ts
        [id]/
          route.ts
      billing/
        route.ts
        webhook/
          route.ts

    favicon.ico
    globals.css
    layout.tsx
    not-found.tsx
    error.tsx
    loading.tsx

  components/
    ui/
      button.tsx
      input.tsx
      modal.tsx
      table.tsx
    layout/
      app-sidebar.tsx
      app-header.tsx
      page-container.tsx
    common/
      empty-state.tsx
      data-table.tsx
      confirm-dialog.tsx

  features/
    auth/
      components/
        login-form.tsx
        register-form.tsx
      actions/
        login.ts
        register.ts
      hooks/
        use-current-user.ts
      schemas/
        auth.schema.ts
      types/
        auth.types.ts

    employees/
      components/
        employee-form.tsx
        employee-table.tsx
        employee-status-badge.tsx
      actions/
        create-employee.ts
        update-employee.ts
        delete-employee.ts
      hooks/
        use-employees-query.ts
      lib/
        employee-mapper.ts
      schemas/
        employee.schema.ts
      types/
        employee.types.ts

    billing/
      components/
      actions/
      hooks/
      schemas/
      types/

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

  services/
    employee.service.ts
    billing.service.ts

  hooks/
    use-debounce.ts
    use-mobile.ts

  types/
    api.ts
    common.ts

  styles/
    tokens.css

  tests/
    unit/
    integration/
    e2e/
```

## Growth Strategy

| App Size | Recommended Approach |
|----------|----------------------|
| Small    | Simple hybrid structure |
| Growing  | Feature folders |
| Large    | Feature folders + shared UI + thin routes |

**Start minimal, then grow naturally:**

```txt
src/
  app/
  components/
  features/
  lib/
```

## Quick Navigation Test

A good structure answers these in under 3 seconds:

- **Where is the route?** → `app/`
- **Where is the business logic?** → `features/`
- **Where is the reusable UI?** → `components/`
- **Where are the types and schemas?** → `features/<name>/types/` and `features/<name>/schemas/`
