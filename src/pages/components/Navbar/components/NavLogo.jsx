import { Link } from "react-router-dom";
import { ReactComponent as BrandLogo } from "../../../../assets/brand-logo.svg";

export function NavLogo() {
  return (
    <div className="nav__logo">
      <Link to="/" className="nav__logo-action">
        <div className="brand__logo">
          <BrandLogo fill="#fc7551" stroke="white" />
        </div>
        <span className="brand__name">Crux Tube</span>
      </Link>
    </div>
  );
}
