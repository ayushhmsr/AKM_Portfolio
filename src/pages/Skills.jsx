const skillGroups = [
  {
    label: 'Languages',
    color: '#c8f04d',
    icon: '{ }',
    skills: ['JavaScript', 'HTML5', 'CSS3', 'Java'],
  },
  {
    label: 'Frontend & UI/UX',
    color: '#7ef0c8',
    icon: '◈',
    skills: ['React.js', 'Tailwind CSS', 'Figma', 'Next.js', 'Vite'],
  },
  {
    label: 'Backend (Basics)',
    color: '#f0a87e',
    icon: '⬡',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
  },
  {
    label: 'DevOps (Exploring)',
    color: '#c47ef0',
    icon: '◇',
    skills: ['Git', 'GitHub', 'Vercel', 'Netlify', 'Docker', 'CI/CD'],
  },
  {
    label: 'Tools',
    color: '#7eb8f0',
    icon: '⌘',
    skills: ['VS Code', 'Figma','Cursor', 'Postman', 'Chrome DevTools'],
  },
];

export default function Skills() {
  return (
    <main style={{ minHeight: '100vh', paddingTop: '100px', paddingBottom: '5rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>

        {/* Header */}
        <div style={{ marginBottom: '5rem', animation: 'fadeUp 0.6s ease both' }}>
          <p style={{ color: 'var(--accent)', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>Tech Stack</p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 0.95, letterSpacing: '-0.03em' }}>
            My Skills &<br /><span style={{ color: 'var(--accent)' }}>Technologies</span>
          </h1>
        </div>

        {/* Skill group cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
          marginBottom: '5rem',
        }}>
          {skillGroups.map((group, i) => (
            <div key={group.label}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '18px',
                padding: '1.75rem',
                animation: 'fadeUp 0.6s ease both',
                animationDelay: `${i * 0.08}s`,
                transition: 'border-color 0.25s, transform 0.25s',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = group.color + '55'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              {/* Top accent line */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: `linear-gradient(90deg, ${group.color}, transparent)` }} />

              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <div style={{
                  width: '36px', height: '36px', borderRadius: '10px',
                  background: group.color + '18',
                  border: `1px solid ${group.color}33`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: group.color, fontSize: '0.85rem', fontWeight: 700,
                  fontFamily: 'var(--font-display)',
                }}>{group.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', letterSpacing: '-0.01em' }}>{group.label}</h3>
              </div>

              {/* Skill tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {group.skills.map(skill => (
                  <span key={skill} style={{
                    padding: '0.35rem 0.85rem',
                    borderRadius: '100px',
                    fontSize: '0.82rem',
                    fontWeight: 500,
                    color: group.color,
                    background: group.color + '12',
                    border: `1px solid ${group.color}28`,
                    transition: 'all 0.2s',
                    cursor: 'default',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.background = group.color + '25'; e.currentTarget.style.borderColor = group.color + '60'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = group.color + '12'; e.currentTarget.style.borderColor = group.color + '28'; }}
                  >{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div style={{ animation: 'fadeUp 0.6s ease both', animationDelay: '0.5s' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.8rem', marginBottom: '2rem', letterSpacing: '-0.02em' }}>Education</h2>
          <div style={{
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: '16px',
            padding: '2rem 2.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, var(--accent), var(--accent2), transparent)' }} />
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.2rem', marginBottom: '0.4rem' }}>IPS Academy, Indore</h3>
              <p style={{ color: 'var(--accent2)', fontSize: '0.9rem', fontWeight: 500, marginBottom: '0.25rem' }}>Bachelor of Technology — Computer Science (AIML)</p>
              <p style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>Affiliated to RGPV, Bhopal</p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p style={{ color: 'var(--accent)', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem' }}>Sep 2023 – Sep 2027</p>
              <p style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>Indore, MP</p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
