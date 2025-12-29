import { useEffect, useState } from "react";
import { getExperience } from "../api/portfolioapi";

export default function Experience() {
  const [experience, setExperience] = useState(null);

  useEffect(() => {
    getExperience().then(setExperience);
  }, []);
  
  if (!experience) return <div className="portfolio">Loading...</div>;

  return (
    <div className="portfolio">
      <h2 className="section-title">Experience</h2>

      {experience.map((job, index) => (
        <div className="item" key={index}>
          <h3>{job.role}</h3>
          <p>{job.company}</p>
          <p>{job.period}</p>

          {job.responsibilities && (
            <ul>
              {job.responsibilities.map((d, i) => (
                <li key={i+d}>{d}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
