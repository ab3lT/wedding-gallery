import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import type { Comment, CreateCommentPayload } from '@/types';

export async function GET() {
  const { data: comments, error } = await supabase
    .from('comments')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching comments:', error);
    return NextResponse.json(
      { error: 'መልዕክቶችን ለማምጣት አልተሳካም።' },
      { status: 500 }
    );
  }

  return NextResponse.json({ comments });
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

  const { data: comment, error } = await supabase
    .from('comments')
    .insert({
      name,
      message,
    })
    .select()
    .single();

  if (error) {
    console.error('Error creating comment:', error);
    return NextResponse.json(
      { error: 'መልዕክት ለመላክ አልተሳካም።' },
      { status: 500 }
    );
  }

  return NextResponse.json({ comment }, { status: 201 });
}