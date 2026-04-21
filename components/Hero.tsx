'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

import { getEthiopianYear } from '../lib/utils';

// const HERO_IMAGE =
  // 'https://images.unsplash.com/photo-1519741497674-611481863552?w=2400&q=85&auto=format&fit=crop';
const HERO_IMAGE = '/gallery/01.JPG';
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1]as any, delay },
  }),
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden"
    >
      {/* Background image */}
      <motion.div
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] as any}}
        className="absolute inset-0"
      >
        <Image
          src={HERO_IMAGE}
          alt="የአሮን እና የምስራቅ የሰርግ ቀን"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Warm vignette + tonal wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/20 to-ink/65" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(31,26,22,0.55))]" />

      {/* Top meta row */}
      <motion.div
        variants={fadeUp}
        custom={0.6}
        initial="hidden"
        animate="show"
        className="absolute top-24 left-0 right-0 flex items-center justify-center"
      >
        <div className="flex items-center gap-5 text-white/90">
          <span className="h-px w-10 bg-white/50" />
          <span className="label-am !text-white/85 !text-sm">
            የፍቅር በዓል
          </span>
          <span className="h-px w-10 bg-white/50" />
        </div>
      </motion.div>

      {/* Centerpiece */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        <motion.p
          variants={fadeUp}
          custom={0.9}
          initial="hidden"
          animate="show"
          className="font-amharic text-white/90 text-xl sm:text-2xl mb-6 tracking-wide-am"
        >
          የዲያቆን አሮን እና የወ/ሪት ምስራቅ
        </motion.p>

        <motion.h1
          variants={fadeUp}
          custom={1.1}
          initial="hidden"
          animate="show"
          className="font-amharic font-normal text-white text-display-xl text-balance"
        >
          አሮን
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.7, duration: 1 }}
            className="block font-amharic text-gold-soft text-4xl sm:text-5xl md:text-6xl my-3 md:my-4 italic"
            style={{ fontStyle: 'italic' }}
          >
            እና
          </motion.span>
          ምስራቅ
        </motion.h1>

        <motion.div
          variants={fadeUp}
          custom={1.6}
          initial="hidden"
          animate="show"
          className="mt-10 flex items-center gap-4 text-white/90"
        >
          <span className="h-px w-10 bg-gold-soft/70" />
          <span className="font-amharic text-gold-soft text-sm sm:text-base tracking-wide-am">
            መጋቢት ፲፰ ፣ ፳፻፲፰
          </span>
          <span className="h-px w-10 bg-gold-soft/70" />
        </motion.div>

        <motion.p
          variants={fadeUp}
          custom={1.8}
          initial="hidden"
          animate="show"
          className="mt-3 font-amharic text-white/80 text-lg"
        >
          አዲስ አበባ ፣ ኢትዮጵያ
        </motion.p>

        <motion.a
          variants={fadeUp}
          custom={2.1}
          initial="hidden"
          animate="show"
          href="#gallery"
          className="group mt-14 inline-flex items-center gap-3 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 backdrop-blur-sm transition-all duration-500 hover:bg-white hover:text-ink hover:border-white"
        >
          <span className="font-amharic text-white group-hover:text-ink transition-colors text-sm tracking-wide-am">
            ምስሎችን ይመልከቱ
          </span>
          <ArrowDown
            size={14}
            strokeWidth={1.5}
            className="transition-transform duration-500 group-hover:translate-y-1"
          />
        </motion.a>
      </div>

      {/* Bottom corner detail */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 1 }}
        className="absolute bottom-6 left-0 right-0 flex justify-between items-center px-8 text-white/60 text-xs"
      >
        <span className="font-amharic tracking-wide-am">ቁ. ፩</span>
        <span className="hidden sm:inline font-amharic tracking-wide-am">
          — ለዘላለም —
        </span>
        <span className="font-sans tracking-widest">{getEthiopianYear()} </span>
      </motion.div>
    </section>
  );
}
