import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'About', path: '/#about' },
  { label: 'Skills', path: '/#skills' },
  { label: 'Experience', path: '/#experience' },
  { label: 'Projects', path: '/#projects' },
  { label: 'Resume', path: '/resume' },
];

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const handleHashClick = (e, hash) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: '12px',
        left: 0,
        right: 0,
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'center',
        padding: '0 0.75rem',
      }}
    >
      <nav
        style={{
          width: '100%',
          maxWidth: '780px',
          background: 'rgba(13, 14, 20, 0.92)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          borderRadius: '9999px',
          padding: '0.35rem 0.5rem 0.35rem 0.95rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: scrolled ? '0 10px 30px rgba(0, 0, 0, 0.35)' : '0 4px 20px rgba(0, 0, 0, 0.15)',
          transition: 'all 0.2s ease',
        }}
      >
        {/* Brand */}
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.45rem',
            textDecoration: 'none',
            flexShrink: 0,
          }}
        >
          <div
            style={{
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              fontWeight: 800,
              fontSize: '0.7rem',
            }}
          >
            A
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
            <span style={{ color: '#ffffff', fontWeight: 800, fontSize: '0.76rem', letterSpacing: '0.02em', fontFamily: 'var(--font-mono)' }}>
              AYUSH MISHRA
            </span>
            <span style={{ color: 'rgba(255, 255, 255, 0.25)', fontSize: '0.7rem' }}>|</span>
            <span style={{ color: '#94a3b8', fontSize: '0.68rem', fontWeight: 600, fontFamily: 'var(--font-mono)' }}>
              SWE
            </span>
          </div>
        </Link>

        {/* Center Links (Desktop) */}
        <div
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '0.15rem',
          }}
          className="desktop-links"
        >
          {navItems.map((item) => {
            const isExternalHash = item.path.startsWith('/#');
            const targetHash = item.path.replace('/', '');
            const isActive = location.pathname === item.path;

            if (isExternalHash) {
              return (
                <a
                  key={item.label}
                  href={item.path}
                  onClick={(e) => handleHashClick(e, targetHash)}
                  style={{
                    padding: '0.3rem 0.7rem',
                    borderRadius: '9999px',
                    color: 'rgba(255, 255, 255, 0.75)',
                    fontSize: '0.76rem',
                    fontWeight: 500,
                    textDecoration: 'none',
                    transition: 'all 0.15s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)';
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  {item.label}
                </a>
              );
            }

            return (
              <Link
                key={item.label}
                to={item.path}
                style={{
                  padding: '0.3rem 0.7rem',
                  borderRadius: '9999px',
                  color: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.75)',
                  background: isActive ? 'rgba(255, 255, 255, 0.12)' : 'transparent',
                  fontSize: '0.76rem',
                  fontWeight: isActive ? 600 : 500,
                  textDecoration: 'none',
                  transition: 'all 0.15s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)';
                    e.currentTarget.style.background = 'transparent';
                  }
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Right CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <a
            href="/#contact"
            onClick={(e) => handleHashClick(e, '#contact')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.3rem',
              padding: '0.32rem 0.85rem',
              borderRadius: '9999px',
              background: '#ffffff',
              color: '#09090b',
              fontWeight: 700,
              fontSize: '0.74rem',
              textDecoration: 'none',
              boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#e2e8f0')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#ffffff')}
          >
            <span>Let's Talk</span>
            <ArrowUpRight size={12} />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '50%',
              width: '28px',
              height: '28px',
              color: '#ffffff',
              cursor: 'pointer',
            }}
            className="mobile-toggle"
          >
            {mobileOpen ? <X size={15} /> : <Menu size={15} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Dropdown */}
      {mobileOpen && (
        <div
          style={{
            position: 'absolute',
            top: '55px',
            left: '12px',
            right: '12px',
            background: 'rgba(13, 14, 20, 0.98)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '16px',
            padding: '1rem',
            boxShadow: '0 16px 40px rgba(0, 0, 0, 0.5)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.4rem',
            zIndex: 999,
          }}
        >
          {navItems.map((item) => {
            const isExternalHash = item.path.startsWith('/#');
            const targetHash = item.path.replace('/', '');
            if (isExternalHash) {
              return (
                <a
                  key={item.label}
                  href={item.path}
                  onClick={(e) => {
                    setMobileOpen(false);
                    handleHashClick(e, targetHash);
                  }}
                  style={{
                    padding: '0.65rem 1rem',
                    borderRadius: '8px',
                    color: '#ffffff',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    background: 'rgba(255, 255, 255, 0.04)',
                    textDecoration: 'none',
                  }}
                >
                  {item.label}
                </a>
              );
            }
            return (
              <Link
                key={item.label}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                style={{
                  padding: '0.65rem 1rem',
                  borderRadius: '8px',
                  color: '#ffffff',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  background: 'rgba(255, 255, 255, 0.04)',
                  textDecoration: 'none',
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .desktop-links {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
