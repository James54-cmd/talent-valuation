const publicSupabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const publicSupabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

function requireEnvValue(name: string, value: string | undefined) {
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

export function getSupabaseBrowserEnv() {
  return {
    url: requireEnvValue("NEXT_PUBLIC_SUPABASE_URL", publicSupabaseUrl),
    anonKey: requireEnvValue("NEXT_PUBLIC_SUPABASE_ANON_KEY", publicSupabaseAnonKey),
  };
}

export function getSupabaseAdminEnv() {
  return {
    ...getSupabaseBrowserEnv(),
    serviceRoleKey: requireEnvValue("SUPABASE_SERVICE_ROLE_KEY", serviceRoleKey),
  };
}
