import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, CheckCircle2, Phone, Mail, Shield, Building } from 'lucide-react';
import { ConsultationFormData } from '../types';
import { FIRM_DETAILS, PRACTICE_AREAS } from '../data/firmData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialService = 'Taxation & GST Advisory',
}) => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    email: '',
    phone: '',
    city: 'New Delhi',
    entityType: 'Private Limited',
    serviceCategory: initialService,
    preferredDate: '',
    preferredTimeSlot: '11:00 AM - 12:00 PM',
    briefQuery: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, serviceCategory: initialService }));
    }
  }, [initialService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F1E36]/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#F9F8F3] text-[#0F1E36] max-w-xl w-full rounded-2xl border border-[#D4AF37]/50 shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto relative font-sans">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#F4F1EA] hover:bg-[#EAE5D9] text-[#0F1E36] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8 space-y-4 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 bg-[#0A2E23] text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40 shadow-lg">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                Consultation Request Confirmed
              </span>
              <h3 className="font-serif font-bold text-2xl text-[#0F1E36]">
                Thank You, {formData.fullName || 'Valued Client'}!
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-[#0F1E36]/80 max-w-md mx-auto leading-relaxed">
              Your tax consultation request for <strong>{formData.serviceCategory}</strong> has been logged with our senior practice desk at Statesman House, Connaught Place.
            </p>

            <div className="bg-[#F4F1EA] p-4 rounded-xl border border-[#EAE5D9] text-xs text-[#0F1E36]/80 space-y-2 text-left max-w-md mx-auto">
              <div className="flex justify-between">
                <span className="font-semibold text-[#0F1E36]">Reference No:</span>
                <span className="font-mono font-bold text-[#D4AF37]">VNG-2026-8849</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-[#0F1E36]">Entity Type:</span>
                <span>{formData.entityType}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-[#0F1E36]">Contact Phone:</span>
                <span>{formData.phone || '+91 98765 43210'}</span>
              </div>
            </div>

            <p className="text-[11px] text-[#0F1E36]/60">
              Our partner coordinator will call you back within 2 business hours to confirm your calendar slot.
            </p>

            <button
              onClick={handleReset}
              className="bg-[#0F1E36] text-[#D4AF37] px-6 py-2.5 rounded-lg text-xs font-bold hover:bg-[#182C4A] transition-colors"
            >
              Done & Return to Site
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                <Shield className="w-4 h-4 text-[#D4AF37]" />
                <span>ICAI Registered Practice Advisory</span>
              </div>
              <h3 className="font-serif font-bold text-2xl text-[#0F1E36]">
                Book Tax & Audit Consultation
              </h3>
              <p className="text-xs text-[#0F1E36]/75">
                Schedule a confidential 1-on-1 discussion with our Senior Chartered Accountants.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-[#0F1E36] mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g., Rajesh Mehta"
                    className="w-full px-3 py-2 bg-[#F4F1EA] border border-[#EAE5D9] rounded-lg focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#0F1E36] mb-1">Mobile Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-3 py-2 bg-[#F4F1EA] border border-[#EAE5D9] rounded-lg focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-[#0F1E36] mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-3 py-2 bg-[#F4F1EA] border border-[#EAE5D9] rounded-lg focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#0F1E36] mb-1">City / Location</label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="e.g., New Delhi / Gurugram"
                    className="w-full px-3 py-2 bg-[#F4F1EA] border border-[#EAE5D9] rounded-lg focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-[#0F1E36] mb-1">Entity Structure</label>
                  <select
                    value={formData.entityType}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        entityType: e.target.value as ConsultationFormData['entityType'],
                      })
                    }
                    className="w-full px-3 py-2 bg-[#F4F1EA] border border-[#EAE5D9] rounded-lg focus:border-[#D4AF37] focus:outline-none font-medium"
                  >
                    <option value="Private Limited">Private Limited Company</option>
                    <option value="Partnership / LLP">LLP / Firm</option>
                    <option value="Proprietorship">Proprietorship / SME</option>
                    <option value="Individual / Salaried">Individual / Salaried</option>
                    <option value="Foreign Enterprise">Foreign Subsidiary / MNC</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-[#0F1E36] mb-1">Service Required</label>
                  <select
                    value={formData.serviceCategory}
                    onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                    className="w-full px-3 py-2 bg-[#F4F1EA] border border-[#EAE5D9] rounded-lg focus:border-[#D4AF37] focus:outline-none font-medium"
                  >
                    {PRACTICE_AREAS.map((p) => (
                      <option key={p.id} value={p.title}>
                        {p.title}
                      </option>
                    ))}
                    <option value="General Tax & Litigation Advisory">
                      General Tax & Litigation Advisory
                    </option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-[#0F1E36] mb-1">Preferred Date</label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-3 py-2 bg-[#F4F1EA] border border-[#EAE5D9] rounded-lg focus:border-[#D4AF37] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#0F1E36] mb-1">Preferred Time Slot</label>
                  <select
                    value={formData.preferredTimeSlot}
                    onChange={(e) =>
                      setFormData({ ...formData, preferredTimeSlot: e.target.value })
                    }
                    className="w-full px-3 py-2 bg-[#F4F1EA] border border-[#EAE5D9] rounded-lg focus:border-[#D4AF37] focus:outline-none"
                  >
                    <option>10:00 AM - 11:00 AM</option>
                    <option>11:00 AM - 12:00 PM</option>
                    <option>02:00 PM - 03:00 PM</option>
                    <option>04:00 PM - 05:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-[#0F1E36] mb-1">
                  Brief Query / Context (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.briefQuery}
                  onChange={(e) => setFormData({ ...formData, briefQuery: e.target.value })}
                  placeholder="Mention your requirements, e.g., GST appeal, ITR filing for FY 2024-25, Statutory Audit..."
                  className="w-full px-3 py-2 bg-[#F4F1EA] border border-[#EAE5D9] rounded-lg focus:border-[#D4AF37] focus:outline-none resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#D4AF37] via-[#C5A028] to-[#B89428] text-[#0F1E36] font-bold py-3 rounded-lg text-sm shadow-md hover:brightness-105 transition-all"
                >
                  Submit Consultation Request
                </button>
              </div>

              <p className="text-[10px] text-center text-[#0F1E36]/60">
                🔒 All information shared is protected under strict Chartered Accountant professional confidentiality privilege.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
