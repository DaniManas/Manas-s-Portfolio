'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { education } from '@/lib/data';

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

export function Education() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="education" className="bg-[var(--color-bg)]">
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
            Education
          </motion.p>

          {/* Heading */}
          <motion.h2
            variants={shouldReduceMotion ? undefined : itemVariants}
            className="font-serif font-semibold text-[28px] md:text-[36px] leading-tight text-[var(--color-ink)] mb-12"
          >
            Academic Background
          </motion.h2>

          {/* 2-column card grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((entry) => (
              <motion.div
                key={entry.institution}
                variants={shouldReduceMotion ? undefined : itemVariants}
                whileHover={shouldReduceMotion ? undefined : { y: -3 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col gap-4 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[12px] p-7 shadow-[0_2px_12px_var(--color-shadow)] hover:shadow-[0_6px_20px_var(--color-shadow)] transition-shadow duration-200"
              >
                {/* Degree + In Progress badge */}
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-sans font-semibold text-[18px] leading-snug text-[var(--color-ink)]">
                    {entry.degree}
                  </h3>
                  {entry.inProgress && (
                    <span className="flex-shrink-0 font-sans text-[11px] font-semibold bg-[var(--color-accent-pale)] text-[var(--color-accent)] rounded-full px-3 py-1">
                      In Progress
                    </span>
                  )}
                </div>

                {/* Institution */}
                <div className="flex items-center gap-2 text-[var(--color-ink-muted)]">
                  <GraduationCap size={15} strokeWidth={2} aria-hidden="true" />
                  <span className="font-sans text-[15px]">{entry.institution}</span>
                </div>

                {/* Duration + Location */}
                <div className="flex flex-wrap gap-x-4 gap-y-1">
                  <div className="flex items-center gap-2 text-[var(--color-ink-muted)]">
                    <Calendar size={13} strokeWidth={2} aria-hidden="true" />
                    <span className="font-sans text-[13px]">{entry.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[var(--color-ink-muted)]">
                    <MapPin size={13} strokeWidth={2} aria-hidden="true" />
                    <span className="font-sans text-[13px]">{entry.location}</span>
                  </div>
                </div>

                {/* GPA badge */}
                <div className="mt-auto pt-2">
                  <span className="font-sans text-[13px] font-semibold bg-[var(--color-accent-pale)] text-[var(--color-accent)] rounded px-3 py-1">
                    GPA: {entry.gpa}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
