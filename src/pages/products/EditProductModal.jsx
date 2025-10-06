import React, { useState, useEffect } from 'react'

export default function EditProductModal({ product, onClose, onUpdate }){
  const [form, setForm] = useState(null)
  useEffect(()=> setForm(product ? { ...product } : null), [product])
  if (!form) return null
  const handleChange = (e) => setForm({...form, [e.target.name]: e.target.value})

  const submit = async () => {
    try {
      const payload = {
        name: form.name,
        category: form.category,
        stock: parseInt(form.stock,10)||0,
        alert_threshold: parseInt(form.alert_threshold,10)||0,
        buy_price: parseFloat(form.buy_price)||0,
        sell_price: parseFloat(form.sell_price)||0,
        notes: form.notes || '',
        barcode: form.barcode || null
      }
      await onUpdate(form.id, payload)
      onClose()
    } catch(e) { alert(e.message || 'Erreur') }
  }

  return (
    <div className="modal-card p-4 border rounded" role="dialog">
      <h3>Modifier le produit</h3>
      <label>Nom<input name="name" value={form.name} onChange={handleChange} /></label>
      <label>Catégorie<input name="category" value={form.category} onChange={handleChange} /></label>
      <label>Stock<input name="stock" value={form.stock} onChange={handleChange} type="number" /></label>
      <label>Seuil d'alerte<input name="alert_threshold" value={form.alert_threshold} onChange={handleChange} type="number" /></label>
      <label>Prix d'achat<input name="buy_price" value={form.buy_price} onChange={handleChange} type="number" step="0.01" /></label>
      <label>Prix de vente<input name="sell_price" value={form.sell_price} onChange={handleChange} type="number" step="0.01" /></label>
      <label>Notes<textarea name="notes" value={form.notes} onChange={handleChange} /></label>
      <label>Code-barres<input name="barcode" value={form.barcode} onChange={handleChange} /></label>
      <div style={{display:'flex', gap:8, marginTop:8}}>
        <button onClick={submit}>Sauvegarder</button>
        <button onClick={onClose}>Annuler</button>
      </div>
    </div>
  )
}
