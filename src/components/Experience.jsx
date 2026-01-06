import { useEffect, useState } from "react";
import { getExperience } from "../api/portfolioapi";

export default function Experience()
{
  const [experience, setExperience] = useState(null);

  useEffect(() =>
  {
    getExperience().then(setExperience);
  }, []);

  if (!experience) return <div className="portfolio">Loading...</div>;

  return (
    <div className="portfolio">
      <h2 className="section-title">Experience</h2>

      <div className="experience-timeline">
        {experience.map((job, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>
            <div className="experience-card">
              <h3>{job.role}</h3>
              <div className="company-box">
                <span className="company-name">{job.company}</span>
                <span className="period">{job.period}</span>
              </div>

              {job.responsibilities && (
                <ul>
                  {job.responsibilities.map((d, i) => (
                    <li key={i + d}>{d}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
