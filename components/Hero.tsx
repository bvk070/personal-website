"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import { hero, personal } from "@/lib/constants";
import Pill from "@/components/ui/Pill";

function TerminalWindow() {
  const lines = hero.terminalLines;
  const prefersReducedMotion = useReducedMotion();
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const resetAnimation = useCallback(() => {
    setDisplayedLines([]);
    setCurrentLine("");
    setLineIndex(0);
    setCharIndex(0);
    setIsTyping(true);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayedLines(lines.map((l) => l.text));
      setIsTyping(false);
      return;
    }

    if (lineIndex >= lines.length) {
      setIsTyping(false);
      const timeout = setTimeout(resetAnimation, 5000);
      return () => clearTimeout(timeout);
    }

    const line = lines[lineIndex];
    const speed = line.type === "command" ? 45 : 20;

    if (charIndex < line.text.length) {
      const timeout = setTimeout(() => {
        setCurrentLine(line.text.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      const pause = line.type === "command" ? 400 : 100;
      const timeout = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, line.text]);
        setCurrentLine("");
        setLineIndex(lineIndex + 1);
        setCharIndex(0);
      }, pause);
      return () => clearTimeout(timeout);
    }
  }, [lineIndex, charIndex, lines, prefersReducedMotion, resetAnimation]);

  return (
    <div className="relative overflow-hidden rounded-card border border-border bg-surface">
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <div className="h-3 w-3 rounded-full bg-[#FF5F57]" />
        <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
        <div className="h-3 w-3 rounded-full bg-[#28C840]" />
        <span className="ml-2 text-xs text-text-muted">terminal</span>
      </div>
      {/* Terminal body */}
      <div className="p-5 font-mono text-sm leading-relaxed">
        {displayedLines.map((line, i) => (
          <div
            key={i}
            className={
              line.startsWith(">")
                ? "text-gold"
                : "text-emerald-400"
            }
          >
            {line}
          </div>
        ))}
        {isTyping && (
          <div
            className={
              currentLine.startsWith(">")
                ? "text-gold"
                : "text-emerald-400"
            }
          >
            {currentLine}
            <span className="cursor-blink ml-0.5 inline-block h-4 w-[2px] bg-gold align-middle" />
          </div>
        )}
        {!isTyping && lineIndex >= lines.length && (
          <div className="text-gold">
            {">"}{" "}
            <span className="cursor-blink ml-0.5 inline-block h-4 w-[2px] bg-gold align-middle" />
          </div>
        )}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="grain relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-gold/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-gold/3 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-6 pt-24 md:grid-cols-[1.5fr_1fr] md:gap-16 md:pt-0 lg:gap-20">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          <Pill variant="gold" className="mb-6 w-fit">
            {hero.badge}
          </Pill>

          <h1 className="font-cal text-5xl font-bold leading-[1.05] md:text-hero whitespace-pre-line">
            {hero.h1}
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-text-secondary">
            {hero.subtext}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-btn border border-border px-6 py-3 text-sm font-medium text-text-primary transition-all hover:border-text-secondary"
            >
              <Download size={16} className="transition-transform group-hover:-translate-y-0.5" />
              {hero.ctaSecondary}
            </a>
            <a
              href={personal.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-btn bg-gold px-6 py-3 text-sm font-semibold text-bg transition-all hover:bg-gold/90 hover:shadow-lg hover:shadow-gold/20"
            >
              {hero.ctaPrimary}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </motion.div>

        {/* Right terminal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center"
        >
          <TerminalWindow />
        </motion.div>
      </div>
    </section>
  );
}
