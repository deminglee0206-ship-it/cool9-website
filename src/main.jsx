import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { ArrowDownRight, ArrowRight, ArrowUpRight, Check, ChevronDown, Clock3, MapPin, Menu, Phone, ShieldCheck, Sun, Waves, X } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles.css";

gsap.registerPlugin(ScrollTrigger);

const PHONE_DISPLAY = "017-879 0888";
const PHONE_E164 = "60178790888";
const WHATSAPP_URL = `https://wa.me/${PHONE_E164}?text=${encodeURIComponent("Hi COOL 9, I would like to enquire about car tinting for my vehicle.")}`;
const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=36%2C+Jalan+Sulam%2C+Taman+Sentosa%2C+80150+Johor+Bahru%2C+Johor%2C+Malaysia";

const imageUrls = {
  hero: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2200&q=85",
  detail: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=82",
  glass: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1400&q=82",
  install: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=1400&q=82",
  night: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1400&q=82"
};

function WhatsAppLink({ children, className = "", onClick, label }) {
  return (
    <a className={className} href={WHATSAPP_URL} target="_blank" rel="noreferrer" onClick={onClick} aria-label={label}>
      {children}
    </a>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <a className="wordmark" href="#home" onClick={closeMenu} aria-label="COOL 9 home">
          <span className="wordmark-main">COOL<span>9</span></span>
          <span className="wordmark-sub">CAR TINT SHOP</span>
        </a>
        <button className="mobile-menu-toggle" type="button" aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)} aria-label={open ? "Close navigation menu" : "Open navigation menu"}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <div id="primary-navigation" className={`nav-links ${open ? "is-open" : ""}`}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#services" onClick={closeMenu}>Our Services</a>
          <a href="#approach" onClick={closeMenu}>Why COOL 9</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <WhatsAppLink className="nav-cta" onClick={closeMenu}>WhatsApp Us <ArrowUpRight size={15} /></WhatsAppLink>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !heroRef.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-eyebrow", { y: 14, opacity: 0, duration: 0.55 })
        .from(".hero-title-line", { yPercent: 105, opacity: 0, duration: 0.85, stagger: 0.12 }, "-=0.2")
        .from(".hero-copy, .hero-actions, .hero-meta", { y: 18, opacity: 0, duration: 0.6, stagger: 0.1 }, "-=0.3")
        .from(".hero-photo", { scale: 1.06, opacity: 0.45, duration: 1.2 }, "-=0.9");
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" id="home" ref={heroRef}>
      <div className="hero-topline">
        <span className="eyebrow hero-eyebrow"><span className="status-dot" /> AUTOMOTIVE WINDOW TINTING</span>
        <span className="hero-location"><MapPin size={14} /> JOHOR BAHRU, MALAYSIA</span>
      </div>
      <div className="hero-layout">
        <div className="hero-copy-column">
          <h1 className="hero-title">
            <span className="title-mask"><span className="hero-title-line">SEE THE ROAD.</span></span>
            <span className="title-mask"><span className="hero-title-line title-accent">FEEL THE</span></span>
            <span className="title-mask"><span className="hero-title-line">DIFFERENCE.</span></span>
          </h1>
          <p className="hero-copy">Automotive window tinting enquiries, made straightforward. Explore your options with COOL 9 in Johor Bahru.</p>
          <div className="hero-actions">
            <WhatsAppLink className="button button-light">WhatsApp Us <ArrowUpRight size={17} /></WhatsAppLink>
            <a className="button button-ghost" href="#services">Explore our services <ArrowDownRight size={17} /></a>
          </div>
          <div className="hero-meta">
            <span className="meta-rule" />
            <span>PRECISION IN EVERY LAYER</span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-photo-wrap">
            <img className="hero-photo" src={imageUrls.hero} alt="Premium sports car photographed in dramatic light, illustrating the automotive focus of COOL 9" fetchPriority="high" onError={(e) => { e.currentTarget.src = imageUrls.detail; }} />
            <div className="photo-vignette" />
            <div className="photo-caption"><span>FORM / FUNCTION</span><span>01 — AUTOMOTIVE</span></div>
          </div>
          <div className="hero-visual-note"><span className="vertical-line" /> A considered approach to tint selection.</div>
        </div>
      </div>
      <a className="scroll-cue" href="#services"><span>SCROLL TO EXPLORE</span><ArrowDownRight size={15} /></a>
    </section>
  );
}

const services = [
  {
    number: "01",
    title: "Automotive\nwindow tinting",
    text: "Explore tint options for your vehicle, with attention to light transmission, comfort, visibility and your intended use.",
    tag: "CORE SERVICE",
    image: imageUrls.glass,
    alt: "Automotive side glass reflecting the surrounding environment"
  },
  {
    number: "02",
    title: "Tint\nconsultation",
    text: "Discuss the choices available for your car and the specifications worth comparing before making a decision.",
    tag: "ENQUIRE",
    image: imageUrls.detail,
    alt: "Close view of a modern car exterior and glazing"
  },
  {
    number: "03",
    title: "Existing tint\nassessment",
    text: "Ask the team whether assessment or replacement of existing tint is available for your vehicle.",
    tag: "PLEASE CONFIRM AVAILABILITY",
    image: imageUrls.install,
    alt: "Vehicle in a workshop setting, used as an illustrative automotive image"
  }
];

function Services() {
  const sectionRef = useRef(null);
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;
    const ctx = gsap.context(() => {
      gsap.from(".service-row", {
        y: 34, opacity: 0, duration: 0.7, stagger: 0.12, ease: "power2.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 72%" }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="section services-section" id="services" ref={sectionRef}>
      <div className="section-heading">
        <div>
          <span className="eyebrow"><span className="blue-dash" /> WHAT WE CAN DISCUSS</span>
          <h2>Made for the<br /><em>drive ahead.</em></h2>
        </div>
        <p className="section-intro">Start with your vehicle, your priorities and the conditions you drive in. We’ll help you take the next step in understanding your tint options.</p>
      </div>
      <div className="services-list">
        {services.map((service) => (
          <article className="service-row" key={service.number}>
            <div className="service-number">{service.number}</div>
            <div className="service-image-wrap">
              <img src={service.image} alt={service.alt} loading="lazy" onError={(e) => { e.currentTarget.style.display = "none"; }} />
            </div>
            <div className="service-content">
              <span className="service-tag">{service.tag}</span>
              <h3>{service.title.split("\n").map((line, i) => <React.Fragment key={line}>{i > 0 && <br />}{line}</React.Fragment>)}</h3>
              <p>{service.text}</p>
            </div>
            <WhatsAppLink className="service-arrow" label={`Ask COOL 9 about ${service.title.replace("\n", " ")}`}><ArrowUpRight size={21} /></WhatsAppLink>
          </article>
        ))}
      </div>
      <p className="fine-print">Note: tint consultation is the primary enquiry route. Existing tint assessment or replacement is a service placeholder and should be confirmed by the business before publication.</p>
    </section>
  );
}

function Approach() {
  return (
    <section className="approach-section" id="approach">
      <div className="approach-image">
        <img src={imageUrls.night} alt="Dark premium vehicle in an urban setting, used as illustrative automotive photography" loading="lazy" />
        <div className="approach-image-caption"><span>CRAFT / CLARITY / COMFORT</span><span>COOL 9 · JB</span></div>
      </div>
      <div className="approach-content">
        <span className="eyebrow"><span className="blue-dash" /> A BETTER-INFORMED CHOICE</span>
        <h2>Good decisions<br />start with <em>clarity.</em></h2>
        <p className="approach-lead">Tint is more than a shade of dark. The right choice depends on visibility, comfort, specifications and the way you use your vehicle.</p>
        <div className="principle-list">
          <div className="principle">
            <span className="principle-icon"><Waves size={19} /></span>
            <div><h3>Compare the specifications</h3><p>Ask what each performance figure measures and request the product details before deciding.</p></div>
          </div>
          <div className="principle">
            <span className="principle-icon"><Sun size={19} /></span>
            <div><h3>Balance comfort and visibility</h3><p>Consider bright daytime conditions, night driving and the visibility you need in daily use.</p></div>
          </div>
          <div className="principle">
            <span className="principle-icon"><ShieldCheck size={19} /></span>
            <div><h3>Check requirements first</h3><p>Understand the applicable Malaysian rules and the combined light transmission of your glass and film.</p></div>
          </div>
        </div>
        <WhatsAppLink className="text-link">Talk through your options <ArrowUpRight size={16} /></WhatsAppLink>
      </div>
    </section>
  );
}

function TintEducation() {
  const [active, setActive] = useState(0);
  const topics = [
    {
      title: "VLT",
      label: "Visible Light Transmission",
      description: "VLT describes the share of visible light that passes through the glass and film. Lower VLT generally means a darker-looking window, but the original glass also affects the final reading.",
      prompt: "Ask for the final glass-and-film VLT, not just the film's advertised figure."
    },
    {
      title: "UV",
      label: "Ultraviolet protection",
      description: "UV rejection describes how much ultraviolet energy is blocked. It is a different measurement from visible darkness and should be compared using the product's stated test method.",
      prompt: "Request the technical sheet and check which UV range the figure covers."
    },
    {
      title: "IR",
      label: "Infrared rejection",
      description: "Infrared rejection relates to a portion of solar energy. Different tests can measure different wavelengths, so an IR figure alone does not describe total heat entering the cabin.",
      prompt: "Compare test methods and total solar energy rejection where available."
    },
    {
      title: "TSER",
      label: "Total Solar Energy Rejected",
      description: "TSER estimates the share of total solar energy rejected under a specified test method. Compare like-for-like specifications rather than assuming that one headline percentage tells the whole story.",
      prompt: "Ask for comparable specifications from the same test basis."
    }
  ];
  return (
    <section className="education-section" id="education">
      <div className="education-top">
        <span className="eyebrow"><span className="blue-dash" /> KNOW WHAT YOU’RE CHOOSING</span>
        <h2>Beyond the<br /><em>shade.</em></h2>
        <p>Window-film labels can look similar while describing different things. Understand the terms before comparing products.</p>
      </div>
      <div className="education-layout">
        <div className="education-tabs" role="tablist" aria-label="Tint specification topics">
          {topics.map((topic, index) => (
            <button key={topic.title} className={`education-tab ${active === index ? "active" : ""}`} role="tab" aria-selected={active === index} aria-controls="education-panel" id={`tab-${topic.title}`} onClick={() => setActive(index)}>
              <span className="tab-code">{topic.title}</span><span className="tab-label">{topic.label}</span><ArrowUpRight size={16} />
            </button>
          ))}
        </div>
        <div className="education-panel" role="tabpanel" id="education-panel" aria-labelledby={`tab-${topics[active].title}`}>
          <span className="panel-index">SPECIFICATION GUIDE / {String(active + 1).padStart(2, "0")}</span>
          <h3>{topics[active].label}</h3>
          <p>{topics[active].description}</p>
          <div className="education-prompt"><Check size={17} /><span>{topics[active].prompt}</span></div>
        </div>
      </div>
      <div className="regulation-note">
        <div className="regulation-icon"><ShieldCheck size={22} /></div>
        <div>
          <h3>Keep Malaysian tint rules in view.</h3>
          <p>Published guidance states minimum VLT of 70% for the front windscreen and 50% for front side windows on private vehicles. Rear-window rules and applicable conditions should be checked against current JPJ guidance before installation. Existing glass affects the finished reading.</p>
          <a href="https://www.mot.gov.my/my/Berita%20Terkini/Darker%20rear%20windows%20now%20an%20option.pdf" target="_blank" rel="noreferrer" className="text-link">Read Ministry of Transport information <ArrowUpRight size={15} /></a>
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const galleryRef = useRef(null);
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".gallery-image").forEach((img) => {
        gsap.fromTo(img, { scale: 0.96, opacity: 0.72 }, {
          scale: 1, opacity: 1, ease: "none",
          scrollTrigger: { trigger: img, start: "top 88%", end: "top 45%", scrub: 0.6 }
        });
      });
    }, galleryRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="gallery-section" id="gallery" ref={galleryRef}>
      <div className="gallery-heading">
        <div><span className="eyebrow"><span className="blue-dash" /> MATERIAL / LIGHT / DETAIL</span><h2>Look closer.</h2></div>
        <p>Automotive imagery for the details that matter: glass, reflections, finish and fit. These are illustrative images, not verified photographs of COOL 9 customer installations.</p>
      </div>
      <div className="gallery-grid">
        <figure className="gallery-item gallery-item-large">
          <img className="gallery-image" src={imageUrls.detail} alt="Close-up of a premium vehicle exterior with reflective glass, illustrative image" loading="lazy" />
          <figcaption><span>01 / SURFACE</span><span>Glass & reflection</span></figcaption>
        </figure>
        <figure className="gallery-item gallery-item-tall">
          <img className="gallery-image" src={imageUrls.glass} alt="Automotive glass and bodywork under outdoor light, illustrative image" loading="lazy" />
          <figcaption><span>02 / LIGHT</span><span>Light in motion</span></figcaption>
        </figure>
        <figure className="gallery-item gallery-item-wide">
          <img className="gallery-image" src={imageUrls.install} alt="Vehicle in a service environment, illustrative image rather than COOL 9 project photography" loading="lazy" />
          <figcaption><span>03 / PROCESS</span><span>Installation context</span></figcaption>
        </figure>
      </div>
      <div className="gallery-footnote"><span className="blue-dash" /> REPLACE WITH AUTHENTIC COOL 9 INSTALLATION PHOTOGRAPHY BEFORE LAUNCH</div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-main">
        <span className="eyebrow"><span className="blue-dash" /> YOUR NEXT DRIVE STARTS HERE</span>
        <h2>Let’s find the<br /><em>right fit.</em></h2>
        <p>Tell COOL 9 about your vehicle and what matters to you. Start a conversation to ask about available tint options and arrange your next step.</p>
        <div className="contact-actions">
          <WhatsAppLink className="button button-light">Start on WhatsApp <ArrowUpRight size={17} /></WhatsAppLink>
          <a className="button button-outline-light" href={`tel:+${PHONE_E164}`}>Call the shop <Phone size={16} /></a>
        </div>
      </div>
      <div className="contact-details">
        <div className="contact-detail">
          <span className="detail-label"><MapPin size={15} /> VISIT THE SHOP</span>
          <p>36, Jalan Sulam,<br />Taman Sentosa, 80150<br />Johor Bahru, Johor, Malaysia</p>
          <a className="text-link light-link" href={MAPS_URL} target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={15} /></a>
        </div>
        <div className="contact-detail">
          <span className="detail-label"><Phone size={15} /> CALL OR MESSAGE</span>
          <a className="contact-phone" href={`tel:+${PHONE_E164}`}>{PHONE_DISPLAY}</a>
          <WhatsAppLink className="text-link light-link">WhatsApp the shop <ArrowUpRight size={15} /></WhatsAppLink>
        </div>
        <div className="contact-detail">
          <span className="detail-label"><Clock3 size={15} /> BUSINESS HOURS</span>
          <p>10:00 AM – 7:00 PM</p>
          <span className="hours-note">Please confirm availability before visiting.</span>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <a className="wordmark footer-wordmark" href="#home" aria-label="COOL 9 home">
          <span className="wordmark-main">COOL<span>9</span></span>
          <span className="wordmark-sub">CAR TINT SHOP</span>
        </a>
        <p>Precision in every layer.<br />Automotive tint enquiries in Johor Bahru.</p>
        <WhatsAppLink className="footer-cta">Start a conversation <ArrowUpRight size={16} /></WhatsAppLink>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} COOL 9 CAR TINT SHOP</span>
        <span>36, Jalan Sulam, Taman Sentosa, Johor Bahru</span>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}

function App() {
  useEffect(() => {
    const onAnchorClick = (event) => {
      const link = event.target.closest('a[href^="#"]');
      if (!link) return;
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
      }
    };
    document.addEventListener("click", onAnchorClick);
    return () => document.removeEventListener("click", onAnchorClick);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Approach />
        <TintEducation />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <WhatsAppLink className="floating-whatsapp" label="Contact COOL 9 on WhatsApp"><span className="whatsapp-mark">W</span><span>WhatsApp</span><ArrowUpRight size={14} /></WhatsAppLink>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
