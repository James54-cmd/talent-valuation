import { createBrowserClient } from "@supabase/ssr";
import { getSupabaseBrowserEnv } from "@/lib/db/env";
import type { Database } from "@/types/database.types";

export function createClient() {
  const { anonKey, url } = getSupabaseBrowserEnv();

  return createBrowserClient<Database>(url, anonKey);
}
