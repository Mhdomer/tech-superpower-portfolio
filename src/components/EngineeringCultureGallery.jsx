import React, { useState } from 'react';
import { Sparkles, Terminal, ShieldAlert, Heart, ThumbsUp, Maximize2, Coffee, Flame } from 'lucide-react';

export default function EngineeringCultureGallery({ onSelectImage }) {
  const [likes, setLikes] = useState({
    anti_slop: 42,
    toilet_hacker: 89,
    frieren: 64,
    mayuri: 53,
    matrix: 38,
  });

  const handleLike = (id, e) => {
    e.stopPropagation();
    setLikes((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  const cultureCards = [
    {
      id: 'anti_slop',
      title: 'Bad Design is Better Than AI Slop',
      tagline: 'Handcrafted engineering over synthetic filler',
      image: '/assets/culture/anti-ai-slop-retro.jpg',
      badge: 'Core Philosophy',
      badgeColor: 'text-cyber-rose bg-cyber-rose/10 border-cyber-rose/30',
      caption:
        'Why handcrafted code, real pytest suites, and human benchmarks win every time. If a system was not built by an engineer struggling through terminal crashes at midnight, it has no soul.',
      tags: ['#AntiSlop', '#HumanEngineer', '#AuthenticCraft'],
    },
    {
      id: 'toilet_hacker',
      title: 'The 3:14 AM Incident Response',
      tagline: 'PagerDuty waits for no one',
      image: '/assets/culture/on-call-toilet-hacker.jpg',
      badge: 'On-Call Reality',
      badgeColor: 'text-cyber-amber bg-cyber-amber/10 border-cyber-amber/30',
      caption:
        'Reigen Arataka energy: PagerDuty fires in production, an S3 ACL drifted public, and you are hotfixing Lambda boto3 scripts with sunglasses on from whatever location you happen to be standing or sitting in.',
      tags: ['#DevSecOpsOnCall', '#ZeroDowntime', '#TrenchLife'],
    },
    {
      id: 'frieren',
      title: 'The 1,000-Year Python Journey',
      tagline: 'Mastering syntax one millennium at a time',
      image: '/assets/culture/frieren-python.jpg',
      badge: 'Language Craft',
      badgeColor: 'text-cyber-emerald bg-cyber-emerald/10 border-cyber-emerald/30',
      caption:
        'Frieren quietly studying Python AST nodes to optimize the Aegis-2B regex trie parser. Even thousand-year-old mages need to understand Python list comprehensions and memory references.',
      tags: ['#Frieren', '#Python312', '#Aegis2B'],
    },
    {
      id: 'mayuri',
      title: 'Tutturu: Bash Scripts That Run Production',
      tagline: 'The unheralded glue of cloud infrastructure',
      image: '/assets/culture/mayuri-bash.jpg',
      badge: 'POSIX Power',
      badgeColor: 'text-cyber-cyan bg-cyber-cyan/10 border-cyber-cyan/30',
      caption:
        'Mayuri Shiina holding up the true foundation of modern DevOps: sed, awk, grep, and POSIX pipes gluing AWS CLI automation together across CachyOS Linux workstations.',
      tags: ['#SteinsGate', '#BashAutomation', '#CachyOS'],
    },
    {
      id: 'matrix',
      title: 'Zero-Trust Anomaly in the Crowd',
      tagline: 'Finding the rogue API signature in enterprise traffic',
      image: '/assets/culture/matrix-anomaly.jpg',
      badge: 'Threat Hunting',
      badgeColor: 'text-cyber-mint bg-cyber-mint/10 border-cyber-mint/30',
      caption:
        'Zero-trust security in one frame: isolating the single unauthorized IAM role escalation in a crowd of mundane corporate API requests. Signal over noise.',
      tags: ['#ThreatHunting', '#ZeroTrust', '#CloudTrail'],
    },
  ];

  return (
    <section id="culture" className="py-20 border-t border-white/5 relative bg-charcoal-900/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Ziad Sharara 2-line layout) */}
        <div className="mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase leading-none">
            In The Trenches<br />
            <span className="text-terracotta-500">Culture & Memes.</span>
          </h2>
          <p className="text-slate-400 text-sm mt-3 max-w-xl font-sans">
            Behind the telemetry graphs and cloud architectures is a real student engineer in the trenches: debugging on call, refusing AI-generated fluff, and finding joy in terminal craft.
          </p>
        </div>

        {/* Culture Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cultureCards.map((card) => (
            <div
              key={card.id}
              className="cyber-card rounded-2xl p-5 border border-white/10 bg-charcoal-850 flex flex-col justify-between group hover:-translate-y-1 transition-all"
            >
              <div>
                {/* Image Container with Enlarge Trigger */}
                <div
                  onClick={() => onSelectImage(card.image, card.title)}
                  className="rounded-xl overflow-hidden border border-white/10 bg-charcoal-950 aspect-[4/3] mb-4 cursor-pointer relative group/img flex items-center justify-center"
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-charcoal-950/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-mono text-white">
                    <Maximize2 className="w-4 h-4 text-cyber-emerald" />
                    <span>Click to Enlarge</span>
                  </div>
                </div>

                {/* Badge & Upvote Button */}
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border font-semibold ${card.badgeColor}`}
                  >
                    {card.badge}
                  </span>

                  <button
                    onClick={(e) => handleLike(card.id, e)}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-charcoal-800 hover:bg-charcoal-750 border border-white/10 text-xs font-mono text-slate-300 hover:text-cyber-emerald transition-all"
                    title="Give a nod to real engineering"
                  >
                    <ThumbsUp className="w-3.5 h-3.5" />
                    <span>{likes[card.id]}</span>
                  </button>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-base font-bold text-white mb-1 group-hover:text-cyber-emerald transition-colors leading-snug">
                  {card.title}
                </h3>
                <p className="text-xs text-cyber-cyan font-mono mb-2">{card.tagline}</p>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">{card.caption}</p>
              </div>

              {/* Tags */}
              <div className="pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
                {card.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-charcoal-800 text-slate-400 border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
