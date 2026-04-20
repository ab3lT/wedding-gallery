'use client';

import { motion } from 'framer-motion';
import FloralDivider from './FloralDivider';

const MILESTONES = [
  {
    year: '2019',
    label: 'በአዲስ አበባ በአንድ ጓደኛ የልደት በዓል ላይ ለመጀመሪያ ጊዜ ተገናኙ።',
  },
  {
    year: '2021',
    label: 'አንዲት የቡና ቀጠሮ ወደ መቶ ተለወጠች።',
  },
  {
    year: '2024',
    label: 'እሱ ጠየቃት። እሷም እሺ አለች — ያለምንም ጥርጣሬ።',
  },
  {
    year: '2026',
    label: 'ዛሬ — የሁሉም ነገር ጅማሬ።',
  },
];

export default function CoupleStory() {
  return (
    <section id="story" className="relative bg-white py-28 sm:py-36 px-6">
      <div className="mx-auto max-w-5xl">
        <FloralDivider label="ታሪካችን" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as any }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-amharic font-normal text-display-lg text-ink text-balance leading-tight">
            ሁለት ሕይወቶች በእርጋታ{' '}
            <span className="text-gold-dark italic">ወደ አንድ እየሆኑ</span>
          </h2>
          <p className="mt-8 font-amharic text-lg sm:text-xl leading-relaxed text-ink-light text-pretty">
            በተጨናነቀ ክፍል ውስጥ በተደረገ ሰላምታ የተጀመረው ቀስ በቀስ ወደ እንጦጦ የረዥም
            ጉዞዎች፣ የተጋራ ቡና፣ የምሽት ስልክ ጥሪዎች እና ይህ ለዘላለም እንደሚቆይ ወደ
            ጸጥ ያለ እርግጠኝነት አደገ። ዛሬ፣ በሚወዷቸው ሁሉ ተከበው፣ አሮን እና ምስራቅ
            የቀሪ ሕይወታቸውን አብረው መጀመር ያዙ።
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {MILESTONES.map((m, i) => (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1 ] as any, 
                delay: i * 0.12,
              }}
              className="relative text-center group"
            >
              <div className="relative mx-auto w-px h-12 bg-gold/50 mb-6">
                <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-gold" />
              </div>
              <p className="font-display text-4xl text-gold-dark italic">
                {m.year}
              </p>
              <p className="mt-3 font-amharic text-ink-light text-base leading-relaxed max-w-[22ch] mx-auto">
                {m.label}
              </p>
            </motion.div>
          ))}

          {/* Horizontal connector line (desktop) */}
          <div
            aria-hidden
            className="pointer-events-none absolute top-6 left-[12.5%] right-[12.5%] h-px hidden lg:block ornament-line"
          />
        </div>
      </div>
    </section>
  );
}
