'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Heart, Quote } from 'lucide-react';
import type { Comment } from '@/types';
import { cn, formatRelativeTime } from '@/lib/utils';
import FloralDivider from './FloralDivider';

const MAX_NAME = 80;
const MAX_MSG = 600;

export default function Comments() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const messageRef = useRef<HTMLTextAreaElement>(null);

  const fetchComments = useCallback(async () => {
    try {
      const res = await fetch('/api/comments', { cache: 'no-store' });
      if (!res.ok) throw new Error('መልዕክቶችን መጫን አልተቻለም።');
      const data = (await res.json()) as { comments: Comment[] };
      setComments(data.comments);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  // Initial fetch + gentle polling every 15s (cheap real-time feel)
  useEffect(() => {
    fetchComments();
    const id = setInterval(fetchComments, 15_000);
    return () => clearInterval(id);
  }, [fetchComments]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    const trimmedName = name.trim();
    const trimmedMsg = message.trim();
    if (!trimmedName || !trimmedMsg) {
      setError('እባክዎ ስምዎን እና መልዕክትዎን ያስገቡ።');
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch('/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: trimmedName, message: trimmedMsg }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? 'የሆነ ስህተት ተከስቷል።');

      // Optimistic insert at top
      setComments((prev) => [data.comment as Comment, ...prev]);
      setMessage('');
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'የሆነ ስህተት ተከስቷል። እንደገና ይሞክሩ።'
      );
    } finally {
      setSubmitting(false);
    }
  };

  // Auto-grow the textarea
  useEffect(() => {
    const ta = messageRef.current;
    if (!ta) return;
    ta.style.height = 'auto';
    ta.style.height = `${Math.min(ta.scrollHeight, 240)}px`;
  }, [message]);

  return (
    <section id="messages" className="relative bg-white py-28 sm:py-36 px-5 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <FloralDivider label="ለሙሽራዋ መልዕክቶች" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="font-amharic font-normal text-display-lg text-ink text-balance">
            አንዲት <span className="text-gold-dark italic">ትንሽ ማስታወሻ</span>{' '}
            ይተዉ
          </h2>
          <p className="mt-6 font-amharic text-lg text-ink-muted text-pretty leading-relaxed">
            ምኞት ፣ ምርቃት ፣ ወይም አንድ ትዝታ — ምስራቅ አንድ ቀን የምታነበው ምንም ቢሆን።
          </p>
        </motion.div>

        {/* Form card */}
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto max-w-2xl bg-ivory-50 border border-gold/30 rounded-[2px] p-7 sm:p-10 shadow-[0_30px_60px_-40px_rgba(31,26,22,0.2)]"
        >
          {/* Decorative corner ticks */}
          <span
            aria-hidden
            className="absolute top-3 left-3 w-4 h-4 border-t border-l border-gold/60"
          />
          <span
            aria-hidden
            className="absolute top-3 right-3 w-4 h-4 border-t border-r border-gold/60"
          />
          <span
            aria-hidden
            className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-gold/60"
          />
          <span
            aria-hidden
            className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-gold/60"
          />

          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block label-am mb-3">
                ስምዎ
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value.slice(0, MAX_NAME))}
                placeholder="ለምሳሌ ፦ ሰላማዊት"
                maxLength={MAX_NAME}
                className="w-full bg-transparent border-0 border-b border-ink/20 focus:border-gold outline-none py-2 font-amharic text-xl text-ink placeholder:text-ink-muted/50 transition-colors"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="flex items-center justify-between label-am mb-3"
              >
                <span>መልዕክትዎ</span>
                <span className="text-ink-muted/60 font-sans text-[10px] tracking-normal">
                  {message.length} / {MAX_MSG}
                </span>
              </label>
              <textarea
                id="message"
                ref={messageRef}
                value={message}
                onChange={(e) => setMessage(e.target.value.slice(0, MAX_MSG))}
                placeholder="ምኞት ፣ ምርቃት ወይም ተወዳጅ ትዝታ ይጻፉ …"
                rows={3}
                className="w-full bg-transparent border-0 border-b border-ink/20 focus:border-gold outline-none py-2 font-amharic text-lg text-ink placeholder:text-ink-muted/50 transition-colors resize-none leading-relaxed"
                required
              />
            </div>

            <AnimatePresence>
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="font-amharic text-sm text-gold-deep"
                >
                  {error}
                </motion.p>
              )}
              {success && (
                <motion.p
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="font-amharic text-sm text-gold-dark flex items-center gap-2"
                >
                  <Heart size={12} strokeWidth={2} fill="currentColor" />
                  አመሰግናለሁ — መልዕክትዎ ደርሷል።
                </motion.p>
              )}
            </AnimatePresence>

            <div className="flex justify-end pt-2">
              <button
                type="submit"
                disabled={submitting}
                className={cn(
                  'group inline-flex items-center gap-3 rounded-full px-7 py-3 bg-ink text-white transition-all duration-500 hover:bg-gold-dark',
                  submitting && 'opacity-60 cursor-not-allowed'
                )}
              >
                <span className="font-amharic text-white tracking-wide-am text-sm">
                  {submitting ? 'በመላክ ላይ …' : 'በፍቅር ይላኩ'}
                </span>
                <Send
                  size={13}
                  strokeWidth={1.5}
                  className="transition-transform duration-500 group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>
        </motion.form>

        {/* Comments list */}
        <div className="mt-20">
          <div className="flex items-baseline justify-between mb-10 gap-4">
            <h3 className="font-amharic text-2xl sm:text-3xl text-ink">
              ከሚወዷችሁ ሰዎች
            </h3>
            <span className="label-am whitespace-nowrap">
              {loading
                ? '—'
                : `${comments.length} ${comments.length === 1 ? 'ማስታወሻ' : 'ማስታወሻዎች'}`}
            </span>
          </div>

          {loading ? (
            <div className="grid sm:grid-cols-2 gap-5">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-36 rounded-[2px] bg-ivory-200 animate-pulse"
                />
              ))}
            </div>
          ) : comments.length === 0 ? (
            <p className="text-center font-amharic italic text-ink-muted py-12">
              የመጀመሪያውን ማስታወሻ ይተዉ።
            </p>
          ) : (
            <motion.div className="grid sm:grid-cols-2 gap-5" layout>
              <AnimatePresence initial={false}>
                {comments.map((c, i) => (
                  <motion.article
                    key={c.id}
                    layout
                    initial={{ opacity: 0, y: 20, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1] as any,
                      delay: Math.min(i * 0.04, 0.3),
                    }}
                    className="relative bg-ivory-50 border border-gold/20 rounded-[2px] p-6 sm:p-7 hover:border-gold/50 transition-colors"
                  >
                    <Quote
                      size={18}
                      strokeWidth={1}
                      className="absolute top-5 right-5 text-gold/40"
                    />
                    <p className="font-amharic text-lg leading-relaxed text-ink-light text-pretty">
                      {c.message}
                    </p>
                    <div className="mt-5 pt-4 border-t border-gold/20 flex items-baseline justify-between gap-3">
                      <p className="font-amharic text-xl text-gold-dark leading-none italic">
                        {c.name}
                      </p>
                      <time
                        dateTime={c.createdAt}
                        className="label-am !text-[10px] !text-ink-muted whitespace-nowrap"
                      >
                        {formatRelativeTime(c.createdAt)}
                      </time>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
