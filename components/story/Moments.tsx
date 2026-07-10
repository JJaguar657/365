"use client";

import { motion } from "framer-motion";
import Section from "@/components/layout/Section";

const memories = [
  {
    emoji: "📞",
    title: "The Calls",
    text: "There were so many days when everything felt a little overwhelming. And somehow, almost magically, your call would come. Sometimes you wanted to hear me, sometimes you just wanted to share your own day. You probably never realized it, but every conversation reminded me that my existence mattered to someone.",
  },
  {
    emoji: "😂",
    title: "The Laughter",
    text: "You making the weirdest expressions and me acting like the dumbest person alive somehow became our favorite comedy show. We laughed at each other far more than we laughed at jokes, and I honestly wouldn't trade those moments for anything.",
  },
  {
    emoji: "🌱",
    title: "The Pride",
    text: "Watching you choose singing, creating content, following your niyamas, and becoming more like yourself has been one of my favorite things to witness. I don't just admire your achievements—I admire the person you're becoming.",
  },
  {
    emoji: "🤍",
    title: "The Fights",
    text: "We weren't perfect. We argued. Sometimes I hurt your incredibly pure heart, and I still wish I could take those moments back. But what makes me grateful is that every single time, we chose understanding over ego and our friendship over winning.",
  },
];

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
          Chapter VII
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 text-center font-serif text-6xl md:text-8xl"
        >
          Moments
        </motion.h2>

        <div className="mt-24 space-y-10">
          {memories.map((memory, index) => (
            <motion.div
              key={memory.title}
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
            Maybe these were just moments.
          </p>

          <p className="mt-8 text-2xl leading-relaxed text-zinc-400">
            But together...
            <br />
            they became fifteen beautiful months.
          </p>
        </motion.div>
      </div>
    </Section>
  );
}
