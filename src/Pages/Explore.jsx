import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router'

import '../styles/Explore.css'


/* =========================================================
   TOOL DATA
   ========================================================= */

const tools = [
  {
    number: '01',

    id: 'habit-tracker',

    eyebrow: 'BUILD CONSISTENCY',

    title: 'Habit Tracker',

    description:
      'Build better habits, protect your streaks, and clearly see how consistent you are becoming.',

    features: [
      'Track daily habits',
      'Build and protect streaks',
      'See simple progress insights',
    ],

    type: 'habit',
  },

  {
    number: '02',

    id: 'addiction-quitter',

    eyebrow: 'BREAK THE LOOP',

    title: 'Addiction Quitter',

    description:
      'Track your recovery journey, understand your progress, and keep moving toward your comeback.',

    features: [
      'Track clean days',
      'Follow recovery milestones',
      'Understand triggers and progress',
    ],

    type: 'quit',
  },

  {
    number: '03',

    id: 'loan-savings-planner',

    eyebrow: 'PLAN YOUR PROGRESS',

    title: 'Loan & Savings Planner',

    description:
      'Understand loan progress and break repayment goals into manageable daily or monthly savings.',

    features: [
      'Set repayment goals',
      'Create daily or monthly saving targets',
      'Track repayment progress',
    ],

    disclaimer:
      'AuraX helps users plan and track repayments. It does not provide financial advice.',

    type: 'loan',
  },
]


/* =========================================================
   SMOOTH SCROLL
   ========================================================= */

function scrollToSection(id) {
  const element = document.getElementById(id)

  if (!element) return

  element.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}


/* =========================================================
   HERO 3D OBJECT — HABIT
   ========================================================= */

function HeroHabitObject() {
  return (
    <div className="hero-object hero-habit-object">

      <div className="hero-habit-ring">

        <span className="hero-habit-fire">
          ●
        </span>

        <strong>
          12
        </strong>

        <small>
          DAYS
        </small>

      </div>

      <div className="hero-object-shadow" />

    </div>
  )
}


/* =========================================================
   HERO 3D OBJECT — ADDICTION
   ========================================================= */

function HeroQuitObject() {
  return (
    <div className="hero-object hero-quit-object">

      <div
        className="
          hero-break-ring
          hero-break-ring-left
        "
      />

      <div
        className="
          hero-break-ring
          hero-break-ring-right
        "
      />

      <div className="hero-break-core">

        <span>
          BREAK
        </span>

      </div>

      <div className="hero-object-shadow" />

    </div>
  )
}


/* =========================================================
   HERO 3D OBJECT — LOAN
   ========================================================= */

function HeroLoanObject() {
  return (
    <div className="hero-object hero-loan-object">

      <div className="hero-coin coin-three">

        <span>
          30%
        </span>

      </div>

      <div className="hero-coin coin-two" />

      <div className="hero-coin coin-one" />


      <div className="hero-goal-tag">

        <small>
          GOAL
        </small>

        <strong>
          ON TRACK
        </strong>

      </div>


      <div className="hero-object-shadow" />

    </div>
  )
}


/* =========================================================
   01 — HABIT TRACKER VISUAL
   ========================================================= */

function HabitVisual() {
  return (
    <div className="tool-scene habit-scene">

      <div className="scene-glow" />


      {/* MAIN DASHBOARD */}

      <div className="habit-main-card">

        <div className="dashboard-top">

          <div>

            <span className="mini-label">
              TODAY
            </span>

            <h3>
              Your habits
            </h3>

          </div>


          <div className="mini-status-dot" />

        </div>


        {/* PROGRESS */}

        <div className="habit-progress-area">

          <div>

            <strong>
              84%
            </strong>

            <span>
              complete
            </span>

          </div>


          <div className="habit-progress-track">

            <div />

          </div>

        </div>


        {/* HABIT 1 */}

        <div className="habit-task">

          <span className="task-check">
            ✓
          </span>

          <div>

            <strong>
              Morning routine
            </strong>

            <small>
              12 day streak
            </small>

          </div>

        </div>


        {/* HABIT 2 */}

        <div className="habit-task">

          <span className="task-check">
            ✓
          </span>

          <div>

            <strong>
              Read 20 minutes
            </strong>

            <small>
              8 day streak
            </small>

          </div>

        </div>


        {/* HABIT 3 */}

        <div className="habit-task muted-task">

          <span className="task-number">
            03
          </span>

          <div>

            <strong>
              Workout
            </strong>

            <small>
              Not completed yet
            </small>

          </div>

        </div>

      </div>


      {/* FLOATING STREAK */}

      <div
        className="
          floating-panel
          habit-streak-panel
        "
      >

        <span>
          STREAK
        </span>

        <strong>
          12
        </strong>

        <small>
          days
        </small>

      </div>


      {/* FLOATING GROWTH */}

      <div
        className="
          floating-panel
          habit-growth-panel
        "
      >

        <span>
          THIS WEEK
        </span>

        <strong>
          +18%
        </strong>

      </div>


      {/* FLOOR RINGS */}

      <div
        className="
          scene-floor-ring
          floor-ring-large
        "
      />

      <div
        className="
          scene-floor-ring
          floor-ring-small
        "
      />

    </div>
  )
}


/* =========================================================
   02 — ADDICTION QUITTER VISUAL
   ========================================================= */

function QuitVisual() {
  return (
    <div className="tool-scene quit-scene">

      <div className="scene-glow stronger-glow" />


      {/* BROKEN LOOP */}

      <div className="quit-ring quit-ring-left" />

      <div className="quit-ring quit-ring-right" />


      {/* CENTER */}

      <div className="quit-center">

        <span>
          CLEAN
        </span>

        <strong>
          18
        </strong>

        <small>
          DAYS
        </small>

      </div>


      {/* NEXT MILESTONE */}

      <div
        className="
          floating-panel
          quit-next-panel
        "
      >

        <span>
          NEXT MILESTONE
        </span>

        <strong>
          21 DAYS
        </strong>

      </div>


      {/* PROGRESS */}

      <div
        className="
          floating-panel
          quit-progress-panel
        "
      >

        <span>
          PROGRESS
        </span>

        <strong>
          86%
        </strong>

      </div>


      {/* SPACE DOTS */}

      <div className="quit-dot quit-dot-one" />

      <div className="quit-dot quit-dot-two" />

      <div className="quit-dot quit-dot-three" />


      {/* FLOOR */}

      <div
        className="
          scene-floor-ring
          quit-floor-ring
        "
      />

    </div>
  )
}


/* =========================================================
   03 — LOAN & SAVINGS VISUAL
   ========================================================= */

function LoanVisual() {
  return (
    <div className="tool-scene loan-scene">

      <div className="scene-glow loan-glow" />


      {/* MAIN DASHBOARD */}

      <div className="loan-main-card">

        <div className="loan-header">

          <div>

            <span className="mini-label">
              REPAYMENT PLAN
            </span>

            <h3>
              Goal progress
            </h3>

          </div>


          <div className="loan-percentage">

            <span>
              32%
            </span>

          </div>

        </div>


        {/* REMAINING AMOUNT */}

        <div className="loan-amount">

          <small>
            Remaining goal
          </small>

          <strong>
            ₹68,000
          </strong>

        </div>


        {/* PROGRESS BAR */}

        <div className="loan-progress-track">

          <div />

        </div>


        {/* SAVING TARGETS */}

        <div className="saving-options">

          <div className="saving-option">

            <span>
              DAILY TARGET
            </span>

            <strong>
              ₹190
            </strong>

          </div>


          <div className="saving-option">

            <span>
              MONTHLY TARGET
            </span>

            <strong>
              ₹5,700
            </strong>

          </div>

        </div>

      </div>


      {/* MONTHLY GOAL */}

      <div
        className="
          floating-panel
          loan-goal-panel
        "
      >

        <span>
          THIS MONTH
        </span>

        <strong>
          ₹5,700
        </strong>

        <small>
          target
        </small>

      </div>


      {/* STATUS */}

      <div
        className="
          floating-panel
          loan-status-panel
        "
      >

        <span className="loan-status-dot" />

        <strong>
          ON TRACK
        </strong>

      </div>


      {/* COIN / SAVINGS STACK */}

      <div className="loan-stack">

        <span className="loan-disc loan-disc-one" />

        <span className="loan-disc loan-disc-two" />

        <span className="loan-disc loan-disc-three" />

      </div>


      {/* FLOOR */}

      <div
        className="
          scene-floor-ring
          floor-ring-large
        "
      />

    </div>
  )
}


/* =========================================================
   SELECT TOOL VISUAL
   ========================================================= */

function ToolVisual({ type }) {

  if (type === 'habit') {
    return <HabitVisual />
  }

  if (type === 'quit') {
    return <QuitVisual />
  }

  return <LoanVisual />
}


/* =========================================================
   TOOL SECTION
   ========================================================= */

function ToolSection({
  tool,
  index,
}) {

  const reverse =
    index % 2 !== 0


  return (
    <section
      className={`
        tool-section
        ${
          reverse
            ? 'tool-section-reverse'
            : ''
        }
      `}
      id={tool.id}
    >

      {/* GIANT 01 / 02 / 03 */}

      <div
        className="tool-big-number"
        aria-hidden="true"
      >
        {tool.number}
      </div>


      <div className="tool-section-container">


        {/* =========================
            TEXT
        ========================= */}

        <div className="tool-content reveal-element">

          <div className="tool-eyebrow">

            <span>
              {tool.number}
            </span>

            <p>
              {tool.eyebrow}
            </p>

          </div>


          <h2>
            {tool.title}
          </h2>


          <p className="tool-description">
            {tool.description}
          </p>


          {/* FEATURES */}

          <div className="tool-features">

            {tool.features.map(
              (feature) => (
                <div
                  className="tool-feature"
                  key={feature}
                >

                  <span />

                  <p>
                    {feature}
                  </p>

                </div>
              ),
            )}

          </div>


          {/* FINANCIAL DISCLAIMER */}

          {tool.disclaimer && (
            <div className="financial-note">

              <span>
                NOTE
              </span>

              <p>
                {tool.disclaimer}
              </p>

            </div>
          )}


          {/* BUTTONS */}

          <div className="tool-actions">

            <Link
              to="/auth"
              className="primary-tool-button"
            >

              Get Started

              <span>
                ↗
              </span>

            </Link>


            <button
              type="button"
              className="back-explore-button"
              onClick={() =>
                scrollToSection(
                  'explore-top'
                )
              }
            >
              ↑ Explore
            </button>

          </div>

        </div>


        {/* =========================
            3D VISUAL
        ========================= */}

        <div
          className="
            tool-visual-wrapper
            reveal-element
          "
        >

          <ToolVisual
            type={tool.type}
          />

        </div>

      </div>


      {/* SECTION NUMBER */}

      <div className="section-progress">
        {tool.number} / 03
      </div>

    </section>
  )
}


/* =========================================================
   MAIN EXPLORE COMPONENT
   ========================================================= */

function Explore() {

  const heroRef = useRef(null)


  /* =======================================================
     EXPLORE THEME

     Separate from Landing theme.

     Landing:
     aurax-theme

     Explore:
     aurax-explore-theme
     ======================================================= */

  const [theme, setTheme] =
    useState(() => {

      const savedTheme =
        localStorage.getItem(
          'aurax-explore-theme',
        )


      if (
        savedTheme === 'light' ||
        savedTheme === 'dark'
      ) {
        return savedTheme
      }


      /*
        First time Explore opens:
        use Dark Galaxy.
      */

      return 'dark'
    })


  /* SAVE EXPLORE THEME */

  useEffect(() => {

    localStorage.setItem(
      'aurax-explore-theme',
      theme,
    )

  }, [theme])


  /* =======================================================
     SCROLL REVEAL

     Animation runs only once.
     Better performance.
     ======================================================= */

  useEffect(() => {

    const elements =
      document.querySelectorAll(
        '.reveal-element',
      )


    const observer =
      new IntersectionObserver(
        (entries) => {

          entries.forEach(
            (entry) => {

              if (
                entry.isIntersecting
              ) {

                entry.target
                  .classList
                  .add('visible')


                /*
                  Stop observing after
                  first animation.

                  Better performance.
                */

                observer.unobserve(
                  entry.target,
                )
              }

            },
          )

        },

        {
          threshold: 0.12,
        },
      )


    elements.forEach(
      (element) => {

        observer.observe(element)

      },
    )


    return () => {

      observer.disconnect()

    }

  }, [])


  /* =======================================================
     HERO MOUSE PARALLAX

     Desktop / laptop only.

     Mobile:
     disabled automatically.

     requestAnimationFrame:
     helps reduce lag.
     ======================================================= */

  useEffect(() => {

    const hero =
      heroRef.current


    if (!hero) return


    const finePointer =
      window.matchMedia(
        '(pointer: fine) and (min-width: 900px)',
      )


    /*
      Touch/mobile device?
      Don't run mouse parallax.
    */

    if (!finePointer.matches) {
      return
    }


    let animationFrame = null


    const handlePointerMove = (
      event,
    ) => {

      /*
        If one frame is already waiting,
        don't create another.
      */

      if (animationFrame) {
        return
      }


      animationFrame =
        requestAnimationFrame(() => {

          const rect =
            hero.getBoundingClientRect()


          const x =
            (
              event.clientX -
              rect.left
            ) /
              rect.width -
            0.5


          const y =
            (
              event.clientY -
              rect.top
            ) /
              rect.height -
            0.5


          /* NORMAL MOVEMENT */

          hero.style.setProperty(
            '--mouse-x',
            `${x * 22}px`,
          )

          hero.style.setProperty(
            '--mouse-y',
            `${y * 18}px`,
          )


          /* REVERSE MOVEMENT */

          hero.style.setProperty(
            '--mouse-x-reverse',
            `${x * -18}px`,
          )

          hero.style.setProperty(
            '--mouse-y-reverse',
            `${y * -14}px`,
          )


          animationFrame = null

        })
    }


    /* RESET WHEN MOUSE LEAVES */

    const resetPointer = () => {

      hero.style.setProperty(
        '--mouse-x',
        '0px',
      )

      hero.style.setProperty(
        '--mouse-y',
        '0px',
      )

      hero.style.setProperty(
        '--mouse-x-reverse',
        '0px',
      )

      hero.style.setProperty(
        '--mouse-y-reverse',
        '0px',
      )

    }


    hero.addEventListener(
      'pointermove',
      handlePointerMove,
    )


    hero.addEventListener(
      'pointerleave',
      resetPointer,
    )


    return () => {

      hero.removeEventListener(
        'pointermove',
        handlePointerMove,
      )


      hero.removeEventListener(
        'pointerleave',
        resetPointer,
      )


      if (animationFrame) {

        cancelAnimationFrame(
          animationFrame,
        )

      }

    }

  }, [])


  /* =======================================================
     THEME TOGGLE
     ======================================================= */

  const toggleTheme = () => {

    setTheme(
      (currentTheme) =>
        currentTheme === 'dark'
          ? 'light'
          : 'dark',
    )

  }


  /* =======================================================
     JSX
     ======================================================= */

  return (
    <main
      className="explore-page"
      data-theme={theme}
      id="explore-top"
    >


      {/* ===================================================
          NAVBAR
      =================================================== */}

      <nav className="explore-navbar">

        <Link
          to="/"
          className="explore-logo"
          aria-label="AuraX Home"
        >

          Aura<span>X</span>

        </Link>


        <div className="explore-nav-actions">


          {/* BACK TO LANDING */}

          <Link
            to="/"
            className="explore-back-link"
          >
            ← Back
          </Link>


          {/* THEME ICON ONLY */}

          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={
              theme === 'dark'
                ? 'Switch to light mode'
                : 'Switch to dark mode'
            }
            title={
              theme === 'dark'
                ? 'Light mode'
                : 'Dark mode'
            }
          >

            {theme === 'dark'
              ? '☀'
              : '☾'}

          </button>


          {/* NAV GET STARTED */}

          <Link
            to="/auth"
            className="navbar-get-started"
          >

            Get Started

            <span>
              ↗
            </span>

          </Link>

        </div>

      </nav>


      {/* ===================================================
          HERO
      =================================================== */}

      <section
        className="explore-hero"
        ref={heroRef}
      >


        {/* GIANT EXPLORE */}

        <div
          className="hero-background-text"
          aria-hidden="true"
        >
          EXPLORE
        </div>


        {/* COSMIC ORBIT LINES */}

        <div
          className="
            hero-main-orbit
            hero-main-orbit-one
          "
          aria-hidden="true"
        />

        <div
          className="
            hero-main-orbit
            hero-main-orbit-two
          "
          aria-hidden="true"
        />


        {/* SMALL GALAXY DOTS */}

        <div className="hero-dot hero-dot-one" />

        <div className="hero-dot hero-dot-two" />

        <div className="hero-dot hero-dot-three" />


        {/* =================================================
            3D HERO OBJECT 01
        ================================================= */}

        <div
          className="
            hero-object-position
            hero-object-position-one
          "
        >

          <HeroHabitObject />

        </div>


        {/* =================================================
            3D HERO OBJECT 02
        ================================================= */}

        <div
          className="
            hero-object-position
            hero-object-position-two
          "
        >

          <HeroQuitObject />

        </div>


        {/* =================================================
            3D HERO OBJECT 03
        ================================================= */}

        <div
          className="
            hero-object-position
            hero-object-position-three
          "
        >

          <HeroLoanObject />

        </div>


        {/* =================================================
            HERO CONTENT
        ================================================= */}

        <div className="explore-hero-content">


          {/* KICKER */}

          <div className="hero-kicker">

            <span />

            AURAX TOOL UNIVERSE

          </div>


          {/* HEADING */}

          <h1>

            Explore your

            <span>
              next version.
            </span>

          </h1>


          {/* DESCRIPTION */}

          <p>
            Three tools. One mission.
            Improve yourself one step
            at a time.
          </p>


          {/* ===============================================
              QUICK TOOL NAVIGATION
          =============================================== */}

          <div className="hero-tool-navigation">


            {/* HABIT */}

            <button
              type="button"
              onClick={() =>
                scrollToSection(
                  'habit-tracker',
                )
              }
            >

              <span>
                01
              </span>

              Habit

            </button>


            {/* QUIT */}

            <button
              type="button"
              onClick={() =>
                scrollToSection(
                  'addiction-quitter',
                )
              }
            >

              <span>
                02
              </span>

              Quit

            </button>


            {/* LOAN */}

            <button
              type="button"
              onClick={() =>
                scrollToSection(
                  'loan-savings-planner',
                )
              }
            >

              <span>
                03
              </span>

              Loan

            </button>

          </div>


          {/* ===============================================
              MAIN EXPLORE BUTTON
          =============================================== */}

          <button
            type="button"
            className="explore-tools-button"
            onClick={() =>
              scrollToSection(
                'habit-tracker',
              )
            }
          >

            Explore the tools

            <span>
              ↓
            </span>

          </button>

        </div>

      </section>


      {/* ===================================================
          TOOL SECTIONS
      =================================================== */}

      {tools.map(
        (tool, index) => (

          <ToolSection
            key={tool.id}
            tool={tool}
            index={index}
          />

        ),
      )}


      {/* ===================================================
          FUTURE TOOLS
      =================================================== */}

      <section className="future-section">


        {/* GIANT INFINITY */}

        <div
          className="future-infinity"
          aria-hidden="true"
        >
          ∞
        </div>


        <div
          className="
            future-content
            reveal-element
          "
        >


          <span className="future-kicker">
            THREE TOOLS. FOR NOW.
          </span>


          <h2>

            More is

            <span>
              coming.
            </span>

          </h2>


          <p>
            AuraX currently starts with
            three tools. In the future,
            we will add more useful tools
            designed especially to help
            students manage and improve
            different parts of their lives.
          </p>


          {/* FUTURE TOOL CARDS */}

          <div className="future-tool-grid">


            <div className="future-tool-card">

              <span>
                04
              </span>

              <strong>
                COMING
              </strong>

              <small>
                Future tool
              </small>

            </div>


            <div className="future-tool-card">

              <span>
                05
              </span>

              <strong>
                COMING
              </strong>

              <small>
                Future tool
              </small>

            </div>


            <div className="future-tool-card">

              <span>
                06
              </span>

              <strong>
                COMING
              </strong>

              <small>
                Future tool
              </small>

            </div>


            <div className="future-tool-card">

              <span>
                07
              </span>

              <strong>
                COMING
              </strong>

              <small>
                Future tool
              </small>

            </div>

          </div>


          {/* FUTURE BUTTONS */}

          <div className="future-actions">


            <Link
              to="/auth"
              className="future-get-started"
            >

              Start your comeback

              <span>
                ↗
              </span>

            </Link>


            <button
              type="button"
              className="future-back-button"
              onClick={() =>
                scrollToSection(
                  'explore-top',
                )
              }
            >

              ↑ Back to Explore

            </button>

          </div>

        </div>

      </section>


      {/* ===================================================
          FOOTER
      =================================================== */}

      <footer className="explore-footer">

        <Link
          to="/"
          className="footer-logo"
        >

          Aura<span>X</span>

        </Link>


        <p>
          Build. Break. Become.
        </p>


        <span>
          © AuraX
        </span>

      </footer>

    </main>
  )
}


export default Explore