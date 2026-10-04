import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import { Reveal, SectionHead, Stars, TickList, CtaBanner, JsonLd, useSEO } from "../components/ui";
import { serviceBySlug, extraServices } from "../data/services";
import { waLink } from "../data/site";

export default function ServiceDetail() {
  const { slug } = useParams();
  const s = serviceBySlug(slug);
  useSEO(s ? s.name : "Service", s ? s.tagline : undefined, s ? `/services/${s.slug}` : "/services");
  if (!s) return <Navigate to="/services" replace />;
  const related = extraServices().filter((x) => x.slug !== s.slug).slice(0, 3);
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: s.name,
        description: s.tagline,
        url: `https://saqlainabid.com/services/${s.slug}`,
        provider: { "@type": "Person", name: "Saqlain Abid", url: "https://saqlainabid.com" },
      }} />
      <section className="page-hero svc-hero">
        <div className="container svc-hero-grid">
          <Reveal>
            <Link to="/services" className="back-link"><ArrowLeft size={15} /> All services</Link>
            <h1>{s.name}</h1>
            <p className="lede">{s.short}</p>
            <div className="hero-btns">
              <a className="btn btn-gold" href={waLink(`Hi Saqlain! I'm interested in your ${s.name} service. Please share details.`)} target="_blank" rel="noopener">Get a Quote <ArrowRight size={16} /></a>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <img src={s.image} alt={s.name} className="svc-hero-img" />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container split-2">
          <div>
            <SectionHead kicker="Overview" title="What you get." />
            {s.overview.map((p, i) => <p key={i} className="body-p">{p}</p>)}
            <h3 className="h3">What's included</h3>
            <TickList items={s.deliverables} />
          </div>
          <div>
            <SectionHead kicker="Process" title="How we work." />
            <div className="steps">
              {s.process.map((st, i) => (
                <div key={i} className="step"><span className="step-n">{i + 1}</span><div><b>{st[0]}</b><p>{st[1]}</p></div></div>
              ))}
            </div>
            <h3 className="h3">Typical outcomes</h3>
            <div className="chips big">{s.outcomes.map((o, i) => <i key={i}>{o}</i>)}</div>
          </div>
        </div>
      </section>

      {s.testimonial && (
        <section className="section alt">
          <div className="container narrow">
            <Reveal className="quote-card">
              <Stars />
              <p>"{s.testimonial.text}"</p>
              <cite><b>{s.testimonial.name}</b><span>{s.testimonial.country}</span></cite>
            </Reveal>
          </div>
        </section>
      )}

      <section className="section alt">
        <div className="container">
          <SectionHead kicker="Keep exploring" title="Related services." />
          <div className="also-grid">
            {related.map((r) => (
              <Link key={r.slug} to={`/services/${r.slug}`} className="also-card">
                <img src={r.image} alt={r.name} loading="lazy" />
                <div><h3>{r.name}</h3><p>{r.tagline}</p></div>
                <ArrowRight size={18} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section pt0"><div className="container">
        <CtaBanner title={`Let's talk about your ${s.name.toLowerCase()} project.`} sub="Fixed quote, clear timeline, unlimited revisions."
          secondary={{ to: "/contact", label: "Contact Me" }} />
      </div></section>
    </>
  );
}
