import React from 'react'
import StatsCards from './components/StatsCards'
import ProductList from './components/ProductList'
import StockChart from './components/StockChart'

export default function DashboardPage(){
  return (
    <section className="card p-4 border rounded">
      <h2 className="text-xl font-semibold mb-3">Tableau de bord</h2>
      <StatsCards />
      <StockChart />
      <ProductList />
    </section>
  )
}
