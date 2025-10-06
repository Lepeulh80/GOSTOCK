import React from 'react'
import SalesChart from '../../components/Charts/SalesChart'

export default function ReportsPage(){
  // In a real app you'd fetch aggregated data from Supabase
  return (
    <section className="card p-4 border rounded mt-4">
      <h2 className="text-lg font-semibold mb-2">Rapports</h2>
      <p>Graphiques et analyses financières.</p>
      <SalesChart />
    </section>
  )
}
