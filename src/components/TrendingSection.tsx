import React, { useState } from 'react';
import { TrendingUp } from 'lucide-react';
import MovieCard from './MovieCard';
import MovieModal from './MovieModal';

const trendingMovies = [
  {
    title: "Inception",
    poster: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&q=80",
    rating: "8.8",
    genre: "Sci-Fi",
    year: "2010",
    imdbId: "tt1375666"
  },
  {
    title: "The Dark Knight",
    poster: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80",
    rating: "9.0",
    genre: "Action",
    year: "2008",
    imdbId: "tt0468569"
  },
  {
    title: "Interstellar",
    poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80",
    rating: "8.6",
    genre: "Adventure",
    year: "2014",
    imdbId: "tt0816692"
  },
  {
    title: "The Matrix",
    poster: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&q=80",
    rating: "8.7",
    genre: "Action",
    year: "1999",
    imdbId: "tt0133093"
  }
];

export default function TrendingSection() {
  const [selectedMovie, setSelectedMovie] = useState<typeof trendingMovies[0] | null>(null);

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-8">
          <TrendingUp className="w-6 h-6 text-purple-600 mr-2" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Trending Now</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {trendingMovies.map((movie) => (
            <MovieCard
              key={movie.title}
              {...movie}
              onClick={() => setSelectedMovie(movie)}
            />
          ))}
        </div>
      </div>

      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          isOpen={!!selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </section>
  );
}