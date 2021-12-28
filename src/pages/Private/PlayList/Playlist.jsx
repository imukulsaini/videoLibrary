import { CreatePlaylist } from "./components/PlaylistCreate";
import { PlaylistNameShow } from "./components/PlaylistNamesShow";
import { HeadingMain } from "../../components/HeadingMain/HeadingMain";
import { NavBar } from "../../components/Navbar/Nav";
import { SideBar } from "../../components/Sidebar/Sidebar";

export function Playlist() {
  return (
    <div className="playlist">
      <NavBar />
      <SideBar isSideBarShrink={false} />
      <section className="playlist__main">
        <HeadingMain name={"Playlist"} />
        <div className="playlist__main-show">
          <CreatePlaylist />
          <div className="playlist__name-lists">
            <PlaylistNameShow isToggleHidden={true} />
          </div>
        </div>
      </section>
    </div>
  );
}
