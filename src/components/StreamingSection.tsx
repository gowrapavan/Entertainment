import React, { useState } from 'react';
import { Film } from 'lucide-react';
import MovieCard from './MovieCard';
import MovieModal from './MovieModal';

const movies = [
  {
    title: "The Shawshank Redemption",
    poster: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80",
    rating: "9.3",
    genre: "Drama",
    year: "1994",
    imdbId: "tt0111161"
  },
  {
    title: "Pulp Fiction",
    poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80",
    rating: "8.9",
    genre: "Crime",
    year: "1994",
    imdbId: "tt0110912"
  },
  {
    title: "The Godfather",
    poster: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&q=80",
    rating: "9.2",
    genre: "Crime",
    year: "1972",
    imdbId: "tt0068646"
  },
  {
    title: "Fight Club",
    poster: "https://images.unsplash.com/photo-1470219556762-1771e7f9427d?auto=format&fit=crop&q=80",
    rating: "8.8",
    genre: "Drama",
    year: "1999",
    imdbId: "tt0137523"
  },
  {
    title: "Forrest Gump",
    poster: "https://images.unsplash.com/photo-1533928298208-27ff66555d8d?auto=format&fit=crop&q=80",
    rating: "8.8",
    genre: "Drama",
    year: "1994",
    imdbId: "tt0109830"
  },
  {
    title: "Goodfellas",
    poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80",
    rating: "8.7",
    genre: "Crime",
    year: "1990",
    imdbId: "tt0099685"
  },
  {
    title: "The Silence of the Lambs",
    poster: "https://images.unsplash.com/photo-1568876694728-451bbf694b83?auto=format&fit=crop&q=80",
    rating: "8.6",
    genre: "Thriller",
    year: "1991",
    imdbId: "tt0102926"
  },
  {
    title: "Se7en",
    poster: "https://images.unsplash.com/photo-1559583109-3e7968136c99?auto=format&fit=crop&q=80",
    rating: "8.6",
    genre: "Crime",
    year: "1995",
    imdbId: "tt0114369"
  }
];

export default function StreamingSection() {
  const [selectedMovie, setSelectedMovie] = useState<typeof movies[0] | null>(null);

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-8">
          <Film className="w-6 h-6 text-purple-600 mr-2" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Popular Movies</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie) => (
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