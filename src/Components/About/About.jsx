import React from "react";
import "../../Global.css";
import "./About.css";
import Education from "./Education";
import Interests from "./Interests";
import Hobbies from "./Hobbies";

function About() {
  return (
    <div className="about">
      <h1 className='heading'>{"<About />"}</h1>
      <div className="about-description">
        <Education />
        <Interests interests={["Web Development", "Data Science", "Full-Stack Development"
        , "Machine Learning", "Artificial Intelligence", "Cloud Computing (AWS)"]} />
        <Hobbies hobbies={["Reading", "Writing", "Playing Guitar", "Playing Badminton", "Listening to Music", "Playing video games"]} />
      </div>
    </div>
  );
}

export default About;
