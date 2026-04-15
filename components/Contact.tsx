'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { Mail, BriefcaseBusiness, BookOpen, ArrowUpRight, type LucideProps } from 'lucide-react';
import { siGithub } from 'simple-icons';
import { contactLinks, contactSection } from '@/lib/data';

type LucideIcon = React.ComponentType<LucideProps>;

// Renders a brand SVG icon from simple-icons path data
function BrandIcon({ path, label, size = 18 }: { path: string; label: string; size?: number }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      width={size}
      height={size}
      aria-label={label}
    >
      <path d={path} />
    </svg>
  );
}

const lucideIconMap: Record<string, LucideIcon> = {
  Mail,
  Linkedin: BriefcaseBusiness,
  BookOpen,
};

const brandPathMap: Record<string, { path: string; label: string }> = {
  Github: { path: siGithub.path, label: 'GitHub' },
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

export function Contact() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="contact" className="bg-[var(--color-bg)]">
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
            className="font-sans font-semibold text-[11px] uppercase tracking-[0.12em] text-[var(--color-accent)] mb-2 text-center"
          >
            {contactSection.eyebrow}
          </motion.p>

          {/* Heading */}
          <motion.h2
            variants={shouldReduceMotion ? undefined : itemVariants}
            className="font-serif font-semibold text-[28px] md:text-[36px] leading-tight text-[var(--color-ink)] mb-4 text-center"
          >
            {contactSection.heading}
          </motion.h2>

          {/* Sub-text */}
          <motion.p
            variants={shouldReduceMotion ? undefined : itemVariants}
            className="font-sans text-[16px] leading-[1.7] text-[var(--color-ink-muted)] max-w-xl mx-auto text-center mb-12"
          >
            {contactSection.subtext}
          </motion.p>

          {/* Contact links grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {contactLinks.map((link) => {
              const LucideIcon = lucideIconMap[link.icon];
              const brand = brandPathMap[link.icon];
              const isExternal = link.url.startsWith('http');
              return (
                <motion.a
                  key={link.label}
                  href={link.url}
                  {...(isExternal
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  variants={shouldReduceMotion ? undefined : itemVariants}
                  whileHover={shouldReduceMotion ? undefined : { y: -3 }}
                  transition={{ duration: 0.2 }}
                  className="group flex items-center gap-4 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[12px] p-5 shadow-[0_2px_12px_var(--color-shadow)] hover:shadow-[0_6px_20px_var(--color-shadow)] hover:border-[var(--color-accent)] transition-all duration-200"
                >
                  <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-[8px] bg-[var(--color-accent-pale)] text-[var(--color-accent)]">
                    {brand ? (
                      <BrandIcon path={brand.path} label={brand.label} size={18} />
                    ) : LucideIcon ? (
                      <LucideIcon size={18} strokeWidth={2} aria-hidden="true" />
                    ) : null}
                  </span>
                  <span className="font-sans text-[14px] font-medium text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors duration-200 truncate flex-1">
                    {link.label}
                  </span>
                  <ArrowUpRight
                    size={15}
                    strokeWidth={2}
                    className="flex-shrink-0 text-[var(--color-ink-muted)] group-hover:text-[var(--color-accent)] transition-colors duration-200"
                    aria-hidden="true"
                  />
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
