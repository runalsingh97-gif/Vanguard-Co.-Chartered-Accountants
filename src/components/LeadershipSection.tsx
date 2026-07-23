import React from 'react';
import { PARTNERS } from '../data/firmData';
import { Award, Mail, Linkedin, Users, Quote, Briefcase, CheckCircle2 } from 'lucide-react';

interface LeadershipSectionProps {
  onOpenConsultation: (partnerName?: string) => void;
}

export const LeadershipSection: React.FC<LeadershipSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="leadership" className="py-16 md:py-24 bg-[#F9F8F3] text-[#0F1E36] relative border-b border-[#EAE5D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#F4F1EA] text-[#0F1E36] border border-[#D4AF37]/40 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
            <Users className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Firm Leadership</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F1E36] tracking-tight border-l-4 border-[#D4AF37] pl-4 sm:pl-6">
            Meet Our Senior Partners & Managing Practice Heads
          </h2>
          <p className="text-base text-[#0F1E36]/80 font-sans leading-relaxed">
            Distinguished Chartered Accountants bringing decades of Big 4, corporate tax litigation, and statutory audit experience to your enterprise.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PARTNERS.map((partner) => (
            <div
              key={partner.id}
              className="bg-[#F4F1EA] rounded-2xl border border-[#EAE5D9] hover:border-[#D4AF37] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Photo Header Container */}
                <div className="relative h-64 overflow-hidden bg-[#0F1E36]">
                  <img
                    src={partner.imageUrl}
                    alt={partner.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 brightness-95"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E36] via-transparent to-transparent" />

                  <div className="absolute bottom-3 left-4 right-4 text-white space-y-0.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#D4AF37] bg-[#0F1E36]/80 px-2.5 py-0.5 rounded border border-[#D4AF37]/30 inline-block">
                      {partner.designation}
                    </span>
                    <h3 className="font-serif font-bold text-xl text-[#F9F8F3]">
                      {partner.name}
                    </h3>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 space-y-4 font-sans">
                  {/* Qualifications Pill */}
                  <div className="flex items-center gap-1.5 text-xs text-[#0F1E36] bg-[#F9F8F3] px-3 py-1.5 rounded-lg border border-[#EAE5D9]">
                    <Award className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span className="font-semibold">{partner.qualifications}</span>
                  </div>

                  {/* Specializations */}
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#0F1E36]/70 flex items-center gap-1">
                      <Briefcase className="w-3 h-3 text-[#D4AF37]" /> Focus Areas:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {partner.specialization.map((spec, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] bg-[#0F1E36] text-[#D4AF37] px-2.5 py-0.5 rounded font-medium border border-[#D4AF37]/20"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-xs text-[#0F1E36]/80 leading-relaxed">
                    {partner.bio}
                  </p>

                  {/* Quote */}
                  <div className="bg-[#F9F8F3] p-3 rounded-xl border border-[#D4AF37]/20 italic text-xs text-[#0F1E36]/90 relative">
                    <Quote className="w-4 h-4 text-[#D4AF37]/40 absolute top-2 right-2" />
                    "{partner.quote}"
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0 border-t border-[#EAE5D9] mt-4 flex items-center justify-between gap-2">
                <a
                  href={`mailto:${partner.email}`}
                  className="text-xs font-semibold text-[#0F1E36] hover:text-[#D4AF37] inline-flex items-center gap-1 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>{partner.email}</span>
                </a>

                <button
                  onClick={() => onOpenConsultation(`Consultation with ${partner.name}`)}
                  className="text-xs font-bold bg-[#0F1E36] hover:bg-[#182C4A] text-[#D4AF37] px-3 py-1.5 rounded-md border border-[#D4AF37]/30 transition-all"
                >
                  Book Session
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
