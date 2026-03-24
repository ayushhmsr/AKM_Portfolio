import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';


const EMAILJS_SERVICE_ID  = 'service_fw3awjc';   
const EMAILJS_TEMPLATE_ID = 'template_bqm36u4';  
const EMAILJS_PUBLIC_KEY  = 'b67KpROsGDCwjgIEr';   

const socials = [
  { label: 'GitHub',   handle: '@ayushhmsr',             url: 'https://github.com/ayushhmsr',                         color: '#c8f04d' },
  { label: 'LinkedIn', handle: 'ayushkumarmishra2004',    url: 'https://linkedin.com/in/ayushkumarmishra2004',          color: '#7ef0c8' },
  { label: 'Email',    handle: 'ayushhmsr@gmail.com',     url: 'mailto:ayushhmsr@gmail.com',                           color: '#f0a87e' },
];

const inputBase = {
  width: '100%',
  background: 'var(--bg)',
  border: '1px solid var(--border)',
  borderRadius: '10px',
  padding: '0.9rem 1.1rem',
  color: 'var(--text)',
  fontSize: '0.9rem',
  fontFamily: 'var(--font-body)',
  outline: 'none',
  transition: 'border-color 0.2s',
};

export default function Contact() {
  const formRef = useRef(null);
  const [form, setForm] = useState({ from_name: '', from_email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('sending');

    // If EmailJS not configured yet → fallback to mailto
    if (EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID') {
      const { from_name, from_email, subject, message } = form;
      window.open(
        `mailto:ayushhmsr@gmail.com?subject=${encodeURIComponent(subject || 'Portfolio Contact')}&body=${encodeURIComponent(`Name: ${from_name}\nEmail: ${from_email}\n\n${message}`)}`,
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
      console.error(err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const btnLabel = { idle: 'Send Message →', sending: 'Sending...', success: '✓ Message Sent!', error: '✗ Failed — try again' }[status];
  const btnBg    = { idle: 'var(--accent)', sending: '#888', success: 'var(--accent2)', error: '#f07e7e' }[status];

  return (
    <main style={{ minHeight: '100vh', paddingTop: '100px', paddingBottom: '5rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>

        {/* Header */}
        <div style={{ marginBottom: '5rem', animation: 'fadeUp 0.6s ease both' }}>
          <p style={{ color: 'var(--accent)', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem' }}>Get In Touch</p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 0.95, letterSpacing: '-0.03em', marginBottom: '1.5rem' }}>
            Let's Work<br /><span style={{ color: 'var(--accent)' }}>Together</span>
          </h1>
          <p style={{ color: 'var(--muted)', maxWidth: '500px', fontSize: '1rem', lineHeight: 1.7 }}>
            Looking for a frontend developer or UI/UX designer for your team? I'm actively seeking internship opportunities — let's talk!
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>

          {/* ── Contact Form ── */}
          <div style={{ animation: 'fadeUp 0.6s ease both', animationDelay: '0.1s' }}>
            <div style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: '20px',
              padding: '2.5rem',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, var(--accent), var(--accent2), transparent)' }} />

              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.2rem', marginBottom: '1.75rem', letterSpacing: '-0.02em' }}>Send a Message</h2>

              <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ fontSize: '0.72rem', color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem' }}>Your Name</label>
                    <input name="from_name" value={form.from_name} onChange={handleChange}
                      placeholder="John Doe" required style={inputBase}
                      onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                      onBlur={e => e.target.style.borderColor = 'var(--border)'} />
                  </div>
                  <div>
                    <label style={{ fontSize: '0.72rem', color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem' }}>Your Email</label>
                    <input name="from_email" type="email" value={form.from_email} onChange={handleChange}
                      placeholder="you@company.com" required style={inputBase}
                      onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                      onBlur={e => e.target.style.borderColor = 'var(--border)'} />
                  </div>
                </div>

                <div>
                  <label style={{ fontSize: '0.72rem', color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem' }}>Subject</label>
                  <input name="subject" value={form.subject} onChange={handleChange}
                    placeholder="Frontend Internship Opportunity" style={inputBase}
                    onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'} />
                </div>

                <div>
                  <label style={{ fontSize: '0.72rem', color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '0.4rem' }}>Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange}
                    placeholder="Tell me about the role or project you have in mind..." required rows={6}
                    style={{ ...inputBase, resize: 'vertical', minHeight: '150px' }}
                    onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'} />
                </div>

                <button type="submit" disabled={status === 'sending'}
                  style={{
                    width: '100%', padding: '1rem',
                    background: btnBg,
                    color: status === 'idle' ? '#0a0a0f' : status === 'sending' ? '#fff' : '#0a0a0f',
                    fontFamily: 'var(--font-display)', fontWeight: 700,
                    fontSize: '0.95rem', border: 'none', borderRadius: '10px',
                    cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                    transition: 'all 0.3s', letterSpacing: '0.02em',
                  }}
                >{btnLabel}</button>

                {/* EmailJS setup hint */}
                {EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID' && (
                  <p style={{ fontSize: '0.75rem', color: 'var(--muted)', textAlign: 'center', lineHeight: 1.5 }}>
                    💡 Currently opens your mail app. To enable direct sending, set up{' '}
                    <a href="https://www.emailjs.com" target="_blank" rel="noreferrer" style={{ color: 'var(--accent)' }}>EmailJS</a>
                    {' '}(free) and replace the IDs in Contact.jsx.
                  </p>
                )}
              </form>
            </div>
          </div>

          {/* ── Right panel ── */}
          <div style={{ animation: 'fadeUp 0.6s ease both', animationDelay: '0.2s', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

            {/* Direct email highlight */}
            <div style={{
              padding: '1.75rem',
              background: 'rgba(200,240,77,0.05)',
              border: '1px solid rgba(200,240,77,0.2)',
              borderRadius: '16px',
            }}>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.85rem', color: 'var(--accent)', marginBottom: '0.5rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Direct Email</p>
              <a href="mailto:ayushhmsr@gmail.com"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.15rem', color: 'var(--text)', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text)'}
              >ayushhmsr@gmail.com ↗</a>
              <p style={{ color: 'var(--muted)', fontSize: '0.82rem', marginTop: '0.4rem' }}>I typically reply within 24 hours.</p>
            </div>

            {/* Socials */}
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', letterSpacing: '-0.01em', color: 'var(--muted)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1em' }}>Find Me Online</h2>
            {socials.map(s => (
              <a key={s.label} href={s.url} target="_blank" rel="noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', gap: '1.25rem',
                  padding: '1.1rem 1.4rem',
                  background: 'var(--surface)', border: '1px solid var(--border)',
                  borderRadius: '14px', transition: 'all 0.2s', textDecoration: 'none',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = s.color + '55'; e.currentTarget.style.transform = 'translateX(4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateX(0)'; }}
              >
                <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: s.color + '18', border: `1px solid ${s.color}33`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ color: s.color, fontSize: '0.72rem', fontWeight: 700, fontFamily: 'var(--font-display)' }}>{s.label.slice(0,2).toUpperCase()}</span>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.88rem', color: s.color, marginBottom: '0.1rem' }}>{s.label}</div>
                  <div style={{ color: 'var(--muted)', fontSize: '0.8rem' }}>{s.handle}</div>
                </div>
                <span style={{ marginLeft: 'auto', color: 'var(--muted)' }}>↗</span>
              </a>
            ))}

            {/* Availability */}
            <div style={{
              padding: '1.5rem 1.75rem',
              border: '1px solid var(--border)',
              borderRadius: '14px',
              background: 'var(--surface)',
              marginTop: 'auto',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent)', display: 'inline-block', animation: 'pulse 2s infinite' }} />
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9rem', color: 'var(--accent)' }}>Available for Internship</span>
              </div>
              <p style={{ color: 'var(--muted)', fontSize: '0.84rem', lineHeight: 1.6 }}>
                Seeking Frontend Developer, UI/UX Designer, or DevOps roles. Open to remote and Indore-based opportunities.
              </p>
            </div>

          </div>
        </div>
      </div>
      <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.3}}`}</style>
    </main>
  );
}
