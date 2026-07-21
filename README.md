# Birthday Surprise Website

A cinematic, award-worthy birthday journey built with React, Vite, TypeScript, Tailwind CSS, Framer Motion, GSAP, Lenis, Three.js, and Swiper.

## Quick start

```bash
npm install
npm run dev
```

Open the local URL Vite prints (usually `http://localhost:5173`).

## Customize your content

Edit **`src/constants/content.ts`**:

| Export | What to change |
|--------|----------------|
| `SITE` | Her name, your name, birthday countdown date, optional `musicUrl` |
| `gallery` | Photo paths, captions, dates, locations, categories |
| `storySections` | Story chapters + optional images |
| `qualities` | Flip-card qualities |
| `timeline` | Friendship timeline events |
| `moments` | Special moments for the Swiper |
| `messages` / `letterContent` | Heartfelt letter + quotes |

### Adding images

1. Put files in `public/images/` (e.g. `public/images/sunset.jpg`)
2. Set paths like `image: "/images/sunset.jpg"`

Leave `image: ""` to show elegant placeholders until photos are ready.

### Background music

Add an MP3 to `public/music/bg.mp3` and set:

```ts
musicUrl: '/music/bg.mp3'
```

Without a file, the music toggle plays a soft ambient pad.

## Routes

| Path | Page |
|------|------|
| `/` | Immersive intro |
| `/story` | Our Story |
| `/gallery` | Photo Memories |
| `/qualities` | Amazing qualities |
| `/messages` | Heartfelt letter |
| `/timeline` | Friendship timeline |
| `/moments` | Special moments |
| `/surprise` | Countdown + gift |
| `/finale` | Cinematic ending |
| `/secret` | Konami Code unlock |

## Hidden features

- **Konami Code** → secret page
- **H** → hidden message
- **Double-click** → hearts
- **Space** → fireworks

## Build

```bash
npm run build
npm run preview
```
