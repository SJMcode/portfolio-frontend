import { useEffect, useState } from "react";
import { getSkills } from "../api/portfolioapi";

export default function Skills()
{
  const [skills, setSkills] = useState(null);

  useEffect(() =>
  {
    getSkills().then(setSkills);
  }, []);

  if (!skills) return <div className="portfolio">Loading...</div>;

  return (
    <div className="portfolio">
      <h2 className="section-title">Tech Stack</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <span className="skill-badge" key={`${index}-${skill.name}`}>
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
}
