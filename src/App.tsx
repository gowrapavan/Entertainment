import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrendingSection from './components/TrendingSection';
import StreamingSection from './components/StreamingSection';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <TrendingSection />
        <StreamingSection />
      </main>
    </div>
  );
}

export default App;