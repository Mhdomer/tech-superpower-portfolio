import React, { useState } from 'react';
import {
  ShieldAlert,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  RotateCcw,
  Sparkles,
  FileText,
  Copy,
  Check,
  Zap,
  Activity,
  Server,
  Database,
  Lock,
  Globe,
  Award,
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CloudBreachTriageArena({ onOpenResume }) {
  // Stepper: 1 = The Breach, 2 = Trace Data, 3 = Contain & Fix, 4 = Verified Proof
  const [currentStep, setCurrentStep] = useState(1);
  const [showPolicyDiff, setShowPolicyDiff] = useState(false);
  const [selectedFix, setSelectedFix] = useState(null); // 'panic' | 'surgical'
  const [isExecutingFix, setIsExecutingFix] = useState(false);
  const [copiedFlag, setCopiedFlag] = useState(false);

  // The real cryptographic flag
  const solutionFlag = 'FLAG{A2_SURGICAL_CONTAINMENT_VERIFIED_7X9K2_ME_CENTRAL_1}';

  const handleApplyFix = (choice) => {
    setSelectedFix(choice);
    if (choice === 'surgical') {
      setIsExecutingFix(true);
      setTimeout(() => {
        setIsExecutingFix(false);
        setCurrentStep(4);
        confetti({
          particleCount: 50,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#10b981', '#0ea5e9', '#f59e0b'],
        });
      }, 700);
    }
  };

  const handleCopyFlag = () => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(solutionFlag);
      setCopiedFlag(true);
      setTimeout(() => setCopiedFlag(false), 2000);
    }
  };

  const handleReset = () => {
    setCurrentStep(1);
    setShowPolicyDiff(false);
    setSelectedFix(null);
    setIsExecutingFix(false);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto font-sans">
      {/* Human Introduction Banner */}
      <div className="p-4 sm:p-5 rounded-2xl bg-charcoal-850 border border-white/10 space-y-2">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-terracotta-500 animate-pulse" />
            <h3 className="text-sm sm:text-base font-bold text-white tracking-wide">
              Case Study: Catching a Real Cloud Breach in 60 Seconds
            </h3>
          </div>
          <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-black/40 text-slate-400 border border-white/5">
            Al-Ameen Medical Complex IT, Riyadh
          </span>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          This interactive challenge is based on a real operational incident in healthcare IT.
          Follow the 3 quick steps below to see how cloud attackers pivot, how we trace exfiltrated data,
          and how we deploy automated remediation with zero clinic downtime.
        </p>
      </div>

      {/* Clean 4-Step Visual Progress Stepper */}
      <div className="grid grid-cols-4 gap-2 text-xs font-mono">
        {[
          { num: 1, label: '1. The Breach' },
          { num: 2, label: '2. Trace Data' },
          { num: 3, label: '3. Surgical Fix' },
          { num: 4, label: '4. Verified Result' },
        ].map((step) => {
          const isActive = currentStep === step.num;
          const isDone = currentStep > step.num;
          return (
            <button
              key={step.num}
              onClick={() => {
                // Allow jumping back to earlier steps or to step 4 if completed
                if (step.num < currentStep || (step.num === 4 && selectedFix === 'surgical')) {
                  setCurrentStep(step.num);
                }
              }}
              className={`p-2.5 rounded-xl border text-center transition-all ${
                isActive
                  ? 'bg-terracotta-500/20 border-terracotta-500 text-white font-bold shadow-sm'
                  : isDone
                  ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-400 cursor-pointer'
                  : 'bg-charcoal-850 border-white/5 text-slate-500 cursor-not-allowed'
              }`}
            >
              <div className="flex items-center justify-center gap-1.5">
                {isDone ? (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <span className="text-[10px] opacity-75">{step.num}.</span>
                )}
                <span className="hidden sm:inline">{step.label.slice(3)}</span>
                <span className="sm:hidden">{step.label.split(' ')[1]}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* STEP 1: THE BREACH ALERT */}
      {currentStep === 1 && (
        <div className="p-5 sm:p-6 rounded-2xl bg-charcoal-900 border border-white/10 space-y-5 animate-in fade-in duration-300">
          <div className="space-y-1">
            <span className="text-xs font-mono text-terracotta-400 font-bold uppercase tracking-wider">
              Step 1 // Ingress Analysis
            </span>
            <h4 className="text-base sm:text-lg font-bold text-white">
              An unauthorized GitHub Actions workflow assumed an internal AWS role
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
              At 02:40 UTC, an external GitHub runner assumed <code className="text-white bg-black/40 px-1.5 py-0.5 rounded font-mono text-xs">PACSVendorSyncRole</code>.
              Why did AWS IAM allow an untrusted repository fork to obtain credentials for our hospital account?
            </p>
          </div>

          {/* Evidence Card: CloudTrail Record */}
          <div className="p-4 rounded-xl bg-charcoal-950 border border-white/10 space-y-2 text-xs font-mono">
            <div className="flex items-center justify-between text-slate-400 border-b border-white/10 pb-2">
              <span className="text-amber-400 font-bold flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>AWS CloudTrail Audit Record</span>
              </span>
              <span>Event: sts:AssumeRoleWithWebIdentity</span>
            </div>

            <pre className="text-slate-300 leading-relaxed overflow-x-auto text-[11px] p-2 bg-black/30 rounded-lg">
{`{
  "eventSource": "sts.amazonaws.com",
  "eventName": "AssumeRoleWithWebIdentity",
  "roleArn": "arn:aws:iam::112233445566:role/PACSVendorSyncRole",
  "principalId": "token.actions.githubusercontent.com:repo:untrusted-fork/pacs-sync:main"
}`}
            </pre>
          </div>

          {/* The Interactive Clue: IAM Trust Policy Diff */}
          <div className="p-4 rounded-xl bg-charcoal-850 border border-white/10 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-xs font-bold text-white block">The Vulnerability in the IAM Role Trust Policy</span>
                <span className="text-xs text-slate-400">Inspect how a single wildcard character opened the door to the public.</span>
              </div>
              <button
                onClick={() => setShowPolicyDiff(!showPolicyDiff)}
                className="px-3 py-1.5 rounded-lg bg-charcoal-750 hover:bg-charcoal-700 text-xs font-mono text-slate-200 border border-white/10 transition-all self-start sm:self-auto"
              >
                {showPolicyDiff ? 'Hide Hardened Fix' : 'Compare with Hardened Fix'}
              </button>
            </div>

            <div className="p-3 rounded-lg bg-charcoal-950 border border-white/10 text-xs font-mono overflow-x-auto">
              {!showPolicyDiff ? (
                <div className="space-y-1">
                  <span className="text-rose-400 block font-bold">// Insecure Trust Policy Condition:</span>
                  <div className="text-slate-300">
                    &quot;StringLike&quot;: &#123; <span className="text-rose-300 font-bold">&quot;token.actions.githubusercontent.com:sub&quot;: &quot;*&quot;</span> &#125;
                  </div>
                  <span className="text-[11px] text-slate-500 block pt-1 font-sans">
                    Because the subject claim was set to wildcard (*), any developer on GitHub could create a workflow and assume this role.
                  </span>
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="p-2 rounded bg-rose-950/20 border border-rose-500/30 text-rose-300">
                    <span className="font-bold">- Insecure: </span>
                    &quot;token.actions.githubusercontent.com:sub&quot;: &quot;*&quot; (Any repo on GitHub)
                  </div>
                  <div className="p-2 rounded bg-emerald-950/20 border border-emerald-500/30 text-emerald-300">
                    <span className="font-bold">+ Hardened: </span>
                    &quot;token.actions.githubusercontent.com:sub&quot;: &quot;repo:Al-Ameen-Health/pacs-sync:ref:refs/heads/main&quot;
                  </div>
                  <span className="text-[11px] text-emerald-400 block font-sans">
                    Hardening pins the role to our verified hospital repository only.
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Forward CTA */}
          <div className="flex justify-end pt-2">
            <button
              onClick={() => setCurrentStep(2)}
              className="px-5 py-2.5 rounded-xl bg-terracotta-500 hover:bg-terracotta-600 text-white font-bold text-xs sm:text-sm font-mono transition-all flex items-center gap-2 shadow-md hover:shadow-terracotta-500/20"
            >
              <span>Continue to Step 2: Trace the Data Flow</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: TRACE THE DATA FLOW */}
      {currentStep === 2 && (
        <div className="p-5 sm:p-6 rounded-2xl bg-charcoal-900 border border-white/10 space-y-5 animate-in fade-in duration-300">
          <div className="space-y-1">
            <span className="text-xs font-mono text-terracotta-400 font-bold uppercase tracking-wider">
              Step 2 // Network Telemetry
            </span>
            <h4 className="text-base sm:text-lg font-bold text-white">
              Tracking the stolen brain MRI scans across VPC Flow Logs
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
              The attacker created an access key and started downloading clinical DICOM files from S3.
              We check the VPC network flow logs to find the destination IP and calculate the data volume.
            </p>
          </div>

          {/* Clean 2-Way Comparison Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
            {/* Normal Flow */}
            <div className="p-4 rounded-xl bg-charcoal-850 border border-white/10 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-slate-400 font-bold flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Normal Internal Flow</span>
                </span>
                <span className="text-emerald-400 text-[11px]">15.2 KB</span>
              </div>
              <div className="text-slate-300 text-[11px]">
                10.0.4.18 (ECS) → 10.0.1.5:5432 (Postgres)
              </div>
              <span className="text-[11px] text-slate-500 block font-sans">
                Legitimate clinical database queries within the private subnet.
              </span>
            </div>

            {/* Rogue Exfiltration Flow */}
            <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/30 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-rose-300 font-bold flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
                  <span>Rogue Exfiltration Stream</span>
                </span>
                <span className="text-rose-400 font-bold text-[11px]">48.2 MB Leaked</span>
              </div>
              <div className="text-white font-bold text-[11px]">
                10.0.4.18 (ECS) → 198.51.100.42:8443
              </div>
              <span className="text-[11px] text-rose-300/80 block font-sans">
                34,820 packets carrying high-resolution patient MRI scans to an unknown server.
              </span>
            </div>
          </div>

          {/* VPC Flow Log Monospace Snippet */}
          <div className="p-4 rounded-xl bg-charcoal-950 border border-white/10 space-y-2 text-xs font-mono">
            <span className="text-slate-500 text-[10px] uppercase block">Raw VPC Flow Log Record:</span>
            <div className="p-2.5 rounded-lg bg-black/40 text-slate-300 overflow-x-auto text-[11px]">
              2 112233445566 eni-0a81bf <span className="text-white font-bold">10.0.4.18</span> <span className="text-rose-400 font-bold">198.51.100.42</span> 49152 8443 6 34820 <span className="text-amber-400 font-bold">48210432</span> ACCEPT OK
            </div>
            <div className="text-[11px] text-slate-400 font-sans">
              Notice the byte count: <strong className="text-white">48,210,432 bytes</strong> (48.2 MB). The flow action is currently <strong className="text-rose-400">ACCEPT</strong> because no egress rule blocked port 8443.
            </div>
          </div>

          {/* Navigation CTAs */}
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={() => setCurrentStep(1)}
              className="text-xs font-mono text-slate-400 hover:text-white transition-colors"
            >
              ← Back to Step 1
            </button>
            <button
              onClick={() => setCurrentStep(3)}
              className="px-5 py-2.5 rounded-xl bg-terracotta-500 hover:bg-terracotta-600 text-white font-bold text-xs sm:text-sm font-mono transition-all flex items-center gap-2 shadow-md hover:shadow-terracotta-500/20"
            >
              <span>Continue to Step 3: Choose How to Stop It</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: SURGICAL CONTAINMENT (HOW TO FIX IT) */}
      {currentStep === 3 && (
        <div className="p-5 sm:p-6 rounded-2xl bg-charcoal-900 border border-white/10 space-y-5 animate-in fade-in duration-300">
          <div className="space-y-1">
            <span className="text-xs font-mono text-terracotta-400 font-bold uppercase tracking-wider">
              Step 3 // Remediation Choice
            </span>
            <h4 className="text-base sm:text-lg font-bold text-white">
              How do we contain the leak without taking down hospital clinics?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
              In healthcare IT, security decisions carry clinical consequences.
              Compare the naive reaction with automated surgical remediation:
            </p>
          </div>

          {/* The Two Choices Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Option A: Panic Button */}
            <div
              onClick={() => setSelectedFix('panic')}
              className={`p-4 rounded-xl border text-left transition-all cursor-pointer space-y-3 ${
                selectedFix === 'panic'
                  ? 'bg-rose-950/30 border-rose-500 text-white shadow-md'
                  : 'bg-charcoal-850 border-white/10 text-slate-300 hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-rose-400 uppercase">
                  Option A: The Panic Button
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-500/20 text-rose-300">
                  45m Outage
                </span>
              </div>
              <h5 className="font-bold text-sm text-white">
                Detach the VPC Internet Gateway Immediately
              </h5>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                Cuts off the internet connection completely. The leak stops, but all 40 outpatient clinics, diagnostic PACS imaging, and doctor workstations lose cloud connectivity for 45 minutes.
              </p>
              {selectedFix === 'panic' && (
                <div className="p-2.5 rounded-lg bg-rose-900/30 text-rose-200 text-xs font-mono">
                  Verdict: Unacceptable blast radius. Clinical operations halted.
                </div>
              )}
            </div>

            {/* Option B: Surgical A2 Fix */}
            <div
              onClick={() => setSelectedFix('surgical')}
              className={`p-4 rounded-xl border text-left transition-all cursor-pointer space-y-3 ${
                selectedFix === 'surgical'
                  ? 'bg-emerald-950/30 border-emerald-500 text-white shadow-md'
                  : 'bg-charcoal-850 border-white/10 text-slate-300 hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-emerald-400 uppercase">
                  Option B: Surgical A2 Rule (Recommended)
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">
                  0s Downtime
                </span>
              </div>
              <h5 className="font-bold text-sm text-white">
                Trigger Automated EventBridge + Lambda Remediation
              </h5>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                Automatically invalidates the stolen STS session, deactivates the rogue key, patches the OIDC trust policy to our verified repo, and injects a surgical egress deny NACL for 198.51.100.42.
              </p>
              {selectedFix === 'surgical' && (
                <div className="p-2.5 rounded-lg bg-emerald-900/30 text-emerald-200 text-xs font-mono">
                  Verdict: Textbook cloud defense. Zero downtime for authorized medical staff.
                </div>
              )}
            </div>
          </div>

          {/* Action Button */}
          <div className="flex items-center justify-between pt-3 border-t border-white/10">
            <button
              onClick={() => setCurrentStep(2)}
              className="text-xs font-mono text-slate-400 hover:text-white transition-colors"
            >
              ← Back to Step 2
            </button>

            <button
              disabled={selectedFix !== 'surgical' || isExecutingFix}
              onClick={() => handleApplyFix('surgical')}
              className={`px-6 py-2.5 rounded-xl font-mono text-xs sm:text-sm font-bold transition-all flex items-center gap-2 shadow-lg ${
                selectedFix === 'surgical'
                  ? 'bg-emerald-500 hover:bg-emerald-600 text-charcoal-950 cursor-pointer shadow-emerald-500/20'
                  : 'bg-charcoal-800 text-slate-500 border border-white/5 cursor-not-allowed'
              }`}
            >
              {isExecutingFix ? (
                <>
                  <div className="w-4 h-4 border-2 border-charcoal-950 border-t-transparent rounded-full animate-spin" />
                  <span>Executing Boto3 Containment (&lt; 2s)...</span>
                </>
              ) : (
                <>
                  <Zap className="w-4 h-4" />
                  <span>Execute Surgical Containment</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {/* STEP 4: VERIFIED RESULT & CRYPTOGRAPHIC FLAG */}
      {currentStep === 4 && (
        <div className="p-6 sm:p-7 rounded-2xl bg-charcoal-900 border border-emerald-500/40 space-y-6 animate-in fade-in duration-300">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-6 h-6 text-emerald-400" />
              <div>
                <h4 className="text-base sm:text-lg font-bold text-white tracking-wide">
                  Breach Contained in 1.84s (Zero Clinical Downtime)
                </h4>
                <p className="text-xs sm:text-sm text-emerald-300 font-sans">
                  The rogue data stream was dropped at the subnet boundary. The hospital remains 100% operational.
                </p>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="px-3 py-1.5 rounded-lg bg-charcoal-800 hover:bg-charcoal-750 text-slate-300 text-xs font-mono border border-white/10 flex items-center gap-1.5 transition-all"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Replay</span>
            </button>
          </div>

          {/* 4 Actions Executed Summary */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono">
            <div className="p-3 rounded-lg bg-charcoal-950 border border-white/5">
              <span className="text-slate-500 block text-[10px]">1. STS SESSIONS</span>
              <span className="text-emerald-400 font-bold text-xs">Revoked (0.24s)</span>
            </div>
            <div className="p-3 rounded-lg bg-charcoal-950 border border-white/5">
              <span className="text-slate-500 block text-[10px]">2. ACCESS KEY</span>
              <span className="text-white font-bold text-xs">Deactivated</span>
            </div>
            <div className="p-3 rounded-lg bg-charcoal-950 border border-white/5">
              <span className="text-slate-500 block text-[10px]">3. OIDC TRUST</span>
              <span className="text-cyber-cyan font-bold text-xs">Repo Pinned</span>
            </div>
            <div className="p-3 rounded-lg bg-charcoal-950 border border-white/5">
              <span className="text-slate-500 block text-[10px]">4. SUBNET NACL</span>
              <span className="text-emerald-400 font-bold text-xs">Egress Dropped</span>
            </div>
          </div>

          {/* Cryptographic Flag Box */}
          <div className="p-4 rounded-xl bg-charcoal-950 border border-emerald-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <span className="text-[10px] text-slate-500 font-mono block">VERIFIED RESOLUTION TOKEN:</span>
              <span className="text-emerald-300 text-xs sm:text-sm font-mono font-bold tracking-wider select-all break-all">
                {solutionFlag}
              </span>
            </div>

            <button
              onClick={handleCopyFlag}
              className="px-3.5 py-2 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 text-xs font-mono transition-all flex items-center gap-1.5 shrink-0 self-start sm:self-auto"
            >
              {copiedFlag ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Copied Flag!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Flag</span>
                </>
              )}
            </button>
          </div>

          {/* Candidate Dossier & Contact */}
          <div className="p-4 rounded-xl bg-charcoal-850 border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-bold text-white text-sm">Mohamed Makhlouf (Omar)</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-terracotta-500/20 text-terracotta-300 border border-terracotta-500/30">
                  ASEAN Cyber Race 2025 Bronze
                </span>
              </div>
              <p className="text-xs text-slate-300 max-w-xl leading-relaxed">
                Senior Computer Science (Networks & Security) at UTM (3.43 CGPA).
                Currently running clinical IT operations at Al-Ameen Medical Complex in Riyadh.
                Author of Aegis-2B AI Guardrail and A2 Event-Driven Remediation Engine.
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0 font-mono text-xs">
              {onOpenResume && (
                <button
                  onClick={onOpenResume}
                  className="px-3.5 py-2 rounded-lg bg-white text-charcoal-950 font-bold hover:bg-slate-100 transition-all flex items-center gap-1.5 shadow"
                >
                  <FileText className="w-3.5 h-3.5 text-terracotta-500" />
                  <span>View Resume</span>
                </button>
              )}

              <a
                href="mailto:muhamedomar.g@gmail.com"
                className="px-3.5 py-2 rounded-lg bg-charcoal-750 hover:bg-charcoal-700 text-white border border-white/10 transition-all flex items-center gap-1.5"
              >
                <span>Email Candidate</span>
                <ArrowRight className="w-3.5 h-3.5 text-cyber-cyan" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
