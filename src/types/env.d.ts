declare namespace NodeJS {
  interface ProcessEnv {
    // Remove Neon database URL
    // DATABASE_URL: string;
    
    // Add Supabase
    NEXT_PUBLIC_SUPABASE_URL: string;
    NEXT_PUBLIC_SUPABASE_ANON_KEY: string;
  }
} 