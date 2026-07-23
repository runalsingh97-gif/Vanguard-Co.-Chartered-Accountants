import React from 'react';
import { Shield, MapPin, Phone, Mail, Award, ArrowUp, ExternalLink, Scale } from 'lucide-react';
import { FIRM_DETAILS } from '../data/firmData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#0F1E36] text-[#F9F8F3] font-sans pt-16 pb-12 border-t-2 border-[#D4AF37] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#D4AF37] to-[#B89428] flex items-center justify-center text-[#0F1E36] font-bold shadow-md">
                <Shield className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-2xl text-white tracking-tight">
                  Vanguard & Co.
                </h3>
                <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold block -mt-0.5">
                  Chartered Accountants
                </span>
              </div>
            </div>

            <p className="text-xs text-[#EAE5D9]/80 leading-relaxed max-w-md">
              A peer-reviewed Chartered Accountancy practice headquartered at Connaught Place, New Delhi. Delivering strategic tax advisory, statutory audit, MCA compliance, and Virtual CFO services to visionary Indian enterprises.
            </p>

            <div className="inline-flex items-center gap-2 bg-[#182C4A] px-3 py-1.5 rounded-lg border border-[#D4AF37]/30 text-xs text-[#D4AF37] font-semibold">
              <Award className="w-4 h-4 shrink-0" />
              <span>ICAI Firm Registration No. (FRN): 012345N</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3 text-xs">
            <h4 className="font-serif font-bold text-base text-[#D4AF37] tracking-wide uppercase">
              Practice Navigation
            </h4>
            <ul className="space-y-2 text-[#EAE5D9]/80">
              <li>
                <a href="#about" className="hover:text-[#D4AF37] transition-colors">
                  • About Vanguard & Co.
                </a>
              </li>
              <li>
                <a href="#practice-areas" className="hover:text-[#D4AF37] transition-colors">
                  • Taxation & GST Advisory
                </a>
              </li>
              <li>
                <a href="#practice-areas" className="hover:text-[#D4AF37] transition-colors">
                  • Statutory & Tax Audits
                </a>
              </li>
              <li>
                <a href="#tax-calendar" className="hover:text-[#D4AF37] transition-colors">
                  • Indian Compliance Calendar
                </a>
              </li>
              <li>
                <a href="#financial-tools" className="hover:text-[#D4AF37] transition-colors">
                  • Income Tax Calculator (Old vs New)
                </a>
              </li>
              <li>
                <a href="#leadership" className="hover:text-[#D4AF37] transition-colors">
                  • Managing Partners & Leadership
                </a>
              </li>
            </ul>
          </div>

          {/* Office Address & Contact */}
          <div className="md:col-span-4 space-y-3 text-xs">
            <h4 className="font-serif font-bold text-base text-[#D4AF37] tracking-wide uppercase">
              Head Office (New Delhi)
            </h4>
            <div className="space-y-2.5 text-[#EAE5D9]/90">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{FIRM_DETAILS.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>
                  Landline: {FIRM_DETAILS.phoneLandline} | Mobile: {FIRM_DETAILS.phoneMobile}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>{FIRM_DETAILS.email}</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://maps.google.com/?q=Statesman+House+Connaught+Place+New+Delhi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#D4AF37] hover:underline font-semibold"
              >
                <span>View Connaught Place Office on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Mandatory ICAI Regulatory Disclaimer Box */}
        <div className="bg-[#182C4A] p-5 rounded-xl border border-[#D4AF37]/30 text-xs space-y-2">
          <div className="flex items-center gap-2 text-[#D4AF37] font-serif font-bold text-sm uppercase">
            <Scale className="w-4 h-4" />
            <span>Mandatory ICAI Guidelines & Regulatory Disclaimer</span>
          </div>
          <p className="text-[#EAE5D9]/80 leading-relaxed italic text-[11px]">
            "{FIRM_DETAILS.icaiDisclaimer}"
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-[#D4AF37]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#EAE5D9]/60">
          <div>
            © {new Date().getFullYear()} {FIRM_DETAILS.legalName}. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-[#D4AF37] hover:text-white transition-colors font-semibold"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
