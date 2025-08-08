'use client'

import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface ModalProps {
  title: string
  children: React.ReactNode
  onClose: () => void
  isOpen: boolean
}

export const Modal: React.FC<ModalProps> = ({ title, children, onClose, isOpen }) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => {
      if (!open) {
        onClose()
      }
    }}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        {children}
        <Button onClick={onClose}>닫기</Button>
      </DialogContent>
    </Dialog>
  )
}