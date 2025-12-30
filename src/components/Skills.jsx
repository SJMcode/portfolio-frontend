import { useEffect, useState } from "react";
import { getSkills } from "../api/portfolioapi";

export default function Skills() {
  const [skills, setSkills] = useState(null);

  useEffect(() => {
    getSkills().then(setSkills);
  }, []);

  if (!skills) return <div className="portfolio">Loading...</div>;

  return (
    <div className="portfolio">
      <h2 className="section-title">Tech Stack</h2>

      <ul className="skills"> {skills.map((skill, index) => ( <li key={`${index}-${skill.name}`}>{skill.name}</li> ))} </ul>
    </div>
  );
}
