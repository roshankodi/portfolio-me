import React from 'react'
import './Pill.css'

function Pill({content, color=""}) {
  return (
    <div className={`pill ${color}`}>
      {content}
    </div>
  )
}

export default Pill