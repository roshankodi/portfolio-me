import "../../Global.css";
import Avatar from "../../Assets/profile.png";
import "./Hero.css";
import Pill from "../Pill/Pill";

function Hero({
  name = "Kodi Roshan",
  role = "Computer Science Engineer",
  description = "Passionate about creating modern web experiences, exploring AI technologies, solving problems, and continuously learning through hands-on projects. I am currently seeking new opportunities to grow my skills and contribute to a team.",
  email = "roshankodi019@gmail.com",
  mobile = "+91 8985797819",
  linkedin = "https://www.linkedin.com/in/kodi-roshan-78858b356/",
  github = "https://github.com/roshankodi",
  resume = "https://resume.com",
}) {

  return (
    <div className="hero">
      <div className="image">
        <div className="avatar">
          <img src={Avatar} alt="Avatar" />
        </div>
        <a href={resume} target="_blank" rel="noreferrer">
        <Pill content="View Résumé" color="invert" />
        </a>
      </div>

      <div className="hero-content">
        <div className="role">
          <Pill content={role} />
        </div>
        <div className="description">
          <h1>Hi, I'm {name}</h1>
          <span>{description}</span>
        </div>
        <div className="links">
          <a target="_blank" rel="noreferrer" href={`mailto:${email}`}><Pill content={email} /></a>
          <a target="_blank" rel="noreferrer" href={`tel:${mobile}`}><Pill content={mobile} /></a>
          <a target="_blank" rel="noreferrer" href={linkedin}><Pill content="LinkedIn" /></a>
          <a target="_blank" rel="noreferrer" href={github}><Pill content="GitHub" /></a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
