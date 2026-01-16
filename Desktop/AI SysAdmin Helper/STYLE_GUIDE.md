# 🎨 AI SysAdmin Design System & Style Ledger

This document serves as the source of truth for the application's visual identity and a ledger for all GUI-related changes.

## 🏛️ Core Aesthetic: "Edaca"
The application utilizes a **Modern Enterprise High-Fidelity** aesthetic, characterized by:
- **Glassmorphism**: Subtle background blurs and semi-transparent surfaces to create depth.
- **Vibrant Functional Colors**: High-contrast, saturated colors (Emerald, Indigo, Rose) used to signify system states.
- **Neo-Geometric Layout**: Heavy use of large border-radii (`rounded-[2rem]`, `rounded-[2.5rem]`) and layered "soft" shadows to create a premium, tactile feel.
- **Dark Mode Continuity**: Design tokens are prepared for future dark-mode implementation using system-level CSS variables.

## 🛠️ Technology Stack
| Library | Usage |
| :--- | :--- |
| **Tailwind CSS** | Utility-first styling for speed and consistency. |
| **Framer Motion** | Micro-interactions, page transitions, and status updates. |
| **Lucide React** | Consistent, stroke-based iconography. |
| **Recharts** | Mathematical and system-load visualizations. |
| **Inter (Font)** | Primary typography for maximum readability. |

## 📐 Implementation Techniques
### 1. Shadow & Depth
We use custom `shadow-soft` (defined in `tailwind.config.js` or via arbitrary values) to create a "floating" paper effect rather than harsh borders.
- **Example**: `shadow-lg shadow-blue-100/50` for colored interactive elements.

### 2. Geometry
Containers are rarely sharp. 
- **Main Cards**: `rounded-[2.5rem]`
- **Interactive Items**: `rounded-2xl`
- **Buttons**: `rounded-xl` or `rounded-2xl` depending on hierarchy.

### 3. Motion Strategy
- **Entry**: `initial={{ opacity: 0, y: 10 }}` to create a "lifting" effect.
- **Transitions**: `AnimatePresence` with `mode="wait"` is used for seamless page swaps.
- **Micro-interactions**: Hover scales (`hover:scale-105`) and background shifts.

## 🗒️ GUI Change Ledger
All modifications to the UI/UX must be recorded here to maintain architectural integrity.

| Date | Change | Description |
| :--- | :--- | :--- |
| 2026-01-15 | **Structure Refactor** | Migrated to modular `/routes` and `/components` architecture. |
| 2026-01-15 | **Routing & Nav** | Integrated `react-router-dom` and `framer-motion` page transitions. |
| 2026-01-15 | **Sidebar Overhaul** | Implemented collapsible sidebar with dynamic width indexing. |
| 2026-01-15 | **High-Fidelity Routes** | Overhauled Logs, Anomalies, Incidents, KB, and Settings to 1:1 fidelity with "Edaca" source. |
| 2026-01-15 | **Startup Fix** | Standardized Vite entry point to `frontend/index.html` on port 9001. |
| 2026-01-15 | **Dashboard Modularization** | Revamped Dashboard with clickable `SummaryCard`, `TrendChart`, and triage lists. |
| 2026-01-15 | **Logs Engine Overhaul** | Implemented `LogTable` with pagination and `LogDetailModal` with JSON inspection. |
| 2026-01-15 | **Threat Radar Revamp** | Built sortable `AnomalyTable` and `AnomalyDetailModal` with AI remediation. |
| 2026-01-15 | **Remediation Hub Revamp** | Created `IncidentTable` and `IncidentDetailModal` for coordinated recovery tracking. |
| 2026-01-15 | **Heuristic Mastery KB** | Refined the KB with `KBTable` and `KBDetailModal` for AI policy orchestration. |
| 2026-01-15 | **Config Hub Revamp** | Unified `LogSource`, `Alert`, and `Agent` settings into a high-fidelity tabbed interface. |
| 2026-01-15 | **Bio-Metric Health Center** | Built `LatencyMatrix`, `ServiceStatus`, and `ResourceGauges` for infrastructure vitals. |

🧪 Design & Libraries
    To answer your question: All components are built using a high-fidelity Modern Enterprise stack:

    React: For modular structure and logic.
    Tailwind CSS: For all visual styling (vibrant gradients, glassmorphism, soft shadows).
    Framer Motion: For micro-animations and smooth entry transitions.
    Lucide React: For sharp, consistent iconography.
    Recharts: For the interactive system trend visualizations.
    
---
*Last Updated: 2026-01-15 19:24:00Z*
