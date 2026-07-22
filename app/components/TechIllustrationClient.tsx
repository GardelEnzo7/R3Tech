"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Server, Cpu, Code2 } from "lucide-react";
import React from "react";

export default function TechIllustrationClient() {
  return (
    <div className="relative mx-auto h-[560px] w-full max-w-[380px] lg:max-w-[540px] lg:h-auto lg:aspect-square">
      <motion.svg
        aria-hidden="true"
        viewBox="0 0 380 560"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 h-full w-full text-blue-300/45"
        initial={{ opacity: 0.62 }}
        animate={{ opacity: [0.58, 0.9, 0.58] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <defs>
          <linearGradient id="circuitTrace" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.22" />
            <stop offset="48%" stopColor="#38BDF8" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.32" />
          </linearGradient>
          <filter id="circuitGlow">
            <feGaussianBlur stdDeviation="3.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {[
          "M8 194 H78 C104 194 112 224 138 224 H184 V184 H238 H286 V126 H352",
          "M30 386 H116 V338 H176 C204 338 216 306 244 306 H354",
          "M52 96 H136 V142 H194 V118 H276 H316 V80",
          "M22 470 H94 V426 H142 V388 H208 H246 V438 H322",
          "M326 92 V166 H292 C260 166 250 202 220 202 H172 V246 H138",
          "M354 416 H292 V374 H254 V338 H224 V284 H186",
          "M42 72 H172 V106 H218",
          "M14 282 H86 V250 H154 V216",
          "M338 250 H304 V224 H250",
          "M68 520 V476 H134 V448 H188",
          "M306 508 V456 H260 V430 H224",
          "M118 124 V166 H82 V206",
        ].map((path, index) => (
          <motion.path
            key={path}
            d={path}
            fill="none"
            stroke="url(#circuitTrace)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={index < 6 ? "1.45" : "1.05"}
            filter="url(#circuitGlow)"
            initial={{ pathLength: 0.28, opacity: 0.44 }}
            animate={{ pathLength: [0.28, 1, 0.52], opacity: [0.34, 0.9, 0.34] }}
            transition={{ duration: 5.2 + index * 0.28, repeat: Infinity, ease: "easeInOut", delay: index * 0.12 }}
          />
        ))}
        {[
          [78, 194],
          [184, 184],
          [238, 184],
          [286, 126],
          [352, 126],
          [116, 338],
          [244, 306],
          [354, 306],
          [136, 142],
          [194, 118],
          [276, 118],
          [316, 80],
          [94, 426],
          [208, 388],
          [246, 438],
          [326, 166],
          [254, 338],
          [42, 72],
          [172, 106],
          [86, 250],
          [154, 216],
          [304, 224],
          [68, 476],
          [134, 448],
          [306, 456],
          [260, 430],
        ].map(([cx, cy], index) => (
          <motion.circle
            key={`${cx}-${cy}`}
            cx={cx}
            cy={cy}
            r={index % 3 === 0 ? 3.2 : 2.4}
            fill={index % 4 === 0 ? "#38BDF8" : "#60A5FA"}
            initial={{ opacity: 0.34, scale: 0.9 }}
            animate={{ opacity: [0.28, 1, 0.28], scale: [0.88, 1.28, 0.88] }}
            transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut", delay: index * 0.11 }}
          />
        ))}
      </motion.svg>
      <div className="absolute inset-0 rounded-full bg-blue-500/5 blur-3xl lg:hidden" />
      <div className="absolute inset-10 lg:inset-10 rounded-[2rem] bg-blue-500/10 blur-3xl" />

      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="glass absolute left-3 top-12 w-[180px] rounded-2xl p-4 lg:-left-6 lg:top-20 lg:w-52"
      >
        <div className="mb-4 flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-blue-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-500" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/70" />
        </div>
        <div className="space-y-2">
          <span className="block h-2 rounded-full bg-blue-300/80" />
          <span className="block h-2 w-4/5 rounded-full bg-slate-500/50" />
          <span className="block h-2 w-2/3 rounded-full bg-slate-500/45" />
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 14, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        className="glass absolute right-0 -top-6 w-[138px] rounded-2xl p-4 lg:-right-5 lg:top-10 lg:w-44"
      >
        <div className="mb-5 flex items-center justify-between">
          <Server className="h-6 w-6 text-blue-300" aria-hidden="true" />
          <span className="brand-type rounded-full bg-emerald-400/[0.14] px-2.5 py-1 text-xs font-bold uppercase tracking-[0.1em] text-emerald-200">
            Online
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2 lg:grid-cols-4 lg:gap-2">
          {Array.from({ length: 12 }).map((_, index) => (
            <span key={index} className="h-7 rounded-md bg-white/[0.06]" />
          ))}
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -10, 0], x: [0, 8, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
        className="glass absolute left-1/2 bottom-4 -translate-x-1/2 w-[180px] rounded-2xl p-5 lg:bottom-20 lg:left-auto lg:translate-x-0 lg:-right-8 lg:w-56"
      >
        <div className="mb-4 flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-blue-500/[0.18]">
            <Cpu className="h-5 w-5 text-blue-200" aria-hidden="true" />
          </div>
          <div>
            <p className="text-sm font-semibold text-white">IT Performance</p>
            <p className="text-xs text-slate-400">Optimization</p>
          </div>
        </div>
        <div className="h-2 rounded-full bg-slate-700">
          <motion.div
            initial={{ width: "20%" }}
            animate={{ width: ["35%", "82%", "64%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="h-full rounded-full bg-blue-400"
          />
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-4 bottom-10 h-24 w-24 rounded-3xl border border-blue-300/20 bg-blue-500/[0.12] shadow-glow backdrop-blur-xl lg:left-10 lg:bottom-10"
      >
        <div className="grid h-full w-full place-items-center">
          <Code2 className="h-10 w-10 text-blue-200" aria-hidden="true" />
        </div>
      </motion.div>

      <div className="absolute left-1/2 top-[42%] grid -translate-x-1/2 -translate-y-1/2 place-items-center lg:top-1/2">
        <div className="text-center">
          <div className="mb-3 flex justify-center">
            <div className="top-16 rounded-full bg-[#08111f]/30 relative size-48 lg:size-56 lg:top-0 ring-1 ring-white/10 shadow-[0_0_80px_rgba(59,130,246,.20)] backdrop-blur-md">
              <div className="relative w-full h-full flex items-center justify-center">
                <Image src="/r3Tech-logo-transparent.webp" alt="R3 Tech" fill className="object-contain scale-90 drop-shadow-[0_0_22px_rgba(59,130,246,0.34)]" priority />
                <p className="absolute bottom-8 lg:bottom-10 brand-type text-sm font-bold uppercase tracking-[0.22em] text-blue-200">Tech</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
