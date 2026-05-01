"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { experience } from "@/lib/constants";
import Section from "@/components/ui/Section";

function TimelineEntry({
  entry,
  index,
}: {
  entry: (typeof experience)[number];
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const hasExtra = entry.extra.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />

      {/* Timeline dot */}
      <div
        className={`absolute left-0 top-1.5 -translate-x-1/2 h-3 w-3 rounded-full border-2 ${
          entry.current
            ? "border-gold bg-gold shadow-lg shadow-gold/30"
            : "border-border bg-surface"
        }`}
      />

      {/* Current badge */}
      {entry.current && (
        <span className="mb-2 inline-block rounded-pill bg-gold/10 px-3 py-0.5 text-xs font-medium text-gold">
          Current
        </span>
      )}

      <h3 className="font-cal text-card-title font-semibold">
        {entry.company}
      </h3>
      <p className="mt-1 text-sm text-text-secondary">
        {entry.role} &middot; {entry.period}
      </p>

      {entry.blurb && (
        <p className="mt-3 text-text-secondary leading-relaxed">
          {entry.blurb}
        </p>
      )}

      {entry.bullets.length > 0 && (
        <ul className="mt-4 space-y-2">
          {entry.bullets.map((bullet, i) => (
            <li key={i} className="flex gap-3 text-sm text-text-secondary">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Expandable extra bullets */}
      {hasExtra && (
        <>
          <AnimatePresence>
            {expanded && (
              <motion.ul
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-2 space-y-2 overflow-hidden"
              >
                {entry.extra.map((bullet, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-sm text-text-secondary"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/50" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-3 flex items-center gap-1 text-sm font-medium text-gold transition-colors hover:text-gold/80"
          >
            {expanded ? "Show Less" : "Show More"}
            <ChevronDown
              size={16}
              className={`transition-transform ${expanded ? "rotate-180" : ""}`}
            />
          </button>
        </>
      )}
    </motion.div>
  );
}

export default function Experience() {
  return (
    <Section id="experience" title="Where I&rsquo;ve Worked">
      <div className="mx-auto max-w-3xl">
        {experience.map((entry, i) => (
          <TimelineEntry key={entry.company} entry={entry} index={i} />
        ))}
      </div>
    </Section>
  );
}
