export interface PracticeArea {
  id: string;
  title: string;
  category: string;
  iconName: string;
  shortDesc: string;
  fullDesc: string;
  servicesList: string[];
  keyHighlights: string[];
}

export interface TaxDeadline {
  id: string;
  date: string;
  dayOfMonth: string;
  monthYear: string;
  category: 'GST' | 'Income Tax' | 'ROC / MCA' | 'Audit & Others';
  title: string;
  description: string;
  applicableTo: string;
  penaltyNote?: string;
  isUrgent?: boolean;
}

export interface Partner {
  id: string;
  name: string;
  designation: string;
  qualifications: string;
  experienceYears: number;
  specialization: string[];
  bio: string;
  email: string;
  linkedin: string;
  imageUrl: string;
  quote: string;
}

export interface Article {
  id: string;
  title: string;
  category: 'Income Tax' | 'GST' | 'Startup & MCA' | 'Virtual CFO';
  date: string;
  readTime: string;
  summary: string;
  content: string;
  tags: string[];
}

export interface GstRateItem {
  hsnSac: string;
  description: string;
  category: string;
  gstRate: number; // percentage
  cess?: string;
}

export interface ConsultationFormData {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  entityType: 'Proprietorship' | 'Partnership / LLP' | 'Private Limited' | 'Public Ltd' | 'Individual / Salaried' | 'Foreign Enterprise';
  serviceCategory: string;
  preferredDate: string;
  preferredTimeSlot: string;
  briefQuery: string;
}
