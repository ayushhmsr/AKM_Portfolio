import { 
  GraduationCap, 
  CheckCircle2, 
  Calendar, 
  Building2, 
  Sparkles, 
  Code2, 
  Layout, 
  ShieldCheck, 
  Cpu
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const experiences = [
  {
    role: 'Web Developer',
    company: 'IIMaspirant.in',
    type: 'Hybrid',
    period: 'Jul 2026 – Present',
    active: true,
    highlights: [
      'Established the first web presence for an ed-tech platform by designing and developing its official responsive website using React.js and Tailwind CSS.',
      'Translated complete UI/UX designs into responsive React components using Google Stitch and Tailwind CSS, creating a production-ready interface across screen sizes.',
      'Secured user registration and login flows by implementing JWT-based authentication and OTP email verification with Nodemailer.',
      'Built and deployed the application using React, Vite, Tailwind CSS, Clerk authentication, and React Router to deliver a cloud-hosted production website.',
    ],
    tech: ['React.js', 'Tailwind CSS', 'Google Stitch', 'Vite', 'JWT', 'Nodemailer OTP', 'Clerk', 'React Router'],
  },
  {
    role: 'Front-End Development Intern',
    company: 'CodSoft',
    type: 'Remote',
    period: 'Feb 2025 – Mar 2025',
    active: false,
    highlights: [
      'Shipped responsive, cloud-hosted single-page application features using JavaScript and React.js, delivering functionality for live use.',
      'Improved cross-browser reliability by testing across 3+ browsers—Chrome, Firefox, and Safari—and resolving 15+ UI bugs before deployment.',
      'Improved application responsiveness by debugging and refactoring 10+ React components to optimize page-load performance.',
      'Delivered 4+ UI features from Figma specifications by collaborating with the design team and implementing maintainable JavaScript and React code.',
    ],
    tech: ['JavaScript (ES6+)', 'React.js', 'Figma', 'Cross-Browser QA', 'Performance Optimization'],
  },
];

const principles = [
  {
    icon: Layout,
    title: 'Figma & Stitch to Code',
    desc: 'Translating designs into modular, accessible, and responsive components with clean HTML/CSS architecture.',
  },
  {
    icon: Code2,
    title: 'Component Architecture',
    desc: 'Writing self-contained, maintainable React components with predictable state management and minimal re-renders.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Workflows & APIs',
    desc: 'Implementing JWT token auth, Nodemailer OTP verification, Clerk, and reliable error boundaries.',
  },
  {
    icon: Cpu,
    title: 'Performance & Cross-Browser QA',
    desc: 'Optimizing page speed and ensuring consistent rendering across Chrome, Safari, and Firefox.',
  },
];

function ProfileCard() {
  return (
    <ScrollReveal direction="up" delay={80}>
      <div className="dev-card" style={{ padding: '1.5rem', height: '100%' }}>
        <h2 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text)', marginBottom: '1.15rem', display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
          <span style={{ color: 'var(--accent-light)' }}>//</span>
          Professional Profile
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {[
            { label: 'Full Name', value: 'Ayush Kumar Mishra' },
            { label: 'Role', value: 'Software Engineer & Front-End Developer' },
            { label: 'Status', value: 'Senior 4th Year B.Tech (AI & ML)' },
            { label: 'Institute', value: 'IPS Academy, Indore (RGPV, Bhopal)' },
            { label: 'Location', value: 'Indore, MP, India' },
            { label: 'Opportunity', value: '🟢 Actively Seeking Full-Time Roles' },
          ].map((item) => (
            <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px solid var(--border)', paddingBottom: '0.55rem', gap: '1rem' }}>
              <span style={{ color: 'var(--text-tertiary)', fontSize: '0.78rem', minWidth: '90px' }}>{item.label}</span>
              <span style={{ color: 'var(--text)', fontSize: '0.84rem', fontWeight: 500, textAlign: 'right' }}>{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}

function PhilosophyCard() {
  return (
    <ScrollReveal direction="up" delay={140}>
      <div className="dev-card" style={{ padding: '1.5rem', height: '100%' }}>
        <h2 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text)', marginBottom: '1.15rem', display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
          <span style={{ color: '#38bdf8' }}>//</span>
          Engineering Philosophy
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          {principles.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <div style={{ width: '30px', height: '30px', borderRadius: '6px', background: 'rgba(255, 255, 255, 0.04)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-light)', flexShrink: 0 }}>
                  <Icon size={15} />
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.86rem', color: 'var(--text)', marginBottom: '0.1rem' }}>{p.title}</div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.78rem', lineHeight: 1.5 }}>{p.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </ScrollReveal>
  );
}

function ExperienceTimeline() {
  return (
    <section style={{ marginBottom: '3.5rem' }}>
      <ScrollReveal direction="up" delay={50}>
        <div style={{ marginBottom: '1.5rem' }}>
          <p style={{ color: 'var(--accent-light)', fontFamily: 'var(--font-mono)', fontSize: '0.74rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
            // Career History
          </p>
          <h2 style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.1rem)', fontWeight: 800, color: 'var(--text)' }}>
            Work Experience
          </h2>
        </div>
      </ScrollReveal>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {experiences.map((exp, i) => (
          <ScrollReveal key={exp.company} direction="up" delay={i * 100}>
            <div className="dev-card" style={{ padding: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '0.85rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.2rem' }}>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text)' }}>{exp.role}</h3>
                    {exp.active && (
                      <span style={{ padding: '0.15rem 0.5rem', borderRadius: '100px', background: 'rgba(99, 102, 241, 0.15)', color: 'var(--accent-light)', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                        Current Role
                      </span>
                    )}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: 'var(--accent-light)', fontWeight: 600, fontSize: '0.88rem' }}>
                    <Building2 size={14} />
                    <span>{exp.company}</span>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--text-tertiary)', fontSize: '0.78rem', fontFamily: 'var(--font-mono)' }}>
                    <Calendar size={12} />
                    <span>{exp.period}</span>
                  </div>
                  <span style={{ padding: '0.12rem 0.45rem', borderRadius: '4px', background: 'rgba(255, 255, 255, 0.04)', color: 'var(--text-secondary)', fontSize: '0.7rem', fontWeight: 500 }}>
                    {exp.type}
                  </span>
                </div>
              </div>

              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.55rem', marginBottom: '1.25rem' }}>
                {exp.highlights.map((bullet) => (
                  <li key={bullet} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.55rem', color: 'var(--text-secondary)', fontSize: '0.84rem', lineHeight: 1.55 }}>
                    <CheckCircle2 size={14} style={{ color: 'var(--accent-light)', marginTop: '3px', flexShrink: 0 }} />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                {exp.tech.map((t) => (
                  <span key={t} style={{ padding: '0.18rem 0.55rem', borderRadius: '6px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border)', color: 'var(--text-secondary)', fontSize: '0.72rem', fontWeight: 500 }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

function EducationSection() {
  return (
    <section>
      <ScrollReveal direction="up" delay={50}>
        <div style={{ marginBottom: '1.25rem' }}>
          <p style={{ color: 'var(--accent-light)', fontFamily: 'var(--font-mono)', fontSize: '0.74rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
            // Academic Background
          </p>
          <h2 style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.1rem)', fontWeight: 800, color: 'var(--text)' }}>
            Education
          </h2>
        </div>

        <div className="dev-card" style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(99, 102, 241, 0.1)', border: '1px solid rgba(99, 102, 241, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-light)', flexShrink: 0 }}>
              <GraduationCap size={20} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.15rem' }}>IPS Academy, Indore</h3>
              <p style={{ color: 'var(--accent-light)', fontSize: '0.86rem', fontWeight: 600, marginBottom: '0.1rem' }}>
                Bachelor of Technology in Computer Science (AI & ML) • 4th Year Senior
              </p>
              <p style={{ color: 'var(--text-tertiary)', fontSize: '0.78rem' }}>
                Affiliated to Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV), Bhopal
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'right' }}>
            <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#ffffff', marginBottom: '0.1rem', fontFamily: 'var(--font-mono)' }}>
              Sep 2023 – Sep 2027
            </div>
            <div style={{ color: 'var(--text-tertiary)', fontSize: '0.78rem' }}>Indore, Madhya Pradesh</div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

function AboutHero() {
  return (
    <ScrollReveal direction="up" delay={0}>
      <div style={{ maxWidth: '780px', marginBottom: '2.5rem' }}>
        <div className="glow-pill" style={{ marginBottom: '0.75rem' }}>
          <Sparkles size={12} />
          <span>Developer Journey</span>
        </div>
        <h1 style={{ fontSize: 'clamp(2rem, 3.8vw, 2.8rem)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.03em', marginBottom: '0.85rem' }}>
          Engineering Interfaces with <br />
          <span style={{ color: 'var(--accent-light)' }}>Precision & Performance.</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', lineHeight: 1.65 }}>
          I am a Software Engineer and Front-End Developer with hands-on experience building cloud-hosted single-page applications, ed-tech websites, and REST APIs. Currently in the 4th Year of B.Tech in Computer Science (AI & ML) and actively seeking full-time opportunities.
        </p>
      </div>
    </ScrollReveal>
  );
}

export default function About() {
  return (
    <main style={{ minHeight: '100vh', paddingTop: '105px', paddingBottom: '4.5rem', position: 'relative' }}>
      <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
        <AboutHero />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '1.5rem', marginBottom: '3.5rem' }}>
          <ProfileCard />
          <PhilosophyCard />
        </div>

        <ExperienceTimeline />
        <EducationSection />
      </div>
    </main>
  );
}
