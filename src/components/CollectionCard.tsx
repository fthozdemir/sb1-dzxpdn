import React from 'react';
import type { Collection } from '../types';

interface CollectionCardProps {
  collection: Collection;
}

const CollectionCard = ({ collection }: CollectionCardProps) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-[3/2] overflow-hidden rounded-lg">
        <img
          src={collection.imageUrl}
          alt={collection.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 p-4">
          <h3 className="text-xl font-semibold text-white">{collection.name}</h3>
          <p className="mt-1 text-sm text-gray-200">{collection.locationCount} locations</p>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;