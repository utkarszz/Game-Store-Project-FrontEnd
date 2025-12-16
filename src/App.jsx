import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <div className="w-full min-h-screen bg-black relative overflow-x-hidden">
        {/* Animated background blobs - More visible and better positioned */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
          {/* Blue blob - top right */}
          <div className="absolute -top-96 -right-96 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-3xl animate-float"></div>
          
          {/* Purple blob - bottom left */}
          <div className="absolute -bottom-96 -left-96 w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
          
          {/* Pink blob - middle */}
          <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-pink-600/15 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
          
          {/* Cyan blob - left side */}
          <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-cyan-600/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        {/* Content with proper z-index */}
        <div className="relative z-10">
          <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <Home searchQuery={searchQuery} />
        </div>
      </div>
    </>
  );
};

export default App;
