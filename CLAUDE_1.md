# CLAUDE.md — steffir.com
# Claude Code reads this file automatically on startup.
# Do not delete or rename this file.

---

## Stack & Structure
- Framework: [fill in — Jekyll / Next.js / plain HTML / Astro / Hugo / etc.]
- Content lives in: [fill in — e.g. _pages/, content/, src/pages/, index.html]
- Styles: [fill in — e.g. CSS file path, Tailwind, SCSS]
- Images: [fill in — e.g. /images/ or /public/images/]
- CV file: [fill in — e.g. /public/Steffi_Roy_Resume_PhD.pdf]
- Deploy: Netlify (domain: steffir.com)

---

## Canonical Content — Never Vary These

### Hero tagline (exact wording)
"MS student at Northeastern interested in machine learning systems,
safe AI, and efficient deep learning. Previously: hardware security
research at UF, silicon verification at Texas Instruments and Microsoft."

### Personal details
- Full name: Steffi Roy
- Email: steffiroy@hotmail.com
- GitHub: https://github.com/Steffi-Roy
- Google Scholar: https://scholar.google.com/citations?view_op=list_works&hl=en&user=uzveKwIAAAAJ
- Website: https://steffir.com
- Location: Dallas, TX (do not display city on website unless already present)

### Publications (canonical format)
[1] M. Hashemi, **S. Roy**, F. Ganji, D. Forte. "Garbled EDA: Privacy-Preserving
    Electronic Design Automation." *ICCAD 2022.*
    → Plain English: Designed a framework to run chip design tools securely
      without revealing proprietary IP, using cryptographic multiparty computation.

[2] **S. Roy**, M. Hashemi, F. Ganji, D. Forte. "Active IC Metering Protocol
    Security with Oblivious Transfer." *SRC TECHCON 2022.*
    → Plain English: Built and hardened protocols that prevent unauthorized
      cloning of chips, using oblivious transfer cryptography.

[3] M. Hashemi, **S. Roy**, D. Forte, F. Ganji. "HWGN2: Side-Channel Protected
    Neural Networks." *SPACE 2022.*
    → Plain English: Developed a hardware framework that lets neural networks
      run securely on FPGAs without leaking information through power/timing channels.

---

## Pending Changes — Work Through in This Order

### 1. Hero Section
- Replace current tagline ("Prospective PhD Student · Hardware Security & AI Systems")
  with the canonical hero tagline above (exact wording, no changes)
- Update the HTML <title> and meta description from
  "PhD Applicant · Hardware Security & AI Systems"
  to "Steffi Roy | MS Student · ML Systems & Safe AI"
- Update meta description to:
  "Steffi Roy — MS student at Northeastern researching machine learning
   systems, safe AI, and efficient deep learning. Seeking PhD positions Fall 2026."
- Add a clearly visible "Download CV" button linking to the CV file path above.
  Style it as a primary call-to-action button near the name/tagline.
- Add a small but visible callout: "Actively seeking PhD positions · Fall 2026"
- Keep headshot as-is (do not move or replace /images/me1.jpg)

### 2. Research Interests Section
- Keep the three interest areas but update wording:

  Area 1 — "ML Systems & Efficient Deep Learning"
  Description: "Model compression, parameter-efficient fine-tuning, and
  hardware–software co-design for scalable machine learning workloads."

  Area 2 — "Safe & Certifiable AI"
  Description: "Robustness under distribution shift, out-of-distribution
  detection, and formal guarantees for learned systems — particularly in
  autonomous and safety-critical settings."

  Area 3 — "Hardware Security for AI"
  Description: "Side-channel resilience for neural network inference,
  privacy-preserving computation, and secure hardware architectures
  for deployed ML systems."

- Remove "AI + Robotics / Embedded Systems" as a standalone area —
  it is not yet backed by published work. Robotics/embedded angle can
  be folded into Area 2 description as an application domain.

### 3. Research Experience Section
- Replace the generic bullet points with the following specific entries.
  Do not use generic phrasing. Name each project explicitly.

  Role: Research Assistant
  Lab: Florida Institute for Cybersecurity Research (FICS Lab)
  Institution: University of Florida
  Dates: Dec 2021 – Jan 2023

  Bullets:
  - Developed HWGN2, a hardware-garbled neural network framework providing
    side-channel resilience for secure deep learning inference on FPGA.
    Published at SPACE 2022. [link to paper if available]
  - Designed Garbled EDA, a privacy-preserving electronic design automation
    framework using garbled circuits and multiparty computation (SFE/PFE)
    to protect IP and PDKs. Published at ICCAD 2022. [link to paper if available]
  - Implemented secure IC metering protocols using Bellare-Micali and
    Naor-Pinkas oblivious transfer with countermeasures against fault
    injection and MITM attacks. Presented at SRC TECHCON 2022.

### 4. Education Section
- Add Northeastern University as the FIRST (most recent) entry:

  Northeastern University — Khoury College of Computer Sciences
  M.S. in Computer Science | GPA: 4.0/4.0 | Jan 2026 – Present
  Courses: Foundations of AI, Human-Computer Interaction,
           Algorithms, Cloud Computing (in progress)

- Update existing UF entry to:
  University of Florida
  M.S. in Electrical & Computer Engineering | GPA: 3.6/4.0 | Jan 2021 – Aug 2023

- Update existing undergrad entry to:
  Mahindra Ecole Centrale, Hyderabad
  B.Tech in Electrical & Electronics Engineering | CGPA: 9.3/10 | 2016 – 2020

### 5. Publications Section
- Remove the bare Google Scholar link as the only content.
- List all three publications inline using the canonical [1][2][3] format above.
- Under each citation, add the plain-English one-liner from the canonical list.
- Keep the Google Scholar link as a secondary "View all on Google Scholar" link
  at the bottom of the section, not the primary content.

### 6. Projects Section
- The current section has broken markdown rendering — raw **### headers**
  are showing as bold text. Fix this immediately.
- Replace with the following three project cards:

  Project 1 — Multi-Agent Reinforcement Learning
  Subtitle: MADDPG vs. DDPG | Northeastern University
  Description: "Implemented and benchmarked MADDPG and DDPG algorithms
  in cooperative and competitive multi-agent environments. Analyzed policy
  convergence, reward shaping, and inter-agent communication under partial
  observability."
  Tags: PyTorch, OpenAI Gym, Reinforcement Learning
  Link: [add GitHub repo link when available]

  Project 2 — LLM Compression & Efficient Training
  Subtitle: Northeastern University
  Description: "Explored parameter-efficient fine-tuning and model
  compression techniques for large language models. Participated in the
  OpenAI parameter golf challenge (train_gpt.py), minimizing parameter
  count while preserving GPT training quality."
  Tags: PyTorch, LLMs, Model Compression
  Link: https://github.com/Steffi-Roy [update to specific repo if available]

  Project 3 — HabitBuddy
  Subtitle: End-to-End HCI Application | Northeastern University, CS 5340
  Description: "Led end-to-end UX research and iterative design of a
  companion-based habit tracker. Process included user personas, paper
  prototyping, heuristic evaluation, and high-fidelity Figma prototype."
  Tags: Figma, UX Research, HCI
  Link: [add Figma prototype link if available]

### 7. Contact Section
- Remove LinkedIn link entirely
- Add GitHub link: https://github.com/Steffi-Roy
- Keep email: steffiroy@hotmail.com
- Keep Google Scholar link
- Keep response time note ("usually within 48 hours") — it is a nice touch
- Update contact blurb to:
  "I am actively seeking PhD positions for Fall 2026. My interests span
  ML systems, safe AI, and efficient deep learning. If your lab works on
  any of these areas, I would love to connect."

---

## Things to Never Change
- Headshot image path: /images/me1.jpg
- Domain configuration or Netlify _redirects / netlify.toml
- _config.yml (or equivalent) without explicitly asking first
- Any existing Google Analytics or tracking scripts
- The light/dark mode toggle — keep it as-is

---

## Style Conventions
- Keep all changes mobile-responsive
- Do not add new external CSS frameworks without asking
- Maintain existing color scheme and font choices
- All links to external sites must open in a new tab (target="_blank" rel="noopener")
- Keep page as a single-page layout (do not split into subpages unless asked)
