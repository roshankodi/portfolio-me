import React from "react";
import "./SkillContainer.css";
import Pill from "../Pill/Pill";

function SkillContainer({ title, skills = [] }) {
  return (
    <div className="skill-container">

      <h2>{title}</h2>

      <div className="skills-list">

        {skills.map((skill, index) => (
          <Pill
            key={index}
            content={skill}
          />
        ))}

      </div>

    </div>
  );
}

export default SkillContainer;