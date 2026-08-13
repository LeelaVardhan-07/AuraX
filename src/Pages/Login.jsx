import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import './Login.css'

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 2.5v2M12 19.5v2M4.6 4.6L6 6M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4L6 18M18 6l1.4-1.4" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 15.2A8.4 8.4 0 018.8 4a8.5 8.5 0 1011.2 11.2z" />
    </svg>
  )
}

function EyeIcon({ isVisible }) {
  return isVisible ? (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 3l18 18M10.6 10.7a2 2 0 002.7 2.7M9.9 4.2A10.7 10.7 0 0112 4c5.2 0 8.7 4.4 9.5 5.5a1 1 0 010 1.1 16 16 0 01-3 3.3M6.6 6.6A16.3 16.3 0 002.5 9.5a1 1 0 000 1.1C3.3 11.7 6.8 16 12 16a10.8 10.8 0 003.1-.5" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M2.5 9.5C3.3 8.4 6.8 4 12 4s8.7 4.4 9.5 5.5a1 1 0 010 1.1C20.7 11.7 17.2 16 12 16S3.3 11.7 2.5 10.6a1 1 0 010-1.1z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M14 7l5 5-5 5" />
    </svg>
  )
}

function getInitialTheme() {
  if (typeof window === 'undefined') return 'light'

  const savedTheme = window.localStorage.getItem('aurax-theme')

  if (savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

function Login() {
  const [theme, setTheme] = useState(getInitialTheme)
  const [isSignUp, setIsSignUp] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  useEffect(() => {
    window.localStorage.setItem('aurax-theme', theme)
  }, [theme])

  function handleSubmit(event) {
    event.preventDefault()
  }

  function switchForm(nextIsSignUp) {
    setIsSignUp(nextIsSignUp)
    setShowPassword(false)
  }

  function handleCardMove(event) {
    const card = event.currentTarget
    const cardBox = card.getBoundingClientRect()

    const pointerX = event.clientX - cardBox.left
    const pointerY = event.clientY - cardBox.top

    const rotateY = (pointerX / cardBox.width - 0.5) * 12
    const rotateX = (pointerY / cardBox.height - 0.5) * -9

    card.style.setProperty('--rotate-x', `${rotateX}deg`)
    card.style.setProperty('--rotate-y', `${rotateY}deg`)

    card.style.setProperty(
      '--shine-x',
      `${(pointerX / cardBox.width) * 100}%`,
    )

    card.style.setProperty(
      '--shine-y',
      `${(pointerY / cardBox.height) * 100}%`,
    )
  }

  function resetCardPosition(event) {
    const card = event.currentTarget

    card.style.setProperty('--rotate-x', '0deg')
    card.style.setProperty('--rotate-y', '0deg')
    card.style.setProperty('--shine-x', '50%')
    card.style.setProperty('--shine-y', '18%')
  }

  return (
    <main className={`login-page ${theme}-theme`}>
      <div className="page-grid" aria-hidden="true" />

      <div className="aurax-watermark" aria-hidden="true">
        AURAX
      </div>

      <div className="floating-shapes" aria-hidden="true">
        <i className="shape shape-one" />
        <i className="shape shape-two" />
        <i className="shape shape-three" />

        <i className="accent-point point-one" />
        <i className="accent-point point-two" />
      </div>

      <div className="flow-lines" aria-hidden="true">
        <i />
        <i />
      </div>

      <header className="login-nav">
        <Link className="login-logo" to="/" aria-label="AuraX home">
          <span className="logo-mark">AX</span>
          <span className="logo-word">AuraX</span>
        </Link>

        <div className="nav-actions">
          <Link className="home-link" to="/">
            Home
          </Link>

          <button
            type="button"
            className="theme-switcher"
            onClick={() =>
              setTheme(theme === 'dark' ? 'light' : 'dark')
            }
            aria-label={
              theme === 'dark'
                ? 'Switch to light mode'
                : 'Switch to dark mode'
            }
            title={
              theme === 'dark' ? 'Light mode' : 'Dark mode'
            }
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </header>

      <section className="login-intro">
        <div className="intro-copy">
          <p className="login-tag">
            <span />
            RESET · BUILD · RISE
          </p>

          <h1 className="hero-title">
            <span className="hero-solid">
              Build better habits.
            </span>

            <span className="hero-outline">
              Become your strongest self.
            </span>
          </h1>

          <p className="login-description">
            Small steps. Real momentum.
            <br />
            Your comeback starts today.
          </p>
        </div>

        <div className="aura-scene" aria-hidden="true">
          <div className="aura-shadow" />

          <div className="aura-ring ring-horizontal" />
          <div className="aura-ring ring-vertical" />

          <div className="aura-core">
            <span>AX</span>
          </div>

          <i className="aura-dot dot-one" />
          <i className="aura-dot dot-two" />
        </div>
      </section>

      <section className="login-form-section">
        <div
          className="login-card"
          onMouseMove={handleCardMove}
          onMouseLeave={resetCardPosition}
        >
          <div
            className="login-card-shine"
            aria-hidden="true"
          />

          <div
            className="login-card-header"
            aria-live="polite"
          >
            <p className="card-label">
              AURAX ACCOUNT
            </p>

            <h2>
              {isSignUp
                ? 'Start your comeback'
                : 'Welcome back'}
            </h2>

            <p>
              {isSignUp
                ? 'Create your account and take the first step.'
                : 'Continue your journey.'}
            </p>
          </div>

          <form id="aurax-auth-form" onSubmit={handleSubmit}>
            {isSignUp && (
              <div className="form-group">
                <label htmlFor="fullName">
                  Full name
                </label>

                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Enter your name"
                  autoComplete="name"
                  required
                />
              </div>
            )}

            <div className="form-group">
              <label htmlFor="email">
                Email address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">
                Password
              </label>

              <div className="password-field">
                <input
                  id="password"
                  name="password"
                  type={
                    showPassword
                      ? 'text'
                      : 'password'
                  }
                  placeholder={
                    isSignUp
                      ? 'Create a password'
                      : 'Enter your password'
                  }
                  autoComplete={
                    isSignUp
                      ? 'new-password'
                      : 'current-password'
                  }
                  required
                />

                <button
                  className="password-toggle"
                  type="button"
                  onClick={() =>
                    setShowPassword(
                      (currentValue) => !currentValue,
                    )
                  }
                  aria-label={
                    showPassword
                      ? 'Hide password'
                      : 'Show password'
                  }
                >
                  <EyeIcon isVisible={showPassword} />
                </button>
              </div>
            </div>

            {!isSignUp && (
              <div className="form-options">
                <label className="remember-me">
                  <input
                    type="checkbox"
                    name="rememberMe"
                  />

                  <span>Remember me</span>
                </label>

                <button
                  className="text-button"
                  type="button"
                >
                  Forgot password?
                </button>
              </div>
            )}

            <button
              className="login-button"
              type="submit"
            >
              <span>
                {isSignUp
                  ? 'Create my account'
                  : 'Log in to AuraX'}
              </span>

              <ArrowIcon />
            </button>
          </form>

          <p className="signup-message">
            {isSignUp
              ? 'Already have an account?'
              : 'New to AuraX?'}{' '}

            <button
              className="text-button"
              type="button"
              onClick={() => switchForm(!isSignUp)}
              aria-controls="aurax-auth-form"
            >
              {isSignUp
                ? 'Log in'
                : 'Create an account'}
            </button>
          </p>
        </div>
      </section>
    </main>
  )
}

export default Login
