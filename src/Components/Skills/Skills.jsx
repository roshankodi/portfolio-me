import React from "react";
import "../../Global.css";
import "./Skills.css";
import SkillContainer from "./SkillContainer";

function Skills({

programming_languages = [
"Java",
"Python",
"JavaScript",
"C",
"SQL"
],

fundamentals = [
"Data Structures & Algorithms",
"Object-Oriented Programming",
"Database Management Systems",
"Operating Systems",
"Computer Networks",
"Software Engineering"
],

web_technologies = [
"HTML5",
"CSS3",
"JavaScript",
"REST APIs",
"JSON",
"Responsive Design"
],

frameworks = [
"React",
"Next.js",
"Node.js",
"Express.js",
"Tailwind CSS",
"Bootstrap",
"Flask"
],

database = [
"MongoDB",
"MySQL",
"PostgreSQL",
"Firebase"
],

tools = [
"Git",
"GitHub",
"VS Code",
"Postman",
"Docker",
"Jupyter Notebook"
],

cloud = [
"AWS",
"Google Cloud",
"Vercel",
"Netlify",
"Render"
],

ai = [
"Generative AI",
"Machine Learning",
"NumPy",
"Pandas",
"Scikit-Learn",
"TensorFlow",
"PyTorch"
],

soft = [
"Communication",
"Problem Solving",
"Critical Thinking",
"Team Collaboration",
"Adaptability",
"Professional Work Skills",
"Personal Effectiveness"
]

}) {

return (

<div className="skills">

<h1 className='heading'>
{"< Skills />"}
</h1>

<div className="skills-description">

<SkillContainer
title="Programming Languages"
skills={programming_languages}
/>

<SkillContainer
title="Core CS Fundamentals"
skills={fundamentals}
/>

<SkillContainer
title="Web Technologies"
skills={web_technologies}
/>

<SkillContainer
title="Frameworks & Libraries"
skills={frameworks}
/>

<SkillContainer
title="Databases"
skills={database}
/>

<SkillContainer
title="Tools"
skills={tools}
/>

<SkillContainer
title="Cloud"
skills={cloud}
/>

<SkillContainer
title="AI / ML"
skills={ai}
/>

<SkillContainer
title="Soft Skills"
skills={soft}
/>

</div>

</div>

)

}

export default Skills;