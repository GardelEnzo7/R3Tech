"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Server, Cpu, Code2 } from "lucide-react";
import React from "react";

export default function TechIllustrationClient() {
  return (
    <div className="relative mx-auto h-[560px] w-full max-w-[380px] lg:max-w-[540px] lg:h-auto lg:aspect-square">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
        className="absolute inset-6 lg:inset-8 rounded-full border border-blue-300/15"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 52, repeat: Infinity, ease: "linear" }}
        className="absolute inset-14 lg:inset-16 rounded-full border border-cyan-200/10"
      />
      <div className="absolute inset-0 rounded-full bg-blue-500/5 blur-3xl lg:hidden" />
      <div className="absolute inset-10 lg:inset-10 rounded-[2rem] bg-blue-500/10 blur-3xl" />

      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="glass absolute left-3 top-12 w-[180px] rounded-2xl p-4 lg:left-6 lg:top-20 lg:w-52"
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
        className="glass absolute right-3 top-14 w-[138px] rounded-2xl p-4 lg:right-5 lg:top-10 lg:w-44"
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
        className="glass absolute left-1/2 bottom-10 -translate-x-1/2 w-[180px] rounded-2xl p-5 lg:bottom-20 lg:left-auto lg:translate-x-0 lg:right-8 lg:w-56"
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
            <div className="relative h-28 w-60">
              <Image src="/r3Tech-logo-transparent.webp" alt="R3 Tech" fill className="object-contain drop-shadow-[0_0_22px_rgba(59,130,246,0.34)]" priority />
            </div>
          </div>
          <p className="brand-type text-sm font-bold uppercase tracking-[0.22em] text-blue-200">Tech</p>
        </div>
      </div>
    </div>
  );
}
