# DESIGN SPECIFICATION: Futuristic Cyber-HUD Portfolio

## 1. Visual Identity & Design Language

The design is modeled after the cutting-edge cyber-command-center aesthetic of `harinew-portfolio-33.vercel.app`, re-engineered from the ground up for **Siddhartha Bose** (Consultant & Frontend Developer in Fintech & OBDX).

### Core Aesthetic Pillars
- **Cybernetic Command Center / HUD Theme**: Technical telemetry badges (`[ SYS.ONLINE // MODULE_01 ]`), geometric corner accents, scanning lines, laser grids, and futuristic diagnostics.
- **Glassmorphism & Holographic Layers**: Deep dark translucent surfaces with backdrop blur (`backdrop-filter: blur(12px)`), multi-layered border glows, and volumetric lighting orbs.
- **Micro-Interactions & Organic Motion**: Real-time canvas particle constellations with laser interconnect threads, 3D tilt tracking cards (`perspective(1000px)`), interactive flip cards, and circular SVG telemetry diagnostic rings.
- **High-Contrast Tactical Color Hierarchy**: Midnight void backgrounds offset by high-energy Cyber Orange (primary action), Electric Blue (technical depth), Emerald Green (status / active states), and Cyber Violet (creative pursuits).

---

## 2. Color System & Theme Variables

```css
:root {
  /* Surface Layers */
  --bg-primary: #050508;      /* Void Black - Main canvas background */
  --bg-secondary: #0b0f19;    /* Deep Navy Charcoal - Section alternation & panels */
  --bg-tertiary: #121824;     /* Slate HUD Card Surface */
  --bg-card-glass: rgba(18, 24, 36, 0.65); /* Translucent glass card background */
  --border-glass: rgba(255, 255, 255, 0.08);

  /* Typography Colors */
  --text-primary: #ffffff;    /* Crisp White headings & emphasis */
  --text-secondary: #cbd5e1;  /* Slate-200 body text */
  --text-muted: #64748b;      /* Muted telemetry & timestamps */

  /* Neon Accent System */
  --accent-primary: #f97316;    /* Cyber Orange (RGB: 249, 115, 22) - Core CTA */
  --accent-blue: #3b82f6;       /* Electric Cyan/Blue (RGB: 59, 130, 246) */
  --accent-emerald: #10b981;    /* System Status Emerald (RGB: 16, 185, 129) */
  --accent-purple: #a855f7;     /* Creative Pulse Purple (RGB: 168, 85, 247) */
  --accent-yellow: #eab308;     /* Warning / Code Yellow (RGB: 234, 179, 8) */

  /* Atmospheric Shadows & Glows */
  --shadow-glow-orange: 0 0 30px rgba(249, 115, 22, 0.35);
  --shadow-glow-blue: 0 0 30px rgba(59, 130, 246, 0.35);
  --shadow-card: 0 8px 32px 0 rgba(0, 0, 0, 0.45);
}
```

---

## 3. Typography Hierarchy

| Role | Font Family | Weight | Scale / Styling |
| :--- | :--- | :--- | :--- |
| **Headings / Hero Title** | `Outfit`, sans-serif | 700 / 800 | 48px - 64px (`text-4xl` to `text-6xl`), tight tracking, gradient highlights |
| **Section Titles & HUD Labels** | `Outfit` / `Space Grotesk` | 700 | 28px - 36px (`text-2xl` to `text-3xl`), uppercase, letter-spacing: 0.05em |
| **Body / Descriptions** | `Inter`, sans-serif | 400 / 500 | 15px - 17px (`text-base`), line-height: 1.7, high readability |
| **Telemetry & Diagnostics** | `Space Grotesk`, monospace | 500 / 600 | 12px - 14px (`text-xs` to `text-sm`), monospace brackets `[ SYS.ONLINE ]` |

---

## 4. Component Breakdown & Layout Architecture

### 1. Interactive Preloader (Screen 1)
- **Visuals**: Animated SVG monitor with futuristic circuit board traces, glowing orange progress bar fill, and developer avatar.
- **Trigger**: Once buffer fills (~1.2s), loading changes to `[ SYSTEM READY ]` and reveals the prominent **"Enter Portfolio"** cyber button with pulsing glow.
- **Experience**: Clicking smoothly fades out overlay with a cyber wipe transition into the hero section.

### 2. Header & Mobile HUD Navigation
- **Desktop**: Fixed glass navbar (`backdrop-blur-md bg-[#050508]/80 border-b border-white/5`).
  - Left: Holographic Logo (`Siddhartha` with glowing orange `.Bose` dot).
  - Center: Nav anchors (Home, About, Experience, Skills & Tech, Passions, Contact).
  - Right: "Download Resume" glass pill button with icon.
- **Mobile**: Touch-optimized hamburger icon that morphs into a cross, opening a sleek full-height right-aligned drawer with touch swipe gestures (swipe right to dismiss).

### 3. Hero Command Center
- **Atmospheric Background**: Deep cyberpunk canvas with radial glow orbs (Orange and Electric Blue) + subtle circuit traces.
- **Pill Badge**: `Hello.` with glowing pulsing indicator.
- **Headline**: "I'm Siddhartha Bose" with an interactive **Typewriter effect** cycling through:
  - `"Technical Consultant"`
  - `"Frontend Developer"`
  - `"Fintech Solutions Specialist"`
  - `"Oracle OBDX Engineer"`
  - `"Data & BI Practitioner"`
- **Professional Summary**: Modernized, punchy value proposition highlighting 2.5+ years experience designing frontend banking interfaces and enterprise fintech systems.
- **Action CTAs**:
  - `Get in Touch` (Cyber Orange gradient, glowing shadow).
  - `Download Resume` (Secondary frosted glass).
  - `LinkedIn Profile` & `Ask Me Anything` quick trigger buttons.

### 4. Continuous Skills Ticker Marquee
- **Infinite Looping Banner**: Alternating solid and outline pill items with glowing colored icons:
  `[JAVASCRIPT]` • `[ORACLE OBDX]` • `[HTML5 & CSS3]` • `[ORACLE SQL]` • `[PL/SQL]` • `[FINTECH SYSTEMS]` • `[POWER BI]` • `[VS CODE]` • `[ANDROID STUDIO]` • `[WINSCP]`.

### 5. About Me: 3D Holographic Command Deck
- **Left Deck (3 Floating Holographic Cards)**:
  - *Card 1*: Enterprise Fintech Consulting (Profinch Solutions, OBDX Architecture).
  - *Card 2*: Biomedical Engineering Foundation (VIT Vellore degree).
  - *Card 3*: Modern Web & Analytics (Frontend, UI-Toolkit, Power BI).
  - *Interactions*: 3D tilt tracking (`rotateX`/`rotateY` based on cursor position) with HUD corner notches and animated neon rays.
- **Right Panel (Holographic Intelligence Deck)**:
  - Bio container with laser scanning line effect.
  - Interactive **3D Education Timeline**:
    - Milestone 1: *B.Tech Biomedical Engineering* — Vellore Institute of Technology (VIT Vellore) [2017 - 2021]
    - Milestone 2: *Post Graduate Diploma in IT (PGDIT)* — Distance Specialization [Ongoing]
    - Milestone 3: *Higher Secondary (12th Grade)* — Hindi Higher Secondary School [2015 - 2017]
    - Milestone 4: *Secondary (10th Grade)* — Holy Cross School [2015]
    - *3D Flip Cards*: Clicking any timeline card flips it in 3D space (`transform: rotateY(180deg)`) revealing key coursework and takeaways on the back.

### 6. Experience & Project Telemetry Deck
- Professional breakdown of Siddhartha's experience:
  - **Profinch Solutions Pvt. Ltd., Bangalore** (2021 - Present) — Consultant / Frontend Developer.
  - **Mahalasa Medical Technology, Bangalore** (2019) — Biomedical Engineering Intern.
  - **ILS Hospitals, Agartala** (2018) — Medical Technology Intern.
- Interactive stats counters: `2.5+` Years Experience, `5+` Enterprise Projects, `100%` Client Alignment.

### 7. Interactive Diagnostic Skills & Technology Modules
- **Left Profile Hologram**: Avatar photo card with dual glowing badges (`FINTECH / OBDX` and `FRONTEND DEV`) and bio snapshot.
- **Interactive Tech Diagnostic Console**:
  - Module 1: *Frontend Engineering* (HTML5, CSS3, JavaScript, Responsive UI, UI-Toolkit).
  - Module 2: *Oracle Banking & OBDX* (Fintech architecture, FCDB, Enterprise digital workflows).
  - Module 3: *Database & Query Support* (Oracle SQL, PL/SQL, Parameterized queries, DB support).
  - Module 4: *Development & Systems Tools* (VS Code, Android Studio, WinSCP, Git/GitHub).
  - Module 5: *Data Analytics & Business Intelligence* (Power BI, Dashboards, Data insights).
  - Module 6: *Consulting & Soft Skills* (Client demos, International banking stakeholder collaboration).
  - *Interactive features*: SVG circular telemetry progress rings, click-to-expand collapsible terminal diagnostics (`> SYSTEM DIAGNOSTICS: obdx_runtime.sys`), and animated logs.
- **Language Proficiency Cards**:
  - English (Professional / Fluent)
  - Hindi (Fluent)
  - Bengali (Native)
- **Bento Feature Grid**:
  - 4 specialized Bento tiles highlighting core focus areas with icons, status tags (`[ ACTIVE ]`, `[ SPECIALIZATION ]`), and skill tags.

### 8. Sports & Passions: Interactive 3D Interactive Stages
- 4 interactive cards with custom HTML5 Canvas & micro-animations:
  1. **Acoustic & Electric Guitar**: Harmonic strings visualizer, chord dexterity, creative discipline.
  2. **Football**: Tactical pitch radar, reflex speed, teamwork, and spatial strategy.
  3. **Badminton**: High-velocity rallies, swift agility, split-second precision.
  4. **Sketching & Anime / Storytelling**: Visual aesthetics, meticulous attention to detail, imaginative conceptualization.

### 9. Contact Section & Interactive Cyber Form
- **Left Information Column**:
  - Direct Email (`sid.bose115@gmail.com`).
  - Phone Contact (`+91 8974975602`, `+91 9600844112`).
  - Location (`Agartala, West Tripura, India`).
  - LinkedIn Profile link.
  - GitHub Profile link.
  - Ask Anything Form (`https://forms.gle/k8DpYhmSyAQhvrqcA`).
  - Social pill circle links (LinkedIn, GitHub, Instagram, Facebook, Telegram).
- **Right Interactive Form**:
  - Clean, accessible form with fields: Full Name, Email, Subject, Message.
  - Live client-side validation, loading spinner on submit, success notification message, and direct mailto / API fallback.

### 10. Floating Interactive Tools
- **Scroll to Top Button**: Floating circular button with smooth scrolling.
- **Floating Quick Connect / Ask Anything FAB**: Floating glowing cyber badge with tooltip for instant connection.
- **Footer**: Sleek cyber telemetry copyright, credit, and status indicators.

---

## 5. Technical Stack & Architecture

- **Framework**: Next.js 14+ (App Router), React 18, TypeScript.
- **Styling**: Tailwind CSS + Custom CSS Variables for cyber effects, glows, and keyframe animations.
- **Icons**: Lucide React + FontAwesome icons (SVGs embedded natively for zero layout shifts and instant rendering).
- **Data Architecture**: Centralized data configuration (`src/data/portfolioData.ts`) containing all personal information, experience, education, skills, telemetry metrics, and social links.
- **Deployment**: Production-ready for Vercel with zero TypeScript/ESLint warnings, clean build artifacts, and optimized metadata/SEO tags.
