import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const roles = ['Frontend Developer', 'UI/UX Designer', 'React Developer', 'Exploring DevOps'];

export default function Home() {
  const roleRef = useRef(null);
  const idx = useRef(0);
  const charIdx = useRef(0);
  const deleting = useRef(false);

  useEffect(() => {
    let timer;
    const type = () => {
      const current = roles[idx.current];
      if (!deleting.current) {
        charIdx.current++;
        if (roleRef.current) roleRef.current.textContent = current.slice(0, charIdx.current);
        if (charIdx.current === current.length) { deleting.current = true; timer = setTimeout(type, 1800); return; }
      } else {
        charIdx.current--;
        if (roleRef.current) roleRef.current.textContent = current.slice(0, charIdx.current);
        if (charIdx.current === 0) { deleting.current = false; idx.current = (idx.current + 1) % roles.length; }
      }
      timer = setTimeout(type, deleting.current ? 60 : 90);
    };
    timer = setTimeout(type, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setResumeUrl(url);
    setResumeName(file.name);
    setResumeUploaded(true);
  };

  return (
    <main style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      {/* Background grid */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: `linear-gradient(rgba(200,240,77,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(200,240,77,0.04) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />
      <div style={{ position: 'absolute', top: '15%', left: '60%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(200,240,77,0.08) 0%, transparent 70%)', zIndex: 0, filter: 'blur(40px)' }} />
      <div style={{ position: 'absolute', bottom: '10%', left: '10%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(126,240,200,0.06) 0%, transparent 70%)', zIndex: 0, filter: 'blur(40px)' }} />

      <div style={{
        position: 'relative', zIndex: 1,
        maxWidth: '1200px', margin: '0 auto',
        padding: '0 2rem',
        minHeight: '100vh',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        paddingTop: '100px', paddingBottom: '120px',
      }}>
        {/* Status badge */}
        <div style={{ animation: 'fadeUp 0.6s ease both', animationDelay: '0.1s', marginBottom: '2rem' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            border: '1px solid rgba(200,240,77,0.25)',
            borderRadius: '100px',
            padding: '0.4rem 1.1rem',
            fontSize: '0.8rem',
            color: 'var(--accent)',
            background: 'rgba(200,240,77,0.05)',
          }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', display: 'inline-block', animation: 'pulse 2s infinite' }} />
            Open to Internship · Frontend / UI/UX / DevOps
          </div>
        </div>

        {/* Name */}
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(3rem, 8vw, 7rem)',
          fontWeight: 800,
          lineHeight: 0.95,
          letterSpacing: '-0.03em',
          animation: 'fadeUp 0.6s ease both',
          animationDelay: '0.2s',
          marginBottom: '1.5rem',
        }}>
          Ayush<br />Kumar<br /><span style={{ color: 'var(--accent)' }}>Mishra</span>
        </h1>

        {/* Typewriter */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '0.75rem',
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1rem, 3vw, 1.5rem)',
          fontWeight: 600, color: 'var(--muted)',
          marginBottom: '2rem',
          animation: 'fadeUp 0.6s ease both', animationDelay: '0.3s',
          minHeight: '2.2rem',
        }}>
          <span style={{ color: 'var(--accent2)' }}>&gt;</span>
          <span ref={roleRef} />
          <span style={{ width: '2px', height: '1.4em', background: 'var(--accent)', display: 'inline-block', animation: 'pulse 1s infinite' }} />
        </div>

        {/* Bio */}
        <p style={{
          color: 'var(--muted)', maxWidth: '520px',
          fontSize: '1rem', lineHeight: 1.7,
          animation: 'fadeUp 0.6s ease both', animationDelay: '0.4s',
          marginBottom: '3rem',
        }}>
          Frontend developer & UI/UX designer who turns Figma designs into pixel-perfect React apps. Currently exploring DevOps to ship and scale my own work end-to-end.
        </p>

        {/* CTAs */}
        <div style={{
          display: 'flex', gap: '1rem', flexWrap: 'wrap',
          animation: 'fadeUp 0.6s ease both', animationDelay: '0.5s',
          marginBottom: '5rem',
        }}>
          <Link to="/projects"
            style={{
              fontFamily: 'var(--font-display)', fontWeight: 700,
              padding: '0.85rem 2rem', borderRadius: '100px',
              background: 'var(--accent)', color: '#0a0a0f',
              fontSize: '0.9rem', letterSpacing: '0.02em',
              transition: 'transform 0.2s, box-shadow 0.2s',
              boxShadow: '0 0 30px rgba(200,240,77,0.2)',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 40px rgba(200,240,77,0.35)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 30px rgba(200,240,77,0.2)'; }}
          >View Projects →</Link>
          <Link to="/contact"
            style={{
              fontFamily: 'var(--font-display)', fontWeight: 700,
              padding: '0.85rem 2rem', borderRadius: '100px',
              border: '1px solid var(--border)', color: 'var(--text)',
              fontSize: '0.9rem', letterSpacing: '0.02em',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text)'; }}
          >Hire Me</Link>
          <Link to="/resume"
            style={{
              fontFamily: 'var(--font-display)', fontWeight: 700,
              padding: '0.85rem 2rem', borderRadius: '100px',
              border: '1px solid rgba(200,240,77,0.3)',
              color: 'var(--accent)',
              fontSize: '0.9rem', letterSpacing: '0.02em',
              transition: 'all 0.2s',
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(200,240,77,0.08)'; e.currentTarget.style.borderColor = 'var(--accent)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(200,240,77,0.3)'; }}
          >↓ My Resume</Link>
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex', gap: '3rem', marginTop: '4rem', flexWrap: 'wrap',
          animation: 'fadeUp 0.6s ease both', animationDelay: '0.7s',
        }}>
          {[
            { n: '2+', l: 'Projects Deployed' },
            { n: '3rd', l: 'Year B.Tech CSE' },
            { n: '15+', l: 'Technologies' },
          ].map(s => (
            <div key={s.l}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '2.2rem', color: 'var(--accent)', lineHeight: 1 }}>{s.n}</div>
              <div style={{ color: 'var(--muted)', fontSize: '0.8rem', marginTop: '0.3rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{
        position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
        color: 'var(--muted)', fontSize: '0.75rem', letterSpacing: '0.1em',
        animation: 'float 2s ease-in-out infinite', zIndex: 1,
      }}>
        <span style={{ textTransform: 'uppercase' }}>Scroll</span>
        <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, var(--accent), transparent)' }} />
      </div>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
        @keyframes float { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(-8px)} }
      `}</style>
    </main>
  );
}
