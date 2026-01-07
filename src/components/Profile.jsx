import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProfile } from "../api/portfolioapi";
import NeuralBackground from "./NeuralBackground";

export default function Profile()
{
  const [profile, setProfile] = useState(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const navigate = useNavigate();

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
            <h2 className="modal-title">Get in Touch</h2>
            <div className="modal-body">
              <p><strong>Email:</strong> <a href={`mailto:${profile.email || 'safir.jameel@gmail.com'}`}>{profile.email || 'safir.jameel@gmail.com'}</a></p>
              <p><strong>Phone:</strong> {profile.phone || '+46 707217399'}</p>
              {profile.location && <p><strong>Location:</strong> {profile.location}</p>}
              <hr className="modal-divider" />
              <div className="social-links">
                <a href="https://linkedin.com/in/safir-jameel" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/sjmcode" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
              <p className="modal-note">Searching for remote | Hybrid opportunities.</p>
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
              View Projects
            </button>
            <button
              className="btn-secondary"
              onClick={() => setIsContactModalOpen(true)}
            >
              Contact Me
            </button>
          </div>

          {/* About Section */}
          <div className="about-card animate-slide-up delay-4">
            <h3>About Me</h3>
            <p>{profile.about || 'I’m a Full-Stack .NET Developer passionate about building scalable and reliable web applications. My skill set includes C#, ASP.NET, React, TypeScript, Tailwind CSS, and Azure services. I currently work remotely at Brototype, contributing to end-to-end web solutions. I hold a Master of Science in Computer and Systems Sciences and am based in Sweden.'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
