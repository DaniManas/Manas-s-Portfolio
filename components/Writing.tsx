'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { posts, meta } from '@/lib/data';

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

export function Writing() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="writing" className="bg-[var(--color-bg)]">
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
            Writing
          </motion.p>

          {/* Heading */}
          <motion.h2
            variants={shouldReduceMotion ? undefined : itemVariants}
            className="font-serif font-semibold text-[28px] md:text-[36px] leading-tight text-[var(--color-ink)] mb-3"
          >
            Thinking Out Loud
          </motion.h2>

          {/* Sub-heading */}
          <motion.p
            variants={shouldReduceMotion ? undefined : itemVariants}
            className="font-sans text-[16px] text-[var(--color-ink-muted)] italic mb-12"
          >
            Writing about Agentic AI, LLMs, and building things that actually work in production.
          </motion.p>

          {/* 2-column card grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <motion.a
                key={post.link}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={shouldReduceMotion ? undefined : itemVariants}
                whileHover={shouldReduceMotion ? undefined : { y: -3 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col gap-4 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[12px] p-7 shadow-[0_2px_12px_var(--color-shadow)] hover:shadow-[0_6px_20px_var(--color-shadow)] transition-shadow duration-200 group"
              >
                {/* Tag pill */}
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[12px] bg-[var(--color-accent-pale)] text-[var(--color-accent)] rounded px-2 py-0.5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="font-sans font-semibold text-[18px] leading-snug text-[var(--color-ink)]">
                  {post.title}
                </h3>

                {/* Date + read time */}
                <p className="font-sans text-[14px] text-[var(--color-ink-muted)]">
                  {post.published}
                  {post.readTime && (
                    <span className="ml-2 before:content-['·'] before:mr-2">{post.readTime}</span>
                  )}
                </p>

                {/* Description */}
                <p className="font-sans text-[15px] leading-[1.6] text-[var(--color-ink-muted)]">
                  {post.description}
                </p>

                {/* Read link */}
                <span className="mt-auto font-sans text-[15px] font-medium text-[var(--color-accent)] flex items-center gap-1 group-hover:underline">
                  Read on Medium
                  <ArrowUpRight size={15} strokeWidth={2} />
                </span>
              </motion.a>
            ))}
          </div>

          {/* Medium CTA */}
          <motion.div
            variants={shouldReduceMotion ? undefined : itemVariants}
            className="flex justify-center mt-12"
          >
            <a
              href={meta.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans font-medium text-[15px] text-[var(--color-accent)] flex items-center gap-1 hover:underline"
            >
              View all posts on Medium
              <ArrowUpRight size={15} strokeWidth={2} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
