'use client'

import React from 'react'
import { Product } from '@/lib/types'

interface ProductDetailsProps {
  product: Product;
}

export const ProductDetails = ({ product }: ProductDetailsProps) => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <img src={product.imageUrl} alt={product.name} className="w-full rounded-lg shadow-md" />
        </div>
        <div>
          <h1 className="text-2xl font-semibold mb-2">{product.name}</h1>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <div className="flex items-center justify-between mb-2">
            <span className="text-lg font-bold">가격: {product.price}원</span>
            <span className="text-sm text-gray-500">SKU: {product.sku}</span>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span>카테고리: {product.category}</span>
            <span>재고: {product.stockQuantity}</span>
          </div>
          <div>
            <p className="text-sm text-gray-500">생성일: {new Date(product.createdAt).toLocaleDateString('ko-KR')}</p>
            <p className="text-sm text-gray-500">업데이트일: {new Date(product.updatedAt).toLocaleDateString('ko-KR')}</p>
          </div>
        </div>
      </div>
    </div>
  )
}