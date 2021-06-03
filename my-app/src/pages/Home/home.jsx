import { NavBar } from "../components/navbar/nav";
import { SideBar } from "../components/sidebar/sidebar";
import { VideoCard } from "../components/videocard/vertical/videocard";
import { Footer } from "../components/footer/footer";

import "./home.css";
export function Home() {
  return (
    <div className="home-page">
      <NavBar />

      <SideBar />

      <section className="main">
        <div className="heading">
          <h2 class="heading-name">Discover</h2>
        </div>

        <div className="video-component">
          <VideoCard />
        
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
}
