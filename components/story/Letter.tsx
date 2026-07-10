"use client";

import { motion } from "framer-motion";
import Section from "@/components/layout/Section";
import { story } from "@/content/story";
import ChapterNext from "./ChapterNext";

export default function Letter() {
  return (
    <Section id="chapter-8" className="flex min-h-screen items-center justify-center px-6 py-32">
      <div className="mx-auto w-full max-w-4xl rounded-[2rem] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl md:p-16">
        <div className="space-y-10">
          {story.letter.lines.map((line, index) => (
            <motion.p
              key={line.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`text-center ${line.id === "greeting" ? "font-serif text-6xl" : "text-2xl"}`}
            >
              {line.text || <br />}
            </motion.p>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <ChapterNext {...story.letter.next} />
        </div>
      </div>
    </Section>
  );
}
