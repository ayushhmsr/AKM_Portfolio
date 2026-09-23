import { useState } from 'react';
import { 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  Globe
} from 'lucide-react';
import { GithubIcon } from '../components/Icons';
import ScrollReveal from '../components/ScrollReveal';
import coinscopeImg from './coinscope.png';
import resumifyImg from './resumify.png';

const projects = [
  {
    id: 'coinscope',
    title: 'CoinScope',
    subtitle: 'Cryptocurrency Tracking Platform',
    category: 'api',
    url: 'https://coinscopee.netlify.app',
    github: 'https://github.com/ayushhmsr',
    image: coinscopeImg,
    badge: 'Production SPA',
    metrics: [
      { label: 'Live Crypto Assets', value: '50+' },
      { label: 'Dashboard Widgets', value: '6+' },
      { label: 'Device Breakpoints', value: '3+' },
      { label: 'Price Updates', value: 'Real-Time' },
    ],
    points: [
      'Delivered a responsive cryptocurrency tracking SPA using React.js and Tailwind CSS, validating the interface across 3 device breakpoints for consistent cross-device rendering.',
      'Enabled live cryptocurrency data by integrating the CoinGecko REST API to retrieve information for 50+ cryptocurrencies with market cap, price trends, and volume.',
      'Improved dashboard usability by designing and implementing 6+ interactive React components with consistent responsive layouts.',
      'Eliminated manual price-refresh actions by implementing automatic real-time price updates through optimized refresh intervals.',
    ],
    tags: ['React.js', 'Tailwind CSS', 'CoinGecko REST API', 'Vite', 'Figma', 'Responsive UI'],
  },
  {
    id: 'resumify',
    title: 'Resumify',
    subtitle: 'AI Resume Builder & Exporter',
    category: 'tools',
    url: 'https://resumify-airesumebuilderr.netlify.app',
    github: 'https://github.com/ayushhmsr',
    badge: 'Cloud-Hosted Tool',
    image: resumifyImg,
    metrics: [
      { label: 'Creation Workflow', value: '< 5 Mins' },
      { label: 'Browser Support', value: 'Chrome, Safari, Firefox' },
      { label: 'Architecture', value: 'Modular React' },
      { label: 'Hosting Platform', value: 'Netlify' },
    ],
    points: [
      'Built a cloud-hosted React SPA with reusable modular components to support dynamic, real-time resume formatting and export.',
      'Improved browser and device compatibility by manually testing the application across 3+ browsers and resolving rendering and layout issues.',
      'Reduced the resume creation workflow to under 5 minutes by streamlining the multi-step input-to-export process with intuitive UI.',
      'Delivered a deployed, user-focused resume-building experience by prioritizing intuitive navigation, clean visual design, and high usability.',
    ],
    tags: ['React.js', 'Tailwind CSS', 'Figma UI/UX', 'Cloud-Hosted', 'Netlify', 'Single-Page Application'],
  },
];

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'api', label: 'API Integrations' },
  { id: 'tools', label: 'Productivity Tools' },
];

function ProjectsHero() {
  return (
    <ScrollReveal direction="up" delay={0}>
      <div style={{ maxWidth: '780px', marginBottom: '2.25rem' }}>
        <div className="glow-pill" style={{ marginBottom: '0.75rem' }}>
          <Sparkles size={12} />
          <span>Featured Case Studies</span>
        </div>
        <h1
          style={{
            fontSize: 'clamp(2rem, 3.8vw, 2.8rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: '-0.03em',
            marginBottom: '0.85rem',
          }}
        >
          Production Projects <br />
          <span style={{ color: 'var(--accent-light)' }}>Built & Shipped to the Web.</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', lineHeight: 1.65 }}>
          Each project is built with a focus on real-world utility, responsive UI/UX fidelity, API performance, and clean code architecture.
        </p>
      </div>
    </ScrollReveal>
  );
}

function ProjectFilter({ activeFilter, onSelectFilter }) {
  return (
    <ScrollReveal direction="up" delay={60}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.45rem',
          flexWrap: 'wrap',
          marginBottom: '2.25rem',
        }}
      >
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onSelectFilter(cat.id)}
            style={{
              padding: '0.4rem 1rem',
              borderRadius: '100px',
              border: '1px solid',
              borderColor: activeFilter === cat.id ? 'rgba(99, 102, 241, 0.5)' : 'var(--border)',
              background: activeFilter === cat.id ? 'rgba(99, 102, 241, 0.15)' : 'rgba(255, 255, 255, 0.03)',
              color: activeFilter === cat.id ? '#ffffff' : 'var(--text-secondary)',
              fontWeight: activeFilter === cat.id ? 600 : 500,
              fontSize: '0.8rem',
              cursor: 'pointer',
              transition: 'background-color 0.15s ease, border-color 0.15s ease, color 0.15s ease',
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </ScrollReveal>
  );
}

function ProjectCard({ project, index }) {
  return (
    <ScrollReveal direction="up" delay={index * 100}>
      <div className="dev-card" style={{ overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))' }}>
          {/* Media Showcase */}
          <div
            style={{
              background: '#090a0f',
              position: 'relative',
              minHeight: '240px',
              borderRight: '1px solid var(--border)',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0.92,
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />

            <div
              style={{
                position: 'absolute',
                top: '0.75rem',
                left: '0.75rem',
                padding: '0.25rem 0.65rem',
                borderRadius: '100px',
                background: 'rgba(7, 7, 9, 0.85)',
                backdropFilter: 'blur(8px)',
                border: '1px solid var(--border-light)',
                fontSize: '0.7rem',
                fontWeight: 600,
                color: '#ffffff',
              }}
            >
              {project.badge}
            </div>
          </div>

          {/* Content */}
          <div style={{ padding: 'clamp(1.25rem, 2.5vw, 2rem)', display: 'flex', flexDirection: 'column' }}>
            <div style={{ marginBottom: '0.85rem' }}>
              <p style={{ color: 'var(--accent-light)', fontSize: '0.78rem', fontWeight: 600, marginBottom: '0.15rem' }}>
                {project.subtitle}
              </p>
              <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text)' }}>
                {project.title}
              </h2>
            </div>

            {/* Impact Metrics */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '0.55rem',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                padding: '0.75rem 0.9rem',
                marginBottom: '1rem',
              }}
            >
              {project.metrics.map((m) => (
                <div key={m.label}>
                  <div style={{ fontSize: '0.68rem', color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    {m.label}
                  </div>
                  <div style={{ fontSize: '0.84rem', fontWeight: 600, color: '#ffffff', marginTop: '0.1rem' }}>
                    {m.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Bullets */}
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                marginBottom: '1.25rem',
              }}
            >
              {project.points.map((pt) => (
                <li
                  key={pt}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.55rem',
                    color: 'var(--text-secondary)',
                    fontSize: '0.82rem',
                    lineHeight: 1.55,
                  }}
                >
                  <CheckCircle2
                    size={14}
                    style={{
                      color: 'var(--accent-light)',
                      marginTop: '2px',
                      flexShrink: 0,
                    }}
                  />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>

            {/* Tech tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.25rem', marginTop: 'auto' }}>
              {project.tags.map((t) => (
                <span
                  key={t}
                  style={{
                    padding: '0.18rem 0.55rem',
                    borderRadius: '6px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border)',
                    fontSize: '0.72rem',
                    color: 'var(--text-secondary)',
                    fontWeight: 500,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Links */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                flexWrap: 'wrap',
                paddingTop: '0.85rem',
                borderTop: '1px solid var(--border)',
              }}
            >
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.45rem 1.15rem',
                  borderRadius: '100px',
                  background: '#ffffff',
                  color: '#09090b',
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  textDecoration: 'none',
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
              >
                <span>Live Site</span>
                <ExternalLink size={13} />
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.45rem 1rem',
                  borderRadius: '100px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid var(--border-light)',
                  color: 'var(--text)',
                  fontWeight: 600,
                  fontSize: '0.8rem',
                  textDecoration: 'none',
                }}
              >
                <GithubIcon size={13} />
                <span>Source Code</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

function UpcomingProjectsBanner() {
  return (
    <ScrollReveal direction="up" delay={80}>
      <div
        className="dev-card"
        style={{
          padding: '1.75rem',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            width: '34px',
            height: '34px',
            borderRadius: '8px',
            background: 'rgba(99, 102, 241, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--accent-light)',
            margin: '0 auto 0.65rem',
          }}
        >
          <Globe size={16} />
        </div>
        <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.25rem' }}>
          More Projects in Development
        </h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.84rem', maxWidth: '440px', margin: '0 auto 1rem' }}>
          Building Next.js full-stack applications with server components, PostgreSQL, and real-time state.
        </p>
        <a
          href="https://github.com/ayushhmsr"
          target="_blank"
          rel="noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem',
            color: 'var(--accent-light)',
            fontWeight: 600,
            fontSize: '0.84rem',
            textDecoration: 'none',
          }}
        >
          <span>Follow updates on GitHub</span>
          <ExternalLink size={13} />
        </a>
      </div>
    </ScrollReveal>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter((p) => p.category === activeFilter);

  return (
    <main style={{ minHeight: '100vh', paddingTop: '105px', paddingBottom: '4.5rem', position: 'relative' }}>
      <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
        <ProjectsHero />
        <ProjectFilter activeFilter={activeFilter} onSelectFilter={setActiveFilter} />

        {/* Projects List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '3.5rem' }}>
          {filteredProjects.map((proj, i) => (
            <ProjectCard key={proj.id} project={proj} index={i} />
          ))}
        </div>

        <UpcomingProjectsBanner />
      </div>
    </main>
  );
}
