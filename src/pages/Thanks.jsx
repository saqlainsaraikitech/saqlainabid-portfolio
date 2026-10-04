import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, MessageCircle } from "lucide-react";
import { Reveal, useSEO } from "../components/ui";
import { SITE, waLink } from "../data/site";

export default function Thanks() {
  useSEO("Message Sent", "Your message is on its way.", "/thanks", true);
  return (
    <section className="section">
      <div className="container narrow center">
        <Reveal className="thanks-card">
          <CheckCircle size={52} className="thanks-ic" />
          <h1>Message sent!</h1>
          <p>Thanks for reaching out — I'll get back to you personally, usually within a few hours. Need a faster reply?</p>
          <div className="hero-btns center">
            <a className="btn btn-gold" href={waLink("Hi Saqlain! I just sent you a message via the website.")} target="_blank" rel="noopener">
              <MessageCircle size={16} /> Message on WhatsApp
            </a>
            <Link to="/" className="btn btn-outline">Back to Home <ArrowRight size={15} /></Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function NotFound() {
  useSEO("Page Not Found", "This page doesn't exist.", window.location.pathname, true);
  return (
    <section className="section">
      <div className="container narrow center">
        <Reveal className="thanks-card">
          <h1 className="huge-404">404</h1>
          <h1>That page doesn't exist.</h1>
          <p>The link may be old — or the page moved. Let's get you back on track.</p>
          <div className="hero-btns center">
            <Link to="/" className="btn btn-gold">Back to Home <ArrowRight size={15} /></Link>
            <Link to="/contact" className="btn btn-outline">Contact Me</Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
