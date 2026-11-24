import React, { useState } from 'react';
import { 
  IconMapPin, 
  IconClock, 
  IconTool, 
  IconEdit, 
  IconCheckCircle, 
  IconShieldCheck 
} from './Icons';

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [saveSuccessMsg, setSaveSuccessMsg] = useState(false);

  // Initial worker profile state based on specification
  const [profile, setProfile] = useState({
    name: 'Ravi Kumar',
    profession: 'Electrician',
    experience: '7',
    location: 'Whitefield, Bengaluru',
    availability: 'Weekends'
  });

  // Temporary form state during edit
  const [formData, setFormData] = useState({ ...profile });

  const handleEditClick = () => {
    setFormData({ ...profile });
    setIsEditing(true);
    setSaveSuccessMsg(false);
  };

  const handleCancelClick = () => {
    setFormData({ ...profile });
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    setProfile({ ...formData });
    setIsEditing(false);
    setSaveSuccessMsg(true);
    setTimeout(() => {
      setSaveSuccessMsg(false);
    }, 4000);
  };

  return (
    <section id="profile" className="profile-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Worker Digital Identity</span>
          <h2 className="section-title">Verified Worker Profile</h2>
          <p className="section-desc">
            A trusted digital identity built around hands-on track record, verified trade competence, and real location availability.
          </p>
        </div>

        {saveSuccessMsg && (
          <div className="alert-toast success-toast" role="alert">
            <IconCheckCircle size={18} />
            <span>Profile details updated successfully in prototype state.</span>
          </div>
        )}

        <div className="profile-card-wrapper">
          {!isEditing ? (
            /* VIEW MODE */
            <div className="profile-display-card">
              <div className="profile-card-top">
                <div className="profile-avatar-wrap">
                  <div className="avatar-circle">
                    {profile.name.split(' ').map(n => n[0]).join('') || 'RK'}
                  </div>
                  <span className="online-indicator" title="Active on SkillBridge"></span>
                </div>

                <div className="profile-identity">
                  <div className="profile-name-row">
                    <h3 className="worker-name">{profile.name}</h3>
                    <span className="badge badge-verified">
                      <IconShieldCheck size={14} />
                      Verified Artisan
                    </span>
                  </div>
                  <p className="worker-profession-tag">{profile.profession}</p>
                </div>

                <div className="profile-top-action">
                  <button 
                    type="button" 
                    className="btn btn-outline"
                    onClick={handleEditClick}
                  >
                    <IconEdit size={16} />
                    Edit Profile
                  </button>
                </div>
              </div>

              <div className="profile-divider"></div>

              {/* Profile Details Grid */}
              <div className="profile-attributes-grid">
                <div className="attribute-item">
                  <div className="attribute-icon">
                    <IconTool size={18} />
                  </div>
                  <div className="attribute-content">
                    <span className="attribute-label">Trade / Profession</span>
                    <span className="attribute-value">{profile.profession}</span>
                  </div>
                </div>

                <div className="attribute-item">
                  <div className="attribute-icon">
                    <IconShieldCheck size={18} />
                  </div>
                  <div className="attribute-content">
                    <span className="attribute-label">Field Experience</span>
                    <span className="attribute-value">{profile.experience} years practical</span>
                  </div>
                </div>

                <div className="attribute-item">
                  <div className="attribute-icon">
                    <IconMapPin size={18} />
                  </div>
                  <div className="attribute-content">
                    <span className="attribute-label">Work Location</span>
                    <span className="attribute-value">{profile.location}</span>
                  </div>
                </div>

                <div className="attribute-item">
                  <div className="attribute-icon">
                    <IconClock size={18} />
                  </div>
                  <div className="attribute-content">
                    <span className="attribute-label">Work Availability</span>
                    <span className="attribute-value availability-highlight">{profile.availability}</span>
                  </div>
                </div>
              </div>

              {/* Skills Tags & Trust Summary */}
              <div className="profile-footer-meta">
                <div className="skills-pills">
                  <span className="skill-pill">Wiring & Conduiting</span>
                  <span className="skill-pill">MCB & DB Dressing</span>
                  <span className="skill-pill">Earthing Testing</span>
                  <span className="skill-pill">3-Phase Systems</span>
                </div>
                <div className="profile-trust-note">
                  <span>Trust Score: <strong>94/100</strong> (Simulated)</span>
                  <span>• Local Tasks Completed: <strong>48</strong></span>
                </div>
              </div>
            </div>
          ) : (
            /* EDIT MODE */
            <div className="profile-edit-card">
              <div className="edit-card-header">
                <div>
                  <h3 className="edit-card-title">Edit Worker Profile</h3>
                  <p className="edit-card-sub">Update profile details to reflect current trade skills and availability.</p>
                </div>
                <span className="badge badge-neutral">Edit Mode</span>
              </div>

              <form onSubmit={handleSave} className="profile-edit-form">
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="worker-name" className="form-label">Full Name</label>
                    <input 
                      type="text" 
                      id="worker-name" 
                      name="name" 
                      className="form-input" 
                      value={formData.name} 
                      onChange={handleChange}
                      required
                      placeholder="e.g. Ravi Kumar"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="worker-profession" className="form-label">Profession / Trade</label>
                    <select 
                      id="worker-profession" 
                      name="profession" 
                      className="form-select" 
                      value={formData.profession} 
                      onChange={handleChange}
                      required
                    >
                      <option value="Electrician">Electrician</option>
                      <option value="Plumber">Plumber</option>
                      <option value="Carpenter">Carpenter</option>
                      <option value="Mechanic">Mechanic</option>
                      <option value="Mason">Mason</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="worker-experience" className="form-label">Years of Experience</label>
                    <input 
                      type="number" 
                      id="worker-experience" 
                      name="experience" 
                      className="form-input" 
                      min="0" 
                      max="50" 
                      value={formData.experience} 
                      onChange={handleChange}
                      required
                      placeholder="e.g. 7"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="worker-location" className="form-label">Location (Area, City)</label>
                    <input 
                      type="text" 
                      id="worker-location" 
                      name="location" 
                      className="form-input" 
                      value={formData.location} 
                      onChange={handleChange}
                      required
                      placeholder="e.g. Whitefield, Bengaluru"
                    />
                  </div>

                  <div className="form-group full-width">
                    <label htmlFor="worker-availability" className="form-label">Availability</label>
                    <select 
                      id="worker-availability" 
                      name="availability" 
                      className="form-select" 
                      value={formData.availability} 
                      onChange={handleChange}
                      required
                    >
                      <option value="Weekends">Weekends</option>
                      <option value="Weekdays (Morning)">Weekdays (Morning)</option>
                      <option value="Full-time">Full-time</option>
                      <option value="Flexible / On-demand">Flexible / On-demand</option>
                      <option value="Immediate">Immediate Availability</option>
                    </select>
                  </div>
                </div>

                <div className="form-actions">
                  <button 
                    type="button" 
                    className="btn btn-secondary"
                    onClick={handleCancelClick}
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className="btn btn-primary"
                  >
                    Save Profile
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
