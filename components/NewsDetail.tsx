import React, { useEffect } from 'react';
import { NewsPost } from './News';

interface NewsDetailProps {
  post: NewsPost;
  onBack: () => void;
}

export const NewsDetail: React.FC<NewsDetailProps> = ({ post, onBack }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Dynamic SEO Metadata Updates
    const originalTitle = document.title;
    const metaDesc = document.getElementById('meta-description');
    const ogTitle = document.getElementById('og-title');
    const ogDesc = document.getElementById('og-description');
    
    document.title = `${post.t} | Ordia Digest`;
    if (metaDesc) metaDesc.setAttribute('content', post.d);
    if (ogTitle) ogTitle.setAttribute('content', post.t);
    if (ogDesc) ogDesc.setAttribute('content', post.d);

    return () => {
      document.title = originalTitle;
    };
  }, [post]);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    const fallback = "https://images.unsplash.com/photo-1454165833767-1314d3a44f6c?auto=format&fit=crop&q=80&w=1200";
    if (target.src !== fallback) {
      target.src = fallback;
    }
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 animate-fade-in">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <button 
            onClick={onBack}
            className="group flex items-center space-x-3 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 mb-12 hover:text-blue-900 transition-colors"
          >
            <div className="w-10 h-10 border border-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-900 group-hover:border-blue-900 group-hover:text-white transition-all">
              <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </div>
            <span>Back to Insights</span>
          </button>

          {/* Article Header */}
          <div className="mb-12">
            <div className="flex items-center space-x-4 mb-6">
              <span className="px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold rounded-full border border-blue-100 uppercase tracking-widest">{post.date}</span>
              <span className="text-slate-300">/</span>
              <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">By {post.author}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-blue-900 leading-tight mb-10">
              {post.t}
            </h1>
            <div className="w-full h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden shadow-2xl mb-16 bg-slate-100">
              <img 
                src={post.img} 
                alt={post.t} 
                onError={handleImageError}
                className="w-full h-full object-cover" 
              />
            </div>
          </div>

          {/* Article Body */}
          <div className="prose prose-slate prose-lg max-w-none">
            {post.content.map((paragraph, idx) => (
              <p key={idx} className="text-slate-600 text-lg md:text-xl font-light leading-relaxed mb-8">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Bottom Call to Action */}
          <div className="mt-24 p-12 md:p-16 bg-slate-900 rounded-[3rem] text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] -mr-32 -mt-32"></div>
            <div className="relative z-10 text-center">
              <h2 className="text-3xl font-serif font-bold mb-6 italic">Require Strategic Advice?</h2>
              <p className="text-white/60 mb-10 max-w-lg mx-auto font-light">
                Our advisors are ready to help you navigate complex financial shifts with precision and technical excellence.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a href="#contact" className="px-10 py-4 bg-blue-600 text-white rounded-full font-bold uppercase tracking-widest text-[10px] hover:bg-white hover:text-blue-900 transition-all">
                  Book a Consultation
                </a>
                <button onClick={onBack} className="text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors">
                  Keep Reading Insights
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
