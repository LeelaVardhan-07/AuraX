import { useState } from 'react'
import './Login.css'

const spaceDots = [
  [8, 14, 2, 0],
  [16, 8, 3, -1.4],
  [24, 21, 2, -2.8],
  [33, 10, 2, -0.8],
  [43, 18, 3, -3.6],
  [55, 8, 2, -2],
  [67, 16, 2, -4.1],
  [78, 9, 3, -1.1],
  [91, 18, 2, -3.2],
  [12, 43, 2, -2.4],
  [29, 38, 3, -0.4],
  [48, 47, 2, -3.8],
  [62, 39, 3, -1.7],
  [85, 46, 2, -4.5],
  [95, 37, 3, -0.9],
  [7, 73, 3, -3.1],
  [20, 84, 2, -1.5],
  [37, 69, 2, -4.3],
  [53, 82, 3, -0.6],
  [71, 72, 2, -2.7],
  [88, 86, 3, -1.9],
  [96, 68, 2, -3.5],
]

function PasswordIcon({ isVisible }) {
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

function Login() {
  const [theme, setTheme] = useState('dark')
  const [isSignUp, setIsSignUp] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
  }

  function switchForm() {
    setIsSignUp((currentValue) => !currentValue)
    setShowPassword(false)
  }

  function handleCardMove(event) {
    const card = event.currentTarget
    const cardBox = card.getBoundingClientRect()
    const mouseX = event.clientX - cardBox.left
    const mouseY = event.clientY - cardBox.top

    const rotateY = ((mouseX / cardBox.width) - 0.5) * 10
    const rotateX = ((mouseY / cardBox.height) - 0.5) * -7

    card.style.setProperty('--rotate-x', `${rotateX}deg`)
    card.style.setProperty('--rotate-y', `${rotateY}deg`)
    card.style.setProperty('--shine-x', `${(mouseX / cardBox.width) * 100}%`)
    card.style.setProperty('--shine-y', `${(mouseY / cardBox.height) * 100}%`)
  }

  function resetCardPosition(event) {
    event.currentTarget.style.setProperty('--rotate-x', '0deg')
    event.currentTarget.style.setProperty('--rotate-y', '0deg')
    event.currentTarget.style.setProperty('--shine-x', '50%')
    event.currentTarget.style.setProperty('--shine-y', '0%')
  }

  return (
    <main className={`login-page ${theme === 'light' ? 'light-theme' : ''}`}>
      <div className="theme-wash" aria-hidden="true" />

      <div className="space-dots" aria-hidden="true">
        {spaceDots.map(([left, top, size, delay]) => (
          <i
            key={`${left}-${top}`}
            style={{
              '--dot-left': `${left}%`,
              '--dot-top': `${top}%`,
              '--dot-size': `${size}px`,
              '--dot-delay': `${delay}s`,
            }}
          />
        ))}
      </div>

      <svg
        className="progress-trail"
        viewBox="0 0 1600 900"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="trail-gradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="var(--trail-start)" stopOpacity="0" />
            <stop offset="0.26" stopColor="var(--trail-start)" stopOpacity="0.68" />
            <stop offset="0.62" stopColor="var(--trail-end)" stopOpacity="0.4" />
            <stop offset="1" stopColor="var(--trail-end)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="breeze-gradient" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="var(--breeze-color)" stopOpacity="0" />
            <stop offset="0.2" stopColor="var(--breeze-color)" stopOpacity="0.72" />
            <stop offset="0.68" stopColor="var(--breeze-color)" stopOpacity="0.42" />
            <stop offset="1" stopColor="var(--breeze-color)" stopOpacity="0.08" />
          </linearGradient>
          <filter id="trail-glow" x="-20%" y="-60%" width="140%" height="220%">
            <feGaussianBlur stdDeviation="7" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g className="breeze-flow" filter="url(#trail-glow)">
          <path
            d="M 1600 55 C 1425 62, 1365 188, 1225 225 C 1055 270, 990 205, 885 270 C 810 316, 820 380, 760 445"
            fill="none"
            stroke="url(#breeze-gradient)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M 1590 92 C 1445 105, 1375 212, 1238 246 C 1080 286, 1008 230, 905 288 C 835 328, 838 390, 775 451"
            fill="none"
            stroke="url(#breeze-gradient)"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </g>
        <path
          d="M 815 620 C 725 690, 465 710, 500 800 C 550 910, 1135 860, 1380 755"
          fill="none"
          stroke="url(#trail-gradient)"
          strokeWidth="3"
          strokeLinecap="round"
          filter="url(#trail-glow)"
        />
      </svg>

      <a className="login-logo" href="/">
        <span>AX</span>
        AuraX
      </a>

      <div
        className={`theme-switcher ${theme === 'light' ? 'is-light' : 'is-dark'}`}
        role="group"
        aria-label="Choose color theme"
      >
        <span className="theme-selection" aria-hidden="true" />
        <button
          className="theme-option theme-light-option"
          type="button"
          onClick={() => setTheme('light')}
          aria-label="Use light mode"
          aria-pressed={theme === 'light'}
          title="Light mode"
        >
          <span aria-hidden="true">☀</span>
        </button>
        <button
          className="theme-option theme-dark-option"
          type="button"
          onClick={() => setTheme('dark')}
          aria-label="Use dark mode"
          aria-pressed={theme === 'dark'}
          title="Dark mode"
        >
          <span aria-hidden="true">☾</span>
        </button>
      </div>

      <section className="login-intro">
        <div className="login-message">
          <p className="login-tag">YOUR COMEBACK STARTS HERE</p>

          <div className="hero-top">
            <div>
              <h1 className="hero-title">
                <span className="hero-line">Build better habits.</span>
                <span className="hero-line">Become your</span>
                <span className="hero-line">strongest self.</span>
              </h1>

              <p className="login-description">
                Small steps. Real momentum.
                <br />
                Your comeback starts today.
              </p>
            </div>

            <div className="aura-scene" aria-hidden="true">
              <div className="aura-platform" />
              <div className="aura-ring aura-ring-one" />
              <div className="aura-ring aura-ring-two" />
              <div className="aura-ring aura-ring-three" />

              <div className="aura-core">
                <span>AX</span>
              </div>

              <i className="aura-particle particle-two" />
            </div>
          </div>
        </div>
      </section>

      <section className="login-form-section">
        <div
          className="login-card"
          onMouseMove={handleCardMove}
          onMouseLeave={resetCardPosition}
        >
          <div className="login-card-shine" aria-hidden="true" />

          <div className="login-card-header" aria-live="polite">
            <h2>{isSignUp ? 'Start your comeback' : 'Welcome back'}</h2>
            <p>
              {isSignUp
                ? 'Create your account and take the first step.'
                : 'Continue your journey.'}
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            {isSignUp && (
              <div className="form-group">
                <label htmlFor="fullName">Full name</label>
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
              <label htmlFor="email">Email address</label>
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
              <label htmlFor="password">Password</label>
              <div className="password-field">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder={isSignUp ? 'Create a password' : 'Enter your password'}
                  autoComplete={isSignUp ? 'new-password' : 'current-password'}
                  required
                />
                <button
                  className="password-toggle"
                  type="button"
                  onClick={() => setShowPassword((currentValue) => !currentValue)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  <PasswordIcon isVisible={showPassword} />
                </button>
              </div>
            </div>

            {!isSignUp && (
              <div className="form-options">
                <label className="remember-me">
                  <input type="checkbox" name="rememberMe" />
                  <span>Remember me</span>
                </label>

                <button className="text-button" type="button">
                  Forgot password?
                </button>
              </div>
            )}

            <button className="login-button" type="submit">
              <span>{isSignUp ? 'Create my account' : 'Log in to AuraX'}</span>
              <span className="button-arrow" aria-hidden="true">→</span>
            </button>
          </form>

          <p className="signup-message">
            {isSignUp ? 'Already have an account?' : 'New to AuraX?'}{' '}
            <button className="text-button" type="button" onClick={switchForm}>
              {isSignUp ? 'Log in' : 'Create an account'}
            </button>
          </p>
        </div>
      </section>
    </main>
  )
}

export default Login
