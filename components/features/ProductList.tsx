'use client'

import React from 'react'
import { Product } from '@/lib/types'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

interface ProductListProps {
  products: Product[]
  onSelectProduct: (product: Product) => void
}

export const ProductList: React.FC<ProductListProps> = ({ products, onSelectProduct }) => {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => (
        <Card key={product.id} className="shadow-md">
          <CardHeader>
            <CardTitle>{product.name}</CardTitle>
            <CardDescription>{product.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
            <p>가격: {product.price} 원</p>
            <p>카테고리: {product.category}</p>
            <p>재고: {product.stockQuantity}</p>
          </CardContent>
          <CardFooter>
            <Button onClick={() => {
              onSelectProduct(product)
              alert('상품 선택됨!')
            }}>상세 정보</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}