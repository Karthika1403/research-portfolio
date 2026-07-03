import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">

      <div className="nav-container">

        <Link to="/" className="logo">
          <span className="logo-blue">Karthika's</span>
          <span>Research</span>
        </Link>

        <nav className="nav-links">

          <NavLink to="/">Home</NavLink>

          <div className="dropdown">

            <span className="dropdown-title">
              Research ▾
            </span>

            <div className="dropdown-menu">

              <Link to="/research/crmm-r">
                CRMM-R
              </Link>

              <Link to="/research/project-2">
                Machine Unlearning
              </Link>

            </div>

          </div>

          <a
            href="/Karthika_S_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-link"
          >
            Resume
          </a>

        </nav>

      </div>

    </header>
  );
}