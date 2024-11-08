import React, { useState } from 'react';
import { Search as SearchIcon, X } from 'lucide-react';
import { useDebounce } from '../hooks/useDebounce';
import SearchResults from './SearchResults';
import MovieModal from './MovieModal';
import { searchMovies, getMovieDetails, MovieResult, MovieDetails } from '../services/movieApi';

interface Movie {
  title: string;
  poster: string;
  rating: string;
  genre: string;
  year: string;
  imdbId: string;
}

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [results, setResults] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  const debouncedQuery = useDebounce(query);

  React.useEffect(() => {
    const search = async () => {
      if (debouncedQuery.length < 3) {
        setResults([]);
        setError(null);
        return;
      }

      setIsLoading(true);
      setError(null);
      setIsSearchOpen(true);

      try {
        const searchResults = await searchMovies(debouncedQuery);
        const moviesWithDetails = await Promise.all(
          searchResults.map(async (result: MovieResult) => {
            const details = await getMovieDetails(result.imdbID);
            return {
              title: result.Title,
              poster: result.Poster !== 'N/A' ? result.Poster : 'https://images.unsplash.com/photo-1440404653325-ab127d49abc1',
              rating: details?.imdbRating || 'N/A',
              genre: details?.Genre?.split(',')[0] || 'Unknown',
              year: result.Year,
              imdbId: result.imdbID
            };
          })
        );

        setResults(moviesWithDetails);
      } catch (err) {
        setError('Failed to fetch movies. Please try again.');
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    };

    search();
  }, [debouncedQuery]);

  return (
    <div className="relative w-full md:w-auto">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search movies..."
          className="w-full md:w-64 px-4 py-2 pl-10 pr-4 rounded-full border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-purple-500 dark:bg-gray-800 dark:text-gray-100"
        />
        <SearchIcon className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        {query && (
          <button
            onClick={() => {
              setQuery('');
              setResults([]);
              setError(null);
            }}
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
          >
            <X className="w-4 h-4 text-gray-400" />
          </button>
        )}
      </div>

      <SearchResults
        isOpen={isSearchOpen}
        onClose={() => {
          setIsSearchOpen(false);
          setQuery('');
        }}
        results={results}
        onMovieSelect={setSelectedMovie}
        isLoading={isLoading}
        error={error}
      />

      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          isOpen={!!selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
}