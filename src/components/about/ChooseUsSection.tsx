// components/ChooseUsSection.tsx
'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const features = [
  'Premium Quality Cakes',
  '100+ Happy Customers',
  'Delivered Fresh Daily',
  "Lahore's Top Cake Destination",
];

export default function ChooseUsSection() {
  return (
    <section
      id="why-cakehut"
      aria-label="Why Choose CakeHut"
      className="bg-[#f7f0ff] py-20 px-6 text-[#4b2e5d]"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold mb-4"
        >
          Why Choose CakeHut?
        </motion.h2>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left"
        >
          {features.map((feature, index) => (
            <motion.li
              key={index}
              className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-md border border-[#a64fc0]"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <CheckCircle className="text-[#a64fc0] w-6 h-6 mt-1" />
              <span className="text-lg font-medium">{feature}</span>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <a
            href="/menu"
            className="inline-block bg-[#a64fc0] text-white px-6 py-2 rounded-xl hover:bg-[#8c3dbc] transition shadow-md"
            aria-label="Order Your Dream Cake Today"
          >
            Order Your Dream Cake Today
          </a>
        </motion.div>
      </div>
    </section>
  );
}
