import React, { useState } from 'react';
import { Search, CheckCircle2, ExternalLink, ShieldCheck, FileCheck, HelpCircle, Award, Landmark } from 'lucide-react';
import { SCHEMES } from '../data/mockData';

export default function SchemeNavigator() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');
  const [activeCheckScheme, setActiveCheckScheme] = useState(null);
  const [isEligible, setIsEligible] = useState(null);

  const tags = ['All', 'Central Government', 'Crop Insurance', 'Energy Initiative', 'Free Service', 'Subsidy'];

  const filteredSchemes = SCHEMES.filter((scheme) => {
    const matchesSearch = scheme.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          scheme.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          scheme.benefit.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === 'All' || scheme.tag === selectedTag || scheme.category.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  const checkEligibility = (scheme) => {
    setActiveCheckScheme(scheme);
    setIsEligible(null);
  };

  const handleEligibilitySubmit = (e) => {
    e.preventDefault();
    setIsEligible(true);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      
      {/* Banner */}
      <div className="bg-gradient-to-r from-emerald-800 to-teal-800 text-white p-6 sm:p-8 rounded-3xl shadow-md space-y-2">
        <div className="inline-flex items-center gap-1.5 bg-emerald-700/80 px-3 py-1 rounded-full text-xs font-semibold text-emerald-200">
          <Landmark className="w-4 h-4 text-amber-300" /> Direct Benefit Transfer & Subsidy Finder
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold">Government Schemes & Subsidy Navigator</h2>
        <p className="text-emerald-100 text-sm max-w-2xl">
          Instantly find central & state farmer welfare schemes, calculate cash benefits, check eligibility, and prepare required documents without middleman fees.
        </p>
      </div>

      {/* Search & Category Filter */}
      <div className="bg-white p-4 sm:p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search schemes by name, benefit (e.g. PM-KISAN, Bima, Solar, Drip)..."
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  selectedTag === tag
                    ? 'bg-emerald-700 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Schemes List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {filteredSchemes.map((scheme) => (
            <div
              key={scheme.id}
              className="border border-slate-200 hover:border-emerald-400 rounded-2xl p-5 bg-white transition-all shadow-xs hover:shadow-md flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <span className="bg-emerald-100 text-emerald-800 text-[11px] font-bold px-2.5 py-0.5 rounded-md">
                    {scheme.tag}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">{scheme.category}</span>
                </div>
                <h3 className="font-extrabold text-slate-900 text-base leading-snug">{scheme.title}</h3>
                <div className="bg-emerald-50/80 p-3 rounded-xl border border-emerald-100">
                  <span className="text-xs font-bold text-emerald-900 block mb-0.5">💰 Financial Benefit:</span>
                  <p className="text-xs font-semibold text-emerald-800">{scheme.benefit}</p>
                </div>
                <div className="text-xs text-slate-600 space-y-1">
                  <p><strong>Eligibility:</strong> {scheme.eligibility}</p>
                  <div>
                    <strong className="text-slate-700">Required Documents:</strong>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {scheme.documents.map((doc, i) => (
                        <span key={i} className="bg-slate-100 text-slate-700 text-[10px] font-semibold px-2 py-0.5 rounded-md flex items-center gap-1">
                          <FileCheck className="w-3 h-3 text-emerald-600" /> {doc}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
                <button
                  onClick={() => checkEligibility(scheme)}
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold py-2.5 px-3 rounded-xl transition-all text-center flex items-center justify-center gap-1"
                >
                  <ShieldCheck className="w-3.5 h-3.5" /> Check My Eligibility
                </button>
                <a
                  href={scheme.officialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold py-2.5 px-3 rounded-xl transition-all flex items-center gap-1"
                >
                  Portal <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Eligibility Modal / Drawer */}
      {activeCheckScheme && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl space-y-4 border border-slate-200 relative animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setActiveCheckScheme(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 font-bold text-lg w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center"
            >
              ✕
            </button>

            <h3 className="font-extrabold text-slate-900 text-lg">
              Eligibility Quiz: {activeCheckScheme.title}
            </h3>

            {isEligible === null ? (
              <form onSubmit={handleEligibilitySubmit} className="space-y-4 text-xs font-medium text-slate-700">
                <div className="space-y-1">
                  <label className="font-bold block">1. Do you own agricultural land or hold tenant land records?</label>
                  <select className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl font-medium">
                    <option>Yes - Individual Owned Land (&lt; 2 Hectares)</option>
                    <option>Yes - Tenant Farmer / Sharecropper</option>
                    <option>No</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-bold block">2. Do you have an active Aadhaar card linked to your Bank Account?</label>
                  <select className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl font-medium">
                    <option>Yes, Aadhaar & Bank DBT active</option>
                    <option>Aadhaar available, bank link pending</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-bold block">3. State & District Location:</label>
                  <input
                    type="text"
                    defaultValue="Andhra Pradesh / Tamil Nadu"
                    className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-xl font-medium"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl text-sm transition-all shadow-md"
                >
                  Submit & Verify Eligibility Now
                </button>
              </form>
            ) : (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="font-extrabold text-emerald-950 text-base">🎉 You Are Eligible!</h4>
                <p className="text-xs text-emerald-900 font-medium">
                  Based on your details, you qualify for <strong>{activeCheckScheme.benefit}</strong> under {activeCheckScheme.title}.
                </p>
                <div className="bg-white p-3 rounded-xl text-left border border-emerald-100 text-xs text-slate-700 space-y-1">
                  <strong>Next Actions:</strong>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Visit nearest Common Service Centre (CSC) or official portal.</li>
                    <li>Keep documents ready: {activeCheckScheme.documents.join(', ')}.</li>
                  </ul>
                </div>
                <button
                  onClick={() => setActiveCheckScheme(null)}
                  className="bg-emerald-700 text-white font-bold text-xs py-2 px-6 rounded-xl"
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
