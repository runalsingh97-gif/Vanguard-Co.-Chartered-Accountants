import React, { useState, useEffect } from 'react';
import { Shield, Menu, X, Calendar, PhoneCall, ChevronRight } from 'lucide-react';
import { FIRM_DETAILS } from '../data/firmData';

interface NavbarProps {
  onOpenConsultation: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Us', href: '#about' },
    { name: 'Practice Areas', href: '#practice-areas' },
    { name: 'Tax Calendar', href: '#tax-calendar' },
    { name: 'Financial Tools', href: '#financial-tools' },
    { name: 'Knowledge Hub', href: '#knowledge-hub' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 font-sans ${
        isScrolled
          ? 'bg-[#0F1E36] text-white shadow-xl border-b border-[#D4AF37]/30 py-3'
          : 'bg-[#0F1E36] text-white py-4 border-b border-[#D4AF37]/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Tagline */}
        <a href="#hero" className="flex items-center gap-3 group focus:outline-none">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#D4AF37] to-[#B89428] flex items-center justify-center shadow-md border border-[#D4AF37]/40 text-[#0F1E36] group-hover:scale-105 transition-transform">
            <Shield className="w-6 h-6 stroke-[2.2]" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-serif font-bold text-xl sm:text-2xl tracking-tight text-white group-hover:text-[#D4AF37] transition-colors">
                Vanguard & Co.
              </span>
            </div>
            <span className="text-[11px] uppercase tracking-wider text-[#D4AF37] font-semibold -mt-0.5">
              Chartered Accountants
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`transition-colors py-1 relative ${
                  isActive
                    ? 'text-[#D4AF37] font-semibold'
                    : 'text-[#EAE5D9]/90 hover:text-[#D4AF37]'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#D4AF37] rounded-full animate-pulse" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenConsultation}
            className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] via-[#C5A028] to-[#B89428] text-[#0F1E36] font-semibold px-4 py-2.5 rounded-lg text-sm shadow-md hover:shadow-lg hover:brightness-105 transition-all duration-200 border border-[#D4AF37]/50 focus:ring-2 focus:ring-[#D4AF37]/50 active:scale-95"
            id="nav-book-consultation-btn"
          >
            <Calendar className="w-4 h-4 stroke-[2.2]" />
            <span>Book Tax Consultation</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-[#182C4A] text-[#D4AF37] border border-[#D4AF37]/30 hover:bg-[#D4AF37]/10 focus:outline-none"
            aria-label="Toggle navigation menu"
            id="mobile-menu-toggle-btn"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0F1E36] border-b border-[#D4AF37]/30 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="px-3 py-2 bg-[#182C4A] rounded-lg border border-[#D4AF37]/20 mb-3 flex items-center justify-between text-xs text-[#EAE5D9]">
            <span className="text-[#D4AF37] font-semibold">ICAI FRN: 012345N</span>
            <span>Connaught Place, New Delhi</span>
          </div>

          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-[#EAE5D9] hover:bg-[#182C4A] hover:text-[#D4AF37] transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-[#D4AF37]/60" />
              </a>
            ))}
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#B89428] text-[#0F1E36] font-bold px-4 py-3 rounded-lg text-sm shadow-md"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Book Tax Consultation</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
