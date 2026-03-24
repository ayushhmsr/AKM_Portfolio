export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '2.5rem 2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '1rem',
    }}>
      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem' }}>
        AK<span style={{ color: 'var(--accent)' }}>M</span>
      </span>
      <p style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>
        © 2025 Ayush Kumar Mishra · Built with React
      </p>
      <div style={{ display: 'flex', gap: '1rem' }}>
        {[
          { label: 'GitHub', url: 'https://github.com/ayushhmsr' },
          { label: 'LinkedIn', url: 'https://linkedin.com/in/ayushkumarmishra2004' },
        ].map(s => (
          <a key={s.label} href={s.url} target="_blank" rel="noreferrer"
            style={{ color: 'var(--muted)', fontSize: '0.85rem', transition: 'color 0.2s' }}
            onMouseEnter={e => e.target.style.color = 'var(--accent)'}
            onMouseLeave={e => e.target.style.color = 'var(--muted)'}
          >{s.label}</a>
        ))}
      </div>
    </footer>
  );
}
