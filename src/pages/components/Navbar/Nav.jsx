import "./nav.css";
import { useState } from "react";
import { useAuth } from "../../../context/auth/auth";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { NavLogo } from "./components/NavLogo";
import { NavSignIn } from "./components/NavSignIn";
import { NavUser } from "./components/NavUser";
import { NavUserNameShow } from "./components/NavUserNameShow";
import { DropDownButton } from "./components/DropDownButton";
import { DropDownMenuItems } from "./components/DropDownMenuItems";
import { NavDropDownOptions } from "./components/NavDropDownOptions";

export function NavBar() {
  const {
    authState: { userData, isUserLogin },
  } = useAuth();

  const [isDropDownModal, setDropDownModal] = useState(false);

  function openDropDownOption() {
    setDropDownModal((isDropDownModal) => !isDropDownModal);
  }

  return (
    <nav className="nav">
      <div className="nav__container">
        <div className="nav__main">
          <NavLogo />

          <div className="nav__search">
            <SearchBar />
          </div>

          <div className="nav__account">
            {!isUserLogin ? (
              <NavSignIn />
            ) : (
              <NavUser>
                <NavUserNameShow
                  firstName={userData?.firstName}
                  lastName={userData?.lastName}
                />
                <DropDownButton openDropDownOption={openDropDownOption} />
                {isDropDownModal && (
                  <NavDropDownOptions>
                    <DropDownMenuItems />
                  </NavDropDownOptions>
                )}
              </NavUser>
            )}
          </div>
        </div>
      </div>
      {/* mobile View */}
    </nav>
  );
}
