import { Link } from 'react-router-dom';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer
      style={{
        background: '#090a10',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        color: '#ffffff',
        padding: '2.5rem 0 1.75rem',
        marginTop: '2rem',
      }}
    >
      <div className="container-custom">
        {/* Top Status & Socials Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.25rem',
            paddingBottom: '1.75rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            marginBottom: '1.5rem',
          }}
        >
          {/* Left Availability Line */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexWrap: 'wrap' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontSize: '0.74rem',
                fontFamily: 'var(--font-mono)',
                fontWeight: 700,
                color: '#10b981',
                padding: '0.2rem 0.6rem',
                borderRadius: '4px',
                background: 'rgba(16, 185, 129, 0.12)',
              }}
            >
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }} />
              <span>7 STACKS ACTIVE</span>
            </div>
            <span style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.82rem' }}>
              Available for Full-Time & Freelance projects worldwide
            </span>
          </div>

          {/* Right Social Icons & Scroll Top Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <a
              href="https://github.com/ayushhmsr"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)')}
            >
              <GithubIcon size={14} />
            </a>

            <a
              href="https://linkedin.com/in/ayushkumarmishra2004"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)')}
            >
              <LinkedinIcon size={14} />
            </a>

            <a
              href="mailto:ayushhmsr@gmail.com"
              aria-label="Email"
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)')}
            >
              <Mail size={14} />
            </a>

            <button
              onClick={scrollToTop}
              title="Scroll to top"
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: '#ffffff',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#09090b',
                cursor: 'pointer',
                transition: 'transform 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <ArrowUp size={15} />
            </button>
          </div>
        </div>

        {/* Bottom Credits & Quick Links */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.78rem',
            color: 'rgba(255, 255, 255, 0.5)',
          }}
        >
          <div>
            © {currentYear} Ayush Kumar Mishra. Engineered with precision & soul.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <a href="#about" style={{ color: 'rgba(255, 255, 255, 0.65)', textDecoration: 'none' }}>
              Architecture
            </a>
            <a href="#skills" style={{ color: 'rgba(255, 255, 255, 0.65)', textDecoration: 'none' }}>
              Status
            </a>
            <Link to="/resume" style={{ color: 'rgba(255, 255, 255, 0.65)', textDecoration: 'none' }}>
              PDF Resume
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
