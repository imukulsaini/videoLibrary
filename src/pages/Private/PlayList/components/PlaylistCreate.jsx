import {  useState } from "react";
import { CreatePlaylistModal } from "./PlaylistCreateModal";
import { AiOutlinePlus } from "react-icons/ai";

export function CreatePlaylist() {
  
  const [createPlaylistModal, setCreatePlaylist] = useState(false);

  return createPlaylistModal ? (
    <div className="playlist-create__modal">
      <CreatePlaylistModal />
    </div>
  ) : (
    <div
      onClick={() =>
        setCreatePlaylist((createPlaylistModal) => !createPlaylistModal)
      }
      className="playlist__create"
    >
      <div className="playlist__create-open">
        <AiOutlinePlus className="icon" />
      </div>
      <span className="playlist__create-name">Create new playlist </span>
    </div>
  );
}
