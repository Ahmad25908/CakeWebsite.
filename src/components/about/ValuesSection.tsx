'use client';

import { motion } from 'framer-motion';
import { Cake, Heart, Hand } from 'lucide-react'; // Replaced Handshake with Hand

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

const values = [
  {
    icon: <Cake className="w-10 h-10 text-[#a64fc0]" />,
    title: 'Fresh Ingredients',
    text: 'We bake with only the freshest and finest ingredients every day.',
  },
  {
    icon: <Heart className="w-10 h-10 text-[#a64fc0]" />,
    title: 'Custom-Made With Love',
    text: 'Each cake is handcrafted to match your story and celebration.',
  },
  {
    icon: <Hand className="w-10 h-10 text-[#a64fc0]" />,
    title: 'Community & Care',
    text: 'We care about our customers and love to be part of your events.',
  },
];

export default function ValuesSection() {
  return (
    <section
      id="values"
      className="bg-[#f7f0ff] py-16 px-6"
      aria-label="Our Core Values"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#4b2e5d] mb-10">
          What We Believe In
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="bg-white rounded-xl border border-[#a64fc0] p-6 shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                {value.icon}
                <h3 className="text-xl font-semibold text-[#4b2e5d]">
                  {value.title}
                </h3>
                <p className="text-sm text-[#6a3a82]">{value.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
