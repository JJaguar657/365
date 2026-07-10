"use client";

import { motion } from "framer-motion";
import Section from "@/components/layout/Section";
import { story } from "@/content/story";
import ChapterNext from "./ChapterNext";

export default function Moments() {
  return (
    <Section id="chapter-7" className="relative flex min-h-screen items-center justify-center px-6 py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center uppercase tracking-[0.45em] text-zinc-500"
        >
          {story.moments.chapter}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 text-center font-serif text-4xl text-balance sm:text-6xl md:text-8xl"
        >
          {story.moments.title}
        </motion.h2>

        <div className="mt-24 space-y-10">
          {story.moments.items.map((memory, index) => (
            <motion.div
              key={memory.id}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
              }}
              whileHover={{
                y: -6,
              }}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="text-4xl">{memory.emoji}</div>
                <h3 className="font-serif text-4xl">{memory.title}</h3>
              </div>

              <p className="mt-6 text-lg leading-9 text-zinc-300">{memory.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mx-auto mt-24 max-w-3xl text-center"
        >
          <p className="font-serif text-4xl leading-relaxed text-white md:text-5xl">
            {story.moments.closingTitle}
          </p>

          <p className="mt-8 text-2xl leading-relaxed text-zinc-400">
            {story.moments.closingLines[0]}
            <br />
            {story.moments.closingLines[1]}
          </p>
        </motion.div>

        <div className="mt-14 flex justify-center">
          <ChapterNext {...story.moments.next} />
        </div>
      </div>
    </Section>
  );
}
