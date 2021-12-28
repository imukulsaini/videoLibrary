import { AiFillDislike } from "react-icons/ai";
import { useLike } from "../../../../context/likeVideo/likeVideo";
import { useAuth } from "../../../../context/auth/auth";
import { useVideosData } from "../../../../context/video.js/video";
import { removeLike } from "../../../../api/api";
import { useState } from "react";

export function LikedVideoRemoveButton({ videoID, buttonText }) {
  const { likeDispatch } = useLike();
  const {
    authState: { userID, token },
  } = useAuth();
  const [error, setError] = useState("");

  const { videoDispatch } = useVideosData();

  function removeLikes(userID, token, videoID) {
    const response = removeLike(userID, token, videoID);
    if (response.errMessage) {
      setError(response.errMessage);
    } else {
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

  return (
    <div
      onClick={() => removeLikes(userID, token, videoID)}
      className="like__options-items"
    >
      <AiFillDislike color="red" className="option-icon " />

      <button className="dropdown-option__btn">{buttonText}</button>
    </div>
  );
}
