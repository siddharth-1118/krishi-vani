import React from 'react';
import { Sprout, Mic, ShieldAlert, Award, Globe, Sparkles } from 'lucide-react';
import { LANGUAGES } from '../data/mockData';

export default function Header({ currentLang, setCurrentLang, activeTab, setActiveTab }) {
  return (
    <header className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-green-800 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          
          {/* Brand Logo & Tagline */}
          <div className="flex items-center space-x-3">
            <div className="bg-white/10 p-2.5 rounded-2xl backdrop-blur-md border border-white/20 shadow-inner">
              <Sprout className="w-8 h-8 text-emerald-300" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-2xl font-extrabold tracking-tight text-white">कृषि वाणी <span className="text-emerald-300 font-semibold text-lg">Krishi Vani</span></h1>
                <span className="bg-amber-400 text-emerald-950 font-bold text-xs px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                  <Award className="w-3.5 h-3.5" /> MY Bharat Hackathon
                </span>
              </div>
              <p className="text-xs text-emerald-100/90 font-medium">Multilingual AI Voice Assistant & Scheme Navigator for Farmers</p>
            </div>
          </div>

          {/* Right Controls: Language Selector */}
          <div className="flex items-center space-x-3 self-end md:self-auto">
            <div className="flex items-center bg-emerald-900/60 rounded-xl px-3 py-1.5 border border-emerald-500/40 text-sm">
              <Globe className="w-4 h-4 text-emerald-300 mr-2 shrink-0" />
              <select
                value={currentLang}
                onChange={(e) => setCurrentLang(e.target.value)}
                className="bg-transparent text-white font-medium focus:outline-none cursor-pointer pr-2"
              >
                {LANGUAGES.map((lang) => (
                  <option key={lang.code} value={lang.code} className="text-slate-900 font-medium">
                    {lang.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

        </div>

        {/* Navigation Tabs */}
        <nav className="flex space-x-2 mt-4 pt-2 border-t border-emerald-600/50 overflow-x-auto no-scrollbar">
          {[
            { id: 'assistant', label: '🎙️ Voice AI Assistant' },
            { id: 'diagnostic', label: '🌿 Crop Disease Diagnostic' },
            { id: 'schemes', label: '🏛️ Govt Schemes Navigator' },
            { id: 'mandi', label: '📈 Mandi Rates & Weather' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 ${
                activeTab === tab.id
                  ? 'bg-white text-emerald-900 shadow-md font-bold'
                  : 'text-emerald-100 hover:bg-emerald-600/40'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
