import React from 'react';

const LoadingScreen = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-cricket-green flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative mb-8">
          {/* Cricket Ball */}
          <div className="w-16 h-16 bg-red-600 rounded-full mx-auto cricket-ball-spin relative">
            <div className="absolute inset-0 rounded-full border-2 border-white" style={{
              background: 'radial-gradient(circle at 30% 30%, #ff4444, #cc2222)'
            }}>
              {/* Cricket ball seam */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white transform -translate-y-1/2"></div>
              <div className="absolute top-1/4 left-1/2 w-0.5 h-1/2 bg-white transform -translate-x-1/2"></div>
              <div className="absolute top-3/4 left-1/2 w-0.5 h-1/2 bg-white transform -translate-x-1/2"></div>
            </div>
          </div>
          
          {/* Bouncing effect */}
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
            <div className="w-12 h-2 bg-black opacity-20 rounded-full animate-ping"></div>
          </div>
        </div>
        
        <h2 className="text-3xl font-bold text-white mb-4">Dev's Cricket Club</h2>
        <p className="text-cricket-cream text-lg">Loading the pitch...</p>
        
        {/* Loading dots */}
        <div className="flex justify-center mt-4 space-x-2">
          <div className="w-2 h-2 bg-cricket-gold rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-cricket-gold rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
          <div className="w-2 h-2 bg-cricket-gold rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;