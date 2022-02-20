import { MdAccountCircle } from "react-icons/md";
import { useNavigate } from "react-router";


export function NavSignIn() {
    
    const navigate = useNavigate();

  return (
    <div onClick={() => navigate("/login")} className="nav__login">
      <MdAccountCircle className="account__icon" />
      <span className="nav__icon-name"> SIGN IN </span>
    </div>
  );
}
