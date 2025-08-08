import { Product, User, UserRole } from '@/lib/types';
import { v4 as uuidv4 } from 'uuid';

export const mockProducts: Product[] = [
  {
    id: uuidv4(),
    name: 'Awesome T-Shirt',
    description: 'A comfortable and stylish t-shirt for everyday wear.',
    price: 25.99,
    imageUrl: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    category: 'Clothing',
    createdAt: new Date(),
    updatedAt: new Date(),
    isActive: true,
    stockQuantity: 50,
    sku: 'TSHIRT-001'
  },
  {
    id: uuidv4(),
    name: 'Stylish Laptop Bag',
    description: 'A durable and fashionable laptop bag to protect your device.',
    price: 49.99,
    imageUrl: 'https://images.unsplash.com/photo-1576779230323-b58b751f632b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
    category: 'Accessories',
    createdAt: new Date(),
    updatedAt: new Date(),
    isActive: true,
    stockQuantity: 30,
    sku: 'BAG-002'
  },
  {
    id: uuidv4(),
    name: 'Ergonomic Office Chair',
    description: 'An ergonomic chair designed for comfort and support during long work hours.',
    price: 129.99,
    imageUrl: 'https://images.unsplash.com/photo-1560518793-1ca1499c2c65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    category: 'Furniture',
    createdAt: new Date(),
    updatedAt: new Date(),
    isActive: true,
    stockQuantity: 15,
    sku: 'CHAIR-003'
  },
  {
    id: uuidv4(),
    name: 'Wireless Mouse',
    description: 'A comfortable and reliable wireless mouse for your computer.',
    price: 19.99,
    imageUrl: 'https://images.unsplash.com/photo-1527153150449-c3e12593ca15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    category: 'Electronics',
    createdAt: new Date(),
    updatedAt: new Date(),
    isActive: true,
    stockQuantity: 40,
    sku: 'MOUSE-004'
  }
];

export const mockUsers: User[] = [
  {
    id: uuidv4(),
    email: 'admin@example.com',
    name: 'Admin User',
    role: 'admin',
    createdAt: new Date(),
    updatedAt: new Date(),
    isActive: true,
    permissions: ['read', 'write', 'delete']
  },
  {
    id: uuidv4(),
    email: 'user@example.com',
    name: 'Regular User',
    role: 'user',
    createdAt: new Date(),
    updatedAt: new Date(),
    isActive: true,
    permissions: ['read']
  },
  {
    id: uuidv4(),
    email: 'guest@example.com',
    name: 'Guest User',
    role: 'guest',
    createdAt: new Date(),
    updatedAt: new Date(),
    isActive: false,
    permissions: []
  }
];