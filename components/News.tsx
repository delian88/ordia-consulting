
import React from 'react';

export const News: React.FC<{ isStandalone?: boolean }> = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-slate-50/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20 reveal">
          <span className="text-blue-600 font-bold uppercase tracking-[0.25em] text-[10px] mb-4 block">Insights & Intelligence</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-blue-900 mb-8 leading-tight">The <span className="italic font-normal text-blue-500">Ordia Digest.</span></h1>
          <p className="text-slate-500 text-lg md:text-xl font-light leading-relaxed">Stay ahead of the curve with our latest analysis on tax reform, corporate growth, and financial technology.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { t: "Navigating 2025 Tax Reform", d: "How the latest regulatory shifts impact mid-market enterprises.", date: "MAY 15, 2024", img: "https://images.unsplash.com/photo-1454165833767-1314d3a44f6c?auto=format&fit=crop&q=80&w=800" },
            { t: "The ROI of Fractional CFOs", d: "Why high-growth start-ups are moving away from full-time hires.", date: "APR 28, 2024", img: "https://images.unsplash.com/photo-1554224155-169641357599?auto=format&fit=crop&q=80&w=800" },
            { t: "Cybersecurity in Finance", d: "Protecting your firm's most valuable asset: sensitive financial data.", date: "APR 12, 2024", img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800" }
          ].map((post, i) => (
            <div key={i} className="reveal bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl shadow-blue-900/5 group hover:-translate-y-2 transition-all duration-500">
              <div className="h-56 overflow-hidden">
                <img src={post.img} alt={post.t} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-8">
                <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-4">{post.date}</p>
                <h3 className="text-xl font-serif font-bold text-blue-900 mb-4 group-hover:text-blue-600 transition-colors">{post.t}</h3>
                <p className="text-slate-500 text-sm font-light leading-relaxed mb-6">{post.d}</p>
                <button className="text-[10px] font-bold uppercase tracking-widest text-blue-900 flex items-center group/btn">
                  Read Article
                  <svg className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
