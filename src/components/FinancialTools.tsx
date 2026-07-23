import React, { useState } from 'react';
import { Calculator, Search, Percent, TrendingUp, CheckCircle, Info, RefreshCw, ArrowRight, Shield } from 'lucide-react';
import { GST_RATE_DATABASE } from '../data/firmData';

export const FinancialTools: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'income-tax' | 'gst-finder' | 'emi-calc'>('income-tax');

  // --- 1. INCOME TAX CALCULATOR STATE ---
  const [grossIncome, setGrossIncome] = useState<number>(1500000);
  const [ageCategory, setAgeCategory] = useState<'below60' | 'senior' | 'superSenior'>('below60');
  const [sec80C, setSec80C] = useState<number>(150000);
  const [sec80D, setSec80D] = useState<number>(25000);
  const [hraExemption, setHraExemption] = useState<number>(100000);
  const [sec24HomeLoan, setSec24HomeLoan] = useState<number>(0);
  const [nps80CCD, setNps80CCD] = useState<number>(50000);
  const [otherDeductions, setOtherDeductions] = useState<number>(0);

  // Calculation Logic for Income Tax (FY 2024-25 / FY 2025-26 under Budget Rules)
  const calculateOldRegimeTax = (income: number): { netTax: number; cess: number; totalTax: number } => {
    const stdDeduction = 50000;
    const totalDeductions = stdDeduction + sec80C + sec80D + hraExemption + sec24HomeLoan + nps80CCD + otherDeductions;
    const taxableIncome = Math.max(0, income - totalDeductions);

    let tax = 0;
    if (taxableIncome <= 250000) {
      tax = 0;
    } else if (taxableIncome <= 500000) {
      tax = (taxableIncome - 250000) * 0.05;
    } else if (taxableIncome <= 1000000) {
      tax = 12500 + (taxableIncome - 500000) * 0.2;
    } else {
      tax = 112500 + (taxableIncome - 1000000) * 0.3;
    }

    // Sec 87A rebate for taxable income <= 5L under Old Regime
    if (taxableIncome <= 500000) {
      tax = 0;
    }

    const cess = tax * 0.04;
    return { netTax: Math.round(tax), cess: Math.round(cess), totalTax: Math.round(tax + cess) };
  };

  const calculateNewRegimeTax = (income: number): { netTax: number; cess: number; totalTax: number } => {
    // New regime standard deduction = 75,000 for salaried
    const stdDeduction = 75000;
    const taxableIncome = Math.max(0, income - stdDeduction);

    let tax = 0;
    if (taxableIncome <= 300000) {
      tax = 0;
    } else if (taxableIncome <= 700000) {
      tax = (taxableIncome - 300000) * 0.05;
    } else if (taxableIncome <= 1000000) {
      tax = 20000 + (taxableIncome - 700000) * 0.1;
    } else if (taxableIncome <= 1200000) {
      tax = 50000 + (taxableIncome - 1000000) * 0.15;
    } else if (taxableIncome <= 1500000) {
      tax = 80000 + (taxableIncome - 1200000) * 0.2;
    } else {
      tax = 140000 + (taxableIncome - 1500000) * 0.3;
    }

    // Sec 87A rebate for income <= 7L under New Regime
    if (taxableIncome <= 700000) {
      tax = 0;
    }

    const cess = tax * 0.04;
    return { netTax: Math.round(tax), cess: Math.round(cess), totalTax: Math.round(tax + cess) };
  };

  const oldTaxResult = calculateOldRegimeTax(grossIncome);
  const newTaxResult = calculateNewRegimeTax(grossIncome);
  const taxSavings = Math.abs(oldTaxResult.totalTax - newTaxResult.totalTax);
  const recommendedRegime = oldTaxResult.totalTax <= newTaxResult.totalTax ? 'Old Regime' : 'New Regime';

  // --- 2. GST CALCULATOR & HSN FINDER STATE ---
  const [gstSearch, setGstSearch] = useState<string>('');
  const [gstAmount, setGstAmount] = useState<number>(10000);
  const [selectedGstRate, setSelectedGstRate] = useState<number>(18);
  const [calcMode, setCalcMode] = useState<'exclusive' | 'inclusive'>('exclusive');

  const calculateGstValues = () => {
    if (calcMode === 'exclusive') {
      const tax = (gstAmount * selectedGstRate) / 100;
      const total = gstAmount + tax;
      return { basePrice: gstAmount, gstTax: Math.round(tax), totalAmount: Math.round(total) };
    } else {
      const basePrice = (gstAmount * 100) / (100 + selectedGstRate);
      const tax = gstAmount - basePrice;
      return { basePrice: Math.round(basePrice), gstTax: Math.round(tax), totalAmount: gstAmount };
    }
  };

  const gstCalcResults = calculateGstValues();

  const filteredHsn = GST_RATE_DATABASE.filter(
    (item) =>
      item.description.toLowerCase().includes(gstSearch.toLowerCase()) ||
      item.hsnSac.includes(gstSearch) ||
      item.category.toLowerCase().includes(gstSearch.toLowerCase())
  );

  // --- 3. EMI CALCULATOR STATE ---
  const [loanPrincipal, setLoanPrincipal] = useState<number>(2500000);
  const [interestRate, setInterestRate] = useState<number>(9.5);
  const [tenureYears, setTenureYears] = useState<number>(5);

  const calculateEmi = () => {
    const monthlyRate = interestRate / 12 / 100;
    const totalMonths = tenureYears * 12;
    if (monthlyRate === 0) {
      const emi = loanPrincipal / totalMonths;
      return { emi: Math.round(emi), totalPayment: loanPrincipal, totalInterest: 0 };
    }
    const emi =
      (loanPrincipal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1);
    const totalPayment = emi * totalMonths;
    const totalInterest = totalPayment - loanPrincipal;
    return {
      emi: Math.round(emi),
      totalPayment: Math.round(totalPayment),
      totalInterest: Math.round(totalInterest),
    };
  };

  const emiResult = calculateEmi();

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="financial-tools" className="py-16 md:py-24 bg-[#F4F1EA] text-[#0F1E36] relative border-b border-[#EAE5D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 bg-[#F9F8F3] text-[#0F1E36] border border-[#D4AF37]/40 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
            <Calculator className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Interactive Financial Suite</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F1E36] tracking-tight border-l-4 border-[#D4AF37] pl-4 sm:pl-6">
            Financial & Tax Planning Calculators
          </h2>
          <p className="text-base text-[#0F1E36]/80 font-sans leading-relaxed">
            Real-time tax regime comparative analysis, GST & HSN lookup, and working capital loan EMI estimation built for Indian businesses.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-[#F9F8F3] p-1.5 rounded-xl border border-[#EAE5D9] inline-flex flex-wrap gap-2 shadow-sm">
            <button
              onClick={() => setActiveTab('income-tax')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'income-tax'
                  ? 'bg-[#0F1E36] text-[#D4AF37] border border-[#D4AF37] shadow-sm'
                  : 'text-[#0F1E36]/80 hover:text-[#0F1E36] hover:bg-[#F4F1EA]'
              }`}
            >
              <Calculator className="w-4 h-4 text-[#D4AF37]" />
              <span>Income Tax Calculator (Old vs New)</span>
            </button>

            <button
              onClick={() => setActiveTab('gst-finder')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'gst-finder'
                  ? 'bg-[#0F1E36] text-[#D4AF37] border border-[#D4AF37] shadow-sm'
                  : 'text-[#0F1E36]/80 hover:text-[#0F1E36] hover:bg-[#F4F1EA]'
              }`}
            >
              <Search className="w-4 h-4 text-[#D4AF37]" />
              <span>GST Rate & HSN Finder</span>
            </button>

            <button
              onClick={() => setActiveTab('emi-calc')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'emi-calc'
                  ? 'bg-[#0F1E36] text-[#D4AF37] border border-[#D4AF37] shadow-sm'
                  : 'text-[#0F1E36]/80 hover:text-[#0F1E36] hover:bg-[#F4F1EA]'
              }`}
            >
              <TrendingUp className="w-4 h-4 text-[#D4AF37]" />
              <span>Business EMI & Loan Calculator</span>
            </button>
          </div>
        </div>

        {/* --- TAB 1: INCOME TAX CALCULATOR --- */}
        {activeTab === 'income-tax' && (
          <div className="bg-[#F9F8F3] rounded-2xl border border-[#D4AF37]/30 p-6 sm:p-8 shadow-xl space-y-8 animate-in fade-in duration-300">
            <div className="border-b border-[#EAE5D9] pb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <div>
                <h3 className="font-serif font-bold text-2xl text-[#0F1E36]">
                  Income Tax Calculator (FY 2024-25 & FY 2025-26)
                </h3>
                <p className="text-xs text-[#0F1E36]/70 mt-1">
                  Compare tax liability under Section 115BAC New Tax Regime vs Old Tax Regime with custom deductions.
                </p>
              </div>
              <span className="bg-[#0F1E36] text-[#D4AF37] text-xs font-bold px-3 py-1 rounded-full border border-[#D4AF37]/30">
                AY 2025-26 Compliant
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Inputs Column */}
              <div className="lg:col-span-6 space-y-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0F1E36] mb-1.5">
                    Gross Annual Income (₹)
                  </label>
                  <input
                    type="number"
                    value={grossIncome}
                    onChange={(e) => setGrossIncome(Number(e.target.value))}
                    className="w-full px-4 py-2.5 text-base font-bold bg-[#F4F1EA] border border-[#EAE5D9] rounded-xl focus:border-[#D4AF37] focus:outline-none text-[#0F1E36]"
                  />
                  <input
                    type="range"
                    min="300000"
                    max="5000000"
                    step="50000"
                    value={grossIncome}
                    onChange={(e) => setGrossIncome(Number(e.target.value))}
                    className="w-full accent-[#D4AF37] mt-2 cursor-pointer"
                  />
                  <span className="text-[11px] text-[#0F1E36]/60">
                    Formatted: {formatCurrency(grossIncome)}
                  </span>
                </div>

                {/* Deductions Inputs */}
                <div className="bg-[#F4F1EA] p-4 rounded-xl border border-[#EAE5D9] space-y-3">
                  <h4 className="font-serif font-bold text-sm text-[#0F1E36] flex items-center justify-between">
                    <span>Old Regime Eligible Deductions</span>
                    <span className="text-[11px] text-[#D4AF37] font-sans font-bold">Old Regime Only</span>
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <label className="block font-medium text-[#0F1E36]/80 mb-1">
                        Sec 80C (EPF, PPF, ELSS) [Max ₹1.5L]
                      </label>
                      <input
                        type="number"
                        value={sec80C}
                        onChange={(e) => setSec80C(Number(e.target.value))}
                        className="w-full px-3 py-2 bg-[#F9F8F3] border border-[#EAE5D9] rounded-lg focus:border-[#D4AF37] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block font-medium text-[#0F1E36]/80 mb-1">
                        Sec 80D Health Insurance (Mediclaim)
                      </label>
                      <input
                        type="number"
                        value={sec80D}
                        onChange={(e) => setSec80D(Number(e.target.value))}
                        className="w-full px-3 py-2 bg-[#F9F8F3] border border-[#EAE5D9] rounded-lg focus:border-[#D4AF37] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block font-medium text-[#0F1E36]/80 mb-1">
                        HRA Exemption / Rent Claim
                      </label>
                      <input
                        type="number"
                        value={hraExemption}
                        onChange={(e) => setHraExemption(Number(e.target.value))}
                        className="w-full px-3 py-2 bg-[#F9F8F3] border border-[#EAE5D9] rounded-lg focus:border-[#D4AF37] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block font-medium text-[#0F1E36]/80 mb-1">
                        Sec 80CCD(1B) NPS Additional (Max ₹50K)
                      </label>
                      <input
                        type="number"
                        value={nps80CCD}
                        onChange={(e) => setNps80CCD(Number(e.target.value))}
                        className="w-full px-3 py-2 bg-[#F9F8F3] border border-[#EAE5D9] rounded-lg focus:border-[#D4AF37] focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Side-By-Side Comparison Results Column */}
              <div className="lg:col-span-6 space-y-4">
                {/* Recommendation Banner */}
                <div className="bg-[#0F1E36] text-white p-5 rounded-2xl border border-[#D4AF37] shadow-lg relative overflow-hidden">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#D4AF37] shrink-0 mt-1" />
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#D4AF37]">
                        Vanguard Tax Recommendation
                      </span>
                      <h4 className="font-serif font-bold text-lg text-[#F9F8F3] mt-0.5">
                        Opt for the <span className="text-[#D4AF37]">{recommendedRegime}</span>
                      </h4>
                      <p className="text-xs text-[#EAE5D9]/90 mt-1">
                        By choosing {recommendedRegime}, you save approx{' '}
                        <strong className="text-[#D4AF37] font-bold">{formatCurrency(taxSavings)}</strong> in total annual income tax!
                      </p>
                    </div>
                  </div>
                </div>

                {/* Side by Side Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Old Regime Card */}
                  <div
                    className={`p-5 rounded-2xl border transition-all ${
                      recommendedRegime === 'Old Regime'
                        ? 'bg-[#F4F1EA] border-[#D4AF37] shadow-md'
                        : 'bg-[#F9F8F3] border-[#EAE5D9]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-serif font-bold text-base text-[#0F1E36]">
                        Old Regime
                      </span>
                      {recommendedRegime === 'Old Regime' && (
                        <span className="text-[10px] bg-[#D4AF37] text-[#0F1E36] font-bold px-2 py-0.5 rounded">
                          Recommended
                        </span>
                      )}
                    </div>

                    <div className="space-y-2 text-xs text-[#0F1E36]/80">
                      <div className="flex justify-between">
                        <span>Net Income Tax:</span>
                        <span className="font-semibold">{formatCurrency(oldTaxResult.netTax)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Health & Edu Cess (4%):</span>
                        <span>{formatCurrency(oldTaxResult.cess)}</span>
                      </div>
                      <div className="pt-2 border-t border-[#EAE5D9] flex justify-between font-bold text-sm text-[#0F1E36]">
                        <span>Total Payable:</span>
                        <span className="text-[#0F1E36]">{formatCurrency(oldTaxResult.totalTax)}</span>
                      </div>
                    </div>
                  </div>

                  {/* New Regime Card */}
                  <div
                    className={`p-5 rounded-2xl border transition-all ${
                      recommendedRegime === 'New Regime'
                        ? 'bg-[#F4F1EA] border-[#D4AF37] shadow-md'
                        : 'bg-[#F9F8F3] border-[#EAE5D9]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-serif font-bold text-base text-[#0F1E36]">
                        New Regime
                      </span>
                      {recommendedRegime === 'New Regime' && (
                        <span className="text-[10px] bg-[#D4AF37] text-[#0F1E36] font-bold px-2 py-0.5 rounded">
                          Recommended
                        </span>
                      )}
                    </div>

                    <div className="space-y-2 text-xs text-[#0F1E36]/80">
                      <div className="flex justify-between">
                        <span>Net Income Tax:</span>
                        <span className="font-semibold">{formatCurrency(newTaxResult.netTax)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Health & Edu Cess (4%):</span>
                        <span>{formatCurrency(newTaxResult.cess)}</span>
                      </div>
                      <div className="pt-2 border-t border-[#EAE5D9] flex justify-between font-bold text-sm text-[#0F1E36]">
                        <span>Total Payable:</span>
                        <span className="text-[#0F1E36]">{formatCurrency(newTaxResult.totalTax)}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-[11px] text-[#0F1E36]/70 bg-[#F4F1EA] p-3 rounded-xl border border-[#EAE5D9] flex items-center gap-2">
                  <Info className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <span>
                    Calculations include standard deduction (₹75,000 for New Regime, ₹50,000 for Old Regime). Final liability subject to specific deductions and scrutiny.
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- TAB 2: GST RATE & HSN FINDER --- */}
        {activeTab === 'gst-finder' && (
          <div className="bg-[#F9F8F3] rounded-2xl border border-[#D4AF37]/30 p-6 sm:p-8 shadow-xl space-y-8 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column: Reverse GST Calculator */}
              <div className="lg:col-span-5 bg-[#F4F1EA] p-6 rounded-2xl border border-[#EAE5D9] space-y-5">
                <h3 className="font-serif font-bold text-xl text-[#0F1E36]">
                  GST Calculator (Tax Inclusive / Exclusive)
                </h3>

                <div className="space-y-4 text-xs">
                  <div>
                    <label className="block font-bold text-[#0F1E36] mb-1">
                      Calculation Mode
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => setCalcMode('exclusive')}
                        className={`py-2 rounded-lg font-bold transition-all ${
                          calcMode === 'exclusive'
                            ? 'bg-[#0F1E36] text-[#D4AF37]'
                            : 'bg-[#F9F8F3] text-[#0F1E36] border border-[#EAE5D9]'
                        }`}
                      >
                        Tax Exclusive (Add GST)
                      </button>
                      <button
                        onClick={() => setCalcMode('inclusive')}
                        className={`py-2 rounded-lg font-bold transition-all ${
                          calcMode === 'inclusive'
                            ? 'bg-[#0F1E36] text-[#D4AF37]'
                            : 'bg-[#F9F8F3] text-[#0F1E36] border border-[#EAE5D9]'
                        }`}
                      >
                        Tax Inclusive (Extract GST)
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-[#0F1E36] mb-1">
                      Amount (₹)
                    </label>
                    <input
                      type="number"
                      value={gstAmount}
                      onChange={(e) => setGstAmount(Number(e.target.value))}
                      className="w-full px-3.5 py-2.5 text-base font-bold bg-[#F9F8F3] border border-[#EAE5D9] rounded-xl focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-[#0F1E36] mb-1">
                      GST Rate Slab (%)
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {[5, 12, 18, 28].map((rate) => (
                        <button
                          key={rate}
                          onClick={() => setSelectedGstRate(rate)}
                          className={`py-2 rounded-lg font-bold text-xs transition-all ${
                            selectedGstRate === rate
                              ? 'bg-[#D4AF37] text-[#0F1E36]'
                              : 'bg-[#F9F8F3] text-[#0F1E36] border border-[#EAE5D9]'
                          }`}
                        >
                          {rate}%
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Outputs */}
                  <div className="bg-[#0F1E36] text-white p-4 rounded-xl border border-[#D4AF37]/30 space-y-2 pt-3">
                    <div className="flex justify-between text-xs">
                      <span className="text-[#EAE5D9]/80">Net Base Price:</span>
                      <span className="font-bold">{formatCurrency(gstCalcResults.basePrice)}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-[#EAE5D9]/80">GST Amount ({selectedGstRate}%):</span>
                      <span className="font-bold text-[#D4AF37]">{formatCurrency(gstCalcResults.gstTax)}</span>
                    </div>
                    <div className="pt-2 border-t border-[#D4AF37]/30 flex justify-between font-serif font-bold text-base text-[#F9F8F3]">
                      <span>Gross Total:</span>
                      <span className="text-[#D4AF37]">{formatCurrency(gstCalcResults.totalAmount)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Searchable HSN/SAC Directory */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <h3 className="font-serif font-bold text-xl text-[#0F1E36]">
                    Indian HSN / SAC Code & GST Rate Directory
                  </h3>
                  <div className="relative w-full sm:w-64">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#0F1E36]/50" />
                    <input
                      type="text"
                      value={gstSearch}
                      onChange={(e) => setGstSearch(e.target.value)}
                      placeholder="Search HSN code or item..."
                      className="w-full pl-9 pr-3 py-2 text-xs bg-[#F4F1EA] border border-[#EAE5D9] rounded-lg focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="border border-[#EAE5D9] rounded-xl overflow-hidden bg-[#F9F8F3] max-h-[380px] overflow-y-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-[#0F1E36] text-[#D4AF37] font-serif font-semibold">
                        <th className="p-3 border-b border-[#D4AF37]/30">HSN/SAC</th>
                        <th className="p-3 border-b border-[#D4AF37]/30">Description</th>
                        <th className="p-3 border-b border-[#D4AF37]/30">Type</th>
                        <th className="p-3 border-b border-[#D4AF37]/30 text-right">GST Rate</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#EAE5D9]">
                      {filteredHsn.length === 0 ? (
                        <tr>
                          <td colSpan={4} className="p-6 text-center text-[#0F1E36]/60">
                            No HSN or service code found matching "{gstSearch}".
                          </td>
                        </tr>
                      ) : (
                        filteredHsn.map((item, idx) => (
                          <tr key={idx} className="hover:bg-[#F4F1EA] transition-colors">
                            <td className="p-3 font-mono font-bold text-[#0F1E36]">
                              {item.hsnSac}
                            </td>
                            <td className="p-3 text-[#0F1E36]/90">
                              {item.description}
                              {item.cess && (
                                <span className="block text-[10px] text-amber-700 font-semibold">
                                  {item.cess}
                                </span>
                              )}
                            </td>
                            <td className="p-3 font-medium text-[#0F1E36]/70">{item.category}</td>
                            <td className="p-3 text-right font-bold text-[#0F1E36]">
                              <span className="bg-[#D4AF37]/20 text-[#0F1E36] px-2 py-0.5 rounded border border-[#D4AF37]/30">
                                {item.gstRate}%
                              </span>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- TAB 3: BUSINESS EMI & LOAN CALCULATOR --- */}
        {activeTab === 'emi-calc' && (
          <div className="bg-[#F9F8F3] rounded-2xl border border-[#D4AF37]/30 p-6 sm:p-8 shadow-xl space-y-8 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Inputs */}
              <div className="lg:col-span-6 space-y-5">
                <h3 className="font-serif font-bold text-2xl text-[#0F1E36]">
                  Working Capital & Business Loan EMI Calculator
                </h3>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0F1E36] mb-1.5">
                    Loan Amount (₹)
                  </label>
                  <input
                    type="number"
                    value={loanPrincipal}
                    onChange={(e) => setLoanPrincipal(Number(e.target.value))}
                    className="w-full px-4 py-2.5 text-base font-bold bg-[#F4F1EA] border border-[#EAE5D9] rounded-xl focus:border-[#D4AF37] focus:outline-none"
                  />
                  <input
                    type="range"
                    min="100000"
                    max="20000000"
                    step="100000"
                    value={loanPrincipal}
                    onChange={(e) => setLoanPrincipal(Number(e.target.value))}
                    className="w-full accent-[#D4AF37] mt-2 cursor-pointer"
                  />
                  <span className="text-[11px] text-[#0F1E36]/60">
                    Formatted: {formatCurrency(loanPrincipal)}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block font-bold text-[#0F1E36] mb-1">
                      Interest Rate (% p.a.)
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      value={interestRate}
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                      className="w-full px-3 py-2 bg-[#F4F1EA] border border-[#EAE5D9] rounded-lg focus:border-[#D4AF37] focus:outline-none font-bold"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-[#0F1E36] mb-1">
                      Loan Tenure (Years)
                    </label>
                    <input
                      type="number"
                      value={tenureYears}
                      onChange={(e) => setTenureYears(Number(e.target.value))}
                      className="w-full px-3 py-2 bg-[#F4F1EA] border border-[#EAE5D9] rounded-lg focus:border-[#D4AF37] focus:outline-none font-bold"
                    />
                  </div>
                </div>
              </div>

              {/* Outputs */}
              <div className="lg:col-span-6 space-y-4">
                <div className="bg-[#0F1E36] text-white p-6 rounded-2xl border border-[#D4AF37] shadow-xl space-y-4">
                  <div className="text-center border-b border-[#D4AF37]/30 pb-4">
                    <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                      Monthly EMI Payable
                    </span>
                    <div className="font-serif text-3xl sm:text-4xl font-bold text-[#F9F8F3] mt-1">
                      {formatCurrency(emiResult.emi)}
                    </div>
                  </div>

                  <div className="space-y-2 text-xs text-[#EAE5D9]/90 pt-1">
                    <div className="flex justify-between">
                      <span>Principal Amount:</span>
                      <span className="font-semibold">{formatCurrency(loanPrincipal)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total Interest Charges:</span>
                      <span className="font-semibold text-[#D4AF37]">{formatCurrency(emiResult.totalInterest)}</span>
                    </div>
                    <div className="pt-2 border-t border-[#D4AF37]/30 flex justify-between font-bold text-sm text-[#F9F8F3]">
                      <span>Total Amount Payable:</span>
                      <span className="text-[#D4AF37]">{formatCurrency(emiResult.totalPayment)}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#F4F1EA] p-4 rounded-xl border border-[#EAE5D9] text-xs text-[#0F1E36]/80 space-y-1">
                  <div className="font-bold text-[#0F1E36] flex items-center gap-1.5">
                    <Shield className="w-4 h-4 text-[#D4AF37]" />
                    <span>Virtual CFO Advisory Note</span>
                  </div>
                  <p>
                    Ensure your Debt-Service Coverage Ratio (DSCR) remains above 1.5x before securing additional bank funding. Vanguard & Co. assists in preparing Bank CMA Data reports.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
