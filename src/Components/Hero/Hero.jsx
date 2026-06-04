import "../../Global.css";
import Avatar from "../../Assets/profile.png";
import "./Hero.css";
import Pill from "../Pill/Pill";

function Hero({

name = "Kodi Roshan",

role = "Computer Science Engineering Student | Full-Stack & AI Developer",

description =
"I am a Computer Science Engineering student passionate about software engineering, full-stack development, and AI-powered applications. I build scalable web platforms, real-time systems, and intelligent software solutions that solve real-world problems. Through hands-on projects and continuous learning, I enjoy exploring modern technologies, designing efficient systems, and growing as a software engineer.",

email = "roshankodi019@gmail.com",

mobile = "+91 8985797819",

linkedin = "https://www.linkedin.com/in/kodi-roshan/",

github = "https://github.com/roshankodi",

resume = "https://roshankodi.github.io/portfolio-me/resume.pdf"

}) {

  return (
    <div className="hero">
      <div className="image">

        <div className="avatar">
          <img src={Avatar} alt={name} />
        </div>

        <a href={resume} target="_blank" rel="noreferrer">
          <Pill content="Resume" color="invert" />
        </a>

      </div>

      <div className="hero-content">

        <div className="role">
          <Pill content={role} />
        </div>

        <div className="description">

          <h1>
            Hi, I'm {name}
          </h1>

          <span>
            {description}
          </span>

        </div>

        <div className="links">

          <a
            target="_blank"
            rel="noreferrer"
            href={`mailto:${email}`}
          >
            <Pill content="Email" />
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            href={`tel:${mobile}`}
          >
            <Pill content="Call" />
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            href={linkedin}
          >
            <Pill content="LinkedIn" />
          </a>

          <a
            target="_blank"
            rel="noreferrer"
            href={github}
          >
            <Pill content="GitHub" />
          </a>

        </div>

      </div>
    </div>
  );
}

export default Hero;