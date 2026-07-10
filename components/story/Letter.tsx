"use client";

import { motion } from "framer-motion";
import Section from "@/components/layout/Section";

const lines = [
  "Dear You,",
  "",
  "I don't think you realize how much these fifteen months have changed me.",
  "",
  "You walked into my life so quietly...",
  "yet somehow became one of the loudest reasons I smile.",
  "",
  "Thank you for every random call.",
  "Thank you for every stupid joke.",
  "Thank you for every difficult conversation.",
  "Thank you for staying.",
  "",
  "You have seen versions of me that many people never will.",
  "",
  "And somehow...",
  "you never stopped believing in me.",
  "",
  "If I could relive these fifteen months again...",
  "",
  "I wouldn't change a thing.",
  "",
  "Because every conversation...",
  "every laugh...",
  "every disagreement...",
  "every moment...",
  "",
  "led me here.",
];

export default function Letter() {
  return (
    <Section id="chapter-8" className="flex min-h-screen items-center justify-center px-6 py-32">
      <div className="mx-auto w-full max-w-4xl rounded-[2rem] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl md:p-16">
        <div className="space-y-10">
          {lines.map((line, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`text-center ${line === "Dear You," ? "font-serif text-6xl" : "text-2xl"}`}
            >
              {line || <br />}
            </motion.p>
          ))}
        </div>
      </div>
    </Section>
  );
}
