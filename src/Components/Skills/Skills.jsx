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
"OOP",
"DBMS",
"Operating Systems",
"Computer Networks",
"Software Engineering"
],

web_technologies = [
"HTML5",
"CSS3",
"JavaScript",
"REST APIs",
"JSON"
],

frameworks = [
"React",
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
"Jupyter Notebook",
"Postman",
"Docker"
],

cloud = [
"AWS",
"Vercel",
"Netlify",
"Render"
],

ai = [
"NumPy",
"Pandas",
"Scikit-Learn",
"PyTorch",
"TensorFlow",
"Generative AI"
],

soft = [
"Communication",
"Problem Solving",
"Crtitcal Thinking",
"Professional Work Skills",
"Team Collaboration",
"Adaptability",
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