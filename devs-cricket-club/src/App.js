import React, { useState, useEffect } from 'react';
import './App.css';

// Import all components
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Achievements from './components/Achievements';
import Gallery from './components/Gallery';
import Registration from './components/Registration';
import Admin from './components/Admin';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for the cricket animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <LoadingScreen isLoading={isLoading} />
      
      {!isLoading && (
        <>
          <Navbar />
          <Hero />
          <About />
          <Testimonials />
          <Achievements />
          <Gallery />
          <Registration />
          <Admin />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
