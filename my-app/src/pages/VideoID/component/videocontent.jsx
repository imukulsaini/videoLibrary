import { AiFillHeart } from "react-icons/ai";
import { MdPlaylistAdd, MdWatchLater } from "react-icons/md";

import { useData } from "../../../context/data/video";
import { useAuth } from "../../../context/data/auth/auth";
import axios from "axios";


export function VideoHead({ name, views, likes, video }) {
  const {
    state: { watchLaterVideos },
    dispatch,
  } = useData();

  const { userData, token } = useAuth();

  const { _id: id } = video;

  const checkVideoInWatchLater = watchLaterVideos.find(
    (video) => video._id === id
  );

  async function addToWatchLaterVideoInServer(userID, token, videoID) {
    const url =
      `https://video-library-2.mukulsaini02.repl.co/v1/${userID}/watch-later`;
    const headers = {
      authorization: token,
    };

    const response = await axios.post(
      url,
      {
        videoId: videoID,
      },
      { headers }
    );
    if (response.status === 200) {
      return response.data.watchLaterVideo;
    }
  }

  async function addToWatchLaterVideos(userID, token, videoID) {


    const response = await addToWatchLaterVideoInServer(userID, token, videoID);

    if (response) {
      dispatch({
        type: "ADD_TO_WATCH_LATER",
        payload: response,
      });
    }
  }
  return (
    <>
      <span className="video-content__name">{name}</span>

      <div className="video-content__container">
        <div className="video-content__info">
          <span className="video-card__views">{views} views</span>●
          <span className="video-card__date">2 weeks ago</span>
        </div>

        <div className="video-content__menu">
          <ul className="video-content__menu-list">
            <li className="video-content__menu-item">
              <div className="video-content__icon">
                <AiFillHeart className="icon" />
                <span className="video-content__icon-name">{likes} </span>
              </div>
            </li>

            <li className="video-content__menu-item">
              <div className="video-content__icon">
                <MdPlaylistAdd className="icon" />
                <span className="video-content__icon-name">SAVE</span>
              </div>
            </li>

            <li className="video-content__menu-item">
              {checkVideoInWatchLater ? (
                <div className="video-content__icon">
                  <MdWatchLater style={{ color: "white" }} className="icon" />

                  <span className="video-content__icon-name"> Added </span>
                </div>
              ) : (
                <div className="video-content__icon">
                  <MdWatchLater
                    onClick={() =>
                      addToWatchLaterVideos(userData._id, token, video._id)
                    }
                    className="icon"
                  />
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
