import { Link } from "react-router-dom";
import reactLogo from "assets/logo.svg";

export default function Header() {
  return (
    <header className="header flex items-center justify-between px-4 py-2 w-full border-b-2">
        <div className="header-containe"r>
            <Link to="/" className="nav-button flex items-center gap-1 h-20">
                <img src={reactLogo} alt="React logo" className="site-header__logo h-1/2" />
                <h1 className="site-header__title font-bold">My ReactMovie</h1>
            </Link>
        </div>
    </header>
  );
}

