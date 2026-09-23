import { 
  Download, 
  ExternalLink, 
  FileText, 
  CheckCircle2, 
  Sparkles, 
  Eye
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

export default function Resume() {
  const isBrowser = typeof window !== 'undefined';
  const isProductionHttp = isBrowser && window.location.protocol.startsWith('http') && !window.location.hostname.includes('localhost');
  
  const rawPdfUrl = '/resume.pdf?v=latest';
  const livePdfUrl = isBrowser ? `${window.location.origin}/resume.pdf` : '/resume.pdf';
  const viewerUrl = isProductionHttp 
    ? `https://docs.google.com/viewer?url=${encodeURIComponent(livePdfUrl)}&embedded=true` 
    : rawPdfUrl;

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

        {/* Universal Visual PDF Viewer Frame (Mobile, Tablet, Desktop) */}
        <ScrollReveal direction="up" delay={60}>
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
              <iframe
                src={viewerUrl}
                title="Ayush Kumar Mishra Resume Viewer"
                sandbox="allow-scripts allow-popups"
                style={{
                  width: '100%',
                  height: '100%',
                  border: 'none',
                  display: 'block',
                }}
              />
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
                <span>Official Curriculum Vitae • Full-Time Opportunities</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </main>
  );
}
