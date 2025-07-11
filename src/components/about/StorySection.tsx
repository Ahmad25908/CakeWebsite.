"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function StorySection() {
  return (
    <section
      id="story"
      className="bg-[#f7f0ff] py-12 px-4 sm:px-6 lg:px-8"
      aria-label="Our Story Section"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[#4b2e5d] mb-4">
            Our Journey Started with a Whisk & a Dream
          </h2>
          <p className="text-[#6a3a82] text-lg leading-relaxed">
            CakeHut began as a small dream in our cozy kitchen, where passion met
            flour and magic happened in the oven. Every recipe we create is a
            tribute to love, quality, and the joy of sharing something sweet. Our
            founder’s love for baking turned into a commitment to make every cake
            a delicious memory for our customers. We believe in fresh ingredients,
            artistic presentation, and heartfelt service.
          </p>
        </motion.div>

        {/* Image Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="order-first md:order-last"
        >
          <div className="relative w-full h-72 sm:h-96 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/about/background.jpeg" // Replace with actual image path
              alt="Baking at CakeHut"
              fill
              className="object-cover object-center"
              priority={false}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
