import { Link } from "react-router-dom";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight, BadgeCheck, Zap, Target, TrendingUp, Copy, Wrench } from "lucide-react";
import { Reveal, SectionHead, Faq, Stars, CtaBanner, ServiceCard, JsonLd, useSEO } from "../components/ui";
import { Aurora, Tilt, VelocityMarquee } from "../components/motion";
import { coreServices } from "../data/services";
import { WORK, TESTIMONIALS, FAQS } from "../data/work";
import { COURSES } from "../data/courses";
import { waLink } from "../data/site";

const PROBLEMS = [
  { t: "Your website looks fine — but nobody contacts you.", d: "Pretty pages with no clear offer, no trust signals and no call-to-action. Visitors leave in 10 seconds." },
  { t: "Your store gets traffic — but the cart stays empty.", d: "Slow product pages, confusing checkout, zero urgency. You're paying for clicks that never convert." },
  { t: "You're invisible on Google and YouTube.", d: "Great work that nobody finds. No keyword strategy, no packaging, no reason for the algorithm to pick you." },
  { t: "Content takes forever — or sounds like a robot.", d: "Either you burn weekends writing, or AI output that embarrasses your brand. There's a better pipeline." },
];

const MARQUEE_ITEMS = ["Web Development", "Shopify Stores", "AI Content", "YouTube SEO", "Vibe Coding", "Automation Courses", "Master Prompts", "Premium Tools"];

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const copyY = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const copyO = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const visY = useTransform(scrollYProgress, [0, 1], [0, 170]);
  return (
    <section className="hero" ref={ref}>
      <Aurora />
      <div className="container hero-grid">
        <motion.div className="hero-copy" style={{ y: copyY, opacity: copyO }}>
          <Reveal>
            <span className="hero-badge"><Zap size={14} /> Freelancer · Pakistan → Worldwide</span>
            <h1>I fix the reason <em>clients aren't coming.</em></h1>
            <p className="lede">
              I'm Saqlain Abid. I build fast websites, high-converting Shopify stores,
              AI content engines and YouTube growth systems — everything engineered
              around one thing: <b>your next customer.</b>
            </p>
            <div className="hero-btns">
              <Link to="/contact" className="btn btn-gold">Start a Project <ArrowRight size={16} /></Link>
              <Link to="/services" className="btn btn-outline">Explore Services</Link>
            </div>
            <div className="hero-proof">
              <div><b>9</b><span>services</span></div>
              <div><b>9+</b><span>5-star reviews</span></div>
              <div><b>100%</b><span>fixed quotes</span></div>
            </div>
          </Reveal>
        </motion.div>
        <motion.div className="hero-visual" style={{ y: visY }}>
          <Reveal delay={0.15}>
            <Tilt>
              <div className="hero-card">
                <img src="/images/saqlain-hero.jpg" alt="Saqlain Abid" />
                <div className="hero-card-tag"><BadgeCheck size={15} /> Available for new projects</div>
              </div>
            </Tilt>
            <div className="hero-sticker s1"><TrendingUp size={16} /> Conversion-first builds</div>
            <div className="hero-sticker s2"><Target size={16} /> SEO baked in</div>
          </Reveal>
        </motion.div>
      </div>
      <VelocityMarquee items={MARQUEE_ITEMS} />
    </section>
  );
}

export default function Home() {
  useSEO("", undefined, "/");
  const core = coreServices();
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }} />
      <Hero />

      {/* Sound familiar */}
      <section className="section">
        <div className="container">
          <SectionHead kicker="Sound familiar?" title="Your business has a leak. I find it and fix it." center />
          <div className="prob-grid">
            {PROBLEMS.map((p, i) => (
              <Reveal key={i} delay={i * 0.06} className="prob-card">
                <span className="prob-num">0{i + 1}</span>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Signature services */}
      <section className="section alt">
        <div className="container">
          <SectionHead kicker="Signature services" title="Four ways I grow your business." sub="A fixed written quote before anything starts — plus unlimited revisions." />
          <div className="bsvc-grid cols-4">
            {core.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.06} className="bsvc-cell">
                <ServiceCard s={s} i={i} />
              </Reveal>
            ))}
          </div>
          <Reveal className="center mt">
            <Link to="/services" className="btn btn-em">All 9 Services <ArrowRight size={16} /></Link>
          </Reveal>
        </div>
      </section>

      {/* Recent work */}
      <section className="section">
        <div className="container">
          <SectionHead kicker="Recent client work" title="Real projects. Real stories." sub="Three case studies — what each client needed, what I built, and where it stands today." />
          <div className="work-grid">
            {WORK.map((w, i) => (
              <Reveal key={w.slug} delay={i * 0.07}>
                <Link to={`/work/${w.slug}`} className="work-card">
                  <div className="work-shot"><img src={w.image} alt={w.name} loading="lazy" /></div>
                  <div className="work-body">
                    <span className="work-kind">{w.kind} · {w.location}</span>
                    <h3>{w.name} <ArrowUpRight size={16} /></h3>
                    <p>{w.desc}</p>
                    <span className="work-link">Read case study <ArrowRight size={14} /></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Courses strip */}
      <section className="section alt">
        <div className="container">
          <SectionHead kicker="Automation courses" title="Learn the systems I use." sub="Step-by-step automation courses — YouTube, TikTok, Facebook. Lifetime access." />
          <div className="course-grid">
            {COURSES.map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.07}>
                <Link to={`/courses/${c.slug}`} className="course-card">
                  <div className="course-img"><img src={c.image} alt={c.name} loading="lazy" />
                    <span className="off-badge">{Math.round((1 - c.deal / c.fee) * 100)}% OFF</span>
                  </div>
                  <div className="course-body">
                    <span className="course-dur">{c.duration}</span>
                    <h3>{c.name}</h3>
                    <div className="course-price"><s>PKR {c.fee.toLocaleString()}</s><b>PKR {c.deal.toLocaleString()}</b></div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tools + Prompts live on the sister sites */}
      <section className="section">
        <div className="container">
          <SectionHead kicker="Sister sites" title="Tools and prompts live where they belong." center />
          <div className="ext-grid">
            <Reveal>
              <a href="https://digitalmax.pk/tools" target="_blank" rel="noopener" className="ext-card">
                <span className="ext-ic"><Wrench size={24} /></span>
                <div>
                  <h3>Premium Tools <ArrowUpRight size={16} /></h3>
                  <p>Pro AI, video, design and VPN accounts at local prices — on DigitalMax.</p>
                  <span className="text-link">digitalmax.pk/tools</span>
                </div>
              </a>
            </Reveal>
            <Reveal delay={0.08}>
              <a href="https://saraikitech.com/prompts" target="_blank" rel="noopener" className="ext-card">
                <span className="ext-ic"><Copy size={24} /></span>
                <div>
                  <h3>Master Prompts <ArrowUpRight size={16} /></h3>
                  <p>Copy-paste AI prompts that actually work — on Saraiki Tech.</p>
                  <span className="text-link">saraikitech.com/prompts</span>
                </div>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section alt">
        <div className="container">
          <SectionHead kicker="Client words" title="What it's like to work with me." center />
          <div className="testi-grid">
            {TESTIMONIALS.slice(0, 6).map((t, i) => (
              <Reveal key={i} delay={(i % 3) * 0.06} className="testi-card">
                <Stars />
                <p>"{t.text}"</p>
                <cite><b>{t.name}</b><span>{t.country} · {t.service}</span></cite>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container narrow">
          <SectionHead kicker="FAQ" title="Before you ask." center />
          <Faq items={FAQS} />
        </div>
      </section>

      <section className="section pt0">
        <div className="container">
          <CtaBanner
            title="Tell me about your project."
            sub="Fixed quote, clear timeline, unlimited revisions. The first message is free."
            secondary={{ to: "/contact", label: "Contact Me" }}
          />
        </div>
      </section>
    </>
  );
}
