import React from 'react';
import './Timeline.css';
import Pill from '../Pill/Pill';

const Timeline = ({ events }) => {
  return (
    <div className="timeline">

      <ul>

        {events.map((event, index) => (

          <li key={`${event.date}-${index}`}>

            <Pill content={event.date} />

            <div className="timeline-content">

              <h3>{event.title}</h3>

              <p>{event.description}</p>

            </div>

          </li>

        ))}

      </ul>

    </div>
  );
};

export default Timeline;