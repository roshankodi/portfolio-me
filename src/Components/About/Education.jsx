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
            date: "2022 - 2024",
            title: "Central Board of Secondary Education (CBSE) -MBIPC",
            description: "Kendriya Vidyalaya, CRPF"
            },
            {
            date: "2022",
            title: "Central Board of Secondary Education (CBSE)",
            description: "Kendriya Vidyalaya, CRPF"
            }
        ]} />
    </div>
  )
}

export default Education
