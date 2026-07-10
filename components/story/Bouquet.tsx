"use client";

import { motion } from "framer-motion";
import Flower from "./Flower";
import type { FlowerData } from "./Gallery";

interface BouquetProps {
  opened: boolean;
  flowers: FlowerData[];
  focusMode: boolean;
  selectedFlower: FlowerData | null;
  onFlowerClick: (flower: FlowerData) => void;
}

const positions = [
  { x: -260, y: 90, rotate: -28 },
  { x: -165, y: 10, rotate: -18 },
  { x: -70, y: -80, rotate: -8 },
  { x: 0, y: -150, rotate: 0 },
  { x: 70, y: -80, rotate: 8 },
  { x: 165, y: 10, rotate: 18 },
  { x: 260, y: 90, rotate: 28 },
  { x: 0, y: 180, rotate: 0 },
];

export default function Bouquet({ opened, flowers, focusMode, selectedFlower, onFlowerClick }: BouquetProps) {
  return (
    <div className="relative h-[900px] w-[900px]">
      {!opened && (
        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex items-end justify-center"
        >
          <div className="relative h-[500px] w-[380px]">
            <motion.div
              className="absolute bottom-0 left-0 h-[430px] w-[220px] origin-bottom-right rounded-t-3xl bg-stone-200 shadow-2xl"
              style={{ clipPath: "polygon(0 0,100% 15%,80% 100%,0 100%)" }}
            />

            <motion.div
              className="absolute bottom-0 right-0 h-[430px] w-[220px] origin-bottom-left rounded-t-3xl bg-stone-100 shadow-2xl"
              style={{ clipPath: "polygon(0 15%,100% 0,100% 100%,20% 100%)" }}
            />

            <div className="absolute bottom-32 left-1/2 -translate-x-1/2">
              <div className="relative flex items-center justify-center">
                <div className="h-12 w-48 rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 shadow-xl" />
                <div className="absolute text-sm font-semibold uppercase tracking-[0.4em] text-white">FOR YOU</div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {opened && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <motion.div
            initial={{ rotate: 0, x: 0 }}
            animate={{ rotate: focusMode ? -20 : -20, x: focusMode ? -95 : -95, opacity: focusMode ? 0 : 0.95 }}
            transition={{ type: "spring", stiffness: 60, damping: 15 }}
            className="absolute bottom-0 left-[245px] h-[470px] w-[230px] origin-bottom-right rounded-t-3xl bg-stone-200 shadow-2xl"
            style={{ clipPath: "polygon(0 0,100% 15%,80% 100%,0 100%)" }}
          />

          <motion.div
            initial={{ rotate: 0, x: 0 }}
            animate={{ rotate: focusMode ? 20 : 20, x: focusMode ? 95 : 95, opacity: focusMode ? 0 : 0.95 }}
            transition={{ type: "spring", stiffness: 60, damping: 15 }}
            className="absolute bottom-0 right-[245px] h-[470px] w-[230px] origin-bottom-left rounded-t-3xl bg-stone-100 shadow-2xl"
            style={{ clipPath: "polygon(0 15%,100% 0,100% 100%,20% 100%)" }}
          />

          <motion.div
            initial={{ opacity: 1, y: 0, rotate: 0 }}
            animate={{ opacity: focusMode ? 0 : 0, y: 120, rotate: 40 }}
            transition={{ duration: 0.9 }}
            className="absolute bottom-40 left-1/2 z-20 -translate-x-1/2"
          >
            <div className="h-12 w-48 rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 shadow-xl" />
          </motion.div>

          {flowers.map((flower, index) => {
            const isCenter = flower.id === 4;
            const selected = selectedFlower?.id === flower.id;

            return (
              <Flower
                key={flower.id}
                flower={flower}
                rotate={positions[index].rotate}
                x={positions[index].x}
                y={isCenter ? positions[index].y - 30 : positions[index].y}
                delay={index * 0.18}
                focused={focusMode}
                selected={selected}
                onClick={() => onFlowerClick(flower)}
              />
            );
          })}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: focusMode ? 0 : 0.9 }}
            transition={{ delay: 0.4 }}
            className="absolute bottom-0 left-1/2 h-[230px] w-[340px] -translate-x-1/2 bg-gradient-to-b from-stone-300 to-stone-500 shadow-2xl"
            style={{ clipPath: "polygon(18% 0%,82% 0%,100% 100%,0% 100%)" }}
          />

          <div className="absolute bottom-36 left-1/2 h-1 w-44 -translate-x-1/2 rounded-full bg-amber-300" />
        </motion.div>
      )}
    </div>
  );
}
