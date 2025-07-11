"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function ChooseUsSection() {
  const features = [
    "Premium quality cakes",
    "100+ happy customers",
    "Delivered fresh",
    "Lahore’s top cake destination",
  ];

  return (
    <section
      id="choose-us"
      aria-label="Why choose CakeHut"
      className="bg-[#f7f0ff] py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-[#4b2e5d]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why Choose CakeHut
        </motion.h2>

        <motion.ul
          className="mt-10 space-y-4 text-left text-[#4b2e5d] font-medium"
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.1 }}
        >
          {features.map((feature, index) => (
            <motion.li
              key={index}
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <CheckCircle className="text-[#a64fc0] mt-1" size={22} />
              <span>{feature}</span>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a
            href="/menu"
            className="inline-block bg-[#a64fc0] text-white text-sm sm:text-base font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-[#8c3dbc] hover:scale-105 transform transition-all duration-300"
          >
            Order Your Dream Cake Today
          </a>
        </motion.div>
      </div>
    </section>
  );
}
