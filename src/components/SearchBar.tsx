import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="relative max-w-md w-full mx-auto">
      <div className="absolute inset-y-0 left-3 flex items-center">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        placeholder="Search locations..."
        className="w-full bg-zinc-800 text-white pl-10 pr-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500"
      />
    </div>
  );
};

export default SearchBar;