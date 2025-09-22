import { Link } from "react-router-dom";
import reactLogo from "assets/logo.svg";
import "./Header.css";

import LoginButton from "components/Button/LoginButton";


export default function Header() {
  return (
    <header className="header flex items-center justify-between px-4 py-2 w-full">
        <div className="header-container flex items-center gap-1 w-3/12 h-20">
            <img src={reactLogo} alt="React logo" className="site-header__logo h-1/2" />
            <h1 className="site-header__title">My ReactMovie</h1>
        </div>
        <div className="navbar w-6/12 flex justify-end">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/login" className="nav-button">
                        <LoginButton />
                    </Link>
                </li>
            </ul>
        </div>
    </header>
  );
}

