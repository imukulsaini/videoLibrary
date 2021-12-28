import { useAuth } from "../../../../context/auth/auth";
import { usePlaylist } from "../../../../context/Playlist/playlist";
import { removePlaylistVideo } from "../../../../api/api";
import { useState } from "react";
import { MdPlaylistAdd } from "react-icons/md";

export function PlaylistVideoRemoveOption({ videoID, playlistID, buttonText }) {
  const {
    authState: { userID, token },
  } = useAuth();
  const { playlistDispatch } = usePlaylist();
  const [error, setError] = useState("");

  async function removeVideoInPlaylist(videoID, playlistID) {
    const response = await removePlaylistVideo(
      userID,
      token,
      videoID,
      playlistID
    );
    if (response.errMessage) {
      setError(response.errMessage);
      console.log(response.errMessage);
    } else {
      playlistDispatch({
        type: "REMOVE_VIDEO_FROM_PLAYLIST",
        payload: {
          videoID,
          playlist: response,
        },
      });
    }
  }

  return (
    <div
      onClick={() => removeVideoInPlaylist(videoID, playlistID)}
      className="playlist__options-items"
    >
      <MdPlaylistAdd color="white" className="option-icon watch-later " />
      <button className="dropdown-option__btn"> {buttonText}</button>
    </div>
  );
}
