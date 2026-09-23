import { Download, ExternalLink, FileText, Sparkles } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

export default function Resume() {
  const resumeUrl = '/resume.pdf';

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
                  width: '42px',
                  height: '42px',
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
                <FileText size={20} />
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
                    <span>Latest Version</span>
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
                <span>Open in Tab</span>
                <ExternalLink size={13} />
              </a>

              <a
                href={resumeUrl}
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

        {/* PDF Document Overview & Viewer */}
        <ScrollReveal direction="up" delay={60}>
          <div
            className="editorial-card"
            style={{
              padding: '1rem',
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.06)',
            }}
          >
            <div
              style={{
                width: '100%',
                height: '80vh',
                minHeight: '650px',
                borderRadius: '12px',
                overflow: 'hidden',
                background: '#ffffff',
                border: '1px solid #e2e8f0',
              }}
            >
              <iframe
                src={`${resumeUrl}#toolbar=0&navpanes=0&scrollbar=1`}
                title="Ayush Kumar Mishra Resume PDF"
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
    </main>
  );
}
