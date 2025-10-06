import React from 'react'
export default function ProductList(){
  return (
    <div className="card p-3 mt-3">
      <h3 className="font-medium">Liste des produits</h3>
      <ul>
        <li>Produit A - Stock: 10 - Prix vente: 5.00</li>
        <li>Produit B - Stock: 3 - Prix vente: 8.00 (alerte)</li>
        <li>Produit C - Stock: 25 - Prix vente: 2.50</li>
      </ul>
    </div>
  )
}
