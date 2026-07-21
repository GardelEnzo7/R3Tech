/**
 * HeroTechNetwork.tsx
 *
 * Nota:
 * Este archivo es un punto de partida listo para integrar.
 * Conserva la estructura propuesta en la conversación y deja
 * espacio para que agregues más paths/nodos si lo deseás.
 */

"use client";

import { Code2, Cpu, Server } from "lucide-react";
import Image from "next/image";

export default function HeroTechNetwork() {
  return (
    <div className="relative mx-auto h-[520px] w-full max-w-[360px] overflow-visible">

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
        }}
      />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 360 520"
      >
        <defs>
          <linearGradient id="lineGradient">
            <stop offset="0%" stopColor="#2563EB"/>
            <stop offset="50%" stopColor="#38BDF8"/>
            <stop offset="100%" stopColor="#2563EB"/>
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="blur"/>
            <feMerge>
              <feMergeNode in="blur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        <path id="code-path"
          d="M95 145 C130 145 135 170 180 185"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          filter="url(#glow)"
          opacity=".45"
        />

        <path id="online-path"
          d="M275 170 C245 175 225 180 180 185"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          filter="url(#glow)"
          opacity=".45"
        />

        <path id="performance-path"
          d="M180 205 C180 250 235 280 250 330"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          filter="url(#glow)"
          opacity=".45"
        />

        <path id="icon-path"
          d="M180 205 C140 245 105 300 85 365"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          filter="url(#glow)"
          opacity=".45"
        />

        <path id="bottom-path"
          d="M85 365 C150 410 220 410 250 330"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          filter="url(#glow)"
          opacity=".45"
        />

        {[
          [180,185],
          [95,145],
          [275,170],
          [85,365],
          [250,330],
        ].map(([x,y],i)=>(
          <g key={i}>
            <circle cx={x} cy={y} r="8" fill="#38BDF8" opacity=".08"/>
            <circle cx={x} cy={y} r="4" fill="#38BDF8">
              <animate attributeName="r"
                       values="4;6;4"
                       dur="2.5s"
                       repeatCount="indefinite"/>
            </circle>
          </g>
        ))}

        {["code-path","online-path","performance-path","icon-path","bottom-path"].map((id,i)=>(
          <g key={id}>
            <circle r="3" fill="#38BDF8">
              <animateMotion
                dur={`${5+i}s`}
                repeatCount="indefinite">
                <mpath href={`#${id}`}/>
              </animateMotion>
            </circle>

            <circle r="1.5" fill="#93C5FD" opacity=".45">
              <animateMotion
                begin="-2s"
                dur={`${5+i}s`}
                repeatCount="indefinite">
                <mpath href={`#${id}`}/>
              </animateMotion>
            </circle>
          </g>
        ))}
      </svg>

      <div className="absolute left-1/2 top-[150px] -translate-x-1/2 z-20">
        {/* Adaptá este bloque según cómo importes el SVG */}
        <Image
          src="/r3tech-logo-hero.webp"
          alt="R3 Tech"
          width={110}
          height={110}
          priority
          className="w-24 h-auto"
        />
      </div>

      <div className="absolute left-2 top-20 float-code">
        <div className="w-[165px] rounded-2xl border border-white/10 bg-[#0E172A]/95 p-4 backdrop-blur-xl shadow-xl">
          <div className="mb-3 flex gap-2">
            <div className="h-2 w-2 rounded-full bg-blue-400"/>
            <div className="h-2 w-2 rounded-full bg-slate-500"/>
            <div className="h-2 w-2 rounded-full bg-slate-500"/>
          </div>
          <div className="space-y-2">
            <div className="h-2 rounded bg-blue-300"/>
            <div className="h-2 w-4/5 rounded bg-slate-500"/>
            <div className="h-2 w-2/3 rounded bg-slate-600"/>
          </div>
        </div>
      </div>

      <div className="absolute right-2 top-28 float-online">
        <div className="w-[120px] rounded-2xl border border-white/10 bg-[#0E172A]/95 p-3 backdrop-blur-xl shadow-xl">
          <div className="mb-3 flex items-center justify-between">
            <Server className="h-4 w-4 text-blue-300"/>
            <span className="rounded-full bg-emerald-500/20 px-2 py-1 text-[10px] text-emerald-300">
              ONLINE
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {Array.from({length:9}).map((_,i)=>(
              <div key={i} className="aspect-square rounded bg-slate-800"/>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute right-4 bottom-24 float-performance">
        <div className="w-[180px] rounded-2xl border border-white/10 bg-[#0E172A]/95 p-4 backdrop-blur-xl shadow-xl">
          <div className="flex gap-3">
            <div className="rounded-xl bg-blue-500/15 p-2">
              <Cpu className="h-5 w-5 text-blue-300"/>
            </div>
            <div>
              <p className="font-semibold text-white">IT Performance</p>
              <p className="text-xs text-slate-400">Optimization</p>
            </div>
          </div>
          <div className="mt-4 h-2 rounded-full bg-slate-700">
            <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"/>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-6 float-icon">
        <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-blue-400/20 bg-blue-500/10 backdrop-blur-xl shadow-xl">
          <Code2 className="h-8 w-8 text-blue-200"/>
        </div>
      </div>

    </div>
  );
}
