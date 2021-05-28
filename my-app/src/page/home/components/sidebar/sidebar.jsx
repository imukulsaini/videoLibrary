import {
  MdHome,
  MdTrendingUp,
  MdWatchLater,
  MdFeaturedPlayList,
} from "react-icons/md";
import { FaBrain, FaTree, FaBook } from "react-icons/fa";

import { GoHeart, GoGlobe } from "react-icons/go";

import "./sidebar.css";

export function SideBar() {
  return (
    <>
      <section className="side-bar">
        <div className="side-bar__menu">
          <span className="side-bar__menu-name">MENU</span>

          <ul className="side-bar__menu-list">
              
            <li className="side-bar__menu-items  hv-itm">
              <div className="sidebar__item-icon hv-ic-itm ">
                <MdHome className="home-icon  hv-ic  " />
              </div>

              <span className="side-bar__item-name hv-itm-nm">Discover</span>
            </li>

            <li className="side-bar__menu-items    hv-itm ">
              <div className="sidebar__item-icon hv-ic-itm ">
                <MdTrendingUp className="home-icon hv-ic " />
              </div>

              <span className="side-bar__item-name hv-itm-nm ">Trending</span>
            </li>

            <li className="side-bar__menu-items   hv-itm">
              <div className="sidebar__item-icon hv-ic-itm ">
                <GoHeart className="home-icon hv-ic " />
              </div>

              <span className="side-bar__item-name hv-itm-nm ">
                liked Videos{" "}
              </span>
            </li>

            <li className="side-bar__menu-items   hv-itm ">
              <div className="sidebar__item-icon hv-ic-itm  ">
                <MdWatchLater className="home-icon hv-ic  " />
              </div>

              <span className="side-bar__item-name hv-itm-nm ">
                Watch later{" "}
              </span>
            </li>

            <li className="side-bar__menu-items   hv-itm ">
              <div className="sidebar__item-icon hv-ic-itm  ">
                <MdFeaturedPlayList className="home-icon hv-ic  " />
              </div>

              <span className="side-bar__item-name hv-itm-nm ">Playlist</span>
            </li>
          </ul>
        </div>

        <div className="divider"></div>

        <div className="side-bar__menu">
          <span className="side-bar__menu-name">CATEGORY</span>

          <ul className="side-bar__menu-list">
            <li className="side-bar__menu-items  hv-itm ">
              <div className="sidebar__item-icon hv-ic-itm  ">
                <FaTree className="home-icon hv-ic  " />
              </div>

              <span className="side-bar__item-name   hv-itm-nm">
                Environment
              </span>
            </li>

            <li className="side-bar__menu-items hv-itm">
              <div className="sidebar__item-icon hv-ic-itm  ">
                <GoGlobe className="home-icon  hv-ic " />
              </div>

              <span className="side-bar__item-name hv-itm-nm">History</span>
            </li>

            <li className="side-bar__menu-items  hv-itm ">
              <div className="sidebar__item-icon hv-ic-itm ">
                <FaBrain className="home-icon hv-ic " />
              </div>

              <span className="side-bar__item-name hv-itm-nm">Psychology </span>
            </li>

            <li className="side-bar__menu-items  hv-itm ">
              <div className="sidebar__item-icon hv-ic-itm ">
                <FaBook className="home-icon hv-ic " />
              </div>

              <span className="side-bar__item-name hv-itm-nm"> Biography </span>
            </li>
          </ul>
        </div>

        <div className="divider"></div>

        <div className="theme-toggle">Night Mode</div>
      </section>
    </>
  );
}
