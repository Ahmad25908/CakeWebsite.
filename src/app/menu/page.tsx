'use client'

import React from 'react'
import Banner from '@/components/banner'
import MenuPage from '@/components/MenuPage'

export default function MenuPageWrapper() {
  return (
    <div className="min-h-screen bg-white">
      <Banner />
      <MenuPage />
    </div>
  )
}
