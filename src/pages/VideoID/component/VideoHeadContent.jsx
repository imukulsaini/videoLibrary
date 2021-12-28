import { AiFillHeart } from "react-icons/ai";
import { MdPlaylistAdd, MdWatchLater } from "react-icons/md";
import { useWatchLater } from "../../../context/watchLater/watchLater";
import { useLike } from "../../../context/likeVideo/likeVideo";
import { useAuth } from "../../../context/auth/auth";
import { useVideosData } from "../../../context/video.js/video";
import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { PlaylistNameShow } from "../../Private/PlayList/components/PlaylistNamesShow";
import { CreatePlaylist } from "../../Private/PlayList/components/PlaylistCreate";
import {
  addToLikeInServer,
  addToWatchLaterVideoInServer,
  removeLike,
} from "../../../api/api";

export function VideoHead({
  name,
  views,
  videoID,
  likes,
  userLikeVideo,
  userWatch,
}) {
  const [likedByUser, setUserLike] = useState(userLikeVideo);
  const [watchByUser, setUserWatch] = useState(false);
  const [isPlaylistModal, setPlaylistModal] = useState(false);

  const { watchLaterDispatch } = useWatchLater();
  const {
    authState: { userID, token, isUserLogin },
  } = useAuth();
  const { likeDispatch } = useLike();
  const { videoDispatch } = useVideosData();
  const [error, setError] = useState("");

  useEffect(() => {
    setUserWatch(userWatch);
  }, [userWatch]);

  async function addToWatchLaterVideos(userID, token, videoID) {
    const response = await addToWatchLaterVideoInServer(userID, token, videoID);
    if (response.errMessage) {
      setError(response.errMessage);
    } else {
      setUserWatch(true);
      watchLaterDispatch({
        type: "ADD_TO_WATCH_LATER",
        payload: response,
      });
    }
  }

  async function addToLikedVideo(videoID) {
    console.log("log hus ah");
    const response = await addToLikeInServer(userID, token, videoID);
    if (response.errMessage) {
      setError(response.errMessage);
    } else {
      setUserLike(true);
      likeDispatch({
        type: "ADD_TO_LIKED_VIDEO",
        payload: response,
      });
      videoDispatch({
        type: "VIDEO_LIKED_BY_USER",
        payload: {
          userID,
          videoID,
        },
      });
    }
  }

  async function removeLikeFromVideo(videoID) {
    const response = await removeLike(userID, token, videoID);
    if (response?.errMessage) {
      setError(response.errMessage);
    } else {
      setUserLike(false);
      likeDispatch({
        type: "REMOVE_FROM_LIKED_VIDEO",
        payload: videoID,
      });
      videoDispatch({
        type: "VIDEO_DISLIKE_BY_USER",
        payload: {
          userID,
          videoID,
        },
      });
    }
  }

  function playlistModalOpen() {
    setPlaylistModal(true);
  }
  function playlistModalClose() {
    setPlaylistModal(false);
  }
  return (
    <>
      <span className="videoID__head-name">{name}</span>

      <div className="videoID__head-container">
        <div className="videoHead__info">
          <span className="video-card__views">{views} views</span>●
          <span className="video-card__date">2 weeks ago</span>
        </div>

        <div className="videoHead__menu">
          <ul className="videoHead__menu-list">
            <li className="videoHead__menu-item">
              {likedByUser ? (
                <div
                  onClick={() => isUserLogin && removeLikeFromVideo(videoID)}
                  className="videoHead__icon"
                >
                  <AiFillHeart
                    size="1.5rem"
                    style={{ color: "#fc7551" }}
                    className="icon"
                  />

                  <span className="videoHead__icon-name">{likes} </span>
                </div>
              ) : (
                <div
                  onClick={() => isUserLogin && addToLikedVideo(videoID)}
                  className="videoHead__icon"
                >
                  <AiFillHeart size="1.5rem" className="icon" />

                  <span className="videoHead__icon-name ">{likes} </span>
                </div>
              )}
            </li>

            <li className="videoHead__menu-item">
              <div className="videoHead__icon">
                <MdPlaylistAdd
                  size="1.5rem"
                  onClick={()=> isUserLogin && playlistModalOpen()}
                  className="icon"
                />
                <span className="videoHead__icon-name">SAVE</span>
              </div>
            </li>

            <li className="videoHead__menu-item">
              {watchByUser ? (
                <div className="videoHead__icon">
                  <MdWatchLater
                    size="1.5rem"
                    style={{ color: "#fc7551" }}
                    className="icon"
                  />

                  <span className="videoHead__icon-name"> Added </span>
                </div>
              ) : (
                <div className="videoHead__icon">
                  <MdWatchLater
                    size="1.5rem"
                    onClick={() =>
                      isUserLogin &&
                      addToWatchLaterVideos(userID, token, videoID)
                    }
                    className="icon"
                  />
                  <span className="videoHead__icon-name"> watch Later </span>
                </div>
              )}
            </li>
          </ul>
        </div>

        {isPlaylistModal && (
          <>
            <div onClick={playlistModalClose} className="playlist-back"></div>

            <div className="videoID__playlist-modal">
              <div className="videoID__playlist-head">
                <span className="videoID__playlist-hname">Save to ....</span>
                <div
                  onClick={playlistModalClose}
                  className="videoID__playlist-close"
                >
                  <MdClose className="icon" />
                </div>
              </div>

              <div className="videoID__playlist-names">
                <PlaylistNameShow isToggleHidden={false} videoID={videoID} />
              </div>

              <CreatePlaylist />
            </div>
          </>
        )}
      </div>
    </>
  );
}
