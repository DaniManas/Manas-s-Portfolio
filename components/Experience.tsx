'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { MapPin, ExternalLink } from 'lucide-react';
import { experience } from '@/lib/data';

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  },
};

export function Experience() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="experience" className="bg-[var(--color-bg)]">
      <div className="max-w-content mx-auto px-6 py-24 md:py-[96px]">
        <motion.div
          variants={shouldReduceMotion ? undefined : containerVariants}
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {/* Eyebrow */}
          <motion.p
            variants={shouldReduceMotion ? undefined : itemVariants}
            className="font-sans font-semibold text-[11px] uppercase tracking-[0.12em] text-[var(--color-accent)] mb-2"
          >
            Experience
          </motion.p>

          {/* Heading */}
          <motion.h2
            variants={shouldReduceMotion ? undefined : itemVariants}
            className="font-serif font-semibold text-[28px] md:text-[36px] leading-tight text-[var(--color-ink)] mb-12"
          >
            Where I&apos;ve Worked
          </motion.h2>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-[4px] top-2 bottom-2 w-[2px] bg-[var(--color-accent)]"
              aria-hidden="true"
            />

            <div className="flex flex-col gap-10">
              {experience.map((entry, i) => (
                <motion.div
                  key={i}
                  variants={shouldReduceMotion ? undefined : itemVariants}
                  className="relative pl-10 md:pl-12"
                >
                  {/* Circle dot */}
                  <div
                    className="absolute left-0 top-[6px] w-[10px] h-[10px] rounded-full bg-[var(--color-accent)]"
                    aria-hidden="true"
                  />

                  {/* Card */}
                  <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-6 shadow-[0_2px_12px_var(--color-shadow)]">
                    {/* Role + Current badge */}
                    <div className="flex flex-wrap items-start gap-2 mb-1">
                      <h3 className="font-serif font-semibold text-[18px] md:text-[20px] leading-snug text-[var(--color-ink)]">
                        {entry.role}
                      </h3>
                      {entry.current && (
                        <span className="shrink-0 mt-0.5 bg-[var(--color-accent)] text-white text-[11px] font-sans font-semibold px-2.5 py-0.5 rounded-full">
                          Current
                        </span>
                      )}
                    </div>

                    {/* Company */}
                    <p className="font-sans text-[15px] text-[var(--color-ink-muted)] mb-1">
                      {entry.company}
                    </p>

                    {/* Duration + Location */}
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-4">
                      <span className="font-sans text-[13px] text-[var(--color-ink-muted)]">
                        {entry.duration}
                      </span>
                      <span className="flex items-center gap-1 font-sans text-[13px] text-[var(--color-ink-muted)]">
                        <MapPin size={13} aria-hidden="true" />
                        {entry.location}
                      </span>
                    </div>

                    {/* Bullets */}
                    <ul className="list-disc pl-5 flex flex-col gap-2">
                      {entry.bullets.map((bullet, j) => (
                        <li
                          key={j}
                          className="font-sans text-[14px] md:text-[15px] leading-[1.7] text-[var(--color-ink-muted)]"
                        >
                          {bullet}
                        </li>
                      ))}
                    </ul>

                    {/* Optional link */}
                    {entry.link && (
                      <a
                        href={entry.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 mt-4 font-sans text-[13px] font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-light)] transition-colors"
                      >
                        <ExternalLink size={13} aria-hidden="true" />
                        View on GitHub
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
