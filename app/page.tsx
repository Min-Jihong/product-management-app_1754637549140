'use client'

import React, { useState, useCallback } from 'react'
import { Product, FilterOptions } from '@/lib/types'
import { mockProducts } from '@/lib/mock-data'
import { ProductList } from '@/components/features/ProductList'
import { ProductFilter } from '@/components/features/ProductFilter'
import { ProductDetails } from '@/components/features/ProductDetails'
import { Button } from '@/components/ui/button'
import { Modal } from '@/components/ui/Modal'
import { useRouter } from 'next/navigation'

export default function Home() {
  const [products, setProducts] = useState<Product[]>(mockProducts)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const router = useRouter()

  const handleProductSelect = useCallback((product: Product) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }, [])

  const handleFilterChange = useCallback((filters: FilterOptions) => {
    let filteredProducts = mockProducts

    if (filters.category) {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === filters.category
      )
    }

    if (filters.minPrice) {
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= filters.minPrice
      )
    }

    if (filters.maxPrice) {
      filteredProducts = filteredProducts.filter(
        (product) => product.price <= filters.maxPrice
      )
    }

    if (filters.searchTerm) {
      filteredProducts = filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(filters.searchTerm!.toLowerCase())
      )
    }
    if (filters.isActive !== undefined) {
      filteredProducts = filteredProducts.filter(
        (product) => product.isActive === filters.isActive
      )
    }

    if (filters.sortBy) {
      filteredProducts = [...filteredProducts].sort((a, b) => {
        const sortOrder = filters.sortOrder === 'desc' ? -1 : 1

        switch (filters.sortBy) {
          case 'price':
            return sortOrder * (a.price - b.price)
          case 'name':
            return sortOrder * a.name.localeCompare(b.name)
          case 'createdAt':
            return sortOrder * (a.createdAt.getTime() - b.createdAt.getTime())
          default:
            return 0
        }
      })
    }

    setProducts(filteredProducts)
  }, [])

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProduct(null)
  }

  const handleNavigateToRegister = () => {
    router.push('/products/register')
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">제품 목록</h1>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/4">
          <ProductFilter onFilterChange={handleFilterChange} filterOptions={{}} />
        </div>

        <div className="w-full md:w-3/4">
          <ProductList products={products} onSelectProduct={handleProductSelect} />
        </div>
      </div>

      <Button variant="primary" onClick={handleNavigateToRegister}>
        제품 등록
      </Button>

      {selectedProduct && (
        <Modal
          title="제품 상세 정보"
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        >
          <ProductDetails product={selectedProduct} />
        </Modal>
      )}
    </div>
  )
}