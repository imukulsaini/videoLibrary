import { NavBar } from "../components/navbar/nav";
import { Link } from "react-router-dom";
import {Footer} from "../components/footer/footer";
import { useState } from "react";
import {ReactComponent as VideoPlay} from "../../svg/videoPlay.svg";
// import { useNavigate, useLocation } from "react-router-dom";
import "./signup.css";
export function SignUp() {


//   const navigate = useNavigate();

  const [password, setPassWord] = useState(null);
  const [cpassword, setCpassWord] = useState(null);
  const [firstname, setFirstName] = useState(null);
  const [lastname, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [username, setUsername] = useState(null);
  const [show, setShow] = useState(false);

//   async function createAccount() {
//     (await username) !== null &&
//       createUserAccount(
//         firstname,
//         lastname,
//         username,
//         email,
//         password,
//         cpassword
//       );
//     navigate("/");
//   }

//   function passwordHandler(event) {
//     setPassWord(event.target.value);
//   }

//   function cpasswordHandler(event) {
//     const cpassword = event.target.value;
//     setCpassWord(cpassword);
//   }

  return (
    <div className="SignUp">
      <NavBar/>
      <div 
      className="imagea">
    <VideoPlay
          style={{width:'100%', objectFit:'contain'}}
    />
      </div>
      <div className="contentSign">
        <div className="login-info">
          <div className="login-head">
            <h2> Create An Account </h2>
          </div>

          <div className="login-fields">
            <div className="sign-up-fname">
              <div>First Name</div>
              <input
                // onChange={(e) => setFirstName(e.target.value)}
                type="text"
              ></input>
            </div>

            <div className="sign-up-lname">
              <div>Last Name</div>
              <input
                // onChange={(e) => setLastName(e.target.value)}
                type="text"
              ></input>
            </div>

            <div className="sign-up-username">
              <div>User name</div>
              <input
                // onChange={(e) => setUsername(e.target.value)}
                type="text"
              ></input>
            </div>

            <div className="sign-up-email">
              <div>email</div>
              <input
                // onChange={(e) => setEmail(e.target.value)}
                type="email"
              ></input>
            </div>

            <div className="sign-up-password">
              <div>password</div>
              <input
                type={show ? "text" : "password"}
                // onChange={passwordHandler}
              ></input>
              <input
                onClick={() => {
                  setShow(!show);
                }}
                type="checkbox"
              ></input>
            </div>

            <div className="sign-up-cpassword">
              <div>confirm password</div>
              <input
                style={{ margin: "5px" }}
                type={show ? "text" : "password"}
                // onChange={cpasswordHandler}
              ></input>
              <input
                onClick={() => {
                //   setShow(!show);
                }}
                type="checkbox"
              ></input>
            </div>

            <div className="sign sign-up-button">
              <button>create an account </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
