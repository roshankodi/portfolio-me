import React from 'react'
import '../../Global.css'
import './Certifications.css'
import Certificate from './Certificate'

function Certifications({
    certifications = [
        {
            certificate: "AI tools and workshop",
        },
        {
            certificate: "Web development projects",
        },
        {
            certificate: "AWS Cloud",
        },
        {
            certificate: "Data Analysis",
        }
    ]
}) {

    return (
        <div className="certifications">
            <h1 className='heading'>{"<Certifications />"}</h1>

            <div className="certificates">
                {certifications.map((certificate, index) => (
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