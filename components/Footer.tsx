'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative bg-ink text-white/90 overflow-hidden">
      {/* Subtle top ornament */}
      <div className="absolute top-0 left-0 right-0 flex justify-center">
        <span className="block h-px w-40 bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-amharic text-gold-soft tracking-wide-am text-sm">
            በምስጋና
          </p>
          <h2 className="mt-6 font-amharic text-gold-soft text-5xl sm:text-6xl md:text-7xl leading-tight">
            አሮን{' '}
            <span className="inline-block mx-2 italic text-gold">እና</span>{' '}
            ምስራቅ
          </h2>
          <div className="mt-6 flex items-center justify-center gap-5">
            <span className="h-px w-16 bg-gold/40" />
            <span className="font-amharic text-gold/80 tracking-wide-am text-sm">
              ሰኔ ፲፬ ፣ ፳፻፲፰
            </span>
            <span className="h-px w-16 bg-gold/40" />
          </div>
          <p className="mt-10 font-amharic text-white/75 max-w-lg mx-auto text-pretty leading-relaxed">
            በአካል ወይም ከሩቅ ፣ ከእኛ ጋር በማክበርዎ እናመሰግናለን። ፍቅራችሁ ልንጠይቀው
            የምንችለው ምርጡ ስጦታ ነው።
          </p>
        </motion.div>

        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 font-amharic text-[12px] text-white/50">
          <span>© {new Date().getFullYear()} ቤተሰቡ</span>
          <span>አዲስ አበባ ፣ ኢትዮጵያ</span>
          <span>በፍቅር የተሠራ</span>
        </div>
      </div>
    </footer>
  );
}
