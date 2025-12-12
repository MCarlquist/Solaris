# **Sonaris**  
*A creative intelligence for musicians — combining sound, structure, and storytelling.*

Sonaris is a **local-first Tauri 2.0 desktop application** that helps musicians turn fragments of inspiration into fully formed musical ideas.  
Record a riff, type a chord, whisper a melody, or drop in a lyric — Sonaris listens, interprets, and helps you expand it through guided harmonic, melodic, and lyrical suggestions powered by **Gemini**.

---

## 🎯 What Sonaris Does
- Record short **guitar riffs** and extract musical information  
- Analyze notes and detect **scales, modes, and tonal centers**  
- Generate **chord progressions** from a chosen or detected starting chord  
- Suggest **alternate harmonic paths** (modal, extended, tension-rich)  
- Generate **lyric ideas, keywords, imagery, and full stanzas**  
- Produce **melodic suggestions** using solfège, scale degrees, or expressive cues  
- Let users work from:
  - recorded guitar input  
  - typed chords  
  - typed lyric seeds  
  - selected styles (folk, ambient, jazz, prog, etc.)

---

## 🌌 Philosophy

### **1. Capture First, Understand Later**  
Ideas come fast. Sonaris lets you record immediately — interpretation comes after.

### **2. Creativity Emerges from Dialogue**  
You don’t simply generate ideas — you converse with them.  
Sonaris provides harmonic pathways, melodic contours, poetic imagery, and narrative expansions.

---

## 🛠️ Tech Stack

### **Frontend**  
- React  
- TailwindCSS  
- Shadcn/UI  
- Framer Motion  

### **Backend (Tauri 2.0)**  
- Rust audio utilities  
- DSP (`aubio`, `fundsp`)  
- SQLite (local idea storage)

### **AI Layer**  
- **Google Gemini** for:
  - chord suggestions  
  - progression building  
  - lyrical construction  
  - melodic generation  
  - style/genre interpretation  

---

## 🎵 Core Features

### **🎧 Recording & Analysis**
- Audio recording (guitar, humming, voice)  
- Silence trimming  
- Pitch extraction  
- Tonal/mode detection  

### **🎹 Chord Progression Engine**
- Type or select a starting chord  
- Or let Sonaris detect one from audio  
- Generate progressions by:
  - style  
  - emotion  
  - mode  
  - complexity  

### **📝 Lyrics & Imagery**
- Generate keywords based on mood  
- Create lyrical stanzas  
- Expand or rewrite existing lines  
- Build thematic palettes  

### **🎶 Melody Generator**
- Produce melodic lines using scale degrees or solfège  
- Provide expressive variants  
- Generate simple, expressive, and tension-driven options  

### **🗂️ Song Seeds Library**
Each seed stores:
- audio  
- detected scale  
- chord progression  
- lyrics  
- keywords  
- mood/style  
- timestamp  

---

## 🔧 Installation (Development)

### **1. Clone the project**
```bash
git clone https://github.com/yourusername/sonaris.git
cd sonaris
