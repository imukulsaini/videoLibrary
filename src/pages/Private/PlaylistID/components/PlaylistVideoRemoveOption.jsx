import { useAuth } from "../../../../context/auth/auth";
import { usePlaylist } from "../../../../context/Playlist/playlist";
import { removePlaylistVideo } from "../../../../api/api";
import { useState } from "react";
import { LoadingSpinner } from "../../../components/Spinner/LoadingSpinner";

export function PlaylistVideoRemoveOption({ videoID, playlistID, buttonText }) {
  const {
    authState: { userID, token },
  } = useAuth();
  const [loading, setLoading] = useState("idle");
  const { playlistDispatch } = usePlaylist();
  const [error, setError] = useState("");

  async function removeVideoInPlaylist(videoID, playlistID) {
    setLoading("pending");
    const response = await removePlaylistVideo(
      userID,
      token,
      videoID,
      playlistID
    );
    if (response.errMessage) {
      setError(response.errMessage);
      setLoading("fulfilled");
    } else {
      playlistDispatch({
        type: "REMOVE_VIDEO_FROM_PLAYLIST",
        payload: {
          videoID,
          playlist: response,
        },
      });
      setLoading("fulfilled");
    }
  }

  return (
    <div
      onClick={() => removeVideoInPlaylist(videoID, playlistID)}
      className="playlist__options-items"
    >
      <button className="dropdown-option__btn"> {buttonText}</button>
      {loading === "pending" && (
        <span className="loading-indicator__spin">
          <LoadingSpinner color={"white"} isDefaultCss={false} size={13} />
        </span>
      )}
    </div>
  );
}
