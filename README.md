# Mohamed Makhlouf (Mhdomar) - Tech Superpower Portfolio

Personal portfolio website and interactive cloud security defense console built for the **AWS Student Builder Challenge: Build Your Tech Superpower** (October 2026).

Deployed live via **AWS Amplify Hosting** with global Amazon CloudFront distribution and Amazon S3.

---

## 1. Project Overview & Story

This portfolio reflects my path as a senior Computer Science student at Universiti Teknologi Malaysia (UTM) specializing in Networks and Security, currently undergoing Industrial Training at the Al-Ameen Medical Complex IT Department in Riyadh, Saudi Arabia.

My technical focus centers on Cloud DevSecOps, sub-120ms AI security guardrails, automated drift remediation, and peer education. I view cloud systems through two complementary lenses:
1. **Deterministic DevSecOps Precision:** Shift-left security enforcement (Trivy, Checkov), idempotent self-healing automation (AWS EventBridge, Lambda), and sub-115ms latency budgets for agentic AI.
2. **Japanese Kaizen & Cyber Aesthetics:** Continuous, daily refinement paired with calm, legible visual hierarchy and subtle cyber-defense anime aesthetics (Evangelion, Japanese katana blade craft).

---

## 2. Core Sections Required by Rubric

1. **About Me:**
   - Dual-region journey: Egypt to UTM Malaysia to Al-Ameen Medical Complex IT in Riyadh.
   - Ground-level healthcare IT infrastructure management, endpoint baseline protection, and zero-downtime clinic operations.
   - Competitive trials: 3rd place finalist at ASEAN Cyber Race 2025 CTF Finals (15 teams across 8 Southeast Asian countries).
   - Core philosophy: deterministic error handling, scale-to-zero serverless patterns, and UTM CS peer tutoring.

2. **Skills & Tech Superpowers:**
   - **Autonomous Cloud Security & Remediation:** AWS EventBridge, Lambda (Python Boto3), IAM least-privilege, Terraform, CloudTrail audit trails.
   - **AI Security & Agentic Guardrails:** Sub-115ms p99 latency defense, regex trie fast path, 2B quantized SLM verifiers, OWASP LLM top 10 mitigation.
   - **Shift-Left DevSecOps & Gated CI/CD:** GitHub Actions exit code 1 gates, Trivy container CVE blockers, Checkov static IaC policies, Docker minimal hardening.
   - **Systems Engineering & Linux Workstation:** Tuned CachyOS Linux, kernel 6.13+ flags, Niri Wayland scrollable tiling compositor, POSIX automation, dual-boot NTFS/Ext4 architecture.

3. **Projects & Implementations:**
   - **Aegis-2B:** Hybrid AI security guardrail engine intercepting prompt injection in under 115ms p99 latency with passing automated test suites.
   - **A2 Remediation Engine:** Autonomous AWS compliance and drift remediation engine running on AWS Lambda and EventBridge with 325 unit tests and a read-only MCP audit server.
   - **ASEAN Cyber Race 2025 CTF:** 3rd place finals (cloud misconfigurations, packet analysis, binary exploitation).
   - **MindCraft:** Three-tier AWS infrastructure provisioned with Terraform (47 resources) and gated GitHub Actions Trivy scanning.
   - **SECRH Healthcare IT:** Diagnostic equipment network segmentation and endpoint hardening in Riyadh.
   - **YouTube ("Omar Documents") & Tutoring:** Open bilingual video walkthroughs and university mentoring notes.

---

## 3. The Creative Feature: DevSecOps Cyber Command Console & Katana Blade

Per the hackathon guidelines, the portfolio includes an interactive, working creative feature with a visible hint:
- **Visible Hint:** Marked with a glowing `[ Security Console ]` badge in the navigation bar and hero section with clear "Hint!" telemetry.
- **Cyber Katana Screen Slice:** An interactive opening slash animation that slices the cyber defense perimeter open with sound and particle sparks, also replayable via the "Katana Slice ⚔️" button.
- **The Security Console:** Opens an interactive 4-module command center:
  - **Module 1 (Interactive CLI Terminal):** A functional terminal prompt (`mhdomar@aegis-aws:~$`) where visitors can execute `scan` (Trivy + Checkov shift-left gate), `remediate` (A2 EventBridge auto-fix), `guardrail` (Aegis-2B ~115ms test), `ctf` (ASEAN Cyber Race writeup), and `neofetch` (CachyOS Linux + AWS specs).
  - **Module 2 (Cloud Remediation Visualizer):** An animated SVG/CSS cloud architecture diagram showing real-time drift injection (public S3 bucket or open SSH port 22), EventBridge rule evaluation in < 240ms, and automated Lambda remediation restoring full compliance.
  - **Module 3 (Aegis-2B AI Guardrail Benchmark):** Live testbed evaluating prompt injection (OWASP LLM01), indirect data injection, and RAG data poisoning (OWASP LLM04) with real-time latency breakdowns (Fast Trie: ~3.8ms, SLM 2B: ~104ms).
  - **Module 4 (Cloud Defense Peer Tutoring):** Interactive multiple-choice scenarios covering AWS IAM evaluation trees (explicit deny vs SCP), CI/CD exit-code thresholds, and Security Group referencing.

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
├── amplify.yml                    # AWS Amplify CI/CD configuration
├── index.html                     # HTML entry with font preloads
├── package.json                   # React 19, Vite, Tailwind, Lucide, Canvas-Confetti
├── postcss.config.js              # PostCSS configuration
├── tailwind.config.js             # Custom charcoal, sakura, and engine color tokens
├── vite.config.js                 # Vite build setup with dist output
├── src/
│   ├── main.jsx                   # React DOM root mount
│   ├── App.jsx                    # Application layout & modal state management
│   ├── index.css                  # Custom scrollbars, scanlines, katana animation
│   └── components/
│       ├── Navbar.jsx             # Sticky header with visible hint button & katana trigger
│       ├── Hero.jsx               # Value proposition, credentials, telemetry badges
│       ├── About.jsx              # Journey, systems craft, sustainability, tutoring
│       ├── Superpowers.jsx        # Core superpowers, tools, and verified metrics
│       ├── Projects.jsx           # Featured projects with stats and AWS tags
│       ├── LinuxBootKatanaIntro.jsx # Realistic Linux boot + typing + katana slice intro
│       ├── DevSecOpsConsoleModal.jsx # 4-module interactive security defense console
│       ├── SakuraCanvas.jsx       # Lightweight falling sakura petal canvas
│       └── Footer.jsx             # Social links, email, and AWS credit
└── LICENSE                        # MIT License
```

---

## 7. License

Distributed under the MIT License. See [LICENSE](LICENSE) for details.
