
'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

const cakeImages: string[] = [
  '/banner/cake1.jpg',
  '/banner/cake4.webp',
  '/banner/cake3.jpeg',
  '/banner/cake4.jpeg',
  '/banner/cake4.webp'
  ,
];

export default function CakeSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % cakeImages.length);
    }, 3500);
    return () => clearInterval(slideInterval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % cakeImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + cakeImages.length) % cakeImages.length);
  };

  return (
    <section className="w-full bg-white pt-0">
      <div className="relative overflow-hidden w-full shadow-xl border border-purple-200 mt-0">
        {/* Slide Images */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {cakeImages.map((src, index) => (
            <div
              key={index}
              className="min-w-full h-[200px] sm:h-[350px] md:h-[500px] lg:h-[600px] relative"
            >
              <Image
                src={src}
                alt={`Cake ${index + 1}`}
                fill
                style={{ objectFit: 'cover' }}
                quality={100}
                className="" // no rounded corners
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        {/* Desktop Arrows Only */}
        <div className="hidden sm:block">
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-purple-600 text-white p-3 rounded-full hover:bg-purple-700 transition shadow-md"
            aria-label="Previous Slide"
          >
            &#10094;
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-purple-600 text-white p-3 rounded-full hover:bg-purple-700 transition shadow-md"
            aria-label="Next Slide"
          >
            &#10095;
          </button>
        </div>

        {/* Slide Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {cakeImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition ${
                index === currentSlide ? 'bg-purple-500 scale-110' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
