"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Section from "@/components/layout/Section";

import Bouquet from "./Bouquet";
import FlowerModal from "./FlowerModal";
import Petals from "./Petals";

export interface FlowerData {
  id: number;
  src: string;
  caption: string;
  type?: "image" | "video";
}

const flowers: FlowerData[] = [
  {
    id: 1,
    src: "/photos/1.jpg",
    caption:
      "You smiled... and somehow the whole picture smiled with you.",
  },
  {
    id: 2,
    src: "/photos/2.jpg",
    caption:
      "Some people pose for pictures. You simply exist beautifully in them.",
  },
  {
    id: 3,
    src: "/photos/3.jpg",
    caption:
      "I still don't know how you make ordinary moments look unforgettable.",
  },
  {
    id: 4,
    src: "/photos/4.jpg",
    caption:
      "If happiness had a face, I think it would look something like this.",
  },
  {
    id: 5,
    src: "/photos/5.jpg",
    caption:
      "This is one of those smiles I hope life never takes away from you.",
  },
  {
    id: 6,
    src: "/photos/6.jpg",
    caption:
      "Every version of you has been beautiful, but watching you become yourself has been my favourite.",
  },
  {
    id: 7,
    src: "/photos/7.jpg",
    caption: "Some memories don't need dates. They simply stay.",
  },
  {
    id: 8,
    src: "/photos/video.jpg",
    caption: "This one has something to tell you...",
    type: "video",
  },
];

export default function Gallery() {
  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState<FlowerData | null>(null);
  const [focusMode, setFocusMode] = useState(false);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const openTimer = setTimeout(() => {
      setOpened(true);
    }, 2500);

    const hintTimer = setTimeout(() => {
      setShowHint(true);
    }, 5200);

    return () => {
      clearTimeout(openTimer);
      clearTimeout(hintTimer);
    };
  }, []);

  return (
    <Section
      id="gallery"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-32"
    >
      <div className="absolute inset-0 bg-[#070707]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,.06),transparent_65%)]" />
      <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-500/10 blur-[180px]" />

      <Petals />

      <div className="relative z-20 w-full max-w-7xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center uppercase tracking-[0.5em] text-zinc-500"
        >
          Chapter XI
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-6 text-center font-serif text-6xl md:text-8xl"
        >
          A Bouquet
        </motion.h2>

        <AnimatePresence mode="wait">
          {!opened && (
            <motion.div
              key="intro"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mt-20 text-center"
            >
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="font-serif text-3xl text-white md:text-5xl"
              >
                Every flower reminded me of you.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.75 }}
                transition={{ delay: 1.4 }}
                className="mt-6 text-zinc-400"
              >
                So I made the flowers...
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="mt-1 font-serif text-4xl text-rose-300"
              >
                You.
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div layout className="mt-20 flex justify-center">
          <Bouquet
            opened={opened}
            flowers={flowers}
            focusMode={focusMode}
            selectedFlower={selected}
            onFlowerClick={(flower) => {
              setFocusMode(true);
              setTimeout(() => {
                setSelected(flower);
              }, 850);
            }}
          />
        </motion.div>

        <AnimatePresence>
          {opened && showHint && !selected && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.8, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-10 text-center"
            >
              <p className="text-sm uppercase tracking-[0.35em] text-zinc-500">
                Click a flower
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selected && (
          <FlowerModal
            flower={selected}
            onClose={() => {
              setSelected(null);
              setTimeout(() => {
                setFocusMode(false);
              }, 150);
            }}
          />
        )}
      </AnimatePresence>
    </Section>
  );
}
