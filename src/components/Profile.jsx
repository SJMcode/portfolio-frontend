import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProfile } from "../api/portfolioapi";
import NeuralBackground from "./NeuralBackground";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useLanguage } from "../contexts/LanguageContext";
import { useTranslation } from "../translations/translations";

export default function Profile()
{
  const [profile, setProfile] = useState(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = useTranslation(language);

  useEffect(() =>
  {
    getProfile().then(setProfile);
  }, []);

  if (!profile) return (
    <div className="loading-state">
      Loading...
    </div>
  );

  return (
    <div className="profile-page-wrapper">
      {/* Background Effect */}
      <NeuralBackground />

      {/* Contact Modal */}
      {isContactModalOpen && (
        <div className="modal-overlay" onClick={() => setIsContactModalOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setIsContactModalOpen(false)}
            >
              ×
            </button>
            <h2 className="modal-title">{t('profile.getInTouch')}</h2>
            <div className="modal-body">
              <p><strong>{t('profile.email')}:</strong> <a href={`mailto:${profile.email || 'safir.jameel@gmail.com'}`}>{profile.email || 'safir.jameel@gmail.com'}</a></p>
              <p><strong>{t('profile.phone')}:</strong> {profile.phone || '+46 707217399'}</p>
              {profile.location && <p><strong>{t('profile.location')}:</strong> {profile.location}</p>}
              <hr className="modal-divider" />
              <div className="social-links">
                <a href="https://linkedin.com/in/safir-jameel" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin /> LinkedIn
                </a>
                <a href="https://github.com/sjmcode" target="_blank" rel="noopener noreferrer">
                  <FaGithub /> GitHub
                </a>
              </div>
              <p className="modal-note">{t('profile.searchingFor')}</p>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="profile-container">
        {/* Profile Card */}
        <div className="profile-card">
          {/* Profile Image */}
          <div className="profile-img-container animate-slide-up">
            <img
              src="https://raw.githubusercontent.com/SJMcode/portfolio-assets/5b2e12a0f9fa26892ca686b56f11e0e90c0078d0/profile_nordic_hackahon.jpg"
              alt={profile.name}
              className="profile-img"
            />
          </div>

          <h1 className="profile-name animate-slide-up delay-1">{profile.name}</h1>
          <h2 className="profile-title animate-slide-up delay-2">{profile.title}</h2>

          <div className="btn-group animate-slide-up delay-3">
            <button
              className="btn-primary"
              onClick={() => navigate('/projects')}
            >
              {t('profile.viewProjects')}
            </button>
            <button
              className="btn-secondary"
              onClick={() => setIsContactModalOpen(true)}
            >
              {t('profile.contactMe')}
            </button>
          </div>

          {/* About Section */}
          <div className="about-card animate-slide-up delay-4">
            <h3>{t('profile.aboutMe')}</h3>
            <p>{profile.about || t('profile.aboutText')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
