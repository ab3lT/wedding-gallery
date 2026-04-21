# አሮን እና ምስራቅ — የሰርግ ምስሎች እና መልዕክቶች

**Aron &amp; Meserak — Wedding Gallery**

A beautiful, editorial-style wedding site in **Amharic** with a **white &amp; gold** palette. Features a photo gallery, lightbox, bride highlight section, and a live guestbook.

Built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## ✨ Features

- **Fully Amharic UI** — all copy, labels, form fields, error messages, and timestamps are translated
- **Custom Amharic font** — loaded locally from `public/fonts/Seat-Regular.woff2` (Chiret-style)
- **White + gold palette** — pure, elegant, and easy to customize
- **Hero** — full-bleed image with staggered cinematic entrance
- **ታሪካችን (Our Story)** — narrative + animated timeline of key dates
- **ምስሎች (Gallery)** — 14 photos in a responsive masonry grid with hover zoom, like buttons, lazy loading, and a full-screen keyboard-navigable lightbox
- **ሙሽራዋ (The Bride)** — asymmetric editorial layout with 3 featured portraits
- **መልዕክቶች (Messages)** — live guestbook with optimistic updates, auto-polling, validation, and character limits
- **Music toggle** — drop `public/music.mp3` to enable a gentle background track
- Film-grain overlay, custom scrollbar, smooth scroll, Amharic relative timestamps ("5 ደቂቃ በፊት")

---

## 🚀 Run locally

Requirements: **Node.js 20+** and **npm** (or pnpm / yarn / bun).

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open the site
# http://localhost:3000
```

Other scripts:

```bash
npm run build   # production build
npm start       # run the production build
npm run lint    # ESLint
```

---

## 🔤 About the Amharic font

The site uses a custom Amharic font loaded locally via `next/font/local`. The file is at:

```
public/fonts/Seat-Regular.woff2
public/fonts/Seat-Regular.ttf
```

To swap it for a different Amharic font (e.g. the official Chiret, Nyala, Abyssinica SIL, Jiret, etc.):

1. Drop your `.woff2` / `.ttf` / `.otf` file into `public/fonts/`
2. Update the `src` paths in `app/layout.tsx` (inside the `localFont({ ... })` call)
3. That's it — every Amharic element on the page uses the `--font-amharic` CSS variable, so nothing else needs to change

System fallback fonts (`Nyala`, `Abyssinica SIL`, `serif`) are already configured in `tailwind.config.ts` so Amharic text will still render correctly while the custom font loads.

---

## 🎨 Customising

### Change the couple's names

Names appear in a handful of spots:

- Metadata &amp; page title — `app/layout.tsx`
- Hero copy — `components/Hero.tsx`
- Navigation monogram (አ · ም) — `components/Navigation.tsx`
- Footer signature — `components/Footer.tsx`
- The big "ምስራቅ" watermark in the bride section — `components/BrideSection.tsx`

### Swap the photos

All gallery + bride photos are defined in a single file: `lib/images.ts`.

1. **Local files** — drop images into `public/` (e.g. `public/gallery/01.jpg`) and set `src: '/gallery/01.jpg'` in `lib/images.ts`.
2. **External URLs** — point `src` at any hosted image. For a new domain, add it to `next.config.js`:
   ```js
   images: {
     remotePatterns: [
       { protocol: 'https', hostname: 'your-cdn.com', pathname: '/**' },
     ],
   },
   ```

Each photo supports a `span` of `'tall'` (2 rows), `'wide'` (2 cols), or `'square'` (default) to control the masonry layout.

### Update the timeline / story

Edit `components/CoupleStory.tsx` — the `MILESTONES` array at the top.

### Adjust the palette

All colors live in `tailwind.config.ts` under `theme.extend.colors`:

- `white` / `ivory` — backgrounds
- `gold` (+ `light`, `soft`, `dark`, `deep`) — the only accent color
- `ink` — dark text for readability

Change these and the entire site re-skins instantly.

### Add background music

Place an `mp3` at `public/music.mp3`. The toggle auto-hides if no file is found — just drop it in.

---

## 💾 Persisting comments (optional)

The default comment backend lives at `app/api/comments/route.ts` and keeps messages in memory. **They reset when the server restarts** — fine for demos, but for a real event you'll want a database.

### Option A — Firebase Firestore

```bash
npm install firebase
```

Create `lib/firebase.ts`:

```ts
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
};
export const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
export const db = getFirestore(app);
```

Then replace the in-memory array in `app/api/comments/route.ts` with `addDoc` / `getDocs` calls on a `comments` collection.

### Option B — Supabase

```bash
npm install @supabase/supabase-js
```

Create a `comments` table (columns: `id uuid`, `name text`, `message text`, `created_at timestamptz`) and replace the handlers with `supabase.from('comments').select()` / `.insert()`.

Add `.env.local` with your credentials — the frontend doesn't need any changes.

---

## 📁 Project structure

```
wedding-gallery/
├── app/
│   ├── api/comments/route.ts   # GET + POST guestbook API
│   ├── globals.css             # Tailwind + grain + custom utilities
│   ├── layout.tsx              # Fonts + metadata (lang="am")
│   └── page.tsx                # Composes all sections
├── components/
│   ├── Navigation.tsx          # Amharic menu links
│   ├── Hero.tsx                # Bilingual date (Ethiopian numerals)
│   ├── CoupleStory.tsx
│   ├── Gallery.tsx
│   ├── Lightbox.tsx            # keyboard-navigable
│   ├── BrideSection.tsx        # includes Amharic watermark
│   ├── Comments.tsx            # Amharic form + validation
│   ├── Footer.tsx
│   ├── MusicToggle.tsx
│   └── FloralDivider.tsx       # reusable ornamental divider
├── lib/
│   ├── images.ts               # Gallery + bride photo data (Amharic captions)
│   └── utils.ts                # cn() + Amharic relative-time formatter
├── public/
│   └── fonts/                  # Local Amharic font
│       ├── Seat-Regular.woff2
│       └── Seat-Regular.ttf
├── types/
│   └── index.ts
├── next.config.js
├── tailwind.config.ts          # white + gold palette
├── tsconfig.json
└── package.json
```

---

## 🚢 Deploying

Easiest path is **Vercel**:

```bash
npm install -g vercel
vercel
```

Any Node hosting provider that supports Next.js 15 will also work (Netlify, Render, a self-hosted VPS, etc.).

The `/api/comments` route requires a Node runtime — so keep it server-rendered if you want the guestbook.

---

በፍቅር የተሠራ። ለጥንዶቹ እንኳን ደስ አላችሁ 💛
