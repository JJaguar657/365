"use client";

import { motion } from "framer-motion";
import Section from "@/components/layout/Section";

const milestones = [
  {
    year: "🎤",
    title: "You chose your voice.",
    description:
      "Singing wasn't just about music. It was about having the courage to let the world hear a part of you.",
  },
  {
    year: "🎥",
    title: "You started creating.",
    description:
      "Creating content meant believing that your thoughts, your creativity, and your perspective deserved to exist beyond your own mind.",
  },
  {
    year: "🌱",
    title: "You chose discipline.",
    description:
      "Your niyamas weren't about perfection. They were quiet promises you made to yourself, and I admired how sincerely you tried to honor them.",
  },
  {
    year: "✨",
    title: "You kept becoming.",
    description:
      "The most inspiring thing about you isn't where you've reached. It's that you never stop growing.",
  },
];

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
          Chapter X
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 text-center font-serif text-6xl md:text-8xl"
        >
          Becoming
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-10 max-w-3xl text-center text-xl leading-9 text-zinc-400"
        >
          The beautiful thing isn't who you are today.
          <br />
          It's how intentionally you're becoming who you dream of being.
        </motion.p>

        <div className="relative mx-auto mt-28 max-w-4xl">
          <div className="absolute left-6 top-0 h-full w-px bg-zinc-800" />

          {milestones.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="relative mb-24 pl-20"
            >
              <div className="absolute left-0 top-2 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-xl backdrop-blur-md">
                {item.year}
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
          <p className="font-serif text-4xl leading-relaxed text-white md:text-5xl">Promise me one thing.</p>

          <p className="mt-8 text-2xl leading-relaxed text-zinc-300">
            Years from now,
            when you finally become
            the person you're working so hard to be...
          </p>

          <p className="mt-10 text-3xl font-serif text-emerald-300">
            Don't forget how far you've already come.
          </p>
        </motion.div>
      </div>
    </Section>
  );
}
