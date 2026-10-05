import { useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { Menu, X, MessageCircle, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { SITE, NAV, waLink } from "../data/site";

const NUDGES = [
  "Hi! Have a project in mind? Let's talk.",
  "Websites, stores, SEO — ask me anything.",
  "Free consultation — no pressure, just answers.",
];

function WaFloat() {
  const [nudge, setNudge] = useState(0);
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setInterval(() => {
      setNudge((n) => (n + 1) % NUDGES.length);
      setShow(true);
    }, 30000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="wa-wrap">
      {show && (
        <button className="wa-nudge" onClick={() => setShow(false)} aria-label="Dismiss">
          {NUDGES[nudge]} <X size={13} />
        </button>
      )}
      <a
        className="wa-float"
        href={waLink("Hi Saqlain! I'd like to discuss a project.")}
        target="_blank"
        rel="noopener"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={26} />
      </a>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open ]);
  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""} ${open ? "menu-open" : ""}`}>
      <div className="header-in">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <img className="brand-mark" src="/images/logo.jpg" alt="Saqlain Abid" />
          <span className="brand-text">Saqlain<em>Abid</em></span>
        </Link>
        <button className="burger" onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <button className={`menu-backdrop ${open ? "show" : ""}`} onClick={() => setOpen(false)} aria-label="Close menu" tabIndex={open ? 0 : -1} />
      <nav className={`main-nav ${open ? "open" : ""}`}>
          {NAV.map((n, i) => (
            n.external ? (
              <a key={n.href} href={n.href} target="_blank" rel="noopener" onClick={() => setOpen(false)} className="nav-sec">
                <span className="m-num">{String(i + 1).padStart(2, "0")}</span>
                <span>{n.label}</span> <ArrowUpRight size={18} style={{ verticalAlign: "-3px" }} />
              </a>
            ) : (
              <NavLink key={n.to} to={n.to} end={n.to === "/"} onClick={() => setOpen(false)}
                className={({ isActive }) => (isActive ? "active" : "")}>
                <span className="m-num">{String(i + 1).padStart(2, "0")}</span>
                <span>{n.label}</span>
              </NavLink>
            )
          ))}
          <a className="btn btn-em btn-sm nav-cta" href={waLink("Hi Saqlain! I'd like to discuss a project.")} target="_blank" rel="noopener">
            WhatsApp Me
          </a>
        </nav>
    </header>
  );
}

function Footer() {
  const socIcon = (key) => (
    <img src={`/images/social-${key}.png`} alt="" width="42" height="42" loading="lazy" />
  );
  return (
    <footer className="site-footer">
      <div className="container foot-grid">
        <div className="foot-brand">
          <Link to="/" className="brand">
            <img className="brand-mark" src="/images/logo.jpg" alt="Saqlain Abid" />
            <span className="brand-text">Saqlain<em>Abid</em></span>
          </Link>
          <p>I fix the reason clients aren't coming — with websites, stores, content systems and growth strategy that convert.</p>
          <div className="foot-social">
            {SITE.socials.map((s) => (
              <a key={s.key} href={s.url} target="_blank" rel="noopener" aria-label={s.label}
                className="soc-btn">
                {socIcon(s.key)}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4>Explore</h4>
          <Link to="/services">Services</Link>
          <Link to="/courses">Courses</Link>
          <a href="https://saraikitech.com/prompts" target="_blank" rel="noopener">Master Prompts <ArrowUpRight size={13} /></a>
          <a href="https://lms.digitalmax.pk/" target="_blank" rel="noopener">LMS <ArrowUpRight size={13} /></a>
        </div>
        <div>
          <h4>More</h4>
          <a href="https://digitalmax.pk/tools" target="_blank" rel="noopener">Premium Tools <ArrowUpRight size={13} /></a>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <a href={waLink("Hi Saqlain! I'd like to discuss a project.")} target="_blank" rel="noopener">
            WhatsApp <ArrowUpRight size={13} />
          </a>
        </div>
        <div>
          <h4>Contact</h4>
          <a href={`mailto:${SITE.gmail}`}><Mail size={14} /> {SITE.gmail}</a>
          <span><MapPin size={14} /> {SITE.location}</span>
        </div>
      </div>
      <div className="foot-bottom">
        <div className="container">
          <span>© {new Date().getFullYear()} Saqlain Abid — saqlainabid.com</span>
          <span className="foot-giant">Saqlain Abid</span>
        </div>
      </div>
    </footer>
  );
}

export default function Layout() {
  return (
    <>
      <Header />
      <main><Outlet /></main>
      <Footer />
      <WaFloat />
    </>
  );
}
