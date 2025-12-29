import { useEffect, useState } from "react";
import { getProjects } from "../api/portfolioapi";

export default function Projects() {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    getProjects().then(setProjects);
  }, []);

  if (!projects) return <div className="portfolio">Loading...</div>;

  return (
    <div className="portfolio">
      <h2 className="section-title">Projects</h2>

      {projects.map((project, index) => (
        <div className="item" key={`${project.title}-${index}`}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>

          {project.techStack && (
            <p><strong>Tech:</strong> {project.techStack}</p>
          )}

          {project.gitHubUrl && (
            <p>
              <a href={project.gitHubUrl} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
