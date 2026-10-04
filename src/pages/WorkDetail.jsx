import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowRight, ArrowLeft, ArrowUpRight, Quote } from "lucide-react";
import { Reveal, SectionHead, TickList, CtaBanner, JsonLd, useSEO } from "../components/ui";
import { WORK, PROCESS, TESTIMONIALS } from "../data/work";
import { waLink } from "../data/site";

const workBySlug = (slug) => WORK.find((w) => w.slug === slug);

export default function WorkDetail() {
  const { slug } = useParams();
  const w = workBySlug(slug);
  useSEO(w ? `${w.name} — Case Study` : "Case Study", w ? w.desc : undefined, w ? `/work/${w.slug}` : "/work");
  if (!w) return <Navigate to="/work" replace />;
  const t = w.testimonial !== null && w.testimonial !== undefined ? TESTIMONIALS[w.testimonial] : null;
  const related = WORK.filter((x) => x.slug !== w.slug);
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: `${w.name} — Case Study`,
        description: w.desc,
        url: `https://saqlainabid.com/work/${w.slug}`,
        author: { "@type": "Person", name: "Saqlain Abid", url: "https://saqlainabid.com" },
      }} />

      <section className="page-hero svc-hero">
        <div className="container svc-hero-grid">
          <Reveal>
            <Link to="/work" className="back-link"><ArrowLeft size={15} /> All work</Link>
            <p className="kicker">{w.kind} · {w.location}</p>
            <h1>{w.name}</h1>
            <p className="lede">{w.desc}</p>
            <div className="case-meta">
              <div><span>Client</span><strong>{w.name}</strong></div>
              <div><span>Platform</span><strong>{w.platform}</strong></div>
              <div><span>Location</span><strong>{w.location}</strong></div>
            </div>
            <div className="hero-btns">
              <a className="btn btn-gold" href={w.url} target="_blank" rel="noopener">Visit live site <ArrowUpRight size={16} /></a>
              <Link className="btn btn-ghost" to="/contact">Start a project like this <ArrowRight size={16} /></Link>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <img src={w.image} alt={`${w.name} screenshot`} className="svc-hero-img" />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <Reveal>
            <SectionHead kicker="01 — The challenge" title="What the project needed." />
            <p className="prose">{w.challenge}</p>
          </Reveal>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container narrow">
          <Reveal>
            <SectionHead kicker="02 — What I built" title="The work, piece by piece." />
            <TickList items={w.built} />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <Reveal>
            <SectionHead kicker="03 — How we worked" title="Same process, every project." />
            <ol className="process-list">
              {PROCESS.map((p, i) => (
                <li key={p.t}>
                  <span className="process-num">{String(i + 1).padStart(2, "0")}</span>
                  <div><strong>{p.t}</strong><p>{p.d}</p></div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container narrow">
          <Reveal>
            <SectionHead kicker="04 — Outcome" title="Where it stands today." />
            <p className="prose">{w.outcome}</p>
            {t && (
              <blockquote className="case-quote">
                <Quote size={22} />
                <p>"{t.text}"</p>
                <cite>— {t.name}, {t.country} · {t.service}</cite>
              </blockquote>
            )}
            <div className="hero-btns" style={{ marginTop: 28 }}>
              <a className="btn btn-gold" href={waLink(`Hi Saqlain! I saw your ${w.name} case study and want something similar. Please share details.`)} target="_blank" rel="noopener">Get a Quote <ArrowRight size={16} /></a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead kicker="More work" title="Two more case studies." />
          <div className="work-grid">
            {related.map((r) => (
              <Link key={r.slug} to={`/work/${r.slug}`} className="work-card">
                <div className="work-shot"><img src={r.image} alt={r.name} loading="lazy" /></div>
                <div className="work-body">
                  <span className="work-kind">{r.kind} · {r.location}</span>
                  <h3>{r.name} <ArrowUpRight size={16} /></h3>
                  <p>{r.desc}</p>
                  <span className="work-link">Read case study <ArrowRight size={14} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <CtaBanner title="Want a story like this for your business?" sub="Fixed quote, clear timeline, unlimited revisions." />
        </div>
      </section>
    </>
  );
}
