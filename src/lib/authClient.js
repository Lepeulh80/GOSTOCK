import { supabase } from './supabaseClient'

export async function signUp(email, password) {
  return supabase.auth.signUp({ email, password })
}

export async function signIn(email, password) {
  return supabase.auth.signInWithPassword({ email, password })
}

export async function signOut() {
  return supabase.auth.signOut()
}

export function onAuthStateChanged(callback) {
  return supabase.auth.onAuthStateChange((event, session) => {
    callback(event, session)
  }).subscription
}
