export default function About() {
  const timeline = [
    {
      period: 'Feb 2025 – Mar 2025',
      role: 'Web Developer',
      org: 'IT Services & Consultancy Company',
      type: 'Remote',
      points: [
        'Designed and developed full-stack web applications using MongoDB, Express.js, React.js, and Node.js, ensuring responsive, cross-browser, and mobile-friendly solutions.',
        'Built reusable UI components and integrated RESTful APIs, combining React.js, Tailwind CSS, Node.js, and MongoDB to deliver visually consistent experiences.',
        'Optimized and debugged frontend and backend code, improving load times and enhancing seamless user interactions.',
      ],
    },
  ];

  const coursework = [
    'Full Stack Web Development (MERN Stack)',
    'Cloud Computing & Deployment (Netlify, Vercel)',
    'UI/UX Designing (Figma)',
  ];

  return (
    <main style={{ minHeight: '100vh', paddingTop: '100px', paddingBottom: '5rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>

        {/* Header */}
        <div style={{ marginBottom: '5rem', animation: 'fadeUp 0.6s ease both' }}>
          <p style={{ color: 'var(--accent)', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>About Me</p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 0.95, letterSpacing: '-0.03em', marginBottom: '2rem' }}>
            Crafting Interfaces<br /><span style={{ color: 'var(--accent)' }}>That Matter</span>
          </h1>
          <p style={{ color: 'var(--muted)', maxWidth: '600px', fontSize: '1.05rem', lineHeight: 1.8 }}>
            I'm a 3rd-year B.Tech Computer Science (AIML) student at IPS Academy, Indore. I'm a frontend developer and UI/UX designer — my workflow starts in Figma and ends in pixel-perfect React. Currently exploring DevOps to own the full deployment pipeline too.
          </p>
        </div>

        {/* Two-col layout */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', marginBottom: '5rem' }}>

          {/* Left – personal */}
          <div style={{ animation: 'fadeUp 0.6s ease both', animationDelay: '0.1s' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.3rem', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              The Developer
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { label: 'Role', value: 'Frontend Developer & UI/UX Designer' },
                { label: 'Full Name', value: 'Ayush Kumar Mishra' },
                { label: 'Degree', value: 'B.Tech CSE (AIML) — 3rd Year' },
                { label: 'College', value: 'IPS Academy, Indore (RGPV)' },
                { label: 'Location', value: 'Indore, MP, India' },
                { label: 'GitHub', value: 'github.com/ayushhmsr', link: 'https://github.com/ayushhmsr' },
                { label: 'LinkedIn', value: 'ayushkumarmishra2004', link: 'https://linkedin.com/in/ayushkumarmishra2004' },
                { label: 'Status', value: '🟢 Open to Internships' },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', gap: '1rem', borderBottom: '1px solid var(--border)', paddingBottom: '1rem', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--muted)', fontSize: '0.8rem', minWidth: '90px', paddingTop: '2px', letterSpacing: '0.03em' }}>{item.label}</span>
                  {item.link
                    ? <a href={item.link} target="_blank" rel="noreferrer" style={{ color: 'var(--accent)', fontSize: '0.9rem', fontWeight: 500 }}>{item.value}</a>
                    : <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>{item.value}</span>
                  }
                </div>
              ))}
            </div>
          </div>

          {/* Right – approach */}
          <div style={{ animation: 'fadeUp 0.6s ease both', animationDelay: '0.2s' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.3rem', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              My Approach
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                { icon: '✦', title: 'Design First', desc: 'Every project starts in Figma. I believe good design is good engineering — clarity, hierarchy, and visual rhythm come before any code.' },
                { icon: '⬡', title: 'Component Thinking', desc: 'I build with reusability in mind. Clean, modular React components that scale without becoming a maintenance nightmare.' },
                { icon: '◈', title: 'Performance Matters', desc: 'Responsive, optimized, cross-browser. A beautiful UI that loads slowly is still a bad UI.' },
                { icon: '◇', title: 'Exploring DevOps', desc: 'Learning CI/CD, Docker, and cloud deployments so I can ship and scale my own work — not just build it.' },
              ].map(card => (
                <div key={card.title} style={{ display: 'flex', gap: '1rem', padding: '1.2rem', background: 'var(--surface)', borderRadius: '12px', border: '1px solid var(--border)' }}>
                  <span style={{ color: 'var(--accent)', fontSize: '1.2rem', marginTop: '2px', flexShrink: 0 }}>{card.icon}</span>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.3rem' }}>{card.title}</div>
                    <div style={{ color: 'var(--muted)', fontSize: '0.85rem', lineHeight: 1.6 }}>{card.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div style={{ marginBottom: '5rem', animation: 'fadeUp 0.6s ease both', animationDelay: '0.3s' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.8rem', marginBottom: '2.5rem', letterSpacing: '-0.02em' }}>
            Experience
          </h2>
          {timeline.map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '2rem', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '16px' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
                <div style={{ width: '1px', flex: 1, background: 'var(--border)', marginTop: '8px' }} />
              </div>
              <div style={{ flex: 1, paddingBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem' }}>{item.role}</h3>
                    <p style={{ color: 'var(--accent2)', fontSize: '0.9rem', fontWeight: 500 }}>{item.org}</p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <p style={{ color: 'var(--muted)', fontSize: '0.8rem' }}>{item.period}</p>
                    <p style={{ color: 'var(--muted)', fontSize: '0.8rem' }}>{item.type}</p>
                  </div>
                </div>
                <ul style={{ paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.75rem' }}>
                  {item.points.map((p, j) => (
                    <li key={j} style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Coursework */}
        <div style={{ animation: 'fadeUp 0.6s ease both', animationDelay: '0.4s' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.8rem', marginBottom: '2rem', letterSpacing: '-0.02em' }}>
            Relevant Coursework
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            {coursework.map(c => (
              <div key={c} style={{
                padding: '0.75rem 1.5rem',
                border: '1px solid var(--border)',
                borderRadius: '100px',
                fontSize: '0.9rem',
                color: 'var(--text)',
                background: 'var(--surface)',
                transition: 'all 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text)'; }}
              >{c}</div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
