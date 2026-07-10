"use client";

import { motion } from "framer-motion";
import Section from "@/components/layout/Section";

const truths = [
  {
    title: "You care deeply.",
    body: "Sometimes more than people ever realize.",
  },
  {
    title: "You celebrate others.",
    body: "Even when you're quietly fighting your own battles.",
  },
  {
    title: "You think you're ordinary.",
    body: "But ordinary people don't leave this kind of impact on someone's life.",
  },
  {
    title: "You overthink your flaws.",
    body: "Yet you rarely notice how much comfort you bring to others.",
  },
  {
    title: "You inspire quietly.",
    body: "Not through speeches, but through the way you keep showing up and becoming a better version of yourself.",
  },
  {
    title: "Your kindness isn't loud.",
    body: "That's exactly what makes it beautiful.",
  },
  {
    title: "You don't try to be unforgettable.",
    body: "Yet somehow... you are.",
  },
];

export default function ThroughMyEyes() {
  return (
    <Section id="chapter-9" className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center uppercase tracking-[0.45em] text-zinc-500"
        >
          Chapter IX
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 text-center font-serif text-5xl md:text-7xl"
        >
          If You Could See Yourself Through My Eyes
        </motion.h2>

        <div className="mt-24 space-y-24">
          {truths.map((truth, index) => (
            <motion.div
              key={truth.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="text-center"
            >
              <h3 className="font-serif text-4xl text-white md:text-5xl">{truth.title}</h3>
              <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-zinc-400 md:text-2xl">{truth.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="mt-32 text-center font-serif text-3xl text-rose-300 md:text-4xl"
        >
          I just hope... one day,
          <br />
          you see yourself the way the people who love you already do.
        </motion.p>
      </div>
    </Section>
  );
}
