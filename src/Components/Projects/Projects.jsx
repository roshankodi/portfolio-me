import React from 'react'
import '../../Global.css'
import './Projects.css'
import ProjectContainer from './ProjectContainer'

function Projects({

projects = [

{
title: "StudySync",
description:
"AI-powered personalized learning platform with document analysis, quiz generation, AI summaries, learning analytics and secure authentication.",
technologies: [
"Next.js",
"TypeScript",
"Prisma",
"Supabase",
"Gemini AI",
"Redis",
"tRPC"
],
image: "./images/studysync.png",
github: "https://github.com/roshankodi/StudySync",
demo: "https://studysync-8v0b.onrender.com"
},

{
title: "SyncTalk",
description:
"Real-time chat application with room-based messaging, persistent chat history, authentication, dark/light mode support and a responsive user interface built for seamless communication.",
technologies: [
"React",
"Vite",
"Tailwind CSS",
"Socket.IO",
"Node.js",
"Express.js",
"MongoDB"
],
image: "./images/synctalk.png",
github: "https://github.com/roshankodi/SyncTalk",
demo: "https://synctalk.vercel.app"
},

{
title: "Car Price Prediction",
description:
"Machine learning web application that predicts car resale prices using data preprocessing, feature engineering and regression models integrated through a Flask backend.",
technologies: [
"Python",
"Flask",
"Pandas",
"NumPy",
"Scikit-Learn",
"Bootstrap"
],
image: "./images/carprediction.png",
github: "https://github.com/roshankodi/car-price-prediction",
demo: "https://car-price-prediction-vert.vercel.app"
},

{
title: "Portfolio Website",
description:
"Modern responsive developer portfolio built with React.js showcasing projects, certifications, skills, achievements and downloadable resume support with clean UI/UX.",
technologies: [
"React",
"JavaScript",
"HTML",
"CSS",
"Git",
"GitHub Pages",
"Responsive Design"
],
image: "./images/portfolio.png",
github: "https://github.com/roshankodi/portfolio-me",
demo: "https://roshankodi.github.io/portfolio-me/"
}

]

}) {

return (

<div className="projects">

<h1 className='heading'>
{"< Projects />"}
</h1>

<div className="projects-description">

{projects.map((project,index)=>(

<ProjectContainer
key={index}
project={project}
/>

))}

</div>

</div>

)

}

export default Projects