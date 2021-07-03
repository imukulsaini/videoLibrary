import { NavBar } from "../components/navbar/nav";
import { Footer } from "../components/footer/footer";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

import "./signin.css";

export function SignIn() {
  const navigate = useNavigate();
  const [username, setUsername] = useState(null);
  const { state } = useLocation();
  function routeChangeHandler() {
    navigate("/register");
  }

  return (
    <div className="sign-in">
      <NavBar />

      <section className="sign-in__main">
        <div className="sign-in__main-header">
          <h2 className="sign-in__header-name">Login</h2>
        </div>
        <div className="sign-in__form">
          <form className="sign-in__form-info flx-cl gp-1">
            <div className="username-info flx-cl">
              <label htmlFor="username" className="username-label lbl-fm">
                username
              </label>
              <input
                placeholder="user name"
                className="input-info"
                type="text"
                id="login-username"
              />{" "}
            </div>

            <div className="password-info flx-cl">
              <label htmlFor="password" className="password-label lbl-fm">
                password
              </label>
              <input
                placeholder="password "
                className="input-info"
                type="password"
                id="login-password"
              />{" "}
            </div>

            <div className="sign-in__button-info">
              <button type="submit" className="sign-in-button btn-form fcs-btn">
                Sign In
              </button>
              <button type="submit" className="sign-up-button btn-form ">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}


