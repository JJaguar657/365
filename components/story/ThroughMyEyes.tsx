"use client";

import { motion } from "framer-motion";
import Section from "@/components/layout/Section";
import { story } from "@/content/story";
import ChapterNext from "./ChapterNext";

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
          {story.throughMyEyes.chapter}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 text-center font-serif text-3xl text-balance sm:text-5xl md:text-7xl"
        >
          {story.throughMyEyes.title}
        </motion.h2>

        <div className="mt-24 space-y-24">
          {story.throughMyEyes.truths.map((truth, index) => (
            <motion.div
              key={truth.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="text-center"
            >
              <h3 className="font-serif text-3xl text-white sm:text-4xl md:text-5xl">{truth.title}</h3>
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
          {story.throughMyEyes.closing[0]}
          <br />
          {story.throughMyEyes.closing[1]}
        </motion.p>

        <div className="mt-14 flex justify-center">
          <ChapterNext {...story.throughMyEyes.next} />
        </div>
      </div>
    </Section>
  );
}
