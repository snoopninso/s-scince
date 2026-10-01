import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import './App.css'

const navItems = [
  { id: 'home', label: '01 HOME' },
  { id: 'about', label: '02 ABOUT' },
  { id: 'experience', label: '03 EXPERIENCE' },
  { id: 'services', label: '04 SERVICES' },
  { id: 'portfolio', label: '05 PORTFOLIO' },
  { id: 'branding', label: '06 BRANDING' },
  { id: 'collaborations', label: '07 COLLABORATIONS' },
  { id: 'science-promise', label: '08 THE SCIENCE PROMISE' },
  { id: 'contact', label: '09 CONTACT' },
]

const aboutAreas = [
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

const services = [
  {
    name: 'Medical Conferences',
    summary: 'Specialized event planning for scientific and medical audiences.',
  },
  {
    name: 'Scientific Conferences',
    summary: 'Thoughtful coordination for knowledge-driven experiences and gathering moments.',
  },
  {
    name: 'Academic Conferences',
    summary: 'Clear, polished event experiences built around learning and engagement.',
  },
  {
    name: 'Corporate Conferences',
    summary: 'Professionally managed conferences designed to align vision, teams, and outcomes.',
  },
  {
    name: 'Government Conferences',
    summary: 'Structured experiences that balance precision, protocol, and presentation.',
  },
  {
    name: 'International Conferences',
    summary: 'Global event coordination grounded in seamless planning and impactful delivery.',
  },
  {
    name: 'Company Launches',
    summary: 'A memorable introduction that communicates identity, ambition, and momentum.',
  },
  {
    name: 'Project Inaugurations',
    summary: 'High-impact moments that position milestones with clarity and confidence.',
  },
  {
    name: 'Annual Meetings',
    summary: 'Purposeful event environments that connect leadership, teams, and objectives.',
  },
  {
    name: 'Product Launches',
    summary: 'Immersive product reveal experiences shaped around attention and anticipation.',
  },
  {
    name: 'Corporate Gatherings',
    summary: 'Curated experiences that strengthen relationships and create lasting presence.',
  },
  {
    name: 'Internal Company Events',
    summary: 'Elevated team experiences that celebrate culture, alignment, and connection.',
  },
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
    text: 'From planning to on-site management, ensuring a smooth and successful event experience.',
  },
]

const experienceSteps = [
  'Vision',
  'Planning',
  'Creative',
  'Execution',
  'Experience',
  'Impact',
]

const portfolioItems = [
  {
    category: 'Conference Experience',
    title: 'Project Details Coming Soon',
    label: 'Coming Soon',
    summary: 'A placeholder experience designed for future SCIENCE project storytelling.',
  },
  {
    category: 'Corporate Event',
    title: 'Project Details Coming Soon',
    label: 'Coming Soon',
    summary: 'A premium editorial placeholder for upcoming event management showcases.',
  },
  {
    category: 'Brand Experience',
    title: 'Project Details Coming Soon',
    label: 'Coming Soon',
    summary: 'Visual storytelling structure ready to present verified client work when added.',
  },
]

const collaborations = [
  'Coming Soon',
  'Project Partners',
  'Official Collaborations',
  'To Be Announced',
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
        { y: 32, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1, stagger: 0.1, ease: 'power3.out', delay: 0.12 },
      )
    })

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.45 },
    )

    document.querySelectorAll('section[id], footer[id]').forEach((section) => {
      sectionObserver.observe(section)
    })

    const handlePointerMove = (event) => {
      if (!cursorRef.current) return
      cursorRef.current.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`
    }

    const setCursorState = (state) => {
      if (!cursorRef.current) return
      cursorRef.current.classList.toggle('is-hovering', state)
    }

    const hoverables = document.querySelectorAll(
      'a, button, .project-card, .service-item, .chip, .nav-link, .logo-mark',
    )
    hoverables.forEach((element) => {
      element.addEventListener('pointerenter', () => setCursorState(true))
      element.addEventListener('pointerleave', () => setCursorState(false))
    })

    window.addEventListener('pointermove', handlePointerMove)

    return () => {
      ctx.revert()
      sectionObserver.disconnect()
      window.removeEventListener('pointermove', handlePointerMove)
      hoverables.forEach((element) => {
        element.removeEventListener('pointerenter', () => setCursorState(true))
        element.removeEventListener('pointerleave', () => setCursorState(false))
      })
    }
  }, [])

  return (
    <div className="page-shell">
      <div className="cursor" ref={cursorRef} aria-hidden="true" />

      <header className="site-header">
        <div className="nav-wrap">
          <a href="#home" className="brand" aria-label="SCIENCE home">
            <span className="logo-mark" aria-hidden="true">S</span>
            <span className="brand-text">SCIENCE</span>
          </a>

          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            onClick={() => setMenuOpen((open) => !open)}
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
        <section id="home" className="hero-section section">
          <div className="hero-grid">
            <div className="hero-copy reveal">
              <p className="eyebrow">EVENT MANAGEMENT</p>
              <h1>SCIENCE</h1>
              <p className="hero-subtitle">Event Management</p>
              <p className="hero-text">
                Full-service event management built around strategic planning, creative thinking,
                and flawless execution.
              </p>

              <div className="cta-row">
                <a href="#contact" className="primary-button">
                  Book a Consultation
                </a>
                <a href="#portfolio" className="secondary-link">
                  View Portfolio
                </a>
              </div>
            </div>

            <div className="hero-visual reveal" aria-label="SCIENCE visual concept">
              <div className="visual-frame">
                <div className="visual-ambient" />
                <div className="floating-card card-top">
                  <span>Full-Service</span>
                  <strong>Event Delivery</strong>
                </div>
                <div className="floating-card card-bottom">
                  <span>From concept</span>
                  <strong>To experience</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-meta reveal">
            <span>Medical Conferences</span>
            <span>Corporate Events</span>
            <span>VIP Experiences</span>
            <span>Exhibitions</span>
            <span>Official Ceremonies</span>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-heading reveal">
            <p className="eyebrow">02 ABOUT</p>
            <h2>Crafting distinctive experiences with precision.</h2>
          </div>

          <div className="about-grid">
            <div className="about-copy reveal">
              <p>
                SCIENCE Event Management is a full-service event management company dedicated to
                delivering exceptional events through strategic planning, creative thinking, and
                flawless execution.
              </p>
              <p>
                We create experiences that connect audiences, strengthen brand presence, and
                transform important moments into lasting memories.
              </p>
            </div>

            <div className="about-aside reveal">
              <div className="mini-panel">
                <span className="label">Specializations</span>
                <ul>
                  {aboutAreas.map((area) => (
                    <li key={area}>{area}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-heading reveal">
            <p className="eyebrow">03 EXPERIENCE</p>
            <h2>From vision to unforgettable impact.</h2>
          </div>

          <div className="experience-timeline reveal">
            {experienceSteps.map((step, index) => (
              <div key={step} className="timeline-item">
                <span className="timeline-index">0{index + 1}</span>
                <h3>{step}</h3>
              </div>
            ))}
          </div>
        </section>

        <section id="mission" className="section">
          <div className="section-heading reveal">
            <p className="eyebrow">04 MISSION</p>
            <h2>Mission-driven execution built around lasting impact.</h2>
          </div>

          <div className="mission-stack reveal">
            {missionPillars.map((pillar) => (
              <article key={pillar.title} className="mission-item">
                <span className="mission-number">{pillar.number}</span>
                <div>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="services" className="section">
          <div className="section-heading reveal">
            <p className="eyebrow">05 SERVICES</p>
            <h2>Tailored event solutions for every occasion.</h2>
          </div>

          <div className="services-grid reveal">
            {services.map((service) => (
              <article key={service.name} className="service-item">
                <span className="service-index">{service.name.slice(0, 2).toUpperCase()}</span>
                <h3>{service.name}</h3>
                <p>{service.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="why-science" className="section">
          <div className="section-heading reveal">
            <p className="eyebrow">06 WHY CHOOSE SCIENCE</p>
            <h2>Quality, customization, and seamless delivery.</h2>
          </div>

          <div className="reason-grid reveal">
            {reasons.map((reason) => (
              <article key={reason.title} className="reason-card">
                <h3>{reason.title}</h3>
                <p>{reason.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="portfolio" className="section">
          <div className="section-heading reveal">
            <p className="eyebrow">07 PORTFOLIO</p>
            <h2>Editorial storytelling built for premium events.</h2>
          </div>

          <div className="portfolio-grid reveal">
            {portfolioItems.map((project) => (
              <article key={project.title} className="project-card">
                <div className="project-visual">
                  <span>{project.label}</span>
                </div>
                <div className="project-meta">
                  <p>{project.category}</p>
                  <h3>{project.title}</h3>
                </div>
                <p className="project-summary">{project.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="branding" className="section">
          <div className="section-heading reveal">
            <p className="eyebrow">08 BRANDING</p>
            <h2>Visual identities designed to command attention.</h2>
          </div>

          <div className="branding-showcase reveal">
            <div className="branding-panel panel-large">
              <span className="panel-label">Event Identity</span>
              <h3>Conference environments</h3>
            </div>
            <div className="branding-panel panel-medium">
              <span className="panel-label">Stage Design</span>
              <h3>Backdrops & banners</h3>
            </div>
            <div className="branding-panel panel-small">
              <span className="panel-label">Print</span>
              <h3>Invitations & materials</h3>
            </div>
          </div>
        </section>

        <section id="collaborations" className="section">
          <div className="section-heading reveal">
            <p className="eyebrow">09 COLLABORATIONS</p>
            <h2>Partnerships and experiences shaped for lasting impact.</h2>
          </div>

          <div className="collab-grid reveal">
            {collaborations.map((item) => (
              <div key={item} className="collab-chip">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section id="science-promise" className="section promise-section">
          <div className="promise-quote reveal">
            <p className="eyebrow">10 THE SCIENCE PROMISE</p>
            <blockquote>
              “Great events don’t happen by chance. They are designed with vision, planned with
              precision, and delivered with excellence.”
            </blockquote>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-card reveal">
            <div className="contact-copy">
              <p className="eyebrow">11 CONTACT</p>
              <h2>Let’s shape your next standout event.</h2>
              <div className="contact-details">
                <a href="tel:+201147599444">+201147599444</a>
                <a href="https://www.elmawy.com" target="_blank" rel="noreferrer">
                  www.elmawy.com
                </a>
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
        <div className="footer-wrap">
          <div className="brand footer-brand">
            <span className="logo-mark" aria-hidden="true">S</span>
            <span className="brand-text">SCIENCE</span>
          </div>
          <p>Creating exceptional event experiences with vision, precision, and excellence.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
