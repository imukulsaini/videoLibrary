import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { usePlaylist } from "../../../context/Playlist/playlist";
import { useAuth } from "../../../context/auth/auth";
import { getPlaylistVideo, removePlaylistVideo } from "../../../api/api";
import { PlaylistVideoRemoveOption } from "./components/PlaylistVideoRemoveOption";
import "./playlistID.styles.css";
import { HeadingMain } from "../../components/HeadingMain/HeadingMain";
import { LoadingSpinner } from "../../components/Spinner/LoadingSpinner";
import { VideoCards } from "../../components/VideoCard/VideoCard";
import { NavBar } from "../../components/Navbar/Nav";
import { SideBar } from "../../components/Sidebar/Sidebar";

export function PlaylistID() {
  const params = useParams();
  const {
    state: { playlistVideos, playlistNames },
    playlistDispatch,
  } = usePlaylist();
  const {
    authState: { userID, token },
  } = useAuth();
  const [loading, setLoading] = useState("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    if (userID && token) {
      setLoading("pending");
      (async function () {
        const video = await getPlaylistVideo(userID, token, params.playlistID);
        if (video.errMessage) {
          setLoading("rejected");
          setError(video.errMessage);
        } else {
          playlistDispatch({
            type: "GET_THE_PLAYLIST_VIDEOS",
            payload: video,
          });
          setLoading("fulfilled");
        }
      })();
    }
  }, [userID, token, playlistNames]);
  const playlistIDHeadName = "Playlist name : " + playlistVideos.name;
  return (
    <div className="playlist-id">
      <NavBar />
      <SideBar isSideBarShrink={false} />
      <section className="playlist-id__main">
        {loading === "pending" && (
          <LoadingSpinner isDefaultCss={true} size={30} />
        )}
        {loading === "fulfilled" && (
          <>
            <HeadingMain name={playlistIDHeadName} />

            {playlistVideos?.videos?.map((video) => {
              return (
                <div className="playlist-id__videos">
                  <VideoCards
                    isvideoCardTypeHorizontal={true}
                    videoData={video}
                    isDropDownShow={true}
                  >
                    <PlaylistVideoRemoveOption
                      videoID={video._id}
                      buttonText={"remove"}
                      playlistID={playlistVideos._id}
                    />
                  </VideoCards>
                </div>
              );
            })}
          </>
        )}
      </section>
    </div>
  );
}
