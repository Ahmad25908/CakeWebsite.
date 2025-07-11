'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Cake } from '@/types';

export default function CakeUI({ cake, images }: { cake: Cake; images: string[] }) {
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [quantity, setQuantity] = useState(1);
  const [tab, setTab] = useState<'description' | 'details' | 'reviews'>('description');

  const totalPrice = (cake.price * quantity).toFixed(2);

  return (
    <main className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      {/* Images Section */}
      <div className="flex flex-col-reverse lg:flex-row gap-4">
        {/* Thumbnails */}
        <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-y-auto">
          {images.map((url, i) => (
            <button
              key={i}
              onClick={() => setSelectedImage(url)}
              className={`w-20 h-20 rounded-md overflow-hidden border-2 transition ${
                selectedImage === url ? 'border-purple-600' : 'border-gray-200 hover:border-purple-300'
              }`}
            >
              <Image
                src={url}
                alt={`Thumbnail ${i}`}
                width={80}
                height={80}
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </button>
          ))}
        </div>

        {/* Main Image */}
        <div className="relative w-full h-[450px] lg:h-[550px] xl:h-[600px] border rounded-lg shadow-md hover:shadow-xl transition">
          <Image
            src={selectedImage}
            alt={cake.name}
            fill
            className="object-contain rounded-lg"
            priority
          />
        </div>
      </div>

      {/* Info Section */}
      <div className="space-y-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-purple-700">{cake.name}</h1>
        <div className="text-xl sm:text-2xl font-bold text-green-700">Price: ${totalPrice}</div>

        <p className="text-sm text-gray-500">
          Category: <span className="font-semibold">{cake.category?.title}</span>
        </p>

        {/* Quantity Selector */}
        <div className="flex items-center gap-4">
          <label className="font-medium text-sm">Quantity:</label>
          <div className="flex items-center border rounded overflow-hidden">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="px-3 py-1 bg-gray-100 text-xl"
            >
              −
            </button>
            <span className="px-4">{quantity}</span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="px-3 py-1 bg-gray-100 text-xl"
            >
              +
            </button>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {cake.tags?.map((tag: string) => (
            <span
              key={tag}
              className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Order Button */}
        <button className="mt-6 w-full lg:w-auto px-6 py-3 bg-purple-600 text-white rounded hover:bg-purple-700 transition font-semibold shadow-lg">
          🛒 Order This Cake
        </button>

        {/* Tabs */}
        <div className="mt-8">
          <div className="flex gap-4 border-b">
            {['description', 'details', 'reviews'].map((label) => (
              <button
                key={label}
                onClick={() => setTab(label as any)}
                className={`pb-2 text-sm font-medium ${
                  tab === label
                    ? 'border-b-2 border-purple-600 text-purple-700'
                    : 'text-gray-500'
                }`}
              >
                {label.charAt(0).toUpperCase() + label.slice(1)}
              </button>
            ))}
          </div>
          <div className="mt-4 text-sm text-gray-700 leading-relaxed">
            {tab === 'description' && cake.description}
            {tab === 'details' && cake.details}
            {tab === 'reviews' && (cake.reviews || 'No reviews yet.')}
          </div>
        </div>
      </div>
    </main>
  );
}
