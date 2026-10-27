"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import Image from "next/image";
import { demos } from "@/lib/constants";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Pill from "@/components/ui/Pill";

type Demo = (typeof demos)[number];

export default function Demos() {
  const [active, setActive] = useState<Demo | null>(null);

  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [active]);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <>
      <Section
        id="demos"
        title="Demos"
        subtitle="Short walkthroughs of the AI and Android work behind the numbers above."
      >
        <div className="grid gap-5 md:grid-cols-2">
          {demos.map((demo, i) => (
            <motion.div
              key={demo.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <button
                type="button"
                onClick={() => setActive(demo)}
                className="block h-full w-full text-left outline-none focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              >
                <Card padded={false} className="h-full overflow-hidden">
                  <div className="relative aspect-video overflow-hidden bg-surface-2">
                    <Image
                      src={`https://i.ytimg.com/vi/${demo.id}/maxresdefault.jpg`}
                      alt=""
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="flex h-16 w-16 items-center justify-center rounded-pill bg-gold/90 text-bg shadow-lg transition-transform duration-300 group-hover:scale-110">
                        <Play size={26} className="ml-1 fill-current" />
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-cal text-lg font-semibold leading-snug text-text-primary">
                      {demo.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                      {demo.blurb}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {demo.tags.map((tag) => (
                        <Pill key={tag}>{tag}</Pill>
                      ))}
                    </div>
                  </div>
                </Card>
              </button>
            </motion.div>
          ))}
        </div>
      </Section>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => {
              if (e.target === e.currentTarget) setActive(null);
            }}
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm md:p-8"
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close video"
              className="absolute right-4 top-4 z-10 rounded-pill bg-surface/80 p-2 text-text-primary transition-colors hover:text-gold md:right-6 md:top-6"
            >
              <X size={24} />
            </button>

            <div className="w-full max-w-5xl">
              <div className="aspect-video w-full overflow-hidden rounded-card border border-border bg-black">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${active.id}?autoplay=1&rel=0`}
                  title={active.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
              <p className="mt-4 text-center font-cal text-lg font-semibold text-text-primary">
                {active.title}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
