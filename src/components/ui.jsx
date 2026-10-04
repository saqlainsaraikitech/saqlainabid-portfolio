import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDown, Star, ArrowRight, Check } from "lucide-react";

/* Reveal — animates on mount (not on scroll-into-view).
   whileInView kabhi kabhi SPA navigation par atak jata tha (content invisible
   rehta tha jab tak refresh na ho), is liye deterministic mount animation. */
export function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 26 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function ServiceCard({ s, i, badge }) {
  return (
    <Link to={`/services/${s.slug}`} className="bsvc-card">
      <div className="bsvc-media">
        <img src={s.image} alt={s.name} loading="lazy" />
        <span className="bsvc-num">{String(i + 1).padStart(2, "0")}</span>
        {badge && <span className="bsvc-badge">{badge}</span>}
      </div>
      <div className="bsvc-body">
        <h3>{s.name}</h3>
        <p>{s.short}</p>
        <div className="bsvc-foot">
          <span className="bsvc-link">Explore <ArrowRight size={15} /></span>
        </div>
      </div>
    </Link>
  );
}

export function SectionHead({ kicker, title, sub, center = false, dark = false }) {
  return (
    <Reveal className={`sec-head ${center ? "center" : ""} ${dark ? "dark" : ""}`}>
      {kicker && <span className="kicker">{kicker}</span>}
      <h2>{title}</h2>
      {sub && <p>{sub}</p>}
    </Reveal>
  );
}

export function Stars() {
  return (
    <div className="stars" aria-label="5 star rating">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} size={15} fill="currentColor" strokeWidth={0} />
      ))}
    </div>
  );
}

export function Faq({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="faq">
      {items.map((f, i) => (
        <div key={i} className={`faq-item ${open === i ? "open" : ""}`}>
          <button onClick={() => setOpen(open === i ? -1 : i)}>
            <span>{f.q}</span>
            <ChevronDown size={18} className={`chev ${open === i ? "rot" : ""}`} />
          </button>
          <div className="faq-a" style={{ maxHeight: open === i ? 300 : 0 }}>
            <p>{f.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function TickList({ items }) {
  return (
    <ul className="tick-list">
      {items.map((t, i) => (
        <li key={i}>
          <span className="tick"><Check size={13} strokeWidth={3} /></span>
          {t}
        </li>
      ))}
    </ul>
  );
}

export function CtaBanner({ title = "Let's build something that works.", sub = "Tell me your goal — I'll tell you honestly how I'd approach it.", primary = { to: "/contact", label: "Start a Project" }, secondary = null }) {
  return (
    <Reveal className="cta-banner">
      <div>
        <h2>{title}</h2>
        {sub && <p>{sub}</p>}
      </div>
      <div className="cta-btns">
        <Link to={primary.to} className="btn btn-gold">{primary.label} <ArrowRight size={16} /></Link>
        {secondary && <Link to={secondary.to} className="btn btn-outline-light">{secondary.label}</Link>}
      </div>
    </Reveal>
  );
}

const SITE_URL = "https://saqlainabid.com";
const DEFAULT_TITLE = "Saqlain Abid — Websites, Shopify Stores, AI Content & YouTube SEO";
const DEFAULT_DESC = "Saqlain Abid builds fast websites, high-converting Shopify stores, AI content systems and YouTube SEO growth — plus automation courses, master AI prompts and premium tools. Pakistan · working worldwide.";

function setMeta(attr, key, value) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) { el = document.createElement("meta"); el.setAttribute(attr, key); document.head.appendChild(el); }
  el.setAttribute("content", value);
}

/* Per-page SEO: title + meta description + OG tags + canonical. */
export function useSEO(title, description, path = "/", noindex = false) {
  useEffect(() => {
    const t = title ? `${title} — Saqlain Abid` : DEFAULT_TITLE;
    const d = description || DEFAULT_DESC;
    const url = SITE_URL + path;
    document.title = t;
    setMeta("name", "description", d);
    setMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow");
    setMeta("property", "og:title", t);
    setMeta("property", "og:description", d);
    setMeta("property", "og:url", url);
    setMeta("name", "twitter:title", t);
    setMeta("name", "twitter:description", d);
    let link = document.head.querySelector('link[rel="canonical"]');
    if (!link) { link = document.createElement("link"); link.setAttribute("rel", "canonical"); document.head.appendChild(link); }
    link.setAttribute("href", url);
  }, [title, description, path, noindex]);
}

export function useDocTitle(title) {
  useSEO(title);
}

/* Inject a JSON-LD structured-data block; removed on unmount. */
export function JsonLd({ data }) {
  useEffect(() => {
    const el = document.createElement("script");
    el.type = "application/ld+json";
    el.textContent = JSON.stringify(data);
    document.head.appendChild(el);
    return () => { document.head.removeChild(el); };
  }, [data]);
  return null;
}

export function ScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}
