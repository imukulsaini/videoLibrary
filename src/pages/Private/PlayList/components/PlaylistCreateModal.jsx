import { usePlaylist } from "../../../../context/Playlist/playlist";
import { useAuth } from "../../../../context/auth/auth";
import { useState } from "react";
import { createUserPlaylist } from "../../../../api/api";
import { LoadingSpinner } from "../../../components/Spinner/LoadingSpinner";

export function CreatePlaylistModal() {
  const [playlistName, setPlaylistName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("idle");
  const {
    authState: { userID, token },
  } = useAuth();

  const { playlistDispatch } = usePlaylist();

  async function createNewPlaylist(name) {
    if (playlistName.length > 0) {
      setLoading("pending");
      const response = await createUserPlaylist(userID, token, name);
      if (response.errMessage) {
        setLoading("rejected");
        setError(response.errMessage);
      } else {
        setLoading("fulfilled");
        playlistDispatch({
          type: "CREATE_NEW_PLAYLIST_NAME",
          payload: response,
        });
        setPlaylistName("");
      }
    }
  }

  return (
    <div className="playlist__create-actions">
      <div className="playlist__create-input">
        <label className="playlist__label-name">create playlist name</label>
        <input
          onChange={(e) => setPlaylistName(e.target.value)}
          value={playlistName}
          placeholder="Enter playlist Name"
          className="playlist__input-name"
        />
      </div>
      <btn
        onClick={() => createNewPlaylist(playlistName)}
        className="playlist__create-btn"
      >
        Create Playlist
        {loading === "pending" && (
          <span className="loading-indicator__spin">
            <LoadingSpinner color={"white"} isDefaultCss={false} size={13} />
          </span>
        )}
      </btn>
    </div>
  );
}
