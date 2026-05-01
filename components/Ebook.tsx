"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Check } from "lucide-react";
import { ebook } from "@/lib/constants";
import Pill from "@/components/ui/Pill";

function BookMockup() {
  return (
    <div className="relative mx-auto w-48 md:w-56">
      {/* Book shadow */}
      <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-lg bg-black/40 blur-xl" />
      {/* Book cover */}
      <div className="relative overflow-hidden rounded-lg border border-gold/20 bg-gradient-to-br from-surface-2 to-bg p-6 shadow-2xl">
        {/* Spine accent */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold" />
        {/* Decorative code lines */}
        <div className="mb-6 space-y-1.5">
          <div className="h-1 w-16 rounded bg-gold/20" />
          <div className="h-1 w-12 rounded bg-gold/10" />
          <div className="h-1 w-20 rounded bg-gold/15" />
        </div>
        {/* Book icon */}
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10">
          <BookOpen size={20} className="text-gold" />
        </div>
        {/* Title */}
        <p className="font-cal text-sm font-bold leading-snug text-text-primary">
          Android + AI
        </p>
        <p className="font-cal text-xs font-bold text-gold">
          Remote Stack
        </p>
        {/* Author */}
        <p className="mt-4 text-[10px] text-text-muted">
          Bhavik Sadiwala
        </p>
        {/* Bottom decoration */}
        <div className="mt-4 space-y-1">
          <div className="h-0.5 w-full rounded bg-border" />
          <div className="h-0.5 w-3/4 rounded bg-border" />
        </div>
      </div>
    </div>
  );
}

export default function Ebook() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="relative overflow-hidden border-y border-gold/10">
      {/* Gold gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-gold/10 to-gold/5" />
      <div className="absolute inset-0 bg-gradient-to-b from-bg/80 via-transparent to-bg/80" />

      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[auto_1fr] md:items-center md:gap-16 md:py-32">
        {/* Book mockup */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <BookMockup />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Pill variant="badge" className="mb-4">
            {ebook.badge}
          </Pill>
          <h2 className="font-cal text-section font-bold leading-tight">
            {ebook.title}
          </h2>
          <p className="mt-4 max-w-lg text-lg text-text-secondary leading-relaxed">
            {ebook.subtitle}
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-8 flex items-center gap-3 rounded-card border border-gold/20 bg-gold/5 p-4"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/20">
                <Check size={16} className="text-gold" />
              </div>
              <p className="text-sm text-gold">{ebook.successMessage}</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex max-w-md gap-3">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 rounded-btn border border-border bg-surface px-4 py-3 text-sm text-text-primary placeholder:text-text-muted outline-none transition-colors focus:border-gold/50"
              />
              <button
                type="submit"
                className="shrink-0 rounded-btn bg-gold px-6 py-3 text-sm font-semibold text-bg transition-all hover:bg-gold/90 hover:shadow-lg hover:shadow-gold/20"
              >
                {ebook.cta}
              </button>
            </form>
          )}

          <p className="mt-3 text-xs text-text-muted">{ebook.note}</p>
        </motion.div>
      </div>
    </section>
  );
}
