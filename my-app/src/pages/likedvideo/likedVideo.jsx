import "./likedVideo.css";
import { NavBar } from "../components/navbar/nav";
import { SideBar } from "../components/sidebar/sidebar";
import { LikedVideos } from "./components/likedVideos";
export function LikedVideo() {
 
  return (
    <div className="liked-video">
      <NavBar />
      <SideBar />
      <section className="main-likes">
        <div className="heading">
          <h2 class="heading-name">Likes</h2>
        </div>
        <div className="divider-s"></div>

        <LikedVideos />
      </section>
    </div>
  );
}
