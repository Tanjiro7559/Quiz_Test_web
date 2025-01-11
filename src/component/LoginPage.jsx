import React, { useState } from "react";
import "./LoginPage.css";
import LoginLeftsideimage from "../assets/loginImage/Untitled design (1) 3.png";

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLoginSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      const response = await fetch("http://localhost:3000/api/v1/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email_id: email, password }),
      });

      if (!response.ok) {
        throw new Error("Failed to log in. Please check your credentials.");
      }

      const data = await response.json();
      console.log("Login successful:", data); // Debugging line
      
      // Notify parent about the login (if required)
      if (onLogin) {
        onLogin();
      }

      // Optionally handle token or user details here
      alert("Login successful!");
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        {/* Left Section */}
        <div className="login-illustration">
          <img src={LoginLeftsideimage} alt="Illustration" />
        </div>

        {/* Right Section */}
        <div className="login-form">
          <h2>
            Hello,
            <br />
            Welcome back
          </h2>
          <form onSubmit={handleLoginSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter your registered email or phone"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && <div className="error-message">{error}</div>}

            <div className="form-remember">
              <div className="remember-me">
                <input type="checkbox" id="remember" />
                <label className="lable-me" htmlFor="remember">
                  Remember me
                </label>
              </div>
              <a href="/forgot-password" className="forgot-password">
                Forgot password?
              </a>
            </div>

            <button type="submit" className="btn btn-login">
              Log In
            </button>
          </form>

          <div className="register-link">
            <h4>Not a member yet?</h4>
            <button
              className="sign-up-btn"
              onClick={() => (window.location.href = "/register")}
            >
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
