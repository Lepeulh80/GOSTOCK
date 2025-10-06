
let supabase
if (process.env.NODE_ENV === 'test') {
  // Mock supabase client for tests
  supabase = {
    from: () => ({
      select: () => Promise.resolve({ data: [], error: null }),
      insert: () => Promise.resolve({ data: [], error: null }),
      update: () => Promise.resolve({ data: [], error: null }),
      delete: () => Promise.resolve({ data: [], error: null }),
    }),
    auth: {
      signInWithPassword: () => Promise.resolve({ data: {}, error: null }),
      signUp: () => Promise.resolve({ data: {}, error: null }),
      signOut: () => Promise.resolve({ data: {}, error: null }),
      getSession: () => Promise.resolve({ data: {}, error: null }),
    },
  }
} else {
  const { createClient } = require('@supabase/supabase-js')
  const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
  const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    console.warn('Supabase environment variables are not set. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY')
  }
  supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
}
export { supabase }
