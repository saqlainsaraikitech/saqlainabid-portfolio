/* Automation courses — English editions of the Saraiki Tech curricula. Fees in PKR. */
export const COURSES = [
  {
    slug: "youtube-automation",
    name: "YouTube Automation Crash Course",
    tagline: "Build a faceless, monetizable YouTube channel — niche to payout.",
    image: "/images/course-youtube.jpg",
    duration: "1.5 months",
    fee: 6000, deal: 2500,
    points: ["Niche selection that actually monetizes", "Faceless video production system", "Upload + SEO workflow", "Monetization & payout setup"],
    overview: "A complete, practical system for building a YouTube channel without showing your face: picking a profitable niche, producing videos with AI tools, packaging them to get clicked, and setting up monetization and payouts correctly.",
    phases: [
      ["Foundation", "How YouTube automation works, realistic timelines, and what the algorithm actually rewards."],
      ["Niche & Channel Setup", "Picking a monetizable niche, channel branding, and settings that don't cause problems later."],
      ["Content System", "AI-assisted scripting, voiceover, visuals and editing — a repeatable video pipeline."],
      ["Upload & SEO", "Titles, thumbnails, tags and descriptions that rank and get clicked."],
      ["Monetize & Scale", "AdSense approval, payout setup, and scaling what works."],
    ],
    includes: ["Step-by-step video lessons", "15 detailed lessons", "Niche research templates", "Upload SEO checklist", "Private support group", "Lifetime access + updates"],
  },
  {
    slug: "tiktok-automation",
    name: "TikTok Automation Crash Course",
    tagline: "Viral short-form content on autopilot — trends, AI videos, monetization.",
    image: "/images/course-tiktok2.jpg",
    duration: "1 month",
    fee: 5000, deal: 2000,
    points: ["Trending AI video creation", "Copyright-safe content system", "Account setup (PK + USA/UK)", "Posting + growth strategy"],
    overview: "Everything about growing on TikTok with automation: trending AI videos, a copyright-safe content system, correct account setup for Pakistan and USA/UK targeting, and a posting strategy built for the algorithm.",
    phases: [
      ["Foundation", "How TikTok's algorithm works and what makes short videos go viral."],
      ["Trending AI Videos", "Creating trend-driven AI videos with the exact tools and prompts."],
      ["Copyright Content System", "Niche selection, heavy editing techniques, upload tricks and strike safety."],
      ["Account Setup", "Fresh accounts done right — Pakistan setup and USA/UK premium targeting."],
      ["Growth & Monetization", "Posting cadence, analytics reading, and turning views into income."],
    ],
    includes: ["Step-by-step video lessons", "47 detailed lessons", "Prompt + editing packs", "Private support group", "Lifetime access + updates"],
  },
  {
    slug: "facebook-automation",
    name: "Facebook Automation Crash Course",
    tagline: "Pages, content systems and payouts — Facebook done properly.",
    image: "/images/course-facebook.jpg",
    duration: "1.5 months",
    fee: 6000, deal: 2500,
    points: ["Page setup that avoids restrictions", "3–4 month content roadmap", "USA/UK premium audience setup", "Payout & scaling system"],
    overview: "The full Facebook play: foundation, correct Pakistan setup, USA/UK premium audience targeting, a 3–4 month content roadmap, and the payout and scaling system most people get wrong.",
    phases: [
      ["Foundation", "How Facebook monetization works and realistic expectations."],
      ["Pakistan Setup", "Pages, profiles and settings done correctly from day one."],
      ["USA/UK Premium Setup", "Targeting premium audiences and higher-RPM content."],
      ["Content Roadmap", "A 3–4 month posting plan with content pillars."],
      ["Scale & Payout", "Payout setup, policy safety and scaling winners."],
    ],
    includes: ["Step-by-step video lessons", "35 detailed lessons", "Content calendar templates", "Private support group", "Lifetime access + updates"],
  },
];

export const courseBySlug = (slug) => COURSES.find((c) => c.slug === slug);
