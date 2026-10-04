export const SITE = {
  name: "Saqlain Abid",
  brand: "saqlainabid.com",
  tagline: "I fix the reason clients aren't coming.",
  email: "hello@saqlainabid.com",
  gmail: "saqlainbuttofficial@gmail.com",
  whatsapp: "923306563410",
  whatsappDisplay: "+92 330 6563410",
  location: "Pakistan · Working worldwide",
  formAction: "https://formsubmit.co/ajax/saqlainbuttofficial@gmail.com",
  socials: [
    { key: "youtube", label: "YouTube", url: "https://www.youtube.com/@saraikitechofficial1", color: "#ff0000" },
    { key: "tiktok", label: "TikTok", url: "https://www.tiktok.com/@saraikitechofficial", color: "#000000" },
    { key: "facebook", label: "Facebook", url: "https://www.facebook.com/saraikitechofficial/", color: "#1877f2" },
    { key: "whatsapp", label: "WhatsApp Channel", url: "https://whatsapp.com/channel/0029Vb6q1XhI1rco3rRbyi2h", color: "#25d366" },
    { key: "email", label: "Email", url: "mailto:saqlainbuttofficial@gmail.com", color: "#1a73e8" },
  ],
};

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/courses", label: "Courses" },
  { href: "https://saraikitech.com/prompts", label: "Prompts", external: true },
  { href: "https://digitalmax.pk/tools", label: "Tools", external: true },
  { href: "https://lms.digitalmax.pk/", label: "LMS", external: true },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export const waLink = (text) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
