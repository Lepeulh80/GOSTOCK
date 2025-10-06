import React from 'react'
import { render } from '@testing-library/react'
import BarcodeScanner from '../src/components/Barcode/BarcodeScanner'

jest.mock('quagga', () => ({
  init: jest.fn((opts, cb) => cb && cb()),
  start: jest.fn(),
  stop: jest.fn(),
  onDetected: jest.fn(),
}))

test('renders BarcodeScanner placeholder', () => {
  const { container } = render(<BarcodeScanner />)
  expect(container.querySelector('[aria-label="scanner"]')).toBeInTheDocument()
})
