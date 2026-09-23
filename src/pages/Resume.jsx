import { 
  Download, 
  ExternalLink, 
  FileText, 
  CheckCircle2, 
  Sparkles, 
  Eye, 
  GraduationCap, 
  Building2, 
  Calendar, 
  Award,
  Layers,
  MapPin,
  Mail
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import ScrollReveal from '../components/ScrollReveal';

export default function Resume() {
  const resumeUrl = '/resume.pdf?v=latest';

  return (
    <main style={{ minHeight: '100vh', paddingTop: '95px', paddingBottom: '4.5rem', position: 'relative' }}>
      <div className="container-custom">
        
        {/* Header Bar */}
        <ScrollReveal direction="up" delay={0}>
          <div
            className="editorial-card"
            style={{
              padding: '1.25rem 1.75rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
              marginBottom: '1.75rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'rgba(139, 92, 246, 0.12)',
                  border: '1px solid rgba(139, 92, 246, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#8b5cf6',
                  flexShrink: 0,
                }}
              >
                <FileText size={22} />
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.15rem' }}>
                  <h1
                    style={{
                      fontSize: '1.15rem',
                      fontWeight: 800,
                      color: '#09090b',
                    }}
                  >
                    Ayush Kumar Mishra — Resume
                  </h1>
                  <span className="status-pill" style={{ padding: '0.15rem 0.55rem', fontSize: '0.7rem' }}>
                    <Sparkles size={11} color="#8b5cf6" />
                    <span>Official Document</span>
                  </span>
                </div>
                <p style={{ color: '#64748b', fontSize: '0.8rem' }}>
                  Software Engineer & Front-End Developer • 4th Year Senior B.Tech
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexWrap: 'wrap' }}>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-outline-pill"
                style={{ padding: '0.45rem 1rem', fontSize: '0.8rem' }}
              >
                <Eye size={13} />
                <span>Open in Tab</span>
                <ExternalLink size={12} />
              </a>

              <a
                href="/resume.pdf"
                download="Ayush_Kumar_Mishra_Resume.pdf"
                className="btn-dark-pill"
                style={{ padding: '0.45rem 1.15rem', fontSize: '0.8rem' }}
              >
                <Download size={14} />
                <span>Download PDF</span>
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* ── DESKTOP EMBEDDED PDF VIEWER ── */}
        <div className="resume-desktop-viewer">
          <ScrollReveal direction="up" delay={60}>
            <div
              className="editorial-card"
              style={{
                padding: '1rem',
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '20px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.06)',
                marginBottom: '1.5rem',
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '82vh',
                  minHeight: '680px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                }}
              >
                <iframe
                  src={`${resumeUrl}#toolbar=0&navpanes=0&scrollbar=1`}
                  title="Ayush Kumar Mishra Resume"
                  style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                  }}
                />
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* ── MOBILE / SMALL DEVICE DOCUMENT OVERVIEW ── */}
        <div className="resume-mobile-overview">
          <ScrollReveal direction="up" delay={60}>
            <div
              className="editorial-card"
              style={{
                padding: '1.5rem',
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '20px',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.06)',
                marginBottom: '1.5rem',
              }}
            >
              {/* Document Title Banner */}
              <div style={{ borderBottom: '2px solid #09090b', paddingBottom: '1rem', marginBottom: '1.25rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 900, color: '#09090b', letterSpacing: '-0.02em', marginBottom: '0.2rem' }}>
                  AYUSH KUMAR MISHRA
                </h2>
                <div style={{ color: '#8b5cf6', fontWeight: 700, fontSize: '0.88rem', marginBottom: '0.65rem' }}>
                  Software Engineer & Front-End Developer
                </div>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', fontSize: '0.78rem', color: '#64748b' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <MapPin size={12} color="#8b5cf6" />
                    <span>Indore, MP, India</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <Mail size={12} color="#8b5cf6" />
                    <span>ayushhmsr@gmail.com</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <GithubIcon size={12} />
                    <span>github.com/ayushhmsr</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <LinkedinIcon size={12} />
                    <span>linkedin.com/in/ayushkumarmishra2004</span>
                  </div>
                </div>
              </div>

              {/* Work Experience */}
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '0.92rem', fontWeight: 800, color: '#09090b', textTransform: 'uppercase', letterSpacing: '0.06em', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.35rem', marginBottom: '0.85rem' }}>
                  Work Experience
                </h3>

                {/* Role 1 */}
                <div style={{ marginBottom: '1.15rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.25rem', marginBottom: '0.25rem' }}>
                    <div>
                      <span style={{ fontWeight: 800, fontSize: '0.9rem', color: '#09090b' }}>Web Developer</span>
                      <span style={{ color: '#8b5cf6', fontWeight: 700, fontSize: '0.85rem', marginLeft: '0.45rem' }}>• IIMaspirant.in</span>
                    </div>
                    <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: '#64748b', fontWeight: 600 }}>Jul 2026 – Present</span>
                  </div>
                  <ul style={{ paddingLeft: '1.15rem', fontSize: '0.8rem', color: '#52525b', lineHeight: 1.55, display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    <li>Established official responsive web presence for an ed-tech platform using React.js and Tailwind CSS.</li>
                    <li>Translated full UI/UX designs into responsive React components using Google Stitch and Tailwind CSS.</li>
                    <li>Secured user registration and login flows with JWT authentication and OTP email verification with Nodemailer.</li>
                    <li>Deployed production single-page application using React, Vite, Clerk auth, and React Router.</li>
                  </ul>
                </div>

                {/* Role 2 */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.25rem', marginBottom: '0.25rem' }}>
                    <div>
                      <span style={{ fontWeight: 800, fontSize: '0.9rem', color: '#09090b' }}>Front-End Development Intern</span>
                      <span style={{ color: '#8b5cf6', fontWeight: 700, fontSize: '0.85rem', marginLeft: '0.45rem' }}>• CodSoft</span>
                    </div>
                    <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: '#64748b', fontWeight: 600 }}>Feb 2025 – Mar 2025</span>
                  </div>
                  <ul style={{ paddingLeft: '1.15rem', fontSize: '0.8rem', color: '#52525b', lineHeight: 1.55, display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    <li>Shipped responsive, cloud-hosted single-page application features using JavaScript and React.js.</li>
                    <li>Tested across 3+ browsers (Chrome, Firefox, Safari) and resolved 15+ UI bugs before deployment.</li>
                    <li>Refactored 10+ React components to optimize page-load performance and responsive layout.</li>
                    <li>Delivered 4+ UI features from Figma specifications collaborating closely with design.</li>
                  </ul>
                </div>
              </div>

              {/* Projects */}
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '0.92rem', fontWeight: 800, color: '#09090b', textTransform: 'uppercase', letterSpacing: '0.06em', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.35rem', marginBottom: '0.85rem' }}>
                  Featured Projects
                </h3>

                <div style={{ marginBottom: '0.95rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.2rem' }}>
                    <span style={{ fontWeight: 800, fontSize: '0.88rem', color: '#09090b' }}>CoinScope — Cryptocurrency Tracking Platform</span>
                    <a href="https://coinscopee.netlify.app" target="_blank" rel="noreferrer" style={{ fontSize: '0.72rem', color: '#8b5cf6', fontWeight: 700, textDecoration: 'none' }}>Live Site ↗</a>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: '#52525b', lineHeight: 1.55 }}>
                    Real-time crypto tracker built with React.js & Tailwind CSS. Integrated CoinGecko REST API for 50+ tokens, 6+ dashboard widgets, responsive across 3 breakpoints.
                  </p>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.2rem' }}>
                    <span style={{ fontWeight: 800, fontSize: '0.88rem', color: '#09090b' }}>Resumify — AI Resume Builder</span>
                    <a href="https://resumify-airesumebuilderr.netlify.app" target="_blank" rel="noreferrer" style={{ fontSize: '0.72rem', color: '#8b5cf6', fontWeight: 700, textDecoration: 'none' }}>Live Site ↗</a>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: '#52525b', lineHeight: 1.55 }}>
                    Cloud-hosted React SPA with reusable modular components for dynamic formatting and export. Reduced workflow to &lt; 5 mins with cross-browser testing.
                  </p>
                </div>
              </div>

              {/* Technical Skills */}
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '0.92rem', fontWeight: 800, color: '#09090b', textTransform: 'uppercase', letterSpacing: '0.06em', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.35rem', marginBottom: '0.65rem' }}>
                  Technical Skills
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.8rem', color: '#52525b' }}>
                  <div><strong>Languages:</strong> JavaScript (ES6+), HTML5, CSS3, Java</div>
                  <div><strong>Frontend:</strong> React.js, Next.js, Tailwind CSS, React Router, Responsive Design, SPA Architecture</div>
                  <div><strong>APIs & Auth:</strong> RESTful APIs, JWT Authentication, Nodemailer OTP, Clerk, Web Performance QA</div>
                  <div><strong>Backend & Tools:</strong> Node.js, Express.js, MongoDB, Git, GitHub, Vite, Figma, Google Stitch, Netlify, Vercel</div>
                </div>
              </div>

              {/* Education & Certifications */}
              <div>
                <h3 style={{ fontSize: '0.92rem', fontWeight: 800, color: '#09090b', textTransform: 'uppercase', letterSpacing: '0.06em', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.35rem', marginBottom: '0.65rem' }}>
                  Education & Certifications
                </h3>
                <div style={{ fontSize: '0.8rem', color: '#52525b', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                  <div>
                    <strong>IPS Academy, Indore (RGPV Bhopal)</strong> — B.Tech in Computer Science (AI & ML), 4th Year Senior (Sep 2023 – Sep 2027)
                  </div>
                  <div>
                    <strong>Meta</strong>: Advanced React (ID: <code>TAGZAOOSH1X3</code>) • <strong>Board Infinity</strong>: Java Programming (ID: <code>6NY6HFE5OOTB</code>)
                  </div>
                </div>
              </div>

              {/* Mobile 1-Tap Download Button */}
              <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid #e2e8f0', display: 'flex', gap: '0.65rem' }}>
                <a
                  href="/resume.pdf"
                  download="Ayush_Kumar_Mishra_Resume.pdf"
                  className="btn-dark-pill"
                  style={{ width: '100%', justifyContent: 'center', padding: '0.65rem', fontSize: '0.85rem' }}
                >
                  <Download size={15} />
                  <span>Download PDF Document</span>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>

      </div>

      <style>{`
        /* Desktop viewer: displayed on tablet and desktop screens */
        .resume-desktop-viewer {
          display: block;
        }
        /* Mobile overview: displayed on phones/small screens */
        .resume-mobile-overview {
          display: none;
        }

        @media (max-width: 768px) {
          .resume-desktop-viewer {
            display: none !important;
          }
          .resume-mobile-overview {
            display: block !important;
          }
        }
      `}</style>
    </main>
  );
}
