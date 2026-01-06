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
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(to bottom, #C7B8EA 0%, #73A6AD 50%, #277D76 100%)',
      color: '#277D76',
      fontSize: '1.5rem',
      fontWeight: 600
    }}>
      Loading...
    </div>
  );

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #C7B8EA 0%, #73A6AD 50%, #277D76 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Effect */}
      <NeuralBackground />

      {/* Contact Modal */}
      {isContactModalOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.6)',
          backdropFilter: 'blur(5px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '1rem'
        }} onClick={() => setIsContactModalOpen(false)}>
          <div style={{
            background: 'white',
            padding: '2.5rem',
            borderRadius: '16px',
            maxWidth: '500px',
            width: '100%',
            position: 'relative',
            boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
            animation: 'modalSlideUp 0.3s ease-out'
          }} onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setIsContactModalOpen(false)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                border: 'none',
                background: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
                color: '#666'
              }}
            >
              ×
            </button>
            <h2 style={{ color: '#277D76', marginBottom: '1.5rem', fontSize: '1.8rem' }}>Get in Touch</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <p><strong>Email:</strong> <a href="mailto:safir.jameel@gmail.com" style={{ color: '#277D76', textDecoration: 'none' }}>safir.jameel@gmail.com</a></p>
              <p><strong>Phone:</strong> +46 707217399</p>
              {profile.location && <p><strong>Location:</strong> {profile.location}</p>}
              <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '0.5rem 0' }} />
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginTop: '0.5rem' }}>
                <a href="https://linkedin.com/in/safir-jameel" target="_blank" rel="noopener noreferrer" style={{ color: '#0077b5', textDecoration: 'none', fontWeight: 600 }}>LinkedIn</a>
                <a href="https://github.com/sjmcode" target="_blank" rel="noopener noreferrer" style={{ color: '#333', textDecoration: 'none', fontWeight: 600 }}>GitHub</a>
              </div>
              <p style={{ textAlign: 'center', color: '#666', fontSize: '0.9rem', marginTop: '1rem' }}>Searching for remote opportunities.</p>
            </div>
          </div>
          <style>{`
            @keyframes modalSlideUp {
              from { transform: translateY(20px); opacity: 0; }
              to { transform: translateY(0); opacity: 1; }
            }
          `}</style>
        </div>
      )}

      {/* Main Content */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '80px 2rem 2rem', // Space for navbar
        color: '#111'
      }}>
        {/* Profile Card */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          maxWidth: '900px',
          width: '100%'
        }}>
          {/* Profile Image */}
          <div style={{ marginBottom: '2rem' }}>
            <img
              src="https://raw.githubusercontent.com/SJMcode/portfolio-assets/5b2e12a0f9fa26892ca686b56f11e0e90c0078d0/profile_nordic_hackahon.jpg"
              alt={profile.name}
              style={{
                width: '180px',
                height: '180px',
                objectFit: 'cover',
                borderRadius: '50%',
                border: '4px solid white',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)'
              }}
            />
          </div>

          <h1 style={{
            fontSize: '4rem',
            fontWeight: 700,
            marginBottom: '0.5rem',
            color: '#fff',
            textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
          }}>
            {profile.name}
          </h1>
          <h2 style={{
            fontSize: '1.8rem',
            fontWeight: 500,
            marginBottom: '2rem',
            color: '#fff',
            opacity: 0.9
          }}>
            {profile.title}
          </h2>

          <div style={{
            display: 'flex',
            gap: '1.5rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginBottom: '3rem'
          }}>
            <button
              onClick={() => navigate('/projects')}
              style={{
                background: 'rgba(39, 125, 118, 0.95)',
                color: 'white',
                border: 'none',
                padding: '1rem 2.5rem',
                borderRadius: '12px',
                fontSize: '1.1rem',
                cursor: 'pointer',
                fontWeight: 600,
                transition: 'all 0.3s',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
              onMouseEnter={(e) =>
              {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.background = '#1f5f5a';
              }}
              onMouseLeave={(e) =>
              {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = 'rgba(39, 125, 118, 0.95)';
              }}
            >
              View Projects
            </button>
            <button
              onClick={() => setIsContactModalOpen(true)}
              style={{
                background: 'rgba(255, 255, 255, 0.95)',
                color: '#277D76',
                border: '2px solid #277D76',
                padding: '1rem 2.5rem',
                borderRadius: '12px',
                fontSize: '1.1rem',
                cursor: 'pointer',
                fontWeight: 600,
                transition: 'all 0.3s',
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
              }}
              onMouseEnter={(e) =>
              {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.background = '#fff';
              }}
              onMouseLeave={(e) =>
              {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.95)';
              }}
            >
              Contact Me
            </button>
          </div>

          {/* About Section */}
          <div style={{
            maxWidth: '800px',
            background: 'rgba(255, 255, 255, 0.9)',
            padding: '2.5rem',
            borderRadius: '20px',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            textAlign: 'left'
          }}>
            <h3 style={{
              fontSize: '2rem',
              marginBottom: '1rem',
              color: '#277D76',
              fontWeight: 700
            }}>
              About Me
            </h3>
            <p style={{
              lineHeight: 1.7,
              color: '#333',
              fontSize: '1.1rem'
            }}>
              I’m a Full-Stack .NET Developer passionate about building scalable and reliable web applications. My skill set includes C#, ASP.NET, React, TypeScript, Tailwind CSS, and Azure services. I currently work remotely at Brototype, contributing to end-to-end web solutions. I hold a Master of Science in Computer and Systems Sciences and am based in Sweden.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
