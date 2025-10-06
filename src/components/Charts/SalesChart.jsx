import React from 'react'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts'

export default function SalesChart({ data }){
  const sample = data || [
    { date: '2025-09-27', sales: 400 },
    { date: '2025-09-28', sales: 300 },
    { date: '2025-09-29', sales: 500 },
    { date: '2025-09-30', sales: 200 },
    { date: '2025-10-01', sales: 600 },
  ]
  return (
    <div className="card p-3 mt-3" style={{height:240}}>
      <h3>Ventes (exemple)</h3>
      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={sample}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="sales" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
