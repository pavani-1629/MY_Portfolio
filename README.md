# 🌟 Pavani Parla | Professional Portfolio Website

Welcome to my personal portfolio website! This repository contains a premium, responsive, and highly interactive Single Page Application (SPA) designed to showcase my software engineering skills, artificial intelligence focus, academic journey, internships, and certifications.

🔗 **GitHub Repository**: [https://github.com/pavani-1629/MY_Portfolio](https://github.com/pavani-1629/MY_Portfolio)

---

## 🎨 Design & Visual Features

- **Premium Dark Mode Aesthetic**: Designed with an elegant slate/dark layout highlighted by soft, glowing radial mesh gradients (violet, indigo, and cyan).
- **Interactive Profile Visuals**: Features a floating, pulsing cyber orb visual core. The component attempts to load a profile photo directly from `src/assets/Profile.jpeg` with a graceful gradient initials fallback.
- **Core Pillars Layout**: Highlights key focus tracks (Full-Stack Development, AI & Machine Learning, and Embedded IoT Systems) rather than simple text details.
- **Accordion Experience Timeline**: A clean, vertical timeline where clicking on an internship node dynamically slides open to reveal achievement bullets.
- **Horizontal Skill Badges**: Grouped by category with custom inline SVG technology logo icons for a visual tech stack.
- **Filtered Projects Grid**: Supports real-time filter categories (All, AI/ML, Full-Stack, IoT/Hardware) utilizing smooth layout animations.
- **Verified Certification Cards**: Displays credential images with verified badges and a subtle zoom-on-hover effect.
- **Connect & Contact Form**: Directly maps primary profiles (Email, LinkedIn, GitHub) as large interactive cards alongside a functional message form with custom loading/success states.

---

## 🛠️ Technology Stack

- **Frontend Core**: [React.js](https://react.dev/) (bootstrapped with [Vite](https://vite.dev/))
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & PostCSS
- **Animations**: [Framer Motion](https://www.framer.com/motion/) (for smooth spring animations, scroll trigger triggers, and transition layout modes)
- **Icons**: [Lucide React](https://lucide.dev/) (for clean, responsive vector glyphs)

---

## 🚀 Local Setup & Installation

To run this project locally, ensure you have [Node.js](https://nodejs.org/) installed, and follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/pavani-1629/MY_Portfolio.git
   cd MY_Portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open **[http://localhost:5173](http://localhost:5173)** in your browser to view the site.

4. **Build for production**:
   ```bash
   npm run build
   ```
   The compiled assets will be written to the `dist/` directory, ready to deploy.

---

## ⚙️ How to Customize Your Content

All data is decoupled from the components. To edit text, links, or lists, modify **`src/data.js`**:

- **Update Profile details**: Edit the `personalInfo` object (name, titles, email, github, linkedin, objective statement).
- **Update Experience**: Add or edit objects in the `experience` array.
- **Update Projects**: Add or edit projects in the `projects` array. Ensure the `category` matches one of the filter tags (e.g., `'Full-Stack'`).
- **Update Skills**: Add/remove skill names in the `skills` lists. Custom icons are resolved automatically by key.
- **Asset Locations**:
  - Place your profile photo in `src/assets/Profile.jpeg`.
  - Place your certificate images in `src/assets/certificates/`.
