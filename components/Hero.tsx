'use client';

import { useEffect, useState } from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { siGithub } from 'simple-icons';
import { BriefcaseBusiness, BookOpen, Mail, ChevronDown, ArrowRight } from 'lucide-react';
import type { LucideProps } from 'lucide-react';
import { meta, socialLinks } from '@/lib/data';

// Renders an SVG icon from simple-icons path data
function BrandIcon({ path, label, size = 20 }: { path: string; label: string; size?: number }) {
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

type LucideIcon = React.ComponentType<LucideProps>;

// Lucide icons for platforms without a clean simple-icons equivalent at small size
const lucideIconMap: Record<string, LucideIcon> = {
  Linkedin: BriefcaseBusiness,
  BookOpen,  // Medium — BookOpen is the intended semantic icon from data.ts
  Mail,
};

// Brand icons from simple-icons (SVG path data) — only where the mark renders well at 20px
const brandPathMap: Record<string, string> = {
  Github: siGithub.path,
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
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

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleViewWork = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.querySelector('#projects');
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16">
      <motion.div
        className="flex flex-col items-center gap-6"
        variants={shouldReduceMotion ? undefined : containerVariants}
        initial={shouldReduceMotion ? false : 'hidden'}
        animate="visible"
      >
        {/* Avatar */}
        <motion.div variants={shouldReduceMotion ? undefined : itemVariants}>
          {/* Placeholder for headshot — swap with next/image when photo is ready */}
          <div
            className="w-[120px] h-[120px] rounded-full bg-[var(--color-accent)] flex items-center justify-center shadow-[0_4px_24px_var(--color-shadow)]"
            aria-hidden="true"
          >
            <span className="font-serif text-[32px] text-white select-none">MD</span>
          </div>
        </motion.div>

        {/* Name */}
        <motion.div variants={shouldReduceMotion ? undefined : itemVariants}>
          <h1 className="font-serif font-bold text-[40px] md:text-[64px] leading-[1.1] text-[var(--color-ink)]">
            {meta.name}
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.div variants={shouldReduceMotion ? undefined : itemVariants}>
          <p className="font-sans text-[18px] md:text-[22px] text-[var(--color-ink-muted)] max-w-xl leading-relaxed">
            {meta.tagline}
          </p>
        </motion.div>

        {/* Specializations */}
        <motion.div variants={shouldReduceMotion ? undefined : itemVariants}>
          <p className="font-sans font-medium text-[15px] text-[var(--color-accent)]">
            {meta.specializations.join(' · ')}
          </p>
        </motion.div>

        {/* Status Badge */}
        <motion.div variants={shouldReduceMotion ? undefined : itemVariants}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-accent-pale)] text-[var(--color-accent)] font-sans font-medium text-sm">
            <motion.span
              className="w-2 h-2 rounded-full bg-[var(--color-accent)] inline-block"
              animate={shouldReduceMotion ? {} : { scale: [1, 1.4, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              aria-hidden="true"
            />
            {meta.statusBadge}
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4 mt-2"
          variants={shouldReduceMotion ? undefined : itemVariants}
        >
          <a
            href="#projects"
            onClick={handleViewWork}
            className="bg-[var(--color-accent)] text-white rounded-lg px-6 py-3 font-sans font-medium text-[15px] hover:bg-[var(--color-accent-light)] transition-colors duration-200"
          >
            View My Work
          </a>
          <a
            href={meta.medium}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 border border-[var(--color-accent)] text-[var(--color-accent)] rounded-lg px-6 py-3 font-sans font-medium text-[15px] hover:bg-[var(--color-accent-pale)] transition-colors duration-200"
          >
            Read My Writing
            <ArrowRight size={15} />
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex items-center gap-5 mt-2"
          variants={shouldReduceMotion ? undefined : itemVariants}
        >
          {socialLinks.map((link) => {
            const isMail = link.url.startsWith('mailto');
            const brandPath = brandPathMap[link.icon];
            const LucideIcon = lucideIconMap[link.icon];

            return (
              <a
                key={link.platform}
                href={link.url}
                target={isMail ? undefined : '_blank'}
                rel={isMail ? undefined : 'noopener noreferrer'}
                aria-label={link.platform}
                className="text-[var(--color-ink-muted)] hover:text-[var(--color-accent)] transition-colors duration-200"
              >
                {brandPath ? (
                  <BrandIcon path={brandPath} label={link.platform} size={20} />
                ) : LucideIcon ? (
                  <LucideIcon size={20} aria-hidden="true" />
                ) : null}
              </a>
            );
          })}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--color-ink-muted)]"
        animate={shouldReduceMotion ? {} : { opacity: scrolled ? 0 : 0.6 }}
        transition={{ duration: 0.3 }}
        aria-hidden="true"
      >
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}
