# AWS Student Builder Challenge: Project Submission Guide & Copy-Paste Template

Use this file to copy-paste directly into the **AWS Builder Center** submission form under **"Your project"**:
https://builder.aws.com/build/hackathons/3bff5627-ef21-3bfc-acfc-fce21d39a4f6?tab=your-project

---

## FIELD 1: Title
**Character Count:** 51 / 255  
```text
Autonomous Cloud DevSecOps & Low-Latency AI Defense
```

---

## FIELD 2: Description
**Character Count:** 291 / 512  
```text
A cloud security portfolio deployed live on AWS Amplify Hosting, Amazon CloudFront, and Amazon S3. Features an interactive Cloud Security Defense Sandbox with real-time IAM AST policy linting, an incident crisis simulator, sub-115ms AI guardrail benchmarking, and an Alabasta sandboard runner.
```

---

## FIELD 3: Cover Image (Upload a cover image)
* **Recommended Dimensions:** 1200px x 675px
* **File to upload:** `media/00_cover_image_1200x675.png` (573 KB, optimized for fast upload)

---

## FIELD 4: Tags (Max 5)
Enter these 5 tags:
1. `Amplify`
2. `DevSecOps`
3. `CloudFront`
4. `Cybersecurity`
5. `Bedrock`

---

## FIELD 5: GitHub or GitLab Repository
```text
https://github.com/Mhdomer/tech-superpower-portfolio
```

---

## FIELD 6: Endpoint or Live Demo
```text
https://main.dxk14j7sxjg5l.amplifyapp.com
```

---

## FIELD 7: Jupyter or SageMaker notebook (Optional)
*(Leave blank)*

---

## FIELD 8: Country / Profile Setting
* Set to **Saudi Arabia** (where you are currently residing and working on your active Saudi Iqama). Do not select Malaysia, as Malaysia is on the hackathon excluded list.

---

## FIELD 9: Body (Markdown)
*Copy everything below this line into the Body editor:*

# Autonomous Cloud DevSecOps & Low-Latency AI Defense

**Candidate:** Mohamed Makhlouf (Omar / Mhdomar)  
**Role:** Cloud DevSecOps & AI Security Engineer  
**Academic Standing:** Senior Computer Science (Networks & Security), Universiti Teknologi Malaysia (UTM) | Dean's List (3.43 CGPA)  
**Location & Placement:** Clinical IT Department, Al-Ameen Medical Complex, Riyadh, Saudi Arabia  
**Live Application:** https://main.dxk14j7sxjg5l.amplifyapp.com  
**Source Code Repository:** https://github.com/Mhdomer/tech-superpower-portfolio  

---

## 1. Project Overview & Candidate Journey

This portfolio demonstrates an engineering philosophy where security is deterministic and latency is measured in single-digit milliseconds. As a final-year CS student at UTM currently running outpatient IT operations at Al-Ameen Medical Complex in Riyadh, I built this project to bridge shift-left DevSecOps automation, sub-115ms generative AI defense, and real healthcare infrastructure reliability.

Rather than building a static brochure, this portfolio functions as an authentic cloud defense workstation with an interactive security lab, a live Bedrock threat simulator, an Alabasta sandboarding runner game, and a companion CachyOS Linux terminal drawer.

---

## 2. The Creative Feature & Visible Hint (30% Rubric Gate)

The primary creative feature is the **Interactive Cloud Security Lab**, accompanied by the **Alabasta Sandboard Easter Egg**.

### The Visible Hint
Visitors discover the feature through a prominent beacon button labeled **`[ Security Lab (hint!) ]`** positioned in the sticky navigation bar and hero section. The button features a pulsing red indicator that attracts immediate attention without obstructing the page layout. When clicked, it opens an accessible modal overlay with keyboard `ESC` dismissal, ensuring zero layout shift and preserving seamless scrolling through the rest of the portfolio.

### The 4 Pillars of the Security Lab
1. **CloudSec Architect (Blueprint Defense Puzzle):** An interactive architectural game where visitors solve three real-world cloud defense missions:
   * *Mission 1 (OIDC Supply-Chain Defense):* An untrusted GitHub Actions runner attempts to assume an admin role through a wildcard claim. The visitor must deploy an exact repository and branch-scoped condition (`repo:Mhdomer/*:ref:refs/heads/main`).
   * *Mission 2 (Bedrock Prompt Shielding):* An outpatient medical portal injects adversarial prompt overrides into an Amazon Bedrock foundation model. The visitor deploys a pre-execution regex trie guardrail to intercept SQLi and system prompt exfiltration.
   * *Mission 3 (Medical PACS DICOM Egress Containment):* A clinical imaging scanner exfiltrates 48 MB of patient MRI scans to an unauthorized external IP. The visitor executes surgical security group egress revocation rather than disconnecting the gateway, preventing clinical downtime.
2. **Real-Time AWS IAM Policy AST Analyzer:** An in-browser parser that evaluates JSON IAM policies on every keystroke against CIS AWS Foundations Benchmark rules (wildcard admin permissions, anonymous public bucket access, privilege escalation vectors, and in-transit TLS). Features an "Auto-Remediate to Least-Privilege" button that rewrites insecure statements into compliant policies with celebratory feedback.
3. **Aegis-2B AI Guardrail & Live Entropy Testbed:** Real-time client-side Shannon Entropy calculation and character frequency analysis computed on every keystroke, benchmarked against OWASP LLM01 and LLM04 attacks with microsecond browser latency metrics.
4. **Green Cloud FinOps & Sustainability Calculator:** Interactive AWS Well-Architected Sustainability Pillar modeling demonstrating cost savings and carbon emissions avoided (kg CO2e/month) when migrating workloads to AWS Graviton3 ARM64 processors and right-sizing Lambda provisioned memory.

### The Alabasta Sandboard Easter Egg
Section 02 features an authentic Saudi sandboard runner mini-game. On weekend mornings outside Riyadh, I head to the 40-degree red dunes of Thumamah with a sandboard. Combined with a lifelong passion for One Piece Alabasta, this feature challenges visitors to collect 3 water barrels across the slip-faces using spacebar physics (`velocityY = 13`, `gravity = 0.75`), neutralize Crocodile's sandstorm, and unleash Gomu Gomu no Storm to restore the region.

*(Upload media/02_security_lab_modal.png here)*

*(Upload media/04_alabasta_sandboard_game.png here)*

---

## 3. Working AWS Implementation & Services Architecture (25% Rubric Gate)

The portfolio is deployed live on **AWS Amplify Hosting** in the `us-east-1` region (App ID: `dxk14j7sxjg5l`) and is backed by global CDN edge distribution and encrypted storage.

```
[ Visitor Browser ]
       │
       ▼  (HTTPS / TLS 1.3 via Route 53)
[ AWS Amplify Hosting ]
       │
       ├─► [ Amazon CloudFront CDN ] (Global Anycast Edge PoPs)
       ├─► [ Amazon S3 Static Origin ] (OAC Restricted Asset Storage)
       ├─► [ CI/CD Build Pipeline ] (Automated git push via amplify.yml)
       │
       ▼  (Demonstrated Enterprise Architectures)
[ AWS EventBridge & Lambda ] ──► [ Amazon Bedrock Runtime ]
```

### AWS Services in Production
* **AWS Amplify Hosting:** Connects directly to the GitHub repository, running automated builds (`npm ci` -> `npm run build`) upon every push to the `main` branch. Custom rewrite rules ensure seamless client-side single page routing.
* **Amazon CloudFront:** Accelerates Time to First Byte (TTFB) to under 35ms globally across 600+ edge Points of Presence (PoPs) with HTTP/2 and immutable asset caching.
* **Amazon S3:** Origin storage bucket locked down with Origin Access Control (OAC), serving static production bundles, high-resolution WebP screenshots, and vector PDF assets.
* **AWS Lambda & AWS EventBridge (Architectural Model):** Powers our A2 Compliance Engine, demonstrating automated infrastructure drift remediation (revoking public S3 ACLs and closing open 0.0.0.0/0 security groups in under 2.4s MTTR).
* **Amazon Bedrock (Architectural Model):** Foundation model inference runtime defended by our sub-115ms Aegis-2B dual-tier guardrail proxy.

*(Upload media/amplify_output.png or media/09_aws_amplify_pipeline_verified.png: Real CLI Terminal Verification)*

*(Upload media/05_aws_challenge_architecture.png here)*

---

## 4. Portfolio Completeness: Three Core Sections (20% Rubric Gate)

All three core sections are present, distinct, and accessible from the top navigation bar:

### A. About Me / Personal Journey (`#about`)
* **Dual-Region Engineering Path:** Journey from Cairo to Universiti Teknologi Malaysia (UTM) in Johor Bahru, and into clinical healthcare IT operations at Al-Ameen Medical Complex in Riyadh.
* **Clinical Healthcare IT:** Segmenting PACS diagnostic imaging networks across isolated VLANs, eliminating patient database exposure, and enforcing PostgreSQL Row-Level Security (RLS).
* **Competitive CTF Podium:** 3rd Place Bronze Award at the ASEAN Cyber Race 2025 Finals (Cisco Networking Academy), solving challenges in cloud IAM role chaining, Wireshark PCAP analysis, and binary forensics.
* **Peer Mentorship:** Weekly mentoring sessions for junior engineering students at UTM in systems programming and POSIX fundamentals, alongside bilingual Linux setup walkthroughs on YouTube ("Omar Documents").

### B. Skills & Tech Superpowers (`#skills`)
* **Autonomous Cloud Security:** AWS EventBridge, AWS Lambda (Python 3.12 Boto3), IAM least-privilege policies, Service Control Policies (SCPs), Terraform immutable infrastructure.
* **AI Security & Defense:** Sub-115ms p99 latency SLA, regex signature trie fast path, quantized 2B Hugging Face SLM verifiers, OWASP LLM01 and LLM04 prompt interception on Amazon Bedrock.
* **Shift-Left CI/CD & Gating:** GitHub Actions exit code 1 blocker gates, Trivy container CVE scans, Checkov static IaC policies, Docker minimal Alpine baselines.
* **Systems Craft:** Tuned CachyOS Linux (Kernel 6.13+ with BORE scheduler), Niri Wayland scrollable tiling compositor, POSIX automation, Wireshark packet dissection.

### C. Projects & Achievements (`#work`)
* **Aegis-2B (AI Guardrail Gateway):** Dual-tier security proxy intercepting prompt injections in under 115ms p99 latency with zero token leakage.
* **A2 Cloud Remediation Engine:** Event-driven serverless daemon detecting and auto-remediating public S3 buckets, open security groups, and unencrypted EBS volumes in under 2.4s MTTR.
* **MindCraft AWS Infrastructure Migration:** Complete re-architecture of coursework learning application into a self-managed 3-tier AWS environment across VPC, ALB, EC2, MongoDB, and Trivy CI/CD gating.
* **SECRH Patient Data Management System (FYP):** Final Year Project replacing single-server clinic workflows with an AWS multi-AZ architecture featuring HIPAA-aligned PostgreSQL Row-Level Security.

*(Upload media/06_about_and_achievements.png here)*

*(Upload media/07_cachyos_terminal_drawer.png here)*

---

## 5. Mobile Usability & Responsive Ergonomics (20% Rubric Gate)

The site was engineered and verified across mobile viewports down to 360px wide:
* Single column typography reflows with zero horizontal scroll spillover.
* Touch-friendly navigation drawer with responsive tap targets.
* Interactive sandboard game and security lab scale dynamically to mobile dimensions.

*(Upload media/08_mobile_responsive_view.png here)*

---

## 6. Key Learnings & Engineering Challenges Hit (25% Rubric Gate)

* **Challenge 1 (Guardrail Latency Barrier):** Standard enterprise LLM guardrails introduce 800ms to 1,500ms of overhead, causing severe user friction. In Aegis-2B, we engineered a dual-tier pipeline: a fast-path regex trie intercepts known attack signatures in sub-5ms, while ambiguous inputs route through a quantized 2B parameter SLM verifier on serverless containers, achieving a verified sub-115ms p99 latency SLA before queries reach Amazon Bedrock.
* **Challenge 2 (Non-Intrusive Interactive Experience):** Designing an interactive cybersecurity lab without cluttering the portfolio's reading experience. We engineered the lab as an accessible modal overlay with keyboard escape (`ESC`) and backdrop dismissal, allowing visitors to inspect policies or play the architecture game without losing their reading position.
* **Core Engineering Takeaway:** Security cannot be an afterthought checked during annual audits. In modern cloud architectures, security must be written as automated code: shift-left container scans that block vulnerable CI/CD builds, and event-driven Lambda functions that heal configuration drift on the triggering event.
