import React from 'react'
import '../../Global.css'
import './Projects.css'
import ProjectContainer from './ProjectContainer'

function Projects({

projects = [

{
title: "StudySync",
description:
"AI-powered personalized learning platform featuring document analysis, intelligent tutoring, quiz generation, learning analytics, RAG pipelines, vector search, and secure authentication.",
technologies: [
"Next.js",
"TypeScript",
"Prisma",
"PostgreSQL",
"Redis",
"Gemini AI",
"Qdrant",
"tRPC"
],
image: "./images/studysync.png",
github: "https://github.com/roshankodi/StudySync",
demo: "https://studysync-v2.onrender.com"
},

{
title: "SyncSolve",
description:
"Full-stack puzzle and strategy platform featuring Sudoku solving, Chess position analysis, puzzle validation, and algorithm-driven problem-solving powered by Spring Boot and Next.js.",
technologies: [
"Next.js",
"React",
"TypeScript",
"Java",
"Spring Boot",
"REST API",
"Tailwind CSS"
],
image: "./images/syncsolve.png",
github: "https://github.com/roshankodi/SyncSolve",
demo: "https://sync-solve.vercel.app/"
},

{
title: "SyncTalk",
description:
"Real-time communication platform with room-based messaging, persistent chat history, authentication, dark/light mode support, and scalable WebSocket-powered architecture.",
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
"Machine learning web application that predicts used-car prices through data preprocessing, feature engineering, and regression models integrated with a Flask backend.",
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