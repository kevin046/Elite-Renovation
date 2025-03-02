import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nhcttofusmnzlertxjkq.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5oY3R0b2Z1c21uemxlcnR4amtxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI5NDA2MDYsImV4cCI6MjA0ODUxNjYwNn0.WA6rQWC5ISi5QiWOKbdf3wwrysBSMhEq5Lt_HXEDqEU'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  global: {
    fetch: (...args) => fetch(...args)
  }
}) 