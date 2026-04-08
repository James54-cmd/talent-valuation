# The `app/` Directory

## Rule: Keep `app/` Thin

`app/` should contain:
- Routing and layouts
- Route handlers
- Thin page entry files only

A page should mostly:
1. Read params/search params
2. Call feature-level functions
3. Compose sections
4. Render

## ❌ Bad — page doing too much

```tsx
// app/employees/page.tsx
// Contains ALL of:
// - data fetching
// - validation
// - mutation logic
// - table logic
// - modal logic
// - formatting helpers
// - permission checks
```

## ✅ Good — thin page entry

```tsx
// app/employees/page.tsx
import { EmployeePage } from "@/features/employees/components/employee-page";

export default function Page() {
  return <EmployeePage />;
}
```

## Route Groups

Use parenthesized folders for organization — they don't affect the URL:

```txt
app/
  (public)/        ← unauthenticated pages: marketing, login, register
  (private)/       ← authenticated app: dashboard, employees, settings
```

## API Route Handlers

API routes live at `app/api/` and use `route.ts` with named HTTP method exports:

```txt
app/api/
  auth/route.ts
  employees/route.ts
  employees/[id]/route.ts
  billing/webhook/route.ts
```

### When to use route handlers vs server actions

| Use case | Prefer |
|----------|--------|
| Form submissions / UI mutations | Server Actions in `features/*/actions/` |
| Webhooks from external services | `app/api/` route handler |
| Public REST API for mobile/3rd party | `app/api/` route handler |
| Data fetching in Server Components | Direct Supabase call — no route needed |

## Special Files

Next.js App Router reserves these filenames:

| File           | Purpose                    |
|----------------|----------------------------|
| `page.tsx`     | Route UI                   |
| `layout.tsx`   | Shared layout wrapper      |
| `loading.tsx`  | Suspense loading state     |
| `error.tsx`    | Error boundary             |
| `not-found.tsx`| 404 handler                |
| `route.ts`     | API route handler          |
