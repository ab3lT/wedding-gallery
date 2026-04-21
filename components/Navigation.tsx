'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const LINKS = [
  { href: '#story', label: 'ታሪካችን' },     // Our Story
  { href: '#gallery', label: 'ምስሎች' },    // Gallery
  { href: '#bride', label: 'ሙሽራዋ' },      // The Bride
  { href: '#messages', label: 'መልዕክቶች' }, // Messages
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1]as any, delay: 0.2 }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-white/90 backdrop-blur-md border-b border-gold/20 py-3'
            : 'bg-transparent py-5'
        )}
      >
        <nav className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between">
          <a
            href="#top"
            className="flex items-center gap-2.5 group"
            aria-label="Home"
          >
            <span
              className={cn(
                'font-amharic text-2xl sm:text-3xl leading-none transition-colors',
                scrolled ? 'text-gold-dark' : 'text-gold'
              )}
            >
              አ
            </span>
            <span
              className={cn(
                'font-display italic text-sm transition-colors',
                scrolled ? 'text-ink-muted' : 'text-ink-muted/80'
              )}
            >
              ·
            </span>
            <span
              className={cn(
                'font-amharic text-2xl sm:text-3xl leading-none transition-colors',
                scrolled ? 'text-gold-dark' : 'text-gold'
              )}
            >
              ም
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-10">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    'label-am gold-underline !text-base transition-colors hover:text-ink'
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="md:hidden flex items-center justify-center w-10 h-10 text-ink"
            aria-label="ዝርዝር ይክፈቱ"
          >
            <Menu size={22} strokeWidth={1.5} />
          </button>
        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] md:hidden"
          >
            <div
              className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as any }}
              className="absolute top-0 right-0 bottom-0 w-[82%] max-w-xs bg-white shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-gold/20">
                <span className="font-amharic text-3xl text-gold-dark leading-none">
                  አ · ም
                </span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="w-10 h-10 flex items-center justify-center text-ink"
                  aria-label="ዝጋ"
                >
                  <X size={22} strokeWidth={1.5} />
                </button>
              </div>
              <ul className="flex-1 flex flex-col justify-center gap-2 px-8">
                {LINKS.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block py-3 font-amharic text-3xl text-ink"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="px-8 py-6 border-t border-gold/20">
                <p className="label-lt">14 · 06 · 2026</p>
                <p className="font-amharic text-xl mt-2">አዲስ አበባ</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
