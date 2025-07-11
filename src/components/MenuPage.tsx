'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client';
import { getAllCakesQuery, getAllCategoriesQuery } from '@/sanity/lib/queries';
import SearchBar from '@/components/SearchBar';
import Link from 'next/link';
import { Cake, Category } from '@/types';

const MenuPage = () => {
  const [cakes, setCakes] = useState<Cake[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const [fetchedCakes, fetchedCategories] = await Promise.all([
          client.fetch(getAllCakesQuery),
          client.fetch(getAllCategoriesQuery),
        ]);
        setCakes(fetchedCakes);
        setCategories(fetchedCategories);
      } catch (err) {
        setError('Failed to load menu data. Please try again later.');
        console.error('Error fetching data:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredCakes = cakes.filter((cake) => {
    if (!cake || !cake.name || !cake.description) return false;

    const matchesCategory =
      !selectedCategory || cake.category?.slug?.current === selectedCategory;

    const matchesSearch =
      searchTerm === '' ||
      cake.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cake.description.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500 p-4">{error}</div>;
  }

  return (
    <div className="bg-white px-4 py-8 max-w-screen-xl mx-auto">
      <h1 className="text-3xl font-bold text-[#a64fc0] mb-6">Cake Menu</h1>

      {/* Category Filters */}
      <div className="flex gap-2 overflow-x-auto py-2 sticky top-0 bg-white z-10 border-b">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-4 py-2 border rounded-full text-sm ${
            selectedCategory === null
              ? 'bg-[#a64fc0] text-white border-[#a64fc0]'
              : 'border-purple-300 hover:bg-purple-100'
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat._id}
            onClick={() => setSelectedCategory(cat.slug.current)}
            className={`px-4 py-2 border rounded-full text-sm ${
              selectedCategory === cat.slug.current
                ? 'bg-[#a64fc0] text-white border-[#a64fc0]'
                : 'border-purple-300 hover:bg-purple-100'
            }`}
          >
            {cat.title}
          </button>
        ))}
      </div>

      {/* Search Bar */}
      <SearchBar value={searchTerm} onChange={setSearchTerm} />

      {/* Cake Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {filteredCakes.map((cake) => (
          <div
            key={cake._id}
            className="bg-pink-50 rounded-xl shadow hover:shadow-purple-300 transition-all duration-300 hover:scale-[1.02] p-3 sm:p-4"
          >
            <div className="relative aspect-[4/3] w-full mb-3 rounded-lg overflow-hidden bg-gray-100">
              {cake.mainImage ? (
                <Image
                  src={cake.mainImage}
                  alt={cake.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  No Image
                </div>
              )}
            </div>
            <h2 className="text-sm sm:text-base font-semibold text-purple-700 truncate">
              {cake.name}
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">
              {cake.description}
            </p>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mt-4">
              <span className="text-purple-500 font-bold text-base sm:text-lg">${cake.price}</span>
              <Link href={`/menu/${cake.slug.current}`}>
                <button className="w-full sm:w-auto px-4 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 text-sm text-center">
                  Order Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
