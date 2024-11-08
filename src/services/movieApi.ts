import axios from 'axios';

const OMDB_API_KEY = 'd547b285';
const BASE_URL = 'https://www.omdbapi.com';

export interface MovieResult {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
  Genre?: string;
  imdbRating?: string;
}

export interface MovieDetails extends MovieResult {
  Genre: string;
  imdbRating: string;
  Plot: string;
  Director: string;
  Actors: string;
}

export async function searchMovies(query: string): Promise<MovieResult[]> {
  try {
    const response = await axios.get(`${BASE_URL}/?apikey=${OMDB_API_KEY}&s=${encodeURIComponent(query)}`);
    if (response.data.Response === 'True') {
      return response.data.Search;
    }
    return [];
  } catch (error) {
    console.error('Error searching movies:', error);
    return [];
  }
}

export async function getMovieDetails(imdbId: string): Promise<MovieDetails | null> {
  try {
    const response = await axios.get(`${BASE_URL}/?apikey=${OMDB_API_KEY}&i=${imdbId}`);
    if (response.data.Response === 'True') {
      return response.data;
    }
    return null;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return null;
  }
}

export async function getRelatedMovies(title: string, year: string): Promise<MovieResult[]> {
  try {
    // Search for movies with similar titles
    const response = await axios.get(
      `${BASE_URL}/?apikey=${OMDB_API_KEY}&s=${encodeURIComponent(title)}`
    );
    
    if (response.data.Response === 'True') {
      // Filter out the original movie and limit to 4 related movies
      return response.data.Search
        .filter((movie: MovieResult) => movie.Year !== year)
        .slice(0, 4);
    }
    return [];
  } catch (error) {
    console.error('Error fetching related movies:', error);
    return [];
  }
}