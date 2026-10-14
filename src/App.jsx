import React, { useState } from 'react';
import Header from './components/Header';
import VoiceAssistant from './components/VoiceAssistant';
import DiseaseDiagnostic from './components/DiseaseDiagnostic';
import SchemeNavigator from './components/SchemeNavigator';
import MandiWeatherDashboard from './components/MandiWeatherDashboard';
import { Award, Heart, Sparkles, Sprout } from 'lucide-react';

export default function App() {
  const [currentLang, setCurrentLang] = useState('hi-IN');
  const [activeTab, setActiveTab] = useState('assistant');

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-emerald-500 selection:text-white">
      
      {/* Header */}
      <Header
        currentLang={currentLang}
        setCurrentLang={setCurrentLang}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {activeTab === 'assistant' && <VoiceAssistant currentLang={currentLang} />}
        {activeTab === 'diagnostic' && <DiseaseDiagnostic />}
        {activeTab === 'schemes' && <SchemeNavigator />}
        {activeTab === 'mandi' && <MandiWeatherDashboard />}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-6 border-t border-slate-800 text-xs font-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <Sprout className="w-5 h-5 text-emerald-400" />
            <span className="font-bold text-white">कृषि वाणी (Krishi Vani)</span>
            <span className="text-slate-500">|</span>
            <span>Developed for MY Bharat "Hack for Social Cause"</span>
          </div>

          <div className="flex items-center space-x-4 text-slate-400">
            <span>Team VSS (SRM Institute of Science & Technology)</span>
            <span>•</span>
            <span className="flex items-center gap-1 text-emerald-400 font-semibold">
              <Award className="w-4 h-4" /> Registration: HSC|TN|00193
            </span>
          </div>
        </div>
      </footer>

    </div>
  );
}
