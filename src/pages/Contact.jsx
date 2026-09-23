import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { 
  Mail, 
  Send, 
  Check, 
  Copy, 
  MapPin, 
  Clock, 
  ArrowUpRight,
  MessageSquare,
  Terminal
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import ScrollReveal from '../components/ScrollReveal';

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;   
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;  
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;   

const socials = [
  { 
    label: 'GitHub',   
    handle: 'github.com/ayushhmsr',             
    url: 'https://github.com/ayushhmsr',                         
    icon: GithubIcon,
  },
  { 
    label: 'LinkedIn', 
    handle: 'linkedin.com/in/ayushkumarmishra2004',    
    url: 'https://linkedin.com/in/ayushkumarmishra2004',          
    icon: LinkedinIcon,
  },
  { 
    label: 'Direct Email',    
    handle: 'ayushhmsr@gmail.com',     
    url: 'mailto:ayushhmsr@gmail.com',                           
    icon: Mail,
  },
];

const inputBase = {
  width: '100%',
  background: 'rgba(7, 7, 9, 0.7)',
  border: '1px solid var(--border)',
  borderRadius: '8px',
  padding: '0.75rem 0.95rem',
  color: 'var(--text)',
  fontSize: '0.86rem',
  fontFamily: 'var(--font-body)',
  outline: 'none',
  transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
};

function ContactHero() {
  return (
    <ScrollReveal direction="up" delay={0}>
      <div style={{ maxWidth: '720px', marginBottom: '3rem' }}>
        <div className="badge badge-indigo" style={{ marginBottom: '0.85rem' }}>
          <Terminal size={12} />
          <span>Initiate Contact</span>
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
          Let's Connect & <span className="gradient-text">Collaborate</span>
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.65 }}>
          I am currently in my 4th year and actively seeking full-time Software Engineer & Frontend Developer opportunities. Have an open role, project proposal, or just want to chat engineering? Drop a message below.
        </p>
      </div>
    </ScrollReveal>
  );
}

function ContactForm() {
  const formRef = useRef(null);
  const [form, setForm] = useState({ from_name: '', from_email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      const { from_name, from_email, subject, message } = form;
      window.open(
        `mailto:ayushhmsr@gmail.com?subject=${encodeURIComponent(subject || 'Software Engineering Inquiry')}&body=${encodeURIComponent(`Name: ${from_name}\nEmail: ${from_email}\n\n${message}`)}`,
        '_blank'
      );
      setStatus('success');
      setForm({ from_name: '', from_email: '', subject: '', message: '' });
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
      setForm({ from_name: '', from_email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error('Email send failed:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4500);
    }
  };

  return (
    <ScrollReveal direction="up" delay={80}>
      <div className="dev-card" style={{ padding: 'clamp(1.5rem, 2.5vw, 2.25rem)', height: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
          <MessageSquare size={17} color="var(--accent)" />
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: 'var(--text)' }}>
            Send a Message
          </h2>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.85rem' }}>
            <div>
              <label htmlFor="contact_name" style={{ fontSize: '0.72rem', color: 'var(--muted)', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', display: 'block', marginBottom: '0.35rem' }}>
                Your Name
              </label>
              <input
                id="contact_name"
                name="from_name"
                aria-label="Your Name"
                value={form.from_name}
                onChange={handleChange}
                placeholder="Jane Doe"
                required
                style={inputBase}
                onFocus={(e) => {
                  e.target.style.borderColor = 'var(--accent)';
                  e.target.style.boxShadow = '0 0 0 2px rgba(99, 102, 241, 0.15)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'var(--border)';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            <div>
              <label htmlFor="contact_email" style={{ fontSize: '0.72rem', color: 'var(--muted)', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', display: 'block', marginBottom: '0.35rem' }}>
                Your Email
              </label>
              <input
                id="contact_email"
                name="from_email"
                type="email"
                aria-label="Your Email Address"
                value={form.from_email}
                onChange={handleChange}
                placeholder="jane@company.com"
                required
                style={inputBase}
                onFocus={(e) => {
                  e.target.style.borderColor = 'var(--accent)';
                  e.target.style.boxShadow = '0 0 0 2px rgba(99, 102, 241, 0.15)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'var(--border)';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>
          </div>

          <div>
            <label htmlFor="contact_subject" style={{ fontSize: '0.72rem', color: 'var(--muted)', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', display: 'block', marginBottom: '0.35rem' }}>
              Subject
            </label>
            <input
              id="contact_subject"
              name="subject"
              aria-label="Message Subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Software Engineer Opportunity / Project Inquiry"
              style={inputBase}
              onFocus={(e) => {
                e.target.style.borderColor = 'var(--accent)';
                e.target.style.boxShadow = '0 0 0 2px rgba(99, 102, 241, 0.15)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'var(--border)';
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>

          <div>
            <label htmlFor="contact_message" style={{ fontSize: '0.72rem', color: 'var(--muted)', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', display: 'block', marginBottom: '0.35rem' }}>
              Message
            </label>
            <textarea
              id="contact_message"
              name="message"
              aria-label="Your Message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about the engineering role, project requirements, or team..."
              required
              rows={4}
              style={{ ...inputBase, resize: 'vertical', minHeight: '110px' }}
              onFocus={(e) => {
                e.target.style.borderColor = 'var(--accent)';
                e.target.style.boxShadow = '0 0 0 2px rgba(99, 102, 241, 0.15)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'var(--border)';
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="btn-primary"
            style={{
              width: '100%',
              padding: '0.75rem',
              justifyContent: 'center',
              fontSize: '0.85rem',
              cursor: status === 'sending' ? 'not-allowed' : 'pointer',
            }}
          >
            {status === 'sending' ? (
              <span>Sending message...</span>
            ) : status === 'success' ? (
              <>
                <Check size={15} />
                <span>Message Sent Successfully!</span>
              </>
            ) : status === 'error' ? (
              <span>Failed to send — Please use direct email</span>
            ) : (
              <>
                <span>Send Message</span>
                <Send size={14} />
              </>
            )}
          </button>
        </form>
      </div>
    </ScrollReveal>
  );
}

function DirectEmailBox() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('ayushhmsr@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <ScrollReveal direction="up" delay={120}>
      <div
        className="dev-card"
        style={{
          padding: '1.5rem',
          border: '1px solid rgba(99, 102, 241, 0.25)',
          background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, #101117 100%)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
          <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            Direct Email
          </span>
          <button
            onClick={handleCopyEmail}
            className="btn-secondary"
            style={{
              padding: '0.2rem 0.6rem',
              fontSize: '0.72rem',
              borderRadius: '4px',
            }}
          >
            {copiedEmail ? <Check size={12} /> : <Copy size={12} />}
            <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
          </button>
        </div>

        <a
          href="mailto:ayushhmsr@gmail.com"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.05rem',
            fontWeight: 700,
            color: 'var(--text)',
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.35rem',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text)')}
        >
          <span>ayushhmsr@gmail.com</span>
          <ArrowUpRight size={15} />
        </a>

        <p style={{ color: 'var(--muted)', fontSize: '0.76rem', marginTop: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
          <Clock size={12} />
          <span>Typical response time: within 24 hours</span>
        </p>
      </div>
    </ScrollReveal>
  );
}

function SocialPlatformsList() {
  return (
    <ScrollReveal direction="up" delay={160}>
      <div>
        <p
          style={{
            color: 'var(--muted)',
            fontSize: '0.72rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: '0.65rem',
          }}
        >
          Connect on Developer Platforms
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
          {socials.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="dev-card dev-card-interactive"
                style={{
                  padding: '0.85rem 1.15rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  textDecoration: 'none',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '6px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid var(--border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text)',
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={16} />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.85rem', color: 'var(--text)' }}>
                      {s.label}
                    </div>
                    <div style={{ color: 'var(--muted)', fontSize: '0.74rem' }}>{s.handle}</div>
                  </div>
                </div>
                <ArrowUpRight size={14} style={{ color: 'var(--muted)' }} />
              </a>
            );
          })}
        </div>
      </div>
    </ScrollReveal>
  );
}

function LocationStatusCard() {
  return (
    <ScrollReveal direction="up" delay={200}>
      <div
        className="dev-card"
        style={{
          padding: '1rem 1.25rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.75rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-secondary)', fontSize: '0.78rem' }}>
          <MapPin size={13} color="var(--accent)" />
          <span>Indore, MP, India (Open to Relocation)</span>
        </div>
        <div className="badge badge-emerald">
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#34d399', display: 'inline-block' }} />
          <span>Available for Full-Time</span>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function Contact() {
  return (
    <main style={{ minHeight: '100vh', paddingTop: '100px', paddingBottom: '4.5rem', position: 'relative' }}>
      <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
        <ContactHero />

        {/* TWO COLUMN LAYOUT */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem',
          }}
        >
          <ContactForm />

          {/* Right Info Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <DirectEmailBox />
            <SocialPlatformsList />
            <LocationStatusCard />
          </div>
        </div>

      </div>
    </main>
  );
}
