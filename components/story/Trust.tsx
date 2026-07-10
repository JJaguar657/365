"use client";

import { motion } from "framer-motion";
import Section from "@/components/layout/Section";
import RevealText from "./RevealText";
import { story } from "@/content/story";
import ChapterNext from "./ChapterNext";

export default function Trust() {
  return (
    <Section id="chapter-3" className="relative flex min-h-screen items-center justify-center px-6 py-28">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-500/5 blur-[180px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center uppercase tracking-[0.4em] text-zinc-500"
        >
          {story.trust.chapter}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-6 text-center font-serif text-4xl text-balance sm:text-6xl md:text-8xl"
        >
          {story.trust.title}
        </motion.h2>

        <div className="mt-24 grid gap-8 md:grid-cols-2">
          {story.trust.pillars.map((item, index) => (
            <motion.div
              key={item.id}
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
                duration: 0.8,
              }}
              whileHover={{
                y: -6,
              }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all"
            >
              <h3 className="font-serif text-4xl">{item.title}</h3>

              <div className="mt-4 h-px w-16 bg-rose-400/60" />

              <p className="mt-6 leading-8 text-zinc-300">{item.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-28">
          <RevealText
            delay={0.4}
            className="mx-auto max-w-4xl text-center text-2xl leading-relaxed text-zinc-300 md:text-3xl"
          >
            {story.trust.closing}
          </RevealText>
        </div>

        <div className="mt-14 flex justify-center">
          <ChapterNext {...story.trust.next} />
        </div>
      </div>
    </Section>
  );
}
