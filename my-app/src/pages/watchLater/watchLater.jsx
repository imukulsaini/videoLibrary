import "./watchLater.css";
import { NavBar } from "../components/navbar/nav";
import { SideBar } from "../components/sidebar/sidebar";
import { WatchLaterVideos } from "./components/watchLaterVideos";
export function WatchLater() {

  

  return (
    <div className="watchlater-video">
      <NavBar />
      <SideBar />
      <section className="main-watch">
        <div className="heading">
          <h2 class="heading-name">Watch - Later</h2>
        </div>
        <div className="divider-s"></div>

        <WatchLaterVideos />

      </section>
    </div>
  );
}
   
