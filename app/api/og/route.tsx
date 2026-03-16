import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const typeName = searchParams.get('type') || '108タイプ診断';
  const name = searchParams.get('name') || '';
  const zodiac = searchParams.get('zodiac') || '';
  const numerology = searchParams.get('num') || '';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#080810',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Stars decoration */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: 3,
              height: 3,
              borderRadius: '50%',
              backgroundColor: '#ffffff',
              opacity: 0.3 + (i % 5) * 0.1,
              left: `${(i * 97) % 100}%`,
              top: `${(i * 61) % 100}%`,
            }}
          />
        ))}

        {/* Type name */}
        <div
          style={{
            color: '#e8cc6a',
            fontSize: 48,
            fontWeight: 700,
            marginBottom: 16,
          }}
        >
          {typeName}
        </div>

        {/* Zodiac + numerology */}
        {zodiac && (
          <div
            style={{
              color: '#6b5b95',
              fontSize: 24,
              marginBottom: 12,
            }}
          >
            {zodiac} × 数秘{numerology}
          </div>
        )}

        {/* Name */}
        {name && (
          <div
            style={{
              color: '#d4d4e0',
              fontSize: 20,
              marginBottom: 40,
            }}
          >
            {name}さんの診断結果
          </div>
        )}

        {/* Branding */}
        <div
          style={{
            color: '#8a7333',
            fontSize: 18,
            position: 'absolute',
            bottom: 40,
          }}
        >
          こよみ。の星座×数秘タイプ診断
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
