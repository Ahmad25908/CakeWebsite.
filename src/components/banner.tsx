"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const typingTexts = [
  "Freshly Baked Cakes 🎂",
  "Custom Flavors & Designs 🍰",
  "Same Day Delivery 🚚",
  "100% Eggless Options 🥚❌",
];

const Banner = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentText = typingTexts[textIndex];
    if (charIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentText[charIndex]);
        setCharIndex(charIndex + 1);
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayedText("");
        setCharIndex(0);
        setTextIndex((prev) => (prev + 1) % typingTexts.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, textIndex]);

  return (
    <section className="bg-[#f7f0ff] rounded-3xl shadow-2xl px-6 py-12 md:px-16 mb-12">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Left Side Text */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#a64fc0] to-[#f48fb1] text-transparent bg-clip-text leading-tight">
            Welcome to Cake Heaven 🎂
          </h1>

          <p className="text-xl font-semibold text-gray-700 h-8">
            {displayedText}
            <span className="animate-pulse text-[#a64fc0]">|</span>
          </p>

          <ul className="text-gray-700 text-base md:text-lg space-y-3 font-medium">
            <li className="flex items-center gap-2">
              ✅ Custom birthday, wedding & celebration cakes
            </li>
            <li className="flex items-center gap-2">
              ✅ Premium ingredients & handcrafted decoration
            </li>
            <li className="flex items-center gap-2">
              ✅ Online order & doorstep delivery available
            </li>
            <li className="flex items-center gap-2">
              ✅ Discounts for bulk/corporate orders
            </li>
          </ul>
        </div>

        {/* Right Side Image with Motion */}
        <motion.div
          className="md:w-1/2 w-full flex justify-center"
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            type: "tween",
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2,
          }}
        >
          <div className="relative w-60 h-60 md:w-80 md:h-80 rounded-full bg-white/70 shadow-xl ring-8 ring-[#f7f0ff] overflow-hidden">
            <Image
              src="/cup23.png" // Ensure this is the cupcake image with transparent background
              alt="Cupcakes"
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
