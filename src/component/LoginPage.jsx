import React from "react";
import "./LoginPage.css";
import LoginLeftsideimage from "../assets/loginImage/Untitled design (1) 3.png";

const LoginPage = () => {
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
          <form>
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter your registered email or phone"
              />
            </div>

            <div className="form-group">
              <input type="password" placeholder="Enter your password" />
            </div>

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
            <h4>Not a member yet?</h4>{" "}
            <button className="sign-up-btn" href="/register">Register Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
