import { useNavigate } from "react-router";
import { useAuth } from "../../../../context/auth/auth";
import { RiAccountBoxLine, RiLogoutBoxRLine } from "react-icons/ri";

export function DropDownMenuItems() {
  const navigate = useNavigate();
  const { authDispatch } = useAuth();

  function logoutUser() {
    authDispatch({ type: "LOGOUT" });
    navigate("/");
  }

  return (
    <div className="nav__dropdown-content">
      <div onClick={() => navigate("/account/profile")} className="nav__dropdown-item">
        <RiAccountBoxLine color="#fc7551" className="dropdown__item-icon" />
        <span className="dropdown__item-name">Account Settings</span>
      </div>
      <hr
        style={{
          color: "gray",
          backgroundColor: "gray",
          height: 2,
        }}
      />
      <div onClick={logoutUser} className="nav__dropdown-item">
        <RiLogoutBoxRLine color="#fc7551" className="dropdown__item-icon" />

        <span className="dropdown__item-name">Log out</span>
      </div>
    </div>
  );
}
