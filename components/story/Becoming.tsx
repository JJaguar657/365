"use client";

import { motion } from "framer-motion";
import Section from "@/components/layout/Section";
import { story } from "@/content/story";
import ChapterNext from "./ChapterNext";

export default function Becoming() {
  return (
    <Section id="chapter-10" className="relative min-h-screen overflow-hidden px-6 py-32">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/5 blur-[220px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center uppercase tracking-[0.45em] text-zinc-500"
        >
          {story.becoming.chapter}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 text-center font-serif text-4xl text-balance sm:text-6xl md:text-8xl"
        >
          {story.becoming.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-10 max-w-3xl text-center text-xl leading-9 text-zinc-400"
        >
          {story.becoming.intro[0]}
          <br />
          {story.becoming.intro[1]}
        </motion.p>

        <div className="relative mx-auto mt-28 max-w-4xl">
          <div className="absolute left-6 top-0 h-full w-px bg-zinc-800" />

          {story.becoming.milestones.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="relative mb-24 pl-20"
            >
              <div className="absolute left-0 top-2 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-xl backdrop-blur-md">
                {item.emoji}
              </div>

              <h3 className="font-serif text-4xl text-white">{item.title}</h3>
              <p className="mt-5 text-lg leading-9 text-zinc-400">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mx-auto mt-16 max-w-3xl text-center"
        >
          <p className="font-serif text-4xl leading-relaxed text-white md:text-5xl">{story.becoming.promise}</p>

          <p className="mt-8 text-2xl leading-relaxed text-zinc-300">
            {story.becoming.closing.map((line) => <span key={line}>{line} </span>)}
          </p>

          <p className="mt-10 text-3xl font-serif text-emerald-300">
            {story.becoming.finalLine}
          </p>
        </motion.div>

        <div className="mt-14 flex justify-center">
          <ChapterNext {...story.becoming.next} />
        </div>
      </div>
    </Section>
  );
}
