import React from 'react';
import { Heart } from 'lucide-react';
import type { Location } from '../types';

interface LocationCardProps {
  location: Location;
  onSave: (id: string) => void;
}

const LocationCard = ({ location, onSave }: LocationCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-zinc-900 transition-all hover:bg-zinc-800">
      <div className="aspect-square w-full overflow-hidden">
        <img
          src={location.imageUrl}
          alt={location.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white">{location.name}</h3>
        <p className="mt-1 text-sm text-gray-400 line-clamp-2">{location.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm text-emerald-500">{location.category}</span>
          <button
            onClick={() => onSave(location.id)}
            className="rounded-full p-2 text-gray-400 hover:text-emerald-500 transition-colors"
          >
            <Heart className={`w-5 h-5 ${location.saved ? 'fill-emerald-500 text-emerald-500' : ''}`} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;