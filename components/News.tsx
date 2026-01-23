import React from 'react';

export interface NewsPost {
  id: string;
  t: string;
  d: string;
  content: string[];
  date: string;
  img: string;
  author: string;
}

export const newsPosts: NewsPost[] = [
  { 
    id: "tax-reform-2025",
    t: "Navigating 2025 Tax Reform", 
    d: "How the latest regulatory shifts impact mid-market enterprises.", 
    date: "MAY 15, 2024", 
    img: "https://images.unsplash.com/photo-1454165833767-1314d3a44f6c?auto=format&fit=crop&q=80&w=800",
    author: "Senior Advisory Team",
    content: [
      "The 2025 landscape for corporate taxation is undergoing its most significant shift in a decade. Mid-market enterprises are currently at a crossroads, balancing traditional compliance with new requirements for digital asset reporting and green energy incentives.",
      "At OCS, our analysis indicates that firms who proactively adjust their depreciation schedules and R&D credit applications by Q4 will see a distinct competitive advantage.",
      "Key areas of focus include changes to international tax treaties and the revitalization of local infrastructure investment credits. We recommend a full audit of your current tax strategy to ensure no opportunities are missed in this transition period."
    ]
  },
  { 
    id: "roi-fractional-cfo",
    t: "The ROI of Fractional CFOs", 
    d: "Why high-growth start-ups are moving away from full-time hires.", 
    date: "APR 28, 2024", 
    img: "https://images.unsplash.com/photo-1554224155-169641357599?auto=format&fit=crop&q=80&w=800",
    author: "Growth Strategy Lead",
    content: [
      "For many high-growth startups, the cost of a full-time, seasoned CFO can be prohibitive, often exceeding $250k plus equity. However, the need for high-level financial strategy is non-negotiable.",
      "Fractional CFO services, or 'Outsourced CFOs,' provide the same level of strategic oversight at a fraction of the cost, allowing founders to allocate capital toward product development and market expansion.",
      "Our data shows that startups utilizing fractional leadership achieve a 40% faster burn-rate optimization and clearer paths to Series B funding due to professional-grade financial modeling and investor-ready reporting."
    ]
  },
  { 
    id: "cybersecurity-finance",
    t: "Cybersecurity in Finance", 
    d: "Protecting your firm's most valuable asset: sensitive financial data.", 
    date: "APR 12, 2024", 
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
    author: "Technical Compliance Dept.",
    content: [
      "Data is the new gold, and in the world of finance, it's the target of choice for sophisticated bad actors. As a firm specializing in Outsourced CPA services, we prioritize the integrity of our clients' data above all else.",
      "The rise of AI-driven phishing attacks means that traditional firewalls are no longer sufficient. Modern firms must adopt zero-trust architectures and multi-layered encryption for all client communications and document storage.",
      "Implementation of SOC 2 compliant workflows and regular penetration testing are now the standard, not the exception. We explore how integrating these safeguards into your accounting cycle can actually improve workflow efficiency."
    ]
  }
];

interface NewsProps {
  onSelectPost: (post: NewsPost) => void;
  isStandalone?: boolean;
}

export const News: React.FC<NewsProps> = ({ onSelectPost, isStandalone = true }) => {
  return (
    <div className={`min-h-screen pt-32 pb-20 ${isStandalone ? 'bg-slate-50/50' : 'bg-white'}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20 reveal">
          <span className="text-blue-600 font-bold uppercase tracking-[0.25em] text-[10px] mb-4 block">Insights & Intelligence</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-blue-900 mb-8 leading-tight">The <span className="italic font-normal text-blue-500">Ordia Digest.</span></h1>
          <p className="text-slate-500 text-lg md:text-xl font-light leading-relaxed">Stay ahead of the curve with our latest analysis on tax reform, corporate growth, and financial technology.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {newsPosts.map((post, i) => (
            <div 
              key={post.id} 
              onClick={() => onSelectPost(post)}
              className="reveal bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl shadow-blue-900/5 group hover:-translate-y-2 transition-all duration-500 cursor-pointer"
            >
              <div className="h-56 overflow-hidden">
                <img src={post.img} alt={post.t} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-8">
                <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-4">{post.date}</p>
                <h3 className="text-xl font-serif font-bold text-blue-900 mb-4 group-hover:text-blue-600 transition-colors">{post.t}</h3>
                <p className="text-slate-500 text-sm font-light leading-relaxed mb-6 line-clamp-2">{post.d}</p>
                <button className="text-[10px] font-bold uppercase tracking-widest text-blue-900 flex items-center group/btn">
                  Read Full Article
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