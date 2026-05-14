import React from "react";
import "../../Global.css";
import "./Skills.css";
import SkillContainer from "./SkillContainer";

function Skills({
  programming_languages = ["JavaScript", "Python", "Java", "C++", "C", "MySQL"],
  database = ["MongoDB", "MySQL", "Firebase", "PostgreSQL", "Oracle SQL"],
  web_technologies = ["HTML", "CSS", "React", "Node.js", "Express"],
  frameworks = ["reactjs", "bootstrap", "firebase", "reactjs", "vite"],
  tools = ["Git", "GitHub", "VS Code", "Cursor", "Jupyter", "Docker"],
  cloud = ["AWS", "Google Cloud", "Vercel", "Netlify", "Firebase"],
  soft = ["Problem-Solving", "Critical-Thinking", "Adaptability", "Team-work", "Consistency"],
  AI = ["PyTorch", "openai", "tensorflow", "genai", "NumPy", "Pandas", "Scikit-learn"],
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
        <SkillContainer title="soft" skills={soft} />
        <SkillContainer title="AI/ML" skills={AI} />
    </div>
    </div>
  );
}

export default Skills;
