'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

interface Logo {
  id: number;
  name: string;
  src: string;
}

const logos: Logo[] = [
  { id: 1, name: 'Brand 1', src: '/logos/brand1.jpeg' },
  { id: 2, name: 'Brand 2', src: '/logos/brand2.jpeg' },
  { id: 3, name: 'Brand 3', src: '/logos/brand3.jpeg' },
  { id: 4, name: 'Brand 4', src: '/logos/brand4.jpeg' },
  { id: 5, name: 'Brand 5', src: '/logos/brand5.jpeg' },
  { id: 6, name: 'Brand 6', src: '/logos/brand6.jpeg' },
  { id: 7, name: 'Brand 7', src: '/logos/brand7.jpeg' },
  { id: 8, name: 'Brand 8', src: '/logos/brand8.jpeg' },
];

const LogoSlider: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const positionRef = useRef(0);
  const speedRef = useRef(1);
  const duplicatedLogos = [...logos, ...logos];

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const updateSpeed = () => {
      if (window.innerWidth < 640) speedRef.current = 0.3;
      else if (window.innerWidth < 1024) speedRef.current = 0.6;
      else speedRef.current = 1;
    };

    updateSpeed();
    window.addEventListener('resize', updateSpeed);

    const animate = () => {
      if (!slider) return;

      positionRef.current += speedRef.current;
      if (positionRef.current >= slider.scrollWidth / 2) {
        positionRef.current = 0;
      }

      slider.scrollLeft = positionRef.current;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', updateSpeed);
    };
  }, []);

  return (
    <div className="bg-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div
          ref={sliderRef}
          className="relative w-full overflow-hidden whitespace-nowrap"
        >
          <div className="inline-flex items-center gap-6">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="flex-shrink-0 transition-transform duration-300 ease-in-out hover:scale-105 border border-purple-200 rounded-lg p-2 shadow-sm hover:shadow-md hover:border-purple-400 bg-white"
              >
                <div className="w-36 h-20 relative">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    fill
                    className="object-contain filter grayscale contrast-75 hover:grayscale-0 hover:contrast-100 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;
