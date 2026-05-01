"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/constants";
import Section from "@/components/ui/Section";
import Pill from "@/components/ui/Pill";

export default function Skills() {
  return (
    <Section id="skills" title="My Stack">
      <div className="space-y-8">
        {skills.map((group, i) => (
          <motion.div
            key={group.group}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex flex-col gap-3 md:flex-row md:items-start md:gap-6"
          >
            <span className="shrink-0 font-cal text-sm font-semibold text-gold md:w-32 md:pt-1">
              {group.group}
            </span>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Pill key={item}>{item}</Pill>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
