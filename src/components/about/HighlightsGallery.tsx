'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const galleryImages = [
  { src: '/about/sweet1.jpeg', label: 'Best Seller' },
  { src: '/about/sweet2.jpeg', label: 'Loved by 100+ Families' },
  { src: '/about/sweet3.jpeg', label: 'Birthday Delight' },
  { src: '/about/sweet4.jpeg', label: 'Custom Creation' },
  { src: '/about/sweet5.jpeg', label: 'Freshly Baked' },
  { src: '/about/sweet6.jpeg', label: 'Customer Favorite' },
];

export default function HighlightsGallery() {
  return (
    <section id="highlights" aria-label="Cake highlights gallery" className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#4b2e5d]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Sweetest Moments
        </motion.h2>
        <motion.p
          className="mt-2 text-[#6a3a82] text-sm md:text-base"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          A look at the magic we’ve created for our customers.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {galleryImages.map((img, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-xl shadow-md group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Image
              src={img.src}
              alt={img.label}
              width={400}
              height={400}
              className="w-full h-full object-cover aspect-square transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
              <span className="text-white text-lg font-semibold">{img.label}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
