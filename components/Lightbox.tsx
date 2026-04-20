'use client';

import { useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Photo } from '@/types';

interface LightboxProps {
  photos: Photo[];
  index: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({
  photos,
  index,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  const photo = index !== null ? photos[index] : null;

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (index === null) return;
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowLeft') onPrev();
      else if (e.key === 'ArrowRight') onNext();
    },
    [index, onClose, onPrev, onNext]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [handleKey]);

  // Lock body scroll while open
  useEffect(() => {
    if (index === null) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [index]);

  return (
    <AnimatePresence>
      {photo && index !== null && (
        <motion.div
          key="lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[80] flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label={photo.alt}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-ink/90 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Close */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 z-10 flex items-center justify-center w-11 h-11 rounded-full border border-white/30 bg-white/5 text-white hover:bg-white hover:text-ink transition-colors"
            aria-label="ዝጋ"
          >
            <X size={18} strokeWidth={1.5} />
          </button>

          {/* Prev */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-11 h-11 rounded-full border border-white/30 bg-white/5 text-white hover:bg-white hover:text-ink transition-colors"
            aria-label="የቀድሞ ምስል"
          >
            <ChevronLeft size={20} strokeWidth={1.5} />
          </button>

          {/* Next */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-11 h-11 rounded-full border border-white/30 bg-white/5 text-white hover:bg-white hover:text-ink transition-colors"
            aria-label="ቀጣይ ምስል"
          >
            <ChevronRight size={20} strokeWidth={1.5} />
          </button>

          {/* Image + caption stack */}
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-[5] max-w-[92vw] max-h-[88vh] w-full sm:w-auto flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-w-5xl aspect-[4/3] sm:aspect-auto sm:h-[78vh]">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 92vw, 80vw"
                className="object-contain"
                priority
              />
            </div>
            <div className="mt-5 text-center">
              {photo.caption && (
                <p className="font-amharic text-gold-soft text-2xl sm:text-3xl tracking-wide-am">
                  {photo.caption}
                </p>
              )}
              <p className="label-lt !text-white/70 mt-2">
                {index + 1} / {photos.length}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
