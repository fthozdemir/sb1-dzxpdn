import React, { useState } from 'react';
import { Search as SearchIcon, MapPin, Star } from 'lucide-react';
import { mockLocations } from '../data/mockData';
import type { Location } from '../types';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [locations, setLocations] = useState<Location[]>(mockLocations);

  const filteredLocations = locations.filter(location =>
    location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    location.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    location.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSaveLocation = (id: string) => {
    setLocations(locations.map(location =>
      location.id === id ? { ...location, saved: !location.saved } : location
    ));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="sticky top-0 bg-zinc-950 pt-4 pb-6 z-10">
        <div className="relative">
          <SearchIcon className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search locations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-zinc-800 text-white pl-12 pr-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
      </div>

      <div className="space-y-4">
        {filteredLocations.map(location => (
          <div
            key={location.id}
            className="flex flex-col sm:flex-row gap-4 bg-zinc-900 rounded-lg overflow-hidden hover:bg-zinc-800 transition-colors"
          >
            <img
              src={location.imageUrl}
              alt={location.name}
              className="w-full sm:w-48 h-48 sm:h-32 object-cover"
            />
            <div className="flex-1 p-4">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-0">
                <div>
                  <h3 className="text-lg font-semibold text-white">{location.name}</h3>
                  <div className="flex items-center gap-2 mt-1 text-gray-400">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{location.category}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-emerald-500 fill-emerald-500" />
                  <span className="text-sm font-medium">{location.rating}</span>
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-400 line-clamp-2">
                {location.description}
              </p>
              <button
                onClick={() => handleSaveLocation(location.id)}
                className="mt-2 text-sm text-emerald-500 hover:text-emerald-400 transition-colors"
              >
                {location.saved ? 'Saved to collection' : 'Add to collection'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;