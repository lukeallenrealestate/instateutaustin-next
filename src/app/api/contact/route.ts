import { NextResponse } from 'next/server';
import { SITE } from '@/lib/site';

export const runtime = 'edge';

export async function POST(req: Request) {
  let body: Record<string, unknown> = {};
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid json' }, { status: 400 });
  }

  const payload = {
    ...body,
    source: body.source ?? 'instateutaustin-unknown',
    referrer_site: SITE.leadDestination.referrerTag,
    submitted_at: new Date().toISOString(),
  };

  try {
    const r = await fetch(SITE.leadDestination.upstreamUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!r.ok) {
      return NextResponse.json({ ok: false, error: 'upstream error' }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false, error: 'network error' }, { status: 500 });
  }
}
