import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, GraduationCap, PenTool, Wrench, HeartHandshake } from "lucide-react";
import { Reveal, SectionHead, CtaBanner, useSEO } from "../components/ui";
import { SITE } from "../data/site";

const PILLARS = [
  { icon: GraduationCap, t: "Automation Courses", d: "I teach the exact YouTube, TikTok and Facebook systems I run — step by step, no fluff.", to: "/courses" },
  { icon: PenTool, t: "Master Prompts", d: "Battle-tested AI prompts for video, scripts and design — free, with plain-English guides.", href: "https://saraikitech.com/prompts" },
  { icon: Wrench, t: "Premium Tools", d: "Pro AI/video/design accounts at local prices, delivered on WhatsApp in minutes.", href: "https://digitalmax.pk/tools" },
  { icon: HeartHandshake, t: "Client Services", d: "Websites, Shopify stores, AI content and YouTube SEO — fixed quotes, unlimited revisions.", to: "/services" },
];

const VALUES = [
  ["Fixed quotes, always", "You know the price before work starts. No hourly meters running, no surprise invoices."],
  ["Conversion over decoration", "Pretty doesn't pay bills. Every build is engineered around the action your visitor should take."],
  ["Honest advice", "If a service won't help you, I'll say so — even if it costs me the project."],
];

export default function About() {
  useSEO("About", "Saqlain Abid — developer, automation practitioner and founder of Saraiki Tech. I build websites and Shopify stores, teach automation courses, and share master AI prompts.", "/about");
  return (
    <>
      <section className="page-hero">
        <div className="container about-hero-grid">
          <Reveal>
            <span className="kicker">About</span>
            <h1>Maker first, <em>marketer second.</em></h1>
            <p className="lede">I'm Saqlain Abid — a freelancer from Pakistan working with clients worldwide. I build things with my own hands: websites, stores, content systems, automation courses, AI tools.</p>
            <p className="body-p">This site is my workshop and my classroom at once. Businesses hire me to fix their growth; creators learn from my courses and prompts; everyone gets the same standard — things that actually work, explained honestly.</p>
            <div className="hero-btns">
              <Link to="/contact" className="btn btn-gold">Work With Me <ArrowRight size={16} /></Link>
              <a href="https://saraikitech.com" target="_blank" rel="noopener" className="btn btn-outline">Saraiki Tech <ArrowUpRight size={15} /></a>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="hero-card">
              <img src="/images/saqlain-hero.jpg" alt="Saqlain Abid" />
              <div className="hero-card-tag">{SITE.location}</div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <SectionHead kicker="What I do" title="Four pillars, one standard." center />
          <div className="pillar-grid">
            {PILLARS.map((p, i) => {
              const inner = (
                <>
                  <span className="pillar-ic"><p.icon size={22} /></span>
                  <h3>{p.t} {p.href && <ArrowUpRight size={15} />}</h3>
                  <p>{p.d}</p>
                </>
              );
              return (
                <Reveal key={p.t} delay={i * 0.06}>
                  {p.to ? (
                    <Link to={p.to} className="pillar-card link">{inner}</Link>
                  ) : (
                    <a href={p.href} target="_blank" rel="noopener" className="pillar-card link">{inner}</a>
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <SectionHead kicker="How I work" title="Three rules I don't break." center />
          <div className="steps">
            {VALUES.map((v, i) => (
              <Reveal key={i} className="step"><span className="step-n">{i + 1}</span><div><b>{v[0]}</b><p>{v[1]}</p></div></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section pt0"><div className="container">
        <CtaBanner title="Let's build something that works." sub="Tell me your goal — I'll tell you honestly how I'd approach it."
          secondary={{ to: "/services", label: "Browse Services" }} />
      </div></section>
    </>
  );
}
