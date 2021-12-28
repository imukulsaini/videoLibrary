import { usePlaylist } from "../../../../context/Playlist/playlist";

import { useAuth } from "../../../../context/auth/auth";
import { useEffect } from "react";
import { PlaylistNameToggleCheck } from "./playlistToggleCheck";
import "../playlist.styles.css";
import { useState } from "react/cjs/react.development";
import { Link } from "react-router-dom";
import { CgPlayListRemove } from "react-icons/cg";
import { getUserPlaylist,removePlaylist } from "../../../../api/api";
import { LoadingSpinner } from "../../../components/Spinner/LoadingSpinner";
export function PlaylistNameShow({ videoID, isToggleHidden }) {
  const {
    authState: { userID, token },
  } = useAuth();
  const [loading, setLoading] = useState("idle");
  const [error, setError] = useState("");
  const [removeLoading, setRemoveLoading] = useState("idle");
  const [removePlaylistID, setRemovePlaylistID] = useState("");
  const {
    state: { playlistNames, playlistNamesStatus },
    playlistDispatch,
  } = usePlaylist();

 

  useEffect(() => {
    if (playlistNamesStatus !== "fulfilled") {
      setLoading("pending");

      if (userID) {
        (async function () {
          const response = await getUserPlaylist(userID, token);
          if (response.errMessage) {
            setLoading("rejected");
            setError(response.errMessage);
          } else {
            playlistDispatch({
              type: "INITIALIZE_PLAYLIST_NAMES",
              payload: response,
            });
            setLoading("fulfilled");
          }
        })();
      }
    } else {
      if (playlistNames) {
        setLoading("fulfilled");
      }
    }
  }, [userID, playlistNamesStatus]);

  async function removePlaylistName(playlistID) {
    setRemovePlaylistID(playlistID);
    setRemoveLoading("pending");
    const response = await removePlaylist(userID, token, playlistID);
    if (response.errMessage) {
      setError(response.errMessage);
      setRemoveLoading("rejected");
    } else {
      setRemoveLoading("fulfilled");
      playlistDispatch({
        type: "REMOVE_PLAYLIST_NAME",
        payload: playlistID,
      });
    }
  }

  return (
    <>
      {loading === "pending" && <LoadingSpinner isDefaultCss={true} size={30} />}

      {loading === "fulfilled" &&
        playlistNames &&
        playlistNames.map((playlist) => {
          const checkVideoInPlaylist = playlist?.videos?.some(
            (video) => video._id === videoID
          );
          return (
            <div className="playlist-names">
              <span hidden={isToggleHidden}>
                <PlaylistNameToggleCheck
                  checkVideoInPlaylist={checkVideoInPlaylist}
                  playlistID={playlist._id}
                  videoID={videoID}
                />
              </span>

              <div className="playlist-name__container">
                <span className="playlist-name">{playlist.name}</span>
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/playlist/${playlist._id}`}
                >
                  <span className="playlist__name-action">View Playlist</span>
                </Link>
              </div>

              <div className="playlist-name__remove">
                <button
                  onClick={() => removePlaylistName(playlist._id)}
                  className="playlist-remove__btn"
                >
                  {removePlaylistID === playlist._id &&
                    removeLoading === "pending" && (
                      <LoadingSpinner 
                      isDefaultCss={false}
                      color="#808191" size={16} />
                    )}
                  <CgPlayListRemove size="1.2rem" color="#4f4f5e" />
                </button>
              </div>
            </div>
          );
        })}
      {loading === "rejected" && <span>{error}</span>}
    </>
  );
}
