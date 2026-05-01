"use client";

import { motion } from "framer-motion";

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export default function Section({
  id,
  title,
  subtitle,
  children,
  className = "",
  fullWidth = false,
}: SectionProps) {
  return (
    <section id={id} className={`py-24 md:py-32 ${className}`}>
      <div className={fullWidth ? "" : "mx-auto max-w-6xl px-6"}>
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="font-cal text-section font-bold">{title}</h2>
            {subtitle && (
              <p className="mt-4 max-w-2xl text-text-secondary text-lg">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
