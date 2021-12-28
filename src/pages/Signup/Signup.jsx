import { NavBar } from "../components/Navbar/Nav"
import { useNavigate } from "react-router";
import "./signup.css";
import { useState } from "react";
import { ReactComponent as BrandLogo } from "../../assets/brand-logo.svg";
import { useAuth } from "../../context/auth/auth";
import { createUserAccount } from "../../api/api";
import { useEffect } from "react";
import { FormInput } from "../components/FormInput/FormInput";
import { FormNamesInput } from "../components/FormInput/FormNamesInput";
import { LoadingSpinner } from "../components/Spinner/LoadingSpinner";

export function SignUp() {
  const navigate = useNavigate();
  const {
    authState: { isUserLogin },
    authDispatch,
  } = useAuth();

  const [loading, setLoading] = useState("idle");
  const [error, setError] = useState("");
  const [formError, setFormError] = useState("");

  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const NameInputValues = [
    {
      id: 0,
      name: "firstName",
      htmlFor: "firstName",
      label: "first name",
      type: "text",
      pattern: "^[A-Za-z0-9]{1,}$",
      placeholder: "killua",
      required: true,
    },
    {
      id: 1,
      name: "lastName",
      htmlFor: "lastName",
      label: "last name",
      type: "text",
      pattern: "^[A-Za-z0-9]{1,}$",
      placeholder: "zoldyck",
      required: true,
    },
  ];

  const otherInputValues = [
    {
      id: 2,
      name: "email",
      label: "email",
      htmlFor: "email",
      type: "email",
      errorMessage: "It should be a valid email address!",
      placeholder: "killua@xyz.com",
      required: true,
    },
    {
      id: 3,
      name: "username",
      label: "username",
      htmlFor: "username",
      type: "text",
      pattern: "^[A-Za-z0-9]{3,16}$",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      placeholder: "killuazoldyck55",
      required: true,
    },
    {
      id: 4,
      name: "password",
      label: "password",
      htmlFor: "password",
      type: "password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      placeholder: "***********",
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      label: "confirm password",
      htmlFor: "confirmPassword",
      type: "password",
      pattern: formValues.password,
      errorMessage: "Passwords don't match!",
      placeholder: "***********",
      required: true,
    },
  ] ;


  useEffect(() => {
    if (isUserLogin) {
      navigate("/");
    }
  }, [isUserLogin]);

  async function createNewAccount(e) {
    e.preventDefault();
    const { firstName, lastName, username, email, password, confirmPassword } =
      formValues;
    setLoading("pending");
    setFormError("");

    if (password === confirmPassword) {
      const response = await createUserAccount(
        firstName,
        lastName,
        username,
        email,
        password
      );
      if (response.errMessage) {
        setLoading("rejected");
        setError(response.errMessage);
      } else {
        setLoading("fulfilled");
        authDispatch({ type: "LOGIN_SUCCESS", payload: response });
        navigate("/");
      }
    }
  }

  function onChangeInput(e) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }

  return (
    <div className="sign-up">
      <NavBar />
      <section className="sign-up__main">
        <div className="sign-up__form">
          <div className="sign-up__main-header">
            <div className="brand__logo sign-up__logo">
              <BrandLogo fill="#fc7551" stroke="white" />
            </div>
            <h2 className="sign-in__header-name">Create An Account</h2>
          </div>

          <form className="sign-up__form-actions" onSubmit={createNewAccount}>
            <div className="sign-up__name">
              {NameInputValues.map((value) => {
                return (
                  <FormNamesInput
                    key={value.id}
                    type={value.type}
                    required={value.required}
                    label={value.label}
                    pattern={value.pattern}
                    onChangeInput={onChangeInput}
                    {...value}
                  />
                );
              })}
            </div>
            {otherInputValues.map((value) => {
              return (
                <FormInput
                  key={value.id}
                  name={value.name}
                  type={value.type}
                  required={value.required}
                  label={value.label}
                  onChangeInput={onChangeInput}
                  pattern={value.pattern}
                  {...value}
                />
              );
            })}

            {loading === "rejected" && (
              <span className="sign-in__error">{error}</span>
            )}

            <button type="submit" className="sign-up-button">
              Sign Up
              <span className="loading-indicator__spin">
                {loading === "pending" && (
                  <LoadingSpinner color={"#fffff"} isDefaultCss={false} size={13} />
                )}
              </span>
            </button>
          </form>
          {formError && <span>{formError}</span>}
          <div className="login__action">
            <span className="login__action-choice">or</span>

            <span className="login__route-info">
              Already Register
              <span onClick={() => navigate("/login")} className="login__route">
                Login
              </span>
            </span>
          </div>
        </div>
      </section>
      <section className="sign-up__right"></section>
      <section className="sign-up__left"></section>
    </div>
  );
}
