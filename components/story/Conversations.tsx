"use client";

import { motion } from "framer-motion";
import Section from "@/components/layout/Section";
import RevealText from "./RevealText";
import { story } from "@/content/story";
import ChapterNext from "./ChapterNext";

export default function Conversations() {
  return (
    <Section id="chapter-2" className="flex min-h-screen items-center justify-center px-6 py-24">
      <div className="mx-auto w-full max-w-5xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-6 text-center uppercase tracking-[0.4em] text-zinc-500"
        >
          {story.conversations.chapter}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center font-serif text-4xl text-balance sm:text-6xl md:text-8xl"
        >
          {story.conversations.title}
        </motion.h2>

        <div className="mt-20 space-y-8">
          {story.conversations.messages.map((message, index) => (
            <motion.div
              key={message.id}
              initial={{
                opacity: 0,
                x: message.side === "left" ? -60 : 60,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
              }}
              className={`flex ${message.side === "left" ? "justify-start" : "justify-end"}`}
            >
              <div
                className={`max-w-md rounded-3xl border border-white/10 bg-white/5 px-6 py-5 backdrop-blur-xl ${message.side === "right" ? "rounded-br-md" : "rounded-bl-md"}`}
              >
                <p className="leading-relaxed text-zinc-200">{message.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24">
          <RevealText
            delay={0.3}
            className="text-center text-2xl leading-relaxed text-zinc-300 md:text-3xl"
          >
            {story.conversations.closing}
          </RevealText>
        </div>

        <div className="mt-14 flex justify-center">
          <ChapterNext {...story.conversations.next} />
        </div>
      </div>
    </Section>
  );
}
