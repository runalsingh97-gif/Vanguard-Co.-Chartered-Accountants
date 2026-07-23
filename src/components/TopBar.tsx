import React from 'react';
import { MapPin, Phone, Mail, Award, Clock } from 'lucide-react';
import { FIRM_DETAILS } from '../data/firmData';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-[#0F1E36] text-[#EAE5D9] text-xs py-2 px-4 border-b border-[#D4AF37]/20 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Left: Location & ICAI Reg */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
          <div className="flex items-center gap-1.5 text-[#EAE5D9]/90 hover:text-[#D4AF37] transition-colors">
            <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
            <span>Barakhamba Road, Connaught Place, New Delhi</span>
          </div>
          <span className="hidden sm:inline text-[#D4AF37]/40">•</span>
          <div className="flex items-center gap-1.5 bg-[#D4AF37]/10 px-2 py-0.5 rounded text-[#D4AF37] font-semibold border border-[#D4AF37]/30">
            <Award className="w-3.5 h-3.5 shrink-0" />
            <span>ICAI Regd. {FIRM_DETAILS.icaiRegistration}</span>
          </div>
        </div>

        {/* Right: Quick Contact & Working Hours */}
        <div className="flex items-center gap-4 text-xs">
          <div className="hidden lg:flex items-center gap-1.5 text-[#EAE5D9]/70">
            <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Mon-Sat: 09:30 AM - 06:30 PM</span>
          </div>
          <span className="hidden lg:inline text-[#D4AF37]/40">•</span>
          <a
            href={`tel:${FIRM_DETAILS.phoneMobile.replace(/\s+/g, '')}`}
            className="flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors font-medium"
          >
            <Phone className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
            <span>{FIRM_DETAILS.phoneMobile}</span>
          </a>
          <span className="text-[#D4AF37]/40">•</span>
          <a
            href={`mailto:${FIRM_DETAILS.email}`}
            className="flex items-center gap-1.5 hover:text-[#D4AF37] transition-colors font-medium"
          >
            <Mail className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
            <span className="hidden sm:inline">{FIRM_DETAILS.email}</span>
            <span className="sm:hidden">Email Us</span>
          </a>
        </div>
      </div>
    </div>
  );
};
