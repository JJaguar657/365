"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import MouseGlow from "./MouseGlow";
import ParticleBackground from "./ParticleBackground";
import RevealText from "./RevealText";

export default function Landing() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 2200);
    return () => clearTimeout(timer);
  }, []);

  const scrollNext = () => {
    document.getElementById("chapter-1")?.scrollIntoView({ behavior: "smooth" });
  };

  if (!loaded) {
    return (
      <section className="fixed inset-0 z-50 flex items-center justify-center bg-[#050505]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="text-center"
        >
          <motion.h1
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
            className="font-serif text-8xl md:text-9xl"
          >
            365
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.55 }}
            transition={{ delay: 1 }}
            className="mt-6 text-sm tracking-[0.35em] uppercase text-zinc-400"
          >
            Loading memories...
          </motion.p>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050505] px-6">
      <MouseGlow />
      <ParticleBackground />

      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.08, 0.16, 0.08],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-rose-500 via-purple-500 to-blue-500 blur-[240px]"
        />
      </div>

      <div className="relative z-10 max-w-4xl text-center">
        <motion.h1
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          className="font-serif text-8xl md:text-[11rem] tracking-wide"
        >
          365
        </motion.h1>

        <div className="mt-12 space-y-10 text-center">
          <RevealText
            delay={0.5}
            className="text-xl leading-relaxed text-zinc-300 md:text-3xl"
          >
            Exactly one year ago, you were just another person I&apos;d yet to know.
          </RevealText>

          <RevealText
            delay={1.5}
            className="text-xl leading-relaxed text-zinc-300 md:text-3xl"
          >
            Today... you&apos;re one of the people I trust the most.
          </RevealText>

          <RevealText
            delay={2.5}
            className="text-lg leading-relaxed text-zinc-500 md:text-xl"
          >
            Funny how an ordinary year quietly became one of the most beautiful chapters of my life.
          </RevealText>
        </div>

        <motion.button
          onClick={scrollNext}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4 }}
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.97,
          }}
          className="group mt-16 rounded-full border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-xl transition-all duration-500 hover:border-rose-400 hover:bg-white hover:text-black"
        >
          Begin the story

          <span className="ml-3 inline-block transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>
        </motion.button>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ delay: 3 }}
        className="absolute bottom-8 right-8 text-xs uppercase tracking-[0.35em] text-zinc-600"
      >
        July 2025 — July 2026
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-500"
      >
        <ChevronDown />
      </motion.div>
    </section>
  );
}
