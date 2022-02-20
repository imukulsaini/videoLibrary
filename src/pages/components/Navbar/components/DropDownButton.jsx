import { MdArrowDropDown } from "react-icons/md";
import { RiAccountBoxFill } from "react-icons/ri";
export function DropDownButton({ openDropDownOption }) {
  return (
    <button onClick={openDropDownOption} className="nav__dropdown-btn">
      <RiAccountBoxFill />
      <MdArrowDropDown />
    </button>
  );
}
