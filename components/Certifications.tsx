'use client';

import { useState } from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { certifications } from '@/lib/data';

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

export function Certifications() {
  const shouldReduceMotion = useReducedMotion();
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});

  return (
    <section id="certifications" className="bg-[var(--color-bg)]">
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
            Certifications
          </motion.p>

          {/* Heading */}
          <motion.h2
            variants={shouldReduceMotion ? undefined : itemVariants}
            className="font-serif font-semibold text-[28px] md:text-[36px] leading-tight text-[var(--color-ink)] mb-12"
          >
            Credentials
          </motion.h2>

          {/* 2-column card grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.verifyLink}
                variants={shouldReduceMotion ? undefined : itemVariants}
                whileHover={shouldReduceMotion ? undefined : { y: -3 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col gap-4 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[12px] p-7 shadow-[0_2px_12px_var(--color-shadow)] hover:shadow-[0_6px_20px_var(--color-shadow)] transition-shadow duration-200 group"
              >
                {/* Badge image or fallback */}
                <div className="flex items-start gap-4">
                  {imgErrors[index] ? (
                    <div className="w-[72px] h-[72px] flex-shrink-0 rounded-lg bg-[var(--color-accent-pale)] flex items-center justify-center">
                      <span className="font-sans text-[10px] font-semibold text-[var(--color-accent)] text-center leading-tight px-1">
                        {cert.issuer}
                      </span>
                    </div>
                  ) : (
                    <div className="w-[72px] h-[72px] flex-shrink-0 relative">
                      <Image
                        src={cert.badgeUrl}
                        alt={`${cert.name} badge`}
                        fill
                        className="object-contain"
                        unoptimized
                        onError={() =>
                          setImgErrors((prev) => ({ ...prev, [index]: true }))
                        }
                      />
                    </div>
                  )}

                  {/* Issuer + name */}
                  <div className="flex flex-col gap-1">
                    <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.08em] text-[var(--color-ink-muted)]">
                      {cert.issuer}
                    </p>
                    <h3 className="font-sans font-semibold text-[16px] leading-snug text-[var(--color-ink)]">
                      {cert.name}
                    </h3>
                  </div>
                </div>

                {/* Validity */}
                <p className="font-sans text-[13px] text-[var(--color-ink-muted)]">
                  Issued: {cert.issued}
                  <span className="mx-2">·</span>
                  Expires: {cert.expires}
                </p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-[12px] bg-[var(--color-accent-pale)] text-[var(--color-accent)] rounded px-2 py-0.5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Verify link */}
                <a
                  href={cert.verifyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto font-sans text-[14px] font-medium text-[var(--color-accent)] flex items-center gap-1 group-hover:underline w-fit"
                >
                  Verify on Oracle CertView
                  <ArrowUpRight size={14} strokeWidth={2} />
                </a>
              </motion.div>
            ))}

            {/* Placeholder card */}
            <motion.div
              variants={shouldReduceMotion ? undefined : itemVariants}
              className="flex items-center justify-center min-h-[200px] border-2 border-dashed border-[var(--color-border)] rounded-[12px] p-7"
            >
              <p className="font-sans text-[15px] text-[var(--color-ink-muted)] text-center">
                More certifications coming soon
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
