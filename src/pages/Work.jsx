import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal, SectionHead, CtaBanner, useSEO } from "../components/ui";
import { WORK } from "../data/work";

export default function Work() {
  useSEO("Work & Case Studies", "Real client projects with live links — law firm website, Shopify bedding stores. Read how each project was built.", "/work");
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <p className="kicker">Case studies</p>
            <h1>Work that speaks for itself.</h1>
            <p className="lede">Real projects, live links, and the story behind each build — what the client needed, what I built, and how we got there.</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
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

      <section className="section">
        <div className="container">
          <SectionHead kicker="Your project" title="Want a case study like this?" sub="Tell me what you're building — you'll get a fixed written quote, usually within a few hours." />
          <CtaBanner title="Let's make yours the next one." sub="Fixed quote, clear timeline, unlimited revisions." />
        </div>
      </section>
    </>
  );
}
