import React, { useState } from 'react';
import { 
  IconMapPin, 
  IconTool, 
  IconIndianRupee, 
  IconCheckCircle, 
  IconClock,
  IconBriefcase
} from './Icons';

export default function Jobs() {
  // Maintaining separate application state for each job
  const [appliedJobs, setAppliedJobs] = useState({
    1: false,
    2: false,
    3: false
  });

  const jobsData = [
    {
      id: 1,
      title: 'Electrical Wiring Assistance',
      profession: 'Electrician',
      location: 'Whitefield, Bengaluru',
      compensation: '₹900–₹1,200 per task',
      postedTime: '2 hours ago',
      taskScope: 'Sub-meter connection & MCB distribution line checking in residential flat.'
    },
    {
      id: 2,
      title: 'Plumbing Maintenance',
      profession: 'Plumber',
      location: 'Marathahalli, Bengaluru',
      compensation: '₹700–₹1,000 per task',
      postedTime: '5 hours ago',
      taskScope: 'Overhead tank float valve replacement and bathroom sink drainage check.'
    },
    {
      id: 3,
      title: 'Residential Electrical Repair',
      profession: 'Electrician',
      location: 'Mahadevapura, Bengaluru',
      compensation: '₹800–₹1,100 per task',
      postedTime: '1 day ago',
      taskScope: 'Ceiling fan rewiring, earthing check, and 16A geyser point power socket install.'
    }
  ];

  const handleApply = (jobId) => {
    setAppliedJobs((prev) => ({
      ...prev,
      [jobId]: true
    }));
  };

  return (
    <section id="jobs" className="jobs-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Local Opportunities</span>
          <h2 className="section-title">Find Work That Matches Your Skills.</h2>
          <p className="section-desc">
            Explore employment opportunities in your nearby areas.
          </p>
        </div>

        {/* Informative Prototype Note */}
        <div className="jobs-demo-alert">
          <IconBriefcase size={18} />
          <span>
            <strong>Illustrative Prototype Listings:</strong> These opportunities demonstrate the local matching interface. Tasks and payouts reflect prevailing rates in Bengaluru.
          </span>
        </div>

        {/* Job Listings Grid */}
        <div className="jobs-grid">
          {jobsData.map((job) => {
            const isApplied = appliedJobs[job.id];

            return (
              <div key={job.id} className="job-card">
                <div className="job-card-header">
                  <div className="job-profession-badge">
                    <IconTool size={14} />
                    <span>{job.profession}</span>
                  </div>
                  <span className="job-posted-time">
                    <IconClock size={12} />
                    {job.postedTime}
                  </span>
                </div>

                <h3 className="job-title">{job.title}</h3>
                <p className="job-scope">{job.taskScope}</p>

                <div className="job-details-list">
                  <div className="job-detail-row">
                    <IconMapPin size={16} className="detail-icon" />
                    <span className="detail-text">{job.location}</span>
                  </div>
                  <div className="job-detail-row compensation-row">
                    <IconIndianRupee size={16} className="detail-icon" />
                    <span className="detail-text compensation-highlight">{job.compensation}</span>
                  </div>
                </div>

                <div className="job-action-wrap">
                  <button
                    type="button"
                    className={`btn w-full ${isApplied ? 'btn-applied' : 'btn-primary'}`}
                    onClick={() => handleApply(job.id)}
                    disabled={isApplied}
                    aria-live="polite"
                  >
                    {isApplied ? (
                      <>
                        <IconCheckCircle size={16} />
                        Application Submitted
                      </>
                    ) : (
                      'Apply Now'
                    )}
                  </button>

                  {isApplied && (
                    <div className="application-success-msg" role="status">
                      <IconCheckCircle size={14} />
                      <span>Application submitted! The employer will contact you directly via phone.</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Illustrative Disclaimer as required by spec */}
        <div className="jobs-disclaimer-note">
          <p>
            * Note: The job listings above are illustrative demo opportunities for prototype testing and not real employment opportunities.
          </p>
        </div>
      </div>
    </section>
  );
}
