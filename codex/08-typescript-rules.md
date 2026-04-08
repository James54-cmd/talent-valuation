# TypeScript Rules

## Type vs Interface

| Use case | Prefer |
|----------|--------|
| Most app code | `type` |
| Extendable object contracts | `interface` |

```ts
// Prefer type for most things
export type EmployeeStatus = "active" | "inactive";

export type Employee = {
  id: string;
  firstName: string;
  lastName: string;
  status: EmployeeStatus;
};
```

## Rules

- **Never use `any`** unless boxed into a very specific, documented boundary
- Keep types close to the feature — only promote to shared `types/` when truly shared
- Do **not** create one giant global `types.ts`
- Validate all external input with Zod schemas

## Path Aliases

Configure `tsconfig.json` with aliases to avoid deep relative imports:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

**Use:**
```ts
import { EmployeeForm } from "@/features/employees/components/employee-form";
```

**Avoid:**
```ts
import { EmployeeForm } from "../../../features/employees/components/employee-form";
```

## Where Types Live

```txt
features/<name>/types/    ← feature-local types (preferred)
types/api.ts              ← shared API response types
types/common.ts           ← truly global shared types
```

## Schema-Driven Validation

Use Zod schemas to validate external input and derive types:

```ts
// employee.schema.ts
import { z } from "zod";

export const createEmployeeSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
});

export type CreateEmployeeInput = z.infer<typeof createEmployeeSchema>;
```
