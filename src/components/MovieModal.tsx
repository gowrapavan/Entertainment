import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface MovieModalProps {
  movie: {
    title: string;
    imdbId?: string;
    year: string;
    genre: string;
    rating: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

export default function MovieModal({ movie, isOpen, onClose }: MovieModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black/75 transition-opacity" onClick={onClose} />
      
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white dark:bg-gray-900 rounded-lg shadow-xl w-full max-w-5xl">
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {movie.title}
            </h3>
            <button
              onClick={onClose}
              className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </button>
          </div>

          <div className="aspect-video w-full bg-black">
            {movie.imdbId ? (
              <iframe
                src={`https://www.2embed.cc/embed/${movie.imdbId}?autoplay=1&mute=1&cc_load_policy=1`}
                className="w-full h-full"
                allowFullScreen
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                No preview available
              </div>
            )}
          </div>

          <div className="p-4 space-y-2">
            <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
              <span>{movie.year}</span>
              <span>•</span>
              <span>{movie.genre}</span>
              <span>•</span>
              <span>IMDb {movie.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}