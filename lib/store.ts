import { atom } from 'jotai'
import { mockProducts, mockUsers } from '@/lib/mock-data'
import { Product, FilterOptions, User } from '@/lib/types'

export const productListAtom = atom<Product[]>(mockProducts)
export const selectedProductAtom = atom<Product | null>(null)
export const filterOptionsAtom = atom<FilterOptions>({})
export const userAtom = atom<User | null>(null)