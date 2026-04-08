# Naming Conventions

## Files — kebab-case

All filenames use kebab-case:

```txt
employee-form.tsx
employee-table.tsx
create-employee.ts
format-currency.ts
```

**Why:**
- Cleaner in imports
- Consistent across Mac/Linux
- Easier to scan in large repos

## React Components — PascalCase inside file

The component name inside the file is PascalCase, but the filename stays kebab-case:

```tsx
// File: employee-form.tsx
export function EmployeeForm() {}
```

## Hooks — `use-` prefix

```txt
use-employees-query.ts
use-current-user.ts
use-debounce.ts
```

## Server Actions — verb-first

```txt
create-employee.ts
update-employee.ts
delete-employee.ts
login.ts
logout.ts
```

## Schemas — `feature-name.schema.ts`

```txt
employee.schema.ts
auth.schema.ts
```

## Types — `feature-name.types.ts`

```txt
employee.types.ts
auth.types.ts
common.ts
```

> Do not scatter random `interface.ts` files everywhere.
