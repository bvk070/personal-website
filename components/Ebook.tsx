"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Image from "next/image";
import { ebook } from "@/lib/constants";
import Pill from "@/components/ui/Pill";

function BookMockup({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block outline-none focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
    >
      <div className="relative mx-auto w-[min(100%,280px)] transition-transform group-hover:scale-[1.02] md:w-72">
        <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-lg bg-black/40 blur-xl" />
        <div className="relative overflow-hidden rounded-lg border border-gold/25 shadow-2xl transition-shadow group-hover:shadow-card-glow-hover group-hover:border-gold-muted/50">
          <Image
            src={ebook.thumbnailPath}
            alt="Ebook cover"
            width={960}
            height={650}
            className="h-auto w-full object-cover"
            priority
          />
        </div>
      </div>
    </a>
  );
}

export default function Ebook() {
  const pdfHref = ebook.pdfPath;

  return (
    <section className="relative overflow-hidden border-y border-gold/10">
      <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-gold/10 to-gold/5" />
      <div className="absolute inset-0 bg-gradient-to-b from-bg/80 via-transparent to-bg/80" />

      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[auto_1fr] md:items-center md:gap-16 md:py-32">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <BookMockup href={pdfHref} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Pill variant="badge" className="mb-4">
            {ebook.badge}
          </Pill>
          <h2 className="font-cal text-section font-bold leading-tight tracking-tight text-text-primary whitespace-pre-line md:max-w-xl">
            {ebook.title}
          </h2>
          <p className="mt-5 font-cal text-xl font-semibold leading-snug text-gold md:text-2xl">
            {ebook.tagline}
          </p>
          <p className="mt-5 max-w-lg text-lg text-text-secondary leading-relaxed">
            {ebook.description}
          </p>

          <div className="mt-8">
            <a
              href={pdfHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-btn bg-gold px-6 py-3 text-sm font-semibold text-bg transition-all hover:bg-gold/90 hover:shadow-lg hover:shadow-gold/20"
            >
              <Download size={16} />
              {ebook.cta}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
