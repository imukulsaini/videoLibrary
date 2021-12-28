import { NavBar } from "../components/Navbar/Nav";
import { useVideosData } from "../../context/video.js/video";

import "./home.css";

import { useEffect, useState } from "react";
import { SideBar } from "../components/Sidebar/Sidebar";
import { useSearchParams } from "react-router-dom";
import { getAllVideos } from "../../api/api";
import { VideoCards } from "../components/VideoCard/VideoCard";

import { HeadingMain } from "../components/HeadingMain/HeadingMain";
import { LoadingSpinner } from "../components/Spinner/LoadingSpinner";

export function Home() {
  const {
    state: { videoDataAll },
    videoDispatch,
  } = useVideosData();

  const [searchParams, setSearchParams] = useSearchParams();
  const searchVideoText = searchParams.get("search");
  const [loading, setLoading] = useState("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      setLoading("pending");

      const videoResponse = await getAllVideos();
      if (videoResponse.message) {
        setLoading("rejected");
        setError(videoResponse.message);
        console.log("error message ", videoResponse);
      } else {
        setLoading("fulfilled");
        videoDispatch({
          type: "SET_DATA",
          payload: videoResponse.data.videos,
        });
      }
    })();
  }, []);

  function filterSearchVideos(videos, search) {
    return videos.filter((video) =>
      search === null
        ? video
        : video.title.toLowerCase().includes(search.toLowerCase())
    );
  }
  const filteredVideos = filterSearchVideos(videoDataAll, searchVideoText);
  return (
    <div className="home-page">
      <NavBar />
      <SideBar />

      <section className="home__main">
        <HeadingMain name={"Discover"} />

        {loading === "pending" && (
          <LoadingSpinner isDefaultCss={true} size={30} />
        )}
        {loading === "fulfilled" && (
          <div className="home__discover ">
            {filteredVideos &&
              filteredVideos.map((video) => (
                <div key={video._id}>
                  <VideoCards
                    isvideoCardTypeHorizontal={false}
                    videoData={video}
                    isDropDownShow={false}
                  />
                </div>
              ))}
          </div>
        )}
        {loading === "rejected" && { error }}
      </section>
    </div>
  );
}
