/** Editable content — replace placeholders with your real memories & names */

export const SITE = {
  herName: 'Vampire', // Change to her name
  yourName: 'Your Best Friend',
  /** ISO date for the birthday countdown (YYYY-MM-DDTHH:mm:ss) */
  birthdayDate: '2026-07-20T23:59:59',
  tagline: 'Someone very special (yes, you — don’t act surprised) has a surprise waiting...',
  musicUrl: '', // Optional: path to /music/bg.mp3 in public folder
} as const

export const NAV_LINKS = [
  { path: '/', label: 'Intro' },
  { path: '/messages', label: 'Letter' },
  { path: '/qualities', label: 'Qualities' },
  { path: '/story', label: 'Memories' },
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
    caption: 'Zero plans. Best day.',
    date: '2024-05-10',
    location: 'Among the sculptures',
    category: 'Adventures',
  },
  {
    id: '3',
    image: '/images/memory-03.jpeg',
    caption: 'First natak… and then the tears',
    date: '2025-04-05',
    location: 'The show',
    category: 'Celebrations',
  },
  {
    id: '4',
    image: '/images/memory-04.jpeg',
    caption: 'The only bad photo — and she clicked it',
    date: '2024-03-22',
    location: 'Movie night',
    category: 'Everyday',
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
    title: 'The Unplanned Visit',
    subtitle: 'No plan. No map. Still perfect.',
    body: 'We didn’t wake up that day thinking we’d end up wandering through halls of sculptures and quiet wonder — it just… happened. Totally unplanned. You, smiling between those giant stone forms like you belonged in a painting yourself. That’s the thing about us: the best memories aren’t the ones we schedule. They’re the ones where we say “why not?” and somehow find magic standing right next to you.',
    image: '/images/memory-02.jpeg',
    alignment: 'right',
    accent: 'from-aurora-rose/40 to-transparent',
  },
  {
    id: 'adventures',
    title: 'First Natak',
    subtitle: 'We went for a play. She left with tears. Classic.',
    body: 'Our first theatre trip — we went to watch a natak, nothing complicated. Show ends… and you\'re crying. Not because anyone was mean. Because the natak hit you that hard. Overwhelmed. Full emotions. Zero chill. And of course I’m never letting you forget it. Vampire can handle midnight vibes, but one good natak and the old lady’s tears show up on cue. I’m still teasing you for this. Forever.',
    image: '/images/memory-03.jpeg',
    alignment: 'left',
    accent: 'from-aurora-gold/40 to-transparent',
  },
  {
    id: 'crazy',
    title: 'The Accidental Masterpiece',
    subtitle: 'Movie night. One click. Legendary blur.',
    body: 'We went to watch a movie — normal plan. Then you accidentally clicks a photo in the dark and somehow creates the only bad picture I have of you. Blurry. Grainy. Zero warning. Peak Vampire cinematography. I keep it forever… not because it’s pretty, because it’s proof you can mess up a selfie and still give me unlimited teasing material.',
    image: '/images/memory-04.jpeg',
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
  image?: string
}

export const qualities: Quality[] = [
  {
    id: 'trekker',
    title: 'Trekker',
    description:
      'You actually like trekking — mountains, mist, tired legs, the whole thing. This photo is proof. While I’m over here calling you Vampire and old lady, you’re out there climbing like it’s a casual Sunday. Respect. (Also slightly jealous. Don’t tell anyone.)',
    gradient: 'from-[#3d5a4a] to-[#1a2e24]',
    image: '/images/memory-14.jpeg',
  },
  {
    id: 'kind',
    title: 'Kind',
    description:
      'You’re kind in the quiet ways — checking in, listening properly, caring even when nobody asked you to. Soft smile, soft heart, zero performance. That’s why “kind” sticks on you so easily.',
    gradient: 'from-[#3d6b6b] to-[#1a2e2e]',
    image: '/images/memory-06.jpeg',
  },
  {
    id: 'beautiful',
    title: 'Beautiful',
    description:
      'Yeah, you’re beautiful. Not writing a speech about it. This photo already did the job. Vampire in a saree still somehow looks like an old lady who dressed up too well — and I’m still going to tease you for it.',
    gradient: 'from-[#8b5a6b] to-[#3a2430]',
    image: '/images/memory-15.jpeg',
  },
  {
    id: 'pictures',
    title: 'Picture Person',
    description:
      'Proof you like taking pictures. Pose ready, flowers in hair, full main-character setup. I’m not even surprised your profile tells all. Keep clicking, Vampire.',
    gradient: 'from-[#4a6b3d] to-[#1e2e1a]',
    image: '/images/memory-11.jpeg',
  },
  {
    id: 'travel',
    title: 'Always Ready',
    description:
      'Say “travel” and you’re already packed in your head. Mountains, random trips, “let’s go” energy — this photo is evidence. Old lady? Please. You’re always ready to go out.',
    gradient: 'from-[#5a7a8b] to-[#1e2a32]',
    image: '/images/memory-08.jpeg',
  },
  {
    id: 'funny',
    title: 'Funny',
    description:
      'This face. This pose. This hat drama. You’re funny without even trying — and when you do try, it’s worse (for me). Keep being chaotic, Vampire. Free entertainment.',
    gradient: 'from-[#6b5a8b] to-[#2a2438]',
    image: '/images/memory-07.jpeg',
  },
  {
    id: 'supportive',
    title: 'Supportive',
    description:
      'You show up when it matters. You listen, you stay, you make hard days easier without making a big deal out of it. That’s what supportive looks like — and this is you.',
    gradient: 'from-[#6b8b5a] to-[#24301e]',
    image: '/images/memory-02.jpeg',
  },
  {
    id: 'caring',
    title: 'Caring',
    description:
      'You care in small, steady ways — checking in, noticing things, being gentle when someone needs it. Soft presence, real heart. That’s why caring fits you.',
    gradient: 'from-[#8b6b5a] to-[#32241e]',
    image: '/images/memory-13.jpeg',
  },
  {
    id: 'creative',
    title: 'Creative',
    description:
      'You paint. You make things. This sketchbook page is proof — colors, details, actual talent. Creative isn’t a compliment here, it’s just facts. Keep painting, Vampire.',
    gradient: 'from-[#8b5a7a] to-[#321e2a]',
    image: '/images/memory-16.jpeg',
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
    year: 'Highlight',
    title: 'Movie Night Fail Cam',
    message:
      'She accidentally clicked this in the dark at the movies — the only bad photo I’ve got of her. Instant teasing rights unlocked. Forever.',
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
    from: 'Your best friend',
    text: 'You bring a smile on my face… and then I text “I hate you” five minutes later. Balance.',
  },
  {
    id: 'msg2',
    from: 'Slightly sorry edition',
    text: 'Sorry for the times I hurt you. Still not sorry for the “I hate you” spam. That’s sacred.',
  },
  {
    id: 'msg3',
    from: 'Official hate-mail department',
    text: 'Happy birthday, Vampire. I hate you. (Translation: you already know.)',
  },
]

export type LetterLine = {
  text: string
  emoji?: string
  vibe?: 'normal' | 'tease' | 'sorry' | 'fun'
}

export const letterContent = {
  greeting: 'Dear Vampire,',
  lines: [
    {
      text: 'Happy birthday. Writing you an actual letter felt weirdly formal for us, but here we are anyway — ink, jokes, and all.',
      emoji: '✉️',
      vibe: 'fun',
    },
    {
      text: 'Somehow you still manage to bring a smile on my face. Random messages, late-night talks about nothing and everything, you dumping every little update like breaking news… and I’m sitting there grinning like an idiot. Don’t get used to me admitting that.',
      emoji: '😊',
      vibe: 'normal',
    },
    {
      text: 'And yes — I still hurt you sometimes. Wrong timing. Dumb replies. Teasing that goes one line too far. I’m sorry for those moments. Not a dramatic speech. Just a real one. You didn’t deserve that.',
      emoji: '🙏',
      vibe: 'sorry',
    },
    {
      text: 'Also, important public record: I hate you. I will keep messaging “I hate you” for no reason, at random hours, with zero plot. I don’t actually hate you. Obviously. It’s just our stupid tradition now and I’m not quitting.',
      emoji: '💀',
      vibe: 'tease',
    },
    {
      text: 'So that’s the friendship: you make me smile, I still mess up sometimes, and I hate you (affectionately, constantly, for no reason). Late nights, shared chaos, old-lady jokes, Vampire titles — all of it.',
      emoji: '🦇',
      vibe: 'tease',
    },
    {
      text: 'Happy birthday. Stay roastable. Stay dramatic. And when I text “I hate you” later tonight… you already know what it means.',
      emoji: '🎂',
      vibe: 'fun',
    },
    {
      text: 'Remember our late nights? You talking about your day in full detail, me pretending I’m annoyed while actually waiting for the next message. That’s peak best-friend behaviour and I’m not ashamed.',
      emoji: '🌙',
      vibe: 'normal',
    },
    {
      text: 'You cry at a natak, click the world’s worst movie selfie by accident, get called Vampire and old lady on loop — and somehow I’m the one laughing harder. Thanks for the free comedy, truly.',
      emoji: '😂',
      vibe: 'tease',
    },
    {
      text: 'If I ever go quiet or get weird for a bit, it isn’t because I stopped caring. Sometimes I’m just bad at saying the normal thing. Then I recover the only way I know: “I hate you.”',
      emoji: '📱',
      vibe: 'sorry',
    },
    {
      text: 'Anyway — another year of you existing means another year of me having someone to spam, roast, and accidentally care about. Don’t make it weird. I already said too much.',
      emoji: '✨',
      vibe: 'fun',
    },
  ] as LetterLine[],
  closing: 'Yours (unfortunately),',
  signature: '— Your best friend who hates you (but doesn’t)',
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
}

export const surpriseCopy = {
  giftReady: 'Open it, Vampire. And no — being an “old lady” is not a valid excuse to skip gifts.',
  afterOpenTitle: 'Happy Birthday, Vampire!',
  afterOpen:
    'Another year older… I mean wiser… I mean — still getting called old lady by me on purpose. You’re not actually old. I just refuse to miss a single chance to tease you. Say literally anything and I’ll find a joke. That’s the deal. Bleh bleh.',
  teases: [
    'You: “I’m tired.” Me: “Obviously. You’re an old lady, Vampire.”',
    'You: “Don’t call me old.” Me: “Okay Vampire.” (still calling you old)',
    'You: “I’m not a vampire.” Me: “Then why the midnight energy, Vampire?”',
    "You breathe wrong and somehow I still roast you. That's talent, Vampire.",
    'Happy birthday, my favorite old lady + Vampire. Argue all you want — I’m not stopping.',
  ],
}

