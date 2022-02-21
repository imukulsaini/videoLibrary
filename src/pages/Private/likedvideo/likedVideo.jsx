import "./likedVideo.css";
import { NavBar } from "../../components/Navbar/Nav";
import { SideBar } from "../../components/Sidebar/Sidebar";
import { useEffect, useState } from "react";
import { VideoCards } from "../../components/VideoCard/VideoCard";
import { LikedVideoRemoveButton } from "./components/LikedVideoRemoveButton";
import { useLike } from "../../../context/likeVideo/likeVideo";
import { useAuth } from "../../../context/auth/auth";
import { getUserLike } from "../../../api/api";
import { HeadingMain } from "../../components/HeadingMain/HeadingMain";
import { LoadingSpinner } from "../../components/Spinner/LoadingSpinner";

export function LikedVideo() {
  const {
    authState: { userID, token },
  } = useAuth();
  const [loading, setLoading] = useState("idle");
  const [error, setError] = useState("");
  const {
    state: { likedVideos },
    likeDispatch,
  } = useLike();

  useEffect(() => {
    let likeMount = true;
    setLoading("pending");
    (async function () {
      if (userID) {
        const response = await getUserLike(userID, token);
        if (!response?.errMessage) {
          setLoading("fulfilled");
          likeMount === true &&
            likeDispatch({ type: "INITIALIZE_LIKE_VIDEOS", payload: response });
        } else {
          setLoading("rejected");
          setError(response.errMessage);
        }
      }
    })();
    return () => {
      likeMount = false;
    };
  }, [userID]);

  return (
    <div className="like-video">
      <NavBar />
      <SideBar />
      <section className="like__main">
        <HeadingMain name={"Your Likes"} />
        {loading === "pending" && (
          <LoadingSpinner isDefaultCss={true} size={30} />
        )}
        {loading === "fulfilled" &&
          likedVideos &&
          likedVideos?.map((video) => (
            <div className="like-video__show">
              <VideoCards
                key={video._id}
                isvideoCardTypeHorizontal={true}
                videoData={video}
                isDropDownShow={true}
              >
                <LikedVideoRemoveButton
                  videoID={video._id}
                  buttonText={"Dislike"}
                />
              </VideoCards>
            </div>
          ))}
      </section>
    </div>
  );
}
