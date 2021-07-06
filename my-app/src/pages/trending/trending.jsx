import "./trending.css";
import { NavBar } from "../components/navbar/nav";
import { SideBar } from "../components/sidebar/sidebar";
import { useEffect, useState } from "react";
import { useData } from "../../context/video/video";
import { VideoCard } from "../components/videocard/horizontal/videocard";
export function Trending() {
  const {
    state: { videoDataAll },
  } = useData();
  const [trendingVideos, setTrendingVideos] = useState([]);

  const videos = videoDataAll
    .sort((a, b) => b.views - a.views)
    .filter((video, id) => id <= 5);

  useEffect(() => {
    if (videos) {
      setTrendingVideos(videos);
    }
  }, []);

  return (
    <div className="trending-video">
      <NavBar />
      <SideBar />
      <section className="main-trend">
        <div className="heading">
          <h2 className="heading-name">Trending Now</h2>

        </div>
        <div className="divider-s"></div>

        {trendingVideos.map((video,id) => {
          return (<>
            <div
              style={{
                width: "90%",
                border: "1px solid #313339",
                position: "relative",
                marginTop: "2rem",
                padding: "0rem",
                display:'flex'
              }}
            >
            <span 
            className="trending-video__index"
            >{id+1}</span>

              <VideoCard video={video} />

            </div>
            </>  );
        })}
      </section>
    </div>
 
  );
}
