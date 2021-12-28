import { useState } from "react";
import { togglePlayListVideo } from "../../../../api/api";
import { useAuth } from "../../../../context/auth/auth";
import { usePlaylist } from "../../../../context/Playlist/playlist";

export function PlaylistNameToggleCheck({
  checkVideoInPlaylist,
  playlistID,
  videoID,
}) {
  const [videoAddedInPlayList, setVideoInPlaylist] = useState(true);
  const [error, setError] = useState("");
  const { playlistDispatch } = usePlaylist();
  const {
    authState: { userID, token },
  } = useAuth();

  async function togglePlaylist(videoID, playlistID) {
    const response = await togglePlayListVideo(
      userID,
      token,
      videoID,
      playlistID
    );
    if (response.errMessage) {
      setError(response.errMessage);
    } else {
      playlistDispatch({
        type: "TOGGLE_VIDEO_IN_PLAYLIST",
        payload: response,
      });
      setVideoInPlaylist((videoAddedInPlayList) => !videoAddedInPlayList);
    }
  }

  return (
    <input
      onChange={() => togglePlaylist(videoID, playlistID)}
      defaultChecked={
        checkVideoInPlaylist ? videoAddedInPlayList : !videoAddedInPlayList
      }
      value={
        checkVideoInPlaylist ? videoAddedInPlayList : !videoAddedInPlayList
      }
      type="checkbox"
    />
  );
}
