import React from 'react'
import DashboardPage from './pages/dashboard/page'
import ProductsPage from './pages/products/page'
import MovementsPage from './pages/movements/page'
import ReportsPage from './pages/reports/page'

export default function App(){
  return (
    <div className="min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-4">Stock Management - Demo</h1>
      <div style={{display: 'grid', gap: 12}}>
        <DashboardPage />
        <ProductsPage />
        <MovementsPage />
        <ReportsPage />
      </div>
    </div>
  )
}
