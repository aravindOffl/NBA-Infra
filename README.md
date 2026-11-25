# 🏛️ NBA Infrastructure & Venue Management Portal

> **Rathinam Technical Campus (RTC)** — Infrastructure Readiness & Space Planning Dashboard for NBA Accreditation.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://aravindoffl.github.io/NBA-Infra/)
[![Accreditation](https://img.shields.io/badge/NBA-Accreditation%20Readiness-emerald?style=for-the-badge)](https://aravindoffl.github.io/NBA-Infra/)
[![Vanilla Stack](https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20JS-orange?style=for-the-badge)](https://aravindoffl.github.io/NBA-Infra/)

🌐 **Live GitHub Pages URL:** [https://aravindoffl.github.io/NBA-Infra/](https://aravindoffl.github.io/NBA-Infra/)

---

## 📌 Project Overview

This interactive web portal provides a centralized management and visualization platform for **191 campus venues** across **13 academic departments**, tracking physical infrastructure, lab modernization requirements, and architectural blueprints for NBA accreditation preparedness.

---

## ✨ Key Modules & Capabilities

### 🏢 1. Academic Departments Explorer
- **13 Departments Supported**: Biotech, ECE, CSE, IT, AI&DS, CSE Tamil, UG AIML, UG Cyber, PG AIML, PG Cyber, MBA, MCA, and Science & Humanities (S&H).
- **Interactive Department Selector**: Real-time venue metrics, classroom stats, and action items.
- **Dynamic Venues Table**: Displays Room Number, Current Usage, NBA Tentative Plan, and Itemized Infrastructure Requirements with action-needed tags.
- **Smart Filters & Search**: Filter instantly by Smart Board Classrooms, Projector Classrooms, Laboratories, Faculty Rooms, or Venues requiring action.

### ⚡ 2. ECE Specialized Laboratory Suite
- **7 Modernized Laboratories**: Itemized instrumentation, development boards, and servicing for:
  - `A109`: Optical Lab & MPMC (Optical fiber kits & modulation setups — ₹3,00,000)
  - `A110`: TI Lab — Centre of Excellence in Embedded Systems & IoT / Research Lab (₹4,00,000)
  - `B107`: Electronics Lab — Digital System Design Laboratory (₹5,00,000)
  - `C018`: Communication Systems / DSP Lab (₹80,000)
  - `A308`: Centre of Excellence in VLSI & PCB Prototyping (EDA software, DSP kits, CNC PCB machine — ₹12,05,000)
  - `A201`: Electron Devices & Analog Circuits Lab (DSO, Function Generators — ₹7,00,000)
  - `A102`: Project Lab New (MSO, RPS, soldering stations — ₹5,30,000)
- **Total Lab Modernization Outlay**: **₹37,15,000**.
- **Software Readiness**: Committed **30 MATLAB user licenses** by ICT.

### 🏛️ 3. Institution Level Strategic Info
- **Dedicated Page**: Available in `index.html` or separately as [`institution.html`](institution.html).
- **Prerequisite #1 — Central Library (C-Block 6th Floor)**: Tracks civil and fit-out readiness of the 6th floor library.
- **Prerequisite #2 — C401 Shifting & Conversion**: Detailed specifications for converting the old library into the combined CSE (AIML) & Cyber faculty room (60 workstations, 3 cubicles, display boards, systems).
- **Strategic Initiative #3 — ECE Lab Modernization**: Overview of campus laboratory instrumentation upgrades.

### 📊 4. Consolidated Infrastructure Requirements
- **Dedicated Page**: Available in `index.html` or separately as [`consolidated.html`](consolidated.html).
- Aggregates all **20 consolidated physical infrastructure line items** categorized into:
  - 💻 **IT & Systems** (Computer systems, printers, laptop racks/berows)
  - 🪑 **Furniture & Partitions** (Workstations, cubicles, faculty partitions)
  - 🔬 **Lab Infrastructure** (Workbenches, experiential setups, CHN lab tables)
  - 📋 **Display & Storage** (Whiteboards, notice boards, standee racks, library racks)
  - 🔌 **Electrical & Cabling** (Power lines, 3-pin sockets)
- **Export to CSV**: Generates a downloadable CSV with one click.
- **Print View**: Executive print styling ready for committee review.

### 📐 5. Architectural Floor Plans & Blueprints
- **Dedicated Page**: Available in `index.html` or separately as [`floorplans.html`](floorplans.html).
- High-resolution architectural drawings linked to venues:
  - **`A205`**: PG AIML & PG Cyber Faculty Room Floor Plan
  - **`C116`**: Biotech Bio Brandix Studio Experiential Learning Lab Floor Plan
  - **`C401`**: Central Library to Faculty Room Conversion Floor Plan (60 workstations, 3 cubicles)
  - **`C423`**: School of Computing (SOC) ASP Faculty Workspace Floor Plan (25 cubicles)
- **Interactive Lightbox Modal**: Includes **Zoom In (+)**, **Zoom Out (-)**, **Reset**, and full-screen view.

---

## 📁 Repository Structure

```text
NBA-Infra/
│
├── index.html                                    # Master Interactive Single-Page Dashboard
├── institution.html                              # Standalone Institution Prerequisites View
├── consolidated.html                             # Standalone Consolidated Requirements View
├── floorplans.html                               # Standalone Architectural Blueprints View
│
├── styles.css                                    # Custom UI Styling, Responsive Layout & Print CSS
├── app.js                                        # Application Logic, Filtering, Lightbox & Exporter
├── data.js                                       # Complete Extracted Dataset (100% Offline Ready)
├── infra_data.json                               # Structured JSON representation of all data
│
├── A205 Faculty Room Floor Plan.png              # Blueprint for Room A205
├── C116 Experiential Learning Lab Floor Plan.png # Blueprint for Room C116
├── C401 Faculty Room Floor Plan.png              # Blueprint for Room C401
├── C423 Faculty Workspace Floor Plan.png         # Blueprint for Room C423
│
├── Venue_Details.xlsx                            # Master Source Spreadsheet
├── ECE Venue_Details.xlsx                        # ECE Laboratory Modernization Source Sheet
└── sync_excel.py                                 # Automated Python Pipeline to sync Excel -> JSON/JS
```

---

## 🚀 GitHub Pages Setup

To verify or configure GitHub Pages:
1. Open the repository on GitHub: [https://github.com/aravindOffl/NBA-Infra](https://github.com/aravindOffl/NBA-Infra)
2. Go to **Settings** ➔ **Pages**.
3. Under **Branch**, select `main` and folder `/(root)`, then click **Save**.
4. The site will be live at: **[https://aravindoffl.github.io/NBA-Infra/](https://aravindoffl.github.io/NBA-Infra/)**.
