import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-cricket-green via-cricket-lightgreen to-cricket-green flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          {/* Club Logo */}
          <div className="w-32 h-32 bg-cricket-gold rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
            <span className="text-6xl">🏏</span>
          </div>
          
          {/* Club Name */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Dev's Cricket Club
          </h1>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl text-cricket-cream mb-8 max-w-3xl mx-auto">
            Where passion meets precision, and every match tells a story of dedication and sportsmanship.
          </p>
          
          {/* Subtitle */}
          <p className="text-lg text-cricket-cream mb-12 max-w-2xl mx-auto opacity-90">
            Join our community of cricket enthusiasts and be part of something extraordinary.
          </p>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a
            href="#register"
            className="bg-cricket-gold text-cricket-green px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Join Our Club
          </a>
          <a
            href="#about"
            className="border-2 border-cricket-cream text-cricket-cream px-8 py-4 rounded-lg font-bold text-lg hover:bg-cricket-cream hover:text-cricket-green transition-all duration-300 transform hover:scale-105"
          >
            Learn More
          </a>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-cricket-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⭐</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Excellence</h3>
            <p className="text-cricket-cream">Striving for the highest standards in every game</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-cricket-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🤝</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Community</h3>
            <p className="text-cricket-cream">Building lasting friendships through cricket</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-cricket-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🏆</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Achievement</h3>
            <p className="text-cricket-cream">Celebrating victories both big and small</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;