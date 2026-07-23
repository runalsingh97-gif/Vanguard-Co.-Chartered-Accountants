import React from 'react';
import { Shield, ArrowRight, CheckCircle2, Award, Building, FileCheck, Calculator } from 'lucide-react';
import { FIRM_DETAILS } from '../data/firmData';

interface HeroProps {
  onOpenConsultation: () => void;
  onNavigateToCalculators: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation, onNavigateToCalculators }) => {
  return (
    <section id="hero" className="relative bg-[#0F1E36] text-white pt-12 pb-16 lg:pt-20 lg:pb-24 overflow-hidden border-b border-[#D4AF37]/30">
      {/* Background Subtle Luxury Patterns & Ambient Glow */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#0A2E23]/40 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column - Headline & Value Prop */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 bg-[#182C4A] border border-[#D4AF37]/40 text-[#D4AF37] px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide shadow-sm">
              <Award className="w-4 h-4 text-[#D4AF37]" />
              <span>ICAI Registered Firm • FRN: 012345N</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-bold leading-[1.18] text-[#F9F8F3] tracking-tight border-l-4 border-[#D4AF37] pl-4 sm:pl-6 text-left">
              Strategic Tax, Audit & Advisory Services for{' '}
              <span className="italic text-[#D4AF37] font-serif">Visionary</span>{' '}
              Indian Enterprises
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-[#EAE5D9]/90 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Helping SMEs, Corporates, and Startups navigate Income Tax, GST, Statutory Audits, and MCA Compliances with absolute precision and regulatory rigor.
            </p>

            {/* Value Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs sm:text-sm text-[#F4F1EA]/90 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>100% Tax & Legal Compliance</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Ex-Big 4 Partners Leadership</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>DPIIT Valuation & Startup Advisory</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Strict Client Data Privacy & Security</span>
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#D4AF37] via-[#C5A028] to-[#B89428] text-[#0F1E36] font-bold px-7 py-3.5 rounded-lg text-base shadow-xl hover:brightness-110 hover:shadow-2xl transition-all duration-200 border border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/50 active:scale-95"
                id="hero-book-consultation-btn"
              >
                <span>Book Tax Consultation</span>
                <ArrowRight className="w-5 h-5 stroke-[2.2]" />
              </button>

              <button
                onClick={onNavigateToCalculators}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#182C4A] hover:bg-[#182C4A]/80 text-[#F9F8F3] font-semibold px-6 py-3.5 rounded-lg text-base border border-[#D4AF37]/40 hover:border-[#D4AF37] transition-all duration-200"
                id="hero-tax-calculator-btn"
              >
                <Calculator className="w-4 h-4 text-[#D4AF37]" />
                <span>Income Tax Calculator</span>
              </button>
            </div>
          </div>

          {/* Right Column - Visual Imagery Frame & Office Aesthetics */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Decorative Gold Frame */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-[#D4AF37] via-[#182C4A] to-[#0A2E23] opacity-40 blur-md pointer-events-none" />

              <div className="relative bg-[#182C4A] border border-[#D4AF37]/40 rounded-2xl p-3 shadow-2xl overflow-hidden">
                {/* Office & Advisor Image */}
                <div className="relative h-[320px] sm:h-[380px] rounded-xl overflow-hidden group">
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                    alt="Statesman House Connaught Place New Delhi Chartered Accountants Office"
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 brightness-90"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E36] via-[#0F1E36]/30 to-transparent" />

                  {/* Overlay Office Details Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs bg-[#0F1E36]/80 backdrop-blur-md px-3 py-2 rounded-lg border border-[#D4AF37]/30 text-white">
                    <div className="flex items-center gap-2">
                      <Building className="w-4 h-4 text-[#D4AF37]" />
                      <span className="font-semibold">Statesman House, New Delhi</span>
                    </div>
                    <span className="bg-[#D4AF37]/20 text-[#D4AF37] px-2 py-0.5 rounded text-[10px] font-bold uppercase">Headquarters</span>
                  </div>

                  {/* Bottom Image Overlay Card */}
                  <div className="absolute bottom-4 left-4 right-4 bg-[#0F1E36]/90 backdrop-blur-md p-4 rounded-xl border border-[#D4AF37]/30 space-y-2">
                    <div className="flex items-center gap-2 text-sm font-semibold text-white">
                      <FileCheck className="w-4 h-4 text-[#D4AF37]" />
                      <span>ICAI Peer Reviewed Practice</span>
                    </div>
                    <p className="text-xs text-[#EAE5D9]/80 font-sans leading-relaxed">
                      Auditing enterprises with integrity & regulatory excellence across India.
                    </p>
                  </div>
                </div>

                {/* Sub-card stats badge */}
                <div className="grid grid-cols-2 gap-2 mt-3 pt-1">
                  <div className="bg-[#0F1E36] p-2.5 rounded-lg border border-[#D4AF37]/20 text-center">
                    <div className="text-lg font-serif font-bold text-[#D4AF37]">₹5,000 Cr+</div>
                    <div className="text-[11px] text-[#EAE5D9]/80">Assets & Turnover Audited</div>
                  </div>
                  <div className="bg-[#0F1E36] p-2.5 rounded-lg border border-[#D4AF37]/20 text-center">
                    <div className="text-lg font-serif font-bold text-[#D4AF37]">100% On-Time</div>
                    <div className="text-[11px] text-[#EAE5D9]/80">Filing Compliance Record</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Metrics Bar */}
        <div className="mt-12 pt-8 border-t border-[#D4AF37]/20">
          <div className="text-center text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-6">
            Trusted Corporate Governance & Financial Excellence
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {FIRM_DETAILS.trustMetrics.map((metric, idx) => (
              <div key={idx} className="bg-[#182C4A]/50 p-4 rounded-xl border border-[#D4AF37]/20 backdrop-blur-sm">
                <div className="font-serif text-2xl sm:text-3xl font-bold text-[#D4AF37] mb-1">
                  {metric.value}
                </div>
                <div className="text-xs text-[#EAE5D9]/90 font-medium">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
