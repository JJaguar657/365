"use client";

import { motion, useReducedMotion } from "framer-motion";

import Section from "@/components/layout/Section";
import { story } from "@/content/story";

export default function BirthdayFinale() {
  const reduceMotion = useReducedMotion();
  const transition = (delay = 0) => ({ duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : delay });

  return (
    <Section id="birthday-finale" className="flex min-h-[100svh] items-center justify-center bg-[#070506] px-5 py-24 sm:px-8 sm:py-32">
      <div aria-hidden="true" className="absolute left-1/2 top-1/4 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-rose-400/[0.07] blur-[150px]" />
      <div aria-hidden="true" className="absolute bottom-0 left-1/2 h-[22rem] w-[32rem] -translate-x-1/2 rounded-full bg-amber-200/[0.05] blur-[140px]" />

      <div className="relative z-10 mx-auto w-full max-w-2xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={transition()}
          className="text-[10px] uppercase tracking-[0.22em] text-rose-200/60 sm:text-xs sm:tracking-[0.45em]"
        >
          {story.finale.chapter}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={transition(0.1)}
          className="mt-8 font-serif text-5xl text-white sm:text-7xl md:text-8xl"
        >
          {story.finale.duration}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={transition(0.2)}
          className="mt-12 space-y-2 text-lg leading-relaxed text-zinc-300 sm:text-xl"
        >
          {story.finale.memories.map((memory) => <p key={memory.id}>{memory.text}</p>)}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={transition(0.3)}
          className="mt-14 font-serif text-2xl leading-relaxed text-rose-100 sm:text-3xl"
        >
          {story.finale.reflection.map((line) => <p key={line}>{line}</p>)}
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={transition(0.35)}
          className="mt-24 font-serif text-4xl leading-tight text-white sm:text-6xl md:text-7xl"
        >
          <span className="block">{story.finale.birthday}</span>
          <span className="mt-2 block break-words text-rose-200">{story.finale.name}</span>
        </motion.h3>

        <div className="mt-20 space-y-12 text-lg leading-relaxed text-zinc-300 sm:text-xl">
          {story.finale.wishes.map((wish, index) => (
            <motion.div
              key={wish.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={transition(0.08 * index)}
            >
              {wish.lines.map((line) => <p key={`${wish.id}-${line}`}>{line}</p>)}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={transition(0.15)}
          className="mt-24 border-y border-white/10 py-16 text-lg leading-relaxed text-zinc-300 sm:text-xl"
        >
          <p className="font-serif text-3xl text-white sm:text-4xl">{story.finale.thankYou.intro}</p>
          <div className="mt-10 space-y-8">
            {story.finale.thankYou.items.map((item) => (
              <div key={item.id}>{item.lines.map((line) => <p key={`${item.id}-${line}`}>{line}</p>)}</div>
            ))}
          </div>
          <p className="mt-12 text-zinc-400">{story.finale.thankYou.ending}</p>
          <p className="mt-4 font-serif text-3xl text-rose-100 sm:text-4xl">{story.finale.thankYou.staying}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={transition(0.15)}
          className="mt-20 text-lg leading-relaxed text-zinc-300 sm:text-xl"
        >
          {story.finale.futureWish.map((line) => <p key={line}>{line}</p>)}
        </motion.div>

        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.65, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={transition(0.2)}
          className="my-20 font-serif text-5xl text-amber-100 sm:text-6xl"
        >
          {story.finale.divider}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={transition(0.25)}
          className="pb-6 font-serif text-2xl leading-relaxed text-white sm:text-3xl"
        >
          <p>{story.finale.birthday} {story.finale.name}{story.finale.finalBirthdaySuffix}</p>
          <p className="mt-8 text-rose-100">{story.finale.thanks}</p>
          <p className="mt-8 text-zinc-400">{story.finale.chapterTwo}</p>
        </motion.div>
      </div>
    </Section>
  );
}
