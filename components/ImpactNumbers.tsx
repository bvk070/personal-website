"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { impact } from "@/lib/constants";

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    if (prefersReducedMotion) {
      setDisplay(value);
      return;
    }

    let start = 0;
    const duration = 2000;
    const startTime = performance.now();

    function step(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.floor(eased * value);
      setDisplay(start);
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }, [isInView, value, prefersReducedMotion]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function ImpactNumbers() {
  return (
    <section className="border-y border-border bg-surface/50 py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
        {impact.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center"
          >
            <div className="font-cal text-4xl font-bold text-gold md:text-5xl">
              <CountUp value={item.value} suffix={item.suffix} />
            </div>
            <p className="mt-2 text-sm text-text-secondary">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
