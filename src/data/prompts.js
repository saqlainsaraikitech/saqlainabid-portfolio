/* Master Prompts — English editions. Each post: guide + copyable prompt. */
export const PROMPTS = [
  {
    slug: "viral-ai-toy-video-prompt",
    title: "Viral AI Toy Video Prompt (Unboxing Style)",
    category: "Video",
    date: "2026-09-20",
    readTime: "6 min read",
    excerpt: "The exact prompt structure behind viral AI toy unboxing videos — character lock, camera moves and sound design included.",
    body: [
      { h: "What this prompt does" },
      { p: "It generates a complete, production-ready prompt for a viral-style AI toy video: a consistent character, a surprise reveal moment, and sound effects described scene by scene." },
      { h: "How to use it" },
      { ol: ["Copy the master prompt below.", "Replace [CHARACTER] and [TOY] with your own.", "Paste it into your AI video tool (Veo / Flow / Runway).", "Generate, then add trending audio in your editor."] },
      { h: "Pro tip" },
      { tip: "Keep the character description identical across every video. Consistency is what turns one viral video into a viral series." },
    ],
    prompt: "Create a viral AI toy unboxing video. CHARACTER: [CHARACTER] — describe appearance in detail and keep it identical in every shot. SCENE 1: Close-up of a mystery gift box on a wooden table, soft studio lighting, camera slowly pushes in. SCENE 2: [CHARACTER]'s hands open the box — golden light spills out, excited gasp sound effect. SCENE 3: Reveal — [TOY] rises from the box with sparkle particles, camera orbits 180 degrees. SCENE 4: [CHARACTER] holds [TOY] up to camera, big smile, confetti burst. STYLE: photorealistic, 4K detail, warm cinematic lighting. SOUND: box rustle, magical chime on reveal, cheerful pop on confetti. DIALOGUE: none — let visuals and sound carry it. DURATION: 8 seconds, vertical 9:16.",
  },
  {
    slug: "faceless-youtube-script-prompt",
    title: "Faceless YouTube Script Prompt (High Retention)",
    category: "YouTube",
    date: "2026-09-14",
    readTime: "5 min read",
    excerpt: "Turn any topic into a high-retention faceless YouTube script — hook, open loops and chapter pacing built in.",
    body: [
      { h: "What this prompt does" },
      { p: "It writes a complete faceless YouTube script engineered for retention: a 15-second hook, open loops every 60–90 seconds, and visual directions for your editor in every section." },
      { h: "How to use it" },
      { ol: ["Copy the master prompt below.", "Replace [TOPIC] and [AUDIENCE] with yours.", "Paste into ChatGPT / Claude / Gemini.", "Read it aloud once — cut anything that drags."] },
      { h: "Pro tip" },
      { tip: "The first 15 seconds decide everything. Never start with 'Hey guys welcome back' — start mid-story." },
    ],
    prompt: "Write a high-retention faceless YouTube script. TOPIC: [TOPIC]. AUDIENCE: [AUDIENCE]. STRUCTURE: 1) HOOK (first 15 seconds) — start mid-story with the most surprising fact, no introductions. 2) STAKES — why the viewer should care, in one sentence. 3) BODY — 4 sections, each ending with an open loop teasing the next. 4) PAYOFF — deliver the promised insight clearly. 5) CTA — one soft call to action. RULES: conversational tone, short sentences, one idea per paragraph, [VISUAL: ...] direction notes for the editor every 3–4 lines, total 1,200–1,500 words. Avoid fluff, repetition and generic advice — every line must earn the next 10 seconds of watch time.",
  },
  {
    slug: "cinematic-character-prompt",
    title: "Cinematic AI Character Prompt (Consistent Face)",
    category: "AI Art",
    date: "2026-09-08",
    readTime: "5 min read",
    excerpt: "Generate a consistent cinematic character you can reuse across videos, thumbnails and stories.",
    body: [
      { h: "What this prompt does" },
      { p: "It creates a locked character reference: fixed facial features, fixed outfit, fixed art style — so your character looks the same in every generation." },
      { h: "How to use it" },
      { ol: ["Copy the master prompt below.", "Fill in [AGE], [STYLE] and [SETTING].", "Generate 4–6 variations and pick the strongest face.", "Reuse that exact description block in every future prompt."] },
      { h: "Pro tip" },
      { tip: "Save your winning character block in a notes app. Paste it verbatim every time — even small wording changes drift the face." },
    ],
    prompt: "Create a cinematic character portrait. CHARACTER: [AGE]-year-old [ROLE], [STYLE] art style. FACE (LOCK THIS): symmetrical face, [EYE COLOR] eyes, [HAIR], [DISTINCTIVE FEATURE — e.g. small scar on left cheek]. OUTFIT (LOCK THIS): [OUTFIT DESCRIPTION]. SETTING: [SETTING], dramatic rim lighting, shallow depth of field. STYLE: ultra-detailed, film-still quality, 35mm look, natural skin texture. NEGATIVE: cartoon, blurry, distorted hands, extra fingers, watermark, text. OUTPUT: portrait orientation, character centered, head and shoulders. IMPORTANT: This exact face and outfit description must be reused word-for-word in all future generations of this character.",
  },
  {
    slug: "product-photo-ad-prompt",
    title: "Product Photo Ad Prompt (E-commerce)",
    category: "Design",
    date: "2026-09-01",
    readTime: "4 min read",
    excerpt: "Turn a plain product photo into a scroll-stopping ad creative with one prompt.",
    body: [
      { h: "What this prompt does" },
      { p: "It directs an AI image tool to rebuild your product shot as premium ad creative: scene, lighting, props and copy space — all described." },
      { h: "How to use it" },
      { ol: ["Copy the master prompt below.", "Describe your [PRODUCT] precisely.", "Upload your product photo as reference if your tool supports it.", "Generate 3 options and test them as ads."] },
      { h: "Pro tip" },
      { tip: "Leave empty space on one side of the frame — that's where your headline goes in the ad." },
    ],
    prompt: "Transform this into premium e-commerce ad creative. PRODUCT: [PRODUCT] — keep its exact shape, color and branding. SCENE: [PRODUCT] on a [SURFACE] with [PROPS], [BACKGROUND] background, soft commercial lighting with gentle shadow. COMPOSITION: product slightly right of center, clean negative space on the left for headline text. STYLE: high-end product photography, sharp focus, vibrant but natural colors, 4K detail. MOOD: premium, trustworthy, aspirational. NEGATIVE: distorted logo, warped product shape, blurry, watermark, extra objects touching the product.",
  },
];

export const promptBySlug = (slug) => PROMPTS.find((p) => p.slug === slug);
export const PROMPT_CATS = ["All", "Video", "YouTube", "AI Art", "Design"];
