/** Editable content — replace placeholders with your real memories & names */

export const SITE = {
  herName: 'My Love', // Change to her name
  yourName: 'Your Best Friend',
  /** ISO date for the birthday countdown (YYYY-MM-DDTHH:mm:ss) */
  birthdayDate: '2026-07-20T23:59:59',
  tagline: 'Someone very special (yes, you — don’t act surprised) has a surprise waiting...',
  musicUrl: '', // Optional: path to /music/bg.mp3 in public folder
} as const

export const NAV_LINKS = [
  { path: '/', label: 'Intro' },
  { path: '/story', label: 'Our Story' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/qualities', label: 'Qualities' },
  { path: '/messages', label: 'Letter' },
  { path: '/timeline', label: 'Timeline' },
  { path: '/moments', label: 'Moments' },
  { path: '/surprise', label: 'Surprise' },
  { path: '/finale', label: 'Finale' },
] as const

export type GalleryItem = {
  id: string
  image: string
  caption: string
  date: string
  location: string
  category: string
}

export const gallery: GalleryItem[] = [
  {
    id: '1',
    image: '/images/memory-01.jpeg',
    caption: 'That smile that ruins my “I’m fine” act',
    date: '2023-06-12',
    location: 'Somewhere beautiful',
    category: 'Adventures',
  },
  {
    id: '2',
    image: '/images/memory-02.jpeg',
    caption: 'Caught you mid-laugh (my favorite hobby)',
    date: '2023-09-01',
    location: 'Our favorite café',
    category: 'Everyday',
  },
  {
    id: '3',
    image: '/images/memory-03.jpeg',
    caption: 'Quiet day — loud heart',
    date: '2024-01-15',
    location: 'Home',
    category: 'Quiet',
  },
  {
    id: '4',
    image: '/images/memory-04.jpeg',
    caption: 'Celebrating you like the main character you are',
    date: '2024-03-22',
    location: 'City lights',
    category: 'Celebrations',
  },
  {
    id: '5',
    image: '/images/memory-05.jpeg',
    caption: 'Road trip chaos & playlist arguments',
    date: '2024-05-08',
    location: 'Open roads',
    category: 'Adventures',
  },
  {
    id: '6',
    image: '/images/memory-06.jpeg',
    caption: 'Just us — soft, silly, enough',
    date: '2024-08-19',
    location: 'Wherever you are',
    category: 'Everyday',
  },
  {
    id: '7',
    image: '/images/memory-07.jpeg',
    caption: 'Festival lights, matching energy',
    date: '2024-11-02',
    location: 'Downtown',
    category: 'Celebrations',
  },
  {
    id: '8',
    image: '/images/memory-08.jpeg',
    caption: 'Talks that healed more than they hurt',
    date: '2025-02-14',
    location: 'Rooftop',
    category: 'Quiet',
  },
  {
    id: '9',
    image: '/images/memory-09.jpeg',
    caption: 'Proof that happiness looks like you',
    date: '2025-06-30',
    location: 'The coast',
    category: 'Adventures',
  },
  {
    id: '10',
    image: '/images/memory-10.jpeg',
    caption: 'A frame I never want to forget',
    date: '2025-08-10',
    location: 'With you',
    category: 'Everyday',
  },
  {
    id: '11',
    image: '/images/memory-11.jpeg',
    caption: 'Soft light, softer heart',
    date: '2025-09-21',
    location: 'Somewhere quiet',
    category: 'Quiet',
  },
  {
    id: '12',
    image: '/images/memory-12.jpeg',
    caption: 'Main character energy (yes, you)',
    date: '2025-11-05',
    location: 'Out & about',
    category: 'Celebrations',
  },
  {
    id: '13',
    image: '/images/memory-13.jpeg',
    caption: 'Us, mid-story',
    date: '2026-01-18',
    location: 'Wherever happiness found us',
    category: 'Adventures',
  },
  {
    id: '14',
    image: '/images/memory-14.jpeg',
    caption: 'Still my favorite view',
    date: '2026-03-02',
    location: 'Right here',
    category: 'Everyday',
  },
  {
    id: '15',
    image: '/images/memory-15.jpeg',
    caption: 'Birthday-worthy, always',
    date: '2026-07-20',
    location: 'In my heart',
    category: 'Celebrations',
  },
]

export type StorySection = {
  id: string
  title: string
  subtitle: string
  body: string
  image: string
  alignment: 'left' | 'right'
  accent: string
}

export const storySections: StorySection[] = [
  {
    id: 'met',
    title: 'How We Met',
    subtitle: 'The universe had jokes — and a gift',
    body: 'I didn’t know that ordinary day would hand me my favorite person. You walked in like a plot twist I didn’t see coming — and somehow, ever since, my life has had better punchlines, softer landings, and a reason to smile for no reason at all. (Yes, I’m blaming you for that. Lovingly.)',
    image: '/images/memory-01.jpeg',
    alignment: 'left',
    accent: 'from-aurora-teal/40 to-transparent',
  },
  {
    id: 'funny',
    title: 'Funny Memories',
    subtitle: 'Officially your fault I can’t be serious',
    body: 'You tease me, I tease you back, and somehow we both win. Those ridiculous inside jokes, the dramatic sighs, the “I’m not laughing” faces that last three seconds — that’s our language. If happiness had a sound, it would be us failing to stay quiet in public.',
    image: '/images/memory-02.jpeg',
    alignment: 'right',
    accent: 'from-aurora-rose/40 to-transparent',
  },
  {
    id: 'adventures',
    title: 'Best Adventures',
    subtitle: 'Maps optional. You required.',
    body: 'Every little adventure with you feels bigger than it should — wrong turns that became stories, plans that went sideways and somehow better. You’re the kind of company that turns “what now?” into “remember when?” And I hope we keep collecting those forever.',
    image: '/images/memory-03.jpeg',
    alignment: 'left',
    accent: 'from-aurora-gold/40 to-transparent',
  },
  {
    id: 'crazy',
    title: 'Crazy Moments',
    subtitle: 'Unhinged, unforgettable, ours',
    body: 'We’ve done things that made zero sense and still felt right. Impulse after impulse, laugh after laugh. You’re chaos with good taste — and I’m lucky you let me be part of the storm. Never change. (Okay, maybe change your habit of being right all the time. For my ego.)',
    image: '/images/memory-06.jpeg',
    alignment: 'right',
    accent: 'from-blush/30 to-transparent',
  },
  {
    id: 'sorry',
    title: 'I’m Sorry',
    subtitle: 'For every time I made your heart heavy',
    body: 'This part isn’t cute — it’s honest. I’m sorry for the moments I was careless with your feelings. For the silences that felt like distance. For the words I said wrong, or didn’t say when you needed them. For any day I left you sad, doubtful, or heartbroken because of me. You didn’t deserve that weight. I see it now, and I’m sorry — not as a performance, but as a promise to do better with a heart as precious as yours.',
    image: '/images/memory-08.jpeg',
    alignment: 'left',
    accent: 'from-aurora-rose/35 to-transparent',
  },
  {
    id: 'irreplaceable',
    title: 'Why You Are Irreplaceable',
    subtitle: 'No substitutes. No returns. Keep forever.',
    body: 'Because you make ordinary days feel safe and special at the same time. Because your laugh is my reset button. Because even when I mess up, you still somehow make me want to become someone worthy of your trust. You are rare — and on your birthday, I need you to feel how deeply you’re loved, celebrated, and kept.',
    image: '/images/memory-15.jpeg',
    alignment: 'right',
    accent: 'from-champagne/30 to-transparent',
  },
]

export type Quality = {
  id: string
  title: string
  description: string
  gradient: string
}

export const qualities: Quality[] = [
  {
    id: 'kind',
    title: 'Kind',
    description:
      'You soften the world without asking for credit. Even when I’m being difficult (don’t deny it — you know), your kindness somehow finds me anyway.',
    gradient: 'from-[#3d6b6b] to-[#1a2e2e]',
  },
  {
    id: 'beautiful',
    title: 'Beautiful',
    description:
      'Yes, you’re stunning — and no, I’m not flattering you for birthday points. Your beauty is the way you light up a room and still check if everyone else is okay.',
    gradient: 'from-[#8b5a6b] to-[#3a2430]',
  },
  {
    id: 'strong',
    title: 'Strong',
    description:
      'You’ve carried more than you should have — including, sometimes, the weight I put on you. Your strength isn’t loud. It’s elegant. And I’m proud of you.',
    gradient: 'from-[#a68b5b] to-[#3d3220]',
  },
  {
    id: 'funny',
    title: 'Funny',
    description:
      'You roast me with Olympic precision and still make it feel like affection. Never stop. My ego can take it. Mostly.',
    gradient: 'from-[#6b5a8b] to-[#2a2438]',
  },
  {
    id: 'smart',
    title: 'Smart',
    description:
      'You see through people — including me — which is terrifying and comforting. Keep that beautiful, sharp mind. The world needs it. So do I.',
    gradient: 'from-[#5a7a8b] to-[#1e2a32]',
  },
  {
    id: 'supportive',
    title: 'Supportive',
    description:
      'You show up. Even on days I didn’t deserve it. That’s not something I take lightly anymore — it’s something I thank you for, every quiet chance I get.',
    gradient: 'from-[#6b8b5a] to-[#24301e]',
  },
  {
    id: 'caring',
    title: 'Caring',
    description:
      'You notice the tiny things. The mood shifts. The unsaid sentences. I’m sorry for the times I didn’t match that care — and I’m trying to.',
    gradient: 'from-[#8b6b5a] to-[#32241e]',
  },
  {
    id: 'creative',
    title: 'Creative',
    description:
      'You turn feelings into beauty. Ideas into sparkle. Even your chaos has aesthetic. It’s unfair, honestly.',
    gradient: 'from-[#8b5a7a] to-[#321e2a]',
  },
  {
    id: 'inspiring',
    title: 'Inspiring',
    description:
      'Being around you makes me want to be softer, braver, better. If that’s not magic, I don’t know what is. Happy birthday, my favorite spark.',
    gradient: 'from-[#5a6b8b] to-[#1e2432]',
  },
]

export type TimelineEvent = {
  id: string
  year: string
  title: string
  message: string
  image: string
  icon: 'spark' | 'heart' | 'star' | 'gift' | 'moon'
}

export const timeline: TimelineEvent[] = [
  {
    id: 't1',
    year: 'Day One',
    title: 'The First Hello',
    message:
      'I didn’t know a simple hello would become my favorite story. Looking back, that was the day happiness quietly learned my address — and your name was on the door.',
    image: '/images/memory-04.jpeg',
    icon: 'spark',
  },
  {
    id: 't2',
    year: 'Year One',
    title: 'Becoming Us',
    message:
      'Teasing turned into trust. Banter turned into belonging. We became that pair who could fight over nothing and laugh about everything. I treasure that.',
    image: '/images/memory-07.jpeg',
    icon: 'heart',
  },
  {
    id: 't3',
    year: 'The Hard Chapter',
    title: 'When I Hurt You',
    message:
      'There were days I made you feel less important than you are. Times my silence, ego, or carelessness left you sad — maybe even heartbroken. I’m sorry. Truly. You deserved gentleness, and I didn’t always give it. If I could rewrite those hours, I would. What I can do is own them, learn from them, and love you better from here.',
    image: '/images/memory-11.jpeg',
    icon: 'moon',
  },
  {
    id: 't4',
    year: 'Highlight',
    title: 'Coming Back to Light',
    message:
      'Even after storms, you still somehow found ways to smile — and let me back into the warmth. That grace isn’t something I’ll ever take for granted. Thank you for staying soft in a world that tries to harden us.',
    image: '/images/memory-12.jpeg',
    icon: 'star',
  },
  {
    id: 't5',
    year: 'Today',
    title: 'Still Choosing You — Happier, Kinder',
    message:
      'On your birthday, I’m not just celebrating your life. I’m celebrating the chance to keep becoming someone who makes you feel safe, seen, and silly-happy. More laughter. Fewer apologies needed. Same us — better me.',
    image: '/images/memory-14.jpeg',
    icon: 'gift',
  },
]

export type Moment = {
  id: string
  title: string
  description: string
  image: string
}

export const moments: Moment[] = [
  {
    id: 'm1',
    title: 'Late-night talks',
    description:
      'Hours vanishing into honesty — the kind where we tease, confess, heal, and somehow end up laughing at 2 a.m. anyway.',
    image: '/images/memory-05.jpeg',
  },
  {
    id: 'm2',
    title: 'Shared playlists',
    description:
      'Songs that still feel like us: soft ones for the apologies, loud ones for the joy, and that one track you’ll deny is our song (it is).',
    image: '/images/memory-09.jpeg',
  },
  {
    id: 'm3',
    title: 'Quiet support',
    description:
      'When words weren’t enough — or when I owed you better ones. You still sat with me. I’m learning to sit with you the same way.',
    image: '/images/memory-10.jpeg',
  },
  {
    id: 'm4',
    title: 'Celebrations',
    description:
      'Cheering for your wins like fireworks. Today, it’s your turn to be spoiled with light. Don’t argue. Birthday rules.',
    image: '/images/memory-13.jpeg',
  },
]

export type Message = {
  id: string
  from: string
  text: string
}

export const messages: Message[] = [
  {
    id: 'msg1',
    from: 'Your Best Friend',
    text: 'Happy Birthday. You make my world brighter — even when you pretend you don’t know it. (You know it.)',
  },
  {
    id: 'msg2',
    from: 'A softer version of me',
    text: 'I’m sorry for every time I made your heart ache. You deserved better from me then — and I’m working to be that better, for you.',
  },
  {
    id: 'msg3',
    from: 'Your official teaser & biggest fan',
    text: 'May this year flood you with reasons to smile so wide that even your “I’m annoyed” face can’t hide it. I love that face, by the way.',
  },
]

export const letterContent = {
  greeting: 'My dearest friend,',
  paragraphs: [
    'Happy birthday. Before the cake, before the wishes from everyone else — I needed this space to tell you something with my whole chest: you make me happier than I know how to explain. Like, unfairly happier. The kind that sneaks up mid-sentence and ruins my cool.',
    'And yes, I’m going to tease you a little — because that’s us. You’re dramatic in the cutest ways, stubborn in the bravest ways, and somehow always right when I least want you to be. Don’t look so smug. Okay… look a little smug. You’ve earned it.',
    'But I also owe you more than jokes. I’m sorry — deeply — for every moment I made you feel heartbroken, ignored, or smaller than the miracle you are. For the times my words cut, my silence stung, or my mistakes left you carrying sadness that wasn’t yours to hold. You didn’t deserve that. I hate that I ever put that weight on someone as soft-hearted and rare as you.',
    'If I could gather those days and undo them, I would. What I can offer instead is this truth: I see you. I value you. I’m grateful you stayed. And I’m choosing — every day from here — to be gentler with your heart, because it is one of the most precious things I’ve ever been trusted with.',
    'So on your birthday, I hope you feel celebrated loudly and loved quietly. I hope you laugh until your stomach hurts. I hope you feel light again. You deserve every soft morning, every silly night, every adventure that reminds you how wonderful you are — not someday. Now. Always.',
  ],
  closing: 'With all my heart (and a little teasing),',
  signature: '— Forever yours in friendship, forever sorry when I fall short, forever proud you’re in my life',
}

export const motivationalQuotes = [
  'You are allowed to take up space and still be soft.',
  'Your smile is not optional today. Birthday policy.',
  'You are someone’s favorite chapter — mine, obviously.',
  'Keep glowing. I’ll keep learning how to protect that light.',
  'Happy looks good on you. Wear it often.',
  'Even on hard days, you are still the softest kind of brave.',
]

export const floatingWishes = [
  'Happy Birthday, beautiful soul',
  'May this year be gentle — and wildly joyful',
  'More laughter. Fewer heavy hearts.',
  'You are deeply loved (yes, even when I tease you)',
  'Sorry for the storms. Thank you for the sunshine.',
  'Here’s to healing, happiness, and us — better',
]

export const secretMessage =
  'Psst… you found the hidden note. Quick truth: I’m sorry for every time I made you cry or feel alone because of me. And louder truth: you are the happiness I didn’t know I needed. Stay soft. Stay you. I’m lucky beyond words.'

export const finaleLines = {
  headline: 'Happy Birthday',
  deserve: 'You deserve every happiness in the world — and none of the heartbreak I ever caused.',
  thankYou:
    'Thank you for being the most wonderful person in my life. For the laughs, the teases, the forgiveness, and the second chances. I promise to keep choosing kindness with you.',
  tease: 'Now go be spoiled. That’s an order. (See? Still teasing. Love you.)',
}

export const surpriseCopy = {
  giftReady: 'A gift awaits you — no, you can’t negotiate. Open it.',
  afterOpen:
    'May this year wrap you in soft light, wild joy, and every beautiful thing you give so freely. I’m sorry for the days I dimmed that light — and I’m celebrating every day I get to help it shine again.',
}

export const galleryCategories = [
  'All',
  'Adventures',
  'Everyday',
  'Quiet',
  'Celebrations',
] as const
