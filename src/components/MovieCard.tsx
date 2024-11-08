import React from 'react';
import { Play, Star } from 'lucide-react';

interface MovieCardProps {
  title: string;
  poster: string;
  rating: string;
  genre: string;
  year: string;
  imdbId?: string;
  onClick: () => void;
}

export default function MovieCard({ title, poster, rating, genre, year, onClick }: MovieCardProps) {
  return (
    <div className="group relative rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-1">
      <div className="aspect-[2/3] relative">
        <img
          src={poster}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <button
          onClick={onClick}
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <div className="w-14 h-14 rounded-full bg-purple-600 flex items-center justify-center">
            <Play className="w-6 h-6 text-white fill-current" />
          </div>
        </button>
      </div>
      <div className="p-4 bg-white dark:bg-gray-800">
        <h3 className="font-semibold text-gray-900 dark:text-white truncate">{title}</h3>
        <div className="flex items-center justify-between mt-1">
          <span className="text-sm text-gray-500 dark:text-gray-400">{genre}</span>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-gray-600 dark:text-gray-300">{rating}</span>
          </div>
        </div>
        <div className="mt-1">
          <span className="text-sm text-gray-500 dark:text-gray-400">{year}</span>
        </div>
      </div>
    </div>
  );
}