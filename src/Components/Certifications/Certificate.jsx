import React from 'react'
import '../../Global.css'
import './Certificate.css'

function Certificate({ certificate }) {

return (

<div className="certificate">

<div className="certificate-name">
<h2>{certificate.title}</h2>
</div>

<div className="certificate-from">
<p>{certificate.issuer}</p>
</div>

<div className="certificate-date">
<p>{certificate.date}</p>
</div>

<div className="certificate-skills">

{certificate.skills.map((skill,index)=>(

<span
key={index}
className="skill-pill"
>
{skill}
</span>

))}

</div>

<div className="certificate-link">

<a
href={certificate.link}
target="_blank"
rel="noreferrer"
>
View Certificate
</a>

</div>

</div>

)

}

export default Certificate