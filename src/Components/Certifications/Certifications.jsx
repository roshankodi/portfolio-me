import React from 'react'
import '../../Global.css'
import './Certifications.css'
import Certificate from './Certificate'

function Certifications({

certificates = [

{
name: "Google AI Essentials",
issuedBy: "Google",
date: "2026",
skills: [
"Generative AI",
"Prompt Engineering",
"AI Tools"
],
link: "./certificates/google-ai-essentials.pdf"
},

{
name: "Google AI Professional",
issuedBy: "Google",
date: "2026",
skills: [
"Generative AI",
"LLMs",
"AI Applications"
],
link: "./certificates/google-ai-professional.pdf"
},

{
name: "Google Prompting Essentials",
issuedBy: "Google",
date: "2026",
skills: [
"Prompt Engineering",
"LLMs",
"AI Interaction"
],
link: "./certificates/google-prompting-essentials.pdf"
},

{
name: "Google Data Analytics with Python",
issuedBy: "Google",
date: "2026",
skills: [
"Python",
"Pandas",
"Data Analysis"
],
link: "./certificates/google-data-analysis-with-python.pdf"
},

{
name: "Google IT Automation with Python",
issuedBy: "Google",
date: "2026",
skills: [
"Python",
"Automation",
"Scripting"
],
link: "./certificates/google-it-automation.pdf"
},

{
name: "IBM AI Developer",
issuedBy: "IBM",
date: "2026",
skills: [
"Python",
"AI Development",
"Machine Learning"
],
link: "./certificates/ibm-ai-devp.pdf"
},

{
name: "IBM GenAI with LLMs",
issuedBy: "IBM",
date: "2026",
skills: [
"Generative AI",
"LLMs",
"Prompt Engineering"
],
link: "./certificates/ibm-genai-with-llm.pdf"
},

{
name: "IBM RAG & Agentic AI",
issuedBy: "IBM",
date: "2026",
skills: [
"RAG",
"Agentic AI",
"Vector Databases"
],
link: "./certificates/ibm-rag-agentic-ai.pdf"
},

{
name: "Google Cybersecurity",
issuedBy: "Google",
date: "2026",
skills: [
"Cybersecurity",
"Network Security",
"Risk Management"
],
link: "./certificates/google-cybersecurity.pdf"
},

{
name: "Microsoft Power BI Analyst",
issuedBy: "Microsoft",
date: "2026",
skills: [
"Power BI",
"Data Visualization",
"Business Intelligence"
],
link: "./certificates/microsoft-power-bi-analyst.pdf"
}

]

}) {

return (

<div className="certifications">

<h1 className='heading'>
{"< Certifications />"}
</h1>

<div className="certificates">

{certificates.map((certificate,index)=>(

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