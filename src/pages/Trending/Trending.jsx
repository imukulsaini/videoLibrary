import "./trending.css";
import { NavBar } from "../components/Navbar/Nav";
import { SideBar } from "../components/Sidebar/Sidebar";
import { useEffect, useState } from "react";
import { HeadingMain } from "../components/HeadingMain/HeadingMain";
import { getTrendingVideos } from "../../api/api";
import { VideoCards } from "../components/VideoCard/VideoCard";
import { LoadingSpinner } from "../components/Spinner/LoadingSpinner";
export function Trending() {
  const [loading, setLoading] = useState("idle");
  const [error, setError] = useState("");
  const [trendingVideos, setTrendingVideos] = useState([]);

  useEffect(() => {
    (async function () {
      setLoading("pending");
      const videoResponse = await getTrendingVideos();
      if (videoResponse.message) {
        setLoading("rejected");
        setError(videoResponse.message);
        console.log("error message ", videoResponse);
      } else {
        setLoading("fulfilled");
        setTrendingVideos(videoResponse.data.trendingVideos);
      }
    })();
  }, []);

  const trendingFilteredVideos = trendingVideos.filter((video, id) => id <= 4);
  return (
    <div className="trending-page">
      <NavBar />
      <SideBar isSideBarShrink={false} />
      <section className="trending__main">
        <HeadingMain name={"Trending"} />
        {loading === "pending" && <LoadingSpinner isDefaultCss={true}  size={30} />}
        {loading === "fulfilled" &&
          trendingFilteredVideos.map((video, id) => {
            return (
                <div
                key={id} 
                className="trending__videos">
                  <span className="trending-video__index">{id + 1}</span>

                  <VideoCards
                    isvideoCardTypeHorizontal={true}
                    videoData={video}
                    isDropDownShow={false}
                  />
                </div>
            );
          })}

        {loading === "rejected" && { error }}
      </section>
    </div>
  );
}
