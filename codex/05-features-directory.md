# The `features/` Directory

## Purpose

Each feature owns all of its own code — components, hooks, schemas, types, actions, and helpers. Features are self-contained by default.

## Feature Anatomy

```txt
features/
  <feature-name>/
    components/    ← feature-specific UI
    actions/       ← server actions / mutations
    hooks/         ← client hooks for UI state or data
    schemas/       ← Zod validation schemas
    types/         ← feature-local TypeScript types
    lib/           ← feature-only helpers, mappers, transformers
```

## Example — Employees Feature

```txt
features/
  employees/
    components/
      employee-form.tsx
      employee-table.tsx
      employee-details-sheet.tsx
    actions/
      create-employee.ts
      update-employee.ts
      delete-employee.ts
    hooks/
      use-employees-query.ts
      use-employee-filters.ts
    schemas/
      employee.schema.ts
    types/
      employee.types.ts
    lib/
      employee-columns.tsx
      employee-mapper.ts
```

## Subdirectory Responsibilities

### `actions/`
Server actions and mutations. Use verb-first naming:
```ts
// create-employee.ts
export async function createEmployee(data: CreateEmployeeInput) { ... }
```

### `hooks/`
Client-side hooks for UI state or data orchestration:
```ts
// use-employees-query.ts
export function useEmployeesQuery() { ... }
```

### `schemas/`
Zod validation schemas for forms and API inputs:
```ts
// employee.schema.ts
export const employeeSchema = z.object({ ... });
```

### `types/`
Feature-local TypeScript types:
```ts
// employee.types.ts
export type EmployeeStatus = "active" | "inactive";

export type Employee = {
  id: string;
  firstName: string;
  lastName: string;
  status: EmployeeStatus;
};
```

### `lib/`
Feature-only utilities, mappers, and transformers:
```ts
// employee-mapper.ts
export function mapApiResponseToEmployee(raw: RawEmployee): Employee { ... }
```

## Rule

> Move code to `components/` only when it is reused across multiple features.
> Otherwise, keep it inside the feature.
