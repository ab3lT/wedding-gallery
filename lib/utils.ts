import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format an ISO timestamp as an Amharic relative time string
 * (e.g. "አሁን"/"Just now", "5 ደቂቃ በፊት"/"5m ago").
 */
export function formatRelativeTime(iso: string): string {
  const date = new Date(iso);
  const diff = Date.now() - date.getTime();
  const seconds = Math.floor(diff / 1000);

  if (seconds < 30) return 'አሁን';
  if (seconds < 60) return `${seconds} ሰከንድ በፊት`;

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes} ደቂቃ በፊት`;

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} ሰዓት በፊት`;

  const days = Math.floor(hours / 24);
  if (days < 7) return `${days} ቀን በፊት`;

  // Amharic months (Gregorian)
  const monthsAm = [
    'ጃንዩዋሪ',
    'ፌብሩዋሪ',
    'ማርች',
    'ኤፕሪል',
    'ሜይ',
    'ጁን',
    'ጁላይ',
    'ኦገስት',
    'ሴፕቴምበር',
    'ኦክቶበር',
    'ኖቬምበር',
    'ዲሴምበር',
  ];
  const day = date.getDate();
  const month = monthsAm[date.getMonth()];
  const year = date.getFullYear();
  const thisYear = new Date().getFullYear();

  return year === thisYear ? `${month} ${day}` : `${month} ${day} ፣ ${year}`;
}
