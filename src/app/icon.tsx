import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default async function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#BF5700',
          color: '#FAF6EE',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 18,
          fontWeight: 800,
          fontFamily: 'Georgia, serif',
          letterSpacing: '-0.05em',
          borderRadius: 6,
        }}
      >
        iU
      </div>
    ),
    { ...size }
  );
}
