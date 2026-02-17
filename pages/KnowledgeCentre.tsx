
import React from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';

const KnowledgeCentre: React.FC = () => {
  const articleUrl = "https://medium.com/@othmany13/bridge-transfers-in-football-what-you-need-to-know-0e434faf0fb1";

  return (
    <div className="min-h-screen bg-background-light dark:bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-16 text-center lg:text-left">
          <h1 className="text-5xl md:text-6xl font-black text-black dark:text-white mb-6">Knowledge Centre</h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-xl leading-relaxed">
            Strategic analysis and regulatory updates from Nigeria's premier legal mind. Stay informed, stay ahead.
          </p>
        </div>

        {/* Firm News Section - Moved Before Blogposts */}
        <div className="mb-20">
          <h2 className="text-xs font-black text-accent-gold uppercase tracking-[0.4em] mb-8 border-l-4 border-accent-gold pl-6">Latest Firm News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* News 1: Summit */}
            <div className="bg-white dark:bg-secondary-grey/10 rounded-3xl p-8 border border-slate-100 dark:border-accent-gold/20 flex flex-col justify-between hover:border-accent-gold/50 transition-all group">
              <div>
                <span className="text-[10px] text-accent-gold font-black mb-4 block uppercase tracking-widest">Summit</span>
                <a 
                  href="https://www.linkedin.com/posts/yahaya-othman_afbs2025-transformingourgame-footballlaw-activity-7388866930625032193-AdSa?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAABI1RvEBgSAEWasGt15rYarYPXCa2FHuYF8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block mb-6"
                >
                  <h3 className="text-2xl font-bold text-black dark:text-white group-hover:text-accent-gold transition-colors leading-tight">
                    Founding Partner Attended the Africa Football Business Summit 2025 in Mombasa, Kenya
                  </h3>
                </a>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                  Engaging with global sports leaders on the evolution of football law and business transformations across the continent.
                </p>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">October 2025</span>
                <span className="material-icons text-accent-gold group-hover:translate-x-2 transition-transform">east</span>
              </div>
            </div>

            {/* News 2: Firm Launch */}
            <div className="bg-black dark:bg-secondary-grey/20 rounded-3xl p-8 border border-accent-gold/20 flex flex-col justify-between shadow-2xl">
              <div>
                <span className="text-[10px] text-accent-gold font-black mb-4 block uppercase tracking-widest">Official Launch</span>
                <h3 className="text-2xl font-bold text-white mb-6 leading-tight">
                  Apex Advocates & Solicitors Officially Launches in Lagos
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed space-y-3">
                  <span className="block mb-2">
                    Founded in August 2025 by Yahaya Oruma Othman, Esq., a senior advocate with a decade of experience in corporate law, arbitration, and commercial dispute resolution.
                  </span>
                  <span className="block italic text-slate-500">
                    Delivering senior-level attention and technical precision to Nigeria's evolving corporate landscape.
                  </span>
                </p>
              </div>
              <div className="mt-8">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">August 2025</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Insights Section */}
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Main Grid: Blogposts */}
          <div className="lg:w-2/3 space-y-12">
            <div className="flex items-center justify-between border-b border-accent-gold/10 pb-6 mb-8">
              <h2 className="text-2xl font-bold text-black dark:text-white uppercase tracking-tighter">Legal Briefs</h2>
              <div className="flex overflow-x-auto gap-4 no-scrollbar">
                {['All Briefs', 'Corporate Law', 'Sports Law', 'ADR Tips'].map((cat, i) => (
                  <button 
                    key={i} 
                    className={`px-4 py-2 rounded-lg text-[10px] font-black whitespace-nowrap uppercase tracking-widest transition-all ${
                      i === 0 
                        ? 'bg-accent-gold text-black' 
                        : 'bg-white dark:bg-black text-slate-400 border border-slate-200 dark:border-accent-gold/20'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {BLOG_POSTS.map((post, i) => (
                <article key={`${post.id}-${i}`} className="bg-white dark:bg-secondary-grey/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-slate-100 dark:border-accent-gold/5 group flex flex-col">
                  <div className="relative h-56 overflow-hidden">
                    <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src={post.imageUrl} alt={post.title} />
                    <span className="absolute top-4 left-4 bg-black text-accent-gold text-[10px] font-bold px-3 py-1 rounded uppercase tracking-widest border border-accent-gold/20">{post.category}</span>
                  </div>
                  <div className="p-8 flex-grow flex flex-col">
                    <p className="text-[10px] text-accent-gold font-black uppercase mb-3 tracking-widest opacity-70">{post.date} • {post.readTime}</p>
                    <a href={articleUrl} target="_blank" rel="noopener noreferrer">
                      <h3 className="text-xl font-bold mb-4 text-black dark:text-white leading-tight group-hover:text-accent-gold transition-colors cursor-pointer">{post.title}</h3>
                    </a>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-8 line-clamp-3 leading-relaxed flex-grow">{post.excerpt}</p>
                    
                    <a 
                      href={articleUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-accent-gold text-xs font-bold flex items-center gap-2 mb-6 group-hover:gap-3 transition-all"
                    >
                      Read Full Brief <span className="material-icons text-sm">east</span>
                    </a>

                    <div className="pt-6 border-t border-slate-100 dark:border-accent-gold/10 flex items-center justify-between">
                      <span className="text-xs font-bold text-black dark:text-slate-300">By {post.author}</span>
                      <div className="flex gap-4">
                        <button className="text-slate-400 hover:text-accent-gold transition-colors"><span className="material-icons text-xl">share</span></button>
                        <button className="text-slate-400 hover:text-accent-gold transition-colors"><span className="material-icons text-xl">bookmark_border</span></button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            
            <div className="flex justify-center pt-8">
              <button className="flex items-center gap-3 border-2 border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-black px-10 py-4 rounded-xl font-bold transition-all group">
                Load More Articles <span className="material-icons text-lg group-hover:rotate-180 transition-transform duration-700">refresh</span>
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-1/3 space-y-10">
            {/* Newsletter */}
            <div className="bg-black rounded-3xl p-10 text-white shadow-2xl relative overflow-hidden border border-accent-gold/20">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 leading-tight">Stay Ahead <br/><span className="text-accent-gold">of the Law</span></h3>
                <p className="text-slate-400 mb-10 text-sm leading-relaxed">Subscribe to the Apex Legal Insights newsletter for monthly updates delivered straight to your inbox.</p>
                <div className="space-y-4">
                  <input className="w-full bg-white/5 border border-white/10 text-white placeholder:text-slate-500 rounded-xl py-4 px-5 outline-none focus:ring-2 focus:ring-accent-gold/40 transition-all" placeholder="Your email address" type="email" />
                  <button className="w-full bg-accent-gold text-black font-black py-4 rounded-xl hover:bg-yellow-600 transition-all uppercase text-sm tracking-widest">Subscribe</button>
                </div>
              </div>
              <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-accent-gold/5 rounded-full blur-3xl"></div>
            </div>

            {/* Case Inquiry */}
            <div className="bg-accent-gold rounded-3xl p-10 text-black shadow-2xl">
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter leading-none">Legal <br/>Inquiry?</h3>
              <p className="text-black/60 text-sm mb-10 font-medium leading-relaxed">Our experts are ready to assist you with your specific requirements. Confidential and professional.</p>
              <Link to="/contact" className="inline-flex items-center justify-between w-full bg-black text-white px-2 py-4 rounded-xl font-bold hover:gap-6 transition-all">
                Schedule <span className="material-icons">arrow_right_alt</span>
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeCentre;
