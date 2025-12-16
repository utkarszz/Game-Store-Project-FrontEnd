import React, { useState } from 'react';

const Navbar = ({ searchQuery, setSearchQuery }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  return (
    <nav className='fixed top-0 w-full z-50 backdrop-blur-xl bg-black/80 border-b border-gray-800 shadow-2xl shadow-purple-900/50'>
      <div className='mx-auto max-w-7xl px-6 py-5'>
        <div className='flex justify-between items-center gap-4'>
          
          {/* Logo section - Left */}
          <div className='flex items-center gap-4 flex-shrink-0'>
            <div className='w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-xl hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-110 transition-all duration-300 cursor-pointer'>
              <span className='text-white font-black text-2xl'>🎮</span>
            </div>
            <div className='hidden sm:block'>
              <h1 className='text-2xl md:text-3xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
                GameStore
              </h1>
              <p className='text-xs text-gray-500 font-bold'>Premium Gaming Hub</p>
            </div>
          </div>

          {/* Center - Search */}
          <div className='hidden lg:flex flex-1 mx-4'>
            <div className='w-full relative'>
              <div className='absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300 blur'></div>
              <div className='relative flex items-center'>
                <input 
                  type='text' 
                  placeholder='🔍 Search games by name...' 
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className='w-full px-6 py-3 pl-12 rounded-full bg-gray-900/80 border-2 border-gray-700 hover:border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400/50 font-semibold text-gray-100 placeholder-gray-500 transition-all shadow-lg backdrop-blur-sm'
                />
                {searchQuery && (
                  <button
                    onClick={clearSearch}
                    className='absolute right-4 text-gray-400 hover:text-gray-200 text-xl font-bold transition-all'
                  >
                    ✕
                  </button>
                )}
                {searchQuery && (
                  <span className='absolute right-12 text-xs font-bold text-blue-400 bg-blue-900/50 px-2 py-1 rounded-full backdrop-blur-sm'>
                    Found
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Right section */}
          <div className='flex items-center gap-3 flex-shrink-0'>
            <div className='hidden md:flex items-center gap-3 px-6 py-2 bg-gradient-to-r from-green-900/60 to-emerald-900/60 rounded-full border border-green-600/60 hover:shadow-lg hover:shadow-green-500/30 transition-all backdrop-blur-sm'>
              <div className='w-3 h-3 bg-green-400 rounded-full animate-pulse'></div>
              <p className='text-sm font-bold text-green-400'>Live & Ready</p>
            </div>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className='lg:hidden mt-4'>
          <div className='relative'>
            <input 
              type='text' 
              placeholder='🔍 Search games...' 
              value={searchQuery}
              onChange={handleSearchChange}
              className='w-full px-4 py-3 pl-10 rounded-full bg-gray-900/80 border-2 border-gray-700 focus:border-blue-500 focus:outline-none font-semibold text-gray-100 transition-all'
            />
            {searchQuery && (
              <button
                onClick={clearSearch}
                className='absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-200 text-lg font-bold'
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;