import React, { useState } from 'react';
import { addRegistration } from '../utils/firebaseUtils';

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    role: '',
    contact: '',
    email: '',
    experience: '',
    emergencyContact: '',
    previousClubs: '',
    availability: []
  });

  const [submitted, setSubmitted] = useState(false);

  const cricketRoles = [
    'Batsman',
    'Bowler',
    'All-rounder',
    'Wicket-keeper',
    'Opening Batsman',
    'Middle Order',
    'Fast Bowler',
    'Spin Bowler',
    'Finisher'
  ];

  const experienceLevels = [
    'Beginner (0-1 years)',
    'Intermediate (2-5 years)',
    'Advanced (6-10 years)',
    'Expert (10+ years)',
    'Professional'
  ];

  const availabilityOptions = [
    'Weekday Mornings',
    'Weekday Evenings',
    'Weekend Mornings',
    'Weekend Evenings',
    'Tournament Days'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      availability: checked
        ? [...prev.availability, value]
        : prev.availability.filter(item => item !== value)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Save registration data to Firebase
      const result = await addRegistration(formData);
      
      if (result.success) {
        console.log('Registration Data saved:', formData);
        setSubmitted(true);
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setSubmitted(false);
          setFormData({
            name: '',
            age: '',
            role: '',
            contact: '',
            email: '',
            experience: '',
            emergencyContact: '',
            previousClubs: '',
            availability: []
          });
        }, 3000);
      } else {
        alert('Registration failed: ' + result.error);
      }
    } catch (error) {
      console.error('Registration error:', error);
      alert('Registration failed. Please try again.');
    }
  };

  if (submitted) {
    return (
      <section id="register" className="py-16 bg-cricket-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center bg-white rounded-lg p-12 shadow-2xl">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-cricket-green mb-4">Registration Successful!</h2>
            <p className="text-gray-600 text-lg mb-6">
              Welcome to Dev's Cricket Club! We'll contact you soon with further details.
            </p>
            <div className="text-4xl mb-4">🏏</div>
            <p className="text-cricket-lightgreen font-medium">
              Get ready to be part of something extraordinary!
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="register" className="py-16 bg-cricket-green">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Join Our Club
          </h2>
          <p className="text-xl text-cricket-cream max-w-3xl mx-auto">
            Ready to be part of Dev's Cricket Club? Fill out the registration form below and start your journey with us.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-2xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Age */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cricket-green focus:border-transparent transition-all duration-300"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Age *
                </label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  required
                  min="16"
                  max="60"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cricket-green focus:border-transparent transition-all duration-300"
                  placeholder="Your age"
                />
              </div>
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Number *
                </label>
                <input
                  type="tel"
                  name="contact"
                  value={formData.contact}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cricket-green focus:border-transparent transition-all duration-300"
                  placeholder="+91 98765 43210"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cricket-green focus:border-transparent transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            {/* Cricket Role and Experience */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Cricket Role *
                </label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cricket-green focus:border-transparent transition-all duration-300"
                >
                  <option value="">Select your role</option>
                  {cricketRoles.map(role => (
                    <option key={role} value={role}>{role}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cricket Experience *
                </label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cricket-green focus:border-transparent transition-all duration-300"
                >
                  <option value="">Select experience level</option>
                  {experienceLevels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Emergency Contact */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Emergency Contact Number *
              </label>
              <input
                type="tel"
                name="emergencyContact"
                value={formData.emergencyContact}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cricket-green focus:border-transparent transition-all duration-300"
                placeholder="Emergency contact number"
              />
            </div>

            {/* Previous Clubs */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Previous Cricket Clubs/Teams (if any)
              </label>
              <textarea
                name="previousClubs"
                value={formData.previousClubs}
                onChange={handleInputChange}
                rows="3"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cricket-green focus:border-transparent transition-all duration-300"
                placeholder="List any previous cricket clubs or teams you've played for..."
              />
            </div>

            {/* Availability */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Training/Match Availability (select all that apply)
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {availabilityOptions.map(option => (
                  <label key={option} className="flex items-center">
                    <input
                      type="checkbox"
                      value={option}
                      checked={formData.availability.includes(option)}
                      onChange={handleCheckboxChange}
                      className="h-4 w-4 text-cricket-green focus:ring-cricket-green border-gray-300 rounded"
                    />
                    <span className="ml-3 text-gray-700">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-6">
              <button
                type="submit"
                className="bg-cricket-green text-white px-12 py-4 rounded-lg font-bold text-lg hover:bg-cricket-lightgreen transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Register Now
              </button>
            </div>
          </form>
        </div>

        {/* Additional Information */}
        <div className="mt-12 text-center">
          <div className="bg-cricket-lightgreen rounded-lg p-6 text-white">
            <h3 className="text-xl font-bold mb-4">What happens next?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl mb-2">📝</div>
                <h4 className="font-semibold mb-2">Review</h4>
                <p className="text-cricket-cream text-sm">We'll review your application within 24-48 hours</p>
              </div>
              <div>
                <div className="text-3xl mb-2">📞</div>
                <h4 className="font-semibold mb-2">Contact</h4>
                <p className="text-cricket-cream text-sm">Our team will contact you to schedule a meeting</p>
              </div>
              <div>
                <div className="text-3xl mb-2">🏏</div>
                <h4 className="font-semibold mb-2">Welcome</h4>
                <p className="text-cricket-cream text-sm">Join our training sessions and become part of the family</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;