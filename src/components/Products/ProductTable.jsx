import React, { useState } from 'react'
import AddProductModal from '../../pages/products/AddProductModal'
import EditProductModal from '../../pages/products/EditProductModal'

export default function ProductTable({ products = [], onAdd, onUpdate, onDelete, onPrefill }){
  const [showAdd, setShowAdd] = useState(false)
  const [editProduct, setEditProduct] = useState(null)

  return (
    <div className="card p-3 mt-3">
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <h3>Produits</h3>
        <button onClick={()=>{ if(onPrefill){ onPrefill(); } setShowAdd(true); }}>Nouveau</button>
      </div>
      <table style={{width:'100%', marginTop:8}}>
        <thead><tr><th>Nom</th><th>Catégorie</th><th>Stock</th><th>Seuil</th><th>Prix vente</th><th>Actions</th></tr></thead>
        <tbody>
          {products.map(p => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.category}</td>
              <td>{p.stock}</td>
              <td>{p.alert_threshold}</td>
              <td>{p.sell_price}</td>
              <td>
                <button onClick={()=>setEditProduct(p)}>Modifier</button>
                <button onClick={()=>{ if(confirm('Supprimer ?')) onDelete(p.id) }}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showAdd && <AddProductModal onClose={()=>setShowAdd(false)} onAdd={onAdd} />}
      {editProduct && <EditProductModal product={editProduct} onClose={()=>setEditProduct(null)} onUpdate={onUpdate} />}
    </div>
  )
}
