import { FormEvent, useState } from "react";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleForgotPassword = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setError("");
    setMessage("");

    if (!email.trim()) {
      setError("Email is required.");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email.");
      return;
    }

    setMessage(
      "Password reset link has been sent to your email."
    );
  };

  return (
    <div className="auth-page">
      <div className="auth-container">

        <section className="brand-panel">
          <div className="brand-content">

            <div className="brand-logo">
              <div className="logo-icon">✓</div>

              <div className="logo-text">
                QA Demo Shop
              </div>
            </div>

            <h1>
              Test smarter.
              <br />
              <span>Find bugs faster.</span>
            </h1>

            <p className="brand-description">
              A demo e-commerce application built
              for AI-assisted quality assurance,
              automated testing and bug detection.
            </p>

            <div className="feature-list">
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                Authentication testing
              </div>

              <div className="feature-item">
                <span className="feature-icon">⌁</span>
                Automated QA workflow
              </div>

              <div className="feature-item">
                <span className="feature-icon">✦</span>
                AI-assisted test analysis
              </div>
            </div>

          </div>

          <div className="brand-footer">
            <span className="status-dot"></span>
            QA Testing Environment
          </div>
        </section>

        <section className="form-panel">
          <div className="auth-card">

            <div className="demo-badge">
              <span className="demo-badge-dot"></span>
              DEMO APPLICATION
            </div>

            <div className="auth-header">
              <h2>Forgot password?</h2>

              <p>
                Enter your email and we'll send you
                a reset link.
              </p>
            </div>

            <form onSubmit={handleForgotPassword}>

              <div className="form-group">
                <label htmlFor="forgot-email">
                  Email
                </label>

                <input
                  id="forgot-email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  placeholder="you@example.com"
                />
              </div>

              {error && (
                <div className="error-message">
                  <span>!</span>
                  {error}
                </div>
              )}

              {message && (
                <div className="success-message">
                  <span>✓</span>
                  {message}
                </div>
              )}

              <button
                type="submit"
                id="forgot-password-button"
              >
                Send Reset Link
              </button>

            </form>

            <div className="auth-links">
              <a
                className="back-link"
                href="/login"
              >
                ← Back to Login
              </a>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}

export default ForgotPassword;