'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'primary', className }) => {
  let buttonStyle = 'rounded-md px-4 py-2 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2'

  switch (variant) {
    case 'primary':
      buttonStyle += ' bg-blue-500 text-white hover:bg-blue-700 focus:ring-blue-500'
      break
    case 'secondary':
      buttonStyle += ' bg-gray-100 text-gray-800 hover:bg-gray-300 focus:ring-gray-300'
      break
    case 'ghost':
      buttonStyle += ' text-gray-700 hover:bg-gray-100 focus:ring-gray-200'
      break
    default:
      buttonStyle += ' bg-blue-500 text-white hover:bg-blue-700 focus:ring-blue-500'
  }

  return (
    <button className={cn(buttonStyle, className)} onClick={onClick}>
      {children}
    </button>
  )
}