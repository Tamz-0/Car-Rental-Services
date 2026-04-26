import React, { useState } from 'react';
import { Search } from 'lucide-react';
import BlogCard from '../components/BlogCard';
import { blogPosts } from '../data/blogPosts';

type Category = 'All' | 'Technology' | 'Sustainability' | 'Travel';

const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: Category[] = ['All', 'Technology', 'Sustainability', 'Travel'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 pb-20" style={{ background: 'var(--color-bg)' }}>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden py-24" style={{ background: 'var(--color-surface)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(192,154,90,0.06) 0%, transparent 60%)' }} />
        <div className="container-custom relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <span className="section-eyebrow justify-center">Journal</span>
            <h1 className="font-display text-5xl md:text-6xl font-normal mb-5" style={{ color: 'var(--color-text-primary)' }}>
              The DriveSmart<br /><em className="not-italic" style={{ color: 'var(--color-accent)' }}>Journal</em>
            </h1>
            <p className="text-lg" style={{ color: 'var(--color-text-secondary)' }}>
              Insights on AI in transportation, eco-friendly driving, and the future of mobility.
            </p>
          </div>
        </div>
      </section>

      {/* ── Filter & Search ── */}
      <section className="py-8" style={{ background: 'var(--color-bg)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center gap-5">
            <div className="flex items-center gap-2 flex-wrap">
              {categories.map((category) => {
                const active = selectedCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200"
                    style={{
                      background: active ? 'var(--color-accent)' : 'var(--color-surface)',
                      color: active ? '#0D1117' : 'var(--color-text-secondary)',
                      border: `1px solid ${active ? 'var(--color-accent)' : 'var(--color-border)'}`,
                    }}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
            <div className="relative w-full md:w-64">
              <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: 'var(--color-text-muted)' }} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input-luxury pl-10 text-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Blog Posts ── */}
      <section className="section" style={{ background: 'var(--color-bg)' }}>
        <div className="container-custom">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}>
                <Search size={22} style={{ color: 'var(--color-text-muted)' }} />
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>No articles found</h3>
              <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                Try adjusting your search or filter to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="section" style={{ background: 'var(--color-surface)' }}>
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <span className="section-eyebrow justify-center">Newsletter</span>
            <h2 className="font-display text-4xl font-normal mb-4" style={{ color: 'var(--color-text-primary)' }}>
              Stay in the know
            </h2>
            <p className="text-base mb-8" style={{ color: 'var(--color-text-secondary)' }}>
              The latest articles, tips, and mobility insights — delivered thoughtfully to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="input-luxury flex-1 text-sm"
              />
              <button className="btn btn-primary px-6 py-3 text-sm whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-xs mt-4" style={{ color: 'var(--color-text-muted)' }}>
              No spam. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
