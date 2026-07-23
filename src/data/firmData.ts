import { PracticeArea, TaxDeadline, Partner, Article, GstRateItem } from '../types';

export const FIRM_DETAILS = {
  name: "Vanguard & Co.",
  legalName: "Vanguard & Co. Chartered Accountants",
  icaiRegistration: "FRN: 012345N",
  address: "4th Floor, Statesman House, Barakhamba Road, Connaught Place, New Delhi - 110001",
  phoneLandline: "+91 11 2345 6789",
  phoneMobile: "+91 98765 43210",
  email: "contact@vanguardca.in",
  taxEmail: "tax@vanguardca.in",
  auditEmail: "audit@vanguardca.in",
  workingHours: "Monday to Saturday: 09:30 AM – 06:30 PM (IST)",
  icaiDisclaimer: "As per the guidelines issued by the Institute of Chartered Accountants of India (ICAI), CA firms are not permitted to solicit work or advertise. This website is solely intended for informational purposes to provide general guidance about our practice, team, and services.",
  trustMetrics: [
    { label: "Years of Trust & Excellence", value: "15+" },
    { label: "Enterprise & SME Clients", value: "600+" },
    { label: "ICAI Registered Practice", value: "FRN 012345N" },
    { label: "Assets & Audits Handled", value: "₹5,000 Cr+" },
  ]
};

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: "taxation-gst",
    title: "Taxation & GST Advisory",
    category: "Direct & Indirect Tax",
    iconName: "FileText",
    shortDesc: "End-to-end Income Tax & GST compliance, strategic tax optimization, and representation before tax appellate authorities.",
    fullDesc: "We assist individuals, SMEs, and large conglomerates in navigating India's dynamic tax regime. Our services encompass routine filings as well as complex international tax structuring and litigation support.",
    servicesList: [
      "Income Tax Return (ITR) Filing for Individuals, Firms & Corporates",
      "GST Registration, Monthly GSTR-1 & GSTR-3B Filings, and Annual Reconciliation (GSTR-9/9C)",
      "Advance Tax Computation, TDS & TCS Advisory & Quarterly Returns",
      "Direct & Indirect Tax Litigation, Scrutiny Assessment & Income Tax Appeals (CIT/ITAT)",
      "International Taxation, DTAA Relief, Transfer Pricing Documentation & Form 15CA/CB Certificates",
      "Health-check Audits for GST and Tax Risk Mitigation"
    ],
    keyHighlights: [
      "100% On-time compliance track record",
      "Ex-ITAT & GST Appellate panel expertise",
      "Seamless integration with Tally Prime & Zoho Books"
    ]
  },
  {
    id: "audit-assurance",
    title: "Audit & Assurance",
    category: "Regulatory Audits",
    iconName: "ShieldCheck",
    shortDesc: "Independent statutory, tax, internal, and risk assurance audits delivered strictly in accordance with ICAI Standards on Auditing (SAs).",
    fullDesc: "Our assurance practice provides stakeholders and management with transparent, rigorous, and reliable audit opinions to bolster financial governance and regulatory trust.",
    servicesList: [
      "Statutory Audits under Companies Act, 2013",
      "Tax Audits under Section 44AB of Income Tax Act, 1961 (Form 3CD)",
      "Internal Audits, SOP Evaluation & Internal Financial Controls (IFC) Testing",
      "Stock, Inventory, Fixed Assets Physical Verification & Reconciliations",
      "Concurrent Audits for Banking, NBFCs & Financial Institutions",
      "Forensic Audits, Fraud Investigation & Risk Management"
    ],
    keyHighlights: [
      "ICAI Peer Reviewed Firm Certification",
      "Standardized Audit Checklists & Methodologies",
      "Actionable MIS Insights Beyond Compliance"
    ]
  },
  {
    id: "corporate-mca",
    title: "Corporate & MCA Legal",
    category: "Corporate Secretarial",
    iconName: "Building2",
    shortDesc: "Full-cycle corporate law compliance, company & LLP incorporation, ROC filings, and RBI/FEMA cross-border advisory.",
    fullDesc: "From setting up a new business entity in India to maintaining ongoing corporate secretarial health, our team ensures complete compliance with Ministry of Corporate Affairs (MCA) and RBI norms.",
    servicesList: [
      "Private Limited, LLP, One Person Company (OPC) & Section 8 Incorporation",
      "Annual MCA ROC Filings (AOC-4, MGT-7, DIR-3 KYC, DPT-3, MSME-1)",
      "FEMA & RBI Compliances (FC-GPR, FC-TRS, FLA Return for FDI/ODI)",
      "Corporate Restructuring, Mergers, Demergers & Joint Ventures",
      "Drafting Shareholders' Agreements (SHA), SPA & Commercial Contracts",
      "Strike-off, Winding-up & Voluntary Liquidation Procedures"
    ],
    keyHighlights: [
      "Fast-track SPICe+ MCA Incorporation support",
      "End-to-end FEMA FDI/ODI Reporting",
      "Dedicated Company Secretarial Wing"
    ]
  },
  {
    id: "virtual-cfo-startup",
    title: "Virtual CFO & Startup Growth",
    category: "Advisory & Growth",
    iconName: "TrendingUp",
    shortDesc: "Strategic financial leadership, automated cloud accounting, startup valuation certificates, and fundraising pitch deck support.",
    fullDesc: "We act as your extended finance department. Emerging startups and mid-market enterprises leverage our Virtual CFO advisory to streamline cashflows, prepare investor-ready financials, and scale sustainably.",
    servicesList: [
      "End-to-End Accounting & Bookkeeping (Tally, QuickBooks, Zoho Books, SAP)",
      "Monthly MIS Dashboard, Cashflow Forecasting & Budgetary Control",
      "Startup Business Valuation Certificates (DCF / Net Asset Method for Angel Tax / Sec 56)",
      "DPIIT Startup India Registration & 80-IAC Tax Exemption Application",
      "Financial Modeling, Investor Data Room Management & Pitch Decks",
      "ESOP Structuring, Cap-Table Management & Valuation"
    ],
    keyHighlights: [
      "DPIIT Approved Valuation Experts",
      "Custom Automated Real-time MIS Dashboards",
      "Flexible retainer models for Growing Startups"
    ]
  }
];

export const TAX_DEADLINES: TaxDeadline[] = [
  {
    id: "gstr1",
    date: "2026-08-11",
    dayOfMonth: "11th",
    monthYear: "Monthly",
    category: "GST",
    title: "GSTR-1 Outward Supplies Filing",
    description: "Filing of details of outward supplies of goods or services for monthly taxpayers under GST.",
    applicableTo: "Monthly GST Registered Taxpayers (Turnover > ₹5 Cr or Opted Non-QRMP)",
    penaltyNote: "Late fee ₹50/day (₹20/day for Nil return) up to max cap.",
    isUrgent: true
  },
  {
    id: "gstr3b",
    date: "2026-08-20",
    dayOfMonth: "20th",
    monthYear: "Monthly",
    category: "GST",
    title: "GSTR-3B Summary Return & Tax Payment",
    description: "Filing of summary return of inward and outward supplies along with payment of self-assessed tax.",
    applicableTo: "All Regular GST Taxpayers (Monthly)",
    penaltyNote: "Interest @ 18% p.a. on net tax liability + Late fees.",
    isUrgent: true
  },
  {
    id: "tds-deposit",
    date: "2026-08-07",
    dayOfMonth: "07th",
    monthYear: "Monthly",
    category: "Income Tax",
    title: "TDS / TCS Monthly Deposit",
    description: "Deposit of Tax Deducted at Source (TDS) and Tax Collected at Source (TCS) for the previous month.",
    applicableTo: "All Tax Deductors / Collectors under Income Tax Act",
    penaltyNote: "Interest @ 1.5% per month for delay in deposit.",
    isUrgent: false
  },
  {
    id: "advance-tax-q2",
    date: "2026-09-15",
    dayOfMonth: "15th Sept",
    monthYear: "Quarterly",
    category: "Income Tax",
    title: "2nd Installment Advance Tax (45%)",
    description: "Payment of second installment (cumulative 45%) of estimated advance tax liability for FY 2026-27.",
    applicableTo: "All Assessees whose net tax liability exceeds ₹10,000 (except Senior Citizens w/o business income)",
    penaltyNote: "Mandatory Interest under Sec 234C @ 1% per month for shortfall.",
    isUrgent: false
  },
  {
    id: "itr-auditee",
    date: "2026-10-31",
    dayOfMonth: "31st Oct",
    monthYear: "Annual",
    category: "Income Tax",
    title: "Income Tax Return (ITR) for Auditee Cases",
    description: "Filing of ITR for Corporate assessees and entities subject to Tax Audit under Sec 44AB.",
    applicableTo: "Companies, Working Partners of Audited Firms, Audited Businesses",
    penaltyNote: "Late fee up to ₹5,000 under Sec 234F + Loss carry forward forfeiture.",
    isUrgent: false
  },
  {
    id: "tax-audit-3cd",
    date: "2026-09-30",
    dayOfMonth: "30th Sept",
    monthYear: "Annual",
    category: "Audit & Others",
    title: "Tax Audit Report (Form 3CD / 3CA / 3CB) Upload",
    description: "Filing of Tax Audit Report on the e-Filing portal for entities exceeding statutory turnover thresholds.",
    applicableTo: "Business turnover > ₹1 Cr (₹10 Cr if 95% digital) / Professional receipts > ₹50 Lakhs",
    penaltyNote: "Penalty under Sec 271B equal to 0.5% of turnover up to max ₹1,500,000.",
    isUrgent: false
  },
  {
    id: "roc-aoc4",
    date: "2026-10-30",
    dayOfMonth: "30th Oct",
    monthYear: "Annual",
    category: "ROC / MCA",
    title: "AOC-4 Financial Statements Filing with MCA",
    description: "Filing of audited balance sheet, profit & loss statement, and board report with the Registrar of Companies.",
    applicableTo: "All Private & Public Limited Companies registered in India",
    penaltyNote: "Additional fee ₹100 per day per company + Director disqualification risk.",
    isUrgent: false
  },
  {
    id: "roc-mgt7",
    date: "2026-11-29",
    dayOfMonth: "29th Nov",
    monthYear: "Annual",
    category: "ROC / MCA",
    title: "MGT-7 Annual Return Filing",
    description: "Filing of Annual Return containing shareholding pattern, board meetings, and directorial details.",
    applicableTo: "All Companies registered under Companies Act",
    penaltyNote: "Additional fee ₹100 per day without limit.",
    isUrgent: false
  }
];

export const PARTNERS: Partner[] = [
  {
    id: "rajesh-sharma",
    name: "CA Rajesh Sharma",
    designation: "Managing Partner",
    qualifications: "FCA, DISA (ICAI), B.Com (Hons) Delhi University",
    experienceYears: 22,
    specialization: [
      "Corporate & International Taxation",
      "GST Appeals & Litigation",
      "Transfer Pricing",
      "Insolvency & Restructuring"
    ],
    bio: "Rajesh Sharma is a Fellow Member of ICAI with over 22 years of post-qualification experience. Prior to founding Vanguard & Co., he served as a Tax Director at a Big 4 accounting firm. He regularly appears before the ITAT and GST Commissioner (Appeals) and is a frequent speaker at ICAI seminars.",
    email: "rsharma@vanguardca.in",
    linkedin: "https://linkedin.com",
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
    quote: "Precision in tax planning is not merely about compliance—it is a vital strategic lever for sustainable business growth."
  },
  {
    id: "ananya-verma",
    name: "CA Ananya Verma",
    designation: "Partner – Audit & Virtual CFO",
    qualifications: "ACA, Dip. in IFRS (ACCA UK), B.Com (SRCC)",
    experienceYears: 14,
    specialization: [
      "Statutory & Tax Audits",
      "Virtual CFO Advisory",
      "DPIIT Startup Valuation",
      "Ind AS & IFRS Conversion"
    ],
    bio: "Ananya Verma leads the Firm's Assurance and Virtual CFO practice. An alumna of Shri Ram College of Commerce (SRCC), she specializes in Ind AS implementation, statutory audits of listed and private entities, and registered valuations for tech startups raising capital.",
    email: "averma@vanguardca.in",
    linkedin: "https://linkedin.com",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    quote: "Robust financial controls and transparent reporting build the foundation of trust that investors demand."
  },
  {
    id: "vikramaditya-roy",
    name: "CA Vikramaditya Roy",
    designation: "Senior Partner – Corporate Law & FEMA",
    qualifications: "FCA, LL.B (Faculty of Law, DU), Registered Valuer (IBBI)",
    experienceYears: 18,
    specialization: [
      "Corporate Secretarial & MCA Laws",
      "FEMA & Foreign Direct Investment (FDI)",
      "Mergers & Acquisitions (M&A)",
      "IBBI Business Valuation"
    ],
    bio: "Vikramaditya Roy combines deep legal and financial expertise. Dual-qualified as a Chartered Accountant and Advocate, he advises Indian promoters and multinational clients on foreign investment structuring, joint ventures, and regulatory approvals with RBI and MCA.",
    email: "vroy@vanguardca.in",
    linkedin: "https://linkedin.com",
    imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
    quote: "Cross-border growth requires seamless alignment between legal mandates and financial realities."
  }
];

export const GST_RATE_DATABASE: GstRateItem[] = [
  { hsnSac: "998221", description: "Legal and Accounting Services / Chartered Accountancy Professional Services", category: "Services", gstRate: 18 },
  { hsnSac: "998311", description: "IT Design and Development, Cloud & Software Services", category: "Services", gstRate: 18 },
  { hsnSac: "998313", description: "Information Technology Infrastructure & Network Management", category: "Services", gstRate: 18 },
  { hsnSac: "997212", description: "Renting of Commercial Real Estate", category: "Services", gstRate: 18 },
  { hsnSac: "997211", description: "Renting of Residential Dwelling (Exempt for personal residence, 18% under RCM if registered)", category: "Services", gstRate: 0 },
  { hsnSac: "995411", description: "Works Contract Services for Construction of Commercial Buildings", category: "Services", gstRate: 18 },
  { hsnSac: "996311", description: "Restaurant Services (Other than in specified hotel premises)", category: "Services", gstRate: 5 },
  { hsnSac: "996411", description: "Passenger Transport by Air (Economy Class)", category: "Services", gstRate: 5 },
  { hsnSac: "8471", description: "Computers, Laptops, Processing Units & Peripherals", category: "Goods", gstRate: 18 },
  { hsnSac: "8517", description: "Smartphones and Cellular Network Phones", category: "Goods", gstRate: 18 },
  { hsnSac: "9403", description: "Office Furniture & Wooden Fixtures", category: "Goods", gstRate: 18 },
  { hsnSac: "4820", description: "Printed Registers, Account Books, Order Books & Diaries", category: "Goods", gstRate: 12 },
  { hsnSac: "8703", description: "Motor Cars for Transport of Persons (excluding Electric Vehicles)", category: "Goods", gstRate: 28, cess: "+ 1% to 22% Compensation Cess" },
  { hsnSac: "8702", description: "Electric Vehicles (EVs) for Passenger Transport", category: "Goods", gstRate: 5 }
];

export const KNOWLEDGE_ARTICLES: Article[] = [
  {
    id: "old-vs-new-tax-regime",
    title: "Old vs New Income Tax Regime: Which Saves More Tax for FY 2024-25 & FY 2025-26?",
    category: "Income Tax",
    date: "July 12, 2026",
    readTime: "6 min read",
    summary: "A comprehensive mathematical comparison between the Old Tax Regime (with 80C, 80D, HRA) and the revamped New Tax Regime under Section 115BAC.",
    tags: ["Income Tax", "ITR Filing", "Tax Planning", "Sec 115BAC"],
    content: `Under the Income Tax Act, taxpayers have the option to choose between the Old Tax Regime and the Default New Tax Regime under Section 115BAC.

Key Highlights of New Tax Regime:
• Increased Standard Deduction of ₹75,000 for salaried employees.
• Surcharge capped at 25% for high-net-worth individuals.
• Tax rebate under Section 87A makes income up to ₹7,000,000 effectively TAX-FREE.
• Tax Slabs: 0-3L (Nil), 3-7L (5%), 7-10L (10%), 10-12L (15%), 12-15L (20%), Above 15L (30%).

When should you prefer the Old Tax Regime?
If your total deductions (80C ₹1.5L + 80D ₹25K-50K + HRA + Home Loan Interest Sec 24 ₹2L + NPS Sec 80CCD(1B) ₹50K) exceed ₹3.75 Lakhs to ₹4.25 Lakhs, the Old Regime may yield lower net tax payable.

Use our built-in Vanguard Income Tax Calculator below to compute your exact personalized savings!`
  },
  {
    id: "gst-e-invoicing-amendments",
    title: "GST E-Invoicing & ITC Matching Guidelines for Indian Businesses",
    category: "GST",
    date: "June 28, 2026",
    readTime: "5 min read",
    summary: "Mandatory E-Invoicing applicability, GSTR-2B automated reconciliation, and strict penalties for non-compliant input tax credit claims.",
    tags: ["GST Compliance", "E-Invoicing", "GSTR-2B", "ITC"],
    content: `E-invoicing under GST is mandatory for all registered businesses whose aggregate turnover exceeds ₹5 Crores in any preceding financial year.

Key Action Points for Management:
1. Automated ERP Integration with IRP (Invoice Registration Portal) to generate 64-digit IRN and QR Code.
2. Mandatory 100% Reconciliation of GSTR-2B with Purchase Register before claiming Input Tax Credit (ITC).
3. Section 16(4) strict timelines for claiming ITC pertaining to previous financial year.
4. Timely payment to vendors within 180 days to prevent automatic reversal of ITC with 18% interest under Rule 37.`
  },
  {
    id: "dpiit-startup-tax-benefits",
    title: "DPIIT Recognition & Section 80-IAC Tax Holiday for Indian Startups",
    category: "Startup & MCA",
    date: "June 15, 2026",
    readTime: "7 min read",
    summary: "How eligible innovative startups can claim 100% tax exemption for 3 consecutive years and Angel Tax immunity under Sec 56(2)(viib).",
    tags: ["Startup India", "DPIIT", "Section 80-IAC", "Valuation"],
    content: `Startups recognized by the Department for Promotion of Industry and Internal Trade (DPIIT) enjoy significant fiscal incentives in India:

1. 100% Tax Exemption under Sec 80-IAC: Available for 3 consecutive financial years out of the first 10 years from incorporation.
2. Exemption from Angel Tax under Sec 56(2)(viib): Protection when issuing shares above Fair Market Value to investors.
3. Fast-Track Patent & Trademark Processing with up to 80% fee rebate.

Essential Prerequisites:
• Entity must be incorporated as Private Limited Company or LLP after April 1, 2016.
• Turnover must not exceed ₹100 Crores in any financial year.
• Must work towards innovation, development, or improvement of products or scalable business models.`
  }
];
