import React, { useState } from "react";

const GameCard = ({game}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleBuyNow = () =>{
    window.open(`https://wa.me/${8521172017}`, "blank");
  };

  return(
    <div 
      className="group relative h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated gradient border wrapper */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl scale-95 group-hover:scale-100"></div>
      
      {/* Main Card Container */}
      <div className="relative h-full bg-gray-900/95 backdrop-blur-sm border-2 border-gray-800 hover:border-gray-700 rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 hover:scale-[1.06] hover:shadow-2xl hover:shadow-purple-600/50 flex flex-col">
        
        {/* Image Section */}
        <div className="relative h-64 w-full overflow-hidden bg-gradient-to-b from-gray-800 to-gray-900">
          {/* Image */}
          <img
            src={game.image}   
            alt={game.title} 
            className="h-full w-full object-cover transition-all duration-500 group-hover:scale-125 drop-shadow-lg opacity-90"
          />
          
          {/* Dark Overlay on Hover */}
          <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-70'}`}></div>
          
          {/* Price Badge - Premium Look */}
          <div className={`absolute top-5 right-5 bg-gradient-to-br from-green-500 to-emerald-600 px-5 py-3 rounded-2xl font-black text-white shadow-2xl transition-all duration-500 transform ${isHovered ? 'scale-110 -translate-y-2' : 'scale-100'} flex items-center gap-2`}>
            <span>₹</span>
            <span>{game.price}</span>
          </div>

          {/* Hot Badge */}
          <div className="absolute top-5 left-5 bg-gradient-to-r from-red-600 to-orange-600 px-4 py-2 rounded-full font-bold text-white text-xs shadow-lg animate-pulse">
            🔥 HOT
          </div>

          {/* Wishlist Button */}
          <button className={`absolute bottom-5 left-5 w-12 h-12 rounded-full bg-gray-800 border-2 border-gray-700 shadow-lg flex items-center justify-center font-bold text-xl transition-all duration-300 hover:scale-110 hover:bg-gray-700 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            ♡
          </button>
        </div>

        {/* Content Section */}
        <div className="flex-1 p-6 flex flex-col bg-gradient-to-b from-gray-900 to-gray-950">
          
          {/* Title */}
          <h2 className="text-2xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-3 line-clamp-2 hover:from-purple-400 hover:to-pink-400 transition-all">
            {game.title}
          </h2>

          {/* Description */}
          <p className="text-gray-400 text-sm mb-6 line-clamp-2 leading-relaxed font-semibold flex-grow">
            {game.description}
          </p>

          {/* Rating Section */}
          <div className="flex items-center gap-2 mb-6">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-lg">⭐</span>
              ))}
            </div>
            <span className="text-sm font-bold text-gray-500">(128 reviews)</span>
          </div>

          {/* Buy Button */}
          <button 
            onClick={handleBuyNow} 
            className="w-full px-6 py-4 rounded-2xl bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white font-black shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/50 hover:scale-105 active:scale-95 flex items-center justify-center gap-3 text-lg group/btn transform"
          >
            <span>🛒 Buy Now</span>
            <span className="transition-transform group-hover/btn:translate-x-1">→</span>
          </button>

          {/* WhatsApp Direct Button */}
          <button 
            onClick={handleBuyNow}
            className="w-full px-6 py-3 mt-3 rounded-xl bg-gray-800 hover:bg-gray-700 text-green-400 font-bold border-2 border-green-500/50 shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2"
          >
            <span>💬 Ask on WhatsApp</span>
          </button>
        </div>

        {/* Shimmer Effect */}
        <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-500 transform pointer-events-none ${isHovered ? 'translate-x-full' : '-translate-x-full'}`}></div>
      </div>
    </div>
  );
};
export default GameCard;