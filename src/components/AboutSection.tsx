import React from 'react';
import { Shield, Award, Users, Check, Building2, MapPin, FileText, Lock } from 'lucide-react';
import { FIRM_DETAILS } from '../data/firmData';

export const AboutSection: React.FC = () => {
  const firmPillars = [
    {
      title: 'ICAI Regulatory Integrity',
      desc: 'Strict adherence to ICAI Code of Ethics, Peer Review standards, and Indian Auditing Standards (SAs).',
      icon: Shield,
    },
    {
      title: 'Ex-Big 4 Leadership',
      desc: 'Founded by senior partners with extensive exposure in multinational corporate tax and complex audits.',
      icon: Award,
    },
    {
      title: 'Client Data Privacy & Security',
      desc: 'ISO-compliant digital infrastructure ensuring 100% confidentiality of financial records and documents.',
      icon: Lock,
    },
    {
      title: 'End-to-End Advisory',
      desc: 'Seamless integration from routine GST/ITR filings to M&A valuation, RBI FDI reporting, and Virtual CFO.',
      icon: FileText,
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-[#F9F8F3] text-[#0F1E36] relative border-b border-[#EAE5D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image & Location Highlight */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden bg-[#F4F1EA] p-3 border border-[#D4AF37]/30 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80"
                alt="Vanguard & Co. Chartered Accountants Office Connaught Place"
                className="w-full h-[360px] sm:h-[420px] object-cover rounded-xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E36] via-transparent to-transparent opacity-80" />

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#0F1E36] text-white p-5 rounded-xl border border-[#D4AF37]/40 shadow-xl space-y-2">
                <div className="flex items-center gap-2 text-[#D4AF37] text-xs font-bold uppercase tracking-wider">
                  <MapPin className="w-4 h-4" />
                  <span>Connaught Place, New Delhi</span>
                </div>
                <div className="text-sm font-serif font-semibold text-[#F9F8F3]">
                  Statesman House, Barakhamba Road
                </div>
                <div className="text-xs text-[#EAE5D9]/80 font-sans">
                  Headquartered in New Delhi’s central financial hub with pan-India service capability.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Firm Overview & Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#F4F1EA] text-[#0F1E36] border border-[#D4AF37]/40 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>About Vanguard & Co.</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0F1E36] leading-tight border-l-4 border-[#D4AF37] pl-4 sm:pl-6">
              A Legacy of Uncompromised Trust, Precision, and Financial Wisdom
            </h2>

            <p className="text-base text-[#0F1E36]/80 leading-relaxed font-sans">
              Established over 15 years ago in Connaught Place, New Delhi, <strong>Vanguard & Co. Chartered Accountants</strong> (ICAI Registration FRN: 012345N) is a premier full-service Chartered Accountancy firm. We partner with Indian businesses, startups, foreign entities, and high-net-worth individuals to deliver comprehensive accounting, tax litigation, statutory audit, and corporate governance solutions.
            </p>

            <p className="text-base text-[#0F1E36]/80 leading-relaxed font-sans">
              Our practice is led by seasoned FCA and ACA professionals combining Big-4 experience with deep knowledge of Indian Income Tax laws, GST regulations, Ministry of Corporate Affairs (MCA) frameworks, and RBI FEMA guidelines.
            </p>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {firmPillars.map((pillar, index) => {
                const IconComponent = pillar.icon;
                return (
                  <div key={index} className="bg-[#F4F1EA] p-4 rounded-xl border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all space-y-1.5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#0F1E36] text-[#D4AF37] flex items-center justify-center shrink-0">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h3 className="font-serif font-bold text-sm text-[#0F1E36]">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="text-xs text-[#0F1E36]/75 leading-relaxed font-sans pl-10">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
