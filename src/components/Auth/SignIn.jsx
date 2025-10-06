import React, { useState } from 'react'
import { signIn } from '../../lib/authClient'

export default function SignIn({ onSignedIn }){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    if(!email || !password){ return alert('Email et mot de passe requis') }
    setLoading(true)
    try {
      const { data, error } = await signIn(email, password)
      if (error) throw error
      onSignedIn && onSignedIn(data.session)
    } catch(err){ alert(err.message || 'Erreur de connexion') }
    finally{ setLoading(false) }
  }

  return (
    <form onSubmit={submit} className="card p-4">
      <h3>Connexion</h3>
      <label>Email<input value={email} onChange={e=>setEmail(e.target.value)} type="email" /></label>
      <label>Mot de passe<input value={password} onChange={e=>setPassword(e.target.value)} type="password" /></label>
      <div style={{display:'flex', gap:8}}>
        <button type="submit" disabled={loading}>{loading ? 'Connexion...' : 'Se connecter'}</button>
      </div>
    </form>
  )
}
