import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <NavLink to="/" className="nav-logo">
  <span className="logo-code">&lt;/&gt;</span>
  <span className="logo-name">SJ</span>
</NavLink>

    
        <NavLink to="/experience" className="nav-item">Experience</NavLink>
        <NavLink to="/skills" className="nav-item">Skills</NavLink>
        <NavLink to="/projects" className="nav-item">Projects</NavLink>
      </div>
    </nav>
  );
}
