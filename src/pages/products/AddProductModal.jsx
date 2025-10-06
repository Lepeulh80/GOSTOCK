import React, { useState, useEffect } from 'react'

export default function AddProductModal({ onClose, onAdd, prefill }){
  const [form, setForm] = useState({
    name: '', category: '', stock: 0, alert_threshold: 5, buy_price: 0, sell_price: 0, notes: '', barcode: ''
  })
  const [saving, setSaving] = useState(false)

  useEffect(()=>{
    if(prefill) setForm(f => ({ ...f, ...prefill }))
  },[prefill])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const submit = async () => {
    try {
      if(!form.name) return alert('Le nom du produit est requis')
      setSaving(true)
      const payload = {
        name: form.name,
        category: form.category || 'general',
        stock: parseInt(form.stock,10)||0,
        alert_threshold: parseInt(form.alert_threshold,10)||5,
        buy_price: parseFloat(form.buy_price)||0,
        sell_price: parseFloat(form.sell_price)||0,
        notes: form.notes || '',
        barcode: form.barcode || null,
        created_at: new Date().toISOString()
      }
      await onAdd(payload)
      onClose()
    } catch(e) {
      alert(e.message || 'Erreur')
    } finally { setSaving(false) }
  }

  return (
    <div className="modal-card p-4 border rounded" role="dialog" aria-modal="true">
      <h3>Ajouter un produit</h3>
      <label>Nom<input name="name" aria-label="Nom" value={form.name} onChange={handleChange} /></label>
      <label>Catégorie<input name="category" value={form.category} onChange={handleChange} /></label>
      <label>Stock initial<input name="stock" value={form.stock} onChange={handleChange} type="number" /></label>
      <label>Seuil d'alerte<input name="alert_threshold" value={form.alert_threshold} onChange={handleChange} type="number" /></label>
      <label>Prix d'achat<input name="buy_price" value={form.buy_price} onChange={handleChange} type="number" step="0.01" /></label>
      <label>Prix de vente<input name="sell_price" value={form.sell_price} onChange={handleChange} type="number" step="0.01" /></label>
      <label>Notes<textarea name="notes" value={form.notes} onChange={handleChange} /></label>
      <label>Code-barres<input name="barcode" value={form.barcode} onChange={handleChange} /></label>
      <div style={{display:'flex', gap:8, marginTop:8}}>
        <button onClick={submit} disabled={saving}>{saving ? 'Ajout...' : 'Ajouter'}</button>
        <button onClick={onClose}>Annuler</button>
      </div>
    </div>
  )
}
