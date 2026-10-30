# Autonomous Cloud DevSecOps & Low-Latency AI Defense

**Candidate:** Mohamed Makhlouf (Omar / Mhdomar)  
**Role:** Cloud DevSecOps & AI Security Engineer  
**Academic Standing:** Senior Computer Science (Networks & Security), Universiti Teknologi Malaysia (UTM) | Dean's List (3.43 CGPA)  
**Location & Placement:** Clinical IT Department, Al-Ameen Medical Complex, Riyadh, Saudi Arabia  
**Live Portfolio:** https://main.dxk14j7sxjg5l.amplifyapp.com  
**Source Code Repository:** https://github.com/Mhdomer/tech-superpower-portfolio  

---

## From Cairo to UTM to the Hospital Trenches in Riyadh

My journey into computing started with breaking and fixing Linux installations on older laptops, experimenting with kernel configurations, and wondering why enterprise software felt so fragile.

That curiosity took me from Egypt to Malaysia, where I am currently in my final year studying Computer Science specializing in Networks and Security at Universiti Teknologi Malaysia (UTM). Along the way, my team won the 3rd Place Bronze Award at the ASEAN Cyber Race 2025 Finals, digging through Wireshark packet captures and reversing broken IAM role trust boundaries.

Right now, I am living in Riyadh, working in the IT department at Al-Ameen Medical Complex for my industrial training. Hospital IT is a baptism by fire. When an outpatient clinic's diagnostic imaging workstation cannot reach the PACS server, doctors cannot view MRI scans, and patient lines back up into the hallway. You quickly learn that security cannot just be a policy document on a shelf. It has to be automated, deterministic, and fast enough that nobody tries to bypass it.

This portfolio brings those worlds together: shift-left DevSecOps automation, generative AI defense that runs in milliseconds, and a couple of authentic personal surprises.

[Open the live portfolio](https://main.dxk14j7sxjg5l.amplifyapp.com)  
[View the source repository](https://github.com/Mhdomer/tech-superpower-portfolio)  

---

## Try the personal fun fact in under a minute

On weekend mornings outside Riyadh, when the temperature sits around 40°C, I head out to the red desert dunes of Thumamah with a sandboard. Desert sand is relentless: it gets into cooling fans, camera lenses, and keyboards. Surviving out there taught me to respect hostile environments, whether they are physical dunes or production cloud clusters under attack.

Combined with a lifelong love for One Piece Alabasta, I built the **Alabasta Sandboard Easter Egg** right into the site.

How to try it:
1. Scroll down to Section 02, or click the skateboard button in the hero section.
2. Viewport introduces Luffy dried out in the desert heat after crossing the dunes.
3. Click **Give Water & Skate** to launch the mini-game.
4. An interactive runner appears over an infinite scrolling sand dune floor. Use the Spacebar or tap the screen to jump across the slip-faces with realistic jump physics (`velocityY = 13`, `gravity = 0.75`).
5. Catch three water barrels to fill your reserves to 100%, neutralizing Crocodile's Logia sandstorm.
6. Hit **Gomu Gomu no Storm!** to trigger a visceral screen-shake clash and bring rain back to Alabasta.

The game runs entirely in the browser using CSS animations, sprite physics, and requestAnimationFrame. It requires zero plugins and resets cleanly with a Replay button.

*(Upload media/04_alabasta_sandboard_game.png here)*

---

## The Security Lab: an interactive cloud defense workbench

For the hackathon's creative feature requirement, I wanted to build something that reflects what I actually do every day rather than pasting a generic widget. I built the **Interactive Cloud Security Lab**.

### How to find it (The Visible Hint)
In the top sticky navigation bar and hero section, you will see a prominent beacon button labeled **`[ Security Lab (hint!) ]`** with a pulsing indicator. It is immediately visible from the moment the page loads.

Clicking it opens an accessible modal overlay with keyboard `ESC` dismissal. It never interrupts page scrolling, and closing it leaves you exactly where you were reading.

Inside, visitors can explore four interactive defense pillars:
1. **CloudSec Architect (Blueprint Defense Game):** Three hands-on architectural missions where you place defense blocks into topology slots. You will secure an OIDC trust boundary against wildcard credential forgery, deploy a pre-tokenization regex trie to shield Amazon Bedrock from prompt injection, and contain medical imaging DICOM egress without taking down the hospital's network.
2. **Live IAM Policy AST Analyzer:** A real-time client-side code editor. You can type or paste any AWS IAM JSON policy, and our AST engine evaluates it against CIS AWS Foundations Benchmark rules on every keystroke. Clicking "Auto-Remediate to Least-Privilege" algorithmically rewrites wildcard statements into hardened, scoped code.
3. **Aegis-2B AI Guardrail & Shannon Entropy Engine:** Live calculation of Shannon Entropy ($H$) and character dispersion on your inputs, benchmarked against OWASP LLM01 attacks with microsecond browser execution timers.
4. **Green Cloud FinOps Calculator:** Real-time modeling of financial savings and carbon emissions avoided when migrating workloads from legacy x86 EC2 instances to AWS Graviton3 processors and right-sizing Lambda memory.

*(Upload media/02_security_lab_modal.png here)*

*(Upload media/03_iam_ast_linter.png here)*

---

## A portfolio you can navigate without playing

While the interactive features are there for anyone who wants to test them, the core portfolio stands completely on its own. Recruiters and judges can read my full background without touching a game:

* **About Me & My Journey:** Details on my transition from Cairo to UTM, our podium finish at the ASEAN Cyber Race, outpatient clinic realities at Al-Ameen, and an embedded 1-page vector ATS resume viewer with clickable links.
* **Skills & Tech Superpowers:** Practical stacks across Cloud DevSecOps (EventBridge, Lambda Python Boto3, IAM, Terraform), AI Security (Aegis-2B, Amazon Bedrock), CI/CD gating (Trivy, Checkov, Docker), and Linux systems.
* **Projects & Achievements:** Case studies for Aegis-2B (our sub-115ms AI guardrail), the A2 Compliance Engine (event-driven S3 auto-remediation), MindCraft (AWS 3-tier cloud migration), and SECRH (HIPAA-aligned clinic data management).
* **Companion CachyOS Terminal Drawer:** Visitors who prefer command lines can press the tilde key (`~`) or tap the terminal pill at the bottom of the screen to inspect system info, run `benchmark aegis`, or triage incident tickets via CLI.

*(Upload media/06_about_and_achievements.png here)*

---

## How I built and hosted it on AWS

The application is built with React 19, Vite, Tailwind CSS, and custom Lucide icons. Everything compiles down to a lightweight, zero-dependency static production bundle.

### The Deployment Architecture
```
[ Visitor Browser ]
       │
       ▼  (HTTPS / TLS 1.3 via Route 53)
[ AWS Amplify Hosting ] (us-east-1, App ID: dxk14j7sxjg5l)
       │
       ├─► [ Amazon CloudFront CDN ] (Global Edge Points of Presence)
       ├─► [ Amazon S3 Static Origin ] (OAC Restricted Bucket Storage)
       ├─► [ CI/CD Build Pipeline ] (Automated GitHub Webhook via amplify.yml)
       │
       ▼  (Demonstrated Enterprise Architectures)
[ AWS EventBridge & Lambda ] ──► [ Amazon Bedrock Runtime ]
```

* **AWS Amplify Hosting:** Serves the static build from the `us-east-1` region (App ID: `dxk14j7sxjg5l`). Every `git push` to `main` automatically triggers our `amplify.yml` pipeline (`npm ci` -> `npm run build`), producing atomic, zero-downtime releases.
* **Amazon CloudFront:** Distributes assets globally with sub-35ms Time to First Byte. Our edge telemetry indicates hits being served directly out of the Jeddah edge POP (`JED50-P5`) in Saudi Arabia.
* **Amazon S3:** Origin storage locked down with Origin Access Control (OAC), ensuring no assets are directly exposed to the open internet.
* **Custom SPA Routing:** Configured custom rewrite rules in Amplify to redirect all clean sub-paths back to `/index.html` with a 200 status code, preventing 404 errors on browser refresh.

*(Upload media/amplify_output.png here)*

*(Upload media/05_aws_challenge_architecture.png here)*

---

## What was harder than I expected

### 1. Breaking through the 800ms AI Guardrail latency wall
Enterprise LLM guardrails often introduce 800ms to 1,500ms of overhead. In hospital or customer-facing applications, users immediately notice that lag and try to disable the security layer.

In Aegis-2B, I engineered a dual-tier approach: a pre-execution regex trie intercepts known prompt injection signatures in sub-5ms, while ambiguous inputs route through a quantized 2B parameter SLM verifier on serverless containers. That brought our p99 latency down to ~115ms before queries ever touch Amazon Bedrock.

### 2. Making a rich interactive experience accessible on mobile
Designing a 4-cylinder security lab and a sandboarding runner that felt natural on a 1440px desktop was straightforward. Making it work on a 360px mobile screen without breaking page scroll or clipping text was a major headache.

I had to refactor the entire runner viewport to use relative em scaling, implement touch event listeners alongside keyboard bindings, and build an escape mechanism so mobile users never feel trapped inside a modal.

*(Upload media/08_mobile_responsive_view.png here)*

### 3. Deploying green versus loading clean
On my first Amplify deployment test, the pipeline reported a green status, but direct URL refreshes on sub-routes threw 404 errors. I learned that a successful CI build is only half the battle. You have to configure proper single-page application rewrite rules in the Amplify console so CloudFront knows to route navigation history back to `index.html`.

---

## Verification and lessons learned

To ensure the portfolio loads reliably throughout the judging period:
* **AWS Build Pipeline:** The automated Amplify pipeline completed `PROVISION`, `BUILD`, `DEPLOY`, and `VERIFY` stages successfully in `us-east-1`.
* **Browser Verification:** Tested against Chromium, Firefox, WebKit, and mobile viewports down to 360px using Playwright.
* **Terminal Verification:** Executed live CLI queries confirming IAM authentication, Amplify app status, and clean HTTP/2 200 responses from CloudFront edge locations.

The biggest lesson from this build was that technical superpowers mean nothing if you cannot communicate them clearly. You can write the cleanest Terraform modules or the fastest regex tries, but if visitors cannot discover how they work or get frustrated by the interface, the engineering is lost. Building this portfolio taught me to balance deep technical mechanics with intuitive, human design.

I developed this project as an individual builder, using AI coding agents as a sounding board and pair programmer while directing the architecture, writing the core components, and testing the cloud infrastructure myself. The story, the clinical background, and the sandboard reflect my real life in the trenches.

[Repository](https://github.com/Mhdomer/tech-superpower-portfolio)  
[Live Demo](https://main.dxk14j7sxjg5l.amplifyapp.com)  
