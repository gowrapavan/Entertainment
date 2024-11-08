import React from 'react';

export default function Hero() {
  return (
    <div className="relative h-[70vh] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80"
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Your Entertainment Universe
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              Stream your favorite movies, music, and shows. Stay updated with the latest entertainment news.
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-medium transition-colors">
              Start Watching
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}