import React, { useState } from 'react';
import { KNOWLEDGE_ARTICLES } from '../data/firmData';
import { Article } from '../types';
import { BookOpen, Clock, Tag, ArrowRight, X, FileText } from 'lucide-react';

export const KnowledgeHub: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Income Tax', 'GST', 'Startup & MCA'];

  const filteredArticles = KNOWLEDGE_ARTICLES.filter(
    (a) => activeCategory === 'All' || a.category === activeCategory
  );

  return (
    <section id="knowledge-hub" className="py-16 md:py-24 bg-[#F4F1EA] text-[#0F1E36] relative border-b border-[#EAE5D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 bg-[#F9F8F3] text-[#0F1E36] border border-[#D4AF37]/40 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
            <BookOpen className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Tax & Legal Intelligence</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F1E36] tracking-tight border-l-4 border-[#D4AF37] pl-4 sm:pl-6">
            Knowledge Hub & Regulatory Insights
          </h2>
          <p className="text-base text-[#0F1E36]/80 font-sans leading-relaxed">
            Expert commentary, statutory amendments breakdown, and pragmatic tax advisory articles written by our Senior Practice Leaders.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center mb-8">
          <div className="bg-[#F9F8F3] p-1.5 rounded-xl border border-[#EAE5D9] inline-flex flex-wrap gap-2 shadow-sm">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-[#0F1E36] text-[#D4AF37] border border-[#D4AF37]'
                    : 'text-[#0F1E36]/80 hover:bg-[#F4F1EA]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              className="bg-[#F9F8F3] rounded-2xl p-6 border border-[#EAE5D9] hover:border-[#D4AF37] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-[#0F1E36]/70">
                  <span className="bg-[#0F1E36] text-[#D4AF37] px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border border-[#D4AF37]/30">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="font-serif font-bold text-lg text-[#0F1E36] group-hover:text-[#0A2E23] transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs text-[#0F1E36]/75 leading-relaxed font-sans line-clamp-3">
                  {article.summary}
                </p>

                <div className="flex flex-wrap gap-1 pt-1">
                  {article.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] bg-[#F4F1EA] text-[#0F1E36]/80 px-2 py-0.5 rounded font-medium border border-[#EAE5D9]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-[#EAE5D9] flex items-center justify-between">
                <span className="text-[11px] text-[#0F1E36]/60 font-medium">{article.date}</span>
                <button
                  onClick={() => setSelectedArticle(article)}
                  className="text-xs font-bold text-[#0F1E36] hover:text-[#D4AF37] inline-flex items-center gap-1.5 transition-colors focus:outline-none"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F1E36]/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#F9F8F3] text-[#0F1E36] max-w-2xl w-full rounded-2xl border border-[#D4AF37]/40 shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto relative font-sans">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#F4F1EA] hover:bg-[#EAE5D9] text-[#0F1E36] transition-colors"
              aria-label="Close article modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs">
                  <span className="bg-[#0F1E36] text-[#D4AF37] px-2.5 py-0.5 rounded font-bold uppercase tracking-wider border border-[#D4AF37]/30">
                    {selectedArticle.category}
                  </span>
                  <span className="text-[#0F1E36]/60">• {selectedArticle.date}</span>
                  <span className="text-[#0F1E36]/60">• {selectedArticle.readTime}</span>
                </div>
                <h3 className="font-serif font-bold text-2xl sm:text-3xl text-[#0F1E36] leading-tight">
                  {selectedArticle.title}
                </h3>
              </div>

              <div className="p-4 bg-[#F4F1EA] rounded-xl border border-[#EAE5D9] italic text-xs text-[#0F1E36]/85">
                "{selectedArticle.summary}"
              </div>

              <div className="prose text-xs sm:text-sm text-[#0F1E36]/90 leading-relaxed space-y-3 whitespace-pre-line font-sans">
                {selectedArticle.content}
              </div>

              <div className="pt-4 border-t border-[#EAE5D9] flex items-center justify-between">
                <span className="text-xs font-semibold text-[#0F1E36]">
                  Authored by Vanguard Research Wing
                </span>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="bg-[#0F1E36] text-[#D4AF37] px-4 py-2 rounded-lg text-xs font-bold"
                >
                  Close Reader
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
