import { useState } from 'react';
import { 
  Download, 
  ExternalLink, 
  FileText, 
  CheckCircle2, 
  Sparkles, 
  Eye,
  RefreshCw,
  Briefcase,
  GraduationCap,
  Award
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

function ResumeHeader() {
  return (
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
          marginBottom: '1.5rem',
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
                <span>Auto-Sync PDF</span>
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
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn-outline-pill"
            style={{ padding: '0.45rem 1rem', fontSize: '0.8rem' }}
          >
            <Eye size={13} />
            <span>Open Fullscreen</span>
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
  );
}

function ResumeHighlights() {
  return (
    <ScrollReveal direction="up" delay={40}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
          gap: '1rem',
          marginBottom: '1.5rem',
        }}
      >
        <div className="editorial-card" style={{ padding: '1rem 1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem', color: '#8b5cf6' }}>
            <Briefcase size={15} />
            <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Experience
            </span>
          </div>
          <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#09090b' }}>
            Web Developer @ IIMaspirant.in
          </div>
          <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
            React.js, Tailwind, JWT Auth, Nodemailer OTP
          </div>
        </div>

        <div className="editorial-card" style={{ padding: '1rem 1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem', color: '#0891b2' }}>
            <GraduationCap size={15} />
            <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Education
            </span>
          </div>
          <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#09090b' }}>
            B.Tech in CS (AI & ML)
          </div>
          <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
            IPS Academy, Indore (RGPV) • 2023–2027
          </div>
        </div>

        <div className="editorial-card" style={{ padding: '1rem 1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem', color: '#10b981' }}>
            <Award size={15} />
            <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Credentials
            </span>
          </div>
          <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#09090b' }}>
            Meta Advanced React
          </div>
          <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
            Meta & Coursera Verified (ID: TAGZAOOSH1X3)
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

function ResumePdfViewer() {
  const [viewerMode, setViewerMode] = useState('native'); // 'native' | 'cloud'

  const rawPdfUrl = '/resume.pdf#toolbar=0&navpanes=0&scrollbar=1';
  const cloudViewerUrl = typeof window !== 'undefined'
    ? `https://docs.google.com/viewer?url=${encodeURIComponent(window.location.origin + '/resume.pdf')}&embedded=true`
    : '/resume.pdf';

  const activeSrc = viewerMode === 'native' ? rawPdfUrl : cloudViewerUrl;

  return (
    <ScrollReveal direction="up" delay={80}>
      <div
        className="editorial-card"
        style={{
          padding: '0.75rem',
          background: '#ffffff',
          border: '1px solid #e2e8f0',
          borderRadius: '20px',
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.06)',
        }}
      >
        {/* Viewer Controls */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.4rem 0.75rem 0.75rem',
            borderBottom: '1px solid #f1f5f9',
            marginBottom: '0.75rem',
            flexWrap: 'wrap',
            gap: '0.5rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: '#64748b' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }} />
            <span>Interactive Visual Document Viewer</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <button
              onClick={() => setViewerMode('native')}
              style={{
                padding: '0.25rem 0.65rem',
                borderRadius: '6px',
                border: '1px solid',
                borderColor: viewerMode === 'native' ? '#8b5cf6' : '#e2e8f0',
                background: viewerMode === 'native' ? '#ede9fe' : '#ffffff',
                color: viewerMode === 'native' ? '#6d28d9' : '#64748b',
                fontSize: '0.72rem',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Direct Engine
            </button>
            <button
              onClick={() => setViewerMode('cloud')}
              style={{
                padding: '0.25rem 0.65rem',
                borderRadius: '6px',
                border: '1px solid',
                borderColor: viewerMode === 'cloud' ? '#8b5cf6' : '#e2e8f0',
                background: viewerMode === 'cloud' ? '#ede9fe' : '#ffffff',
                color: viewerMode === 'cloud' ? '#6d28d9' : '#64748b',
                fontSize: '0.72rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.25rem',
              }}
            >
              <RefreshCw size={11} />
              <span>Cloud Viewer</span>
            </button>
          </div>
        </div>

        {/* Viewer Frame */}
        <div
          style={{
            width: '100%',
            height: '82vh',
            minHeight: '620px',
            borderRadius: '14px',
            overflow: 'hidden',
            background: '#f8fafc',
            border: '1px solid #e2e8f0',
            position: 'relative',
          }}
        >
          <object
            data={activeSrc}
            type="application/pdf"
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
              display: 'block',
            }}
          >
            <iframe
              src={activeSrc}
              title="Ayush Kumar Mishra Resume Viewer"
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                display: 'block',
              }}
            >
              <div style={{ padding: '2rem', textAlign: 'center' }}>
                <p style={{ marginBottom: '1rem', color: '#64748b' }}>
                  Your device browser does not support embedded PDF viewing.
                </p>
                <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn-dark-pill">
                  Open PDF in New Tab
                </a>
              </div>
            </iframe>
          </object>
        </div>

        {/* Bottom Status Bar */}
        <div
          style={{
            marginTop: '0.75rem',
            padding: '0.65rem 1rem',
            background: '#f8fafc',
            borderRadius: '10px',
            border: '1px solid #e2e8f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.5rem',
            fontSize: '0.75rem',
            color: '#64748b',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <CheckCircle2 size={13} color="#10b981" />
            <span>Official Curriculum Vitae • Verified & Up-to-Date</span>
          </div>
          <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>
            Direct Download Available
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function Resume() {
  return (
    <main style={{ minHeight: '100vh', paddingTop: '95px', paddingBottom: '4.5rem', position: 'relative' }}>
      <div className="container-custom">
        <ResumeHeader />
        <ResumeHighlights />
        <ResumePdfViewer />
      </div>
    </main>
  );
}
