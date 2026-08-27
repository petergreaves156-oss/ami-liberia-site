/*
 * AMI Liberia — Field Notes / Civic Clinical.
 * This page treats healthcare as a route to clarity: editorial hierarchy, real clinic imagery,
 * warm sand surfaces, AMI Ocean rules, and short paths to call, email, or find the clinic.
 */
import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Ambulance,
  ArrowDownRight,
  ArrowRight,
  Baby,
  Check,
  ChevronDown,
  Clock3,
  Crosshair,
  HeartPulse,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Microscope,
  Phone,
  ShieldCheck,
  Stethoscope,
  X,
} from "lucide-react";

const assets = {
  mark: "/manus-storage/ami-mark_3ca64a91.png",
  hero: "/manus-storage/ami-community-hero_9461aaa5.jpg",
  building: "/manus-storage/ami-building-2_b4463239.jpg",
  profile: "/manus-storage/ami-profile_e855f6f7.jpg",
  tagline: "/manus-storage/ami-tagline_a82ce86e.jpg",
  reels: "/manus-storage/ami-reels_654833b4.jpg",
  community: "/manus-storage/ami-community-hero_9461aaa5.jpg",
  clinical: "/manus-storage/ami-clinical-care_42439759.jpg",
  outreach: "/manus-storage/ami-outreach_38082788.jpg",
};

const services: Array<{
  id: string;
  number: string;
  title: string;
  description: string;
  detail: string;
  icon: LucideIcon;
}> = [
  {
    id: "urgent",
    number: "01",
    title: "Urgent & emergency care",
    description: "A calm, capable response when the moment cannot wait.",
    detail: "Emergency room and stabilization facilities support critical care for life-threatening trauma and medical cases, including malaria, heart attacks, cardiac arrest, and strokes.",
    icon: HeartPulse,
  },
  {
    id: "primary",
    number: "02",
    title: "Primary care",
    description: "Internationally registered general practitioners for everyday health.",
    detail: "Appointment-based consultations are available for adults and children, with referrals to specialist care when your needs call for it.",
    icon: Stethoscope,
  },
  {
    id: "womens",
    number: "03",
    title: "Women’s health",
    description: "Thoughtful OBGYN and surgical care under one roof.",
    detail: "The licensed clinic offers obstetrics, gynecology, OBGYN care, and surgical interventions for both elective and emergency cases.",
    icon: Baby,
  },
  {
    id: "diagnostics",
    number: "04",
    title: "Diagnostics & pharmacy",
    description: "The information and medicines that help care move forward.",
    detail: "Ultrasound, ECG, onsite chest X-ray, in-house and outsourced laboratory testing, and a pharmacy support confident clinical decisions.",
    icon: Microscope,
  },
  {
    id: "specialists",
    number: "05",
    title: "Specialist pathways",
    description: "A broad network for the care that comes next.",
    detail: "Specialized areas listed by AMI include pediatrics, orthopedics, ENT, internal medicine, ophthalmology, psychiatry, physiotherapy, cardiology, oncology, intensive care, and more.",
    icon: ShieldCheck,
  },
  {
    id: "transfer",
    number: "06",
    title: "Transfer & evacuation",
    description: "Local presence with expeditionary reach.",
    detail: "A dedicated ambulance supports patient transfer, while international aeromedical evacuation is available through AMI aviation networks and partners.",
    icon: Ambulance,
  },
];

const navItems = [
  { label: "Care", href: "#care" },
  { label: "The clinic", href: "#clinic" },
  { label: "Patient info", href: "#patient-info" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  const [activeService, setActiveService] = useState("urgent");
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <div className="utility-bar">
          <div className="utility-inner">
            <span className="utility-location">
              <span className="status-dot" aria-hidden="true" /> AMI Liberia · Monrovia
            </span>
            <span className="utility-note">General hours · Mon–Fri 08:00–17:00 · Sat 09:00–13:00</span>
            <a className="utility-emergency" href="tel:+231770911911">
              <span>Emergency line</span> +231 (0)770 911 911
            </a>
          </div>
        </div>

        <div className="nav-wrap">
          <a className="brand-lockup" href="#top" aria-label="AMI Liberia home">
            <span className="brand-mark-frame">
              <img src={assets.mark} alt="" />
            </span>
            <span className="brand-wordmark">
              <strong>ami</strong>
              <span>we’re already there</span>
            </span>
          </a>

          <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
            <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>
              Call the clinic <ArrowUpRight />
            </a>
          </nav>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main id="main-content">
        <section className="hero-section" id="top">
          <div className="hero-copy">
            <div className="section-kicker"><span>01</span> A clinic in Monrovia</div>
            <h1>Care that can <em>meet</em> the moment.</h1>
            <p className="hero-lede">
              AMI Liberia is a full-service medical facility for everyday health, urgent needs, and complex care—right here in Sinkor.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                Find your care path <ArrowRight />
              </a>
              <a className="text-link" href="tel:+231770029511">
                <Phone /> <span>+231 (0)770 029 511</span>
              </a>
            </div>
            <div className="hero-proof">
              <div><strong>10</strong><span>overnight beds</span></div>
              <div><strong>Emergency</strong><span>clinic line</span></div>
              <div><strong>1st St.</strong><span>Tubman Boulevard</span></div>
            </div>
          </div>

          <div className="hero-media">
            <img src={assets.hero} alt="AMI Expeditionary Healthcare clinic in Monrovia" />
            <div className="hero-image-caption">
              <span className="caption-rule" />
              <span>AMI Expeditionary Healthcare · Sinkor</span>
            </div>
            <div className="hero-image-card">
              <Crosshair />
              <span>Present, local, ready</span>
            </div>
          </div>

          <div className="hero-bottom-line">
            <span>We’re already there</span>
            <span>Scroll to explore <ArrowDownRight /></span>
          </div>
        </section>

        <section className="route-strip" aria-label="Quick contact options">
          <div className="route-strip-label"><span className="route-line" /> Your shortest route to care</div>
          <a href="tel:+231770029511"><Phone /> Appointments <strong>+231 (0)770 029 511</strong></a>
          <a href="mailto:reception.lr@ami.health"><Mail /> Email reception <strong>reception.lr@ami.health</strong></a>
          <a href="#contact"><MapPin /> Visit us <strong>Opposite the UN building</strong></a>
        </section>

        <section className="intro-section content-frame" id="clinic">
          <div className="vertical-index"><span>02</span><i /></div>
          <div className="intro-copy">
            <div className="section-kicker">The clinic <span className="kicker-dash" /></div>
            <h2>Close enough to know the place. Equipped enough to take on what’s next.</h2>
          </div>
          <div className="intro-body">
            <p>
              Healthcare is not only about the room you enter. It is the confidence that someone capable is there when you need them. AMI Liberia brings general practice, trauma care, diagnostics, surgery, and specialist pathways together in Monrovia.
            </p>
            <button className="underlined-link" type="button" onClick={() => scrollTo("#care")}>
              Explore clinical services <ArrowDownRight />
            </button>
          </div>
        </section>

        <section className="care-section" id="care">
          <div className="content-frame care-frame">
            <div className="care-header">
              <div>
                <div className="section-kicker"><span>03</span> Clinical capability</div>
                <h2>One place. Many ways forward.</h2>
              </div>
              <p>Explore the services that help AMI stay ready for everyday care, emergencies, and everything in between.</p>
            </div>

            <div className="services-layout">
              <div className="service-list" role="list">
                {services.map((service) => {
                  const Icon = service.icon;
                  const isActive = activeService === service.id;
                  return (
                    <button
                      className={`service-item service-${service.id} ${isActive ? "is-active" : ""}`}
                      key={service.id}
                      type="button"
                      role="listitem"
                      aria-expanded={isActive}
                      onClick={() => setActiveService(service.id)}
                    >
                      <span className="service-number">{service.number}</span>
                      <span className="service-title">{service.title}</span>
                      <Icon className="service-icon" />
                      <ChevronDown className="service-chevron" />
                    </button>
                  );
                })}
              </div>

              <div className="service-detail" aria-live="polite">
                {services.map((service) => {
                  const Icon = service.icon;
                  if (service.id !== activeService) return null;
                  return (
                    <div className="service-detail-inner" key={service.id}>
                      <div className="detail-icon"><Icon /></div>
                      <span className="detail-label">Service {service.number}</span>
                      <h3>{service.title}</h3>
                      <p>{service.detail}</p>
                      <a className="detail-link" href="#contact">Talk to our team <ArrowRight /></a>
                    </div>
                  );
                })}
                <div className="detail-corner" aria-hidden="true" />
              </div>
            </div>
          </div>
        </section>

        <section className="story-section content-frame" id="patient-info">
          <div className="vertical-index"><span>04</span><i /></div>
          <div className="story-intro">
            <div className="section-kicker">A closer look <span className="kicker-dash" /></div>
            <h2>Clinical thinking, human attention.</h2>
            <p>Every care path starts with listening. Our people, equipment, and network are here to help the next decision feel clearer.</p>
          </div>
          <div className="story-media-grid">
            <figure className="story-image story-image-tall">
              <img src={assets.clinical} alt="Clinician listening to a patient in a bright clinic" />
              <figcaption><span>01</span> Listening comes first.</figcaption>
            </figure>
            <figure className="story-image story-image-short">
              <img src={assets.profile} alt="AMI Liberia clinic profile image showing the Monrovia facility" />
              <figcaption><span>02</span> A place to come back to.</figcaption>
            </figure>
          </div>
        </section>

        <section className="capability-band">
          <div className="content-frame capability-frame">
            <div className="capability-heading">
              <div className="section-kicker section-kicker-light"><span>05</span> Built for the moment</div>
              <h2>Local care with a longer reach.</h2>
            </div>
            <div className="capability-stat-list">
              <div><strong>10</strong><span>overnight bed capacity</span></div>
              <div><strong>01</strong><span>operating theater</span></div>
              <div><strong>∞</strong><span>international destinations supported</span></div>
            </div>
            <p className="capability-note">When a patient’s needs extend beyond Monrovia, AMI’s expeditionary network helps the next step stay in view.</p>
          </div>
        </section>

        <section className="visa-section content-frame">
          <div className="visa-image-wrap">
            <img src={assets.tagline} alt="AMI brand mark on an ocean-blue background" />
            <span className="visa-image-tag">Patient information · 06</span>
          </div>
          <div className="visa-copy">
            <div className="section-kicker">US Visa Medical Screening <span className="kicker-dash" /></div>
            <h2>A clear next step for your journey.</h2>
            <p>AMI’s Liberia clinic provides comprehensive medical exams to support your US visa application process, with scheduling available through the dedicated reception team.</p>
            <div className="visa-requirements">
              <span><Check /> Valid passport</span>
              <span><Check /> DS-260 / DS-160 form</span>
              <span><Check /> Vaccination records</span>
              <span><Check /> US & Liberian address details</span>
            </div>
            <a className="button button-outline" href="tel:+231772875731">Schedule screening <ArrowRight /></a>
            <p className="small-note">+231 77 287 5731 · usvisareception.lr@ami.health</p>
          </div>
        </section>

        <section className="field-notes-section">
          <div className="content-frame field-notes-frame">
            <div className="field-notes-header">
              <div>
                <div className="section-kicker"><span>07</span> Field notes</div>
                <h2>Out where life is happening.</h2>
              </div>
              <p>From Monrovia to the wider region, AMI stays close to the people and places it serves.</p>
            </div>
            <div className="field-notes-grid">
              <figure className="field-note-large">
                <img src={assets.outreach} alt="Healthcare workers preparing a community outreach table" />
                <figcaption><span>01 / COMMUNITY</span><strong>Healthcare belongs in the everyday.</strong></figcaption>
              </figure>
              <figure className="field-note-small note-reels">
                <img src={assets.reels} alt="AMI Liberia community and clinic moments" />
                <figcaption><span>02 / AMI LIBERIA</span><strong>Present in the details.</strong></figcaption>
              </figure>
              <figure className="field-note-small note-outreach">
                <img src={assets.building} alt="Exterior of the AMI Liberia clinic in Monrovia" />
                <figcaption><span>03 / OUTREACH</span><strong>Care moves with people.</strong></figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-map-lines" aria-hidden="true"><span /><span /><span /></div>
          <div className="content-frame contact-frame">
            <div className="contact-heading">
              <div className="section-kicker section-kicker-light"><span>08</span> Keep this close</div>
              <h2>When you need us, <em>we’re already there.</em></h2>
              <p>Appointments, general information, and urgent support are one call away.</p>
            </div>
            <div className="contact-card-grid">
              <a className="contact-card contact-card-primary" href="tel:+231770029511">
                <span className="contact-card-icon"><Phone /></span>
                <span className="contact-card-label">Appointments & general information</span>
                <strong>+231 (0)770 029 511</strong>
                <span className="contact-card-action">Call the clinic <ArrowUpRight /></span>
              </a>
              <a className="contact-card contact-card-emergency" href="tel:+231770911911">
                <span className="contact-card-icon"><Activity /></span>
                <span className="contact-card-label">Clinic emergency line</span>
                <strong>+231 (0)770 911 911</strong>
                <span className="contact-card-action">Call emergency <ArrowUpRight /></span>
              </a>
              <div className="contact-card contact-card-address">
                <span className="contact-card-icon"><MapPin /></span>
                <span className="contact-card-label">Find the clinic</span>
                <strong>1st St. Tubman Boulevard<br />Sinkor, Monrovia</strong>
                <span className="contact-card-muted">Opposite the UN building</span>
              </div>
            </div>
            <div className="contact-footer-row">
              <a href="mailto:reception.lr@ami.health"><Mail /> reception.lr@ami.health</a>
              <span><Clock3 /> Mon–Fri 08:00–17:00 · Sat 09:00–13:00</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="content-frame footer-frame">
          <div className="footer-brand">
            <div className="footer-brand-lockup">
              <span className="brand-mark-frame"><img src={assets.mark} alt="" /></span>
              <span className="brand-wordmark"><strong>ami</strong><span>we’re already there</span></span>
            </div>
            <p>AMI Liberia is part of AMI Expeditionary Healthcare.</p>
          </div>
          <div className="footer-links">
            <div><span className="footer-label">Explore</span>{navItems.slice(0, 3).map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</div>
            <div><span className="footer-label">Connect</span><a href="https://www.facebook.com/AMILIBERIA/" target="_blank" rel="noreferrer">Facebook <ArrowUpRight /></a><a href="https://www.instagram.com/ami.health/" target="_blank" rel="noreferrer">Instagram <ArrowUpRight /></a><a href="https://www.linkedin.com/company/amiexpeditionaryhealthcare/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight /></a></div>
          </div>
          <div className="footer-social"><a href="https://www.instagram.com/ami.health/" aria-label="Instagram" target="_blank" rel="noreferrer"><Instagram /></a><a href="https://www.linkedin.com/company/amiexpeditionaryhealthcare/" aria-label="LinkedIn" target="_blank" rel="noreferrer"><Linkedin /></a></div>
          <div className="footer-bottom"><span>© {new Date().getFullYear()} AMI Expeditionary Healthcare</span><span>Monrovia, Liberia</span><span>Privacy & patient dignity, always.</span></div>
        </div>
      </footer>
    </div>
  );
}

function ArrowUpRight() {
  return <ArrowRight className="arrow-up-right" />;
}
