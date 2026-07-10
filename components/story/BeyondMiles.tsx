"use client";

import { motion } from "framer-motion";
import Section from "@/components/layout/Section";
import RevealText from "./RevealText";

export default function BeyondMiles() {
  return (
    <Section id="chapter-6" className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-32">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-[180px]" />
      </div>

      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: "65%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.6 }}
        className="absolute left-1/2 top-24 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-zinc-600 to-transparent"
      />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="uppercase tracking-[0.45em] text-zinc-500"
        >
          Chapter VI
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-6 font-serif text-6xl md:text-8xl"
        >
          Beyond Miles
        </motion.h2>

        <div className="mt-24 space-y-14">
          <RevealText delay={0.2} className="text-2xl leading-relaxed text-zinc-300 md:text-4xl">
            We never really needed the same place...
          </RevealText>

          <RevealText delay={1.2} className="text-2xl leading-relaxed text-zinc-300 md:text-4xl">
            to feel like we were never far apart.
          </RevealText>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 2 }}
            className="py-10"
          >
            <div className="text-7xl md:text-8xl">📍──────────────📍</div>

            <p className="mt-6 text-xs uppercase tracking-[0.35em] text-zinc-500">Different Cities</p>
          </motion.div>

          <RevealText delay={2.8} className="text-xl leading-relaxed text-zinc-400 md:text-3xl">
            Some of our best conversations happened through a screen.
          </RevealText>

          <RevealText delay={3.8} className="text-xl leading-relaxed text-zinc-300 md:text-3xl">
            Somehow, a call could make an ordinary day lighter...
          </RevealText>

          <RevealText delay={4.8} className="text-xl leading-relaxed text-zinc-300 md:text-3xl">
            ...and a difficult one feel a little less heavy.
          </RevealText>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 5.8 }}
            className="pt-12"
          >
            <p className="font-serif text-4xl text-white md:text-6xl">Distance</p>
            <p className="mt-4 text-lg text-zinc-500">was never measured in kilometers.</p>
          </motion.div>

          <RevealText delay={6.8} className="text-xl leading-relaxed text-zinc-300 md:text-3xl">
            It was measured by how often we chose to be there for each other.
          </RevealText>
        </div>
      </div>
    </Section>
  );
}
