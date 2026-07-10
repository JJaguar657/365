"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import type { FlowerData } from "./Gallery";

interface FlowerModalProps {
  flower: FlowerData | null;
  onClose: () => void;
}

export default function FlowerModal({ flower, onClose }: FlowerModalProps) {
  if (!flower) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          initial={{ backdropFilter: "blur(0px)" }}
          animate={{ backdropFilter: "blur(16px)" }}
          className="absolute inset-0 bg-black/70"
          onClick={onClose}
        />

        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.35, 0.6, 0.35],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
          className="absolute h-[600px] w-[600px] rounded-full bg-rose-500/20 blur-[140px]"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.92 }}
          transition={{ type: "spring", stiffness: 90, damping: 16 }}
          className="relative z-20 mx-6 w-full max-w-xl rounded-[40px] border border-white/10 bg-white/[0.05] p-10 backdrop-blur-2xl"
        >
          <button
            onClick={onClose}
            className="absolute right-6 top-6 rounded-full bg-white/10 p-3 transition hover:bg-white/20"
          >
            <X size={22} />
          </button>

          <motion.div
            layoutId={`flower-${flower.id}`}
            className="relative mx-auto h-80 w-80 overflow-hidden rounded-full border-[8px] border-white shadow-[0_20px_80px_rgba(0,0,0,.45)]"
          >
            <Image src={flower.src} alt="" fill className="object-cover" priority />
          </motion.div>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            transition={{ delay: 0.4 }}
            className="mx-auto mt-10 h-px bg-gradient-to-r from-transparent via-white to-transparent"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-10 text-center font-serif text-3xl leading-relaxed text-white"
          >
            {flower.caption}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 1.1 }}
            className="mt-10 text-center text-sm uppercase tracking-[0.45em] text-zinc-400"
          >
            One of my favourite memories
          </motion.p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
