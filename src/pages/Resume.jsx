import { useState, useRef } from 'react';
import { 
  Download, 
  Eye, 
  FileText, 
  Printer, 
  Mail, 
  MapPin, 
  Upload, 
  Trash2, 
  FileCheck, 
  Terminal,
  ArrowUpRight
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import ScrollReveal from '../components/ScrollReveal';

const DEFAULT_DOWNLOAD_URL = '/resume.pdf';
const DEFAULT_PREVIEW_URL  = '/resume.pdf';

export default function Resume() {
  const [viewMode, setViewMode] = useState('digital'); // 'digital' | 'pdf'
  const [uploadedResume, setUploadedResume] = useState(() => {
    try {
      const saved = localStorage.getItem('custom_resume_meta');
      const savedData = localStorage.getItem('custom_resume_data');
      if (saved && savedData) {
        const meta = JSON.parse(saved);
        return {
          name: meta.name,
          size: meta.size,
          date: meta.date,
          dataUrl: savedData,
        };
      }
    } catch (e) {
      console.error('Failed to load cached resume:', e);
    }
    return null;
  });
  const [uploadStatus, setUploadStatus] = useState('');
  const fileInputRef = useRef(null);

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.type !== 'application/pdf') {
      alert('Please upload a valid PDF document (.pdf).');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target.result;
      const meta = {
        name: file.name,
        size: (file.size / 1024).toFixed(1) + ' KB',
        date: new Date().toLocaleDateString(),
      };

      try {
        localStorage.setItem('custom_resume_meta', JSON.stringify(meta));
        localStorage.setItem('custom_resume_data', dataUrl);
      } catch (err) {
        console.warn('LocalStorage limit exceeded, using runtime memory:', err);
      }

      setUploadedResume({
        ...meta,
        dataUrl,
      });

      setUploadStatus('✓ Resume updated successfully!');
      setTimeout(() => setUploadStatus(''), 4000);
      setViewMode('pdf');
    };
    reader.readAsDataURL(file);
  };

  const handleResetResume = () => {
    localStorage.removeItem('custom_resume_meta');
    localStorage.removeItem('custom_resume_data');
    setUploadedResume(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
    setUploadStatus('Reset to default master resume');
    setTimeout(() => setUploadStatus(''), 3000);
  };

  const handlePrint = () => {
    window.print();
  };

  const activeDownloadUrl = uploadedResume ? uploadedResume.dataUrl : DEFAULT_DOWNLOAD_URL;
  const activeDownloadName = uploadedResume ? uploadedResume.name : 'Ayush_Kumar_Mishra_Resume.pdf';

  return (
    <main style={{ minHeight: '100vh', paddingTop: '100px', paddingBottom: '4.5rem', position: 'relative' }}>
      <div className="container-custom">
        
        {/* Header & Controls Bar */}
        <ScrollReveal direction="up" delay={0}>
          <div
            className="editorial-card"
            style={{
              padding: '1.25rem 1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
              marginBottom: '1.5rem',
            }}
          >
            {/* Left Info */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'rgba(139, 92, 246, 0.12)',
                  border: '1px solid rgba(139, 92, 246, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#8b5cf6',
                }}
              >
                <FileText size={18} />
              </div>
              <div>
                <h1
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 800,
                    color: '#09090b',
                  }}
                >
                  Curriculum Vitae / Resume
                </h1>
                <p style={{ color: '#64748b', fontSize: '0.76rem' }}>
                  4th Year Senior B.Tech (AI & ML) • Software Engineer
                </p>
              </div>
            </div>

            {/* Center Tabs */}
            <div
              style={{
                display: 'flex',
                background: '#f1f5f9',
                padding: '0.25rem',
                borderRadius: '9999px',
                border: '1px solid #e2e8f0',
              }}
            >
              <button
                onClick={() => setViewMode('digital')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.4rem 0.95rem',
                  borderRadius: '9999px',
                  border: 'none',
                  background: viewMode === 'digital' ? '#09090b' : 'transparent',
                  color: viewMode === 'digital' ? '#ffffff' : '#64748b',
                  fontWeight: viewMode === 'digital' ? 700 : 500,
                  fontSize: '0.78rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                <Terminal size={13} />
                <span>ATS Digital Format</span>
              </button>
              <button
                onClick={() => setViewMode('pdf')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.4rem 0.95rem',
                  borderRadius: '9999px',
                  border: 'none',
                  background: viewMode === 'pdf' ? '#09090b' : 'transparent',
                  color: viewMode === 'pdf' ? '#ffffff' : '#64748b',
                  fontWeight: viewMode === 'pdf' ? 700 : 500,
                  fontSize: '0.78rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                <Eye size={13} />
                <span>PDF Document View</span>
              </button>
            </div>

            {/* Right Actions: Upload & Download */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
              <input
                ref={fileInputRef}
                type="file"
                accept="application/pdf"
                onChange={handleFileUpload}
                style={{ display: 'none' }}
              />

              <button
                onClick={() => fileInputRef.current?.click()}
                title="Upload an updated resume PDF"
                className="btn-outline-pill"
                style={{ padding: '0.45rem 0.85rem', fontSize: '0.78rem' }}
              >
                <Upload size={13} />
                <span>Upload PDF</span>
              </button>

              <button
                onClick={handlePrint}
                className="btn-outline-pill"
                style={{ padding: '0.45rem 0.85rem', fontSize: '0.78rem' }}
              >
                <Printer size={13} />
                <span>Print</span>
              </button>

              <a
                href={activeDownloadUrl}
                download={activeDownloadName}
                target={uploadedResume ? undefined : '_blank'}
                rel="noreferrer"
                className="btn-dark-pill"
                style={{ padding: '0.45rem 1rem', fontSize: '0.78rem' }}
              >
                <Download size={13} />
                <span>Download PDF</span>
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Upload Status Banner */}
        {uploadedResume && (
          <ScrollReveal direction="up" delay={50}>
            <div
              className="editorial-card"
              style={{
                padding: '0.75rem 1.25rem',
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                background: '#ecfeff',
                border: '1px solid #cffafe',
                fontSize: '0.8rem',
                flexWrap: 'wrap',
                gap: '0.5rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#0891b2', fontWeight: 600 }}>
                <FileCheck size={16} />
                <span>
                  Active Resume: <strong>{uploadedResume.name}</strong> ({uploadedResume.size}) — Updated on {uploadedResume.date}
                </span>
              </div>
              <button
                onClick={handleResetResume}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#ef4444',
                  fontSize: '0.76rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                }}
              >
                <Trash2 size={13} />
                <span>Reset to Default</span>
              </button>
            </div>
          </ScrollReveal>
        )}

        {uploadStatus && (
          <div
            style={{
              padding: '0.6rem 1rem',
              borderRadius: '8px',
              background: '#f5f3ff',
              border: '1px solid #ddd6fe',
              color: '#7c3aed',
              fontSize: '0.8rem',
              fontWeight: 600,
              marginBottom: '1.5rem',
              textAlign: 'center',
            }}
          >
            {uploadStatus}
          </div>
        )}

        {/* ── DIGITAL ATS RESUME VIEW ── */}
        {viewMode === 'digital' ? (
          <ScrollReveal direction="up" delay={80}>
            <div
              className="editorial-card"
              style={{
                padding: 'clamp(1.75rem, 3.5vw, 3rem)',
                maxWidth: '860px',
                margin: '0 auto',
                background: '#ffffff',
              }}
            >
              {/* Resume Header */}
              <div
                style={{
                  borderBottom: '2px solid #e2e8f0',
                  paddingBottom: '1.5rem',
                  marginBottom: '1.75rem',
                }}
              >
                <h2
                  style={{
                    fontSize: 'clamp(1.75rem, 3vw, 2.2rem)',
                    fontWeight: 900,
                    letterSpacing: '-0.025em',
                    color: '#09090b',
                    marginBottom: '0.25rem',
                  }}
                >
                  Ayush Kumar Mishra
                </h2>
                <p
                  style={{
                    color: '#8b5cf6',
                    fontSize: '0.94rem',
                    fontWeight: 700,
                    marginBottom: '0.75rem',
                  }}
                >
                  Software Engineer & Front-End Developer • 4th Year Senior B.Tech (AI & ML)
                </p>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    flexWrap: 'wrap',
                    color: '#64748b',
                    fontSize: '0.8rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <MapPin size={13} color="#8b5cf6" />
                    <span>Indore, MP, India</span>
                  </div>
                  <a
                    href="mailto:ayushhmsr@gmail.com"
                    style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#334155' }}
                  >
                    <Mail size={13} color="#8b5cf6" />
                    <span>ayushhmsr@gmail.com</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/ayushkumarmishra2004"
                    target="_blank"
                    rel="noreferrer"
                    style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#334155' }}
                  >
                    <LinkedinIcon size={13} color="#8b5cf6" />
                    <span>linkedin.com/in/ayushkumarmishra2004</span>
                  </a>
                  <a
                    href="https://github.com/ayushhmsr"
                    target="_blank"
                    rel="noreferrer"
                    style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#334155' }}
                  >
                    <GithubIcon size={13} color="#8b5cf6" />
                    <span>github.com/ayushhmsr</span>
                  </a>
                </div>
              </div>

              {/* Section 1: Summary */}
              <div style={{ marginBottom: '1.75rem' }}>
                <h3
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: '#8b5cf6',
                    borderBottom: '1px solid #e2e8f0',
                    paddingBottom: '0.35rem',
                    marginBottom: '0.75rem',
                  }}
                >
                  Professional Summary
                </h3>
                <p style={{ color: '#475569', fontSize: '0.86rem', lineHeight: 1.65 }}>
                  Software Engineer and Front-End Developer with hands-on professional experience building responsive, cloud-hosted web applications using JavaScript, React.js, HTML5, CSS3, and Tailwind CSS. Experienced in translating Figma and Google Stitch designs into production-ready interfaces, integrating REST APIs, implementing authentication workflows, debugging UI issues, and optimizing web performance. Backend fundamentals in Node.js, Express.js, MongoDB, and JWT authentication, with experience deploying applications through Vercel and Netlify. Currently in the 4th Year of B.Tech in Computer Science (AI & ML) and actively seeking full-time opportunities.
                </p>
              </div>

              {/* Section 2: Technical Skills */}
              <div style={{ marginBottom: '1.75rem' }}>
                <h3
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: '#8b5cf6',
                    borderBottom: '1px solid #e2e8f0',
                    paddingBottom: '0.35rem',
                    marginBottom: '0.75rem',
                  }}
                >
                  Technical Skills
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', fontSize: '0.83rem' }}>
                  <div>
                    <strong style={{ color: '#09090b' }}>Languages: </strong>
                    <span style={{ color: '#475569' }}>JavaScript (ES6+), HTML5, CSS3, Java, SQL basics</span>
                  </div>
                  <div>
                    <strong style={{ color: '#09090b' }}>Frontend: </strong>
                    <span style={{ color: '#475569' }}>React.js, Next.js, Tailwind CSS, React Router, Responsive Architecture, Single-Page Applications (SPA)</span>
                  </div>
                  <div>
                    <strong style={{ color: '#09090b' }}>Web Dev & Auth: </strong>
                    <span style={{ color: '#475569' }}>RESTful APIs, API Integration, JWT Authentication, Nodemailer OTP, Clerk, Web Performance, Cross-Browser Testing</span>
                  </div>
                  <div>
                    <strong style={{ color: '#09090b' }}>Backend & Data: </strong>
                    <span style={{ color: '#475569' }}>Node.js, Express.js, MongoDB, REST Architecture</span>
                  </div>
                  <div>
                    <strong style={{ color: '#09090b' }}>Cloud & Deployment: </strong>
                    <span style={{ color: '#475569' }}>Vercel, Netlify, Cloud-Hosted Web Applications</span>
                  </div>
                  <div>
                    <strong style={{ color: '#09090b' }}>Tooling & Design: </strong>
                    <span style={{ color: '#475569' }}>Git, GitHub, Vite, Figma, Google Stitch, Postman, VS Code</span>
                  </div>
                </div>
              </div>

              {/* Section 3: Experience */}
              <div style={{ marginBottom: '1.75rem' }}>
                <h3
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: '#8b5cf6',
                    borderBottom: '1px solid #e2e8f0',
                    paddingBottom: '0.35rem',
                    marginBottom: '1rem',
                  }}
                >
                  Work Experience
                </h3>

                {/* Exp 1 */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', marginBottom: '0.25rem' }}>
                    <h4 style={{ fontSize: '0.94rem', fontWeight: 800, color: '#09090b' }}>
                      IIMaspirant.in — <span style={{ color: '#8b5cf6', fontWeight: 700 }}>Web Developer</span> <span style={{ fontSize: '0.74rem', color: '#94a3b8' }}>| Hybrid</span>
                    </h4>
                    <span style={{ fontSize: '0.76rem', color: '#64748b', fontWeight: 600 }}>Jul 2026 – Present</span>
                  </div>
                  <ul style={{ paddingLeft: '1.1rem', color: '#475569', fontSize: '0.83rem', lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    <li>Established the first web presence for an ed-tech platform by designing and developing its official responsive website using React.js and Tailwind CSS.</li>
                    <li>Translated complete UI/UX designs into responsive React components using Google Stitch and Tailwind CSS, creating a production-ready interface across screen sizes.</li>
                    <li>Secured user registration and login flows by implementing JWT-based authentication and OTP email verification with Nodemailer.</li>
                    <li>Built and deployed the application using React, Vite, Tailwind CSS, Clerk authentication, and React Router to deliver a cloud-hosted production website.</li>
                  </ul>
                </div>

                {/* Exp 2 */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', marginBottom: '0.25rem' }}>
                    <h4 style={{ fontSize: '0.94rem', fontWeight: 800, color: '#09090b' }}>
                      CodSoft — <span style={{ color: '#8b5cf6', fontWeight: 700 }}>Front-End Development Intern</span> <span style={{ fontSize: '0.74rem', color: '#94a3b8' }}>| Remote</span>
                    </h4>
                    <span style={{ fontSize: '0.76rem', color: '#64748b', fontWeight: 600 }}>Feb 2025 – Mar 2025</span>
                  </div>
                  <ul style={{ paddingLeft: '1.1rem', color: '#475569', fontSize: '0.83rem', lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    <li>Shipped responsive, cloud-hosted single-page application features using JavaScript and React.js, delivering functionality for live use.</li>
                    <li>Improved cross-browser reliability by testing across 3+ browsers—Chrome, Firefox, and Safari—and resolving 15+ UI bugs before deployment.</li>
                    <li>Improved application responsiveness by debugging and refactoring 10+ React components to optimize page-load performance.</li>
                    <li>Delivered 4+ UI features from Figma specifications by collaborating with the design team and implementing maintainable JavaScript and React code.</li>
                  </ul>
                </div>
              </div>

              {/* Section 4: Projects */}
              <div style={{ marginBottom: '1.75rem' }}>
                <h3
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: '#8b5cf6',
                    borderBottom: '1px solid #e2e8f0',
                    paddingBottom: '0.35rem',
                    marginBottom: '1rem',
                  }}
                >
                  Key Projects
                </h3>

                {/* Proj 1 */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', marginBottom: '0.25rem' }}>
                    <h4 style={{ fontSize: '0.94rem', fontWeight: 800, color: '#09090b' }}>
                      CoinScope — <span style={{ color: '#475569', fontWeight: 600 }}>Cryptocurrency Tracking Platform</span>
                    </h4>
                    <a href="https://coinscopee.netlify.app" target="_blank" rel="noreferrer" style={{ fontSize: '0.76rem', color: '#8b5cf6', textDecoration: 'none', fontWeight: 700 }}>
                      coinscopee.netlify.app ↗
                    </a>
                  </div>
                  <ul style={{ paddingLeft: '1.1rem', color: '#475569', fontSize: '0.83rem', lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    <li>Delivered a responsive cryptocurrency tracking SPA using React.js and Tailwind CSS, validating the interface across 3 device breakpoints.</li>
                    <li>Enabled live cryptocurrency data by integrating the CoinGecko REST API to retrieve information for 50+ cryptocurrencies.</li>
                    <li>Improved dashboard usability by designing and implementing 6+ interactive React components with consistent responsive layouts.</li>
                  </ul>
                </div>

                {/* Proj 2 */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', marginBottom: '0.25rem' }}>
                    <h4 style={{ fontSize: '0.94rem', fontWeight: 800, color: '#09090b' }}>
                      Resumify — <span style={{ color: '#475569', fontWeight: 600 }}>AI Resume Builder</span>
                    </h4>
                    <a href="https://resumify-airesumebuilderr.netlify.app" target="_blank" rel="noreferrer" style={{ fontSize: '0.76rem', color: '#8b5cf6', textDecoration: 'none', fontWeight: 700 }}>
                      resumify-airesumebuilderr.netlify.app ↗
                    </a>
                  </div>
                  <ul style={{ paddingLeft: '1.1rem', color: '#475569', fontSize: '0.83rem', lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    <li>Built a cloud-hosted React SPA with reusable components to support dynamic, real-time resume generation.</li>
                    <li>Improved browser and device compatibility by manually testing across 3+ browsers and resolving rendering and layout issues.</li>
                  </ul>
                </div>
              </div>

              {/* Section 5: Education */}
              <div style={{ marginBottom: '1.75rem' }}>
                <h3
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: '#8b5cf6',
                    borderBottom: '1px solid #e2e8f0',
                    paddingBottom: '0.35rem',
                    marginBottom: '0.75rem',
                  }}
                >
                  Education
                </h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                  <div>
                    <h4 style={{ fontSize: '0.94rem', fontWeight: 800, color: '#09090b' }}>
                      IPS Academy, Indore — <span style={{ color: '#475569', fontWeight: 500 }}>Affiliated to RGPV, Bhopal</span>
                    </h4>
                    <p style={{ color: '#8b5cf6', fontSize: '0.84rem', fontStyle: 'italic', marginTop: '0.1rem' }}>
                      Bachelor of Technology in Computer Science (AI & ML) • 4th Year Senior
                    </p>
                  </div>
                  <span style={{ fontSize: '0.76rem', color: '#64748b', fontWeight: 600 }}>Sep 2023 – Sep 2027</span>
                </div>
              </div>

              {/* Section 6: Certifications */}
              <div>
                <h3
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: '#8b5cf6',
                    borderBottom: '1px solid #e2e8f0',
                    paddingBottom: '0.35rem',
                    marginBottom: '0.75rem',
                  }}
                >
                  Certifications
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                      <strong style={{ color: '#09090b', fontSize: '0.86rem' }}>
                        Advanced React — Meta, offered through Coursera
                      </strong>
                      <span style={{ fontSize: '0.74rem', color: '#64748b' }}>Aug 2026</span>
                    </div>
                    <div style={{ color: '#64748b', fontSize: '0.76rem', marginTop: '0.1rem' }}>
                      Credential ID: <code style={{ color: '#8b5cf6', fontFamily: 'var(--font-mono)' }}>TAGZAOOSH1X3</code>
                    </div>
                  </div>

                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                      <strong style={{ color: '#09090b', fontSize: '0.86rem' }}>
                        Fundamentals of Java Programming — Board Infinity, offered through Coursera
                      </strong>
                      <span style={{ fontSize: '0.74rem', color: '#64748b' }}>Feb 2026</span>
                    </div>
                    <div style={{ color: '#64748b', fontSize: '0.76rem', marginTop: '0.1rem' }}>
                      Credential ID: <code style={{ color: '#8b5cf6', fontFamily: 'var(--font-mono)' }}>6NY6HFE5OOTB</code>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </ScrollReveal>
        ) : (
          /* ── PDF EMBED VIEW ── */
          <ScrollReveal direction="up" delay={80}>
            <div
              className="editorial-card"
              style={{
                padding: '0',
                overflow: 'hidden',
                height: '80vh',
                border: '1px solid #cbd5e1',
              }}
            >
              <iframe
                src={uploadedResume ? uploadedResume.dataUrl : DEFAULT_PREVIEW_URL}
                title="Ayush Kumar Mishra Resume Preview"
                style={{
                  width: '100%',
                  height: '100%',
                  border: 'none',
                  display: 'block',
                  background: '#f8fafc',
                }}
                allow="autoplay"
              />
            </div>
          </ScrollReveal>
        )}

      </div>
    </main>
  );
}
