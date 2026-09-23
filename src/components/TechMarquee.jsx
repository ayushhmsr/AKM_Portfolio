export default function TechMarquee() {
  const items = [
    { name: 'React.js 19', color: '#6366f1' },
    { name: 'Next.js', color: '#ffffff' },
    { name: 'TypeScript & JS (ES6+)', color: '#38bdf8' },
    { name: 'Tailwind CSS', color: '#38bdf8' },
    { name: 'Node.js & Express', color: '#10b981' },
    { name: 'MongoDB', color: '#10b981' },
    { name: 'RESTful APIs & JWT', color: '#818cf8' },
    { name: 'Figma & Google Stitch', color: '#f43f5e' },
    { name: 'Vite & Webpack', color: '#a855f7' },
    { name: 'Vercel & Netlify', color: '#ffffff' },
    { name: 'Git & GitHub', color: '#f97316' },
  ];

  const duplicated = [...items, ...items, ...items];

  return (
    <div
      style={{
        overflow: 'hidden',
        position: 'relative',
        width: '100%',
        padding: '1rem 0',
        background: 'rgba(18, 19, 26, 0.4)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        maskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent)',
      }}
    >
      <div
        className="marquee-track"
        style={{
          display: 'flex',
          gap: '1.25rem',
          width: 'max-content',
        }}
      >
        {duplicated.map((item, idx) => (
          <div
            key={idx}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.35rem 0.85rem',
              borderRadius: '100px',
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid var(--border)',
              fontSize: '0.78rem',
              fontWeight: 500,
              color: 'var(--text-secondary)',
              whiteSpace: 'nowrap',
            }}
          >
            <span
              style={{
                width: '5px',
                height: '5px',
                borderRadius: '50%',
                background: item.color,
              }}
            />
            <span>{item.name}</span>
          </div>
        ))}
      </div>

      <style>{`
        .marquee-track {
          animation: scrollMarquee 38s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes scrollMarquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
    </div>
  );
}
