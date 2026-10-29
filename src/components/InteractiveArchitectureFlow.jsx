import React, { useState, useEffect } from 'react';
import {
  Globe,
  Cloud,
  Server,
  Zap,
  Shield,
  Activity,
  Play,
  CheckCircle2,
  Lock,
  ArrowRight,
  Info,
} from 'lucide-react';

const NODES = [
  {
    id: 'client',
    title: 'Client Browser',
    category: 'Ingress',
    metric: '<35ms',
    metricLabel: 'TLS Handshake',
    icon: Globe,
    protocol: 'HTTPS / TLS 1.3',
    description: 'Global visitors, recruiters, and AWS hackathon judges initiating secure single-page application requests.',
    detail: 'Edge-negotiated HTTP/2 session with strict ALPN and ECDSA cipher suites for fast initial handshake.',
  },
  {
    id: 'amplify',
    title: 'AWS Amplify Edge',
    category: 'Global CDN',
    metric: '<15ms',
    metricLabel: 'Anycast Edge Latency',
    icon: Cloud,
    protocol: 'Amazon CloudFront Global Edge',
    description: 'CloudFront edge distribution terminating SSL and serving immutable hashed static bundles from 600+ PoPs.',
    detail: 'Automated CI/CD git pushes via amplify.yml with instant edge cache invalidation on main branch commits.',
  },
  {
    id: 's3',
    title: 'Amazon S3 Origin',
    category: 'Static Origin',
    metric: '99.98%',
    metricLabel: 'Observed Uptime',
    icon: Server,
    protocol: 'S3 Private Origin Access Control (OAC)',
    description: 'Static website hosting origin storing pre-rendered SPA assets, WebP images, and verified PDF resume.',
    detail: 'Enforces S3 Block Public Access with OAC policy restricting GET requests strictly to CloudFront distribution.',
  },
  {
    id: 'bedrock',
    title: 'Amazon Bedrock / EventBridge',
    category: 'AI Gateway & Bus',
    metric: '<115ms',
    metricLabel: 'Dual-Tier Latency',
    icon: Zap,
    protocol: 'Boto3 SDK / JSON Event Bus',
    description: 'AI foundation model gateway (Titan / Claude) and real-time AWS EventBridge bus routing audit signals.',
    detail: 'Routes incoming prompts to deterministic regex triage before authorizing foundation model token generation.',
  },
  {
    id: 'lambda',
    title: 'AWS Lambda Guardrail',
    category: 'Compute & Remediation',
    metric: '<0.8ms / <2.4s',
    metricLabel: 'Triage / MTTR',
    icon: Shield,
    protocol: 'Python 3.12 Serverless Runtime',
    description: 'Aegis-2B sub-millisecond regex trie and A2 event-driven automated S3 public access remediation scripts.',
    detail: 'Sub-0.8ms p99 signature triage blocks prompt injections instantly; A2 remediates misconfigurations in 2.18s.',
  },
  {
    id: 'cloudwatch',
    title: 'Amazon CloudWatch',
    category: 'Audit & Telemetry',
    metric: 'Sub-second',
    metricLabel: 'Telemetry Stream',
    icon: Activity,
    protocol: 'CloudWatch Logs & Metrics API',
    description: 'Centralized observability logging every security triage decision, token consumption metric, and latency benchmark.',
    detail: 'Streams structured JSON audit logs with zero sensitive PII retention, driving high-resolution latency dashboards.',
  },
];

export default function InteractiveArchitectureFlow() {
  const [selectedNode, setSelectedNode] = useState(NODES[0]);
  const [simulating, setSimulating] = useState(false);
  const [activeStepIndex, setActiveStepIndex] = useState(-1);
  const [accumulatedMs, setAccumulatedMs] = useState(0);

  const startSimulation = () => {
    if (simulating) return;
    setSimulating(true);
    setActiveStepIndex(0);
    setSelectedNode(NODES[0]);
    setAccumulatedMs(12);

    const stepIntervals = [
      { nodeIdx: 1, ms: 27 },
      { nodeIdx: 2, ms: 42 },
      { nodeIdx: 3, ms: 88 },
      { nodeIdx: 4, ms: 96 },
      { nodeIdx: 5, ms: 108 },
    ];

    let current = 0;
    const interval = setInterval(() => {
      current++;
      if (current < stepIntervals.length) {
        const step = stepIntervals[current];
        setActiveStepIndex(step.nodeIdx);
        setSelectedNode(NODES[step.nodeIdx]);
        setAccumulatedMs(step.ms);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setSimulating(false);
          setActiveStepIndex(-1);
        }, 1200);
      }
    }, 650);
  };

  return (
    <div
      className="p-5 sm:p-7 rounded-2xl border mb-12 relative overflow-hidden transition-all"
      style={{
        background: 'var(--surface)',
        borderColor: 'var(--line)',
      }}
    >
      {/* Header and Simulator Trigger */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span
              className="w-2 h-2 rounded-full"
              style={{ background: 'var(--brand-coral)' }}
            />
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider opacity-75">
              Live Pipeline Map // Hover or Click Any Node
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight uppercase leading-tight">
            Interactive AWS <span style={{ color: 'var(--brand-coral)' }}>Architecture Flow</span>
          </h3>
        </div>

        <button
          onClick={startSimulation}
          disabled={simulating}
          className="px-4 py-2 rounded-xl text-xs font-mono font-bold flex items-center justify-center gap-2 transition-all shadow-md active:scale-95 text-white disabled:opacity-60 whitespace-nowrap self-start sm:self-auto"
          style={{ background: 'var(--brand-coral)' }}
        >
          <Play className={`w-3.5 h-3.5 ${simulating ? 'animate-spin' : 'fill-current'}`} />
          <span>{simulating ? `Tracing Flow (${accumulatedMs}ms)...` : 'Simulate Request Flow'}</span>
        </button>
      </div>

      {/* Interactive Node Flow Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6 relative">
        {NODES.map((node, index) => {
          const isSelected = selectedNode.id === node.id;
          const isActiveSimStep = activeStepIndex === index;
          const IconComp = node.icon;

          return (
            <div
              key={node.id}
              onClick={() => setSelectedNode(node)}
              onMouseEnter={() => !simulating && setSelectedNode(node)}
              className={`p-3.5 rounded-xl border cursor-pointer transition-all flex flex-col justify-between relative group ${
                isSelected || isActiveSimStep
                  ? 'scale-[1.03] shadow-lg ring-1'
                  : 'hover:border-white/30 opacity-90'
              }`}
              style={{
                background:
                  isSelected || isActiveSimStep ? 'var(--surface-sheet)' : 'var(--surface-soft)',
                borderColor:
                  isSelected || isActiveSimStep ? 'var(--brand-coral)' : 'var(--line)',
                ringColor: 'var(--brand-coral)',
              }}
            >
              {/* Connector Arrow on Desktop */}
              {index < NODES.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 pointer-events-none opacity-40">
                  <ArrowRight className="w-3.5 h-3.5" style={{ color: 'var(--brand-coral)' }} />
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-2">
                  <div
                    className="p-1.5 rounded-lg border"
                    style={{
                      background: 'var(--surface)',
                      borderColor: 'var(--line)',
                      color: isSelected ? 'var(--brand-coral)' : 'inherit',
                    }}
                  >
                    <IconComp className="w-4 h-4" />
                  </div>
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded border opacity-70">
                    0{index + 1}
                  </span>
                </div>

                <div className="text-[10px] font-mono uppercase tracking-wider opacity-60 mb-0.5">
                  {node.category}
                </div>
                <h4 className="text-xs font-bold leading-snug line-clamp-2 mb-2">
                  {node.title}
                </h4>
              </div>

              <div
                className="pt-2 border-t mt-1 flex items-baseline justify-between"
                style={{ borderColor: 'var(--line)' }}
              >
                <span
                  className="font-mono text-xs font-bold"
                  style={{ color: 'var(--brand-coral)' }}
                >
                  {node.metric}
                </span>
                <span className="text-[9px] font-mono opacity-60 truncate ml-1">
                  {node.metricLabel}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* SVG Pipeline Visualization Canvas */}
      <div
        className="rounded-xl border p-4 mb-6 relative overflow-hidden"
        style={{
          background: 'var(--paper-deep)',
          borderColor: 'var(--line)',
        }}
      >
        <div className="flex items-center justify-between text-[11px] font-mono mb-2 opacity-75">
          <span className="flex items-center gap-1.5">
            <Lock className="w-3 h-3 text-emerald-500" />
            <span>End-to-End IAM Least-Privilege & Edge Pipeline</span>
          </span>
          <span className="text-[10px]">Region: me-central-1 (Middle East)</span>
        </div>

        {/* Animated SVG Path Graphic */}
        <div className="relative py-2">
          <svg className="w-full h-12 overflow-visible" viewBox="0 0 900 48">
            {/* Base Track */}
            <path
              d="M 20 24 H 880"
              fill="none"
              stroke="var(--line)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />

            {/* Animated Active Track */}
            <path
              d="M 20 24 H 880"
              fill="none"
              stroke="var(--brand-coral)"
              strokeWidth="2"
              strokeDasharray="8 6"
              className={simulating ? 'animate-pulse' : ''}
              style={{
                opacity: 0.85,
                animation: 'dashMove 20s linear infinite',
              }}
            />

            {/* 6 Step Checkpoints along the line */}
            {[20, 192, 364, 536, 708, 880].map((cx, i) => {
              const isSelectedDot = selectedNode.id === NODES[i].id;
              const isActiveSim = activeStepIndex === i;

              return (
                <g key={i} className="cursor-pointer" onClick={() => setSelectedNode(NODES[i])}>
                  <circle
                    cx={cx}
                    cy={24}
                    r={isSelectedDot || isActiveSim ? 8 : 5}
                    fill={isSelectedDot || isActiveSim ? 'var(--brand-coral)' : 'var(--surface)'}
                    stroke="var(--band-bg)"
                    strokeWidth="2"
                    className="transition-all duration-300"
                  />
                  {isActiveSim && (
                    <circle
                      cx={cx}
                      cy={24}
                      r={14}
                      fill="none"
                      stroke="var(--brand-coral)"
                      strokeWidth="1.5"
                      className="animate-ping"
                    />
                  )}
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {/* Selected Node Telemetry HUD */}
      {selectedNode && (
        <div
          className="p-4 sm:p-5 rounded-xl border flex flex-col md:flex-row items-start md:items-center justify-between gap-4 transition-all"
          style={{
            background: 'var(--surface-sheet)',
            borderColor: 'var(--line)',
          }}
        >
          <div className="space-y-1 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className="text-[11px] font-mono px-2 py-0.5 rounded font-bold"
                style={{
                  background: 'var(--surface)',
                  color: 'var(--brand-coral)',
                  border: '1px solid var(--line)',
                }}
              >
                {selectedNode.protocol}
              </span>
              <span className="text-xs font-bold font-mono">{selectedNode.title}</span>
            </div>
            <p className="text-xs leading-relaxed opacity-85">{selectedNode.description}</p>
            <p className="text-[11px] leading-relaxed font-mono opacity-70 flex items-center gap-1.5 pt-1">
              <Info className="w-3.5 h-3.5 flex-shrink-0" style={{ color: 'var(--brand-coral)' }} />
              <span>{selectedNode.detail}</span>
            </p>
          </div>

          <div
            className="p-3 rounded-lg border font-mono flex flex-col items-start md:items-end flex-shrink-0 min-w-[170px]"
            style={{
              background: 'var(--surface)',
              borderColor: 'var(--line)',
            }}
          >
            <span className="text-[10px] uppercase tracking-wider opacity-60">Verified Telemetry</span>
            <span className="text-lg font-extrabold" style={{ color: 'var(--brand-coral)' }}>
              {selectedNode.metric}
            </span>
            <span className="text-[10px] opacity-75">{selectedNode.metricLabel}</span>
          </div>
        </div>
      )}
    </div>
  );
}
