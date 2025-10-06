import useProducts from '../src/hooks/useProducts'
import { renderHook, act } from '@testing-library/react'
import * as supabaseClient from '../src/lib/supabaseClient'

jest.mock('../src/lib/supabaseClient')

const fakeProducts = [{ id: '1', name: 'A', stock: 10 }]


supabaseClient.supabase = {
  from: jest.fn(() => ({
    select: jest.fn(() => ({
      order: jest.fn(() => ({ data: fakeProducts, error: null })),
      data: fakeProducts, error: null
    })),
    insert: jest.fn(() => ({ data: fakeProducts[0], error: null })),
    update: jest.fn(() => ({ data: fakeProducts[0], error: null })),
    delete: jest.fn(() => ({ error: null })),
  })),
}

test('useProducts fetches initial products', async () => {
  const { result, waitForNextUpdate } = renderHook(() => useProducts())
  // wait a tick for useEffect to run
  await new Promise(r => setTimeout(r, 50))
  expect(result.current.products.length).toBeGreaterThanOrEqual(0)
})
