"use client";

import { motion } from "framer-motion";
import Section from "@/components/layout/Section";
import RevealText from "./RevealText";
import { story } from "@/content/story";
import ChapterNext from "./ChapterNext";

export default function BeforeUs() {
  return (
    <Section id="chapter-1" className="flex items-center justify-center px-8">
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: 160 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
        }}
        className="absolute left-1/2 top-24 w-px -translate-x-1/2 bg-zinc-800"
      />

      <div className="relative z-10 max-w-4xl text-center">
        <motion.p
          initial={{
            opacity: 0,
            letterSpacing: "1em",
          }}
          whileInView={{
            opacity: 1,
            letterSpacing: ".35em",
          }}
          transition={{
            duration: 1,
          }}
          className="mb-12 uppercase tracking-[0.35em] text-zinc-500"
        >
          {story.beforeUs.chapter}
        </motion.p>

        <motion.h2
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="font-serif text-4xl text-balance sm:text-6xl md:text-8xl"
        >
          {story.beforeUs.title}
        </motion.h2>

        <div className="mt-16 space-y-10">
          <RevealText
            delay={0.2}
            className="text-2xl leading-relaxed text-zinc-300 md:text-3xl"
          >
            {story.beforeUs.lines[0].text}
          </RevealText>

          <RevealText
            delay={1.2}
            className="text-xl leading-relaxed text-zinc-500 md:text-2xl"
          >
            {story.beforeUs.lines[1].text}
          </RevealText>

          <RevealText
            delay={2.4}
            className="text-xl leading-relaxed text-zinc-400 md:text-2xl"
          >
            {story.beforeUs.lines[2].text}
          </RevealText>
        </div>

        <div className="mt-14 flex justify-center">
          <ChapterNext {...story.beforeUs.next} />
        </div>
      </div>

      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 0.35,
        }}
        transition={{
          delay: 3,
        }}
        className="absolute bottom-14 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.45em] text-zinc-600"
      >
        {story.beforeUs.scrollHint}
      </motion.div>
    </Section>
  );
}
