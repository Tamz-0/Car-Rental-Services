import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Check } from 'lucide-react';
import Button from '../components/Button';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const contactCards = [
    { icon: Phone, title: 'Call Us', sub: 'Mon–Fri: 8am – 8pm', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: Mail, title: 'Email Us', sub: '24/7 Support Available', value: 'info@drivesmart.ai', href: 'mailto:info@drivesmart.ai' },
    { icon: MapPin, title: 'Visit Us', sub: 'Corporate Headquarters', value: '123 Smart Drive, Tech City, CA 90210', href: '#' },
  ];

  const officeHours = [
    { day: 'Monday – Friday', hours: '9:00 AM – 6:00 PM' },
    { day: 'Saturday', hours: '10:00 AM – 4:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
  ];

  const faqs = [
    { q: 'How does the AI recommendation system work?', a: 'Our AI analyses your preferences, travel history, and trip details to recommend vehicles that genuinely fit your needs. It learns from every booking to provide increasingly personalised suggestions.' },
    { q: 'What happens if I need to cancel my reservation?', a: 'Cancellations at least 24 hours before pickup are fully refundable. Within 24 hours, a small fee may apply. Manage everything from your account dashboard.' },
    { q: 'Do you offer airport pickup and drop-off?', a: 'Yes, we offer seamless airport service at most major airports. Select your airport and terminal when booking, and we\'ll ensure your vehicle is ready on arrival.' },
    { q: 'How does the contactless pickup work?', a: 'After booking you receive a digital key via our app. Use it to locate and unlock your vehicle — no queues, no paperwork. Simply drive away and return the same way.' },
  ];

  return (
    <div className="pt-24 pb-20" style={{ background: 'var(--color-bg)' }}>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden py-24" style={{ background: 'var(--color-surface)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(192,154,90,0.06) 0%, transparent 60%)' }} />
        <div className="container-custom relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <span className="section-eyebrow justify-center">Contact</span>
            <h1 className="font-display text-5xl md:text-6xl font-normal mb-5" style={{ color: 'var(--color-text-primary)' }}>
              Get in <em className="not-italic" style={{ color: 'var(--color-accent)' }}>touch</em>
            </h1>
            <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>
              Questions, feedback, or partnership inquiries — we'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* ── Contact Cards ── */}
      <section className="section" style={{ background: 'var(--color-bg)' }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {contactCards.map(({ icon: Icon, title, sub, value, href }) => (
              <a
                key={title}
                href={href}
                className="p-8 rounded-2xl text-center transition-all duration-300 hover:-translate-y-1 group block"
                style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-5 transition-all duration-300 group-hover:scale-105" style={{ background: 'rgba(192,154,90,0.1)', border: '1px solid rgba(192,154,90,0.2)' }}>
                  <Icon size={20} style={{ color: 'var(--color-accent)' }} />
                </div>
                <h3 className="text-base font-semibold mb-1.5" style={{ color: 'var(--color-text-primary)' }}>{title}</h3>
                <p className="text-xs mb-2" style={{ color: 'var(--color-text-muted)' }}>{sub}</p>
                <p className="text-sm font-medium" style={{ color: 'var(--color-accent)' }}>{value}</p>
              </a>
            ))}
          </div>

          {/* ── Form + Map ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-3xl font-normal mb-8" style={{ color: 'var(--color-text-primary)' }}>
                Send us a message
              </h2>

              {isSubmitted ? (
                <div className="rounded-2xl p-8 text-center animate-scale-in" style={{ background: 'rgba(52,211,153,0.06)', border: '1px solid rgba(52,211,153,0.2)' }}>
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{ background: 'rgba(52,211,153,0.12)' }}>
                    <Check size={24} style={{ color: '#34D399' }} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>Message Sent</h3>
                  <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                    Our team will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: 'var(--color-text-muted)' }}>Full Name *</label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your full name" className="input-luxury" required />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: 'var(--color-text-muted)' }}>Email Address *</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" className="input-luxury" required />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: 'var(--color-text-muted)' }}>Phone</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="(555) 123-4567" className="input-luxury" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: 'var(--color-text-muted)' }}>Subject *</label>
                      <select name="subject" value={formData.subject} onChange={handleChange} className="input-luxury" required>
                        <option value="">Select a subject</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Reservation Support">Reservation Support</option>
                        <option value="Technical Issue">Technical Issue</option>
                        <option value="Feedback">Feedback</option>
                        <option value="Partnership">Partnership Opportunity</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: 'var(--color-text-muted)' }}>Message *</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} placeholder="How can we help you?" rows={5} className="input-luxury resize-none" required />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary px-7 py-3.5 text-sm flex items-center gap-2.5"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 rounded-full border-2 border-[#0D1117]/30 border-t-[#0D1117] animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={14} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            <div>
              <h2 className="font-display text-3xl font-normal mb-8" style={{ color: 'var(--color-text-primary)' }}>
                Our location
              </h2>
              <div className="rounded-2xl overflow-hidden h-[320px] mb-5" style={{ border: '1px solid var(--color-border)' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.27405770525!2d-118.69192047471653!3d34.02016130653294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1600000000000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="DriveSmart AI Headquarters"
                />
              </div>
              <div className="rounded-2xl p-5" style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
                <h3 className="text-sm font-semibold mb-4" style={{ color: 'var(--color-text-primary)' }}>Office Hours</h3>
                <div className="space-y-3">
                  {officeHours.map(({ day, hours }) => (
                    <div key={day} className="flex justify-between items-center py-2.5" style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>{day}</span>
                      <span className="text-sm font-medium" style={{ color: hours === 'Closed' ? 'var(--color-text-muted)' : 'var(--color-text-primary)' }}>{hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section" style={{ background: 'var(--color-surface)' }}>
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="section-eyebrow justify-center">FAQ</span>
            <h2 className="font-display text-4xl md:text-5xl font-normal" style={{ color: 'var(--color-text-primary)' }}>
              Common questions
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map(({ q, a }) => (
              <div key={q} className="p-6 rounded-2xl" style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border)' }}>
                <h3 className="text-base font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>{q}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section" style={{ background: 'var(--color-bg)' }}>
        <div className="container-custom text-center">
          <div className="inline-block">
            <span className="section-eyebrow justify-center">Ready?</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-normal mb-5" style={{ color: 'var(--color-text-primary)' }}>
            Experience smarter rentals
          </h2>
          <p className="text-base mb-10 max-w-md mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
            Book your first AI-recommended vehicle today and see why thousands choose DriveSmart.
          </p>
          <button className="btn btn-primary px-9 py-4 text-sm" onClick={() => window.location.href = '/booking'}>
            Book Your Car Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
