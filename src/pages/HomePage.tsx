import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Clock, Cpu, Leaf, ArrowUpRight } from 'lucide-react';
import Button from '../components/Button';
import TestimonialSlider from '../components/TestimonialSlider';
import CarCard from '../components/CarCard';
import { testimonials } from '../data/testimonials';
import { cars } from '../data/cars';
import { blogPosts } from '../data/blogPosts';
import BlogCard from '../components/BlogCard';

const HomePage: React.FC = () => {
  const categories = Array.from(new Set(cars.map(car => car.category)));

  const stats = [
    { value: '50K+', label: 'Happy Customers' },
    { value: '200+', label: 'Vehicles Available' },
    { value: '50+', label: 'Cities Covered' },
    { value: '4.9', label: 'Average Rating' },
  ];

  const benefits = [
    { icon: Cpu, title: 'AI-Driven Matching', desc: 'Our algorithm intelligently pairs you with the perfect vehicle based on your journey and preferences.' },
    { icon: Clock, title: 'Real-Time Availability', desc: 'See live availability and book with confidence, knowing your car will be ready when you arrive.' },
    { icon: Shield, title: 'Contactless Experience', desc: 'From reservation to return — fully digital, fully frictionless, with smart access and digital keys.' },
    { icon: Leaf, title: 'Eco-Friendly Fleet', desc: 'Reduce your footprint with our curated selection of electric and hybrid vehicles.' },
  ];

  const categoryDescriptions: Record<string, string> = {
    Electric: 'Zero emissions, cutting-edge technology.',
    Hybrid: 'Perfect balance of efficiency and range.',
    SUV: 'Spacious comfort for any adventure.',
    Sedan: 'Classic refinement, modern technology.',
    Luxury: 'Uncompromising premium experience.',
  };

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1721296/pexels-photo-1721296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Luxury car"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(105deg, rgba(8,10,15,0.92) 0%, rgba(8,10,15,0.75) 50%, rgba(8,10,15,0.4) 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 80% at 20% 50%, rgba(192,154,90,0.07) 0%, transparent 60%)' }} />
        </div>

        <div className="container-custom relative z-10 py-32">
          <div className="max-w-2xl">
            <div className="section-eyebrow mb-8" style={{ color: 'var(--color-accent)' }}>
              <span className="w-6 h-px inline-block mr-2" style={{ background: 'var(--color-accent)' }} />
              AI-Powered Car Rentals
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.05] mb-8 text-white">
              Drive Smarter.<br />
              <em className="not-italic" style={{ color: 'var(--color-accent)' }}>Travel Better.</em>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed mb-10 max-w-xl" style={{ color: 'rgba(245,245,240,0.7)' }}>
              Seamless, eco-friendly rentals curated by AI. Your perfect vehicle, effortlessly matched to every journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/booking">
                <button className="btn btn-primary px-7 py-3.5 text-sm">
                  Reserve Your Car
                </button>
              </Link>
              <Link to="/about">
                <button
                  className="btn px-7 py-3.5 text-sm"
                  style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.16)', color: 'white', backdropFilter: 'blur(8px)' }}
                >
                  Our Story
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="absolute bottom-0 left-0 right-0" style={{ background: 'rgba(8,10,15,0.7)', borderTop: '1px solid rgba(255,255,255,0.06)', backdropFilter: 'blur(20px)' }}>
          <div className="container-custom py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map(({ value, label }) => (
                <div key={label} className="text-center">
                  <div className="font-display text-2xl md:text-3xl font-normal" style={{ color: 'var(--color-accent)' }}>{value}</div>
                  <div className="text-xs mt-1 tracking-wide" style={{ color: 'rgba(245,245,240,0.5)' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="section" style={{ background: 'var(--color-bg)' }}>
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="section-eyebrow justify-center">Why DriveSmart</span>
            <h2 className="font-display text-4xl md:text-5xl font-normal mb-5" style={{ color: 'var(--color-text-primary)' }}>
              Built for the modern<br /><em className="not-italic" style={{ color: 'var(--color-accent)' }}>traveller</em>
            </h2>
            <p className="text-lg max-w-xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
              AI technology meets premium service to deliver an experience that genuinely understands your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className="p-7 rounded-2xl transition-all duration-300 group hover:-translate-y-1"
                style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-105"
                  style={{ background: 'rgba(192,154,90,0.1)', border: '1px solid rgba(192,154,90,0.2)' }}
                >
                  <Icon size={20} style={{ color: 'var(--color-accent)' }} />
                </div>
                <h3 className="text-base font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Fleet Categories ── */}
      <section className="section" style={{ background: 'var(--color-surface)' }}>
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <span className="section-eyebrow">Our Fleet</span>
              <h2 className="font-display text-4xl md:text-5xl font-normal" style={{ color: 'var(--color-text-primary)' }}>
                Every journey,<br /><em className="not-italic" style={{ color: 'var(--color-accent)' }}>perfectly matched</em>
              </h2>
            </div>
            <Link to="/booking">
              <button className="btn btn-primary px-6 py-3 text-sm flex items-center gap-2 whitespace-nowrap">
                Browse All Vehicles <ArrowUpRight size={14} />
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.slice(0, 3).map((category) => {
              const categoryImage = cars.find(c => c.category === category)?.image;
              return (
                <Link key={category} to="/booking" className="group relative h-72 rounded-2xl overflow-hidden block">
                  <img
                    src={categoryImage}
                    alt={category}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all duration-300 group-hover:from-black/85" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <span className="text-2xs font-medium tracking-widest uppercase mb-2" style={{ color: 'var(--color-accent)' }}>{category}</span>
                    <h3 className="text-xl font-semibold text-white mb-1">{category} Fleet</h3>
                    <p className="text-sm text-white/60 mb-4">{categoryDescriptions[category]}</p>
                    <div className="flex items-center gap-1.5 text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                      Explore <ArrowRight size={14} className="transition-transform group-hover:translate-x-1 duration-300" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Featured Cars ── */}
      <section className="section" style={{ background: 'var(--color-bg)' }}>
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <span className="section-eyebrow">Top Picks</span>
              <h2 className="font-display text-4xl md:text-5xl font-normal" style={{ color: 'var(--color-text-primary)' }}>
                This week's<br /><em className="not-italic" style={{ color: 'var(--color-accent)' }}>finest selections</em>
              </h2>
            </div>
            <Link to="/booking">
              <button className="btn btn-primary px-6 py-3 text-sm flex items-center gap-2 whitespace-nowrap">
                All Vehicles <ArrowUpRight size={14} />
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cars.slice(0, 3).map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="section" style={{ background: 'var(--color-surface)' }}>
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="section-eyebrow justify-center">Testimonials</span>
            <h2 className="font-display text-4xl md:text-5xl font-normal mb-4" style={{ color: 'var(--color-text-primary)' }}>
              Trusted by <em className="not-italic" style={{ color: 'var(--color-accent)' }}>thousands</em>
            </h2>
            <p className="text-base max-w-md mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
              Real experiences from drivers who've made the switch to AI-powered rentals.
            </p>
          </div>
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>

      {/* ── Blog ── */}
      <section className="section" style={{ background: 'var(--color-bg)' }}>
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <span className="section-eyebrow">Insights</span>
              <h2 className="font-display text-4xl md:text-5xl font-normal" style={{ color: 'var(--color-text-primary)' }}>
                From the<br /><em className="not-italic" style={{ color: 'var(--color-accent)' }}>DriveSmart journal</em>
              </h2>
            </div>
            <Link to="/blog">
              <button className="btn btn-primary px-6 py-3 text-sm flex items-center gap-2 whitespace-nowrap">
                All Articles <ArrowUpRight size={14} />
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/892522/pexels-photo-892522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Luxury car"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'rgba(8,10,15,0.88)' }} />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(192,154,90,0.08) 0%, transparent 70%)' }} />
        </div>
        <div className="container-custom relative z-10 text-center">
          <span className="section-eyebrow justify-center" style={{ color: 'var(--color-accent)' }}>
            <span className="w-6 h-px inline-block mr-2" style={{ background: 'var(--color-accent)' }} />
            Get Started
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-6 max-w-2xl mx-auto leading-tight">
            Ready to experience the future of car rentals?
          </h2>
          <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: 'rgba(245,245,240,0.65)' }}>
            Join thousands of satisfied customers and let our AI find your ideal vehicle.
          </p>
          <Link to="/booking">
            <button className="btn btn-primary px-9 py-4 text-base">
              Book Your Car Now
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomePage;
