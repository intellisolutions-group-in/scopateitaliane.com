---
name: Architectural Precision
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#4c4546'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f0'
  outline: '#7e7576'
  outline-variant: '#cfc4c5'
  surface-tint: '#5e5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1b1b1b'
  on-primary-container: '#848484'
  inverse-primary: '#c6c6c6'
  secondary: '#b8174a'
  on-secondary: '#ffffff'
  secondary-container: '#fd517a'
  on-secondary-container: '#5a001e'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1a1c1c'
  on-tertiary-container: '#838484'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c6'
  on-primary-fixed: '#1b1b1b'
  on-primary-fixed-variant: '#474747'
  secondary-fixed: '#ffd9dd'
  secondary-fixed-dim: '#ffb2bd'
  on-secondary-fixed: '#400013'
  on-secondary-fixed-variant: '#900036'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-lg:
    fontFamily: Manrope
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Manrope
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-xl:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
spacing:
  base: 8px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  huge: 80px
  container-max: 1440px
  columns: '12'
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style
The design system is engineered for a premium enterprise environment, emphasizing authority, technical excellence, and clarity. The aesthetic is rooted in **Modern Minimalism** and **Swiss International Style**, characterized by a rigid adherence to grid structures, intentional whitespace, and a high-contrast monochromatic base.

The UI should evoke a sense of "Engineered Quality." By removing all decorative flourishes like rounded corners, shadows, or blurs, the design shifts focus entirely to typography and content hierarchy. This system mirrors the precision of the software engineering and consulting services it represents, utilizing a "Less but Better" philosophy to drive professional trust.

## Colors
The palette is intentionally restrained to maintain an executive, high-end feel. 

- **Background (#EEEEEE):** Used as the primary canvas to provide a soft, sophisticated alternative to pure white, reducing eye strain while maintaining a clean look.
- **Primary (#000000):** Reserved for high-impact elements including navigation bars, headings, body text, and structural outlines. It provides the "ink" on the page.
- **Accent (#CB2957):** A surgical application of deep crimson. This is used exclusively for primary actions (CTAs), critical metrics, and active states to guide the user's eye through the monochromatic interface.
- **Neutral (#DDDDDD):** Used for subtle containment. This defines card boundaries, table dividers, and secondary backgrounds (like sidebars or footers) to create depth without using shadows.

## Typography
This design system utilizes a dual-font strategy to balance character with utility. 

**Manrope** is used for display and headings. Its geometric nature and modern proportions provide a "tech-forward" personality. For large headlines, use tighter letter spacing to emphasize the premium, editorial feel.

**Inter** is the workhorse for all UI elements, body copy, and data. It is chosen for its exceptional legibility at small sizes and its neutral, systematic appearance. 

Maintain high contrast between levels. Use `label-sm` (uppercase) for category tags or small metadata to create a rhythmic "data-heavy" look common in high-end SaaS platforms.

## Layout & Spacing
The system is built on a strict **8pt Grid System**. All dimensions, padding, and margins must be multiples of 8px to ensure mathematical harmony across the UI.

- **Desktop (1440px+):** Use a 12-column fluid grid within a max-width container of 1440px. Gutters are fixed at 24px.
- **Tablet (768px - 1439px):** Transition to an 8-column grid with 32px side margins.
- **Mobile (< 767px):** Use a 4-column grid with 20px side margins.

Whitespace should be used aggressively to separate sections. Avoid thin margins; prefer `xxl` (48px) or `huge` (80px) between major content blocks to maintain the "Premium" feel.

## Elevation & Depth
This design system rejects all physical metaphors of light and shadow. Depth is conveyed exclusively through **Tonal Layering** and **Line Work**.

- **Level 0 (Base):** Primary background (`#EEEEEE`).
- **Level 1 (Surface):** Secondary background or "Cards" (`#DDDDDD` or `#FFFFFF` for high contrast).
- **Stroke-based hierarchy:** Instead of shadows, use 1px solid borders (`#000000` or `#DDDDDD`) to define interactive areas. 

High-elevation moments (like modals) should use a thick 2px black border and a solid black "block shadow" (0px blur, offset 4px) if a sense of physical stacking is required, though flat outlines are preferred.

## Shapes
The shape language is **strictly orthogonal**. All buttons, input fields, cards, and containers must have **0px (Sharp)** corners. 

This architectural approach reinforces the "Enterprise" and "Engineering" nature of the brand. There are no exceptions for icons or secondary UI elements; everything must conform to the sharp-edge rule to maintain visual integrity across the platform.

## Components

- **Buttons:** 
  - *Primary:* Solid `#000000` background, white text, 0px radius, padding `12px 24px`.
  - *Accent:* Solid `#CB2957` background, white text. Used for the single most important action on a page.
  - *Ghost:* 1px `#000000` border, no background.
- **Input Fields:** 1px `#000000` border, `#FFFFFF` or transparent background. Focus state is indicated by a 2px `#CB2957` bottom border.
- **Cards:** No shadows. Defined by a 1px `#DDDDDD` border or a subtle fill change. In high-density data views, use 1px `#000000` borders for a "blueprint" look.
- **Lists & Tables:** Use horizontal dividers only (`1px solid #DDDDDD`). Headers should be `label-sm` (uppercase) for a professional, ledger-like appearance.
- **Chips/Badges:** Small, rectangular containers with 1px borders. Use the accent color `#CB2957` sparingly for status indicators (e.g., "Live", "Critical").
- **Navigation:** Top-heavy navigation using bold Manrope typography. Use `#000000` for the active state underline (2px height, sharp edges).