"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react"; // optional: uses lucide-react for cleaner icon

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  const [inputValue, setInputValue] = useState(value);

  const handleSearch = () => {
    onChange(inputValue);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch();
      }}
      className="w-full max-w-xl mx-auto mt-6 px-4 sm:px-0 flex"
    >
      <div className="flex w-full shadow-md rounded-md overflow-hidden border border-purple-300 focus-within:ring-2 focus-within:ring-purple-500">
        <Input
          type="text"
          placeholder="Search for cakes..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="flex-grow border-none focus:ring-0 focus:outline-none text-sm sm:text-base px-4 py-2"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-[#a64fc0] text-white hover:bg-[#9133ba] transition flex items-center justify-center"
        >
          <Search className="h-5 w-5" />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
