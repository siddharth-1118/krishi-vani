import React, { useState } from 'react';
import { TrendingUp, TrendingDown, Minus, CloudSun, Wind, Droplets, MapPin, Search, ShieldAlert, Thermometer, Bell } from 'lucide-react';
import { MANDI_RATES } from '../data/mockData';

export default function MandiWeatherDashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMarket, setSelectedMarket] = useState('All');

  const filteredRates = MANDI_RATES.filter((item) => {
    const matchesSearch = item.crop.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.market.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.state.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesMarket = selectedMarket === 'All' || item.market === selectedMarket;
    return matchesSearch && matchesMarket;
  });

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      
      {/* Weather Advisory Hero */}
      <div className="bg-gradient-to-r from-sky-900 via-indigo-900 to-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-md relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 bg-sky-800/80 px-3 py-1 rounded-full text-xs font-semibold text-sky-200">
              <CloudSun className="w-4 h-4 text-amber-300" /> Hyperlocal Agro-Weather & Advisory
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold flex items-center gap-2">
              <MapPin className="w-6 h-6 text-sky-400" /> Anantapur / Chengalpattu Region
            </h2>
            <p className="text-sky-100 text-sm max-w-lg">
              Live weather monitoring for optimal irrigation, sowing, and harvesting decisions.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 flex items-center gap-6 shrink-0">
            <div className="text-center">
              <span className="text-3xl font-extrabold text-amber-300">31°C</span>
              <span className="block text-[11px] text-sky-200 font-semibold">Partly Cloudy</span>
            </div>
            <div className="space-y-1 text-xs text-sky-100 border-l border-white/20 pl-4 font-medium">
              <div className="flex items-center gap-1">
                <Droplets className="w-3.5 h-3.5 text-sky-300" /> Humidity: 68%
              </div>
              <div className="flex items-center gap-1">
                <Wind className="w-3.5 h-3.5 text-sky-300" /> Wind: 14 km/h
              </div>
              <div className="flex items-center gap-1">
                <Thermometer className="w-3.5 h-3.5 text-amber-300" /> Rainfall Probability: 20%
              </div>
            </div>
          </div>
        </div>

        {/* Agro-weather Advisory Alert */}
        <div className="mt-4 bg-amber-500/20 border border-amber-400/30 rounded-2xl p-3.5 text-xs text-amber-100 flex items-center gap-3">
          <Bell className="w-5 h-5 text-amber-300 shrink-0 animate-bounce" />
          <span>
            <strong>Farming Advisory:</strong> Moderate temperatures predicted for the next 48 hours. Favorable conditions for groundnut & paddy sowing. Avoid heavy pesticide spraying during mid-day heat.
          </span>
        </div>
      </div>

      {/* Live Mandi Commodity Rates */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <h3 className="font-extrabold text-slate-900 text-lg flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-emerald-600" /> Live APMC Mandi Commodity Prices
            </h3>
            <p className="text-xs text-slate-500">Updated hourly from national agricultural market portals (Agmarknet)</p>
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Filter crops or mandi..."
              className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-300 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        </div>

        {/* Mandi Cards Table Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
          {filteredRates.map((item, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-2xl p-4 bg-slate-50/50 hover:bg-white hover:shadow-md transition-all space-y-2"
            >
              <div className="flex items-center justify-between">
                <span className="bg-emerald-100 text-emerald-800 text-[10px] font-extrabold px-2 py-0.5 rounded-md">
                  {item.state}
                </span>
                <span className="text-[11px] font-semibold text-slate-400">{item.market}</span>
              </div>

              <h4 className="font-bold text-slate-900 text-base">{item.crop}</h4>

              <div className="flex items-baseline justify-between pt-1 border-t border-slate-200/60">
                <span className="text-lg font-extrabold text-emerald-700">{item.price}</span>
                
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full flex items-center gap-1 ${
                  item.trend === 'up'
                    ? 'bg-emerald-100 text-emerald-700'
                    : item.trend === 'down'
                    ? 'bg-rose-100 text-rose-700'
                    : 'bg-slate-200 text-slate-700'
                }`}>
                  {item.trend === 'up' && <TrendingUp className="w-3.5 h-3.5" />}
                  {item.trend === 'down' && <TrendingDown className="w-3.5 h-3.5" />}
                  {item.trend === 'stable' && <Minus className="w-3.5 h-3.5" />}
                  {item.change}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
