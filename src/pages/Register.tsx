import { FormEvent, useState } from "react";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleRegister = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setMessage("");
    setError("");

    if (!email.trim()) {
      setError("Email is required.");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email.");
      return;
    }

    if (!password.trim()) {
      setError("Password is required.");
      return;
    }

    if (!confirmPassword.trim()) {
      setError("Confirm Password is required.");
      return;
    }

    // BUG-001 intentionally preserved:
    // Password length is not validated.

    // BUG-002 intentionally preserved:
    // Password and Confirm Password are not compared.

    const user = {
      email,
      password,
    };

    localStorage.setItem(
      "qa-demo-user",
      JSON.stringify(user)
    );

    setMessage("Registration successful!");
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
              <h2>Create your account</h2>

              <p>
                Start testing with QA Demo Shop.
              </p>
            </div>

            <form onSubmit={handleRegister}>

              <div className="form-group">
                <label htmlFor="register-email">
                  Email
                </label>

                <input
                  id="register-email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  placeholder="you@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="register-password">
                  Password
                </label>

                <input
                  id="register-password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  placeholder="Enter your password"
                />
              </div>

              <div className="form-group">
                <label htmlFor="confirm-password">
                  Confirm Password
                </label>

                <input
                  id="confirm-password"
                  name="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) =>
                    setConfirmPassword(e.target.value)
                  }
                  placeholder="Confirm your password"
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
                id="register-button"
              >
                Create Account
              </button>

            </form>

            <div className="auth-links">
              <p>
                Already have an account?{" "}
                <a href="/login">Sign in</a>
              </p>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}

export default Register;