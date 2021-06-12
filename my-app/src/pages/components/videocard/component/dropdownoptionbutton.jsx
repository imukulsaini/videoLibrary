import { useState } from "react";
import { MdPlaylistAdd } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";

export function DropDownOptionButton({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      //   ref={menuRef}

      className="liked-option"
    >
      <button
        onClick={(video_id) => setIsOpen(!isOpen)}
        className="liked-option__btn"
      >
        <BsThreeDotsVertical className="option-button" />
      </button>

      {isOpen && (
        <div className="dropdown-option">
          <div className="option-items">
            <MdPlaylistAdd className="option-icon playlist " />

            <button className="dropdown-option__btn">Save to Playlist</button>
          </div>

          {children}
          
        </div>
      )}
    </div>
  );
}
