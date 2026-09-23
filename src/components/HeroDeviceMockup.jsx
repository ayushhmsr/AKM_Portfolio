import { useState, useEffect } from 'react';
import { Activity, Cpu, Wifi, Terminal, Sparkles } from 'lucide-react';

export default function HeroDeviceMockup() {
  const [latency, setLatency] = useState(14);

  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(Math.floor(Math.random() * 5) + 12);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        background: '#090a10',
        borderRadius: '24px',
        border: '1px solid rgba(255, 255, 255, 0.14)',
        boxShadow: '0 24px 60px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.12)',
        overflow: 'hidden',
        color: '#ffffff',
        width: '100%',
        maxWidth: '440px',
        margin: '0 auto',
        animation: 'floatDevice 6s ease-in-out infinite',
      }}
    >
      {/* Device Header */}
      <div
        style={{
          padding: '0.85rem 1.25rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'rgba(255, 255, 255, 0.02)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444' }} />
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f59e0b' }} />
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }} />
          <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'rgba(255, 255, 255, 0.45)', marginLeft: '0.35rem' }}>
            REACT-UI // SYSTEM ENGINE
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: '#10b981', fontSize: '0.7rem', fontWeight: 600 }}>
          <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#10b981', animation: 'pulseDot 2s infinite' }} />
          <span>ONLINE</span>
        </div>
      </div>

      {/* Screen Body */}
      <div style={{ padding: '1.25rem' }}>
        {/* Metric Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem', marginBottom: '1rem' }}>
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              borderRadius: '12px',
              padding: '0.85rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.7rem' }}>
              <span>Lighthouse Core</span>
              <Activity size={12} color="#10b981" />
            </div>
            <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#10b981', marginTop: '0.2rem' }}>
              99/100
            </div>
            <div style={{ fontSize: '0.66rem', color: 'rgba(255, 255, 255, 0.4)' }}>
              Sub-second LCP & INP
            </div>
          </div>

          <div
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              borderRadius: '12px',
              padding: '0.85rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.7rem' }}>
              <span>Execution Latency</span>
              <Wifi size={12} color="#38bdf8" />
            </div>
            <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#38bdf8', marginTop: '0.2rem' }}>
              {latency}ms
            </div>
            <div style={{ fontSize: '0.66rem', color: 'rgba(255, 255, 255, 0.4)' }}>
              Client Edge Network
            </div>
          </div>
        </div>

        {/* Live Vector SVG Wave Chart */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.02)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            borderRadius: '14px',
            padding: '1rem',
            marginBottom: '1rem',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '0.74rem', fontWeight: 600, color: 'rgba(255, 255, 255, 0.7)' }}>
              Real-Time Frame Rate (60 FPS)
            </span>
            <span style={{ fontSize: '0.7rem', color: '#8b5cf6', fontFamily: 'var(--font-mono)' }}>
              REACT 19 FIBER
            </span>
          </div>

          <svg viewBox="0 0 300 70" style={{ width: '100%', height: '70px', overflow: 'visible' }}>
            <defs>
              <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="50%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#10b981" />
              </linearGradient>
              <linearGradient id="areaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M 0,45 Q 40,15 80,35 T 160,25 T 240,40 T 300,15 L 300,70 L 0,70 Z"
              fill="url(#areaGrad)"
            />
            <path
              d="M 0,45 Q 40,15 80,35 T 160,25 T 240,40 T 300,15"
              fill="none"
              stroke="url(#cyanGrad)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Bottom Status Ticker */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.72rem',
            color: 'rgba(255, 255, 255, 0.6)',
            padding: '0.4rem 0.6rem',
            background: 'rgba(0, 0, 0, 0.3)',
            borderRadius: '8px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <Cpu size={12} color="#8b5cf6" />
            <span style={{ fontFamily: 'var(--font-mono)' }}>Next.js • Tailwind • REST API</span>
          </div>
          <span style={{ color: '#10b981', fontWeight: 600 }}>100% HEALTHY</span>
        </div>
      </div>
    </div>
  );
}
