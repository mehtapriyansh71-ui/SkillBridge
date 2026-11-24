import React from 'react';
import { IconUser, IconVideo, IconBriefcase } from './Icons';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Create Your Profile',
      description: 'Tell us about your trade, years of hands-on experience, service area, and working availability in a few simple clicks.',
      icon: <IconUser size={26} />,
      detail: 'No complicated paperwork or resumes required.'
    },
    {
      number: '02',
      title: 'Demonstrate Your Skills',
      description: 'Upload practical work demonstrations for assessment. Show how you handle real tools, wiring, or repairs.',
      icon: <IconVideo size={26} />,
      detail: 'Proof of actual capability over paper certificates.'
    },
    {
      number: '03',
      title: 'Find Opportunities',
      description: 'Connect with suitable employment opportunities in your neighborhood with fair, transparent local task pricing.',
      icon: <IconBriefcase size={26} />,
      detail: 'Direct employer matching with zero middlemen commission.'
    }
  ];

  return (
    <section className="how-it-works-section" id="how-it-works">
      <div className="container">
        <div className="section-header text-center">
          <span className="section-eyebrow">Three Simple Steps</span>
          <h2 className="section-title">How SkillBridge Works</h2>
          <p className="section-desc">
            A transparent pathway for skilled artisans and trade workers to turn hands-on mastery into verified local livelihoods.
          </p>
        </div>

        <div className="steps-grid">
          {steps.map((step, idx) => (
            <div key={idx} className="step-card">
              <div className="step-card-header">
                <span className="step-badge">Step {step.number}</span>
                <div className="step-icon-wrap">
                  {step.icon}
                </div>
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
              <div className="step-detail-tag">
                {step.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
