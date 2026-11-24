import React from 'react';
import { IconShieldCheck, IconCheckCircle, IconArrowRight } from './Icons';

export default function Hero() {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="pill-tag">
            <span className="pill-dot"></span>
            Empowering India's 400M+ Skilled Informal Workforce
          </div>

          <h1 className="hero-title">
            Your Skills Deserve Recognition.
          </h1>

          <p className="hero-subtitle">
            Show what you can do, build a trusted skill identity and discover employment opportunities near you.
          </p>

          <div className="hero-cta-group">
            <button 
              className="btn btn-primary"
              onClick={(e) => scrollToSection(e, 'profile')}
            >
              Build Your Profile
              <IconArrowRight size={18} />
            </button>
            <button 
              className="btn btn-secondary"
              onClick={(e) => scrollToSection(e, 'jobs')}
            >
              Explore Jobs
            </button>
          </div>

          {/* Trust pillars bar */}
          <div className="hero-pillars">
            <div className="pillar-item">
              <span className="pillar-check"><IconCheckCircle size={16} /></span>
              <span>No formal degree required</span>
            </div>
            <div className="pillar-item">
              <span className="pillar-check"><IconCheckCircle size={16} /></span>
              <span>Practical video verification</span>
            </div>
            <div className="pillar-item">
              <span className="pillar-check"><IconCheckCircle size={16} /></span>
              <span>Direct local employer connections</span>
            </div>
          </div>
        </div>

        {/* Subtle Craftsmanship Visual */}
        <div className="hero-visual" aria-hidden="true">
          <div className="craft-card-showcase">
            <div className="craft-card-header">
              <div className="badge-verified">
                <IconShieldCheck size={18} />
                <span>Verified Practical Competence</span>
              </div>
              <span className="craft-card-location">Bengaluru, KA</span>
            </div>

            <div className="craft-illustration-container">
              {/* Minimal line illustration inspired by tools, craftsmanship and trade integrity */}
              <svg 
                viewBox="0 0 320 180" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg" 
                className="craft-svg"
              >
                {/* Subtle workbench grid */}
                <line x1="20" y1="150" x2="300" y2="150" stroke="#E5E4DD" strokeWidth="2" strokeDasharray="4 4" />
                
                {/* Spirit Level / Balance Tool */}
                <rect x="45" y="132" width="105" height="18" rx="4" fill="#FFFFFF" stroke="#244C3B" strokeWidth="2" />
                <circle cx="97" cy="141" r="5" fill="#BA7955" fillOpacity="0.4" stroke="#BA7955" strokeWidth="1.5" />
                <line x1="88" y1="141" x2="106" y2="141" stroke="#244C3B" strokeWidth="1" />

                {/* Electrician Multimeter & Tester Wire */}
                <rect x="175" y="70" width="70" height="80" rx="6" fill="#FFFFFF" stroke="#244C3B" strokeWidth="2" />
                <rect x="187" y="80" width="46" height="24" rx="2" fill="#F6F4ED" stroke="#E5E4DD" strokeWidth="1.5" />
                <text x="210" y="96" textAnchor="middle" fill="#244C3B" fontSize="11" fontFamily="monospace" fontWeight="bold">230 V</text>
                <circle cx="210" cy="124" r="10" fill="#FFFFFF" stroke="#BA7955" strokeWidth="1.5" />
                <line x1="210" y1="124" x2="216" y2="118" stroke="#BA7955" strokeWidth="2" strokeLinecap="round" />
                {/* Test probe lead */}
                <path d="M190 150 C 190 170, 160 160, 150 145" stroke="#BA7955" strokeWidth="2" strokeLinecap="round" />
                <rect x="142" y="135" width="12" height="6" rx="1" fill="#BA7955" />
                <line x1="140" y1="138" x2="135" y2="138" stroke="#777C75" strokeWidth="2" />

                {/* Plumber Pipe & Joint */}
                <path d="M70 40 L70 95 L115 95" stroke="#777C75" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="70" cy="95" r="7" fill="#BA7955" stroke="#FFFFFF" strokeWidth="2" />
                <rect x="62" y="35" width="16" height="6" rx="1" fill="#244C3B" />
                <rect x="110" y="87" width="6" height="16" rx="1" fill="#244C3B" />

                {/* Craftsmanship Verified Shield Stamp */}
                <g transform="translate(105, 30)">
                  <circle cx="28" cy="28" r="26" fill="#244C3B" />
                  <path d="M28 16 L38 21 V29 C38 36 28 41 28 41 C28 41 18 36 18 29 V21 Z" fill="#F6F4ED" />
                  <path d="M24 28 L27 31 L32 25" stroke="#244C3B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </svg>
            </div>

            <div className="craft-card-footer">
              <div className="craft-trades-taglist">
                <span className="trade-tag">Electricians</span>
                <span className="trade-tag">Plumbers</span>
                <span className="trade-tag">Carpenters</span>
                <span className="trade-tag">Masons</span>
                <span className="trade-tag">Mechanics</span>
              </div>
              <div className="craft-meta-note">
                Practical assessment eliminates credential barriers.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
