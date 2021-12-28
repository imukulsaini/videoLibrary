import {
  MdHome,
  MdTrendingUp,
  MdWatchLater,
  MdPlaylistAdd,
} from "react-icons/md";

import { FaBrain, FaTree, FaBook } from "react-icons/fa";

import { GoHeart, GoGlobe } from "react-icons/go";

import "./sidebar.css";
import { Link, createSearchParams, NavLink } from "react-router-dom";

export function SideBar({ isSideBarShrink }) {
  return (
    <div className="side-bar">
      {/*  side bar menu options */}

      <section
        className={
          isSideBarShrink
            ? `side-bar__menu-options-two`
            : `side-bar__menu-options`
        }
      >
        <span className="side-bar__menu-name">MENU</span>
        <ul className="side-bar__menu-list">
          <Link to="/" className="side-bar__menu-items  hv-itm">
            <span className="sidebar__item-icon hv-ic-itm ">
              <MdHome className="home-icon  hv-ic" />
            </span>

            <span
              hidden={isSideBarShrink}
              className="side-bar__item-name hv-itm-nm"
            >
              Discover
            </span>
          </Link>

          <Link to="/trending" className="side-bar__menu-items    hv-itm ">
            <span className="sidebar__item-icon hv-ic-itm ">
              <MdTrendingUp className="home-icon hv-ic " />
            </span>

            <span
              hidden={isSideBarShrink}
              className="side-bar__item-name hv-itm-nm "
            >
              Trending
            </span>
          </Link>

          <Link to="/likes" className="side-bar__menu-items   hv-itm">
            <span className="sidebar__item-icon hv-ic-itm ">
              <GoHeart className="home-icon hv-ic " />
            </span>

            <span
              className="side-bar__item-name hv-itm-nm "
              hidden={isSideBarShrink}
            >
              liked Videos{" "}
            </span>
          </Link>

          <Link to="/watch-later" className="side-bar__menu-items   hv-itm ">
            <span className="sidebar__item-icon hv-ic-itm  ">
              <MdWatchLater className="home-icon hv-ic  " />
            </span>

            <span
              className="side-bar__item-name hv-itm-nm "
              hidden={isSideBarShrink}
            >
              Watch later{" "}
            </span>
          </Link>

          <Link to="/playlist" className="side-bar__menu-items   hv-itm ">
            <span className="sidebar__item-icon hv-ic-itm  ">
              <MdPlaylistAdd className="home-icon hv-ic  " />
            </span>

            <span
              className="side-bar__item-name hv-itm-nm "
              hidden={isSideBarShrink}
            >
              Playlist
            </span>
          </Link>
        </ul>
      </section>

      <hr style={{ width: "85%", margin: "2rem auto" }} />

      {/* category menu Options */}

      <section
        className={
          isSideBarShrink
            ? `side-bar__menu-options-two`
            : `side-bar__menu-options`
        }
      >
        <span className="side-bar__menu-name">CATEGORY</span>

        <ul className="side-bar__menu-list">
          <Link
            to={`/category?${createSearchParams({ name: "environment" })}`}
            className="side-bar__menu-items  hv-itm "
          >
            <span className="sidebar__item-icon hv-ic-itm  ">
              <FaTree className="home-icon hv-ic  " />
            </span>

            <span
              className="side-bar__item-name   hv-itm-nm"
              hidden={isSideBarShrink}
            >
              Environment
            </span>
          </Link>

          <Link
            to={`/category?${createSearchParams({ name: "history" })}`}
            className="side-bar__menu-items hv-itm"
          >
            <span className="sidebar__item-icon hv-ic-itm  ">
              <GoGlobe className="home-icon  hv-ic " />
            </span>

            <span
              className="side-bar__item-name hv-itm-nm"
              hidden={isSideBarShrink}
            >
              History
            </span>
          </Link>

          <Link
            to={`/category?${createSearchParams({ name: "psychology" })}`}
            className="side-bar__menu-items  hv-itm "
          >
            <span className="sidebar__item-icon hv-ic-itm ">
              <FaBrain className="home-icon hv-ic " />
            </span>

            <span
              className="side-bar__item-name hv-itm-nm"
              hidden={isSideBarShrink}
            >
              Psychology
            </span>
          </Link>

          <Link
            to={`/category?${createSearchParams({ name: "biography" })}`}
            className="side-bar__menu-items  hv-itm "
          >
            <span className="sidebar__item-icon hv-ic-itm ">
              <FaBook className="home-icon hv-ic " />
            </span>

            <span
              className="side-bar__item-name hv-itm-nm"
              hidden={isSideBarShrink}
            >
              Biography
            </span>
          </Link>
        </ul>
      </section>
    </div>
  );
}
