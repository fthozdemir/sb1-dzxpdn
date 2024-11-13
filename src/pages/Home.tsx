import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import LocationCard from '../components/LocationCard';
import CollectionCard from '../components/CollectionCard';
import { mockLocations, mockCollections } from '../data/mockData';
import type { Location } from '../types';

function Home() {
  const [locations, setLocations] = useState<Location[]>(mockLocations);

  const handleSaveLocation = (id: string) => {
    setLocations(locations.map(location =>
      location.id === id ? { ...location, saved: !location.saved } : location
    ));
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <SearchBar />
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Featured Collections</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {mockCollections.map(collection => (
            <CollectionCard key={collection.id} collection={collection} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Trending Locations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {locations.map(location => (
            <LocationCard
              key={location.id}
              location={location}
              onSave={handleSaveLocation}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;