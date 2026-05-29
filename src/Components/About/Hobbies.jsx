import React from 'react'
import "../../Global.css";
import "./Interests.css";
import Pill from "../Pill/Pill";

function Hobbies({ hobbies }) {
  return (
    <div className="interests">

      <h2>{"< Hobbies />"}</h2>

      <div className="interests-description">

        {hobbies.map((hobby,index)=>(

          <Pill
            key={index}
            content={hobby}
          />

        ))}

      </div>

    </div>
  )
}

export default Hobbies