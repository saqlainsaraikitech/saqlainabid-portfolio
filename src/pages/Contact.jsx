import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Send, MessageCircle, Mail, MapPin, CheckCircle } from "lucide-react";
import { Reveal, SectionHead, useSEO } from "../components/ui";
import { SERVICES } from "../data/services";
import { SITE, waLink } from "../data/site";

export default function Contact() {
  useSEO("Contact", "Get a fixed written quote — tell me about your project and get a reply within 24 hours, usually much faster. WhatsApp or the contact form.", "/contact");
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const [service, setService] = useState(params.get("service") || "");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setService(params.get("service") || "");
  }, [params]);

  const submit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError("");
    const fd = new FormData(e.target);
    const data = Object.fromEntries(fd.entries());
    data._subject = `New enquiry from saqlainabid.com — ${data.name}`;
    try {
      const r = await fetch(SITE.formAction, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (!r.ok) throw new Error("send failed");
      navigate("/thanks");
    } catch (err) {
      setError("Message couldn't be sent. Please reach me directly on WhatsApp instead.");
    }
    setSending(false);
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <span className="kicker">Contact</span>
            <h1>Tell me about <em>your project.</em></h1>
            <p className="lede">Fill the form or message me directly — I reply personally, usually within a few hours.</p>
          </Reveal>
        </div>
      </section>
      <section className="section pt0">
        <div className="container contact-grid">
          <Reveal>
            <form className="contact-form" onSubmit={submit}>
              {/* Honeypot: invisible to humans, bots fill it -> FormSubmit discards as spam */}
              <input type="text" name="_honey" className="hp-field" tabIndex={-1} autoComplete="off" aria-hidden="true" />
              {service && (
                <div className="preselect-note">
                  <CheckCircle size={16} />
                  <>Service: <b>{SERVICES.find((s) => s.slug === service)?.name || service}</b></>
                </div>
              )}
              <div className="frow">
                <label>Your name<input name="name" required placeholder="Jane Cooper" /></label>
                <label>Email<input name="email" type="email" required placeholder="jane@company.com" /></label>
              </div>
              <label>Service
                <select name="service" value={service} onChange={(e) => setService(e.target.value)}>
                  <option value="">Select a service…</option>
                  {SERVICES.map((s) => <option key={s.slug} value={s.slug}>{s.name}</option>)}
                </select>
              </label>
              <label>Budget (optional)
                <select name="budget">
                  <option value="">Select…</option>
                  <option>Under $100</option><option>$100 – $300</option>
                  <option>$300 – $1,000</option><option>$1,000+</option>
                </select>
              </label>
              <label>Project details<textarea name="message" rows={5} required placeholder="What do you need? What does success look like?" /></label>
              {error && <p className="form-error">{error}</p>}
              <button className="btn btn-gold btn-block" disabled={sending}>
                {sending ? "Sending…" : <><Send size={15} /> Send Message</>}
              </button>
              <p className="form-note">Prefer chat? Message me directly — I reply fast.</p>
            </form>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="contact-side">
              <a className="contact-card wa" href={waLink("Hi Saqlain! I'd like to discuss a project.")} target="_blank" rel="noopener">
                <MessageCircle size={22} />
                <div><b>WhatsApp</b><span>{SITE.whatsappDisplay} — fastest reply</span></div>
              </a>
              <a className="contact-card" href={`mailto:${SITE.email}`}>
                <Mail size={22} />
                <div><b>Email</b><span>{SITE.email}</span></div>
              </a>
              <div className="contact-card">
                <MapPin size={22} />
                <div><b>Location</b><span>{SITE.location}</span></div>
              </div>
              <div className="contact-promise">
                <b>What happens next?</b>
                <ol>
                  <li>You send the message.</li>
                  <li>I reply with questions or a fixed quote.</li>
                  <li>We agree on scope, timeline and price — in writing.</li>
                </ol>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
