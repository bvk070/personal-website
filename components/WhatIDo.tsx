"use client";

import { motion } from "framer-motion";
import { Smartphone, Brain, Zap } from "lucide-react";
import { services } from "@/lib/constants";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Pill from "@/components/ui/Pill";

const iconMap = {
  Smartphone,
  Brain,
  Zap,
} as const;

export default function WhatIDo() {
  return (
    <Section id="services" title="How I Can Help You">
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service, i) => {
          const Icon = iconMap[service.icon];
          return (
            <Card key={service.title}>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-card bg-gold/10">
                  <Icon size={24} className="text-gold" />
                </div>
                <h3 className="font-cal text-card-title font-semibold">
                  {service.title}
                </h3>
                <p className="mt-3 text-text-secondary leading-relaxed">
                  {service.body}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <Pill key={tag}>{tag}</Pill>
                  ))}
                </div>
              </motion.div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
