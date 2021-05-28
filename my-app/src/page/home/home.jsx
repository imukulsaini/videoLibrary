import { NavBar } from "./components/navbar/nav";
import { Footer } from "./components/footer/footer.jsx";
import { SideBar } from "./components/sidebar/sidebar";
import {VideoCard} from "./components/video/video";
export function Home() {
  return (
    <div className="home-page">
      {/* Header    */}

      <NavBar />

      <SideBar />

      <section className="main">

           <div className="heading">
            <h2 class="heading-name">Discover</h2>
          </div>


        <div className="video-component">
         

          


          <VideoCard/>
          <VideoCard/>

          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
          <VideoCard/>
         



        </div>




       
      </section>

      <Footer />
    </div>
  );
}
