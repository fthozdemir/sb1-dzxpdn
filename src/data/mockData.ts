import type { Location, Collection } from '../types';

export const mockLocations: Location[] = [
  {
    id: '1',
    name: 'Amalfi Coast',
    description: 'Stunning coastal views along the Mediterranean, featuring colorful villages and crystal-clear waters.',
    imageUrl: 'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca',
    category: 'Coastal',
    rating: 4.9,
    coordinates: { lat: 40.6333, lng: 14.6027 },
    saved: false
  },
  {
    id: '2',
    name: 'Swiss Alps',
    description: 'Majestic mountain peaks and pristine alpine lakes in the heart of Switzerland.',
    imageUrl: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7',
    category: 'Mountains',
    rating: 4.8,
    coordinates: { lat: 46.8182, lng: 8.2275 },
    saved: true
  },
  {
    id: '3',
    name: 'Kyoto Gardens',
    description: 'Traditional Japanese gardens showcasing the perfect harmony between nature and design.',
    imageUrl: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d',
    category: 'Cultural',
    rating: 4.7,
    coordinates: { lat: 35.0116, lng: 135.7681 },
    saved: false
  }
];

export const mockCollections: Collection[] = [
  {
    id: '1',
    name: 'Hidden Gems of Europe',
    description: 'Discover lesser-known European destinations',
    imageUrl: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b',
    locationCount: 12
  },
  {
    id: '2',
    name: 'Asian Sanctuaries',
    description: 'Peaceful retreats across Asia',
    imageUrl: 'https://images.unsplash.com/photo-1470115636492-6d2b56f9146d',
    locationCount: 8
  }
];