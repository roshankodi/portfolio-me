import React from 'react'
import '../../Global.css'
import './ProjectContainer.css'
import Pill from '../Pill/Pill'

function ProjectContainer({ project }) {

return (

<div className="project-container">

<div className="project-image">

<img
src={project.image}
alt={project.title}
/>

</div>

<div className="content">

<h2>{project.title}</h2>

<p>{project.description}</p>

<div className="technologies">

{project.technologies.map((technology,index)=>(

<Pill
key={index}
content={technology}
/>

))}

</div>

<div className="project-buttons">

<a
className="github-btn"
href={project.github}
target="_blank"
rel="noreferrer"
>
GitHub
</a>

{project.demo && (

<a
className="demo-btn"
href={project.demo}
target="_blank"
rel="noreferrer"
>
Live Demo
</a>

)}

</div>

</div>

</div>

)

}

export default ProjectContainer