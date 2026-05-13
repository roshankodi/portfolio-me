import React from 'react'
import "../../Global.css";
import "./Education.css";
import Timeline from "../Timeline/Timeline";

function Education() {
  return (
    <div className="education">
      <h2>{"<Education />"}</h2>
        <Timeline events={[
            {
            date: "2024 - present",
            title: "B.Tech in Computer Science Engineering",
            description: "Jawaharlal Nehru Technological University of Hyderabad (JNTUH)"
            },
            {
            date: "2018 - 2019",
            title: "Senior Secondary Education",
            description: "Kendriya Vidyalaya, CRPF"
            },
            {
            date: "2018",
            title: "School Education (1-10)",
            description: "Kendriya Vidyalaya, CRPF"
            }
        ]} />
    </div>
  )
}

export default Education
