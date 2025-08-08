'use client'

import React from 'react'
import { Product } from '@/lib/types'
import { selectedProductAtom } from '@/lib/store'
import { useAtom } from 'jotai'
import { ProductModificationForm } from '@/components/forms/ProductModificationForm'
import { useRouter } from 'next/navigation'

const ProductModifyPage = () => {
  const [selectedProduct, setSelectedProduct] = useAtom(selectedProductAtom)
  const router = useRouter()

  if (!selectedProduct) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg">수정할 제품을 선택해주세요.</p>
      </div>
    )
  }

  const handleModifySubmit = (modifiedProduct: Product) => {
    alert('제품 수정 요청이 제출되었습니다.')
    setSelectedProduct(null)
    router.push('/products')
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">제품 수정 요청</h1>
      <ProductModificationForm product={selectedProduct} onSubmit={handleModifySubmit} />
    </div>
  )
}

export default ProductModifyPage