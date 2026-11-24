import React, { useState } from 'react';
import { IconMenu, IconClose, IconShieldCheck } from './Icons';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="navbar-header">
      <nav className="navbar" aria-label="Main Navigation">
        <div className="container nav-container">
          <a href="#home" className="brand-logo" onClick={(e) => handleNavClick(e, 'home')}>
            <span className="logo-icon-wrap">
              <IconShieldCheck size={22} className="logo-svg" />
            </span>
            <div className="brand-text-block">
              <span className="brand-name">SkillBridge</span>
              <span className="brand-sub">Hunar Se Rojgar</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="nav-links desktop-only">
            <li>
              <a href="#home" onClick={(e) => handleNavClick(e, 'home')}>
                Home
              </a>
            </li>
            <li>
              <a href="#profile" onClick={(e) => handleNavClick(e, 'profile')}>
                Worker Profile
              </a>
            </li>
            <li>
              <a href="#assessment" onClick={(e) => handleNavClick(e, 'assessment')}>
                Skill Verification
              </a>
            </li>
            <li>
              <a href="#jobs" onClick={(e) => handleNavClick(e, 'jobs')}>
                Find Jobs
              </a>
            </li>
          </ul>

          <div className="nav-actions desktop-only">
            <button 
              className="btn btn-primary btn-sm" 
              onClick={(e) => handleNavClick(e, 'jobs')}
            >
              Explore Jobs
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            type="button" 
            className="mobile-toggle"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <IconClose size={24} /> : <IconMenu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu">
            <ul className="mobile-nav-list">
              <li>
                <a href="#home" onClick={(e) => handleNavClick(e, 'home')}>
                  Home
                </a>
              </li>
              <li>
                <a href="#profile" onClick={(e) => handleNavClick(e, 'profile')}>
                  Worker Profile
                </a>
              </li>
              <li>
                <a href="#assessment" onClick={(e) => handleNavClick(e, 'assessment')}>
                  Skill Verification
                </a>
              </li>
              <li>
                <a href="#jobs" onClick={(e) => handleNavClick(e, 'jobs')}>
                  Find Jobs
                </a>
              </li>
              <li className="mobile-action-item">
                <button 
                  className="btn btn-primary w-full"
                  onClick={(e) => handleNavClick(e, 'profile')}
                >
                  Build Your Profile
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
