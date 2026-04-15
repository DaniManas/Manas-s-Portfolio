'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { projects } from '@/lib/data';

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

export function Projects() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="projects" className="bg-[var(--color-bg)]">
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
            Projects
          </motion.p>

          {/* Heading */}
          <motion.h2
            variants={shouldReduceMotion ? undefined : itemVariants}
            className="font-serif font-semibold text-[28px] md:text-[36px] leading-tight text-[var(--color-ink)] mb-12"
          >
            Things I&apos;ve Built
          </motion.h2>

        </motion.div>

        {/* 2-column grid — own whileInView so it fires independently */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={shouldReduceMotion ? undefined : containerVariants}
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
            {projects.map((project, i) => (
              <motion.div
                key={i}
                variants={shouldReduceMotion ? undefined : itemVariants}
                whileHover={shouldReduceMotion ? undefined : { y: -3, transition: { duration: 0.2 } }}
                className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-6 shadow-[0_2px_12px_var(--color-shadow)] flex flex-col"
              >
                {/* Category tag */}
                <span className="inline-block self-start font-sans text-[12px] font-medium bg-[var(--color-accent-pale)] text-[var(--color-accent)] rounded-full px-3 py-1 mb-4">
                  {project.category}
                </span>

                {/* Title + date */}
                <div className="flex flex-wrap items-baseline gap-2 mb-2">
                  <h3 className="font-sans font-semibold text-[17px] leading-snug text-[var(--color-ink)]">
                    {project.title}
                  </h3>
                  <span className="font-sans text-[12px] text-[var(--color-ink-muted)] shrink-0">
                    {project.date}
                  </span>
                </div>

                {/* Description — line-clamped for grid consistency */}
                <p className="font-sans text-[14px] leading-[1.7] text-[var(--color-ink-muted)] mb-4 line-clamp-4 flex-1">
                  {project.description}
                </p>

                {/* Stack tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.stack.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[11px] bg-[var(--color-accent-pale)] text-[var(--color-accent)] rounded px-2 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link or note */}
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 self-start font-sans text-[13px] font-medium bg-[var(--color-accent)] text-white rounded-lg px-4 py-2 hover:bg-[var(--color-accent-light)] transition-colors"
                  >
                    <ExternalLink size={13} aria-hidden="true" />
                    View on GitHub
                  </a>
                ) : project.note ? (
                  <p className="font-sans text-[12px] text-[var(--color-ink-muted)] italic">
                    {project.note}
                  </p>
                ) : null}
              </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  );
}
