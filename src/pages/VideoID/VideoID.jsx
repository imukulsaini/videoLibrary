import { useEffect, useState } from "react";
import { VideoHead } from "./component/VideoHeadContent";
import { ChannelContent } from "./component/Channelcontent";
import { Divider } from "./component/divider";
import { NavBar } from "../components/Navbar/Nav";
import { SideBar } from "../components/Sidebar/Sidebar";
import { VideoPlayer } from "./component/VideoIDPlayer";
import { useParams } from "react-router-dom";
import { useAuth } from "../../context/auth/auth";
import { useVideosData } from "../../context/video.js/video";
import { useWatchLater } from "../../context/watchLater/watchLater";
import { getVideoByID } from "../../api/api";
import "./videoID.css";
import { LoadingSpinner } from "../components/Spinner/LoadingSpinner";

function checkVideoInWatchLater(watchLaterVideos, videoID) {
  const response = watchLaterVideos?.find((video) => video._id === videoID);
  return response ? true : false;
}

export function VideoID() {
  const [videoByID, setVideoByID] = useState([]);
  const [loading, setLoading] = useState("idle");
  const [error, setError] = useState("");

  const {
    authState: { userID },
  } = useAuth();

  const params = useParams();
  const {
    state: { watchLaterVideos },
  } = useWatchLater();

  const {
    state: { videoDataAll },
  } = useVideosData();

  useEffect(() => {
    setLoading("pending");
    const findVideo = videoDataAll.find(
      (video) => video.videoID === params.videoID
    );
    if (findVideo === undefined) {
      (async function () {
        const videoResponse = await getVideoByID(params.videoID);
        if (videoResponse.errMessage) {
          setLoading("rejected");
          setError(videoResponse.errMessage);
        } else {
          setLoading("fulfilled");
          setVideoByID(videoResponse);
        }
      })();
    } else {
      setLoading("fulfilled");
      setVideoByID(findVideo);
    }
  }, [params.videoID, videoDataAll]);

  const checkisUserLikeVideo = videoByID?.likesBy?.includes(userID);
  const checkIsVideoInUserWatchLater = checkVideoInWatchLater(
    watchLaterVideos,
    videoByID._id
  );

  return (
    <>
      <div className="video-ID">
        <NavBar />

        <section className="sidebar-l">
          <SideBar isSideBarShrink={true} />
        </section>

        <section className="videoID__main">
          {loading === "pending" && (
            <LoadingSpinner isDefaultCss={true} size={30} />
          )}
          {loading === "fulfilled" && (
            <div className="videoID__content">
              <VideoPlayer videoId={videoByID.videoID} />

              <div className="videoID__head">
                {videoByID && (
                  <VideoHead
                    name={videoByID.title}
                    views={videoByID.views}
                    videoID={videoByID._id}
                    likes={videoByID.likes}
                    userLikeVideo={checkisUserLikeVideo}
                    userWatch={checkIsVideoInUserWatchLater}
                  />
                )}

                <hr />

                <div className="videoID__channel-info">
                  <ChannelContent
                    channelImage={videoByID.channelImage}
                    channelName={videoByID.channelName}
                    channelSubscribers={videoByID.channelSubscribers}
                    Description={videoByID.description}
                  />
                </div>
              </div>
            </div>
          )}
        </section>

        <section className="sidebar-r"></section>
      </div>
    </>
  );
}
