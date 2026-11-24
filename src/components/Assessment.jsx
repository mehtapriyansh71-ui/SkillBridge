import React, { useState } from 'react';
import { 
  IconUpload, 
  IconFileText, 
  IconCheckCircle, 
  IconAlertCircle, 
  IconShieldCheck,
  IconTool
} from './Icons';

export default function Assessment() {
  const [selectedFileName, setSelectedFileName] = useState('');
  const [selectedFileSize, setSelectedFileSize] = useState('');
  const [showSampleAssessment, setShowSampleAssessment] = useState(false);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setSelectedFileName(file.name);
      // Format file size nicely
      const sizeInMB = (file.size / (1024 * 1024)).toFixed(2);
      setSelectedFileSize(`${sizeInMB} MB`);
    }
  };

  const handleClearFile = () => {
    setSelectedFileName('');
    setSelectedFileSize('');
  };

  const handleToggleAssessment = () => {
    setShowSampleAssessment(!showSampleAssessment);
  };

  return (
    <section id="assessment" className="assessment-section">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">Practical Assessment</span>
          <h2 className="section-title">Let Your Work Speak for Itself.</h2>
          <p className="section-desc">
            Demonstrate your practical abilities through short videos and build a skill profile based on what you can actually do.
          </p>
        </div>

        <div className="assessment-grid">
          {/* Left Column: Explanation and Video Upload Input */}
          <div className="assessment-upload-card">
            <h3 className="card-subheading">Video-Based Skill Assessment</h3>
            <p className="assessment-intro-text">
              Traditional hiring demands paper credentials that many skilled artisans never received. 
              SkillBridge replaces paper degrees with <strong>2 to 3-minute video demonstrations</strong> of 
              real trade tasks—such as wiring a distribution board, jointing PVC pipes, or setting a level mortar bed.
            </p>

            <div className="video-criteria-list">
              <div className="criteria-item">
                <span className="criteria-num">1</span>
                <div>
                  <strong>Safe Workspace:</strong> Record with sufficient daylight showing proper tool grip.
                </div>
              </div>
              <div className="criteria-item">
                <span className="criteria-num">2</span>
                <div>
                  <strong>Work Procedure:</strong> Show end-to-end task execution without camera cuts.
                </div>
              </div>
              <div className="criteria-item">
                <span className="criteria-num">3</span>
                <div>
                  <strong>Safety Precautions:</strong> Demonstrate appropriate PPE, grounding, or leak prevention.
                </div>
              </div>
            </div>

            {/* Video File Selection Box */}
            <div className="file-upload-container">
              <label htmlFor="video-upload-input" className="file-dropzone">
                <input 
                  type="file" 
                  id="video-upload-input" 
                  accept="video/*"
                  onChange={handleFileChange}
                  className="hidden-file-input"
                />
                <div className="dropzone-content">
                  <div className="upload-icon-circle">
                    <IconUpload size={24} />
                  </div>
                  <span className="dropzone-text">
                    <strong>Click to select a demonstration video</strong>
                  </span>
                  <span className="dropzone-sub">
                    MP4, MOV, or WebM format (Simulated prototype selector)
                  </span>
                </div>
              </label>

              {/* Selected Filename Display */}
              {selectedFileName ? (
                <div className="selected-file-banner">
                  <div className="file-info-group">
                    <IconFileText size={20} className="file-icon" />
                    <div className="file-labels">
                      <span className="file-name">{selectedFileName}</span>
                      <span className="file-size">{selectedFileSize} • Ready for simulated review</span>
                    </div>
                  </div>
                  <button 
                    type="button" 
                    className="btn-clear-file" 
                    onClick={handleClearFile}
                    title="Remove selected file"
                  >
                    Clear
                  </button>
                </div>
              ) : (
                <div className="file-prompt-note">
                  No video selected yet. Select a sample video file from your device to see how it appears.
                </div>
              )}
            </div>

            <div className="sample-trigger-action">
              <button 
                type="button" 
                className="btn btn-secondary w-full"
                onClick={handleToggleAssessment}
              >
                <IconShieldCheck size={18} />
                {showSampleAssessment ? 'Hide Sample Assessment' : 'View Sample Assessment'}
              </button>
            </div>
          </div>

          {/* Right Column: Predefined Sample Assessment */}
          <div className="assessment-results-column">
            {showSampleAssessment ? (
              <div className="assessment-results-card">
                <div className="results-card-header">
                  <div>
                    <span className="badge badge-primary">Demonstration Report</span>
                    <h3 className="results-trade-title">Sample Skill Assessment</h3>
                    <p className="results-trade-sub">
                      Profession: <strong>Electrician</strong>
                    </p>
                  </div>
                  <div className="results-id-stamp">
                    <span>Task ID: #EL-8842</span>
                  </div>
                </div>

                <div className="rubric-items-container">
                  {/* Item 1: Tool Identification */}
                  <div className="rubric-item">
                    <div className="rubric-header">
                      <div className="rubric-title-block">
                        <IconTool size={18} className="rubric-icon" />
                        <span className="rubric-name">Tool Identification</span>
                      </div>
                      <span className="status-badge status-demonstrated">
                        <IconCheckCircle size={14} />
                        Demonstrated
                      </span>
                    </div>
                    <p className="rubric-notes">
                      Worker accurately identified and wielded insulated wire strippers, neon phase tester, and calibrated digital multimeter.
                    </p>
                  </div>

                  {/* Item 2: Work Procedure */}
                  <div className="rubric-item">
                    <div className="rubric-header">
                      <div className="rubric-title-block">
                        <IconFileText size={18} className="rubric-icon" />
                        <span className="rubric-name">Work Procedure</span>
                      </div>
                      <span className="status-badge status-partial">
                        <IconAlertCircle size={14} />
                        Partially Demonstrated
                      </span>
                    </div>
                    <p className="rubric-notes">
                      Core conduit routing and wire pulling were clean. Final ferrule termination at terminal strip was completed with slight slack.
                    </p>
                  </div>

                  {/* Item 3: Safety Practices */}
                  <div className="rubric-item">
                    <div className="rubric-header">
                      <div className="rubric-title-block">
                        <IconShieldCheck size={18} className="rubric-icon" />
                        <span className="rubric-name">Safety Practices</span>
                      </div>
                      <span className="status-badge status-review">
                        <IconAlertCircle size={14} />
                        Needs Further Review
                      </span>
                    </div>
                    <p className="rubric-notes">
                      Lock-out tag-out sequence followed. Rubber insulated gloves were removed before live check verification. Refresher recommended.
                    </p>
                  </div>
                </div>

                {/* Important Assessment Disclaimer Required by Spec */}
                <div className="assessment-disclaimer-box">
                  <div className="disclaimer-header">
                    <IconAlertCircle size={18} />
                    <strong>Mandatory Disclaimer</strong>
                  </div>
                  <p className="disclaimer-text">
                    AI-assisted assessment is intended to support skill evaluation. It does not independently constitute professional certification.
                  </p>
                  <p className="disclaimer-sub">
                    This is a simulated assessment for demonstration purposes only.
                  </p>
                </div>
              </div>
            ) : (
              <div className="assessment-placeholder-card">
                <div className="placeholder-content">
                  <div className="placeholder-icon">
                    <IconShieldCheck size={36} />
                  </div>
                  <h4>Skill Evaluation Preview</h4>
                  <p>
                    Click the <strong>"View Sample Assessment"</strong> button to inspect how practical task videos 
                    are evaluated across Tool Identification, Work Procedure, and Safety Practices.
                  </p>
                  <button 
                    type="button" 
                    className="btn btn-outline"
                    onClick={handleToggleAssessment}
                  >
                    View Sample Assessment
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
