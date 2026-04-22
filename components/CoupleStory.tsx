'use client';

import { motion } from 'framer-motion';
import FloralDivider from './FloralDivider';

const MILESTONES = [
  {
    year: '2015',
    label: 'በአዲስ አበባ በአንድ ጓደኛቸው የጋብቻ በዓል ላይ ለመጀመሪያ ጊዜ ተገናኙ።',
  },
  {
    year: '2016',
    label: 'አንዲት የቡና ቀጠሮ ወደ መቶ ተለወጠች።',
  },
  {
    year: '2018',
    label: 'ህዳር ወር ሽምግልና ተላከ ። እሷም እሺ አለች — ያለምንም ጥርጣሬ።',
  },
  {
    year: '2018',
    label: 'ዛሬ — መጋቢት 18 የሁሉም ነገር ጅማሬ። እግዚአብሄር ይመሰገን!',
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
          <h2 className="font-amharic font-normal text-display-md text-ink text-balance leading-tight">
            ሁልጊዜ በጌታ ደስ ይበላችኹ፤{' '}
            <span className="text-gold-dark italic"> ደግሜ እላለሁ ደስ ይበላችኹ።&quot; </span>
            <span className="text-sm"> ፊልጵ.4፥4 </span>
          </h2>
          <p className="mt-8 font-amharic text-lg sm:text-xl leading-relaxed text-ink-light text-pretty">
            በተጨናነቀ ክፍል ውስጥ በቀላል ሰላምታ የጀመረው ትውውቃቸው፣ ቀስ በቀስ ወደ እንጦጦ መናፈሻ ጉዞዎች፣ አብረው ወደተጠጡት ቡና፣ ወደ ምሽት ስልክ ጥሪዎች፣ እና ለዘላለም እንደሆነ ወደሚሰማቸው እርግጠኝነት አደገ።
            ዛሬ፣ በፍቅር ተባርከው በሚወዷቸው ሁሉ ክብር ተሸፍነው፣ አሮን እና ምስራቅ በዚህ የፍቅር ቀን የቀሪ ሕይወታቸውን ጉዞ አንድ ሆነው ለመጀመር ቃል ገቡ።
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {MILESTONES.map((m, i) => (
            <motion.div
              key={`${m.year}-${i}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1] as any,
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
