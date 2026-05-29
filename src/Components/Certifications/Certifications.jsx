import React from 'react'
import '../../Global.css'
import './Certifications.css'
import Certificate from './Certificate'

function Certifications({

certifications=[

{
title:"Google AI Essentials",
issuer:"Google",
date:"May 2026",
skills:[
"Generative AI",
"Prompt Engineering",
"AI Tools"
],
link:"YOUR_LINKEDIN_POST_LINK"
},

{
title:"AWS Cloud Practitioner Essentials",
issuer:"AWS",
date:"May 2026",
skills:[
"Cloud Computing",
"EC2",
"S3",
"IAM"
],
link:"YOUR_LINKEDIN_POST_LINK"
},

{
title:"Git and GitHub",
issuer:"Coursera",
date:"May 2026",
skills:[
"Git",
"GitHub",
"Version Control"
],
link:"YOUR_LINKEDIN_POST_LINK"
},

{
title:"Python for Data Science",
issuer:"IBM",
date:"May 2026",
skills:[
"Python",
"Pandas",
"NumPy",
"Data Analysis"
],
link:"YOUR_LINKEDIN_POST_LINK"
},

{
title:"Web Development Fundamentals",
issuer:"Coursera",
date:"May 2026",
skills:[
"HTML",
"CSS",
"JavaScript",
"React"
],
link:"YOUR_LINKEDIN_POST_LINK"
}

]

}) {

return (

<div className="certifications">

<h1 className='heading'>
{"< Certifications />"}
</h1>

<div className="certificates">

{certifications.map((certificate,index)=>(

<Certificate
key={index}
certificate={certificate}
/>

))}

</div>

</div>

)

}

export default Certifications