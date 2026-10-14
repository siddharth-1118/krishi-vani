import React, { useState } from 'react';
import { UploadCloud, CheckCircle, ShieldAlert, Sparkles, RefreshCw, AlertTriangle, Info, Sprout } from 'lucide-react';
import { SAMPLE_DISEASES } from '../data/mockData';

export default function DiseaseDiagnostic() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
        analyzeImage(0); // analyze sample 0
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSampleClick = (index) => {
    // Mock sample images
    const sampleImages = [
      'https://images.unsplash.com/photo-1592417817098-8f3d6eb247a5?auto=format&fit=crop&w=600&q=80', // Rice/plant
      'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e17?auto=format&fit=crop&w=600&q=80', // Tomato leaf
      'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=600&q=80', // Corn/Maize
    ];

    setSelectedImage(sampleImages[index]);
    analyzeImage(index);
  };

  const analyzeImage = (diseaseIdx) => {
    setIsAnalyzing(true);
    setResult(null);

    setTimeout(() => {
      setIsAnalyzing(false);
      setResult(SAMPLE_DISEASES[diseaseIdx] || SAMPLE_DISEASES[0]);
    }, 1200);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      
      {/* Top Banner */}
      <div className="bg-emerald-900 text-white rounded-3xl p-6 sm:p-8 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 bg-emerald-800 text-emerald-200 px-3 py-1 rounded-full text-xs font-semibold">
            <Sparkles className="w-4 h-4 text-amber-300" /> Computer Vision & AI Diagnostics
          </div>
          <h2 className="text-2xl font-extrabold">Instant Crop Leaf Disease Detection</h2>
          <p className="text-emerald-100 text-sm max-w-lg">
            Upload or snap a picture of your affected crop leaf to get instant AI identification, organic remedies, and chemical spray guidelines.
          </p>
        </div>
        <div className="bg-emerald-800/80 p-4 rounded-2xl border border-emerald-700 shrink-0 text-center">
          <Sprout className="w-10 h-10 text-emerald-300 mx-auto mb-1" />
          <span className="text-xs font-bold text-emerald-200">Supports 30+ Crops</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Upload & Sample Section */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
          <h3 className="font-bold text-slate-800 text-lg">1. Upload Leaf Photo</h3>
          
          <label className="border-2 border-dashed border-emerald-300 hover:border-emerald-500 bg-emerald-50/50 hover:bg-emerald-50 rounded-2xl p-6 flex flex-col items-center justify-center cursor-pointer transition-all">
            <UploadCloud className="w-12 h-12 text-emerald-600 mb-2" />
            <span className="text-sm font-bold text-emerald-950">Click or Drag photo here</span>
            <span className="text-xs text-slate-500 mt-1">Supports JPG, PNG, WEBP from mobile camera</span>
            <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
          </label>

          {/* Preset Sample Photos */}
          <div className="pt-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">Or test with sample leaf photos:</span>
            <div className="grid grid-cols-3 gap-2">
              {[
                { name: 'Rice Leaf', idx: 0 },
                { name: 'Tomato Leaf', idx: 1 },
                { name: 'Maize Whorl', idx: 2 }
              ].map((sample) => (
                <button
                  key={sample.idx}
                  onClick={() => handleSampleClick(sample.idx)}
                  className="bg-slate-100 hover:bg-emerald-100 text-slate-700 hover:text-emerald-900 border border-slate-200 rounded-xl p-2 text-xs font-semibold transition-all text-center"
                >
                  🌾 {sample.name}
                </button>
              ))}
            </div>
          </div>

          {/* Selected Image Preview */}
          {selectedImage && (
            <div className="mt-4 rounded-2xl overflow-hidden border border-slate-200 relative max-h-56 bg-slate-900">
              <img src={selectedImage} alt="Crop sample" className="w-full h-48 object-cover opacity-90" />
              {isAnalyzing && (
                <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-xs flex flex-col items-center justify-center text-white space-y-2">
                  <RefreshCw className="w-8 h-8 text-emerald-400 animate-spin" />
                  <span className="text-xs font-bold">Scanning leaf symptoms & patterns...</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Diagnosis Result Card */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-slate-800 text-lg mb-4 flex items-center justify-between">
              <span>2. AI Diagnostic Report</span>
              {result && (
                <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full border border-emerald-200">
                  Confidence: {result.confidence}
                </span>
              )}
            </h3>

            {!result && !isAnalyzing && (
              <div className="h-64 flex flex-col items-center justify-center text-center text-slate-400 p-6 border-2 border-dashed border-slate-200 rounded-2xl">
                <Info className="w-10 h-10 mb-2 opacity-50" />
                <p className="text-sm font-medium">Upload a leaf photo or pick a sample to view detailed disease diagnosis and remedies.</p>
              </div>
            )}

            {isAnalyzing && (
              <div className="h-64 flex flex-col items-center justify-center text-center text-slate-500 space-y-3">
                <RefreshCw className="w-8 h-8 text-emerald-600 animate-spin" />
                <p className="text-sm font-semibold">Running Computer Vision Model on Crop Symptoms...</p>
              </div>
            )}

            {result && !isAnalyzing && (
              <div className="space-y-4">
                <div className="bg-rose-50 border border-rose-200 p-4 rounded-2xl">
                  <span className="text-xs font-bold text-rose-600 uppercase">Detected Condition</span>
                  <h4 className="text-lg font-bold text-rose-900">{result.name}</h4>
                  <p className="text-xs font-semibold text-slate-600 mt-1">Affecting Crop: <span className="text-slate-900">{result.crop}</span></p>
                  <p className="text-xs text-slate-700 mt-2 font-medium"><strong>Symptoms:</strong> {result.symptoms}</p>
                </div>

                {/* Organic Treatment */}
                <div className="bg-emerald-50 border border-emerald-200 p-3.5 rounded-xl text-xs space-y-1">
                  <div className="font-bold text-emerald-900 flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-emerald-600" /> Organic Treatment (जैविक उपाय)
                  </div>
                  <p className="text-emerald-800 font-medium">{result.organicRemedy}</p>
                </div>

                {/* Chemical Spray */}
                <div className="bg-amber-50 border border-amber-200 p-3.5 rounded-xl text-xs space-y-1">
                  <div className="font-bold text-amber-900 flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4 text-amber-600" /> Recommended Spray (रासायनिक छिड़काव)
                  </div>
                  <p className="text-amber-800 font-medium">{result.chemicalRemedy}</p>
                </div>
              </div>
            )}
          </div>

          {result && (
            <div className="pt-4 border-t border-slate-100 mt-4">
              <span className="text-xs font-bold text-slate-500">Prevention Tip:</span>
              <p className="text-xs text-slate-600 font-medium">{result.prevention}</p>
            </div>
          )}
        </div>

      </div>

    </div>
  );
}
