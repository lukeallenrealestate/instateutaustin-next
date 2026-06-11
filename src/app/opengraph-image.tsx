import { ImageResponse } from 'next/og';
import { TUITION } from '@/lib/tuition';

export const runtime = 'edge';
export const alt = 'instateutaustin.com — UT Austin In-State Tuition Guide';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// next/og's satori renderer requires display: flex on every <div> with more
// than one child. Wrappers below all set display: flex explicitly.

export default async function OpengraphImage() {
  const annualK = (TUITION.annualSavings / 1000).toFixed(1).replace(/\.0$/, '');
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 64,
          backgroundColor: '#FAF6EE',
          backgroundImage:
            'radial-gradient(ellipse at 75% 25%, rgba(191,87,0,0.12), transparent 55%)',
          color: '#2B2926',
          fontFamily: 'Georgia, serif',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              fontSize: 22,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#BF5700',
              fontWeight: 700,
              marginBottom: 18,
              fontFamily: 'system-ui, sans-serif',
            }}
          >
            UT Austin · In-State Tuition Strategy
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 96,
              lineHeight: 1.05,
              fontWeight: 700,
              letterSpacing: '-0.02em',
              maxWidth: 980,
              flexWrap: 'wrap',
            }}
          >
            Save&nbsp;
            <span style={{ display: 'flex', color: '#BF5700' }}>${annualK}K/yr</span>
            &nbsp;on&nbsp;
            <span style={{ display: 'flex', color: '#BF5700' }}>UT Austin</span>
            &nbsp;tuition.
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 26,
              lineHeight: 1.4,
              color: '#54504A',
              marginTop: 22,
              maxWidth: 880,
              fontFamily: 'system-ui, sans-serif',
            }}
          >
            The complete out-of-state parent guide to Texas residency rules and the 12-month domicile pathway.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            borderTop: '1px solid #E7DECE',
            paddingTop: 28,
          }}
        >
          <div
            style={{
              display: 'flex',
              fontSize: 32,
              fontWeight: 700,
            }}
          >
            instate
            <span style={{ display: 'flex', color: '#BF5700' }}>UT</span>
            austin
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              fontSize: 18,
              color: '#54504A',
              fontFamily: 'system-ui, sans-serif',
            }}
          >
            <div style={{ display: 'flex' }}>
              In-state ~${TUITION.inStatePerYear.toLocaleString()}/yr · Out-of-state ~${TUITION.outOfStatePerYear.toLocaleString()}/yr
            </div>
            <div style={{ display: 'flex', marginTop: 6, fontSize: 14, color: '#8A8478' }}>
              Source: UT Austin One Stop · Published by Luke Allen, TREC #788149 · Not affiliated with UT or THECB
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
