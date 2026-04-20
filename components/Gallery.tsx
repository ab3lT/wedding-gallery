'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, Expand } from 'lucide-react';
import { galleryPhotos } from '@/lib/images';
import { cn } from '@/lib/utils';
import Lightbox from './Lightbox';
import FloralDivider from './FloralDivider';

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [likes, setLikes] = useState<Record<string, boolean>>({});

  const toggleLike = (id: string) => {
    setLikes((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const openAt = (i: number) => setLightboxIndex(i);
  const close = () => setLightboxIndex(null);
  const prev = () =>
    setLightboxIndex((i) =>
      i === null ? null : (i - 1 + galleryPhotos.length) % galleryPhotos.length
    );
  const next = () =>
    setLightboxIndex((i) =>
      i === null ? null : (i + 1) % galleryPhotos.length
    );

  return (
    <section
      id="gallery"
      className="relative bg-gradient-to-b from-white to-ivory py-24 sm:py-32 px-4 sm:px-6"
    >
      <div className="mx-auto max-w-7xl">
        <FloralDivider label="ምስሎች" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-14 sm:mb-20"
        >
          <h2 className="font-amharic font-normal text-display-lg text-ink text-balance">
            ለዘላለም{' '}
            <span className="text-gold-dark italic">የምናስታውሳቸው</span>{' '}
            ጊዜያት
          </h2>
          <p className="mt-6 font-amharic text-lg text-ink-muted text-pretty leading-relaxed">
            ከቀኑ ትንሽ ስብስብ። ማንኛውንም ምስል ሙሉ መጠን ለመክፈት ይጫኑ።
          </p>
        </motion.div>

        {/* Masonry grid — CSS grid with auto-rows + per-item spans */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[140px] sm:auto-rows-[180px] md:auto-rows-[200px] gap-3 sm:gap-4">
          {galleryPhotos.map((photo, i) => {
            const liked = likes[photo.id];
            return (
              <motion.button
                key={photo.id}
                type="button"
                onClick={() => openAt(i)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                  delay: (i % 4) * 0.08,
                }}
                className={cn(
                  'group relative overflow-hidden rounded-[2px] bg-ivory-300 cursor-pointer',
                  photo.span === 'tall' && 'row-span-2',
                  photo.span === 'wide' && 'col-span-2',
                  i === 0 && 'col-span-2 row-span-2'
                )}
                aria-label={`ምስል ክፈት፦ ${photo.alt}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  loading={i < 4 ? 'eager' : 'lazy'}
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08]"
                />

                {/* Hover wash */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Corner ornament */}
                <div className="absolute inset-3 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/80" />
                  <span className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/80" />
                  <span className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/80" />
                  <span className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/80" />
                </div>

                {/* Caption + expand hint */}
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 flex items-end justify-between gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  {photo.caption && (
                    <p className="font-amharic text-white text-lg sm:text-xl leading-tight drop-shadow text-left">
                      {photo.caption}
                    </p>
                  )}
                  <span className="ml-auto shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 text-white">
                    <Expand size={12} strokeWidth={1.5} />
                  </span>
                </div>

                {/* Like button */}
                <span
                  role="button"
                  tabIndex={0}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleLike(photo.id);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      e.stopPropagation();
                      toggleLike(photo.id);
                    }
                  }}
                  aria-label={liked ? 'ምስሉን ያስወግዱ' : 'ምስሉን ይወዱ'}
                  aria-pressed={liked}
                  className={cn(
                    'absolute top-3 right-3 inline-flex items-center justify-center w-8 h-8 rounded-full backdrop-blur-sm transition-all duration-300',
                    liked
                      ? 'bg-gold text-white scale-110'
                      : 'bg-white/20 text-white opacity-0 group-hover:opacity-100'
                  )}
                >
                  <Heart
                    size={13}
                    strokeWidth={1.5}
                    fill={liked ? 'currentColor' : 'none'}
                  />
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>

      <Lightbox
        photos={galleryPhotos}
        index={lightboxIndex}
        onClose={close}
        onPrev={prev}
        onNext={next}
      />
    </section>
  );
}
