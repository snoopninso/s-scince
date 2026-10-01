import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import scienceLogo from './Reference/08A2BB1D-EB91-467F-8303-8F22763032CE.JPG'
import './App.css'

const navItems = [
  { id: 'home', label: '01 HOME' },
  { id: 'about', label: '02 ABOUT' },
  { id: 'vision', label: '03 VISION' },
  { id: 'mission', label: '04 MISSION' },
  { id: 'services', label: '05 SERVICES' },
  { id: 'why-science', label: '06 WHY SCIENCE' },
  { id: 'leadership', label: '07 LEADERSHIP' },
  { id: 'portfolio', label: '08 PORTFOLIO' },
  { id: 'promise', label: '09 PROMISE' },
  { id: 'contact', label: '10 CONTACT' },
]

const aboutPoints = [
  'Medical conferences',
  'Corporate events',
  'VIP experiences',
  'Exhibitions',
  'Official ceremonies',
]

const missionPillars = [
  {
    number: '01',
    title: 'Excellence in Execution',
    text: 'Delivering every event with precision, creativity, and exceptional attention to detail.',
  },
  {
    number: '02',
    title: 'Client-Centered Approach',
    text: 'Understanding our clients’ vision and transforming it into an unforgettable experience.',
  },
  {
    number: '03',
    title: 'Lasting Impact',
    text: 'Creating meaningful events that inspire audiences and build long-term value.',
  },
]

const conferenceServices = [
  'Medical Conferences',
  'Scientific Conferences',
  'Academic Conferences',
  'Corporate Conferences',
  'Government Conferences',
  'International Conferences',
]

const corporateServices = [
  'Company Launches',
  'Project Inaugurations',
  'Annual Meetings',
  'Product Launches',
  'Corporate Gatherings',
  'Internal Company Events',
]

const reasons = [
  {
    title: 'Professional Excellence',
    text: 'Delivering conferences and corporate events with precision, quality, and attention to every detail.',
  },
  {
    title: 'Tailored Solutions',
    text: 'Customized event planning and management designed to meet every client’s goals and requirements.',
  },
  {
    title: 'Seamless Execution',
    text: 'From planning to on-site management, we ensure a smooth and successful event experience.',
  },
]

const leadership = [
  {
    role: 'CEO & Managing Director',
    name: 'OSAMA ELMAWY',
  },
  {
    role: 'Founder & Chair of the Board',
    name: 'AYA NASSAR',
  },
]

const stats = [
  { value: '18+', label: 'YEARS OF EXPERIENCE' },
  { value: '500+', label: 'PROJECTS DELIVERED' },
  { value: '120+', label: 'EVENTS MANAGED' },
  { value: '80+', label: 'STRATEGIC PARTNERSHIPS' },
]

const portfolioItems = [
  { category: 'Premium event showcase', title: 'Project Details Coming Soon', description: 'A placeholder experience for upcoming SCIENCE project storytelling.' },
  { category: 'Conference experience', title: 'Project Details Coming Soon', description: 'Structured to showcase future event design, execution, and impact.' },
  { category: 'Corporate engagement', title: 'Project Details Coming Soon', description: 'Editorial placeholders ready for verified SCIENCE client work and outcomes.' },
]

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)
  const cursorRef = useRef(null)

  useEffect(() => {
    const revealItems = document.querySelectorAll('.reveal')
    const ctx = gsap.context(() => {
      gsap.fromTo(
        revealItems,
        { y: 42, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.12, ease: 'power3.out' },
      )
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.45 },
    )

    document.querySelectorAll('section[id], footer[id]').forEach((element) => observer.observe(element))

    const handlePointerMove = (event) => {
      if (!cursorRef.current) return
      cursorRef.current.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`
    }

    const updateCursor = (active) => {
      if (!cursorRef.current) return
      cursorRef.current.classList.toggle('is-hovering', active)
    }

    const interactiveItems = document.querySelectorAll('a, button, .service-item, .project-card, .leader-card, .stat-card, .brand-mark')

    interactiveItems.forEach((element) => {
      element.addEventListener('pointerenter', () => updateCursor(true))
      element.addEventListener('pointerleave', () => updateCursor(false))
    })

    window.addEventListener('pointermove', handlePointerMove)

    return () => {
      ctx.revert()
      observer.disconnect()
      window.removeEventListener('pointermove', handlePointerMove)
      interactiveItems.forEach((element) => {
        element.removeEventListener('pointerenter', () => updateCursor(true))
        element.removeEventListener('pointerleave', () => updateCursor(false))
      })
    }
  }, [])

  return (
    <div className="page-shell">
      <div ref={cursorRef} className="cursor" aria-hidden="true" />

      <header className="site-header">
        <div className="nav-shell">
          <a className="brand" href="#home" aria-label="SCIENCE home">
            <img src={scienceLogo} alt="SCIENCE logo" className="brand-mark" />
            <span className="brand-text">SCIENCE</span>
          </a>

          <button
            type="button"
            className="menu-toggle"
            onClick={() => setMenuOpen((value) => !value)}
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            aria-label="Toggle navigation"
          >
            <span />
            <span />
          </button>

          <nav id="site-nav" className={menuOpen ? 'site-nav is-open' : 'site-nav'}>
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={activeSection === item.id ? 'nav-link active' : 'nav-link'}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="section hero-section">
          <div className="hero-grid">
            <div className="hero-copy reveal">
              <p className="eyebrow">Event Management</p>
              <img src={scienceLogo} alt="SCIENCE logo" className="hero-logo" />
              <h1>SCIENCE</h1>
              <p className="hero-tag">Event Management</p>
              <p className="lede">
                Full-service event management dedicated to exceptional experiences through
                strategic planning, creative thinking, and flawless execution.
              </p>
              <div className="cta-row">
                <a href="#contact" className="primary-button">Book a Consultation</a>
                <a href="#portfolio" className="secondary-link">View Portfolio</a>
              </div>
            </div>

            <div className="hero-visual reveal" aria-label="SCIENCE event concept background">
              <div className="visual-stage">
                <div className="shape glow-one" />
                <div className="shape glow-two" />
                <div className="status-card top-card">
                  <span>Full-Service</span>
                  <strong>Event Delivery</strong>
                </div>
                <div className="status-card lower-card">
                  <span>From concept</span>
                  <strong>To experience</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-tags reveal">
            <span>Medical Conferences</span>
            <span>Corporate Events</span>
            <span>VIP Experiences</span>
            <span>Exhibitions</span>
            <span>Official Ceremonies</span>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-header reveal">
            <p className="eyebrow">02 ABOUT</p>
            <h2>Where strategy, creativity, and execution meet.</h2>
          </div>

          <div className="about-layout">
            <div className="story reveal">
              <p>
                SCIENCE Event Management is a full-service event management company dedicated to
                delivering exceptional events through strategic planning, creative thinking, and
                flawless execution.
              </p>
              <p>
                From medical conferences and corporate events to VIP experiences, exhibitions, and
                official ceremonies, we create tailored solutions that reflect excellence,
                precision, and lasting impact.
              </p>
            </div>

            <div className="info-panel reveal">
              <span className="panel-label">Focus Areas</span>
              <ul>
                {aboutPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="vision" className="section">
          <div className="section-header reveal">
            <p className="eyebrow">03 VISION</p>
            <h2>To become the trusted partner of choice in event management.</h2>
          </div>

          <div className="vision-block reveal">
            <p>
              We aspire to redefine excellence through innovation, precision, and flawless
              execution, delivering world-class events that exceed expectations and reflect the
              unique identity of every client.
            </p>
            <p className="vision-strap">Creating Experiences That Last Beyond the Event.</p>
          </div>
        </section>

        <section id="mission" className="section">
          <div className="section-header reveal">
            <p className="eyebrow">04 MISSION</p>
            <h2>Our mission is built on three lasting principles.</h2>
          </div>

          <div className="mission-grid reveal">
            {missionPillars.map((pillar) => (
              <article key={pillar.number} className="mission-item">
                <span className="mission-number">{pillar.number}</span>
                <div className="mission-copy">
                  <h3>{pillar.title}</h3>
                  <p>{pillar.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="services" className="section">
          <div className="section-header reveal">
            <p className="eyebrow">05 SERVICES</p>
            <h2>Full-spectrum event organization for every setting.</h2>
          </div>

          <div className="service-columns reveal">
            <div className="service-group">
              <p className="group-label">Conference Organization</p>
              <div className="service-list">
                {conferenceServices.map((service) => (
                  <div key={service} className="service-item">
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="service-group">
              <p className="group-label">Corporate Events</p>
              <div className="service-list">
                {corporateServices.map((service) => (
                  <div key={service} className="service-item">
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="why-science" className="section">
          <div className="section-header reveal">
            <p className="eyebrow">06 WHY CHOOSE SCIENCE</p>
            <h2>Professional excellence built for meaningful outcomes.</h2>
          </div>

          <div className="why-grid reveal">
            {reasons.map((reason) => (
              <article key={reason.title} className="reason-card">
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="leadership" className="section">
          <div className="section-header reveal">
            <p className="eyebrow">07 LEADERSHIP</p>
            <h2>Leadership rooted in vision, clarity, and execution.</h2>
          </div>

          <div className="leadership-grid reveal">
            {leadership.map((person) => (
              <article key={person.name} className="leader-card">
                <span className="leader-role">{person.role}</span>
                <h3>{person.name}</h3>
              </article>
            ))}
          </div>

          <div className="quote-panel reveal">
            <p>
              “At SCIENCE, we believe that every successful event begins with a clear vision,
              strategic planning, and an unwavering commitment to excellence. Our mission is to
              transform every event into a seamless experience through innovation, precision, and
              exceptional execution.”
            </p>
          </div>
        </section>

        <section id="portfolio" className="section">
          <div className="section-header reveal">
            <p className="eyebrow">08 PORTFOLIO</p>
            <h2>Business development and marketing leadership with measurable momentum.</h2>
          </div>

          <div className="jowana-box reveal">
            <div className="jowana-copy">
              <p className="scan-label">SCAN TO VIEW MY PORTFOLIO</p>
              <h3>JOWANA ALMALKY</h3>
              <p className="role">Business Development &amp; Marketing Consultant</p>
              <p className="title">GENERAL MANAGER</p>
            </div>

            <div className="stats-grid">
              {stats.map((stat) => (
                <div key={stat.label} className="stat-card">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="portfolio-grid reveal">
            {portfolioItems.map((item) => (
              <article key={item.title} className="project-card">
                <div className="project-visual">
                  <span>{item.category}</span>
                </div>
                <div className="project-body">
                  <p>{item.category}</p>
                  <h3>{item.title}</h3>
                  <small>{item.description}</small>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="promise" className="section promise-section">
          <div className="section-header reveal">
            <p className="eyebrow">09 THE SCIENCE PROMISE</p>
          </div>

          <blockquote className="promise-quote reveal">
            “Great events don’t happen by chance. They are designed with vision, planned with
            precision, and delivered with excellence.”
          </blockquote>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-box reveal">
            <div className="contact-copy">
              <p className="eyebrow">10 CONTACT</p>
              <h2>We are here to assist you.</h2>
              <div className="contact-list">
                <a href="tel:+201147599444">+201147599444</a>
                <a href="https://www.elmawy.com" target="_blank" rel="noreferrer">www.elmawy.com</a>
                <a href="mailto:science@elmawy.com">science@elmawy.com</a>
                <p>
                  Unit 1, 2nd Floor, Maxim Mall,
                  <br />
                  North 90th Street,
                  <br />
                  New Cairo, Cairo, Egypt
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="footer" className="site-footer">
        <div className="footer-shell">
          <div className="footer-brand">
            <img src={scienceLogo} alt="SCIENCE logo" className="brand-mark small" />
            <span>SCIENCE</span>
          </div>
          <p>THANK YOU</p>
        </div>
        <div className="footer-message reveal">
          <h3>LET’S CREATE EXTRAORDINARY EXPERIENCES TOGETHER</h3>
          <p>
            “Thank you for taking the time to discover SCIENCE Event Management. We look forward to
            bringing your vision to life with creativity, precision, and excellence.”
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
