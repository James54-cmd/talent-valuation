# Talent Valuation

A salary estimation app built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui.

## Stack

- Next.js App Router
- React 18
- TypeScript
- Tailwind CSS
- shadcn/ui + Radix UI
- ESLint
- Vitest

## Local Development

Requirements:

- Node.js `20.9.0` or newer
- npm

Install dependencies:

```bash
npm install
```

Start the app locally:

```bash
npm run dev
```

The Next.js dev server runs at:

```txt
http://localhost:3000
```

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run test
```

## Project Structure

```txt
src/
  app/
    (public)/
      page.tsx
    globals.css
    layout.tsx
    not-found.tsx

  components/
    common/
    layout/
    ui/

  features/
    salary-estimator/
      components/
      hooks/
      lib/
      types/

  lib/
    constants/
    utils/

  styles/
    tokens.css

  test/
```

## Architecture Notes

- `src/app` stays thin and handles routes, layout, and route-level entry files.
- `src/features/salary-estimator` owns the salary estimator UI, state, mock data, and feature types.
- `src/components/ui` contains reusable shadcn/ui primitives.
- `src/components/common` and `src/components/layout` contain shared app-level presentation.
- `src/lib` contains shared utilities and constants.

## Styling

- Global styles live in [src/app/globals.css](/Users/abstractdigital/Documents/GitHub/talent-valuation/src/app/globals.css)
- Design tokens live in [src/styles/tokens.css](/Users/abstractdigital/Documents/GitHub/talent-valuation/src/styles/tokens.css)
- The app uses shadcn/ui primitives for most interactive and structural UI

## Testing

Run the test suite with:

```bash
npm run test
```

## Generated Files

Next.js build output is generated under `.next/` and should not be committed.
