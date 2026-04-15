'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { skills } from '@/lib/data';

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

export function Skills() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="skills" className="bg-[var(--color-accent-pale)]">
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
            Skills
          </motion.p>

          {/* Heading */}
          <motion.h2
            variants={shouldReduceMotion ? undefined : itemVariants}
            className="font-serif font-semibold text-[28px] md:text-[36px] leading-tight text-[var(--color-ink)] mb-12"
          >
            Technical Toolkit
          </motion.h2>

          {/* Category rows */}
          <div className="flex flex-col gap-6">
            {skills.map((group) => (
              <motion.div
                key={group.category}
                variants={shouldReduceMotion ? undefined : itemVariants}
                className="flex flex-col md:grid md:grid-cols-[180px_1fr] gap-3 md:gap-6 md:items-start"
              >
                {/* Category label */}
                <span
                  className={`font-sans font-semibold text-[13px] pt-0.5 shrink-0 ${
                    group.muted
                      ? 'text-[var(--color-ink-muted)]'
                      : 'text-[var(--color-ink)]'
                  }`}
                >
                  {group.category}
                </span>

                {/* Skill pills */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) =>
                    group.muted ? (
                      <span
                        key={skill}
                        className="font-mono text-[11px] border border-[var(--color-border)] text-[var(--color-ink-muted)] rounded px-2 py-0.5 bg-transparent"
                      >
                        {skill}
                      </span>
                    ) : (
                      <span
                        key={skill}
                        className="font-mono text-[11px] bg-[var(--color-surface)] text-[var(--color-accent)] border border-[var(--color-border)] rounded px-2 py-0.5"
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
