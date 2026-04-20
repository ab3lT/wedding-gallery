'use client';

import { motion } from 'framer-motion';

interface FloralDividerProps {
  label?: string;
  /** Set true for Latin labels (uppercase, mega-wide). Default is Amharic styling. */
  latinLabel?: boolean;
}

/**
 * Ornamental section divider — thin gold lines flanking a small
 * hand-drawn leaf motif. Label uses Amharic-friendly spacing by default.
 */
export default function FloralDivider({
  label,
  latinLabel = false,
}: FloralDividerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="flex items-center justify-center gap-5 py-8"
    >
      <span
        className="h-px w-16 sm:w-28 md:w-40 ornament-line"
        aria-hidden
      />
      <svg
        width="48"
        height="24"
        viewBox="0 0 48 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          d="M24 4 C 18 4, 14 9, 14 12 C 14 15, 18 20, 24 20 C 30 20, 34 15, 34 12 C 34 9, 30 4, 24 4 Z"
          stroke="#C9A961"
          strokeWidth="0.8"
          fill="none"
          opacity="0.9"
        />
        <circle cx="24" cy="12" r="1.2" fill="#C9A961" />
        <path
          d="M14 12 L 4 12 M 34 12 L 44 12"
          stroke="#C9A961"
          strokeWidth="0.8"
          opacity="0.5"
        />
        <circle cx="4" cy="12" r="1" fill="#C9A961" opacity="0.7" />
        <circle cx="44" cy="12" r="1" fill="#C9A961" opacity="0.7" />
      </svg>
      {label && (
        <span
          className={
            latinLabel
              ? 'label-lt whitespace-nowrap'
              : 'label-am whitespace-nowrap'
          }
        >
          {label}
        </span>
      )}
      <span
        className="h-px w-16 sm:w-28 md:w-40 ornament-line"
        aria-hidden
      />
    </motion.div>
  );
}
