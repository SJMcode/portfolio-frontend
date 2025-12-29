import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <NavLink to="/" className="nav-logo">
      <svg width="40" height="40" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="90" fill="#2563eb" />
        <text x="100" y="130" fontFamily="Arial, sans-serif" fontSize="80" fontWeight="bold" fill="white" textAnchor="middle">SJ</text>
      </svg>
    </NavLink>
        <NavLink to="/experience" className="nav-item">Experience</NavLink>
        <NavLink to="/skills" className="nav-item">Skills</NavLink>
        <NavLink to="/projects" className="nav-item">Projects</NavLink>
      </div>
    </nav>
  );
}
