import React from 'react'
import "../../Global.css";
import "./Education.css";
import Timeline from "../Timeline/Timeline";

function Education() {
  return (
    <div className="education">

      <h2>{"< Education />"}</h2>

      <Timeline
        events={[

          {
            date: "2024 - Present",
            title: "Bachelor of Technology (B.Tech) - Computer Science Engineering",
            description: "Jawaharlal Nehru Technological University Hyderabad (JNTUH)"
          },

          {
            date: "2022 - 2024",
            title: "CBSE - Senior Secondary Education (Class XII) | MPC",
            description: "Kendriya Vidyalaya, CRPF"
          },

          {
            date: "2022",
            title: "CBSE - Secondary Education (Class X)",
            description: "Kendriya Vidyalaya, CRPF"
          }

        ]}
      />

    </div>
  )
}

export default Education