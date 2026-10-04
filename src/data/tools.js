/* Premium tools — English one-liners. Price = base + 15%, rounded. PKR. */
const price = (base) => Math.round(base * 1.15);

const T = (name, base, cat, stock, blurb, features = []) => ({
  slug: name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
  name, base, cat, stock, blurb, features,
  price: price(base),
});

export const TOOLS = [
  T("Capcut Pro 1 Month", 739, "Video", 217, "Full CapCut Pro access for 30 days — all premium effects, no watermark.", ["Private Pro account", "All premium effects & transitions", "Delivery within 10 minutes"]),
  T("HMA Vpn Monthly", 240, "VPN", 116, "HideMyAss VPN for a month — fast servers for streaming and work.", ["30-day access", "Works on mobile + PC", "Delivery within 10 minutes"]),
  T("Capcut Pro 7 Days", 145, "Video", 109, "One week of CapCut Pro — perfect for a single project sprint.", ["7-day Pro access", "All premium features", "Delivery within 10 minutes"]),
  T("Capcut Pro 6 Months", 3799, "Video", 43, "Half a year of CapCut Pro at a fraction of the official price.", ["180-day Pro access", "Priority support", "Delivery within 10 minutes"]),
  T("Canva Admin Panel 3Year (2MW)", 2399, "Design", 9, "Canva admin panel access for 3 years — invite team members yourself.", ["3-year access", "Admin controls", "2 member seats"]),
  T("Figma Professional Edu 2 Year", 2100, "Design", 4, "Figma Professional (education plan) for 2 years — for designers.", ["2-year Professional", "Team libraries", "Delivery within 10 minutes"]),
  T("Lovable Lite 12 Months", 3299, "AI", null, "Build apps with AI prompts — Lovable Lite for a full year.", ["12-month access", "AI app builder", "Delivery within 10 minutes"]),
  T("I Love Pdf Yearly", 549, "Productivity", 1000, "iLovePDF premium for a year — every PDF tool unlocked.", ["12-month premium", "All PDF tools", "Delivery within 10 minutes"]),
  T("Microsoft 365 Plus 1 Year", 579, "Productivity", 999, "Microsoft 365 with 1TB OneDrive for 12 months.", ["Word, Excel, PowerPoint", "1TB OneDrive", "Delivery within 10 minutes"]),
  T("Canva Edu 3 Years Invite On Client Mail", 250, "Design", 70, "Canva Education access invited directly to your own email — 3 years.", ["Invite on your email", "3-year access", "Delivery within 10 minutes"]),
  T("ElevenLabs 300k Credits No Expiry", 2900, "AI", 2, "300,000 ElevenLabs voice credits that never expire.", ["300k credits", "No expiry", "Studio-quality voices"]),
  T("Muse Ai 1B Credits", 790, "AI", 1, "1 billion credits for AI image generation.", ["1B generation credits", "Delivery within 10 minutes"]),
  T("Netflix 4k 1 Month Profile", 419, "Streaming", 4, "Netflix 4K profile for one month.", ["4K Ultra HD", "Private profile", "Delivery within 10 minutes"]),
  T("Nord Vpn 3 Months On Client Mail", 1480, "VPN", 1, "NordVPN for 3 months, activated on your own email.", ["On your email", "3-month plan", "Top-tier speeds"]),
  T("Rare Expensive Vip Methods Channel Lifetime Entry", 14029, "Course", 2, "Lifetime entry to a private VIP methods channel — rare, high-value strategies.", ["Lifetime access", "Private channel", "Rare methods"]),
  T("YouTube Premium 2 Months On Your Mail", 649, "Streaming", 1, "YouTube Premium for 2 months on your own Gmail — no ads, background play.", ["On your email", "2 months", "No ads + background play"]),
  T("TikTok USA / UK Account — Fresh on Client Gmail", 500, "Accounts", null, "Fresh TikTok account set up for USA/UK targeting, created on your Gmail.", ["Fresh account", "USA/UK targeting setup", "On your Gmail"]),
];

export const toolBySlug = (slug) => TOOLS.find((t) => t.slug === slug);
export const TOOL_CATS = ["All", "AI", "Video", "Design", "VPN", "Productivity", "Streaming", "Course", "Accounts"];
