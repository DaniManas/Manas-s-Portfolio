'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { navLinks, meta } from '@/lib/data';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Move focus into menu when it opens; return focus to hamburger when it closes
  useEffect(() => {
    if (mobileOpen) {
      // Small delay so AnimatePresence has rendered the close button
      const timer = setTimeout(() => closeButtonRef.current?.focus(), 50);
      return () => clearTimeout(timer);
    } else {
      hamburgerRef.current?.focus();
    }
  }, [mobileOpen]);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setMobileOpen(false);
      const target = document.querySelector(href);
      if (target) {
        const top = target.getBoundingClientRect().top + window.scrollY - 64;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    },
    []
  );

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.06, duration: 0.25 },
    }),
  };

  return (
    <>
      {/* Desktop / sticky nav */}
      <nav
        className={[
          'fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300',
          scrolled
            ? 'bg-[var(--color-surface)] border-b border-[var(--color-border)] shadow-[0_2px_16px_var(--color-shadow)]'
            : 'bg-transparent',
        ].join(' ')}
      >
        <div className="max-w-content mx-auto px-6 flex items-center justify-between h-full">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group"
            aria-label="Manas Dani — home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <span className="w-8 h-8 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-white font-sans font-semibold text-xs select-none">
              MD
            </span>
            <span className="font-sans font-medium text-base text-[var(--color-ink)] group-hover:text-[var(--color-accent)] transition-colors duration-200">
              {meta.name}
            </span>
          </a>

          {/* Center links — desktop only */}
          <ul className="hidden md:flex items-center gap-8" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="relative font-sans text-sm font-medium tracking-wide text-[var(--color-ink-muted)] hover:text-[var(--color-accent)] transition-colors duration-200 group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-0 bg-[var(--color-accent)] transition-all duration-200 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Resume button — desktop */}
            <a
              href="/manas-dani-resume.pdf"
              download
              className="hidden md:flex items-center gap-1.5 font-sans text-sm font-medium text-[var(--color-accent)] border border-[var(--color-accent)] rounded-lg px-4 py-1.5 hover:bg-[var(--color-accent-pale)] transition-colors duration-200"
            >
              <Download size={14} />
              Download Resume
            </a>

            {/* Hamburger — mobile only */}
            <button
              ref={hamburgerRef}
              className="md:hidden p-2 text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors duration-200"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            className="fixed inset-0 z-50 flex flex-col bg-[var(--color-bg)] md:hidden"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.2 }}
            onClick={(e) => {
              if (e.target === e.currentTarget) setMobileOpen(false);
            }}
          >
            {/* Top bar */}
            <div className="flex items-center justify-between h-16 px-6 border-b border-[var(--color-border)]">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-white font-sans font-semibold text-xs select-none">
                  MD
                </span>
                <span className="font-sans font-medium text-base text-[var(--color-ink)]">
                  {meta.name}
                </span>
              </div>
              <button
                ref={closeButtonRef}
                className="p-2 text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors duration-200"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 flex flex-col justify-center px-8 gap-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  custom={i}
                  variants={shouldReduceMotion ? {} : linkVariants}
                  initial={shouldReduceMotion ? false : 'hidden'}
                  animate={shouldReduceMotion ? false : 'visible'}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-sans text-2xl font-medium text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors duration-200 py-3 border-b border-[var(--color-border)] last:border-0"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            {/* Resume button — bottom */}
            <div className="px-8 pb-10">
              <a
                href="/manas-dani-resume.pdf"
                download
                className="flex items-center justify-center gap-2 w-full font-sans text-sm font-medium text-white bg-[var(--color-accent)] rounded-lg px-4 py-3 hover:bg-[var(--color-accent-light)] transition-colors duration-200"
              >
                <Download size={16} />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
