'use client'

import React, { useState } from 'react'
import { Product } from '@/lib/types'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

interface ProductRegistrationFormProps {
  onSubmit: (data: Product) => void
}

export const ProductRegistrationForm = ({ onSubmit }: ProductRegistrationFormProps) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState<number | undefined>(undefined)
  const [imageUrl, setImageUrl] = useState('')
  const [category, setCategory] = useState('')
  const [stockQuantity, setStockQuantity] = useState<number | undefined>(undefined)
  const [sku, setSku] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!name || !description || !price || !imageUrl || !category || !stockQuantity || !sku) {
      alert('모든 필드를 채워주세요.')
      return
    }

    const newProduct: Product = {
      id: crypto.randomUUID(),
      name,
      description,
      price,
      imageUrl,
      category,
      createdAt: new Date(),
      updatedAt: new Date(),
      isActive: true,
      stockQuantity,
      sku,
    }

    onSubmit(newProduct)

    setName('')
    setDescription('')
    setPrice(undefined)
    setImageUrl('')
    setCategory('')
    setStockQuantity(undefined)
    setSku('')

    alert('제품이 등록되었습니다.')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          제품 이름
        </label>
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
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          제품 설명
        </label>
        <Textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="제품 설명을 입력하세요"
          required
        />
      </div>
      <div>
        <label htmlFor="price" className="block text-sm font-medium text-gray-700">
          가격
        </label>
        <Input
          type="number"
          id="price"
          value={price !== undefined ? price.toString() : ''}
          onChange={(e) => setPrice(e.target.value ? parseFloat(e.target.value) : undefined)}
          placeholder="가격을 입력하세요"
          required
        />
      </div>
      <div>
        <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">
          이미지 URL
        </label>
        <Input
          type="url"
          id="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="이미지 URL을 입력하세요"
          required
        />
      </div>
      <div>
        <label htmlFor="category" className="block text-sm font-medium text-gray-700">
          카테고리
        </label>
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
        <label htmlFor="stockQuantity" className="block text-sm font-medium text-gray-700">
          재고 수량
        </label>
        <Input
          type="number"
          id="stockQuantity"
          value={stockQuantity !== undefined ? stockQuantity.toString() : ''}
          onChange={(e) => setStockQuantity(e.target.value ? parseFloat(e.target.value) : undefined)}
          placeholder="재고 수량을 입력하세요"
          required
        />
      </div>
      <div>
        <label htmlFor="sku" className="block text-sm font-medium text-gray-700">
          SKU
        </label>
        <Input
          type="text"
          id="sku"
          value={sku}
          onChange={(e) => setSku(e.target.value)}
          placeholder="SKU를 입력하세요"
          required
        />
      </div>

      <Button type="submit">등록</Button>
    </form>
  )
}