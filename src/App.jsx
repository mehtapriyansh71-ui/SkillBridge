import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Profile from './components/Profile';
import Assessment from './components/Assessment';
import Jobs from './components/Jobs';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-root">
      <Navbar />
      <main id="main-content">
        <Hero />
        <HowItWorks />
        <Profile />
        <Assessment />
        <Jobs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
