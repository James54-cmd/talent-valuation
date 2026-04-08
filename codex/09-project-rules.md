# Project Structure Rules

## General
- Use Next.js App Router.
- Keep route files inside `src/app`.
- Keep business/domain code inside `src/features`.
- Keep reusable presentational components inside `src/components`.
- Keep shared technical utilities inside `src/lib`.
- Use `@/` imports only. Avoid long relative imports like `../../../`.

## File naming
- Use kebab-case for all file names.
- React component names must be PascalCase.
- Hooks must start with `use-`.
- Server actions must use verb-first names like `create-employee.ts`.
- Schemas must use `feature-name.schema.ts`.
- Types must use `feature-name.types.ts`.

## app/
- `app/` should contain routing, layouts, route handlers, and thin page entry files only.
- Do not place heavy business logic directly in `page.tsx`.
- Use route groups like `(public)` and `(private)` to separate unauthenticated and authenticated routes.

## features/
- Each feature owns its own components, hooks, schemas, types, actions, and helpers.
- Prefer keeping feature code self-contained.
- Move code to `components/` only when it is reused across multiple features.

## components/
- `components/ui` is for generic reusable UI primitives.
- `components/common` is for shared app patterns.
- Never place feature-specific business components in `components/ui`.

## lib/
- `lib/` is for shared technical code: auth, db, utils, constants, formatters.
- `lib/` must not contain feature-specific business logic.

## Tailwind
- Prefer Tailwind utilities directly in components.
- Extract repeated UI patterns into reusable components, not premature helper classes.
- Keep global CSS minimal.
- Use design tokens consistently.

## TypeScript
- Prefer strict typing.
- Avoid `any`.
- Keep shared types minimal and feature types local.
- Validate external input with schemas.

## Code organization
- One file should have one main responsibility.
- Keep files small enough to scan quickly.
- If a file exceeds ~200–300 lines, consider splitting by responsibility.
- Favor composition over giant components.
