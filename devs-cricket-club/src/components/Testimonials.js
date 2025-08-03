import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Sharma",
      role: "Captain",
      quote: "Being part of Dev's Cricket Club has been an incredible journey. The team spirit and dedication here is unmatched.",
      image: "👨‍💼"
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "All-rounder",
      quote: "This club gave me the platform to showcase my skills and grow as a cricketer. The coaching here is world-class.",
      image: "👩‍🦱"
    },
    {
      id: 3,
      name: "Arjun Kumar",
      role: "Fast Bowler",
      quote: "The friendships I've made here extend far beyond cricket. This club is like a second family to me.",
      image: "👨‍🦲"
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-cricket-green mb-4">
            What Our Players Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our community of passionate cricketers about their experience with Dev's Cricket Club.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-cricket-lightgreen rounded-full flex items-center justify-center mr-4">
                  <span className="text-3xl">{testimonial.image}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-cricket-green">{testimonial.name}</h3>
                  <p className="text-cricket-gold font-medium">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <svg className="w-8 h-8 text-cricket-gold mb-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                <p className="text-gray-700 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>
              
              <div className="flex justify-center">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-cricket-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Ready to create your own success story?
          </p>
          <a
            href="#register"
            className="bg-cricket-green text-white px-8 py-3 rounded-lg font-bold hover:bg-cricket-lightgreen transition-colors duration-300"
          >
            Join Us Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;