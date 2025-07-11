'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutBanner() {
  return (
    <section
      aria-label="About CakeHut Banner"
      className="relative flex items-center justify-center bg-gradient-to-br from-[#f7f0ff] to-white min-h-[40vh] md:min-h-[60vh] px-4 overflow-hidden"
    >
      {/* Blurred background image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/cake-pattern-bg.png" // Replace with actual image
          alt="CakeHut Background"
          fill
          className="object-cover opacity-30 blur-sm"
          priority
        />
      </div>

      {/* Overlay gradient for added depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-[#f7f0ff]/90 -z-10" />

      {/* Optional Floating Cake SVG */}
      <div className="absolute top-10 right-10 w-20 h-20 opacity-10 rotate-[15deg]">
        <Image
          src="/cup2.png" // Add an icon to public/icons
          alt="Cake Icon"
          fill
          className="object-contain"
        />
      </div>

      {/* Content */}
      <div className="text-center max-w-2xl z-10">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-[#4b2e5d] leading-snug"
        >
          Welcome to <span className="text-[#a64fc0]">CakeHut</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-4 text-lg md:text-xl text-[#6a3a82] font-medium"
        >
          Where every slice tells a story.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6"
        >
          <Link
            href="#story"
            aria-label="Scroll to Our Story"
            className="inline-block px-6 py-3 bg-[#a64fc0] text-white font-semibold text-base rounded-xl shadow-md hover:bg-[#8c3dbc] hover:scale-105 transition-all duration-300"
          >
            Learn More
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
