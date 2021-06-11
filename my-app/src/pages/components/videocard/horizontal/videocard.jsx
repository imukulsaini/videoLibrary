import ReactPlayer from "react-player";
import "./videocard.css";

import { DropDownOptionButton } from "../component/dropdownoptionbutton";

export function VideoCard({ video ,children }) {
  
  const { thumbnail, videoId, channelName, views, title } = video;

  return (
    <>
      <div className="videos-h__card">
        <div className="videos-h__player">
          <ReactPlayer
            style={{ border: "1px solid white" }}
            controls
            playing="true"
            width="100%"
            height="100%"
            className="react-player-h"
            url={`https://www.youtube.com/watch?v=${videoId}`}
            light={thumbnail}
          />
        </div>

        <div className="videos-h__info">
          <span className="videos-h__name">{title}</span>
          <span className="video-h__channel-name">{channelName}</span>

          <span className="video-h__views">{views} views ● 10 months ago</span>
        </div>

        <DropDownOptionButton  videoId={videoId}>
        </DropDownOptionButton>
      </div>
    </>
  );
}
