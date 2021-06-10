import { useEffect, useState } from "react";
import { VideoCard } from "../components/videocard/horizontal/videocard";
import { VideoHead } from "./component/videocontent";
import { ChannelContent } from "./component/channelcontent";
import { Divider } from "./component/divider";
import { NavBar } from "../components/navbar/nav";
import { SideBar } from "../components/sidebar/sidebar";
import { VideoPlayer } from "./component/player";
import { useParams } from "react-router-dom";

import { useData } from "../../context/data/video";

import "./videoID.css";

export function VideoID() {
  const [videoById, setVideoById] = useState([]);
  const [changeSidebar, setSidebarChange] = useState(false);
  const params = useParams();

  const {
    state: { videoDataAll },
  } = useData();

  useEffect(() => {
    setSidebarChange(true);
  }, []);

  const video = videoDataAll.find((data) => data.videoId === params.videoId);

  useEffect(() => {
    if (video) {
      setVideoById(video);
    }
  }, [video]);
  //watch later same page like ed video and in liked video use effect will use direct fetch data from userse
  //and add watrch later same a wishlist items
  //playlist is same as cart items
  

  return (
    <>
      <div className="video-id">
        <NavBar />

        <section className="sidebar">
          <SideBar changeSidebar={changeSidebar} />
        </section>

        <section className="main-videoId">
          <div className="video-content">
            <VideoPlayer videoId={videoById.videoId} />

            <div className="video-content__head">
              <VideoHead
                name={videoById.title}
                views={videoById.views}
                likes={videoById.likes}
                video={videoById}
              />

              <div className="divider"></div>

              <div className="video-content__channel">
                <ChannelContent
                  channelImage={videoById.channelImage}
                  channelName={videoById.channelName}
                  channelSubscribers={videoById.channelSubscribers}
                  Description={videoById.description}
                />
              </div>

              <Divider />
            </div>
          </div>
        </section>

        <section className="sidebar-r">
          <div className="sidebar-r__heading">Related Videos</div>

          <div className="videos-v">
           {/* related Videos */}
          </div>
        </section>
      </div>
    </>
  );
}
