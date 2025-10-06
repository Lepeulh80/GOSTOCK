import React, { useState } from 'react'
import { signUp } from '../../lib/authClient'

export default function SignUp({ onSignedUp }){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [loading, setLoading] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    if(!email || !password){ return alert('Email et mot de passe requis') }
    if(password !== confirm) { return alert('Les mots de passe ne correspondent pas') }
    if(password.length < 6) { return alert('Le mot de passe doit contenir au moins 6 caractères') }
    setLoading(true)
    try {
      const { data, error } = await signUp(email, password)
      if (error) throw error
      onSignedUp && onSignedUp(data)
    } catch(err){ alert(err.message || 'Erreur d'inscription') }
    finally{ setLoading(false) }
  }

  return (
    <form onSubmit={submit} className="card p-4">
      <h3>Créer un compte</h3>
      <label>Email<input value={email} onChange={e=>setEmail(e.target.value)} type="email" /></label>
      <label>Mot de passe<input value={password} onChange={e=>setPassword(e.target.value)} type="password" /></label>
      <label>Confirmer le mot de passe<input value={confirm} onChange={e=>setConfirm(e.target.value)} type="password" /></label>
      <div style={{display:'flex', gap:8}}>
        <button type="submit" disabled={loading}>{loading ? 'Inscription...' : 'S'inscrire'}</button>
      </div>
    </form>
  )
}
