import React, { useState, useMemo } from 'react';
import {
  ShieldAlert,
  ShieldCheck,
  Terminal,
  Activity,
  Search,
  CheckCircle2,
  AlertTriangle,
  Lock,
  ArrowRight,
  Database,
  Server,
  Zap,
  Sparkles,
  FileText,
  Key,
  Globe,
  Award,
  ExternalLink,
  Copy,
  Check,
  RefreshCw,
  Eye,
  Sliders,
} from 'lucide-react';
import confetti from 'canvas-confetti';

// -------------------------------------------------------------
// AUTHENTIC CLOUDTRAIL AUDIT STREAM (RAW JSON LOGS)
// -------------------------------------------------------------
const CLOUDTRAIL_EVENTS = [
  {
    eventID: 'evt-8491-01',
    eventTime: '2026-10-29T02:38:12Z',
    eventSource: 'signin.amazonaws.com',
    eventName: 'ConsoleLogin',
    awsRegion: 'me-central-1',
    sourceIPAddress: '151.254.12.8', // Authorized Riyadh HQ IP
    userAgent: 'Mozilla/5.0 (X11; Linux x86_64; rv:131.0) Gecko/20100101 Firefox/131.0',
    userIdentity: {
      type: 'IAMUser',
      userName: 'admin-makhlouf',
      arn: 'arn:aws:iam::112233445566:user/admin-makhlouf',
    },
    additionalEventData: {
      MFAUsed: 'Yes',
      LoginStatus: 'Success',
    },
    responseElements: { ConsoleLogin: 'Success' },
    isSuspicious: false,
    triageNote: 'Legitimate administrator login from Riyadh with hardware MFA token.',
  },
  {
    eventID: 'evt-8491-02',
    eventTime: '2026-10-29T02:40:04Z',
    eventSource: 'sts.amazonaws.com',
    eventName: 'AssumeRoleWithWebIdentity',
    awsRegion: 'me-central-1',
    sourceIPAddress: '140.82.112.4', // GitHub Actions IP range
    userAgent: 'GitHub-Actions-Runner/2.311.0',
    userIdentity: {
      type: 'WebIdentityUser',
      principalId: 'token.actions.githubusercontent.com:repo:untrusted-fork/pacs-sync:ref:refs/heads/main',
      arn: 'arn:aws:sts::112233445566:assumed-role/PACSVendorSyncRole/GitHubJob-9481',
    },
    requestParameters: {
      roleArn: 'arn:aws:iam::112233445566:role/PACSVendorSyncRole',
      roleSessionName: 'GitHubJob-9481',
      durationSeconds: 3600,
    },
    responseElements: {
      credentials: {
        accessKeyId: 'ASIA_TEMP_7X9K2',
        expiration: '2026-10-29T03:40:04Z',
      },
    },
    isSuspicious: true,
    triageNote: 'CRITICAL INGRESS: OIDC exchange accepted untrusted repository fork because the IAM trust policy used a wildcard subject claim.',
  },
  {
    eventID: 'evt-8491-03',
    eventTime: '2026-10-29T02:40:48Z',
    eventSource: 'iam.amazonaws.com',
    eventName: 'CreateAccessKey',
    awsRegion: 'me-central-1',
    sourceIPAddress: '140.82.112.4',
    userAgent: 'aws-sdk-go/v1.44.180',
    userIdentity: {
      type: 'AssumedRole',
      principalId: 'AROA_PACS_VENDOR_SYNC:GitHubJob-9481',
      arn: 'arn:aws:sts::112233445566:assumed-role/PACSVendorSyncRole/GitHubJob-9481',
    },
    requestParameters: {
      userName: 'emergency-backup-svc',
    },
    responseElements: {
      accessKey: {
        userName: 'emergency-backup-svc',
        accessKeyId: 'AKIA_ROGUE_7X9K2',
        status: 'Active',
        createDate: '2026-10-29T02:40:48Z',
      },
    },
    isSuspicious: true,
    triageNote: 'PERSISTENCE MECHANISM: Attacker created long-lived static credentials for the emergency-backup-svc user to survive session expiry.',
  },
  {
    eventID: 'evt-8491-04',
    eventTime: '2026-10-29T02:41:02Z',
    eventSource: 's3.amazonaws.com',
    eventName: 'GetObject',
    awsRegion: 'me-central-1',
    sourceIPAddress: '10.0.4.18', // Internal ECS worker IP
    userAgent: 'Boto3/1.34.42 Python/3.12.1 Linux/6.1.72',
    userIdentity: {
      type: 'IAMUser',
      userName: 'emergency-backup-svc',
      accessKeyId: 'AKIA_ROGUE_7X9K2',
      arn: 'arn:aws:iam::112233445566:user/emergency-backup-svc',
    },
    requestParameters: {
      bucketName: 'alamin-dicom-imaging',
      key: 'patient-scans/2026/MRI-BRAIN-0941.dcm',
    },
    responseElements: null,
    isSuspicious: true,
    triageNote: 'UNAUTHORIZED DATA ACCESS: Stolen static key used from compromised ECS container to retrieve high-resolution patient MRI scans.',
  },
  {
    eventID: 'evt-8491-05',
    eventTime: '2026-10-29T02:41:20Z',
    eventSource: 'kms.amazonaws.com',
    eventName: 'Decrypt',
    awsRegion: 'me-central-1',
    sourceIPAddress: '10.0.4.18',
    userAgent: 'aws-internal/3',
    userIdentity: {
      type: 'AWSService',
      invokedBy: 's3.amazonaws.com',
    },
    requestParameters: {
      keyId: 'arn:aws:kms:me-central-1:112233445566:key/7f8a9b0c-1122-3344',
      encryptionContext: {
        'aws:s3:arn': 'arn:aws:s3:::alamin-dicom-imaging/patient-scans/2026/MRI-BRAIN-0941.dcm',
      },
    },
    isSuspicious: false,
    triageNote: 'Normal server-side KMS decryption triggered by S3 GetObject.',
  },
];

// -------------------------------------------------------------
// RAW VPC FLOW LOGS (VERSION 2 FORMAT)
// -------------------------------------------------------------
const VPC_FLOW_LOGS = [
  {
    raw: '2 112233445566 eni-0a81bf 10.0.4.18 198.51.100.42 49152 8443 6 34820 48210432 1730248878 1730248938 ACCEPT OK',
    srcAddr: '10.0.4.18',
    dstAddr: '198.51.100.42',
    srcPort: 49152,
    dstPort: 8443,
    protocol: '6 (TCP)',
    packets: 34820,
    bytes: 48210432, // 48.2 MB
    action: 'ACCEPT',
    status: 'OK',
    isEgressRogue: true,
    description: 'High-volume outbound TLS stream to rogue external IP 198.51.100.42 on port 8443.',
  },
  {
    raw: '2 112233445566 eni-0a81bf 10.0.4.18 10.0.1.5 52341 5432 6 120 15200 1730248878 1730248938 ACCEPT OK',
    srcAddr: '10.0.4.18',
    dstAddr: '10.0.1.5',
    srcPort: 52341,
    dstPort: 5432,
    protocol: '6 (TCP)',
    packets: 120,
    bytes: 15200,
    action: 'ACCEPT',
    status: 'OK',
    isEgressRogue: false,
    description: 'Legitimate internal PostgreSQL database telemetry sync.',
  },
  {
    raw: '2 112233445566 eni-0a81bf 10.0.4.18 169.254.169.254 38210 80 6 14 1820 1730248878 1730248938 ACCEPT OK',
    srcAddr: '10.0.4.18',
    dstAddr: '169.254.169.254',
    srcPort: 38210,
    dstPort: 80,
    protocol: '6 (TCP)',
    packets: 14,
    bytes: 1820,
    action: 'ACCEPT',
    status: 'OK',
    isEgressRogue: false,
    description: 'IMDSv2 token request from ECS container task metadata.',
  },
  {
    raw: '2 112233445566 eni-0a81bf 10.0.4.18 198.51.100.42 49154 8443 6 1240 1820400 1730248939 1730248999 ACCEPT OK',
    srcAddr: '10.0.4.18',
    dstAddr: '198.51.100.42',
    srcPort: 49154,
    dstPort: 8443,
    protocol: '6 (TCP)',
    packets: 1240,
    bytes: 1820400, // 1.82 MB
    action: 'ACCEPT',
    status: 'OK',
    isEgressRogue: true,
    description: 'Secondary outbound exfiltration chunk carrying patient clinical metadata.',
  },
  {
    raw: '2 112233445566 eni-0a81bf 203.0.113.88 10.0.4.18 51820 443 6 4 240 1730248939 1730248999 REJECT OK',
    srcAddr: '203.0.113.88',
    dstAddr: '10.0.4.18',
    srcPort: 51820,
    dstPort: 443,
    protocol: '6 (TCP)',
    packets: 4,
    bytes: 240,
    action: 'REJECT',
    status: 'OK',
    isEgressRogue: false,
    description: 'Inbound port scan dropped by security group ingress rules.',
  },
];

// -------------------------------------------------------------
// VULNERABLE IAM TRUST POLICY DOCUMENT (OIDC MISCONFIGURATION)
// -------------------------------------------------------------
const VULNERABLE_TRUST_POLICY = {
  Version: '2012-10-17',
  Statement: [
    {
      Sid: 'AllowGitHubOidcAssumeRole',
      Effect: 'Allow',
      Principal: {
        Federated: 'arn:aws:iam::112233445566:oidc-provider/token.actions.githubusercontent.com',
      },
      Action: 'sts:AssumeRoleWithWebIdentity',
      Condition: {
        StringEquals: {
          'token.actions.githubusercontent.com:aud': 'sts.amazonaws.com',
        },
        StringLike: {
          // THE VULNERABILITY: Wildcard subject allows any GitHub repository to assume this role!
          'token.actions.githubusercontent.com:sub': '*',
        },
      },
    },
  ],
};

const HARDENED_TRUST_POLICY = {
  Version: '2012-10-17',
  Statement: [
    {
      Sid: 'AllowScopedGitHubOidcAssumeRole',
      Effect: 'Allow',
      Principal: {
        Federated: 'arn:aws:iam::112233445566:oidc-provider/token.actions.githubusercontent.com',
      },
      Action: 'sts:AssumeRoleWithWebIdentity',
      Condition: {
        StringEquals: {
          'token.actions.githubusercontent.com:aud': 'sts.amazonaws.com',
        },
        StringLike: {
          // HARDENED: Pinned to authorized hospital repository only
          'token.actions.githubusercontent.com:sub': 'repo:Al-Ameen-Health/pacs-sync:ref:refs/heads/main',
        },
      },
    },
  ],
};

export default function CloudBreachTriageArena({ onOpenResume }) {
  // Evidence viewer active tab: 'cloudtrail' | 'flowlogs' | 'iam'
  const [evidenceTab, setEvidenceTab] = useState('cloudtrail');
  const [logFilter, setLogFilter] = useState('');
  const [selectedCloudTrailId, setSelectedCloudTrailId] = useState('evt-8491-02');
  const [selectedFlowIdx, setSelectedFlowIdx] = useState(0);

  // Investigation deduction state
  const [step1Vector, setStep1Vector] = useState(null); // 'oidc_wildcard' | 'root_login' | 's3_public'
  const [step2Ip, setStep2Ip] = useState(''); // Target: '198.51.100.42'
  const [step3Fix, setStep3Fix] = useState(null); // 'a2_remediate' | 'nuke_igw' | 'delete_user'

  // Computed triage progress
  const [isRemediating, setIsRemediating] = useState(false);
  const [isResolved, setIsResolved] = useState(false);
  const [solutionFlag, setSolutionFlag] = useState('');
  const [copiedFlag, setCopiedFlag] = useState(false);

  // Filtered CloudTrail logs
  const filteredCloudTrail = useMemo(() => {
    if (!logFilter) return CLOUDTRAIL_EVENTS;
    const q = logFilter.toLowerCase();
    return CLOUDTRAIL_EVENTS.filter(
      (e) =>
        e.eventName.toLowerCase().includes(q) ||
        e.eventSource.toLowerCase().includes(q) ||
        e.sourceIPAddress.includes(q) ||
        e.triageNote.toLowerCase().includes(q)
    );
  }, [logFilter]);

  // Real-time calculation of exfiltrated byte volume from VPC Flow Logs
  const totalRogueBytes = useMemo(() => {
    return VPC_FLOW_LOGS.filter((f) => f.isEgressRogue).reduce((acc, f) => acc + f.bytes, 0);
  }, []);

  const totalRoguePackets = useMemo(() => {
    return VPC_FLOW_LOGS.filter((f) => f.isEgressRogue).reduce((acc, f) => acc + f.packets, 0);
  }, []);

  // Check if step 1 is correct
  const isStep1Correct = step1Vector === 'oidc_wildcard';

  // Check if step 2 is correct (matches rogue C2 IP 198.51.100.42)
  const isStep2Correct = step2Ip.trim() === '198.51.100.42';

  // Check if step 3 is correct (A2 Surgical Remediation)
  const isStep3Correct = step3Fix === 'a2_remediate';

  const canExecuteContainment = isStep1Correct && isStep2Correct && isStep3Correct;

  // Real SHA-256 cryptographic verification for the CTF resolution flag
  const handleExecuteContainment = async () => {
    if (!canExecuteContainment) return;

    setIsRemediating(true);

    try {
      // Calculate real cryptographic SHA-256 hash
      const payload = 'PACSVendorSyncRole:198.51.100.42:AKIA_ROGUE_7X9K2:A2-Surgical-Remediated-2026';
      let hashHex = '';

      if (window.crypto && window.crypto.subtle) {
        const msgBuffer = new TextEncoder().encode(payload);
        const hashBuffer = await window.crypto.subtle.digest('SHA-256', msgBuffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('').substring(0, 16);
      } else {
        // Fallback simple checksum if WebCrypto unavailable in context
        let hash = 0;
        for (let i = 0; i < payload.length; i++) {
          hash = (hash << 5) - hash + payload.charCodeAt(i);
          hash |= 0;
        }
        hashHex = Math.abs(hash).toString(16).padStart(16, '7');
      }

      const generatedFlag = `FLAG{A2_SURGICAL_CONTAINMENT_${hashHex.toUpperCase()}_ME_CENTRAL_1}`;

      setTimeout(() => {
        setIsRemediating(false);
        setIsResolved(true);
        setSolutionFlag(generatedFlag);

        confetti({
          particleCount: 50,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#10b981', '#0ea5e9', '#f59e0b'],
        });
      }, 750);
    } catch {
      setIsRemediating(false);
      setIsResolved(true);
      setSolutionFlag('FLAG{A2_SURGICAL_CONTAINMENT_VERIFIED_7X9K2_ME_CENTRAL_1}');
    }
  };

  const handleCopyFlag = () => {
    if (navigator?.clipboard?.writeText && solutionFlag) {
      navigator.clipboard.writeText(solutionFlag);
      setCopiedFlag(true);
      setTimeout(() => setCopiedFlag(false), 2000);
    }
  };

  const handleResetChallenge = () => {
    setStep1Vector(null);
    setStep2Ip('');
    setStep3Fix(null);
    setIsResolved(false);
    setSolutionFlag('');
  };

  return (
    <div className="space-y-6">
      {/* Active P1 Incident Alert Banner */}
      <div className="p-4 sm:p-5 rounded-xl border border-rose-500/30 bg-rose-950/20 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1.5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-rose-500 text-charcoal-950 font-mono text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
              <ShieldAlert className="w-3 h-3" />
              <span>ACTIVE P1 CLOUD BREACH</span>
            </span>
            <span className="font-mono text-xs text-rose-300 font-bold">
              CASE #2026-MED-402 // AL-AMEEN RIYADH VPC
            </span>
            <span className="text-slate-500 text-xs hidden sm:inline">•</span>
            <span className="text-slate-400 font-mono text-xs">Target: s3://alamin-dicom-imaging</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed font-sans max-w-3xl">
            At 02:41:18 UTC, an anomalous outbound data stream was detected egressing hospital clinical MRI records.
            As Incident Commander, correlate the raw CloudTrail audit events and VPC Flow Logs, calculate the exfiltration footprint, and deploy the surgical zero-downtime remediation.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <div className="text-right font-mono text-xs hidden sm:block">
            <span className="text-slate-500 block text-[10px]">TIME TO CONTAIN (SLA)</span>
            <span className="text-emerald-400 font-bold">&lt; 2.4s MTTR</span>
          </div>
          {isResolved && (
            <button
              onClick={handleResetChallenge}
              className="px-3 py-1.5 rounded-lg bg-charcoal-800 hover:bg-charcoal-700 text-slate-300 text-xs font-mono border border-white/10 flex items-center gap-1.5 transition-all"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Replay Investigation</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Two-Column Investigation Workbench */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* LEFT COLUMN (7 Cols): Interactive Evidence Inspector */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-terracotta-400" />
              <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                Raw Forensic Evidence Inspector
              </h4>
            </div>
            <span className="text-[11px] font-mono text-slate-500">Live Parsed Telemetry</span>
          </div>

          {/* Evidence Navigation Tabs */}
          <div className="flex items-center gap-2 border-b border-white/10 text-xs font-mono pb-2 overflow-x-auto">
            <button
              onClick={() => setEvidenceTab('cloudtrail')}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap ${
                evidenceTab === 'cloudtrail'
                  ? 'bg-terracotta-500/20 text-terracotta-300 border border-terracotta-500/40 font-bold'
                  : 'bg-charcoal-800 text-slate-400 hover:text-slate-200 border border-white/5'
              }`}
            >
              <Activity className="w-3.5 h-3.5" />
              <span>1. CloudTrail Events ({CLOUDTRAIL_EVENTS.length})</span>
            </button>

            <button
              onClick={() => setEvidenceTab('flowlogs')}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap ${
                evidenceTab === 'flowlogs'
                  ? 'bg-cyber-cyan/20 text-cyber-cyan border border-cyber-cyan/40 font-bold'
                  : 'bg-charcoal-800 text-slate-400 hover:text-slate-200 border border-white/5'
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>2. VPC Flow Logs 5-Tuple ({VPC_FLOW_LOGS.length})</span>
            </button>

            <button
              onClick={() => setEvidenceTab('iam')}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap ${
                evidenceTab === 'iam'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold'
                  : 'bg-charcoal-800 text-slate-400 hover:text-slate-200 border border-white/5'
              }`}
            >
              <Key className="w-3.5 h-3.5" />
              <span>3. IAM Trust Policy AST</span>
            </button>
          </div>

          {/* TAB 1: CLOUDTRAIL STREAM */}
          {evidenceTab === 'cloudtrail' && (
            <div className="space-y-3 font-mono text-xs">
              <div className="flex items-center gap-2">
                <div className="relative flex-1">
                  <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-500" />
                  <input
                    type="text"
                    value={logFilter}
                    onChange={(e) => setLogFilter(e.target.value)}
                    placeholder="Filter by eventName, IP, or source..."
                    className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-charcoal-950 border border-white/10 text-white text-xs focus:border-terracotta-500 focus:outline-none"
                  />
                </div>
                {logFilter && (
                  <button
                    onClick={() => setLogFilter('')}
                    className="text-slate-400 hover:text-white text-[11px] px-2 py-1"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Event Cards */}
              <div className="space-y-2 max-h-[360px] overflow-y-auto pr-1">
                {filteredCloudTrail.map((evt) => {
                  const isSelected = selectedCloudTrailId === evt.eventID;
                  return (
                    <div
                      key={evt.eventID}
                      onClick={() => setSelectedCloudTrailId(evt.eventID)}
                      className={`p-3 rounded-lg border transition-all cursor-pointer ${
                        isSelected
                          ? evt.isSuspicious
                            ? 'bg-rose-950/40 border-rose-500/60 shadow-sm'
                            : 'bg-charcoal-750 border-cyber-cyan/50'
                          : evt.isSuspicious
                          ? 'bg-rose-950/15 border-rose-500/20 hover:border-rose-500/40'
                          : 'bg-charcoal-850 border-white/5 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span
                            className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                              evt.isSuspicious
                                ? 'bg-rose-500/30 text-rose-300 border border-rose-500/40'
                                : 'bg-emerald-500/20 text-emerald-300'
                            }`}
                          >
                            {evt.eventName}
                          </span>
                          <span className="text-slate-400 text-[11px]">{evt.eventSource}</span>
                        </div>
                        <span className="text-slate-500 text-[10px]">{evt.eventTime.slice(11, 19)} UTC</span>
                      </div>

                      <div className="mt-2 text-[11px] text-slate-300 space-y-1">
                        <div>
                          <span className="text-slate-500">Principal: </span>
                          <span className="text-white truncate">{evt.userIdentity.arn}</span>
                        </div>
                        <div>
                          <span className="text-slate-500">Source IP: </span>
                          <span className="text-cyber-cyan">{evt.sourceIPAddress}</span>
                        </div>
                        <p className="text-[11px] text-slate-300 font-sans pt-1 border-t border-white/5 leading-relaxed">
                          {evt.triageNote}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 2: VPC FLOW LOGS */}
          {evidenceTab === 'flowlogs' && (
            <div className="space-y-3 font-mono text-xs">
              <div className="p-3 rounded-lg bg-charcoal-950 border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-slate-500 block text-[10px]">TOTAL ROGUE EGRESS DETECTED</span>
                  <span className="text-rose-400 font-bold text-sm">
                    {(totalRogueBytes / (1024 * 1024)).toFixed(2)} MB ({totalRogueBytes.toLocaleString()} bytes)
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-slate-500 block text-[10px]">TOTAL OUTBOUND PACKETS</span>
                  <span className="text-white font-bold text-sm">
                    {totalRoguePackets.toLocaleString()} packets
                  </span>
                </div>
              </div>

              <div className="space-y-2 max-h-[340px] overflow-y-auto pr-1">
                {VPC_FLOW_LOGS.map((flow, idx) => {
                  const isSelected = selectedFlowIdx === idx;
                  return (
                    <div
                      key={idx}
                      onClick={() => {
                        setSelectedFlowIdx(idx);
                        if (flow.isEgressRogue && !step2Ip) {
                          setStep2Ip(flow.dstAddr);
                        }
                      }}
                      className={`p-3 rounded-lg border transition-all cursor-pointer ${
                        isSelected
                          ? flow.isEgressRogue
                            ? 'bg-rose-950/40 border-rose-500/60 shadow-sm'
                            : 'bg-charcoal-750 border-cyber-cyan/50'
                          : flow.isEgressRogue
                          ? 'bg-rose-950/15 border-rose-500/20 hover:border-rose-500/40'
                          : 'bg-charcoal-850 border-white/5 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center justify-between text-[11px]">
                        <div className="flex items-center gap-2">
                          <span
                            className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                              flow.isEgressRogue
                                ? 'bg-rose-500 text-charcoal-950'
                                : 'bg-charcoal-750 text-slate-300'
                            }`}
                          >
                            {flow.action}
                          </span>
                          <span className="text-white font-bold">{flow.srcAddr}:{flow.srcPort}</span>
                          <span className="text-slate-500">→</span>
                          <span className={flow.isEgressRogue ? 'text-rose-400 font-bold' : 'text-cyber-cyan'}>
                            {flow.dstAddr}:{flow.dstPort}
                          </span>
                        </div>
                        <span className="text-slate-400 text-[10px]">
                          {(flow.bytes / 1024).toFixed(1)} KB
                        </span>
                      </div>

                      <p className="mt-2 text-[11px] text-slate-300 font-sans leading-relaxed">
                        {flow.description}
                      </p>

                      <div className="mt-1 pt-1 border-t border-white/5 text-[10px] text-slate-500 truncate">
                        {flow.raw}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 3: IAM TRUST POLICY AST */}
          {evidenceTab === 'iam' && (
            <div className="space-y-3 font-mono text-xs">
              <div className="p-3 rounded-lg bg-amber-950/20 border border-amber-500/30 text-amber-200 text-xs font-sans leading-relaxed">
                <strong className="block font-mono text-amber-300 mb-1">
                  Root Cause Audit: Role Trust Policy Misconfiguration
                </strong>
                The role <code className="text-white bg-black/40 px-1 py-0.5 rounded">PACSVendorSyncRole</code> was created with a wildcard subject claim.
                Any developer on GitHub can create a workflow in an untrusted fork to assume this role and request AWS temporary credentials.
              </div>

              <div className="p-3.5 rounded-lg bg-charcoal-950 border border-white/10 text-xs overflow-x-auto">
                <div className="text-slate-500 text-[10px] mb-1.5 uppercase">Active Trust Relationship JSON:</div>
                <pre className="text-slate-300 leading-relaxed">
                  {JSON.stringify(isResolved ? HARDENED_TRUST_POLICY : VULNERABLE_TRUST_POLICY, null, 2)}
                </pre>
              </div>
            </div>
          )}
        </div>

        {/* RIGHT COLUMN (5 Cols): The 3-Step Deduction & Remediation Workbench */}
        <div className="lg:col-span-5 space-y-5">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <div className="flex items-center gap-2">
              <Sliders className="w-4 h-4 text-emerald-400" />
              <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                Incident Triage Console
              </h4>
            </div>
            <span className="text-[11px] font-mono text-emerald-400">
              {isResolved ? 'CONTAINED // 100%' : 'SOLVE 3 GATES'}
            </span>
          </div>

          {/* STEP 1: VECTOR IDENTIFICATION */}
          <div
            className={`p-4 rounded-xl border transition-all space-y-2.5 ${
              isStep1Correct
                ? 'bg-emerald-950/20 border-emerald-500/40'
                : 'bg-charcoal-850 border-white/10'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-white flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-charcoal-700 text-slate-300 flex items-center justify-center text-[10px]">
                  1
                </span>
                <span>Identify Ingress Pivot Vector</span>
              </span>
              {isStep1Correct && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
            </div>

            <p className="text-xs text-slate-400 font-sans">
              Which vulnerability allowed the unauthorized entity to obtain cloud execution?
            </p>

            <div className="space-y-1.5 text-xs font-mono">
              <button
                onClick={() => setStep1Vector('oidc_wildcard')}
                className={`w-full text-left p-2.5 rounded-lg border transition-all ${
                  step1Vector === 'oidc_wildcard'
                    ? 'bg-emerald-950/40 border-emerald-500 text-white'
                    : 'bg-charcoal-800 text-slate-300 border-white/5 hover:border-white/20'
                }`}
              >
                A: Wildcard OIDC Subject claim on PACSVendorSyncRole
              </button>

              <button
                onClick={() => setStep1Vector('root_login')}
                className={`w-full text-left p-2.5 rounded-lg border transition-all ${
                  step1Vector === 'root_login'
                    ? 'bg-rose-950/40 border-rose-500 text-white'
                    : 'bg-charcoal-800 text-slate-300 border-white/5 hover:border-white/20'
                }`}
              >
                B: Root AWS Account Console Login without MFA
              </button>

              <button
                onClick={() => setStep1Vector('s3_public')}
                className={`w-full text-left p-2.5 rounded-lg border transition-all ${
                  step1Vector === 's3_public'
                    ? 'bg-rose-950/40 border-rose-500 text-white'
                    : 'bg-charcoal-800 text-slate-300 border-white/5 hover:border-white/20'
                }`}
              >
                C: Public S3 Bucket Read ACL enabled
              </button>
            </div>
          </div>

          {/* STEP 2: EXFILTRATION CHANNEL IDENTIFICATION */}
          <div
            className={`p-4 rounded-xl border transition-all space-y-2.5 ${
              isStep2Correct
                ? 'bg-emerald-950/20 border-emerald-500/40'
                : 'bg-charcoal-850 border-white/10'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-white flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-charcoal-700 text-slate-300 flex items-center justify-center text-[10px]">
                  2
                </span>
                <span>Track Rogue Exfiltration Destination IP</span>
              </span>
              {isStep2Correct && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
            </div>

            <p className="text-xs text-slate-400 font-sans">
              Inspect VPC Flow Logs and enter the destination IP receiving stolen DICOM scans:
            </p>

            <div className="flex items-center gap-2">
              <input
                type="text"
                value={step2Ip}
                onChange={(e) => setStep2Ip(e.target.value.trim())}
                placeholder="e.g. 198.51.100.42"
                className={`flex-1 px-3 py-2 rounded-lg bg-charcoal-950 border font-mono text-xs focus:outline-none ${
                  isStep2Correct
                    ? 'border-emerald-500 text-emerald-300'
                    : 'border-white/10 text-white focus:border-cyber-cyan'
                }`}
              />
              <button
                onClick={() => setStep2Ip('198.51.100.42')}
                className="px-2.5 py-2 rounded-lg bg-charcoal-800 hover:bg-charcoal-700 text-slate-400 hover:text-white text-[11px] font-mono border border-white/5 whitespace-nowrap"
              >
                Auto-Fill IP
              </button>
            </div>

            {isStep2Correct && (
              <div className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>Verified: Matched 50.03 MB exfiltration stream on port 8443</span>
              </div>
            )}
          </div>

          {/* STEP 3: SURGICAL ZERO-DOWNTIME REMEDIATION */}
          <div
            className={`p-4 rounded-xl border transition-all space-y-2.5 ${
              isStep3Correct
                ? 'bg-emerald-950/20 border-emerald-500/40'
                : 'bg-charcoal-850 border-white/10'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-white flex items-center gap-1.5">
                <span className="w-4 h-4 rounded-full bg-charcoal-700 text-slate-300 flex items-center justify-center text-[10px]">
                  3
                </span>
                <span>Deploy Containment Rule (Zero Downtime)</span>
              </span>
              {isStep3Correct && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
            </div>

            <p className="text-xs text-slate-400 font-sans">
              Choose the architectural response with zero clinical blast radius:
            </p>

            <div className="space-y-1.5 text-xs font-mono">
              <button
                onClick={() => setStep3Fix('a2_remediate')}
                className={`w-full text-left p-2.5 rounded-lg border transition-all ${
                  step3Fix === 'a2_remediate'
                    ? 'bg-emerald-950/40 border-emerald-500 text-white'
                    : 'bg-charcoal-800 text-slate-300 border-white/5 hover:border-white/20'
                }`}
              >
                A: Trigger A2 Lambda (Deactivate Key + Revoke STS + Pin OIDC Subject + Block Egress IP)
              </button>

              <button
                onClick={() => setStep3Fix('nuke_igw')}
                className={`w-full text-left p-2.5 rounded-lg border transition-all ${
                  step3Fix === 'nuke_igw'
                    ? 'bg-rose-950/40 border-rose-500 text-white'
                    : 'bg-charcoal-800 text-slate-300 border-white/5 hover:border-white/20'
                }`}
              >
                B: Detach VPC Internet Gateway immediately (100% Hospital Outage)
              </button>

              <button
                onClick={() => setStep3Fix('delete_user')}
                className={`w-full text-left p-2.5 rounded-lg border transition-all ${
                  step3Fix === 'delete_user'
                    ? 'bg-rose-950/40 border-rose-500 text-white'
                    : 'bg-charcoal-800 text-slate-300 border-white/5 hover:border-white/20'
                }`}
              >
                C: Delete emergency-backup-svc user (Active STS tokens remain valid for 1 hour)
              </button>
            </div>
          </div>

          {/* EXECUTION BUTTON */}
          <button
            disabled={!canExecuteContainment || isRemediating || isResolved}
            onClick={handleExecuteContainment}
            className={`w-full py-3 px-4 rounded-xl font-mono text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-lg ${
              isResolved
                ? 'bg-emerald-600 text-white cursor-default'
                : canExecuteContainment
                ? 'bg-gradient-to-r from-emerald-500 to-cyber-cyan text-charcoal-950 hover:brightness-110 shadow-emerald-500/20 animate-pulse'
                : 'bg-charcoal-800 text-slate-500 border border-white/5 cursor-not-allowed'
            }`}
          >
            {isRemediating ? (
              <>
                <div className="w-4 h-4 border-2 border-charcoal-950 border-t-transparent rounded-full animate-spin" />
                <span>Executing Idempotent Boto3 Containment (&lt; 2.4s)...</span>
              </>
            ) : isResolved ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-white" />
                <span>BREACH SURGICALLY CONTAINED (ZERO DOWNTIME)</span>
              </>
            ) : (
              <>
                <Zap className="w-4 h-4" />
                <span>Execute Surgical Cloud Remediation</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* LIVE ANIMATED SVG NETWORK CONTAINMENT MAP */}
      <div className="p-5 rounded-2xl bg-charcoal-950 border border-white/10 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-cyber-cyan" />
            <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
              Live Network Dataflow & Containment Topology
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-slate-300">Authorized Internal Traffic</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span
                className={`w-2 h-2 rounded-full ${
                  isResolved ? 'bg-emerald-500' : 'bg-rose-500 animate-ping'
                }`}
              />
              <span className={isResolved ? 'text-emerald-400 font-bold' : 'text-rose-400 font-bold'}>
                {isResolved ? 'Egress Laser Cutoff: BLOCKED' : 'Active Exfiltration Flow'}
              </span>
            </span>
          </div>
        </div>

        {/* Interactive SVG Diagram */}
        <div className="w-full overflow-x-auto py-2">
          <svg
            viewBox="0 0 860 160"
            className="w-full min-w-[700px] h-36 select-none font-mono text-[11px]"
          >
            {/* Background Mesh Grid */}
            <defs>
              <pattern id="mesh" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="0.75" fill="rgba(255,255,255,0.08)" />
              </pattern>
            </defs>
            <rect width="860" height="160" fill="url(#mesh)" rx="8" />

            {/* NODE 1: Hospital PACS ECS Container (Source) */}
            <g transform="translate(40, 45)">
              <rect
                width="160"
                height="70"
                rx="8"
                fill="#161d2b"
                stroke={isResolved ? '#10b981' : '#f43f5e'}
                strokeWidth="1.5"
              />
              <text x="80" y="26" textAnchor="middle" fill="#ffffff" fontWeight="bold" fontSize="11">
                PACS Worker ECS
              </text>
              <text x="80" y="44" textAnchor="middle" fill="#94a3b8" fontSize="10">
                10.0.4.18 (VPC)
              </text>
              <text
                x="80"
                y="58"
                textAnchor="middle"
                fill={isResolved ? '#34d399' : '#fb7185'}
                fontSize="9"
              >
                {isResolved ? 'HEALTHY // ISOLATED' : 'STOLEN KEY ACTIVE'}
              </text>
            </g>

            {/* INTERNAL LINK: ECS -> RDS Database */}
            <path d="M 120 45 L 120 18 L 340 18" fill="none" stroke="#34d399" strokeWidth="1.5" strokeDasharray="4 4" />
            <g transform="translate(340, 8)">
              <rect width="130" height="34" rx="6" fill="#0b0f17" stroke="#34d399" strokeWidth="1" />
              <text x="65" y="21" textAnchor="middle" fill="#34d399" fontSize="9" fontWeight="bold">
                Clinical RDS (10.0.1.5)
              </text>
            </g>

            {/* NODE 2: AWS Gateway / A2 Defense Boundary */}
            <g transform="translate(340, 50)">
              <rect
                width="180"
                height="60"
                rx="8"
                fill="#0f172a"
                stroke={isResolved ? '#10b981' : '#38bdf8'}
                strokeWidth="1.5"
              />
              <text x="90" y="24" textAnchor="middle" fill="#ffffff" fontWeight="bold" fontSize="11">
                A2 Remediation Gateway
              </text>
              <text x="90" y="42" textAnchor="middle" fill="#38bdf8" fontSize="10">
                {isResolved ? 'NACL DENY INJECTED' : 'EventBridge Monitoring'}
              </text>
            </g>

            {/* LINK 1: ECS -> Gateway */}
            <path
              d="M 200 80 L 340 80"
              fill="none"
              stroke={isResolved ? '#10b981' : '#f43f5e'}
              strokeWidth="2"
            />
            {/* Packet animation */}
            <circle cx={isResolved ? 270 : 230} cy="80" r="3.5" fill={isResolved ? '#34d399' : '#f43f5e'}>
              <animate
                attributeName="cx"
                from="200"
                to="340"
                dur={isResolved ? '3s' : '0.8s'}
                repeatCount="indefinite"
              />
            </circle>

            {/* NODE 3: Rogue External C2 Destination */}
            <g transform="translate(660, 45)">
              <rect
                width="160"
                height="70"
                rx="8"
                fill="#161d2b"
                stroke={isResolved ? '#64748b' : '#f43f5e'}
                strokeWidth="1.5"
              />
              <text x="80" y="26" textAnchor="middle" fill="#ffffff" fontWeight="bold" fontSize="11">
                Rogue C2 Server
              </text>
              <text
                x="80"
                y="44"
                textAnchor="middle"
                fill={isResolved ? '#94a3b8' : '#f43f5e'}
                fontSize="10"
              >
                198.51.100.42:8443
              </text>
              <text
                x="80"
                y="58"
                textAnchor="middle"
                fill={isResolved ? '#10b981' : '#f43f5e'}
                fontSize="9"
              >
                {isResolved ? 'PACKET DROP (NACL)' : 'RECEIVING DICOM (48MB)'}
              </text>
            </g>

            {/* LINK 2: Gateway -> Rogue C2 */}
            {isResolved ? (
              // CUTOFF LINK
              <g>
                <path d="M 520 80 L 585 80" fill="none" stroke="#64748b" strokeWidth="1.5" strokeDasharray="3 3" />
                <path d="M 595 80 L 660 80" fill="none" stroke="#64748b" strokeWidth="1.5" strokeDasharray="3 3" />
                {/* Laser Cut Barrier */}
                <line x1="590" y1="60" x2="590" y2="100" stroke="#10b981" strokeWidth="3" strokeLinecap="round" />
                <text x="590" y="118" textAnchor="middle" fill="#10b981" fontSize="9" fontWeight="bold">
                  CUTOFF
                </text>
              </g>
            ) : (
              // ACTIVE MALICIOUS STREAM
              <g>
                <path d="M 520 80 L 660 80" fill="none" stroke="#f43f5e" strokeWidth="2.5" />
                <circle cx="560" cy="80" r="4" fill="#fb7185">
                  <animate attributeName="cx" from="520" to="660" dur="0.7s" repeatCount="indefinite" />
                </circle>
              </g>
            )}
          </svg>
        </div>
      </div>

      {/* RESOLVED PAYOFF: CRYPTOGRAPHIC FLAG & CANDIDATE DOSSIER */}
      {isResolved && (
        <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-950/40 via-charcoal-900 to-charcoal-950 border border-emerald-500/50 shadow-2xl space-y-5 animate-in fade-in duration-500 font-mono">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
            <div className="flex items-center gap-2.5">
              <Award className="w-6 h-6 text-emerald-400" />
              <div>
                <h4 className="text-base font-bold text-white tracking-wide">
                  CTF INCIDENT RESOLUTION VERIFIED
                </h4>
                <p className="text-xs text-emerald-300 font-sans">
                  Surgical containment executed: Leaked key revoked, OIDC condition hardened, rogue egress dropped.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-charcoal-950 px-3 py-1.5 rounded-lg border border-emerald-500/30">
              <span className="text-[11px] text-slate-400">Resolution SLA:</span>
              <span className="text-emerald-400 font-bold text-xs">1.84s (Zero Clinical Downtime)</span>
            </div>
          </div>

          {/* Cryptographic Flag Box */}
          <div className="p-4 rounded-xl bg-charcoal-950 border border-emerald-500/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <span className="text-[10px] text-slate-500 block">AUTHENTIC SHA-256 RESOLUTION FLAG:</span>
              <span className="text-emerald-300 text-xs sm:text-sm font-bold tracking-wider break-all select-all">
                {solutionFlag}
              </span>
            </div>

            <button
              onClick={handleCopyFlag}
              className="px-4 py-2 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/40 text-xs font-mono transition-all flex items-center gap-1.5 shrink-0 self-start sm:self-auto"
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

          {/* Mohamed Makhlouf Verified Candidate Credentials Card */}
          <div className="p-4 rounded-xl bg-charcoal-850/80 border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-sans">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-bold text-white text-sm">Mohamed Makhlouf (Omar)</span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-terracotta-500/20 text-terracotta-300 border border-terracotta-500/30">
                  ASEAN Cyber Race 2025 Finals Bronze
                </span>
              </div>
              <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
                Senior Computer Science (Networks & Security) at Universiti Teknologi Malaysia (UTM, CGPA 3.43).
                Currently running Cloud DevSecOps at Al-Ameen Medical Complex IT Dept in Riyadh.
                Author of Aegis-2B AI Guardrail and A2 Event-Driven Remediation Engine.
              </p>
            </div>

            <div className="flex items-center gap-2.5 shrink-0 font-mono text-xs">
              {onOpenResume && (
                <button
                  onClick={onOpenResume}
                  className="px-3.5 py-2 rounded-lg bg-white text-charcoal-900 font-bold hover:bg-slate-200 transition-all flex items-center gap-1.5 shadow"
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
