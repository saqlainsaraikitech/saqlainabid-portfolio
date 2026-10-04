import { useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Clock, Check, ChevronDown, Infinity as InfinityIcon } from "lucide-react";
import { Reveal, SectionHead, TickList, JsonLd, useSEO } from "../components/ui";
import { courseBySlug, COURSES } from "../data/courses";
import { COURSE_PARTS } from "../data/courseParts";
import { waLink } from "../data/site";

function PartAccordion({ parts }) {
  const [open, setOpen] = useState(0);
  const total = parts.reduce((n, p) => n + p.modules.length, 0);
  return (
    <div className="parts-wrap">
      <p className="parts-total">{parts.length} sections · {total} lessons</p>
      {parts.map((p, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className={`part ${isOpen ? "open" : ""}`}>
            <button className="part-head" onClick={() => setOpen(isOpen ? -1 : i)}>
              <span className="part-n">{i + 1}</span>
              <span className="part-title">{p.title}</span>
              <span className="part-count">{p.modules.length} lessons</span>
              <ChevronDown size={18} className={`part-chev ${isOpen ? "flip" : ""}`} />
            </button>
            {isOpen && (
              <ul className="part-lessons">
                {p.modules.map((m, j) => (
                  <li key={j}>
                    <span className="les-n">{j + 1}</span>
                    <div><b>{m.t}</b><p>{m.d}</p></div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function CourseDetail() {
  const { slug } = useParams();
  const c = courseBySlug(slug);
  useSEO(c ? c.name : "Course", c ? c.tagline : undefined, c ? `/courses/${c.slug}` : "/courses");
  if (!c) return <Navigate to="/courses" replace />;
  const others = COURSES.filter((x) => x.slug !== slug);

  return (
    <>
      {c && (
        <JsonLd data={{
          "@context": "https://schema.org",
          "@type": "Course",
          name: c.name,
          description: c.tagline,
          url: `https://saqlainabid.com/courses/${c.slug}`,
          provider: { "@type": "Person", name: "Saqlain Abid", url: "https://saqlainabid.com" },
          offers: { "@type": "Offer", price: c.deal, priceCurrency: "PKR" },
        }} />
      )}
      <section className="page-hero">
        <div className="container course-hero-grid">
          <Reveal>
            <Link to="/courses" className="back-link"><ArrowLeft size={15} /> All courses</Link>
            <span className="kicker"><Clock size={13} /> {c.duration}</span>
            <h1>{c.name}</h1>
            <p className="lede">{c.overview}</p>
            <ul className="course-pts">{c.points.map((p, i) => <li key={i}>{p}</li>)}</ul>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="fee-card">
              <span className="off-badge big">{Math.round((1 - c.deal / c.fee) * 100)}% OFF</span>
              <img src={c.image} alt={c.name} />
              <div className="fee-prices"><s>PKR {c.fee.toLocaleString()}</s><b>PKR {c.deal.toLocaleString()}</b></div>
              <TickList items={c.includes} />
              <a className="btn btn-gold btn-block" href={waLink(`Hi Saqlain! I want to enroll in "${c.name}" (PKR ${c.deal.toLocaleString()}). Please share payment details.`)} target="_blank" rel="noopener">
                Enroll via WhatsApp <ArrowRight size={15} />
              </a>
              <span className="fee-note"><InfinityIcon size={13} /> Lifetime access + free updates</span>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHead kicker="Curriculum" title="Every lesson, in order." sub="The complete step-by-step curriculum — nothing held back." />
          <Reveal><PartAccordion parts={COURSE_PARTS[c.slug] || []} /></Reveal>
        </div>
      </section>
      <section className="section alt">
        <div className="container">
          <SectionHead kicker="Keep learning" title="Other courses." />
          <div className="course-grid">
            {others.map((o) => (
              <Link key={o.slug} to={`/courses/${o.slug}`} className="course-card">
                <div className="course-img"><img src={o.image} alt={o.name} loading="lazy" />
                  <span className="off-badge">{Math.round((1 - o.deal / o.fee) * 100)}% OFF</span></div>
                <div className="course-body">
                  <span className="course-dur">{o.duration}</span>
                  <h3>{o.name}</h3>
                  <div className="course-price"><s>PKR {o.fee.toLocaleString()}</s><b>PKR {o.deal.toLocaleString()}</b></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
