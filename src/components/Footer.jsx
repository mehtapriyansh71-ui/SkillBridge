import React from 'react';
import { IconShieldCheck } from './Icons';

export default function Footer() {
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top-grid">
          {/* Brand Info */}
          <div className="footer-brand-column">
            <div className="footer-logo">
              <span className="logo-icon-wrap">
                <IconShieldCheck size={20} className="logo-svg" />
              </span>
              <span className="brand-name">SkillBridge</span>
            </div>
            <p className="footer-tagline">
              Prove Your Skills. Build Your Identity. Find Your Opportunities.
            </p>
            <p className="footer-description">
              A verified employment ecosystem helping India's electricians, plumbers, carpenters, mechanics, and masons turn practical trade competence into trusted livelihoods without credential barriers.
            </p>
            <div className="footer-badge-wrap">
              <span className="footer-version-badge">Prototype v0.1</span>
              <span className="footer-env-text">Hackathon Demonstration Build</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="footer-nav-column">
            <h4 className="footer-heading">Platform Navigation</h4>
            <ul className="footer-links-list">
              <li>
                <a href="#home" onClick={(e) => handleNavClick(e, 'home')}>
                  Home
                </a>
              </li>
              <li>
                <a href="#how-it-works" onClick={(e) => handleNavClick(e, 'how-it-works')}>
                  How SkillBridge Works
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
          </div>

          {/* Trade Sectors & Trust Model */}
          <div className="footer-trades-column">
            <h4 className="footer-heading">Supported Trades</h4>
            <div className="trades-list">
              <span className="trade-pill">Electrical Works</span>
              <span className="trade-pill">Plumbing & Sanitary</span>
              <span className="trade-pill">Carpentry & Joinery</span>
              <span className="trade-pill">Auto / Small Engine Mechanics</span>
              <span className="trade-pill">Masonry & Tiling</span>
            </div>
            <div className="footer-disclaimer-box">
              <small>
                This prototype demonstrates frontend state management and visual ergonomics. All assessments and job applications are simulated locally.
              </small>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-inner">
            <p className="copyright-text">
              © 2026 SkillBridge Prototype v0.1. Built for India's Informal Workforce.
            </p>
            <div className="footer-meta-tags">
              <span>Calm, Accessible & Dignified Interface</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
