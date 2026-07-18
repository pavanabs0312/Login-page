import React, { useState } from "react";
import "./LoginSignup.css";

import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaGithub,
  FaFacebookF,
} from "react-icons/fa";

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="page">
      <div className="container">

        <div className="header">
          <div className="logo-circle">
            <FaUser />
          </div>

          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>

        <div className="inputs">

          {action === "Sign Up" && (
            <div className="input">
              <FaUser className="icon" />
              <input
                type="text"
                placeholder="Full Name"
              />
            </div>
          )}

          <div className="input">
            <FaEnvelope className="icon" />
            <input
              type="email"
              placeholder="Email Address"
            />
          </div>

          <div className="input">
            <FaLock className="icon" />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />

            <span
              className="eye"
              onClick={() =>
                setShowPassword(!showPassword)
              }
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>

          </div>

        </div>

        {action === "Login" && (
          <div className="forgot-password">
            Forgot Password? <span>Click Here</span>
          </div>
        )}

        <button className="main-btn">
          {action}
        </button>

        <div className="divider">
          <span>OR CONTINUE WITH</span>
        </div>

        <div className="social-login">

          <button>
            <FaGoogle />
          </button>

          <button>
            <FaGithub />
          </button>

          <button>
            <FaFacebookF />
          </button>

        </div>

        <div className="submit-container">

          <div
            className={
              action === "Login"
                ? "submit gray"
                : "submit"
            }
            onClick={() => setAction("Sign Up")}
          >
            Sign Up
          </div>

          <div
            className={
              action === "Sign Up"
                ? "submit gray"
                : "submit"
            }
            onClick={() => setAction("Login")}
          >
            Login
          </div>

        </div>

      </div>
    </div>
  );
};

export default LoginSignup;