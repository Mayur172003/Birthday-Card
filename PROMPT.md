# Birthday Surprise Website — Original Brief

> Saved from the project prompt so the emotional direction and feature list stay easy to revisit.

---

## Role

Act as a senior React developer and award-winning UI/UX designer.

Build a premium, cinematic birthday surprise website for my female best friend using React (Vite), React Router DOM, Framer Motion, GSAP, Tailwind CSS, and Three.js (where appropriate).

The website should feel magical, emotional, elegant, and luxurious—not childish.

## Theme

A beautiful journey celebrating her birthday with storytelling, memories, animations, and heartfelt messages.

---

## Tech Stack

- React + Vite
- React Router DOM
- Tailwind CSS
- Framer Motion
- GSAP
- Lenis (smooth scrolling)
- React Icons
- Lottie animations
- React Three Fiber (for subtle 3D effects)
- Swiper.js
- TypeScript preferred

The code should be clean, reusable, responsive, and production-ready.

---

## Landing Experience

Create an immersive intro.

**Background:**

- Animated stars
- Floating particles
- Soft glowing lights
- Aurora gradient
- Background music toggle

**Show:**

- “Someone very special has a surprise waiting...”
- A glowing button: “Begin the Journey”
- Button should have ripple effect and magnetic hover animation

---

## Routing

Use React Router with animated page transitions.

| Route | Page |
|-------|------|
| `/` | Intro |
| `/story` | Our Story |
| `/gallery` | Photo Memories |
| `/qualities` | Things That Make You Amazing |
| `/messages` | Heartfelt Letter |
| `/timeline` | Friendship Timeline |
| `/moments` | Special Moments |
| `/surprise` | Birthday Countdown + Gift |
| `/finale` | Happy Birthday Ending |

---

## Animations

Every page must include (as appropriate):

- Parallax effects
- Scroll-triggered animations
- Fade / Slide / Scale / Blur reveal
- 3D tilt cards
- Floating elements
- Glassmorphism
- Morphing gradients
- Particle animations
- Cursor glow / mouse follower
- Magnetic buttons
- Text reveal animations
- Animated SVG dividers
- Page transitions
- Confetti / Fireworks
- Floating balloons / hearts / butterflies

Everything should feel alive.

---

## Gallery Page

Reusable components. Images provided later via editable arrays.

- Pinterest masonry grid
- Hover zoom
- Lightbox / fullscreen viewer
- Image transitions
- Floating captions
- Lazy loading / blur placeholder
- Animated gallery filtering

---

## Story Page

Multiple storytelling sections, each animating differently:

- How we met
- Funny memories
- Best adventures
- Crazy moments
- Why she is irreplaceable

---

## Timeline Page

Interactive vertical timeline with expanding cards, animated connecting line, icons, photos, messages.

---

## Qualities Page

Animated flip cards (kind, beautiful, strong, funny, smart, supportive, caring, creative, inspiring) with glowing borders and gradient animation.

---

## Heartfelt Letter Page

Elegant animated letter: unfolds like paper, typing effect, ink animation, soft music.

---

## Surprise Page

Live birthday countdown → gift box → confetti, fireworks, balloons, photos, wishes.

---

## Finale

Cinematic ending:

- Huge “Happy Birthday”
- “You deserve every happiness in the world.”
- Floating photos, stars, fireworks
- Close with gratitude

---

## Hidden Features

- Konami Code → secret page
- Press **H** → hidden message
- Double-click background → hearts
- Press **Space** → fireworks

---

## Cursor / Audio / Easter Eggs

- Custom glowing cursor with trail & sparks
- Music toggle, click / transition / confetti / gift sounds
- Random motivational quotes, floating wishes, hearts, butterflies

---

## Responsive / Performance / Structure

Perfect on desktop, tablet, mobile, ultra-wide.

Code splitting, lazy loading, reusable components, accessible, SEO friendly.

```
components/  pages/  hooks/  animations/
assets/  constants/  utils/  context/  routes/
```

---

## Important Content Rules

Do **not** hardcode final images. Use editable arrays in `src/constants/content.ts`:

- `gallery`
- `messages`
- `timeline`
- `qualities`
- `storySections` / memories
- `letterContent`

UI direction: Apple product launch × Spotify Wrapped × luxury portfolio — premium typography, micro-interactions, cinematic transitions, modern glassmorphism. Awwwards-worthy.

---

## Emotional Direction (Added)

The journey should make her **feel happy**, **tease her affectionately**, and include a sincere **apology** for moments that left her heartbroken or sad — woven through the story, letter, timeline, messages, and finale so the emotion feels integrated, not bolted on.

### Where emotion lives in the code

| Feeling | Where |
|---------|--------|
| Happiness / celebration | Intro tagline, gallery captions, qualities, surprise, finale, floating wishes |
| Affectionate teasing | Story “Funny / Crazy”, qualities (funny/beautiful), letter paragraphs, finale tease, secret page |
| Apology / healing | Story section **I’m Sorry**, timeline **When I Hurt You**, letter apology paragraphs, messages, secret note, finale lines |

Edit copy anytime in `src/constants/content.ts` (and `finaleLines` / `surpriseCopy` / `letterContent`).
