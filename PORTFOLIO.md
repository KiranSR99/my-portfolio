# Portfolio Website – Design & Requirements Specification

![Portfolio Reference Layout](public/portfolio.png)

> This document defines the visual style, layout rules, and interaction principles for my personal portfolio website before implementation.  
> The goal is consistency, scalability, and a clean developer-friendly structure.

---

## 1. Tech Stack

- **Framework**: Angular
- **Styling**: Tailwind CSS
- **UI Library (optional)**: PrimeNG (only if a component truly adds value)
- **Fonts**:
  - Inter
  - Space Mono
- **Theme Support**:
  - Light mode
  - Dark mode
  - System preference (`prefers-color-scheme`)

---

## 2. Design Philosophy

- Minimal, modern, developer-focused
- Strong typography hierarchy
- Subtle animations, not flashy
- High contrast and accessibility-friendly
- Consistent spacing, colors, and motion across all pages

---

## 3. Layout Overview

### Overall Structure

- **Centered main content**
- **Fixed side columns**:
  - **Left column** → Social links
  - **Right column** → Email address
- Main content scrolls vertically
- Side columns remain visible on desktop

> Note: In the reference image, the side columns appear visually broken.  
> In the actual implementation, these areas will be used intentionally for social links and contact info.

---

## 4. Side Columns

### Left Column – Social Links

- Fixed position on desktop
- Icons only (GitHub, LinkedIn, Twitter/X, etc.)
- Vertical layout
- Hover effect:
  - Color change to primary green
  - Slight upward translate
- Hidden or moved into footer on small screens

### Right Column – Email Address

- Fixed position on desktop
- Vertical writing mode
- Click-to-copy email
- Subtle hover animation
- Hidden or moved into footer on small screens

---

## 5. Typography System

### Font Usage

#### Space Mono
Used for:
- Headings (H1–H6)
- Section titles & numbers
- Key highlights
- Hero text
- Emphasized labels

Purpose:
- Gives the site a developer / technical personality
- Adds strong visual identity
- Used sparingly to avoid fatigue

---

#### Inter
Used for:
- Body text
- Paragraphs
- UI labels
- Buttons
- Navigation
- Forms and inputs

Purpose:
- High readability
- Neutral and clean
- Balances the expressive nature of Space Mono


### Font Setup (Local Files)

Fonts are already stored in:
/public/fonts/
├── Inter/
└── SpaceMono/


They must be registered locally (no Google Fonts dependency).

---

## 6. Color System (Green Theme)

> The site will use a **green-based theme**, not identical to the reference image.

### Core Colors

- **Primary**: Muted modern green  
  Used for:
  - Links
  - Highlights
  - Active states
  - Primary buttons

- **Secondary**: Soft desaturated green/teal  
  Used for:
  - Secondary buttons
  - Borders
  - Subtle backgrounds

- **Accent (optional)**:
  - Used sparingly (icons, hover states, badges)

### Neutral Colors

- Background (light & dark)
- Surface (cards, sections)
- Text:
  - Primary text
  - Muted text
  - Disabled text

All colors must work in **both light and dark modes**.

---

## 7. Dark / Light Mode

- Supports:
  - Manual toggle
  - System preference
- Smooth transition when switching themes
- Theme preference stored locally (e.g., localStorage)

---

## 8. Components & UI Rules

### Cards

- Soft rounded corners
- Subtle shadow (light mode)
- Border-based separation (dark mode)
- Hover effects:
  - Slight scale or translate
  - Shadow or border highlight
- Scroll reveal animation

### Buttons

- Clear hierarchy:
  - Primary
  - Secondary
  - Ghost / Text
- Hover & focus states mandatory
- Keyboard accessible

### Navigation

- Minimal
- Smooth scrolling
- Active section indicator
- Sticky or fixed header (TBD)

---

## 9. Animations & Interactions

- Smooth scrolling enabled globally
- Section entrance animations on scroll
- Hover transitions for:
  - Links
  - Icons
  - Cards
- Animations should be:
  - Fast
  - Subtle
  - Consistent

> Motion should enhance clarity, not distract.

---

## 10. Responsiveness

### Desktop
- Full layout with side columns
- Wide content area
- Comfortable spacing

### Tablet
- Reduced side spacing
- Side columns may collapse

### Mobile
- Single-column layout
- Side content moved to footer
- Hamburger menu for navigation
- Touch-friendly spacing
- No fixed side elements

---

## 11. Accessibility & UX

- Sufficient color contrast
- Keyboard navigable
- Meaningful hover/focus states
- Images with alt text
- Click targets sized appropriately

---

## 12. Scope Control

- UI library should only be used if:
  - It saves time
  - It does not fight Tailwind
- Custom components preferred for:
  - Cards
  - Layout
  - Animations

---

## 13. Next Steps

1. Finalize color palette
2. Define Tailwind config (colors, fonts, spacing)
3. Create base layout component
4. Implement theme switch logic
5. Build reusable UI components
