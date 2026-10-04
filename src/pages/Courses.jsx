import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Clock, GraduationCap } from "lucide-react";
import { Reveal, SectionHead, CtaBanner, useSEO } from "../components/ui";
import { COURSES } from "../data/courses";

export default function Courses() {
  useSEO("Courses", "YouTube, TikTok and Facebook automation courses — the exact systems I run, step by step. Fees in PKR, lifetime access and free updates.", "/courses");
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <span className="kicker">Automation courses</span>
            <h1>Learn the systems <em>I use myself.</em></h1>
            <p className="lede">Practical, step-by-step automation courses — no theory fluff. Enroll via WhatsApp, get lifetime access plus a private support group.</p>
          </Reveal>
        </div>
      </section>
      <section className="section pt0">
        <div className="container">
          <Reveal>
            <a href="https://lms.digitalmax.pk/" target="_blank" rel="noopener" className="lms-strip">
              <GraduationCap size={30} />
              <div>
                <strong>Learn inside the LMS</strong>
                <p>All courses run on my learning platform — structured lessons, progress tracking and lifetime access.</p>
              </div>
              <span className="btn btn-gold btn-sm">Open LMS <ArrowUpRight size={14} /></span>
            </a>
          </Reveal>
        </div>
      </section>
      <section className="section pt0">
        <div className="container course-grid">
          {COURSES.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.07}>
              <Link to={`/courses/${c.slug}`} className="course-card big">
                <div className="course-img">
                  <img src={c.image} alt={c.name} loading="lazy" />
                  <span className="off-badge">{Math.round((1 - c.deal / c.fee) * 100)}% OFF</span>
                </div>
                <div className="course-body">
                  <span className="course-dur"><Clock size={13} /> {c.duration}</span>
                  <h3>{c.name}</h3>
                  <p>{c.tagline}</p>
                  <ul className="course-pts">{c.points.map((p, j) => <li key={j}>{p}</li>)}</ul>
                  <div className="course-foot">
                    <div className="course-price"><s>PKR {c.fee.toLocaleString()}</s><b>PKR {c.deal.toLocaleString()}</b></div>
                    <span className="btn btn-em btn-sm">View Course <ArrowRight size={14} /></span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="section pt0"><div className="container">
        <CtaBanner title="Not sure which course fits you?" sub="Tell me your goal on WhatsApp — I'll point you to the right one, honestly."
          primary={{ to: "/contact", label: "Ask Me" }} secondary={{ to: "/prompts", label: "Free Master Prompts" }} />
      </div></section>
    </>
  );
}
