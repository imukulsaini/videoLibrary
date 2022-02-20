import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useClickOutSide } from "../../../../Hooks/useClickOutside/useClickOutside";

export function DropDownOptionButton({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useClickOutSide(() => {
    setIsOpen(false);
  });

  return (
    <div
      ref={menuRef}
      // className="liked-option"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="drop-option__btn"
      >
        <BsThreeDotsVertical className="option-button" />
      </button>

      {isOpen && <div className="dropdown-option">{children}</div>}
    </div>
  );
}
