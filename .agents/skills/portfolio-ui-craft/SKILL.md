---
name: portfolio-ui-craft
description: UI craft and design engineering standards for Mohamed Makhlouf's Tech Superpower Portfolio. Covers Tailwind color schemes, Japanese Sakura aesthetic, mechanical engine metaphors, and responsive component architecture.
---

# Portfolio UI Craft & Design Engineering

This skill defines the visual language, design constraints, and implementation patterns for the portfolio.

---

## 1. Design System & Aesthetics

The design fuses two core themes:
1. **The Mechanical Engine:** High-contrast telemetry, clean monospace badges (`JetBrains Mono`), dark charcoal backgrounds (`#0b0f17`), and subtle engine cyan (`#38bdf8`) accents.
2. **Japanese Sakura & Kaizen:** Gentle pink accents (`#f472b6`, `#fb7185`), smooth glassmorphic panels, falling petal animations (`SakuraCanvas.jsx`), and purposeful whitespace.

### Color Tokens (Tailwind)
- **Background Deep Charcoal:** `bg-charcoal-900` (`#0b0f17`), panels `bg-charcoal-800` (`#161d2b`)
- **Sakura Accents:** `text-sakura-300` (`#f9a8d4`), `bg-sakura-500` (`#ec4899`), borders `border-sakura-500/30`
- **Engine Accents:** `text-engine-cyan` (`#38bdf8`), `bg-engine-cyan/20`, borders `border-engine-cyan/30`
- **Typography:**
  - Body & Headlines: `Plus Jakarta Sans`, sans-serif
  - Telemetry, Badges, Metrics: `JetBrains Mono`, monospace

---

## 2. Invariants & Usability Rules

1. **Rubric Requirement (Usability 20%):** The creative feature must work without breaking site navigation or cluttering the page.
2. **Visible Hint:** Keep the `[ Superpower Engine ]` button with its subtle pulse badge visible in both the desktop Navbar and mobile drawer.
3. **Responsive Breakpoints:**
   - Mobile: single column grids, compact modal headers, horizontally scrollable tabs if needed.
   - Tablet / Desktop: 2-column project cards, side-by-side telemetry displays.
4. **Zero Layout Shifts:** Canvas petal animation runs in a fixed, pointer-events-none background layer (`z-0`) so it never interferes with link clicks or scrolling.

---

## 3. Component Hierarchy

```
App.jsx
├── SakuraCanvas.jsx (Background petal physics)
├── Navbar.jsx (Fixed header, visible hint button, petal toggle)
├── Hero.jsx (Headline, credentials, telemetry badges, CTA)
├── About.jsx (Tabbed journey, engine philosophy, green tech, peer tutoring)
├── Superpowers.jsx (4 core pillars, verified metrics, tools grid)
├── Projects.jsx (Filterable project cards, AWS services tags, stats)
├── CreativeEngineModal.jsx (4-cylinder interactive dashboard)
└── Footer.jsx (Social links, UTM email, AWS Amplify badge)
```
