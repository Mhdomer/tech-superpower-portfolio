# Mohamed Makhlouf (Omar) - Tech Superpower Portfolio

Personal portfolio website and interactive systems engineering console built for the **AWS Student Builder Challenge: Build Your Tech Superpower** (October 2026).

Deployed live via **AWS Amplify Hosting** with global CloudFront distribution.

---

## 1. Project Overview & Story

This portfolio reflects my path as a senior Computer Science student at Universiti Teknologi Malaysia (UTM) currently undergoing Industrial Training at the Al-Ameen Medical Complex IT Department in Riyadh, Saudi Arabia.

My technical focus centers on Cloud DevSecOps, sub-120ms AI security guardrails, green cloud computing (FinOps), and peer education. I view software through two complementary lenses:
1. **Mechanical Engine Precision:** Like a high-revving rotary or quad-cam internal combustion engine, distributed cloud pipelines require exact tolerances, deterministic latency budgets, and zero thermal/financial waste.
2. **Japanese Kaizen & Sakura Aesthetics:** Continuous, daily refinement paired with calm, legible visual hierarchy that makes high-density security telemetry easy to read.

---

## 2. Core Sections Required by Rubric

1. **About Me:**
   - Dual-region journey: Egypt to UTM Malaysia to Al-Ameen Medical Complex IT in Riyadh.
   - Ground-level healthcare IT infrastructure management, endpoint baseline protection, and zero-downtime clinic operations.
   - Core philosophy: engine tolerances, scale-to-zero sustainability to fight poverty and reduce compute waste, and UTM CS peer mentoring.

2. **Skills & Tech Superpowers:**
   - **Cloud DevSecOps & Resilient AWS Architecture:** AWS Amplify, Lambda, IAM least-privilege, Terraform, GitHub Actions, Docker.
   - **AI Security & Agentic Guardrails:** Sub-115ms p99 latency defense, regex trie fast path, 2B SLM verifiers, OWASP LLM top 10 mitigation.
   - **Green Cloud & FinOps:** Scale-to-zero serverless patterns, carbon-aware compute scheduling, idle cycle elimination.
   - **Systems Engineering & Linux:** Tuned CachyOS Linux, kernel 6.13+ flags, Wayland workflows, POSIX automation, dual-boot NTFS/Ext4 architecture.

3. **Projects & Implementations:**
   - **Aegis-2B:** Hybrid AI security guardrail engine intercepting prompt injection in under 115ms p99 latency with passing automated test suites.
   - **A2 Remediation Engine:** Autonomous AWS drift remediation engine running on AWS Lambda and EventBridge.
   - **MindCraft:** Gamified educational platform built for UTM computer science students.
   - **SECRH Healthcare IT:** Diagnostic equipment network segmentation and endpoint hardening in Riyadh.
   - **YouTube ("Omar Documents") & Tutoring Vault:** Open bilingual video walkthroughs and curriculum notes.

---

## 3. The Creative Feature: The V4 Superpower Engine

Per the hackathon guidelines, the portfolio includes an interactive, working creative feature with a visible hint:
- **Visible Hint:** Marked with a glowing `[ Superpower Engine ]` badge in the navigation bar and hero section with clear "Hint!" telemetry.
- **The Engine Console:** Opens an interactive 4-cylinder dashboard complete with a live tachometer, thermal readings, and four interactive stations:
  - **Cylinder 1 (AI Guardrail Bench):** Live test bench where reviewers can test safe queries, prompt injection attacks, or data leaks against the simulated Aegis-2B regex trie + 2B SLM pipeline with real-time latency readout.
  - **Cylinder 2 (Green Cloud & Poverty Relief):** Interactive slider calculating kWh conserved, monthly cloud dollars saved, and equivalent community meals or student kits funded through scale-to-zero serverless architecture.
  - **Cylinder 3 (UTM Peer Tutor Quiz):** Interactive questions testing AWS IAM policy evaluation logic and low-latency SLM architectural choices with tutor notes from my sessions at UTM.
  - **Cylinder 4 (Kaizen Rev & Sakura Fortunes):** An interactive mechanical rev button that revs the virtual engine to 8,800 RPM, triggers a petal burst, and dispenses engineering lessons from my build journals.

---

## 4. Architecture & AWS Services Used

```
[ Visitor Browser ]
       │
       ▼  (HTTPS / TLS 1.3)
[ AWS Amplify Hosting ]
       │
       ├─► [ Amazon CloudFront CDN ] (Global edge caching)
       ├─► [ Amazon S3 ] (Encrypted static asset storage)
       └─► [ CI/CD Build Pipeline ] (Automated build on git push)
```

- **AWS Amplify Hosting:** Manages git-based continuous deployment, asset compression, and automated preview builds.
- **Amazon CloudFront:** Distributes assets to global edge locations for sub-50ms Time to First Byte (TTFB).
- **Amazon S3:** Serves production bundle chunks with immutable cache headers.
- **Amplify Build Specification (`amplify.yml`):** Runs `npm ci` and `npm run build` targeting Node 20+.

---

## 5. Local Development

Prerequisites: Node.js 18+ (tested on Node v20/v22/v26) and npm.

```bash
# 1. Clone repository
git clone https://github.com/Mhdomer/tech-superpower-portfolio.git
cd tech-superpower-portfolio

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev

# 4. Build production bundle
npm run build

# 5. Preview production build locally
npm run preview
```

---

## 6. Project Structure

```
tech-superpower-portfolio/
├── amplify.yml                # AWS Amplify CI/CD configuration
├── index.html                 # HTML entry with font preloads
├── package.json               # React 19, Vite, Tailwind, Lucide, Canvas-Confetti
├── postcss.config.js          # PostCSS configuration
├── tailwind.config.js         # Custom charcoal, sakura, and engine color tokens
├── vite.config.js             # Vite build setup with dist output
├── src/
│   ├── main.jsx               # React DOM root mount
│   ├── App.jsx                # Application layout & modal state management
│   ├── index.css              # Custom scrollbars, glassmorphism utilities
│   └── components/
│       ├── Navbar.jsx         # Sticky header with visible hint button & sakura toggle
│       ├── Hero.jsx           # Value proposition, credentials, telemetry badges
│       ├── About.jsx          # Journey, engine philosophy, sustainability, tutoring
│       ├── Superpowers.jsx    # Core superpowers, tools, and verified metrics
│       ├── Projects.jsx       # Featured projects with stats and AWS tags
│       ├── CreativeEngineModal.jsx  # The 4-cylinder interactive engine console
│       ├── SakuraCanvas.jsx   # Lightweight falling sakura petal canvas
│       └── Footer.jsx         # Social links, email, and AWS credit
└── LICENSE                    # MIT License
```

---

## 7. License

Distributed under the MIT License. See [LICENSE](LICENSE) for details.
