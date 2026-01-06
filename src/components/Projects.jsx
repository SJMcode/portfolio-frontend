import { useEffect, useState } from "react";
import { getProjects } from "../api/portfolioapi";
import NeuralBackground from "../components/NeuralBackground";

export default function Projects()
{
  const [projects, setProjects] = useState(null);

  useEffect(() =>
  {
    getProjects().then((fetchedProjects) =>
    {
      const flashcardsProject = {
        title: "IT Flashcards (Tech Interview)",
        description: "An interactive learning platform featuring over 2000+ interview questions, progress tracking, and quizzes across multiple technologies including React, JavaScript, and more.",
        techStack: "React, Vite, TypeScript, CSS",
        gitHubUrl: "https://github.com/sjmcode/Tech-Interview-Flashcards",
        liveUrl: "https://sjmcode.github.io/Tech-Interview-Flashcards/"
      };

      const languageUnlearnProject = {
        title: "LanguageUnlearn",
        description: "A comprehensive language learning platform specifically designed for English, German, French featuring dedicated modules for Listening, Reading, Writing, and Speaking (LRWS) with interactive exercises.",
        techStack: "React, TypeScript, CSS",
        gitHubUrl: "https://github.com/SJMcode/LanguageUnlearn"
      };

      setProjects([flashcardsProject, languageUnlearnProject, ...fetchedProjects]);
    });
  }, []);

  if (!projects)
  {
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
              onMouseEnter={(e) =>
              {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 48px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) =>
              {
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

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
                {project.gitHubUrl && (
                  <a
                    href={project.gitHubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-block',
                      background: '#333',
                      color: 'white',
                      padding: '0.6rem 1.2rem',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      fontWeight: 600,
                      fontSize: '0.85rem',
                      transition: 'background 0.3s'
                    }}
                    onMouseEnter={(e) => e.target.style.background = '#000'}
                    onMouseLeave={(e) => e.target.style.background = '#333'}
                  >
                    GitHub →
                  </a>
                )}

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-block',
                      background: '#277D76',
                      color: 'white',
                      padding: '0.6rem 1.2rem',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      fontWeight: 600,
                      fontSize: '0.85rem',
                      transition: 'background 0.3s'
                    }}
                    onMouseEnter={(e) => e.target.style.background = '#1f5f5a'}
                    onMouseLeave={(e) => e.target.style.background = '#277D76'}
                  >
                    Live Demo →
                  </a>
                )}

                {/* Legacy support for projects with only gitHubUrl but intended as principal link */}
                {!project.liveUrl && project.gitHubUrl && !project.gitHubUrl.includes('github.com') && (
                  <a
                    href={project.gitHubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-block',
                      background: '#277D76',
                      color: 'white',
                      padding: '0.6rem 1.2rem',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      fontWeight: 600,
                      fontSize: '0.85rem',
                      transition: 'background 0.3s'
                    }}
                    onMouseEnter={(e) => e.target.style.background = '#1f5f5a'}
                    onMouseLeave={(e) => e.target.style.background = '#277D76'}
                  >
                    View Project →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Publications Section */}
        <div style={{ marginTop: '5rem' }}>
          <h2 style={{
            fontSize: '3rem',
            textAlign: 'center',
            color: '#fff',
            marginBottom: '3rem',
            fontWeight: 700,
            textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
          }}>
            Publications
          </h2>

          <div style={{
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            borderRadius: '12px',
            padding: '2.5rem',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            maxWidth: '800px',
            margin: '0 auto',
            transition: 'transform 0.3s, box-shadow 0.3s',
            cursor: 'default',
            pointerEvents: 'auto'
          }}
            onMouseEnter={(e) =>
            {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 12px 48px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) =>
            {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.shadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
            }}
          >
            <h3 style={{
              fontSize: '1.8rem',
              color: '#277D76',
              marginBottom: '1rem',
              fontWeight: 600
            }}>
              Edge-Cloud Collaborative Framework for Smart IoT Applications
            </h3>

            <p style={{
              color: '#333',
              lineHeight: 1.6,
              marginBottom: '1.5rem',
              fontSize: '1.1rem'
            }}>
              Master's Thesis exploring the integration of Edge and Cloud computing to optimize IoT application performance and resource utilization.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href="https://su.diva-portal.org/smash/record.jsf?pid=diva2%3A2002079&dswid=-6813"
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
                  transition: 'background 0.3s'
                }}
                onMouseEnter={(e) => e.target.style.background = '#1f5f5a'}
                onMouseLeave={(e) => e.target.style.background = '#277D76'}
              >
                View in Diva-Portal →
              </a>

              <a
                href="https://github.com/SJMcode/iot-edge-cloud-framework"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  background: '#333',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  transition: 'background 0.3s'
                }}
                onMouseEnter={(e) => e.target.style.background = '#000'}
                onMouseLeave={(e) => e.target.style.background = '#333'}
              >
                GitHub Repository →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}