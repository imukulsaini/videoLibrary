import { NavLink } from "react-router-dom";
import { GoHeart } from "react-icons/go";
import {
  MdHome,
  MdTrendingUp,
  MdWatchLater,
  MdPlaylistAdd,
} from "react-icons/md";

export function SideBarMenuItems({ isSideBarShrink }) {
  return (
    <ul className="side-bar__menu-list">
      <NavLink
        to="/"
        className="side-bar__menu-items hv-itm"
        activeClassName="side-bar__menu-active"
        exact="true"
        end
      >
        <MdHome className="home-icon  hv-ic" />
        {!isSideBarShrink ? "Discover" : null}
      </NavLink>

      <NavLink
        to="/trending"
        className="side-bar__menu-items hv-itm"
        activeClassName="side-bar__menu-active"
        exact="true"
        end
      >
        <MdTrendingUp className="home-icon hv-ic " />
        {!isSideBarShrink ? "Trending" : null}
      </NavLink>

      <NavLink
        to="/likes"
        className="side-bar__menu-items   hv-itm"
        activeClassName="side-bar__menu-active"
        exact="true"
        end
      >
        <GoHeart className="home-icon hv-ic " />
        {!isSideBarShrink ? "Liked Video" : null}
      </NavLink>

      <NavLink
        to="/watch-later"
        className="side-bar__menu-items   hv-itm "
        activeClassName="side-bar__menu-active"
        exact="true"
        end
      >
        <MdWatchLater className="home-icon hv-ic  " />

        {!isSideBarShrink ? "Watch Later" : null}
      </NavLink>

      <NavLink
        to="/playlist"
        className="side-bar__menu-items   hv-itm "
        activeClassName="side-bar__menu-active"
        exact="true"
        end
      >
        <MdPlaylistAdd className="home-icon hv-ic  " />

        {!isSideBarShrink ? "Playlist" : null}
      </NavLink>
    </ul>
  );
}
