'use client';

import { useState, type FormEvent } from 'react';

interface Props {
  source: string;       // e.g. "instateutaustin-condos-near-ut"
  variant?: 'full' | 'inline' | 'minimal';
  heading?: string;
  subhead?: string;
}

export function ContactForm({ source, variant = 'full', heading, subhead }: Props) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'err'>('idle');
  const [msg, setMsg] = useState('');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const data: Record<string, string> = { source, page: window.location.pathname };
    new FormData(e.currentTarget).forEach((v, k) => { data[k] = String(v); });
    try {
      const r = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (r.ok) {
        setStatus('ok');
        setMsg('Thanks, your message is on its way. You will hear back within one business day.');
        (e.target as HTMLFormElement).reset();
        // Fire analytics events if loaded
        const w = window as unknown as { dataLayer?: unknown[]; fbq?: (...args: unknown[]) => void };
        if (w.dataLayer) w.dataLayer.push({ event: 'lead_form_submit', source });
        if (typeof w.fbq === 'function') w.fbq('track', 'Lead', { source });
      } else {
        setStatus('err');
        setMsg('Something went wrong. Please email luke@austinmdg.com directly.');
      }
    } catch {
      setStatus('err');
      setMsg('Network error. Please email luke@austinmdg.com directly.');
    }
  }

  const inputCls = 'block w-full mt-1.5 p-2.5 bg-white border border-border rounded text-ink focus:outline-none focus:border-gold';
  const labelCls = 'block mb-3.5 text-xs font-semibold text-navy';

  return (
    <form
      onSubmit={onSubmit}
      className={variant === 'full' ? 'bg-cream p-8 rounded-md border border-border' : 'space-y-3'}
      aria-label="Contact form"
    >
      {heading && <h3 className="mt-0 mb-1">{heading}</h3>}
      {subhead && <p className="text-mid text-sm mb-4">{subhead}</p>}

      {variant === 'minimal' ? (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 items-end">
          <label className="text-xs">Name <input className={inputCls} type="text" name="name" required autoComplete="name" /></label>
          <label className="text-xs">Email <input className={inputCls} type="email" name="email" required autoComplete="email" /></label>
          <button className="btn btn-gold" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send'}
          </button>
        </div>
      ) : (
        <>
          <label className={labelCls}>Your name <input className={inputCls} type="text" name="name" required autoComplete="name" /></label>
          <label className={labelCls}>Email <input className={inputCls} type="email" name="email" required autoComplete="email" /></label>
          <label className={labelCls}>Phone (optional) <input className={inputCls} type="tel" name="phone" autoComplete="tel" /></label>
          <label className={labelCls}>I am a parent of:
            <select className={inputCls} name="student_status" required>
              <option value="">— select —</option>
              <option>Incoming freshman (Fall 2026)</option>
              <option>Incoming freshman (Fall 2027 or later)</option>
              <option>Current UT undergraduate</option>
              <option>UT transfer student</option>
              <option>UT graduate student</option>
              <option>Considering UT — not yet admitted</option>
              <option>I am the student (independent)</option>
            </select>
          </label>
          <label className={labelCls}>Your question
            <textarea className={`${inputCls} min-h-[110px] resize-y`} name="message" required placeholder="Tell us what you are trying to figure out." />
          </label>
          <button className="btn btn-gold w-full" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send'}
          </button>
        </>
      )}

      <div className={`text-sm mt-3 ${status === 'ok' ? 'text-green-700' : status === 'err' ? 'text-red-700' : ''}`}>
        {msg}
      </div>
    </form>
  );
}
