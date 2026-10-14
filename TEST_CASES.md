# 🧪 Sample Data & Test Cases
# कृषि वाणी (Krishi Vani)

This document provides structured test suites, sample data fixtures, expected behaviors, and verification checklists for all modules of **Krishi Vani**.

---

## 1. Test Suite Overview

| Test Suite ID | Module Under Test | Type | Target Environment |
|---|---|---|---|
| **TS-01** | Multilingual Voice AI Engine | Functional / UI | Chrome, Edge, Safari (Mobile/Desktop) |
| **TS-02** | Crop Disease Diagnostic Engine | Functional / CV | All browsers, Camera Uploads |
| **TS-03** | Government Scheme Navigator | Business Logic / Rules | All browsers |
| **TS-04** | Live Mandi & Weather Dashboard | Data Presentation / Filter | All browsers |
| **TS-05** | Responsiveness & Accessibility | Cross-Device & A11y | Android, iOS, Windows, Mac |

---

## 2. Test Cases & Sample Data

### Test Suite TS-01: Voice AI Engine & Multilingual Switching

#### Test Case TC-1.1: Language Switch & Initial Greeting Verification
- **Input:** Change Language dropdown from `हिंदी (Hindi)` to `తెలుగు (Telugu)`.
- **Expected Behavior:**
  - Active locale changes to `te-IN`.
  - Chat history appends Telugu greeting: *"నమస్కారం! నేను కృషి వాణి AI సహాయకుడిని..."*
  - Speech synthesis utterance locale updates to `te-IN`.
- **Status:** PASS

#### Test Case TC-1.2: Voice Input & Intent Resolution (Hindi)
- **Sample Voice Input:** *"मुझे पीएम किसान योजना के बारे में बताएं"* (Tell me about PM-KISAN scheme)
- **Expected Behavior:**
  - SpeechRecognition transcribes text in Hindi.
  - NLP engine classifies query as **Scheme Intent**.
  - System responds with PM-KISAN benefits (₹6,000 / year) and enables the **"Listen Audio (सुनें)"** TTS button.
- **Status:** PASS

#### Test Case TC-1.3: Voice Input & Mandi Rates Query (English)
- **Sample Voice Input:** *"What is the paddy mandi price today?"*
- **Expected Behavior:**
  - SpeechRecognition transcribes text in English.
  - NLP engine identifies **Mandi Rate Intent**.
  - System responds with current Anantapur / regional APMC Mandi rates (Paddy: ₹2,300 / Quintal).
- **Status:** PASS

---

### Test Suite TS-02: Crop Disease Diagnostic Engine

#### Test Case TC-2.1: Image Upload & Rice Blast Identification
- **Sample Test Image:** `rice_leaf_blast_sample.jpg` (or Preset Sample 1: Rice Leaf)
- **Symptoms Tested:** Spindle-shaped lesions with gray/white centers and reddish-brown margins.
- **Expected Output:**
  - **Identified Condition:** Rice Blast (*Magnaporthe oryzae*)
  - **Confidence:** $\ge 90\%$ (Reported: 94%)
  - **Organic Remedy:** Neem seed kernel extract (NSKE 5%) or *Pseudomonas fluorescens* @ 10g/L.
  - **Chemical Remedy:** Tricyclazole 75% WP @ 0.6 g/L.
  - **Prevention:** Avoid excess Nitrogen fertilization.
- **Status:** PASS

#### Test Case TC-2.2: Tomato Early Blight Identification
- **Sample Test Image:** `tomato_early_blight_sample.jpg` (or Preset Sample 2: Tomato Leaf)
- **Symptoms Tested:** Dark brown concentric target-like rings on lower leaves.
- **Expected Output:**
  - **Identified Condition:** Tomato Early Blight (*Alternaria solani*)
  - **Confidence:** $\ge 90\%$ (Reported: 91%)
  - **Organic Remedy:** Copper oxychloride or *Trichoderma viride* @ 5g/L.
  - **Chemical Remedy:** Mancozeb 75% WP @ 2g/L or Azoxystrobin @ 1ml/L.
- **Status:** PASS

#### Test Case TC-2.3: Fall Armyworm Infestation (Maize)
- **Sample Test Image:** `maize_fall_armyworm_sample.jpg` (or Preset Sample 3: Maize Whorl)
- **Expected Output:**
  - **Identified Condition:** Fall Armyworm (*Spodoptera frugiperda*)
  - **Confidence:** 88%
  - **Actionable Remedy:** Release *Trichogramma pretiosum* or spray Emamectin benzoate 5% SG.
- **Status:** PASS

---

### Test Suite TS-03: Government Scheme Matching Engine

#### Test Case TC-3.1: Small Farmer Eligibility Check (PM-KISAN)
- **Input Parameters:**
  - Landholding: Individual Owned Land (< 2 Hectares)
  - Aadhaar DBT Status: Active
  - State: Andhra Pradesh / Tamil Nadu
- **Expected Result:**
  - Status: **Eligible** (100% Match)
  - Displayed Benefit: ₹6,000 / year in 3 equal installments.
  - Document Checklist: Aadhaar Card, Land Record (Khata/Khasra), Active Bank Passbook.
- **Status:** PASS

#### Test Case TC-3.2: Filter Schemes by Tag
- **Input:** Click category filter `Crop Insurance`
- **Expected Result:**
  - Filtered view displays only **PMFBY (Pradhan Mantri Fasal Bima Yojana)**.
  - Excludes non-insurance schemes (e.g. Solar Pump, Soil Health Card).
- **Status:** PASS

---

### Test Suite TS-04: Live Mandi Rates & Agro-Weather Dashboard

#### Test Case TC-4.1: Mandi Price Search & Filter
- **Input Search String:** `"Cotton"`
- **Expected Result:**
  - Returns: Cotton (Kapas) at Guntur APMC, Andhra Pradesh.
  - Price: ₹7,150 / Quintal.
  - Trend: `up` (+₹120 / Quintal) marked with green arrow.
- **Status:** PASS

#### Test Case TC-4.2: Weather Alert Display
- **Expected Metrics:**
  - Temperature: 31°C (Partly Cloudy)
  - Humidity: 68%
  - Wind Speed: 14 km/h
  - Precipitation Probability: 20%
  - Advisory banner renders groundnut & paddy sowing recommendations.
- **Status:** PASS

---

## 3. Sample Data Fixtures (`src/data/mockData.js`)

Below is the verified sample dataset loaded into the application:

### Sample Commodities (APMC Mandis)
```json
[
  { "crop": "Paddy (Dhan - Common)", "market": "Anantapur APMC", "state": "Andhra Pradesh", "price": "₹2,300 / Quintal", "trend": "up", "change": "+₹45" },
  { "crop": "Wheat (Gehun)", "market": "Kurnool APMC", "state": "Andhra Pradesh", "price": "₹2,450 / Quintal", "trend": "stable", "change": "0" },
  { "crop": "Cotton (Kapas)", "market": "Guntur APMC", "state": "Andhra Pradesh", "price": "₹7,150 / Quintal", "trend": "up", "change": "+₹120" },
  { "crop": "Red Tomato", "market": "Madanapalle APMC", "state": "Andhra Pradesh", "price": "₹1,850 / Quintal", "trend": "down", "change": "-₹80" },
  { "crop": "Groundnut (Peanut)", "market": "Kadapa APMC", "state": "Andhra Pradesh", "price": "₹6,400 / Quintal", "trend": "up", "change": "+₹60" },
  { "crop": "Maize (Makka)", "market": "Koyambedu APMC", "state": "Tamil Nadu", "price": "₹2,100 / Quintal", "trend": "up", "change": "+₹30" }
]
```

### Sample Welfare Schemes
```json
[
  { "id": "pm-kisan", "title": "PM-KISAN", "benefit": "₹6,000 / year direct benefit", "tag": "Central Government" },
  { "id": "pmfby", "title": "PMFBY Crop Insurance", "benefit": "Comprehensive natural disaster crop risk coverage", "tag": "Crop Insurance" },
  { "id": "pm-kusum", "title": "PM-KUSUM Solar Pump", "benefit": "Up to 90% subsidy for agricultural solar pumps", "tag": "Energy Initiative" },
  { "id": "soil-health-card", "title": "Soil Health Card", "benefit": "Free soil test & fertilizer recommendation", "tag": "Free Service" }
]
```
