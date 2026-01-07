import { useEffect, useState } from "react";
import { getSkills } from "../api/portfolioapi";
import { useLanguage } from "../contexts/LanguageContext";
import { useTranslation } from "../translations/translations";

export default function Skills()
{
  const [skills, setSkills] = useState([]);
  const { language } = useLanguage();
  const t = useTranslation(language);

  useEffect(() =>
  {
    getSkills().then(setSkills);
  }, []);

  if (!skills.length) return <div className="loading-state">{t('experience.loading')}</div>;

  return (
    <div className="portfolio">
      <h2 className="section-title">{t('skills.title')}</h2>
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
