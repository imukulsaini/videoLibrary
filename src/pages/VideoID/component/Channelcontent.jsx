import { useState } from "react";

export function ChannelContent({
  channelName,
  channelSubscribers,
  Description,
  channelImage,
}) {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <>
      <img
        className="video-content__avatar"
        alt={channelName}
        src={channelImage}
      />

      <div className="video-content__channel-info">
        <span className="video-content__channel-name">{channelName}</span>

        <span className="video-content__channel-sub">
          {channelSubscribers} subscribers
        </span>

        <span
          className={
            showDescription
              ? "video-content__hideDes"
              : "video-content__video-des"
          }
        >
          {Description}
        </span>

        <button
          onClick={() => setShowDescription(!showDescription)}
          className="video-content__show-btn"
        >
          {showDescription ? "Show Less" : "Show More"}
        </button>
      </div>
    </>
  );
}
