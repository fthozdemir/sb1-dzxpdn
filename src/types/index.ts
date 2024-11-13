export interface Location {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  category: string;
  rating: number;
  coordinates: {
    lat: number;
    lng: number;
  };
  saved: boolean;
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  locationCount: number;
}

export interface Playlist {
  id: string;
  name: string;
  description: string;
  locations: Location[];
  createdAt: string;
}