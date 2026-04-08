# API Route Handlers — Next.js `app/api/`

## Directory Structure

API routes live inside `app/api/` and use `route.ts` files. Keep them thin — logic belongs in `features/` or `services/`.

```txt
app/
  api/
    auth/
      route.ts                  ← POST /api/auth
    employees/
      route.ts                  ← GET /api/employees, POST /api/employees
      [id]/
        route.ts                ← GET /api/employees/:id, PATCH, DELETE
    billing/
      route.ts                  ← GET /api/billing
      webhook/
        route.ts                ← POST /api/billing/webhook
```

## HTTP Method Exports

Each `route.ts` exports named functions per HTTP method:

```ts
// app/api/employees/route.ts
import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/db/server";

export async function GET(request: NextRequest) {
  const supabase = await createClient();
  const { data, error } = await supabase.from("employees").select("*");

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("employees")
    .insert(body)
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data, { status: 201 });
}
```

## Dynamic Route Segments

```ts
// app/api/employees/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/db/server";

type Params = { params: Promise<{ id: string }> };

export async function GET(_req: NextRequest, { params }: Params) {
  const { id } = await params;
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("employees")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(data);
}

export async function PATCH(request: NextRequest, { params }: Params) {
  const { id } = await params;
  const body = await request.json();
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("employees")
    .update(body)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

export async function DELETE(_req: NextRequest, { params }: Params) {
  const { id } = await params;
  const supabase = await createClient();

  const { error } = await supabase
    .from("employees")
    .delete()
    .eq("id", id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return new NextResponse(null, { status: 204 });
}
```

## Validation with Zod

Always validate request bodies using the feature's schema:

```ts
// app/api/employees/route.ts
import { createEmployeeSchema } from "@/features/employees/schemas/employee.schema";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const parsed = createEmployeeSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.flatten() },
      { status: 422 }
    );
  }

  // proceed with parsed.data ...
}
```

## Auth Guard

Protect routes by checking the Supabase session:

```ts
// app/api/employees/route.ts
export async function GET(request: NextRequest) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // proceed...
}
```

## Keep Route Handlers Thin

Route handlers should only:
1. Parse and validate input
2. Check auth
3. Call a feature action or service
4. Return a response

**❌ Bad — logic dumped in route handler:**
```ts
export async function POST(request: NextRequest) {
  // 80 lines of business logic here
}
```

**✅ Good — delegates to feature layer:**
```ts
import { createEmployee } from "@/features/employees/actions/create-employee";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const parsed = createEmployeeSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 422 });
  }

  const result = await createEmployee(parsed.data);
  return NextResponse.json(result, { status: 201 });
}
```

## Webhook Routes

Webhooks (e.g. Stripe, Supabase) need the raw request body — skip JSON parsing:

```ts
// app/api/billing/webhook/route.ts
export async function POST(request: NextRequest) {
  const rawBody = await request.text();
  const signature = request.headers.get("stripe-signature");

  // verify + handle webhook...
}
```

Add to `next.config.ts` to disable body parsing for webhooks:
```ts
export const config = {
  api: {
    bodyParser: false,
  },
};
```

## Standard HTTP Status Codes

| Scenario | Status |
|----------|--------|
| Success (read) | `200` |
| Created | `201` |
| No content (delete) | `204` |
| Validation error | `422` |
| Unauthorized | `401` |
| Forbidden | `403` |
| Not found | `404` |
| Server error | `500` |

## When to Use Route Handlers vs Server Actions

| Use case | Prefer |
|----------|--------|
| Form submissions, mutations from UI | Server Actions (`features/*/actions/`) |
| Webhooks from external services | Route Handler (`app/api/`) |
| Public REST API consumed by mobile/3rd party | Route Handler (`app/api/`) |
| Fetching data in Server Components | Direct Supabase call (no route needed) |
