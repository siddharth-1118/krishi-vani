# 🏆 Hack for Social Cause — Project Submission & Pitch Guide

**Project Name:** कृषि वाणी (Krishi Vani) — AI Multilingual Farmer Voice Assistant & Scheme Navigator  
**Track:** Rural & Agri-Tech (Viksit Gramin Bharat @2047)  
**Organized By:** Ministry of Youth Affairs & Sports (MY Bharat) × IIT Bombay  
**Registration ID:** `HSC|TN|00193`  
**Team Name:** vss  
**Lead Participant:** Sai Siddharth Vooka  
**Institution:** SRM Institute of Science and Technology, Chengalpattu, Tamil Nadu  

---

## 1. 🎯 Executive Summary
India's agricultural sector sustains over half the nation's population, yet rural farmers frequently face severe challenges including high illiteracy, linguistic divides, delayed crop disease diagnosis, middleman exploitation in mandis, and lack of awareness of Direct Benefit Transfer (DBT) welfare schemes.

**Krishi Vani** solves this with a voice-first, vernacular AI platform that enables farmers to simply speak in their mother tongue to get real-time crop disease diagnosis, discover eligible government subsidies, and check live APMC mandi rates.

---

## 2. 🏛️ Alignment with Viksit Bharat @2047
Under the **Viksit Bharat 2047** vision:
- **Digital Empowerment:** Bridges the digital divide for semi-literate farmers using speech-to-text and audio feedback in Indian languages (Hindi, Telugu, Tamil, Kannada, Marathi, English).
- **Economic Resilience:** Eliminates middleman dependency by providing daily mandi price transparency and zero-fee access to welfare schemes (PM-KISAN, PMFBY, PM-KUSUM Solar Subsidies).
- **Sustainable Agriculture:** Detects pest and fungal infestations early to reduce chemical pesticide misuse and save crop yields.

---

## 3. 🧩 Core Modules & Features

| Module | Purpose | Tech Used |
|---|---|---|
| **Voice AI Assistant** | Voice query input & spoken audio response in regional Indian languages | Web Speech API (`SpeechRecognition` & `SpeechSynthesis`) |
| **Crop Disease Diagnostic** | Visual leaf analysis, symptom identification, and organic/chemical remedies | Computer Vision AI Pattern Classifier |
| **Govt Scheme Navigator** | Instant scheme matching, cash benefit calculator, and eligibility quiz | Rule-based Welfare Engine & DBT Portal Linking |
| **Mandi & Weather Dashboard** | Hourly APMC commodity prices, price trends, and hyperlocal agro-weather alerts | Agricultural Market Data Engine & Weather API Integration |

---

## 4. 🎬 3-Minute Live Jury Demo Script

1. **Introduction (30s):**
   - Introduce **Krishi Vani** and show the registration badge (`HSC|TN|00193`).
   - Highlight the language dropdown (Hindi, Telugu, Tamil, Kannada, Marathi, English).
2. **Voice Interaction (60s):**
   - Click the big microphone in the Voice Assistant tab.
   - Speak a query (e.g. *"PM-KISAN eligibility"* or click one of the quick prompts).
   - Demonstrate the AI response transcript and click **"Listen Audio (सुनें)"** for speech playback.
3. **Crop Leaf Disease Diagnostic (45s):**
   - Switch to **Crop Disease Diagnostic**.
   - Click one of the test leaf samples (e.g., *Tomato Leaf* or *Rice Leaf*).
   - Show the scanning animation and explain the resulting **Confidence Score**, **Organic Remedy**, and **Recommended Chemical Spray**.
4. **Govt Schemes & Mandi Rates (45s):**
   - Switch to **Govt Schemes Navigator** -> Click **"Check My Eligibility"** to show the interactive 3-step farmer quiz.
   - Switch to **Mandi Rates & Weather** to show live prices, price trend indicators (up/down), and weather advisories.

---

## 5. 🔮 Future Roadmap
- Integration with Government of India **Bhashini** APIs for 22 scheduled languages.
- Integration with **Agmarknet** and **e-NAM** real-time APIs.
- WhatsApp & IVR (Interactive Voice Response) phone call bridge for basic feature phones without internet.
