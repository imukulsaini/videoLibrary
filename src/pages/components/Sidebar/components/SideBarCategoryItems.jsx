import { createSearchParams, NavLink } from "react-router-dom";
import { useLocation } from "react-router";
import { FaBrain, FaTree, FaBook } from "react-icons/fa";

import { GoGlobe } from "react-icons/go";

export function SideBarCategoryItems({ isSideBarShrink }) {
  const location = useLocation();
  const url = `${location.pathname}${location.search}`;

  return (
    <ul className="side-bar__menu-list">
      <NavLink
        to={`/category?${createSearchParams({ name: "environment" })}`}
        className="side-bar__menu-items   hv-itm "
        activeClassName={
          url === "/category?name=environment" ? "side-bar__menu-active" : ""
        }
        exact="true"
        end
      >
        <FaTree className="home-icon hv-ic  " />
        {!isSideBarShrink ? "Environment" : null}
      </NavLink>

      <NavLink
        to={`/category?${createSearchParams({ name: "history" })}`}
        className="side-bar__menu-items   hv-itm "
        activeClassName={
          url === "/category?name=history" ? "side-bar__menu-active" : ""
        }
        exact="true"
        end
      >
        <GoGlobe className="home-icon  hv-ic " />
        {!isSideBarShrink ? "History" : null}
      </NavLink>

      <NavLink
        to={`/category?${createSearchParams({ name: "psychology" })}`}
        className="side-bar__menu-items   hv-itm "
        activeClassName={
          url === "/category?name=psychology" ? "side-bar__menu-active" : ""
        }
        exact="true"
        end
      >
        <FaBrain className="home-icon hv-ic " />
        {!isSideBarShrink ? "Psychology" : null}
      </NavLink>

      <NavLink
        to={`/category?${createSearchParams({ name: "biography" })}`}
        className="side-bar__menu-items   hv-itm "
        activeClassName={
          url === "/category?name=biography" ? "side-bar__menu-active" : ""
        }
        exact="true"
        end
      >
        <FaBook className="home-icon hv-ic " />
        {!isSideBarShrink ? "Biography" : null}
      </NavLink>
    </ul>
  );
}
