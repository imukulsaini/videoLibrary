import { useState, useEffect } from "react";
import { updateProfile } from "../../../../api/api";
import { useAuth } from "../../../../context/auth/auth";
import { FormInput } from "../../../components/FormInput/FormInput";
import { FormNamesInput } from "../../../components/FormInput/FormNamesInput";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

export function ProfileSetting() {
  const [loading, setLoading] = useState("idle");
  const [updateStatus, setUpdateStatus] = useState("idle");
  const [error, setError] = useState("");

  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
  });

  const NameInputValues = [
    {
      id: 0,
      name: "firstName",
      label: "first name",
      value: formValues.firstName,
      type: "text",
      pattern: "^[A-Za-z0-9]{1,}$",
      required: true,
    },
    {
      id: 1,
      name: "lastName",
      label: "last name",
      value: formValues.lastName,
      type: "text",
      pattern: "^[A-Za-z0-9]{1,}$",
      required: true,
    },
  ];

  const otherInputValues = [
    {
      id: 2,
      name: "email",
      label: "email",
      type: "email",
      errorMessage: "It should be a valid email address!",
      value: formValues.email,
      required: true,
    },
    {
      id: 3,
      name: "username",
      label: "username",
      type: "text",
      value: formValues.username,
      pattern: "^[A-Za-z0-9]{3,16}$",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      required: true,
    },
  ];
  const override = css`
    display: block;
    margin: 0 auto;
    margin-top: 10rem;
    border-color: #808191;
  `;

  const {
    authDispatch,
    authState: { userID, token, userData },
  } = useAuth();

  useEffect(() => {
    setLoading("pending");
    if (userID && userData) {
      setFormValues((values) => ({
        ...values,
        firstName: userData.firstName,
        lastName: userData.lastName,
        username: userData.username,
        email: userData.email,
      }));
      setLoading("fulfilled");
    }
  }, [userID, token, userData]);

  async function updateUserProfile(event) {
    event.preventDefault();
    setUpdateStatus("pending");
    const response = await updateProfile(
      userID,
      token,
      formValues.firstName,
      formValues.lastName,
      formValues.email,
      formValues.username
    );
    if (response.errMessage) {
      setUpdateStatus("rejected");
      setError(response.errMessage);
    } else {
      setUpdateStatus("fulfilled");
      authDispatch({ type: "UPDATE_PROFILE_DATA", payload: response });
    }
  }

  function onChangeInput(e) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }

  return (
    <div className="setting__profile">
      {loading === "pending" && <ClipLoader css={override} loading size={30} />}
      {loading === "fulfilled" && (
        <form className="profile-change__form" onSubmit={updateUserProfile}>
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
                value={value.value}
                {...value}
              />
            );
          })}

          {updateStatus === "rejected" && (
            <>
              <button type="submit" className="account__action-btn">
                Save
              </button>
              <span className="profile__error">{error}</span>
            </>
          )}

          {updateStatus === "idle" && (
            <button type="submit" className="account__action-btn">
              Save
            </button>
          )}

          {updateStatus === "pending" && (
            <button className="account__action-btn">
              updating
              <span className="loading-indicator__spin">
                <ClipLoader color={"#fffff"} loading size={13} />
              </span>{" "}
            </button>
          )}

          {updateStatus === "fulfilled" && (
            <>
              <button type="submit" className="account__action-btn">
                Save
              </button>
              <span className="profile__success-status">profile updated</span>
            </>
          )}
        </form>
      )}
    </div>
  );
}
