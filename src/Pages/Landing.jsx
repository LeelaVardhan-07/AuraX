import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

import {
  Link,
  useNavigate,
} from 'react-router'

import '../styles/Landing.css'

const SPLINE_SCENE =
  'https://prod.spline.design/VR8nJ-qsEllnG6Lr/scene.splinecode'

function Landing() {
  const navigate = useNavigate()

  const landingRef = useRef(null)
  const viewerRef = useRef(null)

  const typingTimerRef = useRef(null)
  const hideTimerRef = useRef(null)
  const fallbackLoadRef = useRef(null)
  const mobileTapTimerRef = useRef(null)

  const [theme, setTheme] = useState(() => {
    return (
      localStorage.getItem('aurax-theme') ||
      'light'
    )
  })

  const [botReady, setBotReady] =
    useState(false)

  const [botMessage, setBotMessage] =
    useState('')

  const [showMessage, setShowMessage] =
    useState(false)

  const [isTyping, setIsTyping] =
    useState(false)

  const [
    armedMobileButton,
    setArmedMobileButton,
  ] = useState(null)


  /* ======================================
     THEME
  ====================================== */

  useEffect(() => {
    localStorage.setItem(
      'aurax-theme',
      theme
    )
  }, [theme])

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === 'light'
        ? 'dark'
        : 'light'
    )
  }


  /* ======================================
     BOT MESSAGE
  ====================================== */

  const clearMessageTimers =
    useCallback(() => {
      if (typingTimerRef.current) {
        clearInterval(
          typingTimerRef.current
        )
      }

      if (hideTimerRef.current) {
        clearTimeout(
          hideTimerRef.current
        )
      }
    }, [])


  const typeBotMessage = useCallback(
    (message, autoHide = false) => {
      if (!botReady) return

      clearMessageTimers()

      const characters =
        Array.from(message)

      let index = 0

      setBotMessage('')
      setShowMessage(true)
      setIsTyping(true)

      typingTimerRef.current =
        setInterval(() => {
          index += 1

          setBotMessage(
            characters
              .slice(0, index)
              .join('')
          )

          if (
            index >=
            characters.length
          ) {
            clearInterval(
              typingTimerRef.current
            )

            setIsTyping(false)

            if (autoHide) {
              hideTimerRef.current =
                setTimeout(() => {
                  setShowMessage(false)
                }, 3500)
            }
          }
        }, 42)
    },
    [
      botReady,
      clearMessageTimers,
    ]
  )


  const stopSpeaking = useCallback(() => {
    clearMessageTimers()

    setIsTyping(false)
    setShowMessage(false)
  }, [clearMessageTimers])


  /* ======================================
     DESKTOP HOVER MESSAGE
  ====================================== */

  const handleDesktopMessage =
    (message) => {
      const canHover =
        window.matchMedia(
          '(hover: hover) and (pointer: fine)'
        ).matches

      if (!canHover) return

      typeBotMessage(message)
    }


  const handleDesktopLeave = () => {
    const canHover =
      window.matchMedia(
        '(hover: hover) and (pointer: fine)'
      ).matches

    if (!canHover) return

    stopSpeaking()
  }


  /* ======================================
     MOBILE DOUBLE TAP
  ====================================== */

  const handleMobileButton = (
    event,
    buttonName,
    message,
    destination
  ) => {
    const isTouchDevice =
      window.matchMedia(
        '(hover: none) and (pointer: coarse)'
      ).matches

    /*
      Desktop:
      normal Link behaviour.
    */

    if (!isTouchDevice) {
      return
    }

    /*
      Mobile:
      first tap should NOT navigate.
    */

    event.preventDefault()

    /*
      SECOND TAP
    */

    if (
      armedMobileButton === buttonName
    ) {
      clearTimeout(
        mobileTapTimerRef.current
      )

      setArmedMobileButton(null)

      stopSpeaking()

      navigate(destination)

      return
    }

    /*
      FIRST TAP
    */

    setArmedMobileButton(buttonName)

    typeBotMessage(message)

    clearTimeout(
      mobileTapTimerRef.current
    )

    /*
      User gets 4 seconds
      for second tap.
    */

    mobileTapTimerRef.current =
      setTimeout(() => {
        setArmedMobileButton(null)

        stopSpeaking()
      }, 4000)
  }


  /* ======================================
     SPLINE LOAD
  ====================================== */

  useEffect(() => {
    const viewer = viewerRef.current

    const handleLoad = () => {
      setBotReady(true)
    }

    if (viewer) {
      viewer.addEventListener(
        'load-complete',
        handleLoad
      )
    }

    fallbackLoadRef.current =
      setTimeout(() => {
        setBotReady(true)
      }, 2200)

    return () => {
      if (viewer) {
        viewer.removeEventListener(
          'load-complete',
          handleLoad
        )
      }

      clearTimeout(
        fallbackLoadRef.current
      )
    }
  }, [])


  /* ======================================
     INITIAL BOT GREETING
  ====================================== */

  useEffect(() => {
    if (!botReady) return

    const greetingTimer =
      setTimeout(() => {
        typeBotMessage(
          "Hi! Welcome to AuraX. Let's level up your life.",
          true
        )
      }, 750)

    return () =>
      clearTimeout(greetingTimer)
  }, [
    botReady,
    typeBotMessage,
  ])


  /* ======================================
     CURSOR PARALLAX
  ====================================== */

  useEffect(() => {
    let animationFrame

    const handlePointerMove = (
      event
    ) => {
      cancelAnimationFrame(
        animationFrame
      )

      animationFrame =
        requestAnimationFrame(() => {
          const page =
            landingRef.current

          if (!page) return

          const normalizedX =
            event.clientX /
              window.innerWidth -
            0.5

          const normalizedY =
            event.clientY /
              window.innerHeight -
            0.5


          /* AURAX */

          page.style.setProperty(
            '--aurax-x',
            `${normalizedX * -30}px`
          )

          page.style.setProperty(
            '--aurax-y',
            `${normalizedY * -16}px`
          )


          /* ORBIT */

          page.style.setProperty(
            '--orbit-x',
            `${normalizedX * 18}px`
          )

          page.style.setProperty(
            '--orbit-y',
            `${normalizedY * 12}px`
          )

          page.style.setProperty(
            '--orbit-rotate-x',
            `${
              68 -
              normalizedY * 8
            }deg`
          )

          page.style.setProperty(
            '--orbit-rotate-z',
            `${
              normalizedX * 8
            }deg`
          )


          /* FLOATING OBJECTS */

          page.style.setProperty(
            '--float-one-x',
            `${normalizedX * -34}px`
          )

          page.style.setProperty(
            '--float-one-y',
            `${normalizedY * -24}px`
          )

          page.style.setProperty(
            '--float-two-x',
            `${normalizedX * 38}px`
          )

          page.style.setProperty(
            '--float-two-y',
            `${normalizedY * 25}px`
          )

          page.style.setProperty(
            '--float-three-x',
            `${normalizedX * -22}px`
          )

          page.style.setProperty(
            '--float-three-y',
            `${normalizedY * 28}px`
          )

          page.style.setProperty(
            '--float-four-x',
            `${normalizedX * 26}px`
          )

          page.style.setProperty(
            '--float-four-y',
            `${normalizedY * -26}px`
          )
        })
    }


    const resetParallax = () => {
      const page =
        landingRef.current

      if (!page) return

      page.style.setProperty(
        '--aurax-x',
        '0px'
      )

      page.style.setProperty(
        '--aurax-y',
        '0px'
      )

      page.style.setProperty(
        '--orbit-x',
        '0px'
      )

      page.style.setProperty(
        '--orbit-y',
        '0px'
      )

      page.style.setProperty(
        '--orbit-rotate-x',
        '68deg'
      )

      page.style.setProperty(
        '--orbit-rotate-z',
        '0deg'
      )

      page.style.setProperty(
        '--float-one-x',
        '0px'
      )

      page.style.setProperty(
        '--float-one-y',
        '0px'
      )

      page.style.setProperty(
        '--float-two-x',
        '0px'
      )

      page.style.setProperty(
        '--float-two-y',
        '0px'
      )

      page.style.setProperty(
        '--float-three-x',
        '0px'
      )

      page.style.setProperty(
        '--float-three-y',
        '0px'
      )

      page.style.setProperty(
        '--float-four-x',
        '0px'
      )

      page.style.setProperty(
        '--float-four-y',
        '0px'
      )
    }


    window.addEventListener(
      'pointermove',
      handlePointerMove,
      {
        passive: true,
      }
    )

    document.addEventListener(
      'mouseleave',
      resetParallax
    )


    return () => {
      cancelAnimationFrame(
        animationFrame
      )

      window.removeEventListener(
        'pointermove',
        handlePointerMove
      )

      document.removeEventListener(
        'mouseleave',
        resetParallax
      )
    }
  }, [])


  /* ======================================
     CLEANUP
  ====================================== */

  useEffect(() => {
    return () => {
      clearMessageTimers()

      clearTimeout(
        fallbackLoadRef.current
      )

      clearTimeout(
        mobileTapTimerRef.current
      )
    }
  }, [clearMessageTimers])


  /* ======================================
     JSX
  ====================================== */

  return (
    <div
      ref={landingRef}
      className="landing-page"
      data-theme={theme}
    >

      {/* =========================
          NAVBAR
      ========================= */}

      <header className="landing-navbar">

        <Link
          to="/"
          className="aurax-logo"
          aria-label="AuraX Home"
        >
          <span className="logo-aura">
            Aura
          </span>

          <span className="logo-x">
            X
          </span>
        </Link>


        <div className="landing-nav-actions">

          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Change theme"
          >
            {theme === 'light'
              ? '☾'
              : '☀'}
          </button>


          <Link
            to="/auth"
            className="login-button"
          >
            Log In
          </Link>


          <Link
            to="/auth"
            className="nav-start-button"
            onMouseEnter={() =>
              handleDesktopMessage(
                "Let's begin your comeback."
              )
            }
            onMouseLeave={
              handleDesktopLeave
            }
          >
            Get Started
          </Link>

        </div>

      </header>


      {/* =========================
          HERO
      ========================= */}

      <main className="landing-hero">


        {/* FLOATING OBJECTS */}

        <div
          className="
            floating-object
            floating-object-one
          "
          aria-hidden="true"
        />

        <div
          className="
            floating-object
            floating-object-two
          "
          aria-hidden="true"
        />

        <div
          className="
            floating-object
            floating-object-three
          "
          aria-hidden="true"
        />

        <div
          className="
            floating-object
            floating-object-four
          "
          aria-hidden="true"
        />


        {/* BACKGROUND AURAX */}

        <div
          className="hero-background-text"
          aria-hidden="true"
        >
          AURAX
        </div>


        {/* HERO TEXT */}

        <section className="hero-heading">

          <div className="hero-eyebrow">

            <span className="eyebrow-dot" />

            RESET · BUILD · RISE

          </div>


          <h1>
            Build your

            <span>
              next version.
            </span>
          </h1>


         

        </section>


        {/* =========================
            BOT
        ========================= */}

        <section
          className={`bot-area ${
            botReady
              ? 'bot-ready'
              : ''
          }`}
        >

          {/* ORBIT SYSTEM */}

          <div
            className="orbit-system"
            aria-hidden="true"
          >

            <div className="orbit orbit-one">
              <span className="orbit-dot" />
            </div>


            <div className="orbit orbit-two">
              <span
                className="
                  orbit-dot
                  orbit-dot-two
                "
              />
            </div>


            <div className="orbit orbit-three">
              <span
                className="
                  orbit-dot
                  orbit-dot-three
                "
              />
            </div>

          </div>


          {/* BOT MESSAGE */}

          <div
            className={`bot-message ${
              showMessage
                ? 'bot-message-visible'
                : ''
            }`}
            aria-live="polite"
          >

            <div className="bot-message-content">

              {botMessage}

              {isTyping && (
                <span className="typing-cursor">
                  |
                </span>
              )}

            </div>


            <span className="message-time">
              AuraX
            </span>

          </div>


          {/* BOT GLOW */}

          <div
            className="bot-glow"
            aria-hidden="true"
          />


          {/* SPLINE */}

          <div className="spline-wrapper">

            <spline-viewer
              ref={viewerRef}
              url={SPLINE_SCENE}
              className="spline-frame"
            ></spline-viewer>

          </div>


          {/* FLOOR */}

          <div
            className="bot-floor-shadow"
            aria-hidden="true"
          />

          <div
            className="bot-floor-ring"
            aria-hidden="true"
          />

        </section>


        {/* =========================
            CTA BUTTONS
        ========================= */}

        <section className="hero-actions">

          <Link
            to="/auth"
            className={`primary-cta ${
              armedMobileButton ===
              'get-started'
                ? 'mobile-button-armed'
                : ''
            }`}
            onClick={(event) =>
              handleMobileButton(
                event,
                'get-started',
                "Let's begin your comeback.",
                '/auth'
              )
            }
            onMouseEnter={() =>
              handleDesktopMessage(
                "Let's begin your comeback."
              )
            }
            onMouseLeave={
              handleDesktopLeave
            }
          >
            Get Started

            <span>→</span>
          </Link>


          <Link
            to="/explore"
            className={`secondary-cta ${
              armedMobileButton ===
              'explore'
                ? 'mobile-button-armed'
                : ''
            }`}
            onClick={(event) =>
              handleMobileButton(
                event,
                'explore',
                'Curious? Explore AuraX 👀',
                '/explore'
              )
            }
            onMouseEnter={() =>
              handleDesktopMessage(
                'Curious? Explore AuraX 👀'
              )
            }
            onMouseLeave={
              handleDesktopLeave
            }
          >
            Explore AuraX

            <span>↗</span>
          </Link>

        </section>


        <p className="hero-bottom-text">
          Your comeback starts here.
        </p>

      </main>

    </div>
  )
}

export default Landing