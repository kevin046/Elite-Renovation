declare namespace NodeJS {
  interface ProcessEnv {
    // Remove DATABASE_URL completely
    NEXT_PUBLIC_SUPABASE_URL: string;
    NEXT_PUBLIC_SUPABASE_ANON_KEY: string;
    // Only add this if you need server-side access
    SUPABASE_SERVICE_ROLE_KEY?: string;
  }
} 