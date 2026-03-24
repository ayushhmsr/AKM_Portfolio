import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/skills', label: 'Skills' },
  { to: '/resume', label: 'Resume' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '0 2rem',
      background: scrolled ? 'rgba(10,10,15,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
      transition: 'all 0.3s ease',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      height: '70px',
    }}>
      {/* Logo */}
      <NavLink to="/" style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.3rem', letterSpacing: '-0.02em' }}>
        AK<span style={{ color: 'var(--accent)' }}>M</span>
      </NavLink>

      {/* Desktop links */}
      <div style={{ display: 'flex', gap: '0.25rem', alignItems: 'center' }} className="desktop-nav">
        {links.map(l => (
          <NavLink key={l.to} to={l.to} end={l.to === '/'}
            style={({ isActive }) => ({
              fontFamily: 'var(--font-body)',
              fontWeight: 500,
              fontSize: '0.875rem',
              letterSpacing: '0.02em',
              padding: '0.4rem 0.9rem',
              borderRadius: '100px',
              color: isActive ? '#0a0a0f' : 'var(--muted)',
              background: isActive ? 'var(--accent)' : 'transparent',
              transition: 'all 0.2s ease',
            })}
          >{l.label}</NavLink>
        ))}

      </div>

      {/* Hamburger */}
      <button onClick={() => setOpen(!open)} className="hamburger"
        style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'none', flexDirection: 'column', gap: '5px', padding: '4px' }}>
        {[0,1,2].map(i => (
          <span key={i} style={{
            display: 'block', width: '22px', height: '2px',
            background: 'var(--text)',
            borderRadius: '2px',
            transition: 'all 0.3s ease',
            transform: open && i === 0 ? 'rotate(45deg) translate(5px,5px)' : open && i === 2 ? 'rotate(-45deg) translate(5px,-5px)' : 'none',
            opacity: open && i === 1 ? 0 : 1,
          }} />
        ))}
      </button>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position: 'fixed', top: '70px', left: 0, right: 0, bottom: 0,
          background: 'rgba(10,10,15,0.98)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
          gap: '2rem', animation: 'fadeIn 0.2s ease',
        }}>
          {links.map(l => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'}
              style={({ isActive }) => ({
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '2rem',
                color: isActive ? 'var(--accent)' : 'var(--text)',
              })}
            >{l.label}</NavLink>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
