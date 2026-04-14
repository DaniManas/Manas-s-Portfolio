'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import {
  GraduationCap,
  BarChart2,
  Briefcase,
  FlaskConical,
  HeartPulse,
  PenLine,
  MapPin,
  type LucideIcon,
} from 'lucide-react';
import { meta } from '@/lib/data';

const iconMap: Record<string, LucideIcon> = {
  GraduationCap,
  BarChart2,
  Briefcase,
  FlaskConical,
  HeartPulse,
  PenLine,
  MapPin,
};

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

export function About() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about" className="bg-[var(--color-bg)]">
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
            About
          </motion.p>

          {/* Heading */}
          <motion.h2
            variants={shouldReduceMotion ? undefined : itemVariants}
            className="font-serif font-semibold text-[28px] md:text-[36px] leading-tight text-[var(--color-ink)] mb-12"
          >
            Building AI that actually works in production
          </motion.h2>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-12">
            {/* Left — Bio */}
            <motion.div
              variants={shouldReduceMotion ? undefined : itemVariants}
              className="flex flex-col gap-5"
            >
              {meta.bio.map((paragraph, i) => (
                <p
                  key={i}
                  className="font-sans text-base leading-[1.7] text-[var(--color-ink-muted)]"
                >
                  {paragraph}
                </p>
              ))}
            </motion.div>

            {/* Right — Stats card */}
            <motion.div
              variants={shouldReduceMotion ? undefined : itemVariants}
              className="bg-[var(--color-accent-pale)] rounded-xl p-7 shadow-[0_2px_12px_var(--color-shadow)] h-fit"
            >
              <ul className="flex flex-col gap-4" role="list">
                {meta.stats.map((stat, i) => {
                  const Icon = iconMap[stat.icon];
                  return (
                    <li key={i} className="flex items-start gap-3">
                      {Icon && (
                        <Icon
                          size={18}
                          className="text-[var(--color-accent)] mt-0.5 shrink-0"
                          aria-hidden="true"
                        />
                      )}
                      <span className="font-sans text-[15px] text-[var(--color-ink)] leading-snug">
                        {stat.text}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
