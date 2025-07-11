
"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HomepageSections() {
  return (
    <>
      {/* 🌟 Featured Cakes Section */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10 text-purple-700">
          Featured Cakes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="bg-[#F3E8FF] border border-purple-100 rounded-2xl shadow-lg p-4 hover:scale-105 transition-all"
            >
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={`/hero/cake/feature${i + 1}.jpeg`}
                  alt={`Delight Cake #${i + 1}`}
                  fill
                  className="rounded-xl object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
              <h3 className="text-lg font-semibold text-purple-800">
                Delight Cake #{i + 1}
              </h3>
              <p className="text-sm text-gray-600">
                Moist, creamy, and unforgettable.
              </p>
              <p className="text-purple-600 font-bold mt-2">$24.99</p>
              <button className="mt-3 bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition">
                Order Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 💬 Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-[#F5F3FF] to-[#EDE9FE] px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-700">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {["Emma", "Ali", "Sophia"].map((name, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className="p-6 rounded-xl shadow-lg bg-white border border-purple-100 hover:shadow-xl transition"
            >
              <p className="text-gray-700 italic">
                &ldquo;Absolutely loved the cake, it was perfect!&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-2">
                <span className="font-bold text-purple-800">{name}</span>
                <span className="text-yellow-400">★★★★★</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🎂 Custom Cake Orders */}
      <section className="bg-[#F5F3FF] py-20 px-6 text-center rounded-xl my-10 mx-4">
        <Image
          src="/hero/cake/customcake.jpeg"
          alt="Custom Cake"
          width={160}
          height={160}
          className="mx-auto h-40 mb-6"
        />
        <h2 className="text-3xl font-bold mb-4 text-purple-800">
          Custom Cakes for Every Occasion
        </h2>
        <p className="mb-6 max-w-xl mx-auto text-gray-700">
          We make your dream cake a reality — weddings, birthdays, or any celebration.
        </p>
        <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-full transition">
          Request Custom Cake
        </button>
      </section>

      {/* 🧁 Cake Categories */}
      <section className="py-20 px-6 bg-[#F8F5FF]">
        <h2 className="text-4xl font-bold text-center mb-10 text-purple-800">
          Browse by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-5xl mx-auto">
          {[
            { title: "Birthday Cakes", emoji: "🎂" },
            { title: "Wedding Cakes", emoji: "💍" },
            { title: "Cupcakes", emoji: "🧁" },
            { title: "Pastries", emoji: "🍩" },
          ].map(({ title, emoji }) => (
            <div
              key={title}
              className="p-6 rounded-full bg-white shadow-md hover:ring-2 hover:ring-purple-300 transition-all"
            >
              <div className="text-4xl mb-2">{emoji}</div>
              <h3 className="font-semibold text-purple-700">{title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* 🚚 Features */}
      <section className="py-16 px-6 bg-[#F8F5FF]">
        <div className="grid md:grid-cols-3 gap-6 text-purple-800 text-sm max-w-6xl mx-auto">
          {[
            { icon: "🚚", text: "Same-day delivery" },
            { icon: "📦", text: "Free city-wide delivery" },
            { icon: "🎯", text: "100% freshness guarantee" },
          ].map(({ icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-md"
            >
              <div className="text-2xl">{icon}</div>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 🧑‍🍳 About Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-50 to-white">
        <div className="flex flex-col md:flex-row gap-10 items-center max-w-5xl mx-auto">
          <div className="relative w-60 h-60">
            <Image
              src="/hero/cake/banner.jpeg"
              alt="Baker"
              fill
              className="rounded-full object-cover shadow-lg border-4 border-purple-200"
              sizes="(max-width: 768px) 240px, 240px"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4 text-purple-800">
              From Our Kitchen to Your Celebration
            </h2>
            <p className="text-lg text-purple-700">
              Our story began in a cozy home kitchen where passion met flour and
              frosting. Today, we bake for every joyful occasion.
            </p>
          </div>
        </div>
      </section>

      {/* 🖼 Gallery Section */}
      <section className="py-20 px-6 bg-[#F8F5FF]">
        <h2 className="text-4xl font-bold text-center mb-10 text-purple-800">
          Cake Gallery
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="relative aspect-square">
              <Image
                src={`/hero/cake/gallery${i + 1}.jpeg`}
                alt={`Gallery Cake #${i + 1}`}
                fill
                className="rounded-lg hover:scale-105 transition cursor-pointer shadow-md object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ✉️ Newsletter Signup */}
      <section className="py-16 px-6 text-center bg-white">
        <h2 className="text-3xl font-bold mb-4 text-purple-800">
          Get 10% Off Your First Order!
        </h2>
        <p className="mb-6 text-purple-600">
          Join our mailing list for sweet deals & news.
        </p>
        <form className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Your Email"
            className="rounded-full px-6 py-3 border border-purple-200 focus:ring-2 ring-purple-400 shadow"
          />
          <button className="bg-purple-500 text-white px-6 py-3 rounded-full hover:bg-purple-600 transition">
            Subscribe
          </button>
        </form>
      </section>
    </>
  );
}
