import React, { useState, useEffect } from 'react';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { PracticeAreas } from './components/PracticeAreas';
import { ComplianceCalendar } from './components/ComplianceCalendar';
import { FinancialTools } from './components/FinancialTools';
import { LeadershipSection } from './components/LeadershipSection';
import { KnowledgeHub } from './components/KnowledgeHub';
import { ConsultationModal } from './components/ConsultationModal';
import { Footer } from './components/Footer';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedServiceForConsultation, setSelectedServiceForConsultation] = useState<string>(
    'Taxation & GST Advisory'
  );
  const [activeSection, setActiveSection] = useState<string>('hero');

  const handleOpenConsultation = (serviceTitle?: string) => {
    if (serviceTitle) {
      setSelectedServiceForConsultation(serviceTitle);
    } else {
      setSelectedServiceForConsultation('Taxation & GST Advisory');
    }
    setIsConsultationOpen(true);
  };

  const handleNavigateToCalculators = () => {
    const calcSection = document.getElementById('financial-tools');
    if (calcSection) {
      calcSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // ScrollSpy observer to update active nav highlight
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'hero',
        'about',
        'practice-areas',
        'tax-calendar',
        'financial-tools',
        'knowledge-hub',
        'contact',
      ];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#F9F8F3] text-[#0F1E36] font-sans flex flex-col selection:bg-[#D4AF37]/30 selection:text-[#0F1E36]">
      {/* Top Contact Strip */}
      <TopBar />

      {/* Navigation Header */}
      <Navbar
        onOpenConsultation={() => handleOpenConsultation('Taxation & GST Advisory')}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onOpenConsultation={() => handleOpenConsultation('Taxation & GST Advisory')}
          onNavigateToCalculators={handleNavigateToCalculators}
        />

        {/* Practice Areas */}
        <PracticeAreas onOpenConsultation={handleOpenConsultation} />

        {/* About Vanguard & Co. */}
        <AboutSection />

        {/* Interactive Indian Tax & Compliance Calendar */}
        <ComplianceCalendar />

        {/* Financial Tools & Income Tax Calculator */}
        <FinancialTools />

        {/* Leadership & Managing Partners */}
        <LeadershipSection onOpenConsultation={handleOpenConsultation} />

        {/* Knowledge Hub / Regulatory Articles */}
        <KnowledgeHub />
      </main>

      {/* Footer & ICAI Disclaimer */}
      <Footer />

      {/* Interactive Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        initialService={selectedServiceForConsultation}
      />
    </div>
  );
}
