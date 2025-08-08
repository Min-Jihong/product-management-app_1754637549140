export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
  stockQuantity: number;
  sku: string;
}

export interface FilterOptions {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  sortBy?: 'price' | 'name' | 'createdAt';
  sortOrder?: 'asc' | 'desc';
  searchTerm?: string;
  isActive?: boolean;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
  permissions: string[];
}

export type UserRole = 'admin' | 'user' | 'guest';
export const USER_ROLES = ['admin', 'user', 'guest'] as const;