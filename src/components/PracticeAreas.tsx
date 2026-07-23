import React, { useState } from 'react';
import { PRACTICE_AREAS } from '../data/firmData';
import { PracticeArea } from '../types';
import { FileText, ShieldCheck, Building2, TrendingUp, CheckCircle, ArrowRight, X, Sparkles, PhoneCall } from 'lucide-react';

interface PracticeAreasProps {
  onOpenConsultation: (serviceTitle?: string) => void;
}

export const PracticeAreas: React.FC<PracticeAreasProps> = ({ onOpenConsultation }) => {
  const [selectedPractice, setSelectedPractice] = useState<PracticeArea | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileText':
        return <FileText className="w-8 h-8 text-[#D4AF37] stroke-[1.5]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-8 h-8 text-[#D4AF37] stroke-[1.5]" />;
      case 'Building2':
        return <Building2 className="w-8 h-8 text-[#D4AF37] stroke-[1.5]" />;
      case 'TrendingUp':
        return <TrendingUp className="w-8 h-8 text-[#D4AF37] stroke-[1.5]" />;
      default:
        return <FileText className="w-8 h-8 text-[#D4AF37] stroke-[1.5]" />;
    }
  };

  return (
    <section id="practice-areas" className="py-16 md:py-24 bg-[#F4F1EA] text-[#0F1E36] relative border-b border-[#EAE5D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#F9F8F3] text-[#0F1E36] border border-[#D4AF37]/40 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Our Practice Areas</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F1E36] tracking-tight border-l-4 border-[#D4AF37] pl-4 sm:pl-6">
            Comprehensive Corporate Tax, Audit & Advisory Solutions
          </h2>
          <p className="text-base text-[#0F1E36]/80 font-sans leading-relaxed">
            Tailored financial governance and strategic compliance services for Indian SMEs, multinational subsidiaries, fast-scaling startups, and high-net-worth individuals.
          </p>
        </div>

        {/* 4-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {PRACTICE_AREAS.map((practice) => (
            <div
              key={practice.id}
              className="bg-[#F9F8F3] rounded-2xl p-6 border border-[#EAE5D9] hover:border-[#D4AF37] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Gold Top Decorative Accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="space-y-4">
                {/* Fine-line Gold Icon Badge */}
                <div className="w-14 h-14 rounded-xl bg-[#0F1E36] flex items-center justify-center shadow-md border border-[#D4AF37]/30 group-hover:bg-[#182C4A] transition-colors">
                  {getIcon(practice.iconName)}
                </div>

                <div className="space-y-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#D4AF37] bg-[#D4AF37]/10 px-2.5 py-0.5 rounded border border-[#D4AF37]/20">
                    {practice.category}
                  </span>
                  <h3 className="font-serif font-bold text-xl text-[#0F1E36] group-hover:text-[#0A2E23] transition-colors">
                    {practice.title}
                  </h3>
                  <p className="text-xs text-[#0F1E36]/75 leading-relaxed font-sans line-clamp-3">
                    {practice.shortDesc}
                  </p>
                </div>

                {/* Service Bullet Items */}
                <div className="pt-2 border-t border-[#EAE5D9] space-y-2">
                  <div className="text-[11px] font-bold text-[#0F1E36]/90 uppercase tracking-wider">
                    Key Scope:
                  </div>
                  <ul className="space-y-1.5 text-xs text-[#0F1E36]/80">
                    {practice.servicesList.slice(0, 4).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-4 border-t border-[#EAE5D9] flex items-center justify-between gap-2">
                <button
                  onClick={() => setSelectedPractice(practice)}
                  className="text-xs font-bold text-[#0F1E36] hover:text-[#D4AF37] transition-colors inline-flex items-center gap-1 focus:outline-none"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
                </button>
                <button
                  onClick={() => onOpenConsultation(practice.title)}
                  className="text-xs font-semibold bg-[#0F1E36] hover:bg-[#182C4A] text-[#D4AF37] px-3 py-1.5 rounded-md border border-[#D4AF37]/30 transition-all"
                >
                  Inquire
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Practice Details Modal */}
      {selectedPractice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F1E36]/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#F9F8F3] text-[#0F1E36] max-w-2xl w-full rounded-2xl border border-[#D4AF37]/40 shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto relative font-sans">
            <button
              onClick={() => setSelectedPractice(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#F4F1EA] hover:bg-[#EAE5D9] text-[#0F1E36] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-[#0F1E36] flex items-center justify-center shrink-0 border border-[#D4AF37]">
                  {getIcon(selectedPractice.iconName)}
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] bg-[#D4AF37]/10 px-2.5 py-0.5 rounded border border-[#D4AF37]/20">
                    {selectedPractice.category}
                  </span>
                  <h3 className="font-serif font-bold text-2xl text-[#0F1E36] mt-1">
                    {selectedPractice.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-[#0F1E36]/85 leading-relaxed">
                {selectedPractice.fullDesc}
              </p>

              {/* Complete List of Services */}
              <div className="space-y-3 bg-[#F4F1EA] p-5 rounded-xl border border-[#EAE5D9]">
                <h4 className="font-serif font-bold text-base text-[#0F1E36]">
                  Detailed Practice Offerings:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#0F1E36]/90">
                  {selectedPractice.servicesList.map((service, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Highlights */}
              <div className="space-y-2">
                <h4 className="font-serif font-bold text-sm text-[#0F1E36]">
                  Why Vanguard & Co. for {selectedPractice.title}?
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedPractice.keyHighlights.map((hl, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-[#0F1E36] text-[#D4AF37] px-3 py-1 rounded-full font-medium border border-[#D4AF37]/30"
                    >
                      ✓ {hl}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-[#EAE5D9] flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-[#0F1E36]/70">
                  Ready to optimize your compliance and tax strategy?
                </span>
                <button
                  onClick={() => {
                    const title = selectedPractice.title;
                    setSelectedPractice(null);
                    onOpenConsultation(title);
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#B89428] text-[#0F1E36] font-bold px-6 py-3 rounded-lg text-sm shadow-md"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Book Consultation for {selectedPractice.title}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
