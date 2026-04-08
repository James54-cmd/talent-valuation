import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { getSupabaseBrowserEnv } from "@/lib/db/env";
import type { Database } from "@/types/database.types";

export async function createClient() {
  const cookieStore = await cookies();
  const { anonKey, url } = getSupabaseBrowserEnv();

  return createServerClient<Database>(url, anonKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, options, value }) => {
          try {
            cookieStore.set(name, value, options);
          } catch {
            // Ignore set failures in render contexts where cookies are read-only.
          }
        });
      },
    },
  });
}
