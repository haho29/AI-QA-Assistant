import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="home-page">

      <Navbar />

      <main>

        <section className="hero-section">

          <div className="hero-content">

            <div className="demo-badge">
              <span className="demo-badge-dot"></span>
              AI-ASSISTED QA ENVIRONMENT
            </div>

            <h1>
              Test smarter.
              <br />
              <span>Find bugs faster.</span>
            </h1>

            <p>
              QA Demo Shop is a demo e-commerce
              application designed for automated
              testing, test case generation and
              AI-assisted bug analysis.
            </p>

            <div className="hero-actions">

              <Link
                to="/products"
                className="primary-button"
              >
                Explore Products →
              </Link>

              <Link
                to="/login"
                className="secondary-button"
              >
                Sign In
              </Link>

            </div>

          </div>

          <div className="hero-card">

            <div className="hero-card-header">
              <span>QA Testing Status</span>

              <span className="online-status">
                ● Ready
              </span>
            </div>

            <div className="qa-stat">
              <span>Test Scenarios</span>
              <strong>15+</strong>
            </div>

            <div className="qa-stat">
              <span>Automation</span>
              <strong>Playwright</strong>
            </div>

            <div className="qa-stat">
              <span>AI Analysis</span>
              <strong>Enabled</strong>
            </div>

          </div>

        </section>

        <section className="features-section">

          <div className="section-heading">
            <span>QA WORKFLOW</span>

            <h2>
              Built for real testing scenarios
            </h2>

            <p>
              Explore realistic user flows and
              edge cases designed for QA automation.
            </p>
          </div>

          <div className="feature-grid">

            <div className="feature-card">
              <div className="feature-card-icon">
                🔐
              </div>

              <h3>Authentication</h3>

              <p>
                Register, login and password
                recovery scenarios.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-card-icon">
                🛍️
              </div>

              <h3>Product Testing</h3>

              <p>
                Search, filtering and product
                interaction scenarios.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-card-icon">
                🧪
              </div>

              <h3>QA Automation</h3>

              <p>
                Automated tests with reliable
                evidence and failure analysis.
              </p>
            </div>

          </div>

        </section>

      </main>

      <Footer />

    </div>
  );
}

export default Home;