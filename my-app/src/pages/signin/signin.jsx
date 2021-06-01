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


//   async function loginHandler() {
//     await userCredentialsCheck(username);

//     navigate(state?.from ? state.from : "/");
//   }

  return (
    <>
      <div className="SignIn">
        <NavBar />

        <div className="contentSign">
          <div className="login-info">
            <div className="login-head">
              <h2> Login</h2>
            </div>

            <div className="login-fields">
              <div className="login-username">
                <div>User name</div>
                <input
                  id="username"
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                ></input>
              </div>

              <div className="login-password">
                <div>password</div>
                <input id="password" type="password"></input>
              </div>

              <div className="login-button">
                <button >Login</button>
              </div>
              <small>or</small>
              <div className="sign sign-up-button">
                <button type="button" onClick={routeChangeHandler}>
                  create an account
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}