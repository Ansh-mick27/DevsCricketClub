import React from 'react';

const Achievements = () => {
  const pastPlayers = [
    {
      id: 1,
      name: "Vikram Singh",
      image: "👨‍🎓",
      description: "Former captain who led the team to 3 consecutive championships. Now coaching at state level.",
      achievement: "State Team Captain",
      years: "2018-2021"
    },
    {
      id: 2,
      name: "Sneha Reddy",
      image: "👩‍💼",
      description: "Record holder for highest individual score in club history. Currently playing for national team.",
      achievement: "National Team Player",
      years: "2019-2022"
    },
    {
      id: 3,
      name: "Rohit Gupta",
      image: "👨‍⚕️",
      description: "Best bowler award winner for 2 years. Known for his deadly yorkers in crucial matches.",
      achievement: "Best Bowler Award",
      years: "2020-2023"
    },
    {
      id: 4,
      name: "Kavya Nair",
      image: "👩‍🔬",
      description: "Youngest player to score a century for the club. Scholarship recipient for cricket academy.",
      achievement: "Youngest Centurion",
      years: "2021-2023"
    },
    {
      id: 5,
      name: "Amit Sharma",
      image: "👨‍💻",
      description: "All-rounder extraordinaire with exceptional fielding skills. Team's former vice-captain.",
      achievement: "Best All-rounder",
      years: "2017-2020"
    },
    {
      id: 6,
      name: "Riya Joshi",
      image: "👩‍🎨",
      description: "Wicket-keeper batsman with lightning-fast reflexes. Club's first female wicket-keeper.",
      achievement: "Best Wicket-keeper",
      years: "2019-2022"
    }
  ];

  const clubAchievements = [
    {
      title: "Championship Titles",
      count: "15",
      icon: "🏆",
      description: "Regional and state level championships won"
    },
    {
      title: "Players Developed",
      count: "50+",
      icon: "👥",
      description: "Players who went on to play at higher levels"
    },
    {
      title: "Years of Excellence",
      count: "25",
      icon: "📅",
      description: "Years of promoting cricket in the community"
    },
    {
      title: "Matches Played",
      count: "500+",
      icon: "🎯",
      description: "Total matches played across all formats"
    }
  ];

  return (
    <section id="achievements" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-cricket-green mb-4">
            Our Achievements
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Celebrating the success stories and remarkable achievements of our cricket club and its members.
          </p>
        </div>

        {/* Club Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {clubAchievements.map((achievement, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl mb-3">{achievement.icon}</div>
              <div className="text-3xl font-bold text-cricket-green mb-2">{achievement.count}</div>
              <div className="text-lg font-semibold text-gray-800 mb-1">{achievement.title}</div>
              <div className="text-sm text-gray-600">{achievement.description}</div>
            </div>
          ))}
        </div>

        {/* Past Players Section */}
        <div className="mb-8">
          <h3 className="text-3xl font-bold text-cricket-green text-center mb-12">
            Our Star Alumni
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastPlayers.map((player) => (
              <div 
                key={player.id}
                className="bg-gradient-to-br from-gray-50 to-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-center mb-4">
                  <div className="w-20 h-20 bg-cricket-lightgreen rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl">{player.image}</span>
                  </div>
                  <h4 className="text-xl font-bold text-cricket-green mb-1">{player.name}</h4>
                  <div className="flex items-center justify-center mb-2">
                    <span className="bg-cricket-gold text-cricket-green px-3 py-1 rounded-full text-sm font-semibold">
                      {player.achievement}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm">{player.years}</p>
                </div>
                
                <p className="text-gray-700 text-center leading-relaxed">
                  {player.description}
                </p>
                
                <div className="mt-4 flex justify-center">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-cricket-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Legacy Message */}
        <div className="bg-cricket-green rounded-lg p-8 text-center text-white mt-12">
          <h3 className="text-2xl font-bold mb-4">Building Tomorrow's Champions</h3>
          <p className="text-cricket-cream text-lg mb-6">
            Every player who joins our club becomes part of a legacy of excellence and sportsmanship. 
            Be the next success story!
          </p>
          <a
            href="#register"
            className="bg-cricket-gold text-cricket-green px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors duration-300"
          >
            Start Your Journey
          </a>
        </div>
      </div>
    </section>
  );
};

export default Achievements;