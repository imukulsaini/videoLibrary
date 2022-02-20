import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import { NavBar } from "../../components/Navbar/Nav";
import "./AccountSettings.css";
import { HeadingMain } from "../../components/HeadingMain/HeadingMain";

export function AccountSettings() {
  return (
    <div className="account-setting">
      <NavBar />
      <section className="account-setting__main">
        <div className="account__main">
          <div className="setting__header">
            <HeadingMain name={"Account Settings"} />
            <div className="setting__header-link">
              <NavLink to="profile" className="setting__header-item">
                Profile
              </NavLink>
              <NavLink to="password" className="setting__header-item">
                Password
              </NavLink>
            </div>
          </div>

          <section className="account__content">
            <Outlet />
          </section>
        </div>
      </section>
      <section className="account__left"></section>
      <section className="account__right"></section>
    </div>
  );
}
