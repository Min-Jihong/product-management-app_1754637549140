'use client'

import React, { useState, useCallback } from 'react'
import { FilterOptions } from '@/lib/types'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface ProductFilterProps {
  onFilterChange: (filters: FilterOptions) => void
  filterOptions: FilterOptions
}

export const ProductFilter = ({ onFilterChange, filterOptions }: ProductFilterProps) => {
  const [category, setCategory] = useState<string | undefined>(filterOptions.category)
  const [minPrice, setMinPrice] = useState<number | undefined>(filterOptions.minPrice)
  const [maxPrice, setMaxPrice] = useState<number | undefined>(filterOptions.maxPrice)
  const [sortBy, setSortBy] = useState<"price" | "name" | "createdAt" | undefined>(filterOptions.sortBy)
  const [sortOrder, setSortOrder] = useState<"asc" | "desc" | undefined>(filterOptions.sortOrder)
  const [searchTerm, setSearchTerm] = useState<string | undefined>(filterOptions.searchTerm)
  const [isActive, setIsActive] = useState<boolean | undefined>(filterOptions.isActive)

  const handleFilterChange = useCallback(() => {
    const filters: FilterOptions = {
      category,
      minPrice,
      maxPrice,
      sortBy,
      sortOrder,
      searchTerm,
      isActive,
    }
    onFilterChange(filters)
  }, [category, minPrice, maxPrice, sortBy, sortOrder, searchTerm, isActive, onFilterChange])

  const handleCategoryChange = (value: string) => {
    setCategory(value === 'any-category' ? undefined : value)
  }

  const handleSortByChange = (value: string) => {
    setSortBy(value === 'none' ? undefined : (value as any))
  }

  const handleSortOrderChange = (value: string) => {
    setSortOrder(value === 'none' ? undefined : (value as any))
  }

  const handleIsActiveChange = (value: string) => {
    setIsActive(value === 'any-active' ? undefined : value === 'true')
  }

  return (
    <div className="flex flex-col gap-4 p-4 border rounded-md">
      <h3 className="text-lg font-semibold">제품 필터</h3>

      <div>
        <Label htmlFor="category">카테고리:</Label>
        <Select onValueChange={handleCategoryChange} value={category ?? 'any-category'}>
          <SelectTrigger id="category">
            <SelectValue placeholder="카테고리 선택" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any-category">모든 카테고리</SelectItem>
            <SelectItem value="Clothing">의류</SelectItem>
            <SelectItem value="Accessories">액세서리</SelectItem>
            <SelectItem value="Furniture">가구</SelectItem>
            <SelectItem value="Electronics">전자제품</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="minPrice">최소 가격:</Label>
        <Input
          type="number"
          id="minPrice"
          placeholder="최소 가격 입력"
          value={minPrice === undefined ? '' : minPrice.toString()}
          onChange={(e) => setMinPrice(e.target.value === '' ? undefined : parseFloat(e.target.value))}
        />
      </div>

      <div>
        <Label htmlFor="maxPrice">최대 가격:</Label>
        <Input
          type="number"
          id="maxPrice"
          placeholder="최대 가격 입력"
          value={maxPrice === undefined ? '' : maxPrice.toString()}
          onChange={(e) => setMaxPrice(e.target.value === '' ? undefined : parseFloat(e.target.value))}
        />
      </div>

      <div>
        <Label htmlFor="searchTerm">검색어:</Label>
        <Input
          type="text"
          id="searchTerm"
          placeholder="검색어 입력"
          value={searchTerm || ''}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div>
        <Label htmlFor="sortBy">정렬 기준:</Label>
        <Select onValueChange={handleSortByChange} value={sortBy ?? 'none'}>
          <SelectTrigger id="sortBy">
            <SelectValue placeholder="정렬 기준 선택" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="none">정렬 안함</SelectItem>
            <SelectItem value="price">가격</SelectItem>
            <SelectItem value="name">이름</SelectItem>
            <SelectItem value="createdAt">생성일</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="sortOrder">정렬 순서:</Label>
        <Select onValueChange={handleSortOrderChange} value={sortOrder ?? 'none'}>
          <SelectTrigger id="sortOrder">
            <SelectValue placeholder="정렬 순서 선택" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="none">정렬 안함</SelectItem>
            <SelectItem value="asc">오름차순</SelectItem>
            <SelectItem value="desc">내림차순</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="isActive">활성 상태:</Label>
        <Select onValueChange={handleIsActiveChange} value={isActive === undefined ? 'any-active' : isActive.toString()}>
          <SelectTrigger id="isActive">
            <SelectValue placeholder="활성 상태 선택" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any-active">모두</SelectItem>
            <SelectItem value="true">활성</SelectItem>
            <SelectItem value="false">비활성</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button onClick={handleFilterChange} className="w-full">
        필터 적용
      </Button>
    </div>
  )
}