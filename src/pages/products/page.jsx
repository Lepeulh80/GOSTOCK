import React, { useState } from 'react'
import useProducts from '../../hooks/useProducts'
import ProductTable from '../../components/Products/ProductTable'
import BarcodeScanner from '../../components/Barcode/BarcodeScanner'
import AddProductModal from './AddProductModal'
import EditProductModal from './EditProductModal'

export default function ProductsPage(){
  const { products, loading, error, addProduct, updateProduct, deleteProduct, fetchProducts, getProductByBarcode } = useProducts()
  const [scannerOpen, setScannerOpen] = useState(false)
  const [prefill, setPrefill] = useState(null)
  const [editProduct, setEditProductLocal] = useState(null)
  const [showAdd, setShowAdd] = useState(false)

  const handleAdd = async (payload) => { 
    const created = await addProduct(payload)
    // after creation, refresh list and open edit modal for the created product
    if (created && created.id) {
      setEditProductLocal(created)
    }
    return created
  }
  const handleUpdate = async (id, changes) => { await updateProduct(id, changes) }
  const handleDelete = async (id) => { if (!confirm('Confirmer la suppression')) return; await deleteProduct(id) }

  const onDetected = (code) => {
    setScannerOpen(false)
    alert('Code détecté: ' + code + ' — vous pouvez l\'associer à un produit (si non trouvé vous serez invité à créer).')
  }

  const onLookup = async (code) => {
    // try to find product by barcode
    try {
      const prod = await getProductByBarcode(code)
      if (prod) {
        // open edit modal directly with the found product
        setEditProductLocal(prod)
      } else {
        // Ask user if they want to auto-create a minimal product
        const createNow = confirm('Aucun produit trouvé pour le code-barres "' + code + '".\nVoulez-vous créer automatiquement un produit minimal avec ce code ? (Vous pourrez le modifier ensuite)')
        if (createNow) {
          // create minimal product
          const payload = {
            name: 'Produit ' + code,
            category: 'non-definie',
            stock: 0,
            alert_threshold: 0,
            buy_price: 0,
            sell_price: 0,
            notes: 'Créé automatiquement après scan',
            barcode: code,
            created_at: new Date().toISOString()
          }
          try {
            const created = await handleAdd(payload)
            if (created && created.id) {
              alert('Produit créé: ' + created.name + ' — ouverture de la modale Éditer.')
              setEditProductLocal(created)
            } else {
              alert('Le produit a été créé mais la réponse ne contient pas d\'id. Actualisez la page.')
            }
          } catch(e) {
            console.error(e)
            alert('Erreur lors de la création automatique: ' + (e.message || e))
          }
        } else {
          // open the Add modal prefilled
          setPrefill({ barcode: code, name: '', category: 'non-definie' })
          setShowAdd(true)
        }
      }
      // close scanner
      setScannerOpen(false)
    } catch(e) { console.error(e); alert('Erreur lors de la recherche du code-barres') }
  }

  return (
    <section className="card p-4 border rounded mt-4">
      <h2 className="text-lg font-semibold mb-2">Produits</h2>
      <div style={{display:'flex', gap:8, marginBottom:12}}>
        <button onClick={()=>setScannerOpen(s=>!s)}>{scannerOpen ? 'Fermer scanner' : 'Ouvrir scanner'}</button>
      </div>
      {scannerOpen && <BarcodeScanner onDetected={onDetected} onError={(e)=>alert('Scanner erreur: '+(e.message||e))} onLookup={onLookup} />}
      {loading && <div>Chargement...</div>}
      {error && <div style={{color:'red'}}>Erreur: {error.message}</div>}
      <ProductTable products={products} onAdd={handleAdd} onUpdate={handleUpdate} onDelete={handleDelete} onPrefill={()=>{ setPrefill(null); setShowAdd(true); }} />
      {prefill && <div style={{marginTop:8}}>Pré-remplissage détecté: {JSON.stringify(prefill)} — la modale Nouveau est ouverte.</div>}
      {editProduct && <div style={{marginTop:8}}>Produit trouvé pour édition: {editProduct.name} — la modale Modifier est ouverte.</div>}

      {showAdd && <AddProductModal prefill={prefill} onClose={()=>{ setShowAdd(false); setPrefill(null); }} onAdd={handleAdd} />}
      {editProduct && <EditProductModal product={editProduct} onClose={()=>setEditProductLocal(null)} onUpdate={handleUpdate} />}
    </section>
  )
}
