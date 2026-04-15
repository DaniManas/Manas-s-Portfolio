'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { testimonials } from '@/lib/data';

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

export function Testimonials() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="testimonials" className="bg-[var(--color-accent-pale)]">
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
            What People Say
          </motion.p>

          {/* Heading */}
          <motion.h2
            variants={shouldReduceMotion ? undefined : itemVariants}
            className="font-serif font-semibold text-[28px] md:text-[36px] leading-tight text-[var(--color-ink)] mb-12"
          >
            Trusted by Mentors &amp; Leaders
          </motion.h2>

          {/* 2-column card grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.name}
                variants={shouldReduceMotion ? undefined : itemVariants}
                whileHover={shouldReduceMotion ? undefined : { y: -3 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col gap-4 bg-[var(--color-surface)] border border-[var(--color-border)] border-l-4 border-l-[var(--color-accent)] rounded-[12px] p-7 shadow-[0_2px_12px_var(--color-shadow)] hover:shadow-[0_6px_20px_var(--color-shadow)] transition-shadow duration-200"
              >
                {/* Decorative open-quote mark */}
                <span
                  aria-hidden="true"
                  className="font-serif text-[48px] leading-none text-[var(--color-accent)] select-none -mb-2"
                >
                  &ldquo;
                </span>

                {/* Quote text */}
                <p className="font-sans italic text-[16px] leading-[1.7] text-[var(--color-ink-muted)] flex-1">
                  {testimonial.quote}
                </p>

                {/* Attribution */}
                <div className="pt-2 border-t border-[var(--color-border)]">
                  <p className="font-sans font-semibold text-[16px] text-[var(--color-ink)]">
                    {testimonial.name}
                  </p>
                  <p className="font-sans text-[14px] text-[var(--color-ink-muted)] mt-0.5">
                    {testimonial.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
