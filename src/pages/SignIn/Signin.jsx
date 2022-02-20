import { NavBar } from "../components/Navbar/Nav";
import { useNavigate, useLocation } from "react-router-dom";
import { useState ,useEffect} from "react";
import { loginUser } from "../../api/api";
import { useAuth } from "../../context/auth/auth";
import { ReactComponent as BrandLogo } from "../../assets/brand-logo.svg";
import { FormInput } from "../components/FormInput/FormInput";
import "./signin.css";
import { LoadingSpinner } from "../components/Spinner/LoadingSpinner";

export function SignIn() {
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });
  const [isAutoFill, setAutoFill] = useState(false);
  const values = [
    {
      id: 0,
      htmlFor: "username",
      name: "username",
      type: "text",
      pattern: "^[A-Za-z0-9]{1,}$",
      placeholder: "killua zoldyck",
      required: true,
      value: formValues.username,
      label: "user name",
    },

    {
      id: 1,
      htmlFor: "password",
      name: "password",
      value: formValues.password,
      type: "password",
      placeholder: "*******",
      required: true,
      label: "password",
    },
  ];

  const [loading, setLoading] = useState("idle");
  const [error, setError] = useState("");
  const { authDispatch } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const userHistoryRoute = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (isAutoFill) {
      setFormValues({
        ...formValues,
        username: process.env.REACT_APP_USERNAME,
        password: process.env.REACT_APP_PASSWORD,
      });
    } else {
      setFormValues({ ...formValues, username: "", password: "" });
    }
  }, [isAutoFill]);

  async function checkUserCredentials(e) {
    e.preventDefault();
    if (formValues.password.length > 0 && formValues.username.length > 0) {
      setLoading("pending");
      const response = await loginUser(
        formValues.username,
        formValues.password
      );
      if (response.errMessage) {
        setLoading("rejected");
        setError(response.errMessage);
      } else {
        setLoading("fulfilled");
        authDispatch({ type: "LOGIN_SUCCESS", payload: response });
        navigate(userHistoryRoute, { replace: true });
      }
    }
  }

  function onChangeInput(e) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }

  function onChangeAutoFill() {
    setAutoFill((autoFill) => !autoFill);
  }

  return (
    <div className="sign-in">
      <NavBar />
      <section className="sign-in__main">
        <div className="sign-in__main-container">
          <div className="sign-in__form">
            <div className="sign-in__main-header">
              <div className="brand__logo sign__logo">
                <BrandLogo fill="#fc7551" stroke="white" />
              </div>
              <h2 className="sign-in__header-name">Login</h2>
            </div>

            <form
              className="sign-in__form-info"
              onSubmit={checkUserCredentials}
            >
              <div className="username-info">
                {values.map((value) => (
                  <FormInput
                    key={value.id}
                    name={value.name}
                    placeholder={value.placeholder}
                    type={value.type}
                    onChangeInput={onChangeInput}
                    label={value.label}
                    required={value.required}
                    pattern={value.pattern}
                    value={value.value}
                  />
                ))}
              </div>
              <div className="auto-fill__data">
                <input
                  type="checkbox"
                  name="auto-fill__input"
                  value={isAutoFill}
                  onChange={onChangeAutoFill}
                />
                <label htmlFor="auto-fill">Auto Fill</label>
              </div>
              <div className="error__message">
                {loading === "rejected" && (
                  <span className="sign-in__error">{error}</span>
                )}
              </div>

              <button type="submit" className="sign-in-button">
                Sign In
                <span className="sign-in__loading-indicator">
                  {loading === "pending" && (
                    <span className="loading-indicator__spin">
                      <LoadingSpinner
                        color={"#fffff"}
                        isDefaultCss={false}
                        size={13}
                      />
                    </span>
                  )}
                </span>
              </button>
            </form>
            <div className="register__action">
              <span className="register__action-info">or</span>
              <span
                onClick={() => navigate("/register")}
                className="create-account-action"
              >
                create an account
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="left"></section>
      <section className="right"></section>
    </div>
  );
}
