import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent, within } from '@testing-library/react';
import React from 'react';
import App from '../App';

describe('SkillBridge Frontend Prototype v0.1', () => {
  it('renders Navigation with required links and branding', () => {
    render(<App />);
    expect(screen.getAllByText('SkillBridge').length).toBeGreaterThan(0);
    // Home, Worker Profile, Skill Verification, Find Jobs appear in nav
    expect(screen.getAllByRole('link', { name: /^Home$/i }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole('link', { name: /^Worker Profile$/i }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole('link', { name: /^Skill Verification$/i }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole('link', { name: /^Find Jobs$/i }).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/Prototype v0\.1/i).length).toBeGreaterThan(0);
  });

  it('renders Hero section with exact copy and call to actions', () => {
    render(<App />);
    expect(screen.getByText('Your Skills Deserve Recognition.')).toBeDefined();
    expect(screen.getByText(/Show what you can do, build a trusted skill identity and discover employment opportunities near you\./i)).toBeDefined();
    expect(screen.getByRole('button', { name: /Build Your Profile/i })).toBeDefined();
    expect(screen.getAllByRole('button', { name: /Explore Jobs/i }).length).toBeGreaterThan(0);
  });

  it('renders How SkillBridge Works with the 3 required steps', () => {
    render(<App />);
    expect(screen.getByText('Create Your Profile')).toBeDefined();
    expect(screen.getByText(/Tell us about your trade/i)).toBeDefined();
    expect(screen.getByText('Demonstrate Your Skills')).toBeDefined();
    expect(screen.getByText(/Upload practical work demonstrations for assessment/i)).toBeDefined();
    expect(screen.getByText('Find Opportunities')).toBeDefined();
    expect(screen.getByText(/Connect with suitable employment opportunities/i)).toBeDefined();
  });

  it('renders initial Worker Profile and allows editing and saving', () => {
    const { container } = render(<App />);
    const profileSection = container.querySelector('#profile');
    expect(profileSection).not.toBeNull();
    
    // Initial verification within the profile section
    expect(within(profileSection).getByText('Ravi Kumar')).toBeDefined();
    expect(within(profileSection).getByText('7 years practical')).toBeDefined();
    expect(within(profileSection).getByText('Whitefield, Bengaluru')).toBeDefined();
    expect(within(profileSection).getByText('Weekends')).toBeDefined();

    // Click Edit Profile
    const editBtn = within(profileSection).getByRole('button', { name: /Edit Profile/i });
    fireEvent.click(editBtn);

    // Form should now be rendered
    const nameInput = within(profileSection).getByLabelText(/Full Name/i);
    const expInput = within(profileSection).getByLabelText(/Years of Experience/i);
    const locationInput = within(profileSection).getByLabelText(/Location/i);
    const availabilitySelect = within(profileSection).getByLabelText(/Availability/i);

    expect(nameInput.value).toBe('Ravi Kumar');
    expect(expInput.value).toBe('7');

    // Update values
    fireEvent.change(nameInput, { target: { value: 'Ravi Kumar Sharma' } });
    fireEvent.change(expInput, { target: { value: '8' } });
    fireEvent.change(locationInput, { target: { value: 'Indiranagar, Bengaluru' } });
    fireEvent.change(availabilitySelect, { target: { value: 'Full-time' } });

    // Save profile
    const saveBtn = within(profileSection).getByRole('button', { name: /Save Profile/i });
    fireEvent.click(saveBtn);

    // Verify view mode updated
    expect(within(profileSection).getByText('Ravi Kumar Sharma')).toBeDefined();
    expect(within(profileSection).getByText('8 years practical')).toBeDefined();
    expect(within(profileSection).getByText('Indiranagar, Bengaluru')).toBeDefined();
    expect(within(profileSection).getByText('Full-time')).toBeDefined();
    expect(within(profileSection).getByText(/Profile details updated successfully/i)).toBeDefined();
  });

  it('handles video file selection and displays sample skill assessment with required disclaimer', () => {
    const { container } = render(<App />);
    const assessmentSection = container.querySelector('#assessment');
    expect(assessmentSection).not.toBeNull();

    // Section header & description
    expect(within(assessmentSection).getByText('Let Your Work Speak for Itself.')).toBeDefined();
    expect(within(assessmentSection).getByText(/Demonstrate your practical abilities through short videos and build a skill profile based on what you can actually do\./i)).toBeDefined();

    // Test file input selection
    const fileInput = document.getElementById('video-upload-input');
    const fakeFile = new File(['dummy-video-content'], 'electrician_demo_task.mp4', { type: 'video/mp4' });
    fireEvent.change(fileInput, { target: { files: [fakeFile] } });

    // Verify selected filename appears
    expect(within(assessmentSection).getByText('electrician_demo_task.mp4')).toBeDefined();

    // Click "View Sample Assessment" button
    const viewAssessmentButtons = within(assessmentSection).getAllByRole('button', { name: /View Sample Assessment/i });
    fireEvent.click(viewAssessmentButtons[0]);

    // Verify assessment rubric items
    expect(within(assessmentSection).getByText('Tool Identification')).toBeDefined();
    expect(within(assessmentSection).getByText('Demonstrated')).toBeDefined();

    expect(within(assessmentSection).getByText('Work Procedure')).toBeDefined();
    expect(within(assessmentSection).getByText('Partially Demonstrated')).toBeDefined();

    expect(within(assessmentSection).getByText('Safety Practices')).toBeDefined();
    expect(within(assessmentSection).getByText('Needs Further Review')).toBeDefined();

    // Verify exact mandatory disclaimer
    expect(within(assessmentSection).getByText('AI-assisted assessment is intended to support skill evaluation. It does not independently constitute professional certification.')).toBeDefined();
  });

  it('renders all 3 required jobs and maintains separate application states', () => {
    const { container } = render(<App />);
    const jobsSection = container.querySelector('#jobs');
    expect(jobsSection).not.toBeNull();

    // Verify Heading
    expect(within(jobsSection).getByText('Find Work That Matches Your Skills.')).toBeDefined();
    expect(within(jobsSection).getByText(/Explore employment opportunities in your nearby areas\./i)).toBeDefined();

    // JOB 1
    expect(within(jobsSection).getByText('Electrical Wiring Assistance')).toBeDefined();
    expect(within(jobsSection).getByText('₹900–₹1,200 per task')).toBeDefined();

    // JOB 2
    expect(within(jobsSection).getByText('Plumbing Maintenance')).toBeDefined();
    expect(within(jobsSection).getByText('Marathahalli, Bengaluru')).toBeDefined();
    expect(within(jobsSection).getByText('₹700–₹1,000 per task')).toBeDefined();

    // JOB 3
    expect(within(jobsSection).getByText('Residential Electrical Repair')).toBeDefined();
    expect(within(jobsSection).getByText('Mahadevapura, Bengaluru')).toBeDefined();
    expect(within(jobsSection).getByText('₹800–₹1,100 per task')).toBeDefined();

    // Verify all 3 have "Apply Now" buttons initially
    const applyButtons = within(jobsSection).getAllByRole('button', { name: /Apply Now/i });
    expect(applyButtons.length).toBe(3);

    // Click Apply Now on JOB 1
    fireEvent.click(applyButtons[0]);

    // JOB 1 button changes to "Application Submitted" and is disabled
    expect(within(jobsSection).getByRole('button', { name: /Application Submitted/i })).toBeDefined();
    expect(within(jobsSection).getByRole('button', { name: /Application Submitted/i }).disabled).toBe(true);

    // Small success message is visible
    expect(within(jobsSection).getByText(/Application submitted! The employer will contact you directly via phone\./i)).toBeDefined();

    // JOB 2 and JOB 3 should STILL have "Apply Now" enabled
    const remainingApplyBtns = within(jobsSection).getAllByRole('button', { name: /Apply Now/i });
    expect(remainingApplyBtns.length).toBe(2);

    // Apply to JOB 2
    fireEvent.click(remainingApplyBtns[0]);
    expect(within(jobsSection).getAllByRole('button', { name: /Application Submitted/i }).length).toBe(2);

    // JOB 3 still remains unapplied
    const lastApplyBtn = within(jobsSection).getByRole('button', { name: /Apply Now/i });
    expect(lastApplyBtn).toBeDefined();
    expect(lastApplyBtn.disabled).toBe(false);

    // Check illustrative note
    expect(within(jobsSection).getByText(/\* Note: The job listings above are illustrative demo opportunities for prototype testing and not real employment opportunities\./i)).toBeDefined();
  });

  it('renders Footer with branding, tagline, navigation, and Prototype v0.1 label', () => {
    const { container } = render(<App />);
    const footer = container.querySelector('footer');
    expect(footer).not.toBeNull();
    expect(within(footer).getByText('Prove Your Skills. Build Your Identity. Find Your Opportunities.')).toBeDefined();
    expect(within(footer).getByText(/A verified employment ecosystem helping India's electricians/i)).toBeDefined();
    expect(within(footer).getAllByText('Prototype v0.1').length).toBeGreaterThan(0);
  });
});
