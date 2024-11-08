import React from 'react';
import { X } from 'lucide-react';
import MovieCard from './MovieCard';

interface Movie {
  title: string;
  poster: string;
  rating: string;
  genre: string;
  year: string;
  imdbId: string;
}

interface SearchResultsProps {
  isOpen: boolean;
  onClose: () => void;
  results: Movie[];
  onMovieSelect: (movie: Movie) => void;
  isLoading: boolean;
  error: string | null;
}

export default function SearchResults({ 
  isOpen, 
  onClose, 
  results, 
  onMovieSelect, 
  isLoading,
  error 
}: SearchResultsProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed md:absolute inset-x-0 top-full mt-2 bg-white dark:bg-gray-900 rounded-lg shadow-xl max-h-[80vh] overflow-y-auto mx-4 md:mx-0">
      <div className="sticky top-0 flex items-center justify-between p-4 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Search Results
        </h3>
        <button
          onClick={onClose}
          className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        </button>
      </div>

      <div className="p-4">
        {isLoading ? (
          <div className="flex items-center justify-center py-8">
            <div className="w-8 h-8 border-4 border-purple-600 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : error ? (
          <div className="text-center py-8 text-red-500 dark:text-red-400">
            {error}
          </div>
        ) : results.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {results.map((movie) => (
              <MovieCard
                key={movie.imdbId}
                {...movie}
                onClick={() => {
                  onMovieSelect(movie);
                  onClose();
                }}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500 dark:text-gray-400">
            No results found
          </div>
        )}
      </div>
    </div>
  );
}