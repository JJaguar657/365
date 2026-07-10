"use client";

import { motion } from "framer-motion";
import { story } from "@/content/story";

interface ChapterNextProps {
  label: string;
  target: string;
}

export default function ChapterNext({ label, target }: ChapterNextProps) {
  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.97 }}
      onClick={() => document.getElementById(target)?.scrollIntoView({ behavior: "smooth" })}
      className="mx-auto flex max-w-[calc(100vw-2rem)] items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-3 text-center text-[10px] uppercase tracking-[0.12em] text-zinc-300 transition hover:border-rose-300/70 hover:bg-white/10 hover:text-white sm:gap-3 sm:px-6 sm:text-xs sm:tracking-[0.22em]"
    >
      {label}
      <span aria-hidden="true" className="text-base leading-none">{story.ui.chapterNextArrow}</span>
    </motion.button>
  );
}
