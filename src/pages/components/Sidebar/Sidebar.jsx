import { SideBarMenuItems } from "./components/SideBarMenuItems";
import { SideBarCategoryItems } from "./components/SideBarCategoryItems";
import "./sidebar.css";


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
        <SideBarMenuItems isSideBarShrink={isSideBarShrink} />
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

        <SideBarCategoryItems isSideBarShrink={isSideBarShrink} />
      </section>
    </div>
  );
}
