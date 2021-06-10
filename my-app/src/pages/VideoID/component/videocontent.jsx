import { AiFillHeart } from "react-icons/ai";
import { MdPlaylistAdd, MdWatchLater } from "react-icons/md";

import { useData } from "../../../context/data/video";

export function VideoHead({ name, views, likes, video }) {
  const {
    state: { watchLaterVideos },
    dispatch,
  } = useData();
  const { _id: id } = video;

  const checkVideoInWatchLater = watchLaterVideos.find(
    (video) => video._id === id
  );

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
                      dispatch({
                        type: "ADD_TO_WATCH_LATER",
                        payload: video,
                      })
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
