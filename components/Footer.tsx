'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { footerLinks, footerTagline, meta } from '@/lib/data';

const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  },
};

export function Footer() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <footer className="bg-[var(--color-footer-bg)] border-t border-[var(--color-border)]">
      <div className="max-w-content mx-auto px-6 py-8">
        <motion.div
          variants={shouldReduceMotion ? undefined : fadeInVariants}
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left"
        >
          {/* Left: copyright */}
          <p className="font-sans text-[13px] text-[var(--color-ink-muted)]">
            © 2026 {meta.name}
          </p>

          {/* Center: nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-sans text-[13px] font-medium text-[var(--color-ink-muted)] hover:text-[var(--color-accent)] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right: tagline */}
          <p className="font-sans text-[13px] text-[var(--color-ink-muted)]">
            {footerTagline}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
