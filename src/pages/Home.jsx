import React, { useEffect, useState } from 'react';
import { fetchGames } from '../services/api';
import GameCard from '../components/GameCard';
import Loader from '../components/Loader';

const Home = ({ searchQuery }) => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGames()
      .then(res => {
        setGames(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Filter games based on search query
  const filteredGames = games.filter(game =>
    game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    game.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="w-full bg-black min-h-screen">
      
      {/* Premium Info Banner */}
      <div className="pt-28 px-6 pb-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-900/40 via-purple-900/40 to-pink-900/40 border-2 border-purple-500/60 backdrop-blur-xl shadow-2xl shadow-purple-900/50 p-6">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-pink-600/10 animate-pulse -z-10"></div>
            
            <div className="relative flex items-center justify-center gap-4 text-center">
              <span className="text-3xl animate-bounce">✅</span>
              <div>
                <h3 className="text-lg md:text-xl font-black bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent mb-2">
                  100% Authentic Gaming Experience
                </h3>
                <p className="text-gray-300 text-sm md:text-base font-semibold leading-relaxed">
                  Every game is delivered directly to your official Steam account. We guarantee 100% legitimate copies—<span className="text-green-400 font-black">never pirated, never modded</span>. Buy with confidence! 🎮
                </p>
              </div>
              <span className="text-3xl animate-bounce hidden sm:inline" style={{animationDelay: '0.2s'}}>🔒</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Hero Section */}
      <div className="pb-20 px-6 text-center bg-gradient-to-b from-transparent via-purple-900/20 to-blue-900/10">
        <div className="inline-block mb-8 animate-bounce">
          <span className="text-7xl drop-shadow-lg">🎮</span>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in drop-shadow-sm">
            Game Store
          </h1>
          
          <p className="text-gray-200 text-lg md:text-2xl max-w-3xl mx-auto animate-fade-in font-semibold leading-relaxed mb-8" style={{animationDelay: '0.1s'}}>
            🚀 Discover Premium Gaming Experiences. Buy Instantly & Play Forever!
          </p>
          
          {/* Feature badges */}
          <div className="flex justify-center gap-3 flex-wrap animate-fade-in mb-12" style={{animationDelay: '0.2s'}}>
            <div className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-900/60 to-blue-800/60 border border-blue-500/60 text-blue-300 font-bold text-sm shadow-lg hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105 transition-all cursor-pointer backdrop-blur-sm">
              ⚡ Instant Checkout
            </div>
            <div className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-900/60 to-purple-800/60 border border-purple-500/60 text-purple-300 font-bold text-sm shadow-lg hover:shadow-xl hover:shadow-purple-500/40 hover:scale-105 transition-all cursor-pointer backdrop-blur-sm">
              💬 Direct WhatsApp
            </div>
            <div className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-900/60 to-pink-800/60 border border-pink-500/60 text-pink-300 font-bold text-sm shadow-lg hover:shadow-xl hover:shadow-pink-500/40 hover:scale-105 transition-all cursor-pointer backdrop-blur-sm">
              ✨ Best Prices
            </div>
          </div>
        </div>
      </div>

      {/* Games Section */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-3">
            {searchQuery ? `Search Results for "${searchQuery}"` : 'Available Games'}
          </h2>
          <p className="text-gray-400 font-semibold text-lg">
            {searchQuery ? `Found ${filteredGames.length} game${filteredGames.length !== 1 ? 's' : ''}` : 'Choose from our curated collection'}
          </p>
        </div>

        {/* Games Grid */}
        {filteredGames.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredGames.map((game, index) => (
              <div
                key={game._id}
                className="animate-fade-in"
                style={{animationDelay: `${index * 0.08}s`}}
              >
                <GameCard game={game} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-300 text-2xl font-bold mb-4">🔍 No games found</p>
            <p className="text-gray-500 text-lg">
              {searchQuery 
                ? `No games match "${searchQuery}". Try a different search!` 
                : 'Check back soon for amazing titles!'}
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-12 px-6 mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-black mb-4">🎮 GameStore</h3>
          <p className="text-white/90 mb-4 font-semibold">Your Ultimate Gaming Destination</p>
          <p className="text-white/70 text-sm">Buy Games • Play Forever • Support Developers</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
