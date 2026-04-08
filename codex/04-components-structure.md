# Components Structure

## 3-Layer System

### `components/ui/`

Pure reusable atoms with **no business meaning**.

```txt
components/ui/
  button.tsx
  input.tsx
  dialog.tsx
  table.tsx
  badge.tsx
```

### `components/common/`

Reusable app-level patterns that appear across features.

```txt
components/common/
  data-table.tsx
  empty-state.tsx
  confirm-dialog.tsx
  section-header.tsx
```

### `features/*/components/`

Feature-specific UI that only makes sense for one business domain.

```txt
features/employees/components/
  employee-form.tsx
  employee-table.tsx
  employee-details-sheet.tsx
```

## Decision Rule

> If it only makes sense for one business feature → it belongs in that feature.
> If it's reused across multiple features → it belongs in `components/`.

## Common Mistakes to Avoid

| Mistake | Fix |
|---------|-----|
| Everything dumped into `components/` | Use feature folders for business UI |
| Business logic in `components/ui/` | Keep `ui/` as pure presentational atoms |
| Giant page components | Extract into feature-level components |
