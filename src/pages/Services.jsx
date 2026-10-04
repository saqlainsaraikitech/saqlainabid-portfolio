import { Reveal, SectionHead, CtaBanner, ServiceCard, useSEO } from "../components/ui";
import { coreServices, extraServices } from "../data/services";

export default function Services() {
  useSEO("Services", "Nine services: web development, Shopify stores, AI content creation, YouTube SEO and more — fixed written quotes, unlimited revisions.", "/services");
  const all = [...coreServices().map((s) => ({ ...s, sig: true })), ...extraServices()];
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <span className="kicker">Services</span>
            <h1>Nine services. <em>One goal:</em> growth.</h1>
            <p className="lede">Four signature services lead the way — five more cover everything around them. Every engagement starts with a fixed written quote.</p>
          </Reveal>
        </div>
      </section>
      <section className="section pt0">
        <div className="container">
          <SectionHead kicker="Everything I do" title="All nine services." sub="Click any card for full details and what's included." />
          <div className="bsvc-grid cols-4">
            {all.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 4) * 0.06} className="bsvc-cell">
                <ServiceCard s={s} i={i} badge={s.sig ? "Signature" : null} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="section pt0"><div className="container">
        <CtaBanner title="Not sure which one you need?" sub="Describe your goal in one message — I'll tell you honestly which service fits (or if none does)."
          secondary={{ to: "/contact", label: "Get a Quote" }} />
      </div></section>
    </>
  );
}
