import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-cricket-green text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Club Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-cricket-gold rounded-full flex items-center justify-center mr-3">
                <span className="text-cricket-green font-bold text-lg">🏏</span>
              </div>
              <span className="text-xl font-bold">Dev's Cricket Club</span>
            </div>
            <p className="text-cricket-cream text-sm leading-relaxed">
              Building cricket champions and character since 1998. Where passion meets precision.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-cricket-cream hover:text-cricket-gold transition-colors">Home</a></li>
              <li><a href="#about" className="text-cricket-cream hover:text-cricket-gold transition-colors">About</a></li>
              <li><a href="#achievements" className="text-cricket-cream hover:text-cricket-gold transition-colors">Achievements</a></li>
              <li><a href="#gallery" className="text-cricket-cream hover:text-cricket-gold transition-colors">Gallery</a></li>
              <li><a href="#register" className="text-cricket-cream hover:text-cricket-gold transition-colors">Register</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-2 text-cricket-cream text-sm">
              <p>📍 123 Cricket Ground Road, Sports City</p>
              <p>📞 +91 98765 43210</p>
              <p>✉️ info@devscricketclub.com</p>
              <p>🕒 Mon-Sat: 6:00 AM - 10:00 PM</p>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-cricket-lightgreen rounded-full flex items-center justify-center hover:bg-cricket-gold transition-colors">
                <span className="text-white">📘</span>
              </a>
              <a href="#" className="w-10 h-10 bg-cricket-lightgreen rounded-full flex items-center justify-center hover:bg-cricket-gold transition-colors">
                <span className="text-white">📷</span>
              </a>
              <a href="#" className="w-10 h-10 bg-cricket-lightgreen rounded-full flex items-center justify-center hover:bg-cricket-gold transition-colors">
                <span className="text-white">🐦</span>
              </a>
              <a href="#" className="w-10 h-10 bg-cricket-lightgreen rounded-full flex items-center justify-center hover:bg-cricket-gold transition-colors">
                <span className="text-white">📺</span>
              </a>
            </div>
            <div className="mt-4">
              <p className="text-cricket-cream text-sm mb-2">Subscribe to our newsletter:</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 rounded-l-lg text-gray-800 text-sm focus:outline-none"
                />
                <button className="bg-cricket-gold text-cricket-green px-4 py-2 rounded-r-lg hover:bg-yellow-400 transition-colors">
                  ➤
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-cricket-lightgreen mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-cricket-cream text-sm">
              © 2024 Dev's Cricket Club. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-cricket-cream hover:text-cricket-gold text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-cricket-cream hover:text-cricket-gold text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-cricket-cream hover:text-cricket-gold text-sm transition-colors">Code of Conduct</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;