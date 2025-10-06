import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import ProductTable from '../src/pages/products/ProductTable'

test('renders ProductTable and New button triggers add modal', () => {
  const products = [{ id: '1', name: 'A', category: 'c', stock: 5, alert_threshold: 2, sell_price: 10 }]
  const onAdd = jest.fn()
  render(<ProductTable products={products} onAdd={onAdd} onUpdate={()=>{}} onDelete={()=>{}} />)
  const newBtn = screen.getByText(/Nouveau/i)
  fireEvent.click(newBtn)
  // Cherche le bouton "Ajouter" (évite le h3)
  const addBtns = screen.getAllByText(/Ajouter/i)
  // On prend le bouton (celui qui est un <button>)
  const addBtn = addBtns.find((el) => el.tagName === 'BUTTON')
  expect(addBtn).toBeInTheDocument()
})
