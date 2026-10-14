export const LANGUAGES = [
  { code: 'hi-IN', name: 'हिंदी (Hindi)', label: 'हिंदी' },
  { code: 'te-IN', name: 'తెలుగు (Telugu)', label: 'తెలుగు' },
  { code: 'ta-IN', name: 'தமிழ் (Tamil)', label: 'தமிழ்' },
  { code: 'kn-IN', name: 'கன்னட (Kannada)', label: 'ಕನ್ನಡ' },
  { code: 'mr-IN', name: 'मराठी (Marathi)', label: 'मराठी' },
  { code: 'en-IN', name: 'English (India)', label: 'English' },
];

export const SCHEMES = [
  {
    id: 'pm-kisan',
    title: 'PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)',
    category: 'Income Support',
    benefit: '₹6,000 / year in 3 equal installments directly into bank account',
    eligibility: 'All small & marginal landholding farmer families across India.',
    documents: ['Aadhaar Card', 'Land Ownership Records (Khata/Khasra)', 'Bank Account Details'],
    officialUrl: 'https://pmkisan.gov.in',
    tag: 'Central Government'
  },
  {
    id: 'pmfby',
    title: 'PMFBY (Pradhan Mantri Fasal Bima Yojana)',
    category: 'Crop Insurance',
    benefit: 'Comprehensive risk insurance coverage against non-preventable natural risks from pre-sowing to post-harvest.',
    eligibility: 'Farmers including sharecroppers and tenant farmers growing notified crops in notified areas.',
    documents: ['Aadhaar Card', 'Land Record (Sowing certificate)', 'Bank Passbook'],
    officialUrl: 'https://pmfby.gov.in',
    tag: 'Central Government'
  },
  {
    id: 'pm-kusum',
    title: 'PM-KUSUM Solar Pump Subsidy Scheme',
    category: 'Energy & Irrigation',
    benefit: 'Up to 90% subsidy (60% Govt subsidy + 30% bank loan) for installing standalone solar agriculture pumps.',
    eligibility: 'Individual farmers, farmer groups, cooperatives, and panchayats with agricultural land.',
    documents: ['Aadhaar Card', 'Land Ownership Documents', 'Bank Account', 'Electricity Connection Details'],
    officialUrl: 'https://pmkusum.mnre.gov.in',
    tag: 'Energy Initiative'
  },
  {
    id: 'soil-health-card',
    title: 'Soil Health Card Scheme (Mridaparikshak)',
    category: 'Soil Care & Fertilizer',
    benefit: 'Free soil testing & customized fertilizer advice for crop nutrient management every 2 years.',
    eligibility: 'All farmers across India.',
    documents: ['Aadhaar Card', 'Soil Sample details'],
    officialUrl: 'https://soilhealth.dac.gov.in',
    tag: 'Free Service'
  },
  {
    id: 'micro-irrigation',
    title: 'Per Drop More Crop (Micro Irrigation Scheme)',
    category: 'Drip & Sprinkler',
    benefit: '55% to 45% financial subsidy on installation of Drip & Sprinkler irrigation systems.',
    eligibility: 'Small & marginal farmers prioritized; open to all landowning farmers.',
    documents: ['Land Records', 'Aadhaar Card', 'Water source verification'],
    officialUrl: 'https://pmksy.gov.in',
    tag: 'Subsidy'
  }
];

export const MANDI_RATES = [
  { crop: 'Paddy (Dhan - Common)', market: 'Anantapur APMC', state: 'Andhra Pradesh', price: '₹2,300 / Quintal', trend: 'up', change: '+₹45' },
  { crop: 'Wheat (Gehun)', market: 'Kurnool APMC', state: 'Andhra Pradesh', price: '₹2,450 / Quintal', trend: 'stable', change: '0' },
  { crop: 'Cotton (Kapas)', market: 'Guntur APMC', state: 'Andhra Pradesh', price: '₹7,150 / Quintal', trend: 'up', change: '+₹120' },
  { crop: 'Red Tomato', market: 'Madanapalle APMC', state: 'Andhra Pradesh', price: '₹1,850 / Quintal', trend: 'down', change: '-₹80' },
  { crop: 'Groundnut (Peanut)', market: 'Kadapa APMC', state: 'Andhra Pradesh', price: '₹6,400 / Quintal', trend: 'up', change: '+₹60' },
  { crop: 'Maize (Makka)', market: 'Koyambedu APMC', state: 'Tamil Nadu', price: '₹2,100 / Quintal', trend: 'up', change: '+₹30' },
];

export const SAMPLE_DISEASES = [
  {
    name: 'Rice Blast (Magnaporthe oryzae)',
    crop: 'Paddy / Rice',
    confidence: '94%',
    symptoms: 'Spindle-shaped spots on leaves with gray/white centers and reddish-brown margins.',
    organicRemedy: 'Apply neem seed kernel extract (NSKE 5%) or Pseudomonas fluorescens @ 10g/litre.',
    chemicalRemedy: 'Spray Tricyclazole 75% WP @ 0.6 g/litre of water upon first notice of leaf lesions.',
    prevention: 'Avoid excessive Nitrogen fertilizer; maintain balanced N-P-K levels.'
  },
  {
    name: 'Tomato Early Blight (Alternaria solani)',
    crop: 'Tomato',
    confidence: '91%',
    symptoms: 'Concentric rings forming target-like dark spots on lower mature leaves.',
    organicRemedy: 'Spray Copper oxychloride or Trichoderma viride @ 5g/litre.',
    chemicalRemedy: 'Spray Mancozeb 75% WP @ 2g/litre or Azoxystrobin @ 1ml/litre.',
    prevention: 'Ensure drip irrigation to keep foliage dry and practice crop rotation.'
  },
  {
    name: 'Fall Armyworm (Spodoptera frugiperda)',
    crop: 'Maize / Corn',
    confidence: '88%',
    symptoms: 'Pin-hole damage on young leaves and frass inside the central leaf whorl.',
    organicRemedy: 'Release Trichogramma pretiosum egg parasitoids @ 50,000/acre.',
    chemicalRemedy: 'Apply Emamectin benzoate 5% SG @ 0.4 g/litre in the central whorl.',
    prevention: 'Install pheromone traps @ 4 per acre for early pest monitoring.'
  }
];

export const MOCK_VOICE_RESPONSES = {
  'hi-IN': {
    welcome: 'नमस्ते! मैं कृषि वाणी हूँ। मैं आपकी फसल, मंडी भाव और सरकारी योजनाओं में मदद कर सकता हूँ। आप मुझसे क्या पूछना चाहते हैं?',
    diseasePrompt: 'कृपया अपनी फसल के पत्ते का फोटो अपलोड करें। हमारी AI तुरंत बीमारी की जांच कर उपाय बताएगी।',
    schemePrompt: 'पीएम किसान और फसल बीमा योजना के तहत आपको ₹6000 और फसल सुरक्षा मिल सकती है। क्या आप पात्रता जांचना चाहते हैं?',
    mandiPrompt: 'आज आपकी नजदीकी मंडी में धान ₹2300 प्रति क्विंटल और कपास ₹7150 प्रति क्विंटल चल रहा है।'
  },
  'te-IN': {
    welcome: 'నమస్కారం! నేను కృషి వాణి AI సహాయకుడిని. పంట వ్యాధులు, మార్కెట్ ధరలు మరియు ప్రభుత్వ పథకాల వివరాలకు నేను మీకు సహాయం చేస్తాను.',
    diseasePrompt: 'దయచేసి మీ పంట ఆకు ఫోటోను అప్‌లోడ్ చేయండి. మా AI తక్షణమే నివారణ ఉపాయాలు అందిస్తుంది.',
    schemePrompt: 'పీఎం కిసాన్ మరియు పంట బీమా పథకాల వివరాలు పరిశీలించండి. మీకు రూ. 6000 లబ్ధి పొందవచ్చు.',
    mandiPrompt: 'నేడు అనంతపురం మార్కెట్లో వరి క్వింటాలు ₹2,300, పత్తి క్వింటాలు ₹7,150 గా ఉంది.'
  },
  'en-IN': {
    welcome: 'Hello! I am Krishi Vani AI. I can assist you with crop health diagnosis, live market rates, and government schemes.',
    diseasePrompt: 'Please upload a photo of your crop leaf. Our AI will analyze symptoms and provide remedies instantly.',
    schemePrompt: 'You can check eligibility for PM-KISAN (₹6000/yr), PMFBY Crop Insurance, and Solar Pump subsidies.',
    mandiPrompt: 'Today\'s Paddy rate is ₹2,300/Quintal and Cotton is ₹7,150/Quintal in your regional APMC mandi.'
  }
};
