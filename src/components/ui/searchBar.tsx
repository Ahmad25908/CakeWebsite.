'use client'

import { useState } from 'react'

export default function SearchForm() {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search logic here
    console.log('Searching for:', searchTerm)
  }

  return (
    <div>
      <h3 className="font-semibold text-lg mb-3">Search</h3>
      <form onSubmit={handleSubmit} className="flex items-center max-w-sm">
        <input
          type="text"
          placeholder="Search cakes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-3 py-2 rounded-l-md border border-[#d3c0eb] text-sm focus:outline-none focus:ring-2 focus:ring-[#a64fc0]"
        />
        <button
          type="submit"
          className="px-3 py-2 bg-[#a64fc0] text-white rounded-r-md hover:bg-[#9133ba] transition"
        >
          🔍
        </button>
      </form>
    </div>
  )
}
