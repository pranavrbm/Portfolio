import { ImageResponse } from 'next/og'

export const alt = "Pranav R Bhat | AI & Data Science Engineer"
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const dynamic = 'force-static'

export default function OpengraphImage() {
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
          backgroundColor: '#191612',
          backgroundImage:
            'radial-gradient(circle at center, rgba(226,181,102,0.08) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          fontFamily: 'monospace',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: 1000,
            border: '2px solid rgba(226,181,102,0.35)',
            borderRadius: 16,
            backgroundColor: '#201c15',
            boxShadow: '0 0 80px rgba(226,181,102,0.12)',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '18px 24px',
              borderBottom: '1px solid rgba(226,181,102,0.18)',
              backgroundColor: '#262117',
            }}
          >
            <div style={{ width: 14, height: 14, borderRadius: 999, backgroundColor: '#c0554d' }} />
            <div style={{ width: 14, height: 14, borderRadius: 999, backgroundColor: '#c99a4e' }} />
            <div style={{ width: 14, height: 14, borderRadius: 999, backgroundColor: '#e2b566' }} />
            <div style={{ marginLeft: 8, fontSize: 20, color: '#9c9484' }}>
              root@dev: ~/portfolio
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 18,
              padding: '40px 44px',
            }}
          >
            <div style={{ fontSize: 64, fontWeight: 700, color: '#e2b566' }}>
              $ whoami
            </div>
            <div style={{ fontSize: 52, color: '#f0ead9' }}>
              Pranav R Bhat — AI &amp; Data Science Engineer
            </div>
            <div style={{ fontSize: 30, color: '#9c9484' }}>
              {'> ML pipelines · RAG systems · LLM automation · full-stack apps'}
            </div>
            <div style={{ fontSize: 30, color: '#e2b566' }}>
              [ ONLINE ] open to new opportunities ▋
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
