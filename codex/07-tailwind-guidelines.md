# Tailwind CSS Guidelines

## Core Philosophy

Treat Tailwind as your styling system. Store design choices as tokens/theme variables rather than sprinkling random values everywhere.

## Rules

### ✅ Use utilities directly in components

```tsx
<div className="rounded-2xl border bg-background p-6 shadow-sm" />
```

### ❌ Don't create giant className constants prematurely

```ts
// Too early — only do this when repetition is real
const cardClass = "rounded-2xl border bg-background p-6 shadow-sm";
```

### ✅ Extract only when repetition is real

Repeated UI patterns should become reusable components, not helper class constants.

## File Responsibilities

| File | Purpose |
|------|---------|
| `app/globals.css` | Base styles only |
| `styles/tokens.css` | Design tokens / theme variables (if needed) |
| `lib/utils/cn.ts` | Class merging utility |
| `components/ui/` | Reusable visual primitives |

## Design Tokens

Centralize design decisions:

```css
/* styles/tokens.css */
:root {
  --radius: 0.5rem;
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
}
```

## `cn()` Utility

Always use a class merging utility to handle conditional classes cleanly:

```ts
// lib/utils/cn.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

```tsx
// Usage
<div className={cn("rounded-lg p-4", isActive && "bg-primary")} />
```
