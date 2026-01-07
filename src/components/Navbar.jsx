import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useTheme } from "../contexts/ThemeContext";

export default function Navbar()
{
  const { theme, toggleTheme } = useTheme();

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

      <div className="theme-toggle-wrapper">
        <span className="theme-label">🌙</span>
        <label className="theme-switch">
          <input
            type="checkbox"
            checked={theme === 'light'}
            onChange={toggleTheme}
            aria-label="Toggle theme"
          />
          <span className="slider"></span>
        </label>
        <span className="theme-label">☀️</span>
      </div>
    </nav>
  );
}
