import React, { useEffect, useState, createContext, useContext } from 'react'
import { supabase } from '../../lib/supabaseClient'

const AuthContext = createContext({ user: null, session: null })

export function AuthProvider({ children }){
  const [session, setSession] = useState(null)
  useEffect(()=>{
    supabase.auth.getSession().then(({ data }) => setSession(data.session || null))
    const { subscription } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
    return () => subscription.unsubscribe?.()
  },[])

  return <AuthContext.Provider value={{ session }}>{children}</AuthContext.Provider>
}

export function useAuth(){ return useContext(AuthContext) }
