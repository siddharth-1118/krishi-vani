import React, { useState, useEffect } from 'react';
import { Mic, MicOff, Volume2, VolumeX, Send, Sparkles, Sprout, ShieldAlert, FileText, TrendingUp, HelpCircle } from 'lucide-react';
import { MOCK_VOICE_RESPONSES, LANGUAGES } from '../data/mockData';

export default function VoiceAssistant({ currentLang }) {
  const [isListening, setIsListening] = useState(false);
  const [queryText, setQueryText] = useState('');
  const [chatHistory, setChatHistory] = useState([
    {
      sender: 'ai',
      text: MOCK_VOICE_RESPONSES[currentLang]?.welcome || MOCK_VOICE_RESPONSES['en-IN'].welcome,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Update initial AI greeting when language changes
  useEffect(() => {
    const greeting = MOCK_VOICE_RESPONSES[currentLang]?.welcome || MOCK_VOICE_RESPONSES['en-IN'].welcome;
    setChatHistory((prev) => [
      ...prev,
      {
        sender: 'ai',
        text: greeting,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  }, [currentLang]);

  // Handle Speech Recognition
  const toggleListening = () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      alert('Speech Recognition is not supported in this browser. You can type your query in the input box below!');
      return;
    }

    if (isListening) {
      setIsListening(false);
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.lang = currentLang;
    recognition.interimResults = true;
    recognition.continuous = false;

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');
      setQueryText(transcript);
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  // Handle Text to Speech
  const speakText = (text) => {
    if (!('speechSynthesis' in window)) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = currentLang;
    utterance.rate = 0.95;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  // Generate AI Response
  const handleSend = (textToSend) => {
    const input = textToSend || queryText;
    if (!input.trim()) return;

    const userMessage = {
      sender: 'user',
      text: input,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setChatHistory((prev) => [...prev, userMessage]);
    setQueryText('');

    // Generate response based on intent
    setTimeout(() => {
      let aiResponseText = '';
      const lower = input.toLowerCase();

      if (lower.includes('bima') || lower.includes('scheme') || lower.includes('kisan') || lower.includes('योजना') || lower.includes('పథకం')) {
        aiResponseText = MOCK_VOICE_RESPONSES[currentLang]?.schemePrompt || MOCK_VOICE_RESPONSES['en-IN'].schemePrompt;
      } else if (lower.includes('mandi') || lower.includes('price') || lower.includes(' rate') || lower.includes('भाव') || lower.includes('ధర')) {
        aiResponseText = MOCK_VOICE_RESPONSES[currentLang]?.mandiPrompt || MOCK_VOICE_RESPONSES['en-IN'].mandiPrompt;
      } else if (lower.includes('disease') || lower.includes('leaf') || lower.includes('pest') || lower.includes('बीमारी') || lower.includes('వ్యాధి')) {
        aiResponseText = MOCK_VOICE_RESPONSES[currentLang]?.diseasePrompt || MOCK_VOICE_RESPONSES['en-IN'].diseasePrompt;
      } else {
        if (currentLang === 'hi-IN') {
          aiResponseText = `आपकी जिज्ञासा "${input}" के लिए: हमारी कृषि सलाह टीम आपको सलाह देती है कि मिट्टी नमी की जाँच करें एवं नीम तेल (5ml/L) का छिड़काव करें।`;
        } else if (currentLang === 'te-IN') {
          aiResponseText = `మీ ప్రశ్న "${input}" సంబంధించి: దయచేసి నేల తేమను పరిశీలించి, అవసరమైన నీటి యాజమాన్యం మరియు కీటక నివారణ చర్యలు తీసుకోండి.`;
        } else {
          aiResponseText = `Regarding your query "${input}": Our expert agro-advisory recommends checking soil moisture and applying organic neem oil solution (5ml/L) for general crop protection.`;
        }
      }

      const aiMessage = {
        sender: 'ai',
        text: aiResponseText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setChatHistory((prev) => [...prev, aiMessage]);
      speakText(aiResponseText);
    }, 600);
  };

  const quickPrompts = [
    { text: 'PM-KISAN ₹6000 details?', icon: FileText },
    { text: 'Paddy Mandi prices today', icon: TrendingUp },
    { text: 'Identify tomato leaf spots', icon: ShieldAlert },
    { text: 'Solar pump 90% subsidy', icon: Sprout },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      
      {/* Voice Assistant Primary Action Card */}
      <div className="bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>
        
        <div className="text-center max-w-xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-emerald-700/60 px-3 py-1 rounded-full text-xs font-semibold text-emerald-200 border border-emerald-500/30">
            <Sparkles className="w-4 h-4 text-amber-300" /> Powered by Voice AI & Bhashini Specs
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold">
            बोलें और अपनी भाषा में समाधान पाएँ
          </h2>
          <p className="text-emerald-100/90 text-sm">
            Tap the microphone and speak naturally in your native language about crops, diseases, subsidies, or mandi rates.
          </p>

          {/* Big Microphone Button */}
          <div className="pt-2 pb-4 flex flex-col items-center justify-center">
            <button
              onClick={toggleListening}
              className={`w-24 h-24 rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl ${
                isListening
                  ? 'bg-rose-500 text-white listening-pulse scale-110'
                  : 'bg-emerald-400 hover:bg-emerald-300 text-emerald-950 hover:scale-105'
              }`}
            >
              {isListening ? (
                <MicOff className="w-10 h-10 animate-pulse" />
              ) : (
                <Mic className="w-10 h-10" />
              )}
            </button>
            <span className="mt-3 text-xs font-bold tracking-wider uppercase text-emerald-200">
              {isListening ? '🎙️ Listening... Speak Now' : 'Click to Speak (माइक दबाएँ)'}
            </span>
          </div>

          {/* Quick Prompts */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
            {quickPrompts.map((prompt, idx) => {
              const Icon = prompt.icon;
              return (
                <button
                  key={idx}
                  onClick={() => handleSend(prompt.text)}
                  className="bg-emerald-950/40 hover:bg-emerald-700/50 text-emerald-100 text-xs py-2 px-3 rounded-xl border border-emerald-500/30 flex items-center gap-1.5 transition-all text-left"
                >
                  <Icon className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                  <span className="truncate">{prompt.text}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Chat Transcript Area */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 space-y-4">
        <h3 className="font-bold text-slate-800 text-lg flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-emerald-600" /> Live Conversation Transcript
        </h3>

        <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
          {chatHistory.map((msg, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                msg.sender === 'user' ? 'items-end' : 'items-start'
              }`}
            >
              <div
                className={`max-w-[85%] rounded-2xl p-4 shadow-sm ${
                  msg.sender === 'user'
                    ? 'bg-emerald-700 text-white rounded-br-none'
                    : 'bg-slate-100 text-slate-800 border border-slate-200/80 rounded-bl-none'
                }`}
              >
                <div className="flex items-center justify-between gap-4 mb-1">
                  <span className="text-xs font-bold opacity-75">
                    {msg.sender === 'user' ? '👨‍🌾 You (Farmer)' : '🤖 Krishi Vani AI'}
                  </span>
                  <span className="text-[10px] opacity-60">{msg.timestamp}</span>
                </div>
                <p className="text-sm font-medium leading-relaxed">{msg.text}</p>
                
                {msg.sender === 'ai' && (
                  <button
                    onClick={() => speakText(msg.text)}
                    className="mt-2 text-xs font-semibold text-emerald-700 hover:text-emerald-900 flex items-center gap-1 bg-white px-2.5 py-1 rounded-lg border border-emerald-200 shadow-2xs"
                  >
                    {isSpeaking ? <VolumeX className="w-3.5 h-3.5 text-rose-600" /> : <Volume2 className="w-3.5 h-3.5 text-emerald-600" />}
                    Listen Audio (सुनें)
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Text Input Bar */}
        <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
          <input
            type="text"
            value={queryText}
            onChange={(e) => setQueryText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your question or query here (या यहाँ लिखें)..."
            className="flex-1 bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium"
          />
          <button
            onClick={() => handleSend()}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-xl font-bold text-sm transition-all flex items-center gap-1.5 shadow-sm"
          >
            <span>Send</span> <Send className="w-4 h-4" />
          </button>
        </div>
      </div>

    </div>
  );
}
