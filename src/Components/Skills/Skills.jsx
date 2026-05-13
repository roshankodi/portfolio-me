import React from "react";
import "../../Global.css";
import "./Skills.css";
import SkillContainer from "./SkillContainer";

function Skills({
  programming_languages = ["JavaScript", "Python", "Java", "C++", "C", "MySQL"],
  database = ["MongoDB", "MySQL", "Firebase"],
  web_technologies = ["HTML", "CSS", "React", "Node.js", "Express"],
  frameworks = ["Bootstrap", "Material-UI", "jQuery"],
  tools = ["Git", "VS Code", "Cursor", "Jupyter"],
  cloud = ["AWS", "Google Cloud", "Vercel", "Netlify"],
  soft = ["Problem-Solving", "Critical-Thinking", "Adaptability", "Creativity", "Team-work", "Consistency"],
}) {
  return (
    <div className="skills">
      <h1 className='heading'>{`<Skills />`}</h1>
      <div className="skills-description">
      <SkillContainer
        title="Programming Languages"
        skills={programming_languages}
      />
        <SkillContainer title="Databases" skills={database} />
        <SkillContainer title="Web Technologies" skills={web_technologies} />
        <SkillContainer title="Frameworks" skills={frameworks} />
        <SkillContainer title="Tools" skills={tools} />
        <SkillContainer title="Cloud" skills={cloud} />
    </div>
    </div>
  );
}

export default Skills;
