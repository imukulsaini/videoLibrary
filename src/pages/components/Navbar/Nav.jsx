import { Link, NavLink, useNavigate } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import {
  RiAccountBoxFill,
  RiAccountBoxLine,
  RiLogoutBoxRLine,
} from "react-icons/ri";
import { MdAccountCircle, MdArrowDropDown } from "react-icons/md";
import { ReactComponent as BrandLogo } from "../../../assets/brand-logo.svg";
import "./nav.css";
import { useState } from "react";
import { useAuth } from "../../../context/auth/auth";
import { createSearchParams } from "react-router-dom";

export function NavBar() {
  const navigate = useNavigate();
  const {
    authDispatch,
    authState: { userData, isUserLogin },
  } = useAuth();

  const [isDropDownModal, setDropDownModal] = useState(false);
  const [searchText, setSearchText] = useState("");

  function openDropDownOption() {
    setDropDownModal((isDropDownModal) => !isDropDownModal);
  }
  function logoutUser() {
    authDispatch({ type: "LOGOUT" });
    navigate("/");
  }
  return (
    <>
      <nav className="nav">
        <div className="nav__container">
          <div className="nav__main">
            {/* logo */}
            <div className="nav__logo">
              <Link to="/" className="nav__logo-action">
                <div className="brand__logo">
                  <BrandLogo fill="#fc7551" stroke="white" />
                </div>
                <span className="brand__name">Crux Tube</span>
              </Link>
            </div>

            {/* search */}

            <div className="nav__search">
              <input
                onChange={(e) => setSearchText(e.target.value)}
                value={searchText}
                className="search__input"
                type="text"
                placeholder="Search"
              ></input>
              <Link
                to={`/?${createSearchParams({ search: searchText })}`}
                style={{ paddingLeft: ".5rem" }}
                className="search__button"
              >
                <BiSearch />
              </Link>
            </div>

            {/* account */}

            <div className="nav__account">
              {!isUserLogin ? (
                <div onClick={() => navigate("/login")} className="nav__login">
                  <MdAccountCircle className="account__icon" />
                  <span className="nav__icon-name"> SIGN IN </span>
                </div>
              ) : (
                <div className="nav__user">
                  <span className="nav__user-name">
                    {userData?.firstName} {userData?.lastName}
                  </span>
                  <button
                    onClick={openDropDownOption}
                    className="nav__dropdown-btn"
                  >
                    <RiAccountBoxFill />
                    <MdArrowDropDown />
                  </button>
                  {isDropDownModal && (
                    <div className="nav__dropdown-option">
                      <div className="nav__dropdown-content">
                        <div
                          onClick={() => navigate("/account")}
                          className="nav__dropdown-item"
                        >
                          <RiAccountBoxLine
                            color="white"
                            className="dropdown__item-icon"
                          />
                          <span className="dropdown__item-name">
                            Account Settings
                          </span>
                        </div>
                        <hr
                          style={{
                            color: "gray",
                            backgroundColor: "gray",
                            height: 2,
                          }}
                        />
                        <span
                          onClick={logoutUser}
                          className="nav__dropdown-item"
                        >
                          <RiLogoutBoxRLine
                            color="white"
                            className="dropdown__item-icon"
                          />

                          <span className="dropdown__item-name">Log out</span>
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        {/* mobile View */}
      </nav>
    </>
  );
}
