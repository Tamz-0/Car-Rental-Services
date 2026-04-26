import React from 'react';
import { BlogPost } from '../types';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <article className="card group flex flex-col h-full" style={{ background: 'var(--color-surface)', borderColor: 'var(--color-border)' }}>
      <div className="h-48 overflow-hidden relative">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <span
          className="absolute top-3 left-3 text-2xs font-medium tracking-widest uppercase px-2.5 py-1 rounded-lg"
          style={{ background: 'rgba(8,10,15,0.75)', color: 'var(--color-accent)', backdropFilter: 'blur(8px)', border: '1px solid rgba(192,154,90,0.2)' }}
        >
          {post.category}
        </span>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <p className="text-xs mb-3" style={{ color: 'var(--color-text-muted)' }}>{post.date} · {post.author}</p>
        <h3 className="text-base font-semibold leading-snug mb-3 group-hover:text-[var(--color-accent)] transition-colors duration-300 flex-grow" style={{ color: 'var(--color-text-primary)' }}>
          <Link to={`/blog/${post.id}`}>{post.title}</Link>
        </h3>
        <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-secondary)' }}>{post.excerpt}</p>
        <div className="mt-auto pt-4 flex items-center justify-between" style={{ borderTop: '1px solid var(--color-border)' }}>
          <Link
            to={`/blog/${post.id}`}
            className="flex items-center gap-1.5 text-sm font-medium transition-all duration-200 group/link"
            style={{ color: 'var(--color-accent)' }}
          >
            Read article
            <ArrowUpRight size={14} className="transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
