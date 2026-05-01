"use client";

import { motion } from "framer-motion";
import { Mail, Calendar, Linkedin, Clock } from "lucide-react";
import { contact } from "@/lib/constants";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

const iconMap = {
  Mail,
  Calendar,
  Linkedin,
} as const;

export default function Contact() {
  return (
    <Section id="contact" title={contact.title} subtitle={contact.subtitle}>
      <div className="grid gap-6 md:grid-cols-3">
        {contact.options.map((option, i) => {
          const Icon = iconMap[option.icon];
          return (
            <a
              key={option.label}
              href={option.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold/10">
                    <Icon size={24} className="text-gold" />
                  </div>
                  <h3 className="font-cal text-lg font-semibold">
                    {option.label}
                  </h3>
                  <p className="mt-1 text-sm text-text-secondary">
                    {option.value}
                  </p>
                </motion.div>
              </Card>
            </a>
          );
        })}
      </div>

      {/* Timezone strip */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="mt-12 flex items-center justify-center gap-2 text-center text-text-secondary"
      >
        <Clock size={16} className="text-gold" />
        <p className="text-sm">{contact.timezone}</p>
      </motion.div>
    </Section>
  );
}
