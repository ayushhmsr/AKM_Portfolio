import { useState } from 'react';
import { 
  Code2, 
  Layout, 
  Server, 
  Cloud, 
  Wrench, 
  Award, 
  Check, 
  Copy, 
  ExternalLink, 
  GraduationCap, 
  ShieldCheck,
  Terminal
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const skillCategories = [
  {
    title: 'Languages & Core',
    icon: Code2,
    badgeColor: 'badge-indigo',
    skills: ['JavaScript (ES6+)', 'HTML5', 'CSS3', 'Java', 'SQL basics'],
  },
  {
    title: 'Frontend & UI Engineering',
    icon: Layout,
    badgeColor: 'badge-cyan',
    skills: ['React.js', 'Next.js', 'Tailwind CSS', 'React Router', 'Responsive Architecture', 'SPA Design', 'Component Lifecycle'],
  },
  {
    title: 'Web Architecture, APIs & Auth',
    icon: ShieldCheck,
    badgeColor: 'badge-purple',
    skills: ['RESTful APIs', 'API Integration', 'JWT Authentication', 'Nodemailer OTP', 'Clerk Auth', 'Web Performance', 'Cross-Browser QA'],
  },
  {
    title: 'Backend & Data Fundamentals',
    icon: Server,
    badgeColor: 'badge-amber',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'REST Services', 'JSON Web Tokens'],
  },
  {
    title: 'Cloud & Deployment',
    icon: Cloud,
    badgeColor: 'badge-emerald',
    skills: ['Vercel', 'Netlify', 'Cloud-Hosted SPAs', 'Static & Dynamic Hosting', 'CI/CD Basics'],
  },
  {
    title: 'Developer Tooling & Design',
    icon: Wrench,
    badgeColor: 'badge-indigo',
    skills: ['Git', 'GitHub', 'Vite', 'Postman', 'VS Code', 'Figma', 'Google Stitch'],
  },
];

const certifications = [
  {
    title: 'Advanced React',
    issuer: 'Meta',
    platform: 'Coursera',
    date: 'Aug 2026',
    credentialId: 'TAGZAOOSH1X3',
    verifyUrl: 'https://www.coursera.org/verify/TAGZAOOSH1X3',
    topics: ['Custom React Hooks', 'Context API & State Management', 'Performance Profiling', 'HOCs & Composition'],
  },
  {
    title: 'Fundamentals of Java Programming',
    issuer: 'Board Infinity',
    platform: 'Coursera',
    date: 'Feb 2026',
    credentialId: '6NY6HFE5OOTB',
    verifyUrl: 'https://www.coursera.org/verify/6NY6HFE5OOTB',
    topics: ['Object-Oriented Programming (OOP)', 'Data Structures Basics', 'Algorithm Logic', 'Exception Handling'],
  },
];

function SkillsHero() {
  return (
    <ScrollReveal direction="up" delay={0}>
      <div style={{ maxWidth: '720px', marginBottom: '3rem' }}>
        <div className="badge badge-indigo" style={{ marginBottom: '0.85rem' }}>
          <Terminal size={12} />
          <span>Technical Capabilities & Credentials</span>
        </div>
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.85rem, 3.2vw, 2.5rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: '-0.025em',
            marginBottom: '0.75rem',
          }}
        >
          Skills, Stacks & <span className="gradient-text">Certifications</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.65 }}>
          A comprehensive overview of programming languages, frontend libraries, backend technologies, cloud hosting providers, and verified industry credentials I leverage to build reliable software.
        </p>
      </div>
    </ScrollReveal>
  );
}

function SkillCategoryCard({ category, index }) {
  const Icon = category.icon;
  return (
    <ScrollReveal direction="up" delay={index * 60}>
      <div
        className="dev-card"
        style={{
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.15rem',
          height: '100%',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              background: 'rgba(99, 102, 241, 0.08)',
              border: '1px solid rgba(99, 102, 241, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent)',
              flexShrink: 0,
            }}
          >
            <Icon size={18} />
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.98rem',
              fontWeight: 700,
              color: 'var(--text)',
              letterSpacing: '-0.01em',
            }}
          >
            {category.title}
          </h2>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
          {category.skills.map((skill) => (
            <span
              key={skill}
              style={{
                padding: '0.3rem 0.75rem',
                borderRadius: '6px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid var(--border)',
                color: 'var(--text-secondary)',
                fontSize: '0.78rem',
                fontWeight: 500,
                transition: 'border-color 0.2s ease, color 0.2s ease, background-color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.4)';
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.background = 'rgba(99, 102, 241, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}

function CertificationCard({ cert, index, copiedId, onCopy }) {
  return (
    <ScrollReveal direction="up" delay={index * 90}>
      <div
        className="dev-card"
        style={{
          padding: '1.6rem',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: '0.75rem',
            marginBottom: '1rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                background: 'rgba(56, 189, 248, 0.08)',
                border: '1px solid rgba(56, 189, 248, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent2)',
                flexShrink: 0,
              }}
            >
              <Award size={19} />
            </div>
            <div>
              <span
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: 'var(--accent2)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                }}
              >
                {cert.issuer} • {cert.platform}
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: 'var(--text)',
                  marginTop: '0.1rem',
                }}
              >
                {cert.title}
              </h3>
            </div>
          </div>

          <span
            style={{
              padding: '0.2rem 0.55rem',
              borderRadius: '4px',
              background: 'rgba(255, 255, 255, 0.05)',
              color: 'var(--muted)',
              fontSize: '0.72rem',
              fontWeight: 600,
            }}
          >
            {cert.date}
          </span>
        </div>

        {/* Topics Covered */}
        <div style={{ marginBottom: '1.35rem', flex: 1 }}>
          <div style={{ fontSize: '0.74rem', color: 'var(--muted)', marginBottom: '0.45rem', fontWeight: 600 }}>
            Core Competencies:
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
            {cert.topics.map((t) => (
              <span
                key={t}
                style={{
                  fontSize: '0.72rem',
                  padding: '0.2rem 0.55rem',
                  borderRadius: '4px',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-secondary)',
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Credential ID */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '0.85rem',
            borderTop: '1px solid var(--border)',
            flexWrap: 'wrap',
            gap: '0.65rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span style={{ fontSize: '0.72rem', color: 'var(--muted)' }}>ID:</span>
            <code
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem',
                color: 'var(--text)',
                background: 'rgba(0, 0, 0, 0.4)',
                padding: '0.15rem 0.45rem',
                borderRadius: '4px',
                border: '1px solid var(--border)',
              }}
            >
              {cert.credentialId}
            </code>
            <button
              onClick={() => onCopy(cert.credentialId)}
              title="Copy Credential ID"
              style={{
                background: 'none',
                border: 'none',
                color: copiedId === cert.credentialId ? 'var(--accent2)' : 'var(--muted)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                padding: '2px',
                transition: 'color 0.2s',
              }}
            >
              {copiedId === cert.credentialId ? <Check size={13} /> : <Copy size={13} />}
            </button>
          </div>

          <a
            href={cert.verifyUrl}
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.3rem',
              color: 'var(--accent2)',
              fontSize: '0.76rem',
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            <span>Verify</span>
            <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </ScrollReveal>
  );
}

function EducationOverviewCard() {
  return (
    <section>
      <ScrollReveal direction="up" delay={50}>
        <div
          className="dev-card"
          style={{
            padding: '1.6rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.25rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                background: 'rgba(99, 102, 241, 0.08)',
                border: '1px solid rgba(99, 102, 241, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent)',
                flexShrink: 0,
              }}
            >
              <GraduationCap size={22} />
            </div>
            <div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: 'var(--text)',
                  marginBottom: '0.2rem',
                }}
              >
                IPS Academy, Indore
              </h3>
              <p style={{ color: 'var(--accent2)', fontWeight: 600, fontSize: '0.85rem' }}>
                Bachelor of Technology in Computer Science (AI & ML) • 4th Year Senior
              </p>
              <p style={{ color: 'var(--muted)', fontSize: '0.76rem', marginTop: '0.1rem' }}>
                Affiliated to RGPV, Bhopal • Sep 2023 – Sep 2027
              </p>
            </div>
          </div>

          <div className="badge badge-emerald">
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#34d399', display: 'inline-block' }} />
            <span>4th Year Senior • Seeking Full-Time</span>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

export default function Skills() {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (id) => {
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2200);
  };

  return (
    <main style={{ minHeight: '100vh', paddingTop: '100px', paddingBottom: '4.5rem', position: 'relative' }}>
      <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
        <SkillsHero />

        {/* SKILLS CATEGORIES GRID */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.25rem',
            marginBottom: '3.5rem',
          }}
        >
          {skillCategories.map((category, i) => (
            <SkillCategoryCard key={category.title} category={category} index={i} />
          ))}
        </div>

        {/* CERTIFICATIONS SECTION */}
        <section style={{ marginBottom: '3.5rem' }}>
          <ScrollReveal direction="up" delay={50}>
            <div style={{ marginBottom: '1.5rem' }}>
              <div className="badge badge-cyan" style={{ marginBottom: '0.5rem' }}>
                <Award size={12} />
                <span>Verified Credentials</span>
              </div>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.4rem, 2.4vw, 1.85rem)',
                  fontWeight: 800,
                  color: 'var(--text)',
                  letterSpacing: '-0.02em',
                }}
              >
                Industry Certifications
              </h2>
            </div>
          </ScrollReveal>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {certifications.map((cert, i) => (
              <CertificationCard
                key={cert.credentialId}
                cert={cert}
                index={i}
                copiedId={copiedId}
                onCopy={handleCopy}
              />
            ))}
          </div>
        </section>

        {/* EDUCATION CARD */}
        <EducationOverviewCard />

      </div>
    </main>
  );
}
