import React from "react";
import "../../Global.css";
import "./About.css";
import Education from "./Education";
import Interests from "./Interests";
import Hobbies from "./Hobbies";

function About() {
  return (
    <div className="about">

      <h1 className='heading'>
        {"< About />"}
      </h1>

      <div className="about-description">

        <Education />

        <Interests
          interests={[
            "Full-Stack Development",
            "Web Application Development",
            "Artificial Intelligence",
            "Machine Learning",
            "Generative AI",
            "Cloud Computing",
            "System Design",
            "Problem Solving",
            "Hackathons",
            "Competitive Programming"
          ]}
        />

        <Hobbies
          hobbies={[
            "Exploring New Technologies",
            "Reading Tech Blogs",
            "Learning New Programming Languages",
            "Building Projects",
            "Reading Tech Articles",
            "Playing Guitar",
            "Cooking",
            "Listening to Music",
            "Fitness",
            "Badminton",
            "Chess"
          ]}
        />

      </div>

    </div>
  );
}

export default About;