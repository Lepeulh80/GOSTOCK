import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import AddProductModal from '../src/pages/products/AddProductModal'

test('renders AddProductModal and submits', async () => {
  const onAdd = jest.fn().mockResolvedValue({ id: '1' })
  const onClose = jest.fn()
  render(<AddProductModal onAdd={onAdd} onClose={onClose} />)
  const name = screen.getByLabelText(/Nom/i)
  fireEvent.change(name, { target: { value: 'TestProduct' } })
  // Cherche le bouton "Ajouter" (évite le h3)
  const addBtns = screen.getAllByText(/Ajouter/i)
  const addBtn = addBtns.find((el) => el.tagName === 'BUTTON')
  fireEvent.click(addBtn)
  // onAdd is async; in our implementation it calls onClose after awaiting onAdd
  expect(onAdd).toHaveBeenCalled()
})
