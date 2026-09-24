import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`app ${darkMode ? "dark-theme" : ""}`}>
      <header className="site-header">
        <nav className="navbar" aria-label="Main navigation">
          <a href="#home" className="logo">
            bloom<span>.</span>
          </a>

          <div className="nav-links">
            <a href="#plants">Plants</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="nav-actions">
            <button
              type="button"
              className="theme-toggle"
              onClick={() => setDarkMode(!darkMode)}
              aria-label={
                darkMode
                  ? "Switch to light theme"
                  : "Switch to dark theme"
              }
            >
              {darkMode ? "☀️" : "🌙"}
            </button>

            <a href="#plants" className="nav-button">
              Shop plants
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">plants for your space</p>

            <h1>A little green goes a long way.</h1>

            <p>
              Easy-going houseplants for bedrooms, desks, balconies,
              and all those empty corners.
            </p>

            <a href="#plants" className="primary-button">
              Have a look →
            </a>
          </div>

          <div className="hero-card" aria-label="Featured plant">
            <span aria-hidden="true">🪴</span>
            <p>Today's pick</p>
            <strong>Monstera</strong>
          </div>
        </section>

        <section className="plants-section" id="plants">
          <div className="section-heading">
            <p className="eyebrow">the good stuff</p>

            <h2>Easy-care favourites</h2>

            <p>
              Plants that won't hold a grudge if you forget to water
              them once.
            </p>
          </div>

          <div className="plant-grid">
            <article className="plant-card">
              <div className="plant-image" aria-hidden="true">
                🌿
              </div>
              <h3>Snake Plant</h3>
              <p>Basically impossible to kill. Almost.</p>
              <strong>₹499</strong>
            </article>

            <article className="plant-card">
              <div className="plant-image" aria-hidden="true">
                🪴
              </div>
              <h3>Monstera</h3>
              <p>Big leaves, lots of personality.</p>
              <strong>₹799</strong>
            </article>

            <article className="plant-card">
              <div className="plant-image" aria-hidden="true">
                🌱
              </div>
              <h3>Peace Lily</h3>
              <p>Soft, pretty, and happy indoors.</p>
              <strong>₹599</strong>
            </article>

            <article className="plant-card">
              <div className="plant-image" aria-hidden="true">
                🌵
              </div>
              <h3>Mini Cactus</h3>
              <p>Tiny plant. Zero drama.</p>
              <strong>₹299</strong>
            </article>
          </div>
        </section>

        <section className="about-section" id="about">
          <div>
            <p className="eyebrow">a bit about us</p>
            <h2>We just really like plants.</h2>
          </div>

          <p>
            Bloom started with a few plants on a windowsill and somehow
            turned into a collection of way too many pots. We pick
            plants that look good, feel good, and don't need constant
            babysitting.
          </p>
        </section>

        <section className="contact-section" id="contact">
          <p className="eyebrow">say hi</p>

          <h2>Want some green in your life?</h2>

          <p>
            Come find your next plant. Your empty corner will thank you.
          </p>

          <a
            href="mailto:hello@bloom.example"
            className="primary-button"
          >
            Say hello
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <p>© 2026 bloom. Made with 🌱</p>
      </footer>
    </div>
  );
}

export default App;