import ScrollReveal from './ScrollReveal';

export default function SectionHeader({ tag, title, description, badge }) {
  return (
    <ScrollReveal direction="up" delay={0}>
      <div style={{ maxWidth: '780px', marginBottom: '2.25rem' }}>
        {tag && (
          <div style={{ fontSize: '0.74rem', color: '#8b5cf6', fontFamily: 'var(--font-mono)', fontWeight: 700, letterSpacing: '0.08em', marginBottom: '0.35rem' }}>
            {tag}
          </div>
        )}
        {badge && (
          <div className="status-pill" style={{ marginBottom: '0.75rem' }}>
            {badge}
          </div>
        )}
        <h2
          style={{
            fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)',
            fontWeight: 900,
            color: '#09090b',
            letterSpacing: '-0.025em',
            marginBottom: description ? '0.65rem' : '0',
          }}
        >
          {title}
        </h2>
        {description && (
          <p style={{ color: '#64748b', fontSize: '0.92rem', lineHeight: 1.65 }}>
            {description}
          </p>
        )}
      </div>
    </ScrollReveal>
  );
}
