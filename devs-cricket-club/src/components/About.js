import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-cricket-green mb-4">
            About Dev's Cricket Club
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Founded with passion and driven by excellence, we are more than just a cricket club - we're a family.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-cricket-green mb-6">Our Story</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Established in 1998, Dev's Cricket Club has been nurturing cricket talent and building character 
              for over two decades. What started as a small group of cricket enthusiasts has grown into one of 
              the most respected cricket clubs in the region.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Our club has produced numerous state-level and national-level players, but more importantly, 
              we've created a community where values like teamwork, discipline, and sportsmanship thrive.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Every member of our club, regardless of skill level, receives the same respect and opportunities 
              to grow both as a cricketer and as an individual.
            </p>
          </div>
          
          <div className="bg-cricket-green rounded-lg p-8 text-white">
            <h4 className="text-2xl font-bold mb-6 text-center">Our Values</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-cricket-gold rounded-full flex items-center justify-center mr-4">
                  <span className="text-cricket-green font-bold">1</span>
                </div>
                <div>
                  <h5 className="font-semibold">Excellence</h5>
                  <p className="text-cricket-cream text-sm">Striving for the best in every aspect</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-8 h-8 bg-cricket-gold rounded-full flex items-center justify-center mr-4">
                  <span className="text-cricket-green font-bold">2</span>
                </div>
                <div>
                  <h5 className="font-semibold">Integrity</h5>
                  <p className="text-cricket-cream text-sm">Playing fair and being honest always</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-8 h-8 bg-cricket-gold rounded-full flex items-center justify-center mr-4">
                  <span className="text-cricket-green font-bold">3</span>
                </div>
                <div>
                  <h5 className="font-semibold">Unity</h5>
                  <p className="text-cricket-cream text-sm">Building strong bonds beyond cricket</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-8 h-8 bg-cricket-gold rounded-full flex items-center justify-center mr-4">
                  <span className="text-cricket-green font-bold">4</span>
                </div>
                <div>
                  <h5 className="font-semibold">Growth</h5>
                  <p className="text-cricket-cream text-sm">Continuous improvement and learning</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Facilities Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-cricket-green text-center mb-12">Our Facilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-cricket-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🏟️</span>
              </div>
              <h4 className="text-xl font-bold text-cricket-green mb-2">Professional Ground</h4>
              <p className="text-gray-600">Full-size cricket ground with professional turf and drainage system</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-cricket-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🏠</span>
              </div>
              <h4 className="text-xl font-bold text-cricket-green mb-2">Club House</h4>
              <p className="text-gray-600">Modern clubhouse with changing rooms, meeting hall, and refreshment area</p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-cricket-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🥅</span>
              </div>
              <h4 className="text-xl font-bold text-cricket-green mb-2">Practice Nets</h4>
              <p className="text-gray-600">Multiple practice nets with bowling machines and coaching equipment</p>
            </div>
          </div>
        </div>

        {/* Training Programs */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h3 className="text-3xl font-bold text-cricket-green text-center mb-8">Training Programs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h4 className="text-xl font-bold text-cricket-green mb-4">Youth Development</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="text-cricket-gold mr-2">•</span>
                  Age groups: 8-18 years
                </li>
                <li className="flex items-center">
                  <span className="text-cricket-gold mr-2">•</span>
                  Professional coaching staff
                </li>
                <li className="flex items-center">
                  <span className="text-cricket-gold mr-2">•</span>
                  Character building programs
                </li>
                <li className="flex items-center">
                  <span className="text-cricket-gold mr-2">•</span>
                  Regular tournaments and matches
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h4 className="text-xl font-bold text-cricket-green mb-4">Senior Cricket</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="text-cricket-gold mr-2">•</span>
                  Competitive league participation
                </li>
                <li className="flex items-center">
                  <span className="text-cricket-gold mr-2">•</span>
                  Advanced skill development
                </li>
                <li className="flex items-center">
                  <span className="text-cricket-gold mr-2">•</span>
                  Fitness and conditioning programs
                </li>
                <li className="flex items-center">
                  <span className="text-cricket-gold mr-2">•</span>
                  Mental toughness training
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;