import ReactPlayer from "react-player";
import "./videocard.css";

export function VideoCard() {
  return (
    <>
      <div style={{ color: "white" }} className="video-card-v">
        <div className="video-card-v__player">
          <ReactPlayer
            controls
            playing="true"
            width="100%"
            height="100%"
            className="react-player-card"
            url="https://www.youtube.com/watch?v=bEid8tWexKo"
            light="https://laravelnews.imgix.net/images/airdrop-for-laravel.png"
          />
        </div>

        <div className="video-card-v__head">
          <span className="video-card-v__head-name">Andy william</span>

          <div className="video-card-v__avatar">
            <img
              alt=""
              className="video-card-v__head-image"
              src="https://pbs.twimg.com/profile_images/1372310949458112512/Isl5HmGT_400x400.jpg"
            />
          </div>
        </div>

        <span className="video-card-v__name">
          Basic how to ride your bicycle comfortable Basic how to ride your
          bicycle conformable
        </span>

        <div className="video-card-v__info">
          <span className="video-card-v__views">53k views</span>●
          <span className="video-card-v__date">2 weeks ago</span>
        </div>
        
      </div>
    </>
  );
}
