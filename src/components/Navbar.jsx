import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import { useTranslation } from "../translations/translations";

export default function Navbar()
{
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const t = useTranslation(language);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <NavLink to="/" className="nav-logo">
          <span className="logo-code">&lt;/&gt;</span>
          <span className="logo-name">SJ</span>
        </NavLink>

        <NavLink to="/experience" className="nav-item">{t('nav.experience')}</NavLink>
        <NavLink to="/skills" className="nav-item">{t('nav.skills')}</NavLink>
        <NavLink to="/projects" className="nav-item">{t('nav.projects')}</NavLink>
      </div>

      <div className="nav-right">
        {/* Language Selector */}
        <div className="language-selector">
          <button
            className={`lang-btn ${language === 'en' ? 'active' : ''}`}
            onClick={() => setLanguage('en')}
          >
            EN
          </button>
          <span className="lang-divider">|</span>
          <button
            className={`lang-btn ${language === 'swe' ? 'active' : ''}`}
            onClick={() => setLanguage('swe')}
          >
            SWE
          </button>
          <span className="lang-divider">|</span>
          <button
            className={`lang-btn ${language === 'de' ? 'active' : ''}`}
            onClick={() => setLanguage('de')}
          >
            DE
          </button>
        </div>

        {/* Theme Toggle */}
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
      </div>
    </nav>
  );
}
