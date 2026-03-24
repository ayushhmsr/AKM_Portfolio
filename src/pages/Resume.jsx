import { useState } from 'react';

const FILE_ID = '10o82yUAfp9XcPt-0UYd3heqbgCS0mkb4';

const PREVIEW_URL  = `https://drive.google.com/file/d/${FILE_ID}/preview`;
const DOWNLOAD_URL = `https://drive.google.com/uc?export=download&id=${FILE_ID}`;

export default function Resume() {

  return (
    <main style={{ minHeight: '100vh', paddingTop: '70px', display: 'flex', flexDirection: 'column' }}>

      {/* Top bar */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '1rem 2rem',
        borderBottom: '1px solid var(--border)',
        background: 'var(--bg2)',
        flexWrap: 'wrap', gap: '1rem',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{ fontSize: '1.1rem' }}>📄</span>
          <div>
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', letterSpacing: '-0.01em' }}>
              Ayush Kumar Mishra — Resume
            </p>
            <p style={{ color: 'var(--muted)', fontSize: '0.78rem', marginTop: '1px' }}>Frontend Developer & UI/UX Designer</p>
          </div>
        </div>

        <a
          href={DOWNLOAD_URL}
          target="_blank"
          rel="noreferrer"
          style={{
            padding: '0.55rem 1.4rem',
            borderRadius: '100px',
            background: 'var(--accent)',
            color: '#0a0a0f',
            fontSize: '0.82rem',
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            textDecoration: 'none',
            display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
            transition: 'opacity 0.2s, transform 0.2s',
            boxShadow: '0 0 20px rgba(200,240,77,0.2)',
          }}
          onMouseEnter={e => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
          onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}
        >
          ↓ Download CV
        </a>
      </div>

      {/* Full page Google Drive preview */}
      <iframe
        src={PREVIEW_URL}
        title="Ayush Kumar Mishra Resume"
        style={{
          flex: 1,
          width: '100%',
          height: 'calc(100vh - 70px - 65px)',
          border: 'none',
          display: 'block',
          background: '#111',
        }}
        allow="autoplay"
      />
    </main>
  );
}
