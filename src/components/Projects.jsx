import { useEffect, useState } from "react";
import { getProjects } from "../api/portfolioapi";
import NeuralBackground from "../components/NeuralBackground";

export default function Projects() {
  const [projects, setProjects] = useState(null);
  
  useEffect(() => {
    getProjects().then(setProjects);
  }, []);

  if (!projects) {
    return (
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
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #C7B8EA 0%, #73A6AD 50%, #277D76 100%)',
      position: 'relative',
      paddingTop: '80px' // Space for navbar
    }}>
      {/* Neural Network Background */}
      <NeuralBackground />

      {/* Projects Content ONLY */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        padding: '4rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h2 style={{
          fontSize: '3rem',
          textAlign: 'center',
          color: '#fff',
          marginBottom: '1rem',
          fontWeight: 700,
          textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
        }}>
          My Projects
        </h2>
        
        <p style={{
          textAlign: 'center',
          color: '#fff',
          fontSize: '1.2rem',
          marginBottom: '3rem',
          opacity: 0.9
        }}>
          Here are some of my recent works
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {projects.map((project, index) => (
            <div 
              key={`${project.title}-${index}`}
              style={{
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                borderRadius: '12px',
                padding: '2rem',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s, box-shadow 0.3s',
                cursor: 'pointer',
                pointerEvents: 'auto'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 48px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
              }}
            >
              <h3 style={{
                fontSize: '1.5rem',
                color: '#277D76',
                marginBottom: '1rem',
                fontWeight: 600
              }}>
                {project.title}
              </h3>

              <p style={{
                color: '#333',
                lineHeight: 1.6,
                marginBottom: '1rem'
              }}>
                {project.description}
              </p>

              {project.techStack && (
                <div style={{
                  marginBottom: '1rem'
                }}>
                  <strong style={{ color: '#277D76' }}>Tech Stack:</strong>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    marginTop: '0.5rem'
                  }}>
                    {project.techStack.split(',').map((tech, i) => (
                      <span
                        key={i}
                        style={{
                          background: 'rgba(39, 125, 118, 0.1)',
                          color: '#277D76',
                          padding: '0.25rem 0.75rem',
                          borderRadius: '12px',
                          fontSize: '0.85rem',
                          fontWeight: 500,
                          border: '1px solid rgba(39, 125, 118, 0.2)'
                        }}
                      >
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {project.gitHubUrl && (
                <a 
                  href={project.gitHubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    background: '#277D76',
                    color: 'white',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    transition: 'background 0.3s',
                    marginTop: '0.5rem'
                  }}
                  onMouseEnter={(e) => e.target.style.background = '#1f5f5a'}
                  onMouseLeave={(e) => e.target.style.background = '#277D76'}
                >
                  View Project →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}