'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { bridePhotos } from '@/lib/images';
import FloralDivider from './FloralDivider';

export default function BrideSection() {
  return (
    <section
      id="bride"
      className="relative py-28 sm:py-36 px-5 sm:px-6 overflow-hidden"
      style={{
        background:
          'linear-gradient(180deg, #FAF8F3 0%, #FFFFFF 50%, #FAF8F3 100%)',
      }}
    >
      {/* Decorative Amharic watermark */}
      <span
        aria-hidden
        className="pointer-events-none absolute top-4 left-1/2 -translate-x-1/2 font-amharic text-[18vw] leading-none text-gold/10 select-none whitespace-nowrap"
      >
        ምስራቅ
      </span>

      <div className="relative mx-auto max-w-6xl">
        <FloralDivider label="ሙሽራዋ" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="label-am">ምስል በምስል</p>
          <h2 className="mt-3 font-amharic font-normal text-display-lg text-ink text-balance">
            ለ <span className="text-gold-dark italic">ምስራቅ</span> ፣ በፍቅር
          </h2>
          <p className="mt-6 font-amharic text-lg text-ink-muted text-pretty leading-relaxed">
            ከሥነ ሥርዓቱ በፊት ፣ በእቅፋች መካከል ፣ እና ከእንባ በኋላ ፤ የሙሽሪት ጸጥ
            ያሉ ጥቂት ምስሎች።
          </p>
        </motion.div>

        {/* Asymmetric editorial layout */}
        <div className="mt-20 space-y-24 sm:space-y-32">
          {bridePhotos.map((photo, i) => {
            const reverse = i % 2 === 1;
            return (
              <div
                key={photo.id}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 items-center"
              >
                <motion.div
                  initial={{ opacity: 0, x: reverse ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className={
                    reverse
                      ? 'md:col-span-7 md:order-2'
                      : 'md:col-span-7'
                  }
                >
                  <div className="relative aspect-[4/5] w-full max-w-xl mx-auto overflow-hidden rounded-[2px] shadow-[0_30px_80px_-30px_rgba(31,26,22,0.3)]">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                    {/* thin gold inner border */}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-3 border border-white/40"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.15,
                  }}
                  className={
                    reverse
                      ? 'md:col-span-5 md:order-1 md:text-right'
                      : 'md:col-span-5'
                  }
                >
                  <p className="label-am">
                    ቁጥር {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mt-3 font-amharic text-gold-dark text-4xl sm:text-5xl leading-tight">
                    {photo.caption}
                  </h3>
                  <div
                    className={
                      reverse
                        ? 'mt-5 ml-auto h-px w-16 bg-gold/60'
                        : 'mt-5 h-px w-16 bg-gold/60'
                    }
                  />
                  <p className="mt-6 font-amharic text-lg sm:text-xl leading-relaxed text-ink-light text-pretty">
                    {photo.description}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
