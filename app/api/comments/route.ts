import { NextResponse } from 'next/server';
import type { Comment, CreateCommentPayload } from '@/types';

/**
 * In-memory comment store.
 *
 * NOTE: Resets on server restart. For production, swap for a real
 * database — see README.md for Firebase / Supabase drop-in examples.
 */
const comments: Comment[] = [
  {
    id: 'seed-1',
    name: 'ሃና',
    message:
      'መሰሬ — በመተላለፊያው ላይ ስትጓዢ ማየት የህይወቴ እጅግ ቆንጆ ከሆኑ ጊዜያት አንዱ ነበር። ለሁለታችሁም የዕድሜ ልክ ፍቅር እመኛለሁ። 💛',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 26).toISOString(),
  },
  {
    id: 'seed-2',
    name: 'ዳዊት እና ሰላም',
    message:
      'ለምናውቃት እጅግ ብሩህ ሙሽራ እንኳን ደስ አለሽ። ጋብቻችሁ ልክ እንደ ዛሬው ደስታ የተሞላ ይሁን።',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 8).toISOString(),
  },
  {
    id: 'seed-3',
    name: 'አጎት ግርማ',
    message: 'በሁለታችሁም እኮራለሁ። ከአዲስ አበባ በረከት እልካለሁ። 🌿',
    createdAt: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
  },
];

export async function GET() {
  // Newest first
  const sorted = [...comments].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
  return NextResponse.json({ comments: sorted });
}

export async function POST(request: Request) {
  let body: CreateCommentPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: 'ልክ ያልሆነ መረጃ።' },
      { status: 400 }
    );
  }

  const name = (body.name ?? '').trim();
  const message = (body.message ?? '').trim();

  if (!name || name.length > 80) {
    return NextResponse.json(
      { error: 'እባክዎ ስም ያካፍሉ (1–80 ፊደላት)።' },
      { status: 400 }
    );
  }
  if (!message || message.length > 600) {
    return NextResponse.json(
      { error: 'መልዕክቶች በ1 እና 600 ፊደላት መካከል መሆን አለባቸው።' },
      { status: 400 }
    );
  }

  const comment: Comment = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    name,
    message,
    createdAt: new Date().toISOString(),
  };

  comments.push(comment);

  return NextResponse.json({ comment }, { status: 201 });
}
