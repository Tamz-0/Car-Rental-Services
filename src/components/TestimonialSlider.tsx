import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Testimonial } from '../types';

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

const TestimonialSlider: React.FC<TestimonialSliderProps> = ({ testimonials }) => {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    const interval = window.setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  const prev = () => { setAutoplay(false); setCurrent((p) => (p === 0 ? testimonials.length - 1 : p - 1)); };
  const next = () => { setAutoplay(false); setCurrent((p) => (p === testimonials.length - 1 ? 0 : p + 1)); };

  const testimonial = testimonials[current];

  return (
    <div className="relative max-w-3xl mx-auto">
      <div className="relative min-h-[220px] flex items-center justify-center">
        {testimonials.map((t, index) => (
          <div
            key={t.id}
            className="absolute inset-0 flex flex-col items-center text-center transition-all duration-500"
            style={{ opacity: index === current ? 1 : 0, pointerEvents: index === current ? 'auto' : 'none', transform: index === current ? 'translateY(0)' : 'translateY(8px)' }}
          >
            <div className="relative mb-6">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-16 h-16 rounded-full object-cover ring-2"
                style={{ ringColor: 'var(--color-accent)', boxShadow: '0 0 0 2px var(--color-accent)' }}
              />
            </div>

            <div className="flex items-center gap-1 mb-5">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={i < t.rating ? 'var(--color-accent)' : 'none'} stroke="var(--color-accent)" strokeWidth="1.5">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>

            <blockquote className="text-lg md:text-xl font-display font-normal italic leading-relaxed mb-5 max-w-2xl" style={{ color: 'var(--color-text-primary)' }}>
              "{t.text}"
            </blockquote>

            <div>
              <p className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>{t.name}</p>
              <p className="text-xs mt-0.5" style={{ color: 'var(--color-text-muted)' }}>{t.location}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={prev}
          className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-105"
          style={{ background: 'var(--color-surface-2)', border: '1px solid var(--color-border)', color: 'var(--color-text-secondary)' }}
          aria-label="Previous"
        >
          <ChevronLeft size={16} />
        </button>

        <div className="flex items-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => { setAutoplay(false); setCurrent(index); }}
              className="transition-all duration-300 rounded-full"
              style={{
                width: index === current ? '24px' : '6px',
                height: '6px',
                background: index === current ? 'var(--color-accent)' : 'var(--color-border)',
              }}
              aria-label={`Testimonial ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-105"
          style={{ background: 'var(--color-surface-2)', border: '1px solid var(--color-border)', color: 'var(--color-text-secondary)' }}
          aria-label="Next"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
