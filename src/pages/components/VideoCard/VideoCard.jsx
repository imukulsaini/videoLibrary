import "./videocards.styles.css";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import { DropDownOptionButton } from "./component/dropdownoptionbutton";
export function VideoCards({
  isvideoCardTypeHorizontal,
  videoData,
  isDropDownShow,
  children,
}) {
  const { videoID, thumbnail, channelImage, channelName, views, title } =
    videoData;
  return (
    <>
      <div
        className={isvideoCardTypeHorizontal ? `video-card-H` : `video-card`}
      >
        <div
          className={
            isvideoCardTypeHorizontal
              ? `video-card__player-H`
              : `video-card__player`
          }
        >
          <Link to={`/watch/${videoID}`}>
            <ReactPlayer
              // controls
              // playing="true"
              width="100%"
              height="100%"
              className="react-player-card"
              url={`https://www.youtube.com/watch?v=${videoID}`}
              // url={thumbnail}
              // light={true}
              light={thumbnail}
            />
          </Link>
        </div>

        <div
          className={
            isvideoCardTypeHorizontal
              ? `video-card__content-H`
              : `video-card__content`
          }
        >
          <div className="video-card__head">
            <span className="video-card__head-name">{channelName}</span>

            {!isvideoCardTypeHorizontal && (
              <div className="video-card__avatar">
                <img
                  alt=""
                  className="video-card__head-image"
                  src={channelImage}
                />
              </div>
            )}
          </div>

          <div className="video-card__title">
            <h3 className="video-card__name">{title}</h3>
          </div>

          <div className="video-card__info">
            <span className="video-card__views">{views} K views</span>●
            <span className="video-card__date">2 weeks ago</span>
          </div>
        </div>
        {isDropDownShow && (
          <DropDownOptionButton>{children}</DropDownOptionButton>
        )}
      </div>
    </>
  );
}
