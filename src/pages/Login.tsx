import { FormEvent, useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setError("");
    setMessage("");

    if (!email.trim()) {
      setError("Email is required.");
      return;
    }

    if (!password.trim()) {
      setError("Password is required.");
      return;
    }

    const savedUser = localStorage.getItem(
      "qa-demo-user"
    );

    if (!savedUser) {
      setError(
        "Account not found. Please register first."
      );
      return;
    }

    const user = JSON.parse(savedUser);

    if (email !== user.email) {
      setError("Invalid email or password.");
      return;
    }

    if (password !== user.password) {
      setError("Invalid email or password.");
      return;
    }

    setMessage("Login successful!");
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
              <h2>Welcome back</h2>

              <p>
                Sign in to continue to QA Demo Shop.
              </p>
            </div>

            <form onSubmit={handleLogin}>

              <div className="form-group">
                <label htmlFor="login-email">
                  Email
                </label>

                <input
                  id="login-email"
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
                <label htmlFor="login-password">
                  Password
                </label>

                <input
                  id="login-password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  placeholder="Enter your password"
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
                id="login-button"
              >
                Sign In
              </button>

            </form>

            <div className="auth-links">
              <p>
                <a href="/forgot-password">
                  Forgot your password?
                </a>
              </p>

              <p>
                Don't have an account?{" "}
                <a href="/register">
                  Create account
                </a>
              </p>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}

export default Login;