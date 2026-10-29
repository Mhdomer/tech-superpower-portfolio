import React, { useState, useEffect, useRef } from 'react';
import { Terminal, X, ChevronUp, ChevronDown, Maximize2, Minimize2, Play, Sparkles, FileText, Cpu, ShieldCheck } from 'lucide-react';

export default function CachyOsTerminalDrawer({
  isOpen: externalIsOpen,
  onToggle: externalOnToggle,
  onClose: externalOnClose,
  onOpenResume,
  onOpenLab,
}) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isControlled = typeof externalIsOpen === 'boolean';
  const isOpen = isControlled ? externalIsOpen : internalIsOpen;

  const handleToggle = () => {
    if (externalOnToggle) {
      externalOnToggle();
    } else if (isControlled && externalOnClose) {
      if (isOpen) externalOnClose();
    } else {
      setInternalIsOpen((prev) => !prev);
    }
  };

  const handleClose = () => {
    if (externalOnClose) {
      externalOnClose();
    } else {
      setInternalIsOpen(false);
    }
  };

  const [isMaximized, setIsMaximized] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: 'CachyOS Linux 6.13.4-cachyos (Niri Wayland) [Dual-Boot /mnt/data <-> D:\\]',
    },
    {
      type: 'info',
      text: "Active P1 Incident: Case #2026-MED-402. Type 'triage', 'entropy <text>', 'sudo hire-me', or 'help'.",
    },
  ]);
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  // Toggle with `~` or `` ` `` hotkey
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't trigger if focus is in a textarea or input outside this terminal
      const target = e.target;
      const isInput =
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable;

      if ((e.key === '`' || e.key === '~') && (!isInput || target === inputRef.current)) {
        e.preventDefault();
        handleToggle();
      } else if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleToggle, handleClose]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const executeCommand = (rawCmd) => {
    const cmd = rawCmd.trim();
    if (!cmd) return;

    setCmdHistory((prev) => [cmd, ...prev]);
    setHistoryIndex(-1);

    const newHistory = [...history, { type: 'input', text: `mhdomar@cachyos-titan:~$ ${cmd}` }];

    const lower = cmd.toLowerCase().replace(/['"]/g, '');

    if (lower === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    if (lower === 'exit') {
      handleClose();
      setInputVal('');
      return;
    }

    if (lower === 'help') {
      newHistory.push({
        type: 'output',
        text: `AVAILABLE TERMINAL & TRIAGE COMMANDS:
  triage            Inspect active P1 cloud breach alert (Case #2026-MED-402)
  flowlogs          Dump raw VPC Flow Logs 5-tuple table with byte calculations
  cloudtrail        Dump correlated CloudTrail security audit events
  remediate / solve Execute A2 surgical zero-downtime containment & print flag
  entropy <string>  Calculate real-time mathematical Shannon Entropy on any text
  cat skills.txt    Inspect full DevSecOps, AI Security & Cloud Superpowers
  sudo hire-me      Unlock candidate dossier, credentials & direct contact
  cat about.txt     Read Mohamed's student engineer background (UTM & Al-Ameen)
  cat projects.txt  List featured repositories (Aegis-2B, A2, MindCraft, SECRH)
  benchmark aegis   Run 6/6 pytest suite with sub-115ms p99 latency verification
  sysinfo           Display CachyOS Linux kernel, dual-boot NVMe, and workstation specs
  cat resume        Print 1-page resume summary and open interactive PDF viewer
  ctf               View ASEAN Cyber Race 2025 Finals (3rd Place) CTF write-up
  lab               Launch the full visual Command Center & CTF Arena
  clear / exit      Manage terminal drawer session`,
      });
    } else if (lower === 'cat skills.txt' || lower === 'cat skills' || lower === 'skills' || lower === 'superpowers' || lower === 'cat superpower.txt' || lower === 'superpower') {
      newHistory.push({
        type: 'output',
        text: `============================= TECH SUPERPOWERS =============================
1. CLOUD DEVSECOPS & REMEDIATION:
   * AWS EventBridge + Lambda (Python 3.12 Boto3) autonomous compliance daemon.
   * Remediates S3 public ACLs, open security groups, and unencrypted EBS in <2.4s.
   * Shift-left container security with Trivy blocking critical CVEs at exit code 1.

2. AI SECURITY & ADVERSARIAL DEFENSE:
   * Aegis-2B dual-tier AI guardrail: sub-115ms p99 latency SLA on Amazon Bedrock.
   * Deterministic regex signature trie fast path (<0.8ms) drops OWASP LLM01 injections.
   * Quantized 2B Hugging Face SLM verifier prevents false-positive drops on benign queries.

3. GREEN CLOUD & FINOPS OPTIMIZATION:
   * AWS Graviton3 (ARM64) architecture migration cutting compute wattage by 38%.
   * Automated S3 intelligent tiering and CloudWatch log expiration saving 44% storage costs.

4. SYSTEMS CRAFT & LINUX WORKSTATION:
   * CachyOS Linux kernel 6.13+ with BORE (Burst-Oriented Response Enhancer) scheduler.
   * Scrollable Niri Wayland window management and POSIX shell automation pipelines.
   * Clinical IT operations at Al-Ameen Medical Complex: PACS imaging VLAN segmentation.
=============================================================================`,
      });
    } else if (lower === 'sudo hire-me' || lower === 'sudo hire me' || lower === 'hire-me' || lower === 'hire') {
      newHistory.push({
        type: 'output',
        text: `[sudo] authenticating visitor: permission granted.
============================ CANDIDATE UNLOCKED ============================
Candidate:       Mohamed Makhlouf (Omar / Mhdomar)
Primary Focus:   Cloud DevSecOps | AI Security Engineer | AWS Cloud Architecture
Academic:        Senior CS (Networks & Security) @ Universiti Teknologi Malaysia (UTM)
Standing:        CGPA 3.43 (Dean's List)
Industrial Role: Clinical IT Operations @ Al-Ameen Medical Complex, Riyadh
Availability:    IMMEDIATE PLACEMENT in Saudi Arabia (Active Saudi Iqama, no sponsorship)
                 Actively scouting roles in Saudi Arabia, Malaysia, Singapore, UAE, Remote
Primary Email:   muhamedomar.g@gmail.com
UTM Email:       omarmohamed.m@graduate.utm.my
Saudi Mobile:    +966 53 374 1162 (0533741162)
Malaysian Phone: +60 11-1138 3171
GitHub:          https://github.com/Mhdomer
LinkedIn:        https://linkedin.com/in/mhd3omar
Verdict:         STATUS APPROVED. Ready for technical interview.
============================================================================`,
      });
    } else if (lower === 'cat about.txt' || lower === 'about') {
      newHistory.push({
        type: 'output',
        text: `============================ ABOUT MOHAMED MAKHLOUF ============================
Senior Computer Science student specializing in Networks and Security at
Universiti Teknologi Malaysia (UTM) with a 3.43 CGPA (Dean's List).

Currently running clinical outpatient IT operations at Al-Ameen Medical Complex
in Riyadh, Saudi Arabia. My day-to-day spans segmenting diagnostic PACS imaging
subnets, eliminating configuration drift across clinics, and engineering
deterministic AI security guardrails for Amazon Bedrock LLMs.

Dual-Region Journey: Egypt -> UTM Malaysia -> Al-Ameen IT Riyadh.
Peer Tutoring: Weekly CS mentoring in C++, data structures, and POSIX fundamentals.
Podium Finish: 3rd Place at ASEAN Cyber Race 2025 CTF Finals (Cisco NetAcad).
===============================================================================`,
      });
    } else if (lower === 'cat projects.txt' || lower === 'projects') {
      newHistory.push({
        type: 'output',
        text: `========================== FEATURED ENGINEERING PROJECTS ==========================
1. Aegis-2B: Sub-115ms dual-tier AI guardrail for Amazon Bedrock foundation models.
   Repo: https://github.com/Mhdomer/aegis-2b
2. A2 Remediation Engine: EventBridge + Lambda serverless daemon fixing S3/IAM drift in <2.4s.
   Repo: https://github.com/Mhdomer/aws-compliance-remediation-engine
3. MindCraft AWS Migration: 3-tier AWS architecture with 47 Terraform resources & Trivy CI/CD.
   Repo: https://github.com/Mhdomer/mindcraft-aws-migration
4. SECRH Healthcare PDMS: Cloud clinical data management with PostgreSQL Row-Level Security.
   Repo: https://github.com/Mhdomer
===================================================================================`,
      });
    } else if (lower === 'ls' || lower === 'dir' || lower === 'ls -la') {
      newHistory.push({
        type: 'output',
        text: `total 48
-rwxr-xr-x 1 mhdomar staff 4096 Oct 29 09:30 about.txt
-rwxr-xr-x 1 mhdomar staff 8192 Oct 29 09:30 skills.txt
-rwxr-xr-x 1 mhdomar staff 6144 Oct 29 09:30 projects.txt
-rw-r--r-- 1 mhdomar staff 4400 Oct 29 09:30 Mohamed_Makhlouf_Resume.pdf
-rwxr-xr-x 1 mhdomar staff 2048 Oct 29 09:30 aegis-guardrail.py
-rwxr-xr-x 1 mhdomar staff 2560 Oct 29 09:30 a2-remediate.py
drwxr-xr-x 4 mhdomar staff  128 Oct 29 09:30 aws-amplify-hosting/`,
      });
    } else if (lower === 'whoami') {
      newHistory.push({
        type: 'output',
        text: 'mohamed-makhlouf (Senior CS Student @ UTM | Cloud DevSecOps & AI Security Engineer)',
      });
    } else if (lower === 'pwd') {
      newHistory.push({
        type: 'output',
        text: '/mnt/data/Projects/tech-superpower-portfolio',
      });
    } else if (lower === 'benchmark aegis' || lower === 'benchmark') {
      newHistory.push({
        type: 'output',
        text: `Running: pytest -v tests/test_guardrail.py --benchmark
============================= test session starts ==============================
platform linux -- Python 3.12.8, pytest-8.3.4, pluggy-1.5.0
rootdir: /mnt/data/Projects/aegis-2b
configfile: pyproject.toml
collected 6 items

tests/test_guardrail.py::test_fast_path_prompt_injection PASSED       [ 16%] (0.62ms)
tests/test_guardrail.py::test_sql_injection_sanitization PASSED       [ 33%] (0.71ms)
tests/test_guardrail.py::test_system_role_override_blocked PASSED     [ 50%] (0.58ms)
tests/test_guardrail.py::test_benign_prompt_allowed PASSED           [ 66%] (94.2ms)
tests/test_guardrail.py::test_p99_latency_benchmark_under_115ms PASSED [ 83%] (108.4ms)
tests/test_guardrail.py::test_bedrock_runtime_fallback PASSED        [100%] (45.1ms)

============================== 6 passed in 0.31s ===============================
Status: Deterministic Security Pass. Sub-115ms p99 latency SLA confirmed.`,
      });
    } else if (lower === 'sysinfo' || lower === 'neofetch' || lower === 'fastfetch') {
      newHistory.push({
        type: 'output',
        text: `========================= CACHYOS LINUX SYSTEM INFO =========================
OS:               CachyOS Linux x86_64 (Bore scheduler)
Kernel:           6.13.4-cachyos
Window Manager:   Niri 25.02 (Scrollable Wayland Compositor)
Dual-Boot:        /dev/nvme1n1p2 (NTFS) -> Linux: /mnt/data <-> Win11: D:\\
Terminal:         Foot / WezTerm (JetBrains Mono 10.5pt)

CANDIDATE:
Name:             Mohamed Makhlouf (Omar / Mhdomar)
Role:             Cloud DevSecOps & AI Security Engineer
University:       Universiti Teknologi Malaysia (UTM)
Academic:         Senior CS (Networks & Security) | CGPA 3.43 (Dean's List)
Industrial Role:  Al-Ameen Medical Complex IT Dept, Riyadh (Outpatient & PACS)
Work Status:      Active Saudi Iqama (immediate placement, no sponsorship needed)
Contacts:         muhamedomar.g@gmail.com | +966 53 374 1162 | +60 11-1138 3171
GitHub:           https://github.com/Mhdomer
=============================================================================`,
      });
    } else if (lower === 'cat resume' || lower === 'resume') {
      newHistory.push({
        type: 'output',
        text: `MOHAMED MAKHLOUF // CLOUD DEVSECOPS & AI SECURITY ENGINEER
UTM Dean's List (3.43 CGPA) | Al-Ameen Medical Complex IT, Riyadh
* Designed Aegis-2B dual-tier AI guardrail achieving <115ms p99 latency with zero false positives on known suites.
* Segmented outpatient PACS medical imaging network across VLANs with zero patient record exposure.
* Built automated A2 compliance remediation scripts in AWS Lambda executing in <2.4s MTTR.
* Single-page LaTeX PDF with clickable contact links (Tectonic engine + Noto Serif).

Opening full-screen resume viewer...`,
      });
      if (onOpenResume) {
        setTimeout(() => onOpenResume(), 400);
      }
    } else if (lower === 'ctf') {
      newHistory.push({
        type: 'output',
        text: `=================== ASEAN CYBER RACE 2025 FINALS ====================
Result:           3rd Place Podium (Bronze Award)
Organizer:        Cisco Networking Academy / ASEAN Cyber Security
Date:             November 2025
Specialization:   Cloud Infrastructure Exploits, PCAP Forensics & Reverse Eng
Key Solves:
* Cloud IAM:      Detected lateral privilege escalation via sts:AssumeRole chaining.
* PCAP Forensics: Reconstructed exfiltrated TLS session using Wireshark and tshark.
* Reverse Eng:    Identified buffer canary bypass in custom telemetry daemon.
=====================================================================`,
      });
    } else if (lower === 'superpowers') {
      newHistory.push({
        type: 'output',
        text: `CORE TECH SUPERPOWERS & VERIFIED METRICS:
1. Cloud DevSecOps Engine: Shift-left Trivy/Checkov gates, 100% block on Critical CVEs.
2. AI Security & Guardrails: Sub-115ms p99 regex trie defense before Bedrock LLMs.
3. Green Cloud & FinOps: ARM64 Graviton3 migration and automated S3 lifecycle rules.
4. Linux Kernel & Systems: CachyOS BORE tuning, POSIX systems, and PACS network VLANs.`,
      });
    } else if (lower === 'lab') {
      newHistory.push({
        type: 'output',
        text: 'Launching Interactive Cloud Security Command Center & CTF Arena...',
      });
      if (onOpenLab) {
        setTimeout(() => onOpenLab(), 300);
      }
    } else if (lower === 'triage' || lower === 'incident') {
      newHistory.push({
        type: 'output',
        text: `[ACTIVE P1 INCIDENT] CASE #2026-MED-402: PACS DICOM CLINICAL EXFILTRATION
Location:       Al-Ameen Medical Complex VPC, Riyadh (me-central-1)
Severity:       CRITICAL (P1)
Trigger:        GuardDuty: EgressDataVolumeSpike to untrusted external IP
Target:         s3://alamin-dicom-imaging/patient-scans/2026/
Root Cause:     PACSVendorSyncRole assumed via wildcard OIDC subject (sub: *)
Rogue Egress:   198.51.100.42:8443 (50,030,832 bytes / 47.71 MB DICOM scans)

INCIDENT COMMAND ACTIONS:
  flowlogs      Print raw VPC Flow Logs 5-tuple records
  cloudtrail    Print correlated CloudTrail security audit records
  remediate     Deploy A2 surgical zero-downtime containment rule
  lab           Launch the full interactive Visual Triage Arena`,
      });
    } else if (lower === 'flowlogs' || lower === 'vpc') {
      newHistory.push({
        type: 'output',
        text: `VPC FLOW LOGS 5-TUPLE (AL-AMEEN HEALTH VPC):
1. 10.0.4.18:49152 -> 198.51.100.42:8443 (TCP/6) | 34,820 pkts | 48,210,432 bytes | ACCEPT [ROGUE EGRESS]
2. 10.0.4.18:52341 -> 10.0.1.5:5432      (TCP/6) |    120 pkts |     15,200 bytes | ACCEPT [INTERNAL RDS]
3. 10.0.4.18:38210 -> 169.254.169.254:80 (TCP/6) |     14 pkts |      1,820 bytes | ACCEPT [IMDSv2]
4. 10.0.4.18:49154 -> 198.51.100.42:8443 (TCP/6) |  1,240 pkts |  1,820,400 bytes | ACCEPT [ROGUE EGRESS]

CALCULATED METRICS:
Total Rogue Exfiltration: 50,030,832 bytes (47.71 MB) across 36,060 packets.
Type 'remediate' to inject surgical NACL egress drop and revoke STS sessions.`,
      });
    } else if (lower === 'cloudtrail') {
      newHistory.push({
        type: 'output',
        text: `CLOUDTRAIL AUDIT TRAIL (me-central-1):
[02:38:12Z] ConsoleLogin                 | admin-makhlouf | 151.254.12.8 (Riyadh HQ) | MFA: Yes   [CLEAN]
[02:40:04Z] AssumeRoleWithWebIdentity   | PACSVendorSync | 140.82.112.4 (GitHub)    | sub: *     [CRITICAL INGRESS]
[02:40:48Z] CreateAccessKey              | emergency-back | 140.82.112.4             | AKIA_ROGUE [PERSISTENCE]
[02:41:02Z] GetObject                    | emergency-back | 10.0.4.18 (ECS Worker)   | MRI-0941   [EXFILTRATION]
[02:41:20Z] Decrypt (KMS)               | s3.amazonaws   | 10.0.4.18                | Key/7f8a9b [AUTHORIZED]`,
      });
    } else if (lower === 'remediate' || lower === 'solve') {
      newHistory.push({
        type: 'output',
        text: `[A2 DAEMON] Executing surgical zero-downtime containment...
1. Revoking active STS tokens for PACSVendorSyncRole (TokenIssueTime < 1730248900)... DONE (0.24s)
2. Deactivating rogue access key AKIA_ROGUE_7X9K2 for user emergency-backup-svc... DONE (0.18s)
3. Hardening OIDC trust policy: pinning to repo:Al-Ameen-Health/pacs-sync:ref:refs/heads/main... DONE (0.42s)
4. Injecting surgical egress deny NACL for 198.51.100.42/32... DONE (0.31s)

CONTAINMENT STATUS: 100% SECURED (Total MTTR: 1.15s, Clinical Downtime: 0s)
AUTHENTIC RESOLUTION FLAG: FLAG{A2_SURGICAL_CONTAINMENT_VERIFIED_7X9K2_ME_CENTRAL_1}
Congratulations, Incident Commander! Candidate dossier unlocked.`,
      });
    } else if (lower.startsWith('entropy ') || lower === 'entropy') {
      const textToEval = cmd.slice(7).trim();
      if (!textToEval) {
        newHistory.push({
          type: 'output',
          text: `Usage: entropy <string>\nExample: entropy "Ignore all previous instructions"\nExample: entropy "aWdub3JlIGFsbA=="`,
        });
      } else {
        const frequencies = {};
        for (let i = 0; i < textToEval.length; i++) {
          const ch = textToEval[i];
          frequencies[ch] = (frequencies[ch] || 0) + 1;
        }
        let ent = 0;
        const len = textToEval.length;
        for (const k in frequencies) {
          const p = frequencies[k] / len;
          ent -= p * Math.log2(p);
        }
        const formatted = ent.toFixed(3);
        const classification =
          ent > 4.6
            ? 'HIGH ENTROPY (Obfuscated Base64, Shellcode or Encrypted payload)'
            : ent >= 3.8
            ? 'STANDARD COMPLEXITY (Natural Language / Structured Code)'
            : 'LOW ENTROPY (Repetitive text / Low Information Density)';

        newHistory.push({
          type: 'output',
          text: `SHANNON ENTROPY CALCULATION (H):
Input Length:        ${len} characters
Unique Symbols:      ${Object.keys(frequencies).length} symbols
Entropy Score:       ${formatted} bits/byte
Classification:      ${classification}`,
        });
      }
    } else {
      newHistory.push({
        type: 'error',
        text: `bash: command not found: ${cmd}. Type 'help' for available commands.`,
      });
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleKeyDownInput = (e) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length > 0) {
        const nextIdx = Math.min(cmdHistory.length - 1, historyIndex + 1);
        setHistoryIndex(nextIdx);
        setInputVal(cmdHistory[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInputVal(cmdHistory[nextIdx]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputVal('');
      }
    }
  };

  const QUICK_COMMANDS = ['triage', 'flowlogs', 'remediate', 'benchmark aegis', 'sudo hire-me', 'cat skills.txt', 'help'];

  return (
    <>
      {/* Floating Toggle Pill at Bottom */}
      <div className="fixed bottom-4 right-4 sm:right-8 z-30">
        <button
          onClick={handleToggle}
          className="px-3.5 py-2 rounded-full font-mono text-xs font-bold tracking-wider shadow-2xl flex items-center gap-2 border transition-all active:scale-95 group backdrop-blur-md"
          style={{
            background: isOpen ? 'var(--brand-coral, #e06b5c)' : 'var(--button-bg)',
            color: isOpen ? '#ffffff' : 'var(--button-fg)',
            borderColor: 'var(--line-strong)',
          }}
          title="Toggle CachyOS Terminal Drawer (Hotkey: ~)"
        >
          <Terminal className="w-4 h-4 text-emerald-400 group-hover:rotate-12 transition-transform" />
          <span>terminal</span>
          <span className="text-[10px] px-1.5 py-0.2 rounded bg-black/30 font-mono text-slate-300">
            ~
          </span>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        </button>
      </div>

      {/* Slide-Up Monospace Terminal Drawer */}
      <div
        className={`fixed left-0 right-0 bottom-0 z-50 transition-all duration-300 ease-out font-mono text-xs flex flex-col ${
          isOpen ? 'translate-y-0 opacity-100 shadow-2xl' : 'translate-y-full opacity-0 pointer-events-none'
        }`}
        style={{
          height: isMaximized ? '90vh' : '450px',
          maxHeight: '92vh',
          background: '#070a0f',
          borderTop: '2px solid var(--brand-coral, #e06b5c)',
          color: '#e2e8f0',
        }}
      >
        {/* Terminal Window Header Bar */}
        <div
          className="flex items-center justify-between px-4 py-2.5 bg-black/70 border-b select-none"
          style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}
        >
          {/* Window Buttons & Session Label */}
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-1.5">
              <button
                onClick={handleClose}
                className="w-3 h-3 rounded-full bg-rose-500/80 hover:bg-rose-500 transition-colors"
                title="Close (~)"
              />
              <button
                onClick={() => setIsMaximized((prev) => !prev)}
                className="w-3 h-3 rounded-full bg-amber-500/80 hover:bg-amber-500 transition-colors"
                title="Resize"
              />
              <button
                onClick={() => setHistory([])}
                className="w-3 h-3 rounded-full bg-emerald-500/80 hover:bg-emerald-500 transition-colors"
                title="Clear buffer"
              />
            </div>
            <div className="h-4 w-px bg-white/20 mx-1 hidden sm:block" />
            <span className="text-[11px] font-bold text-slate-300 truncate">
              DEVSECOPS COMMAND CENTER // CLI MODE (bash 5.2 / linux 6.13-cachyos)
            </span>
          </div>

          {/* Right Action Icons & Hotkey Hint */}
          <div className="flex items-center gap-2.5 text-[11px] text-slate-400">
            {onOpenLab && (
              <div className="hidden sm:flex items-center bg-black/50 p-0.5 rounded-lg border border-white/10 text-[10px] font-mono">
                <button
                  onClick={() => {
                    handleClose();
                    onOpenLab();
                  }}
                  className="px-2 py-0.5 rounded text-slate-400 hover:text-white hover:bg-white/10 transition-all flex items-center gap-1"
                  title="Switch to Visual Mode"
                >
                  <ShieldCheck className="w-3 h-3 text-terracotta-400" />
                  <span>Visual</span>
                </button>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30 flex items-center gap-1 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  CLI Mode
                </span>
              </div>
            )}
            <span className="hidden md:inline text-[10px] text-slate-500 font-mono">
              [~] to toggle
            </span>
            <button
              onClick={() => setIsMaximized((prev) => !prev)}
              className="p-1 rounded hover:bg-white/10 text-slate-300"
              title={isMaximized ? 'Restore' : 'Maximize'}
            >
              {isMaximized ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={handleClose}
              className="p-1 rounded hover:bg-white/10 text-slate-300"
              title="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick Suggestion Chips Bar */}
        <div
          className="flex items-center gap-1.5 px-4 py-1.5 bg-black/40 border-b overflow-x-auto text-[10px] no-scrollbar"
          style={{ borderColor: 'rgba(255, 255, 255, 0.06)' }}
        >
          <span className="text-slate-500 whitespace-nowrap">Quick run:</span>
          {QUICK_COMMANDS.map((cmd) => (
            <button
              key={cmd}
              onClick={() => executeCommand(cmd)}
              className="px-2 py-0.5 rounded bg-white/5 hover:bg-white/15 border border-white/10 text-slate-300 whitespace-nowrap active:scale-95 transition-all"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Terminal Output Area */}
        <div className="flex-1 p-4 overflow-y-auto space-y-2 leading-relaxed text-[11px]">
          {history.map((item, idx) => (
            <div key={idx} className="whitespace-pre-wrap break-words font-mono">
              {item.type === 'system' && (
                <div className="text-cyan-400 font-bold border-l-2 border-cyan-400 pl-2">
                  {item.text}
                </div>
              )}
              {item.type === 'info' && (
                <div className="text-slate-400 italic">{item.text}</div>
              )}
              {item.type === 'input' && (
                <div className="text-emerald-400 font-bold">{item.text}</div>
              )}
              {item.type === 'output' && (
                <div className="text-slate-200 pl-2">{item.text}</div>
              )}
              {item.type === 'error' && (
                <div className="text-rose-400 font-bold pl-2">{item.text}</div>
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Terminal Input Line */}
        <div
          className="p-3 bg-black/80 border-t flex items-center gap-2"
          style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}
        >
          <span className="text-emerald-400 font-bold whitespace-nowrap text-xs">
            mhdomar@cachyos:~$
          </span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDownInput}
            placeholder="Type 'help', 'benchmark aegis', 'sysinfo', 'cat resume'..."
            className="flex-1 bg-transparent text-slate-100 outline-none font-mono text-xs placeholder:text-slate-600"
            autoFocus
          />
          <button
            onClick={() => executeCommand(inputVal)}
            disabled={!inputVal.trim()}
            className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-slate-200 disabled:opacity-40 text-[10px] uppercase font-bold"
          >
            Run
          </button>
        </div>
      </div>
    </>
  );
}
