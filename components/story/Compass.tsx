"use client";

import { motion } from "framer-motion";
import Section from "@/components/layout/Section";
import RevealText from "./RevealText";

export default function Compass() {
  return (
    <Section id="chapter-5" className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-32">
      <motion.div
        animate={{
          rotate: [0, 6, 0, -6, 0],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 flex items-center justify-center opacity-[0.05]"
      >
        <svg width="650" height="650" viewBox="0 0 650 650" fill="none">
          <circle cx="325" cy="325" r="250" stroke="white" strokeWidth="1" />
          <circle cx="325" cy="325" r="140" stroke="white" strokeWidth="1" />
          <line x1="325" y1="70" x2="325" y2="580" stroke="white" />
          <line x1="70" y1="325" x2="580" y2="325" stroke="white" />
          <polygon points="325,105 340,325 325,285 310,325" fill="white" />
        </svg>
      </motion.div>

      <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-500/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="uppercase tracking-[0.4em] text-zinc-500"
        >
          Chapter V
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-6 font-serif text-6xl md:text-8xl"
        >
          Compass
        </motion.h2>

        <div className="mt-24 space-y-16">
          <RevealText delay={0.2} className="text-2xl leading-relaxed text-zinc-300 md:text-4xl">
            Life has a funny way of making us question our own direction.
          </RevealText>

          <RevealText delay={1} className="text-xl leading-relaxed text-zinc-400 md:text-3xl">
            There were days when I wasn't searching for answers. I was simply trying to make sense of everything around me.
          </RevealText>

          <RevealText delay={2} className="text-xl leading-relaxed text-zinc-300 md:text-3xl">
            You never told me what path to take.
          </RevealText>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 3 }}
            className="flex flex-wrap justify-center gap-4 text-2xl font-light md:text-4xl"
          >
            {['You', 'listened.', 'Questioned.', 'Encouraged.', 'Stayed.'].map((word, index) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.35, duration: 0.5 }}
                className={word === 'Stayed.' ? 'font-medium text-rose-400' : 'text-zinc-200'}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>

          <RevealText delay={5} className="text-xl leading-relaxed text-zinc-300 md:text-3xl">
            Somewhere along the way, without even realizing it, I started finding my own direction again.
          </RevealText>

          <RevealText delay={6.5} className="text-2xl font-serif leading-relaxed text-white md:text-4xl">
            A compass never decides where you should go. It simply reminds you where north is.
          </RevealText>

          <RevealText delay={8} className="mx-auto max-w-3xl text-lg leading-relaxed text-zinc-400 md:text-2xl">
            Thank you for never trying to write my story... only for helping me become a better author of it.
          </RevealText>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.25 }}
        viewport={{ once: true }}
        transition={{ delay: 8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.45em] text-zinc-600"
      >
        Keep Going
      </motion.div>
    </Section>
  );
}
