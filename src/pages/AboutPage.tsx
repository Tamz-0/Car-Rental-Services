import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Users, Leaf, Award } from 'lucide-react';
import Button from '../components/Button';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: Users,
      title: 'Customer First',
      desc: 'We prioritize our customers above all else, creating deeply personalised experiences that build lasting trust.',
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      desc: "Committed to reducing environmental impact through electric vehicles, eco-friendly operations, and green innovation.",
    },
    {
      icon: Award,
      title: 'Excellence',
      desc: 'We pursue excellence in every detail — from fleet quality to AI sophistication and attentive service.',
    },
  ];

  const timeline = [
    { year: '2022', title: 'Company Founded', desc: 'DriveSmart AI was founded by tech entrepreneurs and automobile enthusiasts with a mission to transform car rentals through AI.', accent: true },
    { year: '2023', title: 'AI Engine Launch', desc: 'We launched our proprietary recommendation engine, capable of matching customers with their ideal vehicle based on preferences and history.', accent: false },
    { year: '2024', title: 'Nationwide Expansion', desc: 'After success in tech hubs, we expanded across 50+ cities, bringing AI-powered rentals to every corner of the country.', accent: true },
    { year: '2025', title: 'Green Fleet Initiative', desc: 'We committed to 75% electric and hybrid fleet by 2027, setting a new industry standard in eco-conscious transportation.', accent: false },
  ];

  const team = [
    { name: 'Dr. Sarah Chen', role: 'CEO & Co-Founder', img: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', bio: 'Former AI Research Director with 15+ years in tech and a passion for sustainable transportation.' },
    { name: 'Michael Rodriguez', role: 'CTO & Co-Founder', img: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', bio: 'AI pioneer with multiple patents in predictive modelling for transportation applications.' },
    { name: 'James Wilson', role: 'Chief Operations Officer', img: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', bio: 'Former executive at leading rental companies with expertise in scaling operations globally.' },
  ];

  return (
    <div className="pt-24 pb-20" style={{ background: 'var(--color-bg)' }}>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden py-24" style={{ background: 'var(--color-surface)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(192,154,90,0.06) 0%, transparent 60%)' }} />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-eyebrow justify-center">About Us</span>
            <h1 className="font-display text-5xl md:text-6xl font-normal mb-6" style={{ color: 'var(--color-text-primary)' }}>
              Revolutionising rentals<br />
              <em className="not-italic" style={{ color: 'var(--color-accent)' }}>with intelligence</em>
            </h1>
            <p className="text-lg leading-relaxed max-w-xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
              We're on a mission to transform every car rental into a seamless, personalised, sustainable journey — powered by the best of AI.
            </p>
          </div>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="section" style={{ background: 'var(--color-bg)' }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-eyebrow">Our Mission</span>
              <h2 className="font-display text-4xl md:text-5xl font-normal mb-6" style={{ color: 'var(--color-text-primary)' }}>
                The right vehicle for<br /><em className="not-italic" style={{ color: 'var(--color-accent)' }}>every journey</em>
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--color-text-secondary)' }}>
                At DriveSmart AI, we believe transportation is personal. Our AI-powered platform ensures you get the perfect match every time — one that fits your preferences, driving style, and specific trip requirements.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--color-text-secondary)' }}>
                We're committed to making this experience frictionless, eco-friendly, and genuinely enjoyable for every single customer.
              </p>
              <div className="space-y-4">
                {['Innovation: constantly pushing AI and transportation boundaries', 'Sustainability: promoting eco-friendly options at every tier', 'Customer-Centricity: tailoring each experience to the individual'].map((item) => {
                  const [label, desc] = item.split(': ');
                  return (
                    <div key={label} className="flex items-start gap-3">
                      <CheckCircle size={17} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--color-accent)' }} />
                      <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                        <strong style={{ color: 'var(--color-text-primary)', fontWeight: 600 }}>{label}:</strong> {desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden h-[420px]">
                <img
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Team collaborating"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 rounded-2xl p-5 shadow-xl" style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
                <div className="flex items-center gap-3">
                  <div className="font-display text-3xl font-normal" style={{ color: 'var(--color-accent)' }}>50K+</div>
                  <div>
                    <div className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>Happy Customers</div>
                    <div className="text-xs" style={{ color: 'var(--color-text-muted)' }}>And growing every day</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="section" style={{ background: 'var(--color-surface)' }}>
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="section-eyebrow justify-center">Our Values</span>
            <h2 className="font-display text-4xl md:text-5xl font-normal" style={{ color: 'var(--color-text-primary)' }}>
              What guides us<br />every day
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 group"
                style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border)' }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-105" style={{ background: 'rgba(192,154,90,0.1)', border: '1px solid rgba(192,154,90,0.2)' }}>
                  <Icon size={22} style={{ color: 'var(--color-accent)' }} />
                </div>
                <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="section" style={{ background: 'var(--color-bg)' }}>
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="section-eyebrow justify-center">Journey</span>
            <h2 className="font-display text-4xl md:text-5xl font-normal" style={{ color: 'var(--color-text-primary)' }}>
              Our story so far
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="relative pl-8" style={{ borderLeft: '1px solid var(--color-border)' }}>
              {timeline.map(({ year, title, desc, accent }, i) => (
                <div key={year} className={`relative pb-12 ${i === timeline.length - 1 ? 'pb-0' : ''}`}>
                  <div
                    className="absolute -left-[17px] top-1 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ background: accent ? 'var(--color-accent)' : 'var(--color-surface)', border: `2px solid ${accent ? 'var(--color-accent)' : 'var(--color-border)'}`, color: accent ? '#0D1117' : 'var(--color-text-muted)' }}
                  >
                    {year.slice(2)}
                  </div>
                  <div className="ml-6">
                    <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'var(--color-accent)' }}>{year}</span>
                    <h3 className="text-lg font-semibold mt-1 mb-2" style={{ color: 'var(--color-text-primary)' }}>{title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="section" style={{ background: 'var(--color-surface)' }}>
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="section-eyebrow justify-center">The Team</span>
            <h2 className="font-display text-4xl md:text-5xl font-normal" style={{ color: 'var(--color-text-primary)' }}>
              The minds behind<br /><em className="not-italic" style={{ color: 'var(--color-accent)' }}>DriveSmart</em>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {team.map(({ name, role, img, bio }) => (
              <div key={name} className="rounded-2xl overflow-hidden group transition-all duration-300 hover:-translate-y-1" style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border)' }}>
                <div className="h-64 overflow-hidden">
                  <img src={img} alt={name} className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="text-base font-semibold mb-0.5" style={{ color: 'var(--color-text-primary)' }}>{name}</h3>
                  <p className="text-xs font-medium mb-3" style={{ color: 'var(--color-accent)' }}>{role}</p>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden py-24" style={{ background: 'var(--color-bg)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(192,154,90,0.06) 0%, transparent 70%)' }} />
        <div className="container-custom relative z-10 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-normal mb-5" style={{ color: 'var(--color-text-primary)' }}>
            Ready to experience<br /><em className="not-italic" style={{ color: 'var(--color-accent)' }}>smarter rentals?</em>
          </h2>
          <p className="text-base mb-10 max-w-md mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
            Join thousands of satisfied customers who transformed their travel with DriveSmart AI.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link to="/booking">
              <button className="btn btn-primary px-8 py-3.5 text-sm">Book Your First Ride</button>
            </Link>
            <Link to="/contact">
              <button className="btn btn-secondary px-8 py-3.5 text-sm">Get in Touch</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
