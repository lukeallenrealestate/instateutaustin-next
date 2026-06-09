import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default async function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: 'linear-gradient(180deg, #081729 0%, #0e2748 100%)',
          color: '#c79a4d',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 96,
          fontWeight: 800,
          fontFamily: 'Georgia, serif',
          letterSpacing: '-0.05em',
        }}
      >
        iU
      </div>
    ),
    { ...size }
  );
}
