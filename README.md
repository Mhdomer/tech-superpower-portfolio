# Mohamed Makhlouf (Mhdomar) - Tech Superpower Portfolio

Personal portfolio website, interactive cloud security workbench, and CachyOS terminal CLI built for the **AWS Student Builder Challenge: Build Your Tech Superpower** (October 27 to November 6, 2026).

Deployed live on **AWS Amplify Hosting** with global Amazon CloudFront CDN edge distribution and Amazon S3.

* **Live Deployment:** AWS Amplify Hosting (Continuous Deployment from GitHub)
* **GitHub Repository:** https://github.com/Mhdomer/tech-superpower-portfolio
* **Candidate:** Mohamed Makhlouf (Omar / Mhdomar)
* **Role:** Cloud DevSecOps & AI Security Engineer
* **University:** Senior Computer Science (Networks & Security), Universiti Teknologi Malaysia (UTM) | Dean's List (3.43 CGPA)
* **Industrial Placement:** Clinical IT Operations, Al-Ameen Medical Complex, Riyadh

---

## 1. Project Overview & Candidate Journey

This portfolio reflects my work at the intersection of Cloud DevSecOps, AI Security, and Healthcare IT infrastructure. As a final-year CS student at Universiti Teknologi Malaysia (UTM) currently running outpatient IT operations at Al-Ameen Medical Complex in Riyadh, I build systems where security is deterministic and latency is measured in single-digit milliseconds.

My engineering philosophy centers on three pillars:
1. **Deterministic DevSecOps:** Moving security from post-hoc audits to automated gates. Every Docker container must pass Trivy scans at exit code 1, and every cloud configuration drift must trigger autonomous remediation in under 2.4 seconds via AWS EventBridge and Lambda.
2. **Sub-115ms AI Security:** Protecting large language models against OWASP LLM01 prompt injection without slowing down applications. Aegis-2B combines a fast regex signature trie (<0.8ms) with quantized 2B parameter models before invocations reach Amazon Bedrock.
3. **High-Craft Workstation Engineering:** Tuning CachyOS Linux with the BORE scheduler, automating workflows via POSIX shell, and mentoring junior engineering students in operating system fundamentals and competitive CTF problem solving.

---

## 2. Core Sections Required by Hackathon Rubric (20% Completeness Gate)

The portfolio satisfies all mandatory sections required under the hackathon rubric:

### A. About Me / My Story
* **Dual-Region Engineering Path:** Journey from Egypt to Universiti Teknologi Malaysia (UTM) in Johor Bahru, and onto clinical outpatient IT operations at Al-Ameen Medical Complex in Riyadh.
* **Trench Realities in Healthcare IT:** Segmenting diagnostic PACS medical imaging networks across isolated VLANs, eliminating patient database exposure, and enforcing strict PostgreSQL Row-Level Security (RLS).
* **Competitive CTF Podium:** 3rd Place Bronze Award at the international ASEAN Cyber Race 2025 Finals (Cisco Networking Academy), solving challenges in cloud IAM role chaining, PCAP packet analysis in Wireshark, and binary forensics.
* **Peer Mentorship & Knowledge Sharing:** Weekly peer tutoring sessions for junior CS students at UTM in C++, data structures, and POSIX fundamentals, alongside bilingual Linux walkthroughs on YouTube ("Omar Documents").

### B. Skills & Tech Superpowers
* **Autonomous Cloud Security:** AWS EventBridge, AWS Lambda (Python 3.12 Boto3), IAM least-privilege policies, Service Control Policies (SCPs), Terraform immutable infrastructure.
* **AI Security & Guardrails:** Sub-115ms p99 latency defense, regex signature trie fast path, quantized 2B Hugging Face SLM verifiers, OWASP LLM Top 10 mitigation on Amazon Bedrock.
* **Shift-Left CI/CD & Gating:** GitHub Actions exit code 1 failure gates, Trivy container vulnerability scanning, Checkov static IaC policies, Docker minimal Alpine baselines.
* **Systems & Workstation Craft:** Tuned CachyOS Linux (Kernel 6.13+ with BORE scheduler), Niri Wayland scrollable tiling compositor, POSIX automation (Bash, Sed, Awk), Wireshark packet dissection.

### C. Projects & Implementations
* **Aegis-2B (AI Guardrail Gateway):** Dual-tier security proxy intercepting prompt injections in under 115ms p99 latency with zero token leakage. [GitHub](https://github.com/Mhdomer/aegis-2b)
* **A2 Cloud Remediation Engine:** Event-driven serverless daemon detecting and auto-remediating public S3 buckets, open security groups, and unencrypted EBS volumes in under 2.4s MTTR. [GitHub](https://github.com/Mhdomer/aws-compliance-remediation-engine)
* **MindCraft AWS Infrastructure Migration:** Full re-architecture of coursework learning application into a self-managed 3-tier AWS environment across VPC, ALB, EC2, MongoDB, and Trivy CI/CD gating. [GitHub](https://github.com/Mhdomer/mindcraft-aws-migration)
* **SECRH Patient Data Management System (FYP):** Final Year Project replacing single-server clinic workflows with an AWS multi-AZ architecture featuring HIPAA-aligned PostgreSQL Row-Level Security. [GitHub](https://github.com/Mhdomer)

---

## 3. The Creative Feature: Interactive DevSecOps Command Center (30% Rubric Gate)

To provide an engaging, memorable experience for AWS judges and recruiters while strictly honoring the "one creative feature" rubric specification, the portfolio implements the **Interactive DevSecOps Command Center**.

This single unified feature offers visitors two complementary operational modes: a visual web dashboard and an authentic incident triage command-line interface.

```
                  ┌──────────────────────────────────────────────┐
                  │    INTERACTIVE DEVSECOPS COMMAND CENTER      │
                  │        (The Single Creative Feature)         │
                  └──────────────────────┬───────────────────────┘
                                         │
                 ┌───────────────────────┴───────────────────────┐
                 ▼                                               ▼
   ┌───────────────────────────┐                   ┌───────────────────────────┐
   │     1. VISUAL MODE        │                   │     2. CLI / TRIAGE MODE  │
   │  (Interactive GUI Sandbox)│ ◄───────────────► │  (CachyOS Linux Terminal) │
   │  * 01: Cloud Breach CTF   │  Toggle with [~]  │  * triage & flowlogs      │
   │  * 02: Live IAM AST Linter│  or mode buttons  │  * remediate (Boto3 auto) │
   │  * 03: AI Entropy Spectrum│                   │  * entropy <string>       │
   │  * 04: Crisis Simulator   │                   │  * benchmark aegis        │
   └───────────────────────────┘                   └───────────────────────────┘
```

### A. The Single Primary Visible Hint
* **Header Beacon Button:** The primary visible hint is the pulsing **`[ Command Center (hint!) ]`** button positioned prominently in the sticky top navigation bar.
* **Secondary Assist Hints:** An inline action button in the Hero section (`Command Center (Hint!)`), a quick CLI shortcut badge (`CLI Mode: cat skills.txt (~)`), and a persistent bottom drawer pill (`terminal ~`).
* **Non-Disruptive UX:** Both modes operate in self-contained modals and slide-up drawers with full keyboard accessibility (`ESC`), backdrop dismissal, and dedicated close buttons, ensuring zero layout shift or interference with portfolio navigation.

### B. Mode 1: Visual Mode (Interactive Cloud Security Defense Sandbox)
A browser-based security workstation featuring four live interactive modules:
1. **Operation Desert Phantom (Cloud Breach Incident Triage CTF Arena):** A playable, mind-bending incident investigation puzzle where judges act as Incident Commander. Inspect raw CloudTrail audit JSON and VPC Flow Logs 5-tuple records, track rogue exfiltration to destination IP `198.51.100.42:8443` with dynamic byte calculation (50.03 MB), deploy surgical zero-downtime A2 remediation, watch the animated SVG network packet cutoff laser barrier, and generate an authentic SHA-256 cryptographic resolution flag unlocking the candidate dossier.
2. **Real-Time AWS IAM Policy AST Security Linter:** An in-browser parser that evaluates JSON IAM policies on every keystroke against CIS AWS Foundations Benchmark rules (CIS 1.16 wildcard admin, CIS 2.1.1 anonymous public access, CIS 1.20 privilege escalation APIs, and NIST SP 800-53 in-transit TLS). Features an "Auto-Remediate to Least-Privilege" button that algorithmically rewrites insecure statements into hardened, scoped policies with celebratory feedback.
3. **Aegis-2B AI Guardrail & Continuous Information Theory Spectrum:** Live client-side Shannon Entropy calculation ($H = -\sum p_i \log_2 p_i$) and Compression Density ($CR$) computed continuously on every keystroke. Features an animated SVG Character Frequency Histogram displaying the Zipfian distribution of natural language versus the uniform dispersion of obfuscated Base64, alongside sub-115ms microsecond regex trie latency benchmarks.
4. **Cloud Incident Crisis Decision Simulator:** Interactive incident response scenarios modeled on real engineering events (public patient record bucket leaks, compromised CI/CD access keys spawning miners, and clinical LLM prompt injection). Evaluates MTTR, financial cost impact, and compliance scores.

### C. Mode 2: CLI / Triage Mode (CachyOS Linux Terminal Drawer)
An authentic Linux command-line drawer providing terminal interaction for judges who prefer command-line exploration:
* `triage`: Displays the active P1 cloud breach alert (Case #2026-MED-402) with root cause and exfiltration metrics.
* `flowlogs`: Dumps the raw VPC Flow Logs 5-tuple table with calculated exfiltration byte summaries.
* `cloudtrail`: Dumps correlated CloudTrail security audit events.
* `remediate` / `solve`: Deploys the surgical A2 containment rule and prints the verified SHA-256 flag.
* `entropy <string>`: Calculates real-time mathematical Shannon Entropy and classification on any input text.
* `cat skills.txt`: Formatted ASCII breakdown of cloud DevSecOps and AI security superpowers.
* `sudo hire-me`: Authenticates visitor session and unlocks candidate dossier, credentials, and contact points.
* `benchmark aegis`: Executes real pytest benchmark test suite simulation confirming sub-115ms p99 latency SLA.
* `sysinfo`: Displays CachyOS kernel specs, BORE scheduler details, and UTM academic profile.
* `cat resume`: Summarizes engineering experience and opens the interactive ATS vector PDF viewer.
* `lab`: Seamlessly switches back to Visual Mode at any point.

---

## 4. Working AWS Implementation & Services Architecture (25% Rubric Gate)

To maintain absolute engineering integrity and transparency, the AWS services used in this project are categorized into **Actual Live Deployed Infrastructure** and **Client-Side Architectural Simulators**:

```
[ Visitor Browser ]
       │
       ▼  (HTTPS / TLS 1.3 via Route 53)
[ AWS Amplify Hosting ]
       │
       ├─► [ Amazon CloudFront CDN ] (Global Anycast Edge PoPs)
       ├─► [ Amazon S3 Static Origin ] (OAC Restriced Asset Storage)
       ├─► [ Edge Telemetry Indicator ] (Client-side simulated CF HIT)
       ├─► [ CI/CD Build Pipeline ] (Automated git push via amplify.yml)
       │
       ▼  (Demonstrated Project Architectures & Client-Side Simulators)
[ AWS EventBridge & Lambda ] ──► [ Amazon Bedrock Runtime ]
```

### A. Actual Production AWS Services (Live in AWS Console)

These services are actively deployed, provisioned, and running in AWS:

1. **AWS Amplify Hosting:**
   * Directly connected to the public GitHub repository (`Mhdomer/tech-superpower-portfolio`).
   * Executes CI/CD builds automatically upon every `git push` to `main` using the root `amplify.yml` build specification.
   * Serves static distribution bundles (`dist/`) with zero continuous server runtime dependencies.
2. **Amazon CloudFront:**
   * Global Content Delivery Network (CDN) terminating SSL/TLS 1.3 and HTTP/3 across 600+ edge Points of Presence (PoPs).
   * Accelerates Time to First Byte (TTFB) to under 35ms globally with edge-cached immutable assets (`/assets/*-[hash].js`).
3. **Amazon S3:**
   * Acts as the static website origin storage bucket, locked down via Origin Access Control (OAC) to prevent direct public access.
   * Stores pre-rendered SPA chunks, high-resolution WebP project screenshots, and the ATS vector PDF resume.

### B. Client-Side Architectural Simulators (Demonstrated Enterprise Patterns)

To demonstrate advanced enterprise AWS DevSecOps patterns without generating unnecessary continuous cloud runtime billing on live hospital accounts, the following components are engineered as client-side interactive simulators in React/JavaScript:

* **Real-Time IAM Policy AST Linter:** Runs entirely inside the client browser, parsing JSON AST trees and calculating CIS benchmark compliance scores in memory.
* **Aegis-2B Bedrock Threat Injector:** Executes regex signature trie triage and client-side Shannon Entropy calculations in JavaScript, simulating the exact sub-0.8ms logic executed by the Python 3.12 Boto3 Lambda handler in the Aegis-2B repository.
* **A2 Cloud Remediation Simulator:** Simulates EventBridge rule triggers and Lambda auto-remediation MTTR metrics based on automated pytest runs from the A2 engine repository.
* **Edge Telemetry Visitor Counter:** Client-side persisted counter with simulated CloudFront cache hit indicators demonstrating serverless atomic counter architecture.

---

## 5. Challenges & Key Learnings (Crucial Engineering Insights)

During the development, cloud architecture design, and deployment of this project, I resolved three significant technical hurdles:

### Challenge 1: Single-Page Application (SPA) Deep Routing & CloudFront Cache Invalidation on AWS Amplify
* **The Problem:** When deploying client-side React single-page applications to AWS Amplify Hosting, direct navigation or page refresh on sub-paths resulted in Amazon CloudFront returning `404 AccessDenied` XML errors. This happens because CloudFront forwards the request path directly to the Amazon S3 origin, where no corresponding directory or HTML file exists.
* **The Root Cause:** S3 bucket static website hosting requires URL rewrite rules to point non-file asset requests back to `/index.html` with a 200 status code, allowing the client-side router to handle location state.
* **The Engineering Fix:** Configured custom rewrite rules in the AWS Amplify management console (`App settings > Rewrites and redirects`):
  ```
  Source: </^[^.]+$|\.(?!(css|gif|ico|jpg|js|png|txt|svg|woff|woff2|ttf|map|json|pdf)$)([^.]+$)/>
  Target: /index.html
  Status: 200 (Rewrite)
  ```
  Additionally, established strict cache headers in `amplify.yml`: `index.html` is served with `Cache-Control: no-cache, no-store, must-revalidate` so deployments take effect immediately, while immutable hashed bundles (`/assets/*-[hash].js`) receive `max-age=31536000, immutable` for maximum edge caching efficiency.

### Challenge 2: Eliminating Foundation Model Overhead to Meet a Sub-115ms p99 AI Guardrail SLA
* **The Problem:** In building the Aegis-2B AI security defense framework, relying on a secondary large language model (e.g., calling Claude 3.5 Sonnet on Amazon Bedrock) to inspect incoming prompts for injection attacks added 1,200ms to 2,400ms of round-trip latency. In high-throughput hospital workflows and interactive customer applications, adding 2 seconds of latency to every interaction causes severe user drop-off.
* **The Root Cause:** LLM tokenization, transformer forward pass inference, and network round-trips to foundation model endpoints inherently exceed interactive latency budgets.
* **The Engineering Fix:** Implemented a two-tier hybrid architecture. Tier 1 executes in-memory at the AWS Lambda edge using a pre-compiled regex signature trie. This deterministic fast path inspects incoming prompts for OWASP LLM01 override patterns and structural jailbreaks in under 0.8ms. Only ambiguous queries without signature hits are routed to a quantized 2B parameter Small Language Model (SLM) verifier. This reduced p99 latency to 108.4ms in automated pytest benchmarks while reducing token costs to zero for blocked threats.

### Challenge 3: Event Bursts and Race Conditions in EventBridge Compliance Remediation (A2 Engine)
* **The Problem:** In the A2 compliance remediation engine, rapid infrastructure modifications (such as terraform apply creating multiple S3 buckets or an attacker modifying security groups) generated bursts of duplicate CloudTrail events into AWS EventBridge. When multiple Lambda worker instances spawned concurrently, they attempted to remediate the same resource simultaneously, resulting in AWS API rate limiting and conflicting state transitions.
* **The Root Cause:** CloudTrail delivery to EventBridge provides at-least-once semantics, and concurrent serverless workers lack centralized coordination without explicit state synchronization.
* **The Engineering Fix:** Implemented deterministic idempotency hashing in the Python 3.12 Boto3 handler. Each incoming event generates an idempotency key derived from `SHA-256(event['id'] + resource_arn)`. The Lambda worker checks a fast TTL-enabled lock before executing remediation APIs (such as `s3.put_public_access_block`). If a remediation is already active or completed within the TTL window, subsequent duplicate invocations exit cleanly with code 200, achieving idempotent self-healing in under 2.4 seconds MTTR.

---

## 6. Local Development & Verification

### Prerequisites
* Node.js 18+ (tested on Node 20 and 22)
* npm 9+
* Git

### Commands

```bash
# 1. Clone repository
git clone https://github.com/Mhdomer/tech-superpower-portfolio.git

# 2. Enter repository directory
cd tech-superpower-portfolio

# 3. Install dependencies
npm ci

# 4. Start local development server with hot module replacement
npm run dev

# 5. Execute production build
npm run build

# 6. Preview production build locally
npm run preview
```

---

## 7. Submission Pre-Flight Checklist

* [x] **One Creative Feature Unified:** Interactive DevSecOps Command Center offering Visual Mode and CLI Mode.
* [x] **One Primary Visible Hint:** Pulsing `[ Command Center (hint!) ]` in the navbar with Hero and CLI secondary shortcuts.
* [x] **Verified Student Account:** Builder Center account linked to university email (`omarmohamed.m@graduate.utm.my`).
* [x] **Eligibility Confirmed:** 100% individual submission, resident of non-excluded region (Saudi Arabia / Malaysia).
* [x] **Live AWS Deployment:** Continuously active on AWS Amplify Hosting with zero server downtime.
* [x] **Public GitHub Repository:** Original source code open on GitHub under MIT License with natural commit history.
* [x] **All 3 Rubric Sections Explicit:** About Me, Skills / Tech Superpowers, Projects / Achievements.
* [x] **AWS Transparency:** Explicit delineation between live Amplify/CloudFront/S3 hosting and client-side architectural simulators.
* [x] **Zero Broken Links:** All repository links, LinkedIn, contact email, and resume vector PDF verified.
* [x] **Mobile and Desktop Tested:** 100% responsive across viewports from 360px to 4K displays.
* [x] **Zero Em Dashes:** Strict compliance with editorial typography guidelines.

---

## 8. License

Distributed under the MIT License. See [LICENSE](LICENSE) for full details.
Mohamed Makhlouf (Mhdomar) - 2026.
