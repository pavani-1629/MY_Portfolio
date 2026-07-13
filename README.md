# Pavani Parla's Personal Portfolio

A premium, highly interactive, and responsive portfolio website built with **React**, **Tailwind CSS**, and **Framer Motion**. It features smooth animations, clean typography, responsive layouts for all device sizes, and a modern dark-mode-first aesthetic.

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)

---

## ✨ Key Features

- **📱 Fully Responsive Design**: Seamless viewing experience across mobile, tablet, and desktop viewports.
- **✨ Fluid Animations**: Smooth page transitions, hover effects, and scroll triggers built using **Framer Motion**.
- **💬 Auto-Typing Hero Title**: Dynamic titles list rendering with custom auto-typing animations.
- **📂 Project Showcase**: Filterable and card-based project section presenting live links, github repositories, and tags.
- **📊 Experience & Education Timelines**: Chronological details of professional internships, community roles, and academic achievements.
- **📜 Certifications sequential layout**: Interactive view of professional achievements and badges sequentially ordered before leadership rows.
- **📨 Contact Form**: Built-in functional contact form allowing seamless communication alongside primary profile cards.
- **⚙️ Data-Driven Content**: Completely modular. Changing text or media in a single data file updates the entire website.

---

## 🛠️ Tech Stack & Dependencies

### **Core**
- **React 18** — Component-based UI library
- **Vite** — High-performance dev server and bundler
- **JavaScript (ES6+)** — Application logic
- **HTML5 & CSS3** — Base markup and fallbacks

### **Styling & Animation**
- **Tailwind CSS v4** — Utility-first styling framework
- **Framer Motion** — Production-ready motion library for advanced React animations
- **Lucide React** — Modern, clean icons

---

## 📂 Directory Structure

Here's an overview of the key directories and files:

```bash
pavani-portfolio/
├── public/                 # Static assets, favicon, certs
│   └── favicon.svg
├── src/
│   ├── assets/             # Images, project screenshots, logos
│   │   ├── certificates/   # Uploaded certificate images
│   │   │   
│   │   ├── Profile.jpeg    # Profile picture
│   │   └── react.svg
│   ├── components/         # Reusable React components
│   │   ├── About.jsx       # About bio section & core pillars
│   │   ├── Certifications.jsx # Sequential certifications & leadership
│   │   ├── Contact.jsx     # Contact details cards & form
│   │   ├── Experience.jsx  # Accordion-style experience timeline
│   │   ├── Footer.jsx      # Multi-column footer
│   │   ├── Hero.jsx        # Typing headline & floating visual
│   │   ├── Icons.jsx       # SVG brand logos (Github, Linkedin)
│   │   ├── Navbar.jsx      # Mobile-responsive navigation bar
│   │   ├── Projects.jsx    # Projects filtered grid
│   │   └── Skills.jsx      # Skills grid with inline technology logos
│   ├── data.js             # Configuration file (consolidated DB)
│   ├── index.css           # Global custom scrollbars, blurs, and Tailwind config
│   ├── App.jsx             # Application assembler
│   └── main.jsx            # Entry point
├── tailwind.config.js      # Tailwind content paths
├── postcss.config.js       # PostCSS plugins
└── package.json            # Scripts & project dependencies
```

---

## ⚙️ Getting Started & Local Setup

Follow these steps to run the portfolio locally on your machine:

### **1. Prerequisites**
Ensure you have [Node.js](https://nodejs.org/) installed (recommended version 18.x or higher) and `npm`.

### **2. Clone the Repository**
```bash
git clone https://github.com/pavani-1629/MY_Portfolio.git
cd MY_Portfolio
```

### **3. Install Dependencies**
```bash
npm install
```

### **4. Run Development Server**
Launch the interactive web server locally:
```bash
npm run dev
```
Open your browser and navigate to [http://localhost:5173](http://localhost:5173).

### **5. Build for Production**
Build the optimized application bundle inside the `dist/` directory:
```bash
npm run build
```

---

## ✏️ How to Customize

This portfolio is built to be easily customizable. You only need to edit one file to personalize all content:

1. **Personal Information & Bios**: Edit [data.js](./src/data.js) to update your name, title, bio, email, and social profiles.
2. **Work Experience**: Edit [data.js](./src/data.js) to add or modify internships, roles, and descriptions in the `experience` array.
3. **Projects**: Edit [data.js](./src/data.js) to show your custom software applications, screenshots, and live demo / source code URLs in the `projects` array.
4. **Skills**: Edit [data.js](./src/data.js) to update programming languages, developer tools, and framework lists in the `skills` array.
5. **Certifications**: Edit [data.js](./src/data.js) to show your verified credentials and achievement badges.

---

## 🤝 Connect with Me

Feel free to reach out for collaboration opportunities, code questions, or just a friendly chat!

- **Email**: [pavaniparla2916@gmail.com](mailto:pavaniparla2916@gmail.com)
- **LinkedIn**: [linkedin.com/in/pavaniparla09](https://linkedin.com/in/pavaniparla09)
- **GitHub**: [github.com/pavani-1629](https://github.com/pavani-1629)
- **LeetCode**: [leetcode.com/u/pavani-1629/](https://leetcode.com/u/pavani-1629/)

---
*Created by [Pavani Parla](https://github.com/pavani-1629).*
