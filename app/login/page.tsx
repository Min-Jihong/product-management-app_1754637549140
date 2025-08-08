'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { useAtom } from 'jotai'
import { userAtom } from '@/lib/store'
import { LoginForm } from '@/components/forms/LoginForm'
import { mockUsers } from '@/lib/mock-data'

const LoginPage = () => {
  const router = useRouter()
  const [, setUser] = useAtom(userAtom)

  const handleSubmit = (data: any) => {
    const user = mockUsers.find((user) => user.email === data.email)

    if (user && data.password === 'password') {
      setUser(user)
      alert('로그인 성공!')
      router.push('/')
    } else {
      alert('이메일 또는 비밀번호가 잘못되었습니다.')
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-4 text-center">로그인</h2>
        <LoginForm onSubmit={handleSubmit} />
      </div>
    </div>
  )
}

export default LoginPage