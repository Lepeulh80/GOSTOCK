import { useState, useEffect, useCallback } from 'react'
import { supabase } from '../lib/supabaseClient'

export default function useProducts() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchProducts = useCallback(async () => {
    setLoading(true)
    const { data, error } = await supabase.from('products').select('*').order('created_at', { ascending: false })
    if (error) setError(error)
    else setProducts(data || [])
    setLoading(false)
  }, [])

  useEffect(() => { fetchProducts() }, [fetchProducts])

  const getProductByBarcode = async (barcode) => {
    if (!barcode) return null
    setLoading(true)
    const { data, error } = await supabase.from('products').select('*').eq('barcode', barcode).maybeSingle()
    setLoading(false)
    if (error) {
      console.error(error)
      return null
    }
    return data || null
  }

  const addProduct = async (product) => {
    setLoading(true)
    const { data, error } = await supabase.from('products').insert([product]).select().single()
    setLoading(false)
    if (error) throw error
    setProducts(prev => [data, ...prev])
    return data
  }

  const updateProduct = async (id, changes) => {
    setLoading(true)
    const { data, error } = await supabase.from('products').update(changes).eq('id', id).select().single()
    setLoading(false)
    if (error) throw error
    setProducts(prev => prev.map(p => p.id === id ? data : p))
    return data
  }

  const deleteProduct = async (id) => {
    setLoading(true)
    const { error } = await supabase.from('products').delete().eq('id', id)
    setLoading(false)
    if (error) throw error
    setProducts(prev => prev.filter(p => p.id !== id))
    return true
  }

  return { products, loading, error, fetchProducts, getProductByBarcode, addProduct, updateProduct, deleteProduct }
}
