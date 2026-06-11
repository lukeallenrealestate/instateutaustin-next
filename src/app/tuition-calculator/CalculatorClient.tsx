'use client';

import { useState, useMemo, type FormEvent } from 'react';
import { TUITION, fmtUSD, type CollegeKey } from '@/lib/tuition';

type FirstYearMode = 'no' | 'yes' | 'never';

export function CalculatorClient() {
  const [startYear, setStartYear] = useState(2027);
  const [college, setCollege] = useState<CollegeKey>('base');
  const [credits, setCredits] = useState<12 | 15 | 18>(15);
  const [years, setYears] = useState<3 | 4 | 5>(4);
  const [firstYearInState, setFirstYearInState] = useState<FirstYearMode>('no');
  const [increasePct, setIncreasePct] = useState(4);

  const computed = useMemo(() => {
    const inc = increasePct / 100;
    const tuit = TUITION.colleges[college];
    const mult = TUITION.creditMultiplier[credits];
    const baseIn = tuit.in * mult;
    const baseOut = tuit.out * mult;

    const rows: Array<{ year: number; outYr: number; planYr: number; saved: number }> = [];
    let totalOut = 0, totalPlan = 0;
    for (let y = 1; y <= years; y++) {
      const factor = Math.pow(1 + inc, y - 1);
      const outYr = baseOut * factor;
      const inYr = baseIn * factor;
      const planYr =
        firstYearInState === 'never' ? outYr
        : firstYearInState === 'yes' ? inYr
        : (y === 1 ? outYr : inYr);
      rows.push({ year: startYear + (y - 1), outYr, planYr, saved: outYr - planYr });
      totalOut += outYr;
      totalPlan += planYr;
    }

    const saved = totalOut - totalPlan;
    let subText: string;
    if (firstYearInState === 'never') subText = 'You are not pursuing residency. This is the baseline cost.';
    else if (firstYearInState === 'yes') subText = `Saved over ${years} years by being in-state from year 1.`;
    else subText = `Saved over ${years} years by switching to in-state status in year 2.`;

    const payload =
      `UT Austin Tuition Plan — ${tuit.label} / ${credits}hr / start ${startYear}\n` +
      rows.map(r => `Year ${r.year}: out-of-state ${fmtUSD(r.outYr)}, your plan ${fmtUSD(r.planYr)}, saved ${fmtUSD(r.saved)}`).join('\n') +
      `\nTotal saved: ${fmtUSD(saved)}.`;

    return { rows, totalOut, totalPlan, saved, subText, payload };
  }, [startYear, college, credits, years, firstYearInState, increasePct]);

  return (
    <div className="bg-white border border-hairline rounded-xl shadow-xl -mt-10 relative z-10 overflow-hidden">
      <div className="grid md:grid-cols-[360px_1fr]">

        {/* INPUTS */}
        <div className="bg-cream p-8 border-r border-hairline">
          <h3 className="mt-0 text-base uppercase tracking-widest text-ink font-bold">Your inputs</h3>

          <Field label="First-year Fall enrollment">
            <select className="iua-select" value={startYear} onChange={e => setStartYear(parseInt(e.target.value, 10))}>
              {[2026, 2027, 2028, 2029].map(y => <option key={y} value={y}>Fall {y}</option>)}
            </select>
          </Field>
          <Field label="College / track">
            <select className="iua-select" value={college} onChange={e => setCollege(e.target.value as CollegeKey)}>
              {Object.entries(TUITION.colleges).map(([k, v]) => (
                <option key={k} value={k}>{v.label}</option>
              ))}
            </select>
          </Field>
          <Field label="Credit load (avg / semester)">
            <select className="iua-select" value={credits} onChange={e => setCredits(parseInt(e.target.value, 10) as 12 | 15 | 18)}>
              <option value={15}>15 hours (on-track)</option>
              <option value={12}>12 hours (minimum full-time)</option>
              <option value={18}>18 hours (overload)</option>
            </select>
          </Field>
          <Field label="Years to graduation">
            <select className="iua-select" value={years} onChange={e => setYears(parseInt(e.target.value, 10) as 3 | 4 | 5)}>
              <option value={3}>3 years (early grad)</option>
              <option value={4}>4 years</option>
              <option value={5}>5 years</option>
            </select>
          </Field>
          <Field label="First year in-state? (some petition immediately)">
            <select className="iua-select" value={firstYearInState} onChange={e => setFirstYearInState(e.target.value as FirstYearMode)}>
              <option value="no">No, out-of-state first year, in-state from year 2</option>
              <option value="yes">Yes, in-state from year 1</option>
              <option value="never">Never, out-of-state every year (baseline)</option>
            </select>
          </Field>
          <Field label="Annual tuition increase (%)">
            <input className="iua-select" type="number" min={0} max={15} step={0.5} value={increasePct}
              onChange={e => setIncreasePct(parseFloat(e.target.value) || 0)} />
          </Field>
        </div>

        {/* OUTPUT */}
        <div className="p-8">
          <div className="bg-paper border-l-4 border-burnt p-7 rounded-r mb-6">
            <div className="text-xs font-bold uppercase tracking-widest text-ink">Total savings (out-of-state vs. modeled)</div>
            <div className="font-serif text-5xl text-burnt mt-1.5 leading-none">{fmtUSD(computed.saved)}</div>
            <div className="text-sm text-body mt-2.5">
              {computed.subText} Base undergraduate, 15 credit hours. Source: <a href={TUITION.source.url} target="_blank" rel="nofollow noopener">UT One Stop</a>.
            </div>
          </div>

          <table className="w-full border-collapse text-sm">
            <thead>
              <tr>
                <th className="bg-cream text-ink text-left p-3 uppercase text-xs tracking-wider border-b border-hairline">Year</th>
                <th className="bg-cream text-ink text-right p-3 uppercase text-xs tracking-wider border-b border-hairline">Out-of-State</th>
                <th className="bg-cream text-ink text-right p-3 uppercase text-xs tracking-wider border-b border-hairline">Your Plan</th>
                <th className="bg-cream text-ink text-right p-3 uppercase text-xs tracking-wider border-b border-hairline">Saved</th>
              </tr>
            </thead>
            <tbody>
              {computed.rows.map(r => (
                <tr key={r.year}>
                  <td className="p-3 border-b border-hairline">{r.year}-{(r.year + 1).toString().slice(2)}</td>
                  <td className="p-3 border-b border-hairline text-right font-mono">{fmtUSD(r.outYr)}</td>
                  <td className="p-3 border-b border-hairline text-right font-mono">{fmtUSD(r.planYr)}</td>
                  <td className="p-3 border-b border-hairline text-right font-mono text-burnt font-semibold">{fmtUSD(r.saved)}</td>
                </tr>
              ))}
              <tr className="font-bold text-ink">
                <td className="p-3 bg-paper border-t-2 border-burnt">Total</td>
                <td className="p-3 bg-paper border-t-2 border-burnt text-right font-mono">{fmtUSD(computed.totalOut)}</td>
                <td className="p-3 bg-paper border-t-2 border-burnt text-right font-mono">{fmtUSD(computed.totalPlan)}</td>
                <td className="p-3 bg-paper border-t-2 border-burnt text-right font-mono">{fmtUSD(computed.saved)}</td>
              </tr>
            </tbody>
          </table>

          <details className="bg-[#f4f8fc] border-l-[3px] border-ink py-4 px-5 rounded-r mt-7 text-sm">
            <summary className="cursor-pointer font-semibold text-ink">Show your work, the formula</summary>
            <div className="mt-2.5 text-body space-y-2">
              <p>For each year <code>y</code> from 1 to <code>N</code>:</p>
              <p><strong>Tuition (out-of-state, year y)</strong> = base_out_of_state × (1 + increase)<sup>y−1</sup></p>
              <p><strong>Tuition (in-state, year y)</strong> = base_in_state × (1 + increase)<sup>y−1</sup></p>
              <p><strong>Your plan, year y</strong> = out-of-state if year 1 (and &quot;first-year in-state&quot; is &quot;no&quot;), else in-state.</p>
              <p>Savings = Σ (out-of-state − your plan) across all years. Base figures: in-state {fmtUSD(TUITION.inStatePerYear)}, out-of-state {fmtUSD(TUITION.outOfStatePerYear)} (2025-26, base undergraduate). In-state frozen by Texas Legislature through 2026-27. Verify against <a href={TUITION.source.url} target="_blank" rel="nofollow noopener">UT One Stop</a> before relying.</p>
            </div>
          </details>

          <EmailScenarioForm payload={computed.payload} saved={fmtUSD(computed.saved)} />
        </div>
      </div>

      <style jsx>{`
        .iua-select {
          display: block;
          width: 100%;
          padding: 10px 12px;
          font-family: inherit;
          font-size: 1rem;
          background: #fff;
          border: 1px solid var(--border-color, #e3dccd);
          border-radius: 4px;
          color: #11161e;
        }
        .iua-select:focus {
          outline: 2px solid #c79a4d;
        }
      `}</style>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block mt-4">
      <span className="text-xs font-semibold text-ink block mb-1.5">{label}</span>
      {children}
    </label>
  );
}

function EmailScenarioForm({ payload, saved }: { payload: string; saved: string }) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'err'>('idle');
  const [msg, setMsg] = useState('');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const data: Record<string, string> = {
      source: 'instateutaustin-calculator-email',
      page: '/tuition-calculator',
      message: payload,
      headline_savings: saved,
    };
    new FormData(e.currentTarget).forEach((v, k) => { data[k] = String(v); });
    try {
      const r = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (r.ok) {
        setStatus('ok');
        setMsg('Sent. Check your inbox.');
        (e.target as HTMLFormElement).reset();
        const w = window as unknown as { dataLayer?: unknown[]; fbq?: (...args: unknown[]) => void };
        if (w.dataLayer) w.dataLayer.push({ event: 'lead_form_submit', source: 'instateutaustin-calculator-email' });
        if (typeof w.fbq === 'function') w.fbq('track', 'Lead', { source: 'instateutaustin-calculator-email' });
      } else {
        setStatus('err'); setMsg('Something went wrong. Email luke@austinmdg.com.');
      }
    } catch {
      setStatus('err'); setMsg('Network error. Email luke@austinmdg.com.');
    }
  }

  return (
    <div className="mt-7 p-5 bg-cream rounded-md">
      <h3 className="m-0 text-base">Get your scenario by email</h3>
      <p className="m-0 mb-3 text-sm text-body">Send the calculation to yourself or your spouse, with a one-page summary of the steps needed to actually realize the savings.</p>
      <form onSubmit={onSubmit} className="grid grid-cols-[1fr_1fr_auto] gap-2 items-end">
        <label className="text-xs">
          Name
          <input type="text" name="name" required className="w-full mt-1 p-2 border border-hairline rounded text-sm" />
        </label>
        <label className="text-xs">
          Email
          <input type="email" name="email" required className="w-full mt-1 p-2 border border-hairline rounded text-sm" />
        </label>
        <button type="submit" disabled={status === 'sending'} className="btn btn-gold">
          {status === 'sending' ? 'Sending…' : 'Send'}
        </button>
        <div className={`col-span-3 text-xs ${status === 'ok' ? 'text-green-700' : status === 'err' ? 'text-red-700' : ''}`}>{msg}</div>
      </form>
    </div>
  );
}
