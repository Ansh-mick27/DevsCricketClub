import React, { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  // Using placeholder images that would be dynamically loaded in a real application
  const galleryImages = [
    {
      id: 1,
      src: 'https://via.placeholder.com/400x300/1B4D3E/FFFFFF?text=Team+Photo+1',
      alt: 'Team Photo 1',
      title: 'Championship Winning Team 2023',
      category: 'team'
    },
    {
      id: 2,
      src: 'https://via.placeholder.com/400x300/4A7C59/FFFFFF?text=Match+Action+1',
      alt: 'Match Action 1',
      title: 'Intense Match Moment',
      category: 'action'
    },
    {
      id: 3,
      src: 'https://via.placeholder.com/400x300/FFD700/1B4D3E?text=Trophy+Ceremony',
      alt: 'Trophy Ceremony',
      title: 'Trophy Presentation Ceremony',
      category: 'awards'
    },
    {
      id: 4,
      src: 'https://via.placeholder.com/400x300/1B4D3E/FFFFFF?text=Training+Session',
      alt: 'Training Session',
      title: 'Morning Training Session',
      category: 'training'
    },
    {
      id: 5,
      src: 'https://via.placeholder.com/400x300/4A7C59/FFFFFF?text=Ground+View',
      alt: 'Ground View',
      title: 'Our Beautiful Ground',
      category: 'facilities'
    },
    {
      id: 6,
      src: 'https://via.placeholder.com/400x300/FFD700/1B4D3E?text=Team+Celebration',
      alt: 'Team Celebration',
      title: 'Victory Celebration',
      category: 'team'
    },
    {
      id: 7,
      src: 'https://via.placeholder.com/400x300/1B4D3E/FFFFFF?text=Match+Action+2',
      alt: 'Match Action 2',
      title: 'Bowling in Action',
      category: 'action'
    },
    {
      id: 8,
      src: 'https://via.placeholder.com/400x300/4A7C59/FFFFFF?text=Club+House',
      alt: 'Club House',
      title: 'Our Club House',
      category: 'facilities'
    },
    {
      id: 9,
      src: 'https://via.placeholder.com/400x300/FFD700/1B4D3E?text=Youth+Training',
      alt: 'Youth Training',
      title: 'Youth Development Program',
      category: 'training'
    }
  ];

  const [filter, setFilter] = useState('all');
  const categories = ['all', 'team', 'action', 'awards', 'training', 'facilities'];

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <section id="gallery" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-cricket-green mb-4">
            Our Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Capturing the memories, victories, and spirit of Dev's Cricket Club through the years.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center mb-8 space-x-2 space-y-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-cricket-green text-white'
                  : 'bg-white text-cricket-green border border-cricket-green hover:bg-cricket-green hover:text-white'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-12 h-12 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm5 3a2 2 0 11-4 0 2 2 0 014 0zm4.5 8.5l-3-3a1 1 0 00-1.414 0l-3 3A1 1 0 006.5 14.5h7a1 1 0 00.707-1.707l-1-1z" clipRule="evenodd"/>
                  </svg>
                  <p className="font-medium">View Image</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <h3 className="text-white font-semibold">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Image Preview */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white text-4xl z-10 hover:text-cricket-gold transition-colors duration-300"
              >
                ×
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                <h3 className="text-white text-xl font-bold">{selectedImage.title}</h3>
                <p className="text-cricket-cream capitalize">{selectedImage.category}</p>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-12 bg-white rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-cricket-green mb-4">
            Want to be part of our next gallery?
          </h3>
          <p className="text-gray-600 mb-6">
            Join our club and create your own memorable moments on the cricket field.
          </p>
          <a
            href="#register"
            className="bg-cricket-green text-white px-8 py-3 rounded-lg font-bold hover:bg-cricket-lightgreen transition-colors duration-300"
          >
            Join Our Club
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;