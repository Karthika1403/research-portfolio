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

        <nav>

          <NavLink to="/">Home</NavLink>

          <li className="dropdown">

  <span>Research ▾</span>

  <div className="dropdown-menu">

    <Link to="/research/crmm-r">
      CRMM-R
    </Link>

    <Link to="/research/project-2">
      Machine Unlearning
    </Link>

  </div>

</li>

          <NavLink to="/resume">Resume</NavLink>

        </nav>

      </div>

    </header>
  );
}