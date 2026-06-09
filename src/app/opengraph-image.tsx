import { ImageResponse } from 'next/og';
import { TUITION } from '@/lib/tuition';

export const runtime = 'edge';
export const alt = 'instateutaustin.com — UT Austin In-State Tuition Guide';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// next/og's satori renderer requires display: flex on every <div> with more
// than one child. Wrappers below all set display: flex explicitly.

export default async function OpengraphImage() {
  const savingsK = Math.round(TUITION.threeYearSavings / 1000);
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
          background:
            'radial-gradient(ellipse at 75% 25%, rgba(199,154,77,0.22), transparent 55%), linear-gradient(180deg, #081729 0%, #0e2748 100%)',
          color: '#fbf8f1',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              fontSize: 22,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#c79a4d',
              fontWeight: 700,
              marginBottom: 18,
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
              fontFamily: 'Georgia, serif',
              letterSpacing: '-0.02em',
              maxWidth: 980,
              flexWrap: 'wrap',
            }}
          >
            Save&nbsp;
            <span style={{ display: 'flex', color: '#c79a4d' }}>${savingsK}K+</span>
            &nbsp;on UT Austin tuition.
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 26,
              lineHeight: 1.4,
              color: 'rgba(255,255,255,0.82)',
              marginTop: 22,
              maxWidth: 880,
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
            borderTop: '1px solid rgba(216,178,122,0.25)',
            paddingTop: 28,
          }}
        >
          <div
            style={{
              display: 'flex',
              fontSize: 32,
              fontWeight: 700,
              fontFamily: 'Georgia, serif',
            }}
          >
            instate
            <span style={{ display: 'flex', color: '#c79a4d' }}>UT</span>
            austin
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              fontSize: 18,
              color: 'rgba(255,255,255,0.7)',
            }}
          >
            <div style={{ display: 'flex' }}>
              In-state ~${TUITION.inStatePerYear.toLocaleString()}/yr · Out-of-state ~${TUITION.outOfStatePerYear.toLocaleString()}/yr
            </div>
            <div style={{ display: 'flex', marginTop: 6, fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>
              Source: UT Austin One Stop · Independent guide, not affiliated with UT or THECB
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
