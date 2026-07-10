"use client";

import { motion } from "framer-motion";
import Section from "@/components/layout/Section";
import RevealText from "./RevealText";
import { story } from "@/content/story";
import ChapterNext from "./ChapterNext";

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
          {story.beyondMiles.chapter}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-6 font-serif text-4xl text-balance sm:text-6xl md:text-8xl"
        >
          {story.beyondMiles.title}
        </motion.h2>

        <div className="mt-24 space-y-14">
          <RevealText delay={0.2} className="text-2xl leading-relaxed text-zinc-300 md:text-4xl">
            {story.beyondMiles.opening[0]}
          </RevealText>

          <RevealText delay={1.2} className="text-2xl leading-relaxed text-zinc-300 md:text-4xl">
            {story.beyondMiles.opening[1]}
          </RevealText>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 2 }}
            className="py-10"
          >
            <div className="max-w-full overflow-hidden text-xl sm:text-5xl md:text-8xl">{story.beyondMiles.route}</div>

            <p className="mt-6 text-xs uppercase tracking-[0.35em] text-zinc-500">{story.beyondMiles.routeLabel}</p>
          </motion.div>

          <RevealText delay={2.8} className="text-xl leading-relaxed text-zinc-400 md:text-3xl">
            {story.beyondMiles.lines[0]}
          </RevealText>

          <RevealText delay={3.8} className="text-xl leading-relaxed text-zinc-300 md:text-3xl">
            {story.beyondMiles.lines[1]}
          </RevealText>

          <RevealText delay={4.8} className="text-xl leading-relaxed text-zinc-300 md:text-3xl">
            {story.beyondMiles.lines[2]}
          </RevealText>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 5.8 }}
            className="pt-12"
          >
            <p className="font-serif text-4xl text-white md:text-6xl">{story.beyondMiles.distanceTitle}</p>
            <p className="mt-4 text-lg text-zinc-500">{story.beyondMiles.distanceSubtitle}</p>
          </motion.div>

          <RevealText delay={6.8} className="text-xl leading-relaxed text-zinc-300 md:text-3xl">
            {story.beyondMiles.closing}
          </RevealText>
        </div>

        <div className="mt-14 flex justify-center">
          <ChapterNext {...story.beyondMiles.next} />
        </div>
      </div>
    </Section>
  );
}
