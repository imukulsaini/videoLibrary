import { useState } from "react";
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
        className="drop-option__btn"
      >
        <BsThreeDotsVertical className="option-button" />
      </button>

      {isOpen && <div className="dropdown-option">{children}</div>}
    </div>
  );
}
