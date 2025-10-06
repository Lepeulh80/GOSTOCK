import React from 'react'
import { render, screen } from '@testing-library/react'
import EditProductModal from '../src/pages/products/EditProductModal'

test('renders EditProductModal with product data', () => {
  const product = { id: '1', name: 'Test', category: 'cat', stock: 3, alert_threshold:1, buy_price:1, sell_price:2, notes:'n', barcode:'123' }
  render(<EditProductModal product={product} onClose={()=>{}} onUpdate={()=>{}} />)
  expect(screen.getByDisplayValue('Test')).toBeInTheDocument()
  expect(screen.getByDisplayValue('123')).toBeInTheDocument()
})
