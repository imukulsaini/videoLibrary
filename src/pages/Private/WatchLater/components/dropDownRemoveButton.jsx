import { useWatchLater } from "../../../../context/watchLater/watchLater";
import { MdWatchLater } from "react-icons/md";
import { removeWatchLaterVideoFromServer } from "../../../../api/api";
import { useAuth } from "../../../../context/auth/auth";
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

export function DropDownRemoveButton({ videoID, buttonText }) {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("idle");
  const { watchLaterDispatch } = useWatchLater();
  const {
    authState: { token, userID },
  } = useAuth();

  async function removeFromWatchLater(userID, token, videoID) {
    setLoading("pending");
    const response = await removeWatchLaterVideoFromServer(
      userID,
      token,
      videoID
    );
    if (response.errMessage) {
      setError(response.errMessage);
      setLoading("rejected");
    } else {
      setLoading("fulfilled");
      watchLaterDispatch({
        type: "REMOVE_VIDEO_FROM_WATCH_LATER",
        payload: videoID,
      });
    }
  }

  return (
    <div
      onClick={() => removeFromWatchLater(userID, token, videoID)}
      className="watch__options-items"
    >
      <MdWatchLater color="white" className="option-icon " />

      {loading === "idle" && (
        <button className="dropdown-option__btn">{buttonText}</button>
      )}
      {loading === "pending" && (
        <span className="loading-indicator__spin">
          <ClipLoader color={"white"} loading size={13} />
        </span>
      )}
    </div>
  );
}
