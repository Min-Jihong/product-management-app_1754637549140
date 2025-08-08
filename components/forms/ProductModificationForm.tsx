'use client'

import React, { useState } from 'react'
import { Product } from '@/lib/types'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'

interface ProductModificationFormProps {
  product: Product;
  onSubmit: (data: Product) => void;
}

export const ProductModificationForm = ({ product, onSubmit }: ProductModificationFormProps) => {
  const [name, setName] = useState(product.name)
  const [description, setDescription] = useState(product.description)
  const [price, setPrice] = useState(product.price)
  const [imageUrl, setImageUrl] = useState(product.imageUrl)
  const [category, setCategory] = useState(product.category)
  const [stockQuantity, setStockQuantity] = useState(product.stockQuantity)
  const [sku, setSku] = useState(product.sku)
  const [isActive, setIsActive] = useState(product.isActive)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!name || !description || !price || !imageUrl || !category || !stockQuantity || !sku) {
      alert('모든 필드를 채워주세요.')
      return
    }

    const updatedProduct: Product = {
      ...product,
      name,
      description,
      price: Number(price),
      imageUrl,
      category,
      stockQuantity: Number(stockQuantity),
      sku,
      isActive,
      updatedAt: new Date(),
    }

    onSubmit(updatedProduct)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">제품 이름</Label>
        <Input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="제품 이름을 입력하세요"
          required
        />
      </div>
      <div>
        <Label htmlFor="description">제품 설명</Label>
        <Textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="제품 설명을 입력하세요"
          required
        />
      </div>
      <div>
        <Label htmlFor="price">가격</Label>
        <Input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          placeholder="가격을 입력하세요"
          required
        />
      </div>
      <div>
        <Label htmlFor="imageUrl">이미지 URL</Label>
        <Input
          type="text"
          id="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="이미지 URL을 입력하세요"
          required
        />
      </div>
      <div>
        <Label htmlFor="category">카테고리</Label>
        <Input
          type="text"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="카테고리를 입력하세요"
          required
        />
      </div>
      <div>
        <Label htmlFor="stockQuantity">재고 수량</Label>
        <Input
          type="number"
          id="stockQuantity"
          value={stockQuantity}
          onChange={(e) => setStockQuantity(Number(e.target.value))}
          placeholder="재고 수량을 입력하세요"
          required
        />
      </div>
      <div>
        <Label htmlFor="sku">SKU</Label>
        <Input
          type="text"
          id="sku"
          value={sku}
          onChange={(e) => setSku(e.target.value)}
          placeholder="SKU를 입력하세요"
          required
        />
      </div>
      <div>
        <Label htmlFor="isActive">활성 상태</Label>
        <select
          id="isActive"
          value={isActive}
          onChange={(e) => setIsActive(e.target.value === 'true')}
          className="w-full px-3 py-2 border rounded-md"
        >
          <option value="true">활성</option>
          <option value="false">비활성</option>
        </select>
      </div>

      <Button type="submit">수정하기</Button>
    </form>
  )
}