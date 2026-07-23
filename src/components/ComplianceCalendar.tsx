import React, { useState } from 'react';
import { TAX_DEADLINES } from '../data/firmData';
import { TaxDeadline } from '../types';
import { Calendar, AlertCircle, Search, Filter, BellRing, Download, CheckCircle2, Clock } from 'lucide-react';

export const ComplianceCalendar: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [reminderSaved, setReminderSaved] = useState<string | null>(null);

  const categories = ['All', 'GST', 'Income Tax', 'ROC / MCA', 'Audit & Others'];

  const filteredDeadlines = TAX_DEADLINES.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.applicableTo.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleReminderClick = (deadline: TaxDeadline) => {
    setReminderSaved(deadline.id);
    setTimeout(() => {
      setReminderSaved(null);
    }, 3000);
  };

  const handleExportICS = (deadline: TaxDeadline) => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Vanguard & Co. Chartered Accountants//Tax Calendar//EN
BEGIN:VEVENT
SUMMARY:Tax Deadline: ${deadline.title} (${FIRM_DETAILS_NAME})
DESCRIPTION:${deadline.description}. Applicable to: ${deadline.applicableTo}
DTSTART;VALUE=DATE:${deadline.date.replace(/-/g, '')}
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${deadline.id}-tax-deadline.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const FIRM_DETAILS_NAME = "Vanguard & Co. Chartered Accountants";

  return (
    <section id="tax-calendar" className="py-16 md:py-24 bg-[#F9F8F3] text-[#0F1E36] relative border-b border-[#EAE5D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 bg-[#F4F1EA] text-[#0F1E36] border border-[#D4AF37]/40 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
            <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Interactive Compliance Radar</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F1E36] tracking-tight border-l-4 border-[#D4AF37] pl-4 sm:pl-6">
            Indian Tax & Regulatory Compliance Calendar
          </h2>
          <p className="text-base text-[#0F1E36]/80 font-sans leading-relaxed">
            Never miss a Statutory Deadline. Key statutory due dates for GST, Income Tax, Advance Tax, ROC Filings, and Tax Audits.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-[#F4F1EA] p-4 sm:p-5 rounded-2xl border border-[#EAE5D9] shadow-sm mb-8 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 w-full md:w-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0F1E36]/70 mr-1 hidden sm:inline flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" /> Category:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    selectedCategory === cat
                      ? 'bg-[#0F1E36] text-[#D4AF37] border border-[#D4AF37] shadow-sm'
                      : 'bg-[#F9F8F3] text-[#0F1E36] hover:bg-[#EAE5D9] border border-[#EAE5D9]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#0F1E36]/50" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search GSTR-1, ITR, ROC..."
                className="w-full pl-9 pr-3 py-2 text-xs bg-[#F9F8F3] border border-[#EAE5D9] rounded-lg focus:outline-none focus:border-[#D4AF37] text-[#0F1E36]"
              />
            </div>
          </div>
        </div>

        {/* Deadlines Timeline Grid / Table */}
        <div className="space-y-4">
          {filteredDeadlines.length === 0 ? (
            <div className="text-center py-12 bg-[#F4F1EA] rounded-xl border border-[#EAE5D9] text-[#0F1E36]/70 text-sm">
              No tax deadlines matched your search criteria. Try adjusting your filters.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              {filteredDeadlines.map((deadline) => (
                <div
                  key={deadline.id}
                  className={`bg-[#F9F8F3] rounded-xl p-5 border transition-all duration-200 relative flex flex-col justify-between ${
                    deadline.isUrgent
                      ? 'border-[#D4AF37] shadow-md bg-gradient-to-r from-[#F9F8F3] to-[#F7F3E6]'
                      : 'border-[#EAE5D9] hover:border-[#D4AF37]/60 shadow-sm'
                  }`}
                >
                  <div className="space-y-3">
                    {/* Top Row: Date Pill & Category */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <div className="bg-[#0F1E36] text-[#D4AF37] font-serif font-bold text-sm px-3 py-1 rounded-md border border-[#D4AF37]/30 flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                          <span>{deadline.dayOfMonth}</span>
                        </div>
                        <span className="text-xs font-semibold text-[#0F1E36]/70">
                          ({deadline.monthYear})
                        </span>
                      </div>

                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#F4F1EA] text-[#0F1E36] border border-[#D4AF37]/30">
                        {deadline.category}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <div>
                      <h3 className="font-serif font-bold text-lg text-[#0F1E36]">
                        {deadline.title}
                      </h3>
                      <p className="text-xs text-[#0F1E36]/80 mt-1 leading-relaxed">
                        {deadline.description}
                      </p>
                    </div>

                    {/* Applicable To & Penalty */}
                    <div className="bg-[#F4F1EA] p-3 rounded-lg border border-[#EAE5D9] space-y-1 text-[11px]">
                      <div>
                        <strong className="text-[#0F1E36]">Applicable To:</strong>{' '}
                        <span className="text-[#0F1E36]/80">{deadline.applicableTo}</span>
                      </div>
                      {deadline.penaltyNote && (
                        <div className="text-[#0A2E23] font-medium flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 text-[#D4AF37] shrink-0" />
                          <span>Non-Compliance: {deadline.penaltyNote}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="mt-4 pt-3 border-t border-[#EAE5D9] flex items-center justify-between gap-2">
                    <button
                      onClick={() => handleExportICS(deadline)}
                      className="inline-flex items-center gap-1.5 text-xs text-[#0F1E36] hover:text-[#D4AF37] font-semibold transition-colors focus:outline-none"
                      title="Download .ics Calendar Event"
                    >
                      <Download className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>Add to Calendar</span>
                    </button>

                    <button
                      onClick={() => handleReminderClick(deadline)}
                      className={`inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-md font-semibold transition-all ${
                        reminderSaved === deadline.id
                          ? 'bg-[#0A2E23] text-white'
                          : 'bg-[#0F1E36] hover:bg-[#182C4A] text-[#D4AF37] border border-[#D4AF37]/30'
                      }`}
                    >
                      {reminderSaved === deadline.id ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Reminder Set!</span>
                        </>
                      ) : (
                        <>
                          <BellRing className="w-3.5 h-3.5 text-[#D4AF37]" />
                          <span>Remind Me</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Quick Statutory Advice Banner */}
        <div className="mt-8 bg-[#0F1E36] text-white p-6 rounded-2xl border border-[#D4AF37]/40 flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-serif font-bold text-lg text-[#F9F8F3]">
              Need Assistance with Pending Tax Filings or Appeals?
            </h4>
            <p className="text-xs text-[#EAE5D9]/80 font-sans">
              Our tax litigation and GST advisory desk ensures flawless calculations, zero late-fee penalty risk, and full statutory compliance.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 bg-gradient-to-r from-[#D4AF37] to-[#B89428] text-[#0F1E36] font-bold px-5 py-2.5 rounded-lg text-xs shadow hover:brightness-105 transition-all"
          >
            Connect with Tax Specialist
          </a>
        </div>
      </div>
    </section>
  );
};
