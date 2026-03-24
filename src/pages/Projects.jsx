import coinscopeImg from './coinscope.png';
import resumifyImg from './resumify.png';
const projects = [
  {
    title: 'CoinScope',
    subtitle: 'Cryptocurrency Tracking Platform',
    url: 'https://coinscopee.netlify.app',
    tags: ['React.js', 'Tailwind CSS', 'CoinGecko API', 'Figma'],
    color: '#c8f04d',
    emoji: '₿',
    image: coinscopeImg,
    points: [
      'Designed the UI in Figma and developed a responsive crypto tracking platform enabling users to monitor real-time prices and market trends.',
      'Integrated the CoinGecko API to fetch and display live cryptocurrency data with accurate market insights.',
      'Built intuitive UI components and interactive dashboards ensuring enhanced usability and cross-device accessibility.',
    ],
  },
  {
    title: 'Resumify',
    subtitle: 'AI-Powered Resume Builder',
    url: 'https://resumify-airesumebuilderr.netlify.app',
    tags: ['React.js', 'Tailwind CSS', 'Figma', 'Netlify'],
    color: '#7ef0c8',
    emoji: '📄',
    image: resumifyImg,
    points: [
      'Designed the complete UI/UX in Figma and developed a responsive resume-building platform using React.js and Tailwind CSS.',
      'Built dynamic and reusable components to generate structured, professional resumes with a focus on usability and clean design.',
      'Ensured cross-device responsiveness and visual consistency, delivering a smooth and intuitive user experience.',
    ],
  },
];

export default function Projects() {
  return (
    <main style={{ minHeight: '100vh', paddingTop: '100px', paddingBottom: '5rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>

        {/* Header */}
        <div style={{ marginBottom: '5rem', animation: 'fadeUp 0.6s ease both' }}>
          <p style={{ color: 'var(--accent)', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>Portfolio</p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 0.95, letterSpacing: '-0.03em' }}>
            Projects I've<br /><span style={{ color: 'var(--accent)' }}>Shipped</span>
          </h1>
        </div>

        {/* Project cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {projects.map((p, i) => (
            <div key={p.title}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '20px',
                overflow: 'hidden',
                transition: 'transform 0.3s, border-color 0.3s',
                animation: 'fadeUp 0.6s ease both',
                animationDelay: `${i * 0.15}s`,
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = p.color + '55'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
            >
              {/* Project banner */}
              <div style={{
                height: '200px',
                background: `linear-gradient(135deg, ${p.color}18 0%, transparent 60%)`,
                borderBottom: '1px solid var(--border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                position: 'relative', overflow: 'hidden',
              }}>
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      opacity: 0.9,
                    }}
                  />
                ) : (
                  <div style={{ fontSize: '6rem', opacity: 0.15, userSelect: 'none', animation: 'float 3s ease-in-out infinite' }}>
                    {p.emoji}
                  </div>
                )}
                <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', display: 'flex', gap: '0.5rem' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f57' }} />
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#febc2e' }} />
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#28c840' }} />
                </div>
                <div style={{
                  position: 'absolute', bottom: '1.5rem', left: '2rem',
                  fontFamily: 'var(--font-display)', fontWeight: 800,
                  fontSize: '3rem', color: p.color, opacity: 0.12,
                  letterSpacing: '-0.04em', userSelect: 'none',
                }}>{p.title.toUpperCase()}</div>
              </div>

              {/* Content */}
              <div style={{ padding: '2rem 2.5rem 2.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div>
                    <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.8rem', letterSpacing: '-0.03em', color: p.color, marginBottom: '0.3rem' }}>{p.title}</h2>
                    <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>{p.subtitle}</p>
                  </div>
                  <a href={p.url} target="_blank" rel="noreferrer"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                      padding: '0.6rem 1.3rem',
                      background: p.color + '18',
                      border: `1px solid ${p.color}44`,
                      borderRadius: '100px',
                      color: p.color,
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      fontFamily: 'var(--font-display)',
                      transition: 'all 0.2s',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = p.color + '30'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = p.color + '18'; }}
                  >Live Demo ↗</a>
                </div>

                <ul style={{ paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                  {p.points.map((pt, j) => (
                    <li key={j} style={{ display: 'flex', gap: '0.75rem', color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                      <span style={{ color: p.color, marginTop: '4px', flexShrink: 0 }}>→</span>
                      {pt}
                    </li>
                  ))}
                </ul>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {p.tags.map(t => (
                    <span key={t} style={{
                      padding: '0.3rem 0.8rem',
                      border: '1px solid var(--border)',
                      borderRadius: '100px',
                      fontSize: '0.78rem',
                      color: 'var(--muted)',
                      fontFamily: 'var(--font-body)',
                      letterSpacing: '0.03em',
                    }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More coming */}
        <div style={{
          marginTop: '4rem', padding: '3rem',
          border: '1px dashed var(--border)',
          borderRadius: '20px',
          textAlign: 'center',
          animation: 'fadeUp 0.6s ease both', animationDelay: '0.4s',
        }}>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.2rem', marginBottom: '0.5rem' }}>More coming soon...</p>
          <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>Currently working on new projects. Follow my GitHub for updates.</p>
          <a href="https://github.com/ayushhmsr" target="_blank" rel="noreferrer"
            style={{ display: 'inline-block', marginTop: '1.5rem', color: 'var(--accent)', fontWeight: 600, fontSize: '0.9rem' }}
          >Visit GitHub →</a>
        </div>

        <style>{`@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}`}</style>
      </div>
    </main>
  );
}
