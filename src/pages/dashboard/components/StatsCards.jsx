import React from 'react'
export default function StatsCards(){
  return (
    <div style={{display:'flex', gap:12}}>
      <div className="card p-3">Produits: 12</div>
      <div className="card p-3">Valeur stock: 1,200.00</div>
      <div className="card p-3">Bénéfices: 320.00</div>
      <div className="card p-3">Alertes: 2</div>
    </div>
  )
}
