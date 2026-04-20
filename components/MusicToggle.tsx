'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Music, VolumeX } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * A gentle floating music toggle.
 *
 * Drop an audio file at /public/music.mp3 (or change MUSIC_SRC) to
 * enable background audio. The button silently hides if the file
 * is missing — perfect as a "add music later" placeholder.
 */
const MUSIC_SRC = '/music.mp3';

export default function MusicToggle() {
  const [playing, setPlaying] = useState(false);
  const [available, setAvailable] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const a = new Audio(MUSIC_SRC);
    a.loop = true;
    a.volume = 0.35;
    a.preload = 'auto';
    a.addEventListener('error', () => setAvailable(false));
    audioRef.current = a;
    return () => {
      a.pause();
      audioRef.current = null;
    };
  }, []);

  const toggle = async () => {
    const a = audioRef.current;
    if (!a) return;
    try {
      if (playing) {
        a.pause();
        setPlaying(false);
      } else {
        await a.play();
        setPlaying(true);
      }
    } catch {
      setAvailable(false);
    }
  };

  if (!available) return null;

  return (
    <motion.button
      type="button"
      onClick={toggle}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 2.5 }}
      className={cn(
        'fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full shadow-lg border transition-all duration-500 flex items-center justify-center backdrop-blur-md',
        playing
          ? 'bg-gold text-white border-gold'
          : 'bg-white/90 text-ink border-gold/40 hover:bg-gold hover:text-white hover:border-gold'
      )}
      aria-label={playing ? 'ሙዚቃ አቁም' : 'ሙዚቃ አጫውት'}
      aria-pressed={playing}
    >
      {playing ? (
        <motion.span
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="flex items-center justify-center"
        >
          <Music size={16} strokeWidth={1.5} />
          <span className="absolute inset-0 rounded-full border border-white/60 animate-ping" />
        </motion.span>
      ) : (
        <VolumeX size={16} strokeWidth={1.5} />
      )}
    </motion.button>
  );
}
