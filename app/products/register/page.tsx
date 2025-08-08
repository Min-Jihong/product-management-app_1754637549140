'use client'

import React from 'react'
import { Product } from '@/lib/types'
import { ProductRegistrationForm } from '@/components/forms/ProductRegistrationForm'
import { useRouter } from 'next/navigation'

const ProductRegisterPage = () => {
  const router = useRouter()

  const handleProductRegistration = (productData: Product) => {
    alert('제품 등록이 완료되었습니다!')
    router.push('/')
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">제품 등록</h1>
      <ProductRegistrationForm onSubmit={handleProductRegistration} />
    </div>
  )
}

export default ProductRegisterPage