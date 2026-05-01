"use client";

import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className = "",
  hover = true,
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={`group relative rounded-card border border-border bg-surface/80 
        backdrop-blur-sm p-6 transition-all duration-300
        ${hover ? "hover:shadow-card-glow-hover hover:border-gold-muted/50" : ""} 
        ${className}`}
    >
      {children}
    </motion.div>
  );
}
