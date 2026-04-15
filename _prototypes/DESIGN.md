```markdown
# Design System Documentation

## 1. Overview & Creative North Star: "The Architectural Groomer"
This design system is built upon the philosophy of **Silent Luxury**. Moving away from the over-saturated, glowing, and hyper-synthetic "AI aesthetic," this system embraces the "Anti-AI" movement through hyper-clean geometry, high-contrast typography, and a "Less, but Better" approach. 

The **Creative North Star** is "The Architectural Groomer"—an aesthetic that treats the interface like a high-end masculine clinic or a bespoke tailoring atelier. We avoid visual noise (no complex icons, no decorative gradients) in favor of precision, intentional white space, and a bold, editorial layout that feels curated rather than generated.

---

## 2. Colors
The palette is rooted in a high-contrast relationship between deep obsidian tones and pure ice, punctuated by "Champagne Ouro" to signal prestige.

### Core Palette
- **Dark Base (#0a0a0a):** Used for the primary canvas to create an immersive, premium environment.
- **Ice Base (#fafafa):** Used for high-impact sections or editorial "light-mode" cards.
- **Champagne/Ouro (#f1c97d):** Our "Signature Token." Use this sparingly for primary actions and critical focus points.
- **Text Zinc-900:** Reserved for high-readability body text on light backgrounds.
- **Text Zinc-400:** Used for secondary metadata and descriptions on dark backgrounds.

### The "No-Line" Rule
To maintain a custom, premium feel, **1px solid borders are strictly prohibited for sectioning.** Structural boundaries must be defined through:
1.  **Background Color Shifts:** Use `surface_container_low` (#1c1b1b) against a `background` (#131313) to define areas.
2.  **Tonal Transitions:** Creating a visual "step" by nesting a `surface_container_high` card within a `surface` section.

### Signature Textures & Glass
While traditional gradients are avoided to maintain the "Anti-AI" aesthetic, use **Glassmorphism** for floating headers or navigation bars. Use semi-transparent `surface` colors with a high `backdrop-blur` (20px+) to create a "frosted obsidian" effect that feels physical and expensive.

---

## 3. Typography
Typography is the primary vehicle for the brand’s authority. We use a "Scale of Extremes"—very large display headers paired with meticulously small, wide-tracked labels.

- **Display & Headlines (Outfit):** The 'Outfit' typeface provides a geometric, modern precision. Use `display-lg` for hero statements with tight letter spacing (-2%) to create a "block" of text that feels like a physical sign.
- **Body & Labels (Inter):** The 'Inter' typeface is our workhorse. For `body-md`, ensure a slightly increased line-height (1.6) to provide the "breathing room" expected in high-end clinic branding.
- **Hierarchy Note:** Titles should always be high-contrast (Ice Base on Dark Base). Body text should utilize the Zinc-400 token to ensure the headlines remain the undisputed focal point.

---

## 4. Elevation & Depth: Tonal Layering
In this design system, depth is not "added" via shadows; it is "carved" via layering.

- **The Layering Principle:** Treat the UI as a series of stacked premium materials. 
    - **Base Layer:** `surface_dim` (#131313).
    - **In-Section Cards:** `surface_container` (#201f1f).
    - **Floating Elements:** `surface_bright` (#3a3939).
- **Ambient Shadows:** Shadows are a fallback, not a feature. If used (e.g., for a floating booking modal), use a "Soft-Focus Shadow": `0px 20px 40px rgba(0,0,0, 0.4)`. It should feel like an ambient occlusion, not a drop shadow.
- **The Ghost Border:** If high-density information requires separation, use the `outline_variant` token at **15% opacity**. This creates a "suggestion" of a line that disappears into the background, maintaining the minimal geometric aesthetic.

---

## 5. Components

### Buttons (The "Full-Round" Signature)
- **Primary:** `rounded-full`, Background: `primary` (#f1c97d), Text: `on_primary` (#412d00). No shadows.
- **Secondary:** `rounded-full`, Background: Transparent, Border: 1.5px `primary` (#f1c97d).
- **Interaction:** On hover, the primary button should slightly scale (1.02) rather than change color, mimicking a physical interaction.

### Cards (The "3XL" Container)
- **Styling:** Always use `rounded-3xl` (3rem). 
- **Constraint:** Cards must never have dividers. Separate internal card content using vertical white space (32px or 48px from the spacing scale).
- **Background:** Use `surface_container_low` (#1c1b1b) to create a subtle lift from the background.

### Input Fields
- **Style:** Underline-only or flat-surface containers. Avoid the "boxed" input look.
- **States:** The "Active" state should be signaled by the label shifting to `primary` (#f1c97d) and a subtle 1px line appearing below the text.

### Specialized Component: The "Service Tile"
For a barbershop context, use large-format `rounded-3xl` tiles with `Outfit` titles. Instead of icons, use high-quality, desaturated photography or simple geometric line shapes (minimalist razor or chair silhouettes).

---

## 6. Do's and Don'ts

### Do:
- **Use Asymmetry:** Place a large headline on the left and a small "Zinc-400" description on the far right. This breaks the "template" feel.
- **Embrace White Space:** If you think there is enough space, double it. Premium brands "waste" space intentionally.
- **High Contrast:** Ensure the Champagne/Ouro is only used for things that *must* be clicked.

### Don't:
- **No Divider Lines:** Never use a `<hr>` or a 1px line to separate list items. Use a background color change or 24px of empty space.
- **No Complex Icons:** Avoid multi-color or illustrative icons. Use only thin-stroke, single-color geometric icons.
- **No Gradients:** Keep colors flat and bold. The "soul" comes from the layout and the typography, not the paint.
- **No Rounded Corners < 2xl:** Except for buttons, avoid small border-radii. We want "Full Round" or "3XL Heavy Round" to maintain the signature silhouette.

---

**Director's Final Note:** 
Always ask: *"Does this look like a generic app, or does it look like a physical luxury space?"* If it feels too "digital," remove a line, increase the font size of the headline, and add more space.