'use client'

import React from 'react'
import { User } from '@/lib/types'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'

interface HeaderProps {
  user: User | null | undefined
}

export const Header = ({ user }: HeaderProps) => {
  return (
    <header className="bg-gray-100 py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          상품 관리
        </Link>
        <nav>
          <ul className="flex items-center space-x-4">
            <li>
              <Link href="/" className="hover:text-gray-700">
                홈
              </Link>
            </li>
            <li>
              <Link href="/products/register" className="hover:text-gray-700">
                상품 등록
              </Link>
            </li>
            {user ? (
              <>
                <li>
                  <span>{user.name}</span>
                </li>
                <li>
                  <Button variant="outline" onClick={() => alert('로그아웃!')}>
                    로그아웃
                  </Button>
                </li>
              </>
            ) : (
              <li>
                <Link href="/login">
                  <Button>로그인</Button>
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  )
}