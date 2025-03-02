declare namespace NodeJS {
  interface ProcessEnv {
    // Remove Neon database URL
    // DATABASE_URL: string;
    
    // Add Supabase
    NEXT_PUBLIC_SUPABASE_URL: string;
    NEXT_PUBLIC_SUPABASE_ANON_KEY: string;
    // Only add this if you need server-side access
    SUPABASE_SERVICE_ROLE_KEY?: string;
  }
} 