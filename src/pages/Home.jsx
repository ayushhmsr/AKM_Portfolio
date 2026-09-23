import { useState, useRef } from 'react';
import { 
  ArrowUpRight, 
  Check, 
  Copy, 
  Zap, 
  Mail, 
  Code2, 
  Cpu, 
  Layers, 
  GraduationCap
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import HeroDeviceMockup from '../components/HeroDeviceMockup';
import ScrollReveal from '../components/ScrollReveal';

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;   
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;  
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const tickerPills = [
  'REACT.JS & NEXT.JS',
  'TAILWIND CSS',
  'RESTFUL APIS',
  'JWT & CLERK AUTH',
  'NODEMAILER OTP',
  'FIGMA TO CODE',
  'GOOGLE STITCH',
  'SUB-SECOND LCP',
  'CROSS-BROWSER QA',
  'RESPONSIVE SPAS',
];

function HeroSection() {
  return (
    <section style={{ padding: '2rem 0 3.5rem', position: 'relative' }}>
      <div className="container-custom">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: '2.5rem',
            alignItems: 'center',
          }}
        >
          {/* Left Hero Content */}
          <ScrollReveal direction="up" delay={0}>
            <div>
              {/* Status Pill */}
              <div style={{ marginBottom: '1.15rem' }}>
                <div className="status-pill">
                  <span
                    style={{
                      width: '7px',
                      height: '7px',
                      borderRadius: '50%',
                      background: '#10b981',
                      boxShadow: '0 0 8px #10b981',
                      animation: 'pulseDot 2s infinite',
                      flexShrink: 0,
                    }}
                  />
                  <span>4th Year Senior B.Tech • Seeking Full-Time Software Engineer Roles</span>
                </div>
              </div>

              {/* Main Heading */}
              <h1
                style={{
                  fontSize: 'clamp(2.1rem, 4.4vw, 3.6rem)',
                  fontWeight: 900,
                  lineHeight: 1.12,
                  letterSpacing: '-0.035em',
                  color: '#09090b',
                  marginBottom: '1.15rem',
                }}
              >
                Crafting High-Performance{' '}
                <span className="gradient-purple-cyan">Interfaces</span>{' '}
                & Scalable{' '}
                <span className="gradient-orange-amber">Web Applications</span>
              </h1>

              {/* Bio text from Resume */}
              <p
                style={{
                  color: '#52525b',
                  fontSize: '0.96rem',
                  lineHeight: 1.65,
                  marginBottom: '1.85rem',
                  maxWidth: '560px',
                }}
              >
                Hi, I’m <strong>Ayush Kumar Mishra</strong> — a Software Engineer and Front-End Developer with hands-on experience building responsive, cloud-hosted applications with <strong>JavaScript (ES6+)</strong>, <strong>React.js</strong>, and <strong>Tailwind CSS</strong>. Experienced in Figma-to-code architecture, REST APIs, authentication workflows, and performance optimization.
              </p>

              {/* Action Buttons */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2.25rem' }}>
                <a href="#projects" className="btn-dark-pill">
                  <span>Explore Selected Works</span>
                  <span>▼</span>
                </a>

                <a href="#contact" className="btn-outline-pill">
                  <span>Get in Touch</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>

              {/* Hero Stats Row */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))',
                  gap: '1rem',
                  paddingTop: '1.25rem',
                  borderTop: '1px solid #e2e8f0',
                }}
              >
                <div>
                  <div style={{ fontSize: '1.35rem', fontWeight: 900, color: '#09090b' }}>2+</div>
                  <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 600 }}>Production SPAs</div>
                </div>
                <div>
                  <div style={{ fontSize: '1.35rem', fontWeight: 900, color: '#10b981' }}>15+</div>
                  <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 600 }}>UI Bugs Resolved</div>
                </div>
                <div>
                  <div style={{ fontSize: '1.35rem', fontWeight: 900, color: '#8b5cf6' }}>99%</div>
                  <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 600 }}>Lighthouse Score</div>
                </div>
                <div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#09090b', marginTop: '2px' }}>Figma → Code</div>
                  <div style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 600 }}>Craft Velocity</div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Hero Device Screen */}
          <ScrollReveal direction="up" delay={120}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <HeroDeviceMockup />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function SystemsArchitectureSection() {
  return (
    <section id="about" style={{ padding: '3rem 0 3.5rem' }}>
      <div className="container-custom">
        <ScrollReveal direction="up" delay={0}>
          <div style={{ marginBottom: '1.75rem' }}>
            <div style={{ fontSize: '0.74rem', color: '#8b5cf6', fontFamily: 'var(--font-mono)', fontWeight: 700, letterSpacing: '0.08em', marginBottom: '0.35rem' }}>
              01 // SYSTEMS ARCHITECTURE & FRONTEND CRAFT
            </div>
            <h2
              style={{
                fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)',
                fontWeight: 900,
                color: '#09090b',
                letterSpacing: '-0.025em',
              }}
            >
              Bridging Software Architecture & Responsive UI Engineering
            </h2>
          </div>
        </ScrollReveal>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '1.5rem',
            marginBottom: '1.75rem',
          }}
        >
          <ScrollReveal direction="up" delay={60}>
            <div
              className="editorial-card"
              style={{
                padding: '1.75rem',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.15rem' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    background: 'rgba(139, 92, 246, 0.12)',
                    border: '1px solid rgba(139, 92, 246, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#8b5cf6',
                    fontWeight: 800,
                    fontSize: '0.9rem',
                    flexShrink: 0,
                  }}
                >
                  <GraduationCap size={18} />
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#09090b' }}>
                  Computer Science & Engineering • 4th Year Senior
                </h3>
              </div>

              <p style={{ color: '#52525b', fontSize: '0.88rem', lineHeight: 1.65, marginBottom: '1.5rem', flex: 1 }}>
                Currently in my 4th Year of B.Tech in Computer Science (AI & ML) at <strong>IPS Academy, Indore</strong> (Affiliated to RGPV, Bhopal). I champion <strong>clean design-to-production engineering</strong>: turning complex Figma and Google Stitch designs into resilient, scalable React.js and Next.js production platforms.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                <span className="tag-pill">ATS-Friendly</span>
                <span className="tag-pill" style={{ background: '#ede9fe', color: '#6d28d9', borderColor: '#c4b5fd' }}>Graduating Sep 2027</span>
                <span className="tag-pill">React 19 & Next.js</span>
                <span className="tag-pill">Tailwind CSS</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={120}>
            <div
              className="editorial-card"
              style={{
                padding: '1.75rem',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.15rem' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    background: 'rgba(6, 182, 212, 0.12)',
                    border: '1px solid rgba(6, 182, 212, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#0891b2',
                    fontWeight: 800,
                    fontSize: '0.9rem',
                    flexShrink: 0,
                  }}
                >
                  <Code2 size={18} />
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#09090b' }}>
                  REST APIs, Auth Workflows & Cloud Delivery
                </h3>
              </div>

              <p style={{ color: '#52525b', fontSize: '0.88rem', lineHeight: 1.65, marginBottom: '1.5rem', flex: 1 }}>
                Hands-on experience securing single-page applications with <strong>JWT-based authentication</strong>, <strong>Nodemailer OTP verification</strong>, and <strong>Clerk auth</strong>. Proficient in integrating complex RESTful APIs, optimizing Core Web Vitals, and maintaining cross-browser reliability across Chrome, Safari, and Firefox.
              </p>

              <div
                style={{
                  padding: '0.65rem 0.9rem',
                  borderRadius: '10px',
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.78rem',
                  color: '#334155',
                  fontWeight: 600,
                }}
              >
                <Zap size={14} color="#10b981" />
                <span>Sub-second LCP, clean component state, and rigorous QA.</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal direction="up" delay={160}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.45rem',
              flexWrap: 'wrap',
              padding: '0.75rem 1rem',
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '14px',
            }}
          >
            {tickerPills.map((pill) => (
              <span
                key={pill}
                style={{
                  fontSize: '0.68rem',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 700,
                  color: '#64748b',
                  padding: '0.2rem 0.6rem',
                  background: '#f8fafc',
                  borderRadius: '6px',
                  border: '1px solid #e2e8f0',
                }}
              >
                {pill}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function TechStackSection() {
  return (
    <section id="skills" style={{ padding: '3rem 0 3.5rem' }}>
      <div className="container-custom">
        <ScrollReveal direction="up" delay={0}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.75rem' }}>
            <div>
              <div style={{ fontSize: '0.74rem', color: '#8b5cf6', fontFamily: 'var(--font-mono)', fontWeight: 700, letterSpacing: '0.08em', marginBottom: '0.35rem' }}>
                02 // TECH STACK & CAPABILITIES
              </div>
              <h2
                style={{
                  fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)',
                  fontWeight: 900,
                  color: '#09090b',
                  letterSpacing: '-0.025em',
                }}
              >
                Stack & Technical Capabilities
              </h2>
            </div>

            <div className="status-pill">
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }} />
              <span>Verified Core Skills & Tools</span>
            </div>
          </div>
        </ScrollReveal>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: '1.5rem',
          }}
        >
          {/* Card 1 */}
          <ScrollReveal direction="up" delay={60}>
            <div className="editorial-card" style={{ padding: '1.75rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#475569' }}>
                  <Code2 size={16} />
                </div>
                <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: '#94a3b8' }}>01 / CORE</span>
              </div>

              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#09090b', marginBottom: '0.35rem' }}>
                Core Languages
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.82rem', lineHeight: 1.55, marginBottom: '1.5rem' }}>
                Fundamental logic, algorithmic thinking, and modern asynchronous syntax.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: 'auto' }}>
                {['JavaScript (ES6+)', 'HTML5', 'CSS3', 'Java (OOP)'].map((s) => (
                  <span key={s} className="tag-pill">{s}</span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2 */}
          <ScrollReveal direction="up" delay={120}>
            <div
              className="editorial-card"
              style={{
                padding: '1.75rem',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                border: '1.5px solid #8b5cf6',
                boxShadow: '0 8px 30px rgba(139, 92, 246, 0.12)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(139, 92, 246, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#8b5cf6' }}>
                  <Layers size={16} />
                </div>
                <span style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: '#8b5cf6', fontWeight: 700, padding: '0.15rem 0.5rem', background: '#f5f3ff', borderRadius: '4px' }}>
                  PRIMARY FOCUS
                </span>
              </div>

              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#09090b', marginBottom: '0.35rem' }}>
                Frontend & UI Engineering
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.82rem', lineHeight: 1.55, marginBottom: '1.5rem' }}>
                Building fast, accessible, and responsive single-page interfaces with clean component architectures.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: 'auto' }}>
                <span className="tag-pill tag-pill-active">React.js</span>
                <span className="tag-pill tag-pill-active">Next.js</span>
                <span className="tag-pill">Tailwind CSS</span>
                <span className="tag-pill">React Router</span>
                <span className="tag-pill">Responsive Design</span>
                <span className="tag-pill">SPA Architecture</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 3 */}
          <ScrollReveal direction="up" delay={180}>
            <div className="editorial-card" style={{ padding: '1.75rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#475569' }}>
                  <Cpu size={16} />
                </div>
                <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: '#94a3b8' }}>03 / APIS & CLOUD</span>
              </div>

              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#09090b', marginBottom: '0.35rem' }}>
                Web Dev, Backend & Tools
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.82rem', lineHeight: 1.55, marginBottom: '1.5rem' }}>
                RESTful APIs, JWT Auth, Nodemailer OTP, Node.js fundamentals, and modern developer tooling.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: 'auto' }}>
                {['RESTful APIs', 'JWT Auth', 'Nodemailer OTP', 'Node.js', 'Express.js', 'MongoDB', 'Vercel / Netlify', 'Git & GitHub', 'Vite', 'Figma', 'Google Stitch', 'VS Code'].map((s) => (
                  <span key={s} className="tag-pill">{s}</span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function WorkExperienceSection() {
  return (
    <section id="experience" style={{ padding: '3rem 0 3.5rem' }}>
      <div className="container-custom">
        <ScrollReveal direction="up" delay={0}>
          <div style={{ marginBottom: '1.75rem' }}>
            <div style={{ fontSize: '0.74rem', color: '#8b5cf6', fontFamily: 'var(--font-mono)', fontWeight: 700, letterSpacing: '0.08em', marginBottom: '0.35rem' }}>
              03 // INDUSTRY EXPERIENCE
            </div>
            <h2
              style={{
                fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)',
                fontWeight: 900,
                color: '#09090b',
                letterSpacing: '-0.025em',
              }}
            >
              Professional Work Experience
            </h2>
          </div>
        </ScrollReveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          {/* IIMaspirant.in */}
          <ScrollReveal direction="up" delay={60}>
            <div className="editorial-card" style={{ padding: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  paddingBottom: '1.25rem',
                  borderBottom: '1px solid #f1f5f9',
                  marginBottom: '1.5rem',
                }}
              >
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#09090b', marginBottom: '0.2rem' }}>
                    Web Developer
                  </h3>
                  <div style={{ color: '#8b5cf6', fontWeight: 700, fontSize: '0.88rem' }}>
                    IIMaspirant.in
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span
                    style={{
                      padding: '0.25rem 0.75rem',
                      borderRadius: '9999px',
                      background: '#f1f5f9',
                      color: '#475569',
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 600,
                    }}
                  >
                    Jul 2026 – Present
                  </span>
                  <span
                    style={{
                      padding: '0.25rem 0.75rem',
                      borderRadius: '9999px',
                      background: '#ede9fe',
                      color: '#6d28d9',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                    }}
                  >
                    Hybrid • Ed-Tech Web Platform
                  </span>
                </div>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
                  gap: '1rem',
                }}
              >
                <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: '12px', border: '1px solid #f1f5f9' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.35rem' }}>
                    <Layers size={14} color="#8b5cf6" />
                    <h4 style={{ fontSize: '0.86rem', fontWeight: 800, color: '#09090b' }}>First Web Presence</h4>
                  </div>
                  <p style={{ color: '#64748b', fontSize: '0.8rem', lineHeight: 1.55 }}>
                    Established the first web presence for an ed-tech platform by designing and developing its official responsive website using React.js and Tailwind CSS.
                  </p>
                </div>

                <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: '12px', border: '1px solid #f1f5f9' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.35rem' }}>
                    <Code2 size={14} color="#0891b2" />
                    <h4 style={{ fontSize: '0.86rem', fontWeight: 800, color: '#09090b' }}>Google Stitch to React</h4>
                  </div>
                  <p style={{ color: '#64748b', fontSize: '0.8rem', lineHeight: 1.55 }}>
                    Translated complete UI/UX designs into responsive React components using Google Stitch and Tailwind CSS, delivering a production-ready interface across all screen sizes.
                  </p>
                </div>

                <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: '12px', border: '1px solid #f1f5f9' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.35rem' }}>
                    <Zap size={14} color="#10b981" />
                    <h4 style={{ fontSize: '0.86rem', fontWeight: 800, color: '#09090b' }}>JWT & OTP Authentication</h4>
                  </div>
                  <p style={{ color: '#64748b', fontSize: '0.8rem', lineHeight: 1.55 }}>
                    Secured user registration and login flows by implementing JWT-based authentication and OTP email verification with Nodemailer.
                  </p>
                </div>

                <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: '12px', border: '1px solid #f1f5f9' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: '0.35rem' }}>
                    <Cpu size={14} color="#f97316" />
                    <h4 style={{ fontSize: '0.86rem', fontWeight: 800, color: '#09090b' }}>Vite & Clerk Deployment</h4>
                  </div>
                  <p style={{ color: '#64748b', fontSize: '0.8rem', lineHeight: 1.55 }}>
                    Built and deployed the application using React, Vite, Tailwind CSS, Clerk authentication, and React Router to deliver a reliable cloud-hosted production website.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* CodSoft */}
          <ScrollReveal direction="up" delay={120}>
            <div className="editorial-card" style={{ padding: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  paddingBottom: '1.25rem',
                  borderBottom: '1px solid #f1f5f9',
                  marginBottom: '1.5rem',
                }}
              >
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#09090b', marginBottom: '0.2rem' }}>
                    Front-End Development Intern
                  </h3>
                  <div style={{ color: '#8b5cf6', fontWeight: 700, fontSize: '0.88rem' }}>
                    CodSoft
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span
                    style={{
                      padding: '0.25rem 0.75rem',
                      borderRadius: '9999px',
                      background: '#f1f5f9',
                      color: '#475569',
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 600,
                    }}
                  >
                    Feb 2025 – Mar 2025
                  </span>
                  <span
                    style={{
                      padding: '0.25rem 0.75rem',
                      borderRadius: '9999px',
                      background: '#f8fafc',
                      color: '#475569',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                    }}
                  >
                    Remote • Single-Page Applications
                  </span>
                </div>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
                  gap: '1rem',
                }}
              >
                <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: '12px', border: '1px solid #f1f5f9' }}>
                  <h4 style={{ fontSize: '0.86rem', fontWeight: 800, color: '#09090b', marginBottom: '0.35rem' }}>SPA Feature Shipping</h4>
                  <p style={{ color: '#64748b', fontSize: '0.8rem', lineHeight: 1.55 }}>
                    Shipped responsive, cloud-hosted single-page application features using JavaScript and React.js, delivering functionality for live use.
                  </p>
                </div>

                <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: '12px', border: '1px solid #f1f5f9' }}>
                  <h4 style={{ fontSize: '0.86rem', fontWeight: 800, color: '#09090b', marginBottom: '0.35rem' }}>15+ Cross-Browser Bug Fixes</h4>
                  <p style={{ color: '#64748b', fontSize: '0.8rem', lineHeight: 1.55 }}>
                    Improved cross-browser reliability by testing across 3+ browsers—Chrome, Firefox, and Safari—and resolving 15+ UI bugs before deployment.
                  </p>
                </div>

                <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: '12px', border: '1px solid #f1f5f9' }}>
                  <h4 style={{ fontSize: '0.86rem', fontWeight: 800, color: '#09090b', marginBottom: '0.35rem' }}>10+ Component Refactors</h4>
                  <p style={{ color: '#64748b', fontSize: '0.8rem', lineHeight: 1.55 }}>
                    Improved application responsiveness by debugging and refactoring 10+ React components to optimize page-load performance.
                  </p>
                </div>

                <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: '12px', border: '1px solid #f1f5f9' }}>
                  <h4 style={{ fontSize: '0.86rem', fontWeight: 800, color: '#09090b', marginBottom: '0.35rem' }}>4+ Figma Features</h4>
                  <p style={{ color: '#64748b', fontSize: '0.8rem', lineHeight: 1.55 }}>
                    Delivered 4+ UI features from Figma specifications by collaborating with the design team and implementing maintainable JavaScript and React code.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function FeaturedProjectsSection() {
  return (
    <section id="projects" style={{ padding: '3rem 0 3.5rem' }}>
      <div className="container-custom">
        <ScrollReveal direction="up" delay={0}>
          <div style={{ marginBottom: '2.25rem' }}>
            <div style={{ fontSize: '0.74rem', color: '#8b5cf6', fontFamily: 'var(--font-mono)', fontWeight: 700, letterSpacing: '0.08em', marginBottom: '0.35rem' }}>
              04 // PRODUCTION SHOWCASE
            </div>
            <h2
              style={{
                fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)',
                fontWeight: 900,
                color: '#09090b',
                letterSpacing: '-0.025em',
              }}
            >
              Engineered for Performance & Designed with Soul
            </h2>
          </div>
        </ScrollReveal>

        {/* Project 1: CoinScope */}
        <ScrollReveal direction="up" delay={60}>
          <div className="editorial-card" style={{ padding: 'clamp(1.5rem, 3vw, 2.5rem)', marginBottom: '2rem' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
                gap: '2rem',
                alignItems: 'center',
              }}
            >
              <div>
                <div style={{ display: 'flex', gap: '0.45rem', marginBottom: '0.85rem' }}>
                  <span style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', fontWeight: 700, padding: '0.2rem 0.6rem', borderRadius: '4px', background: '#ecfeff', color: '#0891b2' }}>
                    CRYPTO PLATFORM
                  </span>
                  <span style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', fontWeight: 700, padding: '0.2rem 0.6rem', borderRadius: '4px', background: '#f1f5f9', color: '#475569' }}>
                    PRODUCTION SPA
                  </span>
                </div>

                <h3 style={{ fontSize: '1.6rem', fontWeight: 900, color: '#09090b', marginBottom: '0.2rem' }}>
                  CoinScope
                </h3>
                <div style={{ color: '#64748b', fontSize: '0.88rem', fontWeight: 600, marginBottom: '1rem' }}>
                  Cryptocurrency Tracking Platform
                </div>

                <p style={{ color: '#52525b', fontSize: '0.86rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  Delivered a responsive cryptocurrency tracking SPA using React.js and Tailwind CSS, validating the interface across 3 device breakpoints. Enabled live cryptocurrency data by integrating the CoinGecko REST API for 50+ cryptocurrencies with real-time price updates and 6+ interactive components.
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.5rem' }}>
                  {['React.js', 'Tailwind CSS', 'CoinGecko REST API', 'Vite', 'Netlify', 'Responsive Design'].map((t) => (
                    <span key={t} className="tag-pill">{t}</span>
                  ))}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href="https://coinscopee.netlify.app" target="_blank" rel="noreferrer" className="btn-dark-pill">
                    <span>Live Application</span>
                    <ArrowUpRight size={13} />
                  </a>
                  <a href="https://github.com/ayushhmsr" target="_blank" rel="noreferrer" className="btn-outline-pill">
                    <GithubIcon size={13} />
                    <span>Source Code Repo</span>
                  </a>
                </div>
              </div>

              {/* Right Dark Dashboard Mockup */}
              <div className="dark-mockup-card" style={{ padding: '1.5rem', background: '#090a10', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '0.65rem' }}>
                  <span style={{ fontSize: '0.72rem', color: 'rgba(255, 255, 255, 0.5)', fontFamily: 'var(--font-mono)' }}>
                    coinscopee.netlify.app // FEED
                  </span>
                  <span style={{ fontSize: '0.68rem', padding: '0.15rem 0.5rem', borderRadius: '4px', background: 'rgba(16, 185, 129, 0.15)', color: '#10b981', fontWeight: 700 }}>
                    50+ TOKENS LIVE
                  </span>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ fontSize: '0.72rem', color: 'rgba(255, 255, 255, 0.6)' }}>BTC / USD • REALTIME REFRESH</div>
                  <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#ffffff', display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                    $94,023.50
                    <span style={{ fontSize: '0.84rem', color: '#10b981', fontWeight: 700 }}>+4.24%</span>
                  </div>
                </div>

                {/* SVG Chart */}
                <svg viewBox="0 0 300 90" style={{ width: '100%', height: '90px' }}>
                  <defs>
                    <linearGradient id="chartGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M 0,65 Q 40,75 80,45 T 160,35 T 240,20 T 300,30 L 300,90 L 0,90 Z" fill="url(#chartGrad)" />
                  <path d="M 0,65 Q 40,75 80,45 T 160,35 T 240,20 T 300,30" fill="none" stroke="#10b981" strokeWidth="2.5" />
                </svg>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Project 2: Resumify */}
        <ScrollReveal direction="up" delay={120}>
          <div className="editorial-card" style={{ padding: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
                gap: '2rem',
                alignItems: 'center',
              }}
            >
              {/* Left Dark Mockup */}
              <div className="dark-mockup-card" style={{ padding: '1.5rem', background: '#090a10', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '0.65rem' }}>
                  <div style={{ display: 'flex', gap: '4px' }}>
                    <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#ef4444' }} />
                    <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#f59e0b' }} />
                    <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#10b981' }} />
                  </div>
                  <span style={{ fontSize: '0.7rem', color: 'rgba(255, 255, 255, 0.5)', fontFamily: 'var(--font-mono)' }}>
                    resumify-airesumebuilderr.netlify.app
                  </span>
                </div>

                <div style={{ background: 'rgba(255, 255, 255, 0.04)', borderRadius: '10px', padding: '1rem', marginBottom: '0.75rem' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#ffffff' }}>Ayush Kumar Mishra</div>
                  <div style={{ fontSize: '0.72rem', color: '#8b5cf6' }}>Software Engineer & Front-End Developer</div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                  <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '0.6rem', borderRadius: '6px', fontSize: '0.7rem', color: 'rgba(255, 255, 255, 0.7)' }}>
                    Creation: &lt; 5 mins
                  </div>
                  <div style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '0.6rem', borderRadius: '6px', fontSize: '0.7rem', color: 'rgba(255, 255, 255, 0.7)' }}>
                    QA: Chrome, Safari, Firefox
                  </div>
                </div>
              </div>

              {/* Right Info */}
              <div>
                <div style={{ display: 'flex', gap: '0.45rem', marginBottom: '0.85rem' }}>
                  <span style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', fontWeight: 700, padding: '0.2rem 0.6rem', borderRadius: '4px', background: '#ede9fe', color: '#6d28d9' }}>
                    AI PRODUCTIVITY
                  </span>
                  <span style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', fontWeight: 700, padding: '0.2rem 0.6rem', borderRadius: '4px', background: '#f1f5f9', color: '#475569' }}>
                    FRONTEND / SPA
                  </span>
                </div>

                <h3 style={{ fontSize: '1.6rem', fontWeight: 900, color: '#09090b', marginBottom: '0.2rem' }}>
                  Resumify
                </h3>
                <div style={{ color: '#64748b', fontSize: '0.88rem', fontWeight: 600, marginBottom: '1rem' }}>
                  AI Resume Builder
                </div>

                <p style={{ color: '#52525b', fontSize: '0.86rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  Built a cloud-hosted React SPA with reusable modular components to support dynamic, real-time resume generation. Tested across 3+ browsers and reduced the resume creation workflow to under 5 minutes with streamlined input-to-export UX.
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.5rem' }}>
                  {['React.js', 'Tailwind CSS', 'Netlify', 'Reusable Components', 'Cross-Browser Testing'].map((t) => (
                    <span key={t} className="tag-pill">{t}</span>
                  ))}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <a href="https://resumify-airesumebuilderr.netlify.app" target="_blank" rel="noreferrer" className="btn-dark-pill">
                    <span>Live Application</span>
                    <ArrowUpRight size={13} />
                  </a>
                  <a href="https://github.com/ayushhmsr" target="_blank" rel="noreferrer" className="btn-outline-pill">
                    <GithubIcon size={13} />
                    <span>Explore Web App</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function CertificationsBannerSection() {
  return (
    <section style={{ padding: '2rem 0 3.5rem' }}>
      <div className="container-custom">
        <ScrollReveal direction="up" delay={0}>
          <div
            className="gradient-banner"
            style={{
              borderRadius: '24px',
              padding: 'clamp(1.5rem, 3vw, 2.25rem)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1.5rem',
              boxShadow: '0 12px 36px rgba(124, 58, 237, 0.25)',
            }}
          >
            <div style={{ maxWidth: '640px' }}>
              <div
                style={{
                  fontSize: '0.68rem',
                  fontWeight: 800,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'rgba(255, 255, 255, 0.85)',
                  marginBottom: '0.4rem',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                ⚡ VERIFIED CREDENTIALS & INDUSTRY CERTIFICATIONS
              </div>

              <h3 style={{ fontSize: 'clamp(1.2rem, 2.4vw, 1.6rem)', fontWeight: 900, marginBottom: '0.4rem', color: '#ffffff' }}>
                Meta Advanced React & Board Infinity Java Certified
              </h3>

              <p style={{ fontSize: '0.86rem', color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.55 }}>
                Meta Advanced React (ID: <code>TAGZAOOSH1X3</code>) • Board Infinity Fundamentals of Java (ID: <code>6NY6HFE5OOTB</code>) • B.Tech Computer Science (AI & ML) at IPS Academy, Indore (RGPV).
              </p>
            </div>

            <div>
              <a href="#skills" className="btn-white-pill">
                <span>View All Credentials</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function DirectInquirySection() {
  const formRef = useRef(null);
  const [form, setForm] = useState({
    from_name: '',
    from_email: '',
    inquiry_focus: 'Full-Time Software Engineer Position',
    message: '',
  });
  const [status, setStatus] = useState('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('ayushhmsr@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleFormChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      const { from_name, from_email, inquiry_focus, message } = form;
      window.open(
        `mailto:ayushhmsr@gmail.com?subject=${encodeURIComponent(inquiry_focus || 'Software Engineering Inquiry')}&body=${encodeURIComponent(`Name: ${from_name}\nEmail: ${from_email}\nFocus: ${inquiry_focus}\n\n${message}`)}`,
        '_blank'
      );
      setStatus('success');
      setForm({ from_name: '', from_email: '', inquiry_focus: 'Full-Time Software Engineer Position', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
      return;
    }

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setForm({ from_name: '', from_email: '', inquiry_focus: 'Full-Time Software Engineer Position', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error('Email send failed:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4500);
    }
  };

  return (
    <section id="contact" style={{ padding: '2.5rem 0 4.5rem' }}>
      <div className="container-custom">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: '2.5rem',
          }}
        >
          {/* Left Contact Info */}
          <ScrollReveal direction="up" delay={0}>
            <div>
              <div style={{ fontSize: '0.74rem', color: '#8b5cf6', fontFamily: 'var(--font-mono)', fontWeight: 700, letterSpacing: '0.08em', marginBottom: '0.35rem' }}>
                05 // GET IN TOUCH
              </div>
              <h2
                style={{
                  fontSize: 'clamp(1.75rem, 3.4vw, 2.5rem)',
                  fontWeight: 900,
                  color: '#09090b',
                  lineHeight: 1.15,
                  letterSpacing: '-0.025em',
                  marginBottom: '1rem',
                }}
              >
                Let's Build Something <br />
                Extraordinary Together
              </h2>

              <p style={{ color: '#52525b', fontSize: '0.92rem', lineHeight: 1.65, marginBottom: '2rem' }}>
                I am actively seeking full-time Software Engineer & Front-End Developer opportunities. Whether you have an open role, project proposal, or just want to chat engineering, my inbox is open.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem' }}>
                {/* Email Card */}
                <div
                  className="editorial-card"
                  style={{
                    padding: '1rem 1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#ede9fe', color: '#7c3aed', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Mail size={15} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.72rem', color: '#94a3b8', fontWeight: 600 }}>Direct Email</div>
                      <a href="mailto:ayushhmsr@gmail.com" style={{ fontSize: '0.88rem', fontWeight: 700, color: '#09090b' }}>
                        ayushhmsr@gmail.com
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    style={{
                      padding: '0.25rem 0.6rem',
                      borderRadius: '6px',
                      background: '#f1f5f9',
                      border: '1px solid #e2e8f0',
                      color: '#475569',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                    }}
                  >
                    {copiedEmail ? <Check size={12} color="#10b981" /> : <Copy size={12} />}
                    <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                {/* LinkedIn Card */}
                <a
                  href="https://linkedin.com/in/ayushkumarmishra2004"
                  target="_blank"
                  rel="noreferrer"
                  className="editorial-card"
                  style={{
                    padding: '1rem 1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textDecoration: 'none',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#ecfeff', color: '#0891b2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <LinkedinIcon size={15} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.72rem', color: '#94a3b8', fontWeight: 600 }}>Professional Network</div>
                      <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#09090b' }}>
                        LinkedIn Profile / Ayush Kumar Mishra
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight size={15} color="#94a3b8" />
                </a>

                {/* GitHub Card */}
                <a
                  href="https://github.com/ayushhmsr"
                  target="_blank"
                  rel="noreferrer"
                  className="editorial-card"
                  style={{
                    padding: '1rem 1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textDecoration: 'none',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: '#f1f5f9', color: '#0f172a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <GithubIcon size={15} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.72rem', color: '#94a3b8', fontWeight: 600 }}>Code Repositories</div>
                      <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#09090b' }}>
                        GitHub Repository Vault
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight size={15} color="#94a3b8" />
                </a>
              </div>

              {/* Status Bar */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.74rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981', flexShrink: 0 }} />
                <span>AVAILABLE: FOR FULL-TIME ROLES | INDORE (M.P.), INDIA</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Form */}
          <ScrollReveal direction="up" delay={80}>
            <div className="editorial-card" style={{ padding: 'clamp(1.5rem, 3vw, 2.25rem)' }}>
              <div style={{ marginBottom: '1.25rem' }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#09090b', marginBottom: '0.2rem' }}>
                  Direct Inquiry Terminal
                </h3>
                <p style={{ color: '#64748b', fontSize: '0.78rem' }}>
                  Expect an engineered reply within 24 operational hours.
                </p>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 130px), 1fr))', gap: '0.85rem' }}>
                  <div>
                    <label htmlFor="home_name" style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '0.35rem' }}>
                      Your name
                    </label>
                    <input
                      id="home_name"
                      name="from_name"
                      aria-label="Your Name"
                      value={form.from_name}
                      onChange={handleFormChange}
                      placeholder="e.g. Hiring Manager"
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem 0.95rem',
                        borderRadius: '8px',
                        border: '1px solid #e2e8f0',
                        background: '#f8fafc',
                        color: '#09090b',
                        fontSize: '0.85rem',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label htmlFor="home_email" style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '0.35rem' }}>
                      Email address
                    </label>
                    <input
                      id="home_email"
                      name="from_email"
                      type="email"
                      aria-label="Email address"
                      value={form.from_email}
                      onChange={handleFormChange}
                      placeholder="e.g. recruiter@company.com"
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem 0.95rem',
                        borderRadius: '8px',
                        border: '1px solid #e2e8f0',
                        background: '#f8fafc',
                        color: '#09090b',
                        fontSize: '0.85rem',
                        outline: 'none',
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="home_inquiry_focus" style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '0.35rem' }}>
                    Inquiry Focus Slot
                  </label>
                  <select
                    id="home_inquiry_focus"
                    name="inquiry_focus"
                    aria-label="Inquiry Focus Slot"
                    value={form.inquiry_focus}
                    onChange={handleFormChange}
                    style={{
                      width: '100%',
                      padding: '0.75rem 0.95rem',
                      borderRadius: '8px',
                      border: '1px solid #e2e8f0',
                      background: '#f8fafc',
                      color: '#09090b',
                      fontSize: '0.85rem',
                      outline: 'none',
                    }}
                  >
                    <option value="Full-Time Software Engineer Position">Full-Time Software Engineer Position</option>
                    <option value="Front-End Developer Role">Front-End Developer Role</option>
                    <option value="Web Application Build / Revamp">Web Application Build / Revamp</option>
                    <option value="UI/UX Engineering & Design System">UI/UX Engineering & Design System</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="home_message" style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '0.35rem' }}>
                    Project or Role Overview
                  </label>
                  <textarea
                    id="home_message"
                    name="message"
                    aria-label="Project or Role Overview Message"
                    value={form.message}
                    onChange={handleFormChange}
                    placeholder="Briefly outline your team, timeline, or engineering requirements..."
                    required
                    rows={4}
                    style={{
                      width: '100%',
                      padding: '0.75rem 0.95rem',
                      borderRadius: '8px',
                      border: '1px solid #e2e8f0',
                      background: '#f8fafc',
                      color: '#09090b',
                      fontSize: '0.85rem',
                      outline: 'none',
                      resize: 'vertical',
                      minHeight: '100px',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-dark-pill"
                  style={{
                    width: '100%',
                    padding: '0.8rem',
                    justifyContent: 'center',
                    borderRadius: '8px',
                    fontSize: '0.85rem',
                    cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                  }}
                >
                  {status === 'sending' ? (
                    <span>Transmitting message...</span>
                  ) : status === 'success' ? (
                    <>
                      <Check size={15} />
                      <span>Message Transmitted Successfully!</span>
                    </>
                  ) : status === 'error' ? (
                    <span>Failed to transmit — Please use direct email</span>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <ArrowUpRight size={14} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', paddingTop: '80px', paddingBottom: '2.5rem', position: 'relative', overflowX: 'hidden' }}>
      <HeroSection />
      <SystemsArchitectureSection />
      <TechStackSection />
      <WorkExperienceSection />
      <FeaturedProjectsSection />
      <CertificationsBannerSection />
      <DirectInquirySection />
    </main>
  );
}
