# SkillBridge – A Verified Employment Ecosystem for India's Informal Workforce

> **Tagline:** *Prove Your Skills. Build Your Identity. Find Your Opportunities.*  
> **Platform Version:** Frontend Prototype v0.1  
> **Design Identity:** Calm, Minimal, Professional & Approachable (Warm Ivory `#F6F4ED` & Deep Forest Green `#244C3B`)

---

## 1. Project Overview

**SkillBridge** is a purpose-built employment and verification platform designed for India's 400M+ informal workforce, including electricians, plumbers, carpenters, mechanics, and masons. 

Unlike conventional employment boards built around formal college degrees, English-language resumes, or corporate CV formats, SkillBridge anchors worker employability directly on **demonstrated hands-on competence**, **verified trade track records**, and **localized fair-wage task matching**.

This repository contains the **Frontend Prototype (v0.1)** developed for rapid hackathon demonstration, illustrating the user experience, verified identity cards, practical task verification flow, and local job matching interactions.

---

## 2. Problem Statement

India's informal construction, trade, and maintenance sectors face three structural challenges:

1. **Lack of Recognized Credentials:** Skilled artisans possess years of practical field mastery but lack formal educational or institutional certifications recognized by modern urban homeowners, contractors, and facilities managers.
2. **Employer Trust Deficit:** Employers and local clients struggle to evaluate whether an unverified worker follows standard safety practices, uses proper tools, or will deliver reliable workmanship.
3. **Restricted Market Access & Middlemen Exploitation:** Workers depend on localized word-of-mouth or exploitative intermediaries who take steep commissions from their daily earnings.

---

## 3. Proposed Solution

SkillBridge bridges this divide through a three-pillar ecosystem:

* **Practical Skill Identity:** Replaces paper credentials with a verifiable digital profile highlighting actual trade skills, years of practical experience, and service availability.
* **Demonstrated Competence Assessment:** Evaluates short 2–3 minute video demonstrations of actual tasks (e.g., wiring an MCB board, pipe pressure testing) against clear trade rubrics (*Tool Identification*, *Work Procedure*, and *Safety Practices*).
* **Direct Local Opportunities:** Matches verified workers with nearby homeowners and project contractors with transparent, benchmarked task pricing without hidden fees.

---

## 4. Prototype Features (v0.1)

| Feature | Description | State & Interactivity |
| :--- | :--- | :--- |
| **Top Prototype Banner & Navigation** | Sticky, responsive header with brand wordmark (*Hunar Se Rojgar*), mobile drawer menu, and smooth in-page scrolling. | Working smooth-scroll to `#home`, `#profile`, `#assessment`, and `#jobs`. Responsive toggle on mobile. |
| **Hero Section** | Confident value proposition with trust pillars and custom vector craftsmanship artwork illustrating artisan tools (multimeter, level, pipe joints, verified seal). | Direct action CTAs for *Build Your Profile* and *Explore Jobs*. |
| **How SkillBridge Works** | Three-step visual walkthrough (*01 Create Your Profile*, *02 Demonstrate Your Skills*, *03 Find Opportunities*). | Clean layout with line icons and concise trade-focused explanations. |
| **Worker Profile Card** | Digital worker passport displaying Ravi Kumar (Electrician, 7 years experience, Whitefield Bengaluru, Weekend availability). | Interactive **Edit Profile** toggle with form validation and instant state updates via React `useState`. |
| **Skill Verification Section** | Video-based assessment explanation with video file selector and sample evaluation report. | File selection displays filename and size. **View Sample Assessment** dynamically displays rubric breakdown for Electrician (*Tool Identification: Demonstrated*, *Work Procedure: Partially Demonstrated*, *Safety Practices: Needs Further Review*). |
| **Nearby Employment Opportunities** | Local trade task listings with location, task scope, and compensation in Indian Rupees (₹). | Independent **Apply Now** buttons per job listing. Clicking transitions to **Application Submitted**, disables the button, and displays an on-card confirmation message. |
| **Footer** | Grounded deep forest green footer with branding, trade coverage tags, legal disclaimers, and version metadata. | Navigation anchors and prototype metadata. |

---

## 5. Technologies Used

- **Core Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/) (Lightning-fast HMR and optimized production bundling)
- **Language:** JavaScript (ES6+ / JSX)
- **Styling:** Modern semantic CSS3 with CSS Custom Properties (zero bloated utility frameworks, pristine typography and responsive design)
- **Typography:** Inter (Google Fonts) with clean system font fallbacks
- **State Management:** React `useState` hooks for local interactive states
- **Linting & Code Quality:** Oxlint (0 errors, 0 warnings)

### Color Palette Specification

| Token | Hex Code | Visual Role |
| :--- | :--- | :--- |
| **Primary** | `#244C3B` | Deep Forest Green — communicates stability, trust, and growth |
| **Background** | `#F6F4ED` | Warm Ivory — calm, accessible, approachable, non-fatiguing |
| **Secondary** | `#BA7955` | Muted Terracotta — craftsmanship, brickwork, and artisanal warmth |
| **Cards** | `#FFFFFF` | Pure White — clean content containment with subtle borders |
| **Main Text** | `#292D29` | Dark Charcoal — high legibility and contrast without harsh black |
| **Secondary Text**| `#777C75` | Muted Grey — soft secondary guidance and metadata |
| **Borders** | `#E5E4DD` | Soft Neutral Grey — subtle rectangular card definition |

---

## 6. Instructions for Running Locally

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18 or higher recommended; tested on Node v24) and `npm` installed.

### Installation & Development Server

1. **Clone or navigate to the project directory:**
   ```bash
   cd SkillBridge
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173/` (or the port displayed in your terminal).

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview the production build:**
   ```bash
   npm run preview
   ```

---

## 7. Current Prototype Limitations

> [!NOTE]
> **Prototype Disclosure:** This is a frontend hackathon prototype created to demonstrate user experience, design direction, and interactive state flows.
> 
> - **Simulated Skill Assessments:** The assessment rubric shown for the electrician trade is predefined and illustrative. No real video uploading, AI vision analysis, or computer vision model is running on the backend.
> - **Illustrative Job Listings:** The three job listings in Whitefield, Marathahalli, and Mahadevapura are sample demo postings for interaction evaluation. Applications are recorded only in local React state and are not submitted to real employers.
> - **In-Memory State:** Worker profile edits and job application states persist only for the current browser session and reset on page reload.
> - **Mandatory AI Disclaimer:** *AI-assisted assessment is intended to support skill evaluation. It does not independently constitute professional certification.*

---

## 8. Future Development Roadmap

- [ ] **Multilingual Voice & Vernacular Support:** Voice-first user interfaces in Hindi, Kannada, Tamil, Telugu, and Marathi to ensure full accessibility for artisans who prefer voice prompts over text typing.
- [ ] **Real Video Upload & Asynchronous AI Evaluation:** Integration with cloud storage (e.g. AWS S3/GCP) and multi-modal computer vision models to evaluate tool grip, work sequencing, and safety compliance.
- [ ] **Skill India / NSDC Integration:** Alignment with National Skill Development Corporation (NSDC) and Sector Skill Councils (SSC) certification standards for formal credential equivalency.
- [ ] **Aadhaar-Linked e-KYC & Verification:** Verified artisan identity checks and direct UPI escrow payouts for secure same-day task compensation.
- [ ] **Contractor & Client Dashboard:** A dedicated interface for urban builders, housing societies, and plumbing/electrical contractors to post batch tasks and review verified candidate video portfolios.
- [ ] **Offline PWA Support:** Progressive Web App capabilities for low-bandwidth usage on entry-level Android devices in low-connectivity areas.

---

## License & Credits

Built as a Hackathon prototype for **SkillBridge – India's Verified Informal Workforce Ecosystem**.  
Copyright © 2026 SkillBridge. All rights reserved.
