import React from 'react';

const Loader = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50'>
      <div className='text-center'>
        {/* Animated loading spinner */}
        <div className='relative w-32 h-32 mb-8 mx-auto'>
          {/* Outer rotating ring */}
          <div className='absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 border-r-purple-500 animate-spin shadow-lg'></div>
          
          {/* Middle rotating ring with delay */}
          <div className='absolute inset-4 rounded-full border-3 border-transparent border-b-pink-500 border-l-blue-500 animate-spin' style={{animationDirection: 'reverse', animationDuration: '1.5s'}}></div>
          
          {/* Inner rotating ring */}
          <div className='absolute inset-8 rounded-full border-2 border-transparent border-t-purple-500 border-r-pink-500 animate-spin' style={{animationDuration: '2s'}}></div>
          
          {/* Center dot */}
          <div className='absolute inset-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 animate-pulse shadow-xl'></div>
        </div>

        {/* Loading text */}
        <div className='space-y-3'>
          <p className='text-3xl md:text-4xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4 animate-pulse'>
            🎮 Loading Games...
          </p>
          
          <p className='text-gray-600 text-base font-semibold'>
            Preparing the awesome collection for you
          </p>
          
          {/* Loading bar */}
          <div className='mt-8 w-48 h-2 bg-gray-200 rounded-full mx-auto overflow-hidden'>
            <div className='h-full bg-gradient-to-r from-blue-500 to-purple-500 animate-loading-bar'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
