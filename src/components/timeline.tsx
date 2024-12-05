import React from 'react';
import '../App.css';
import TimelineData, { TimelineItem } from '../data/timelineData';

const Timeline: React.FC = () => {
    return (
      <div className="timeline-container">
        <h1 className="timeline-title">My Journey</h1>
        <div className="timeline">
          {TimelineData.map((item: TimelineItem, index: number) => (
            <div key={index} className="timeline-item">
              <div className="timeline-content">
                <h2>{item.title}</h2>
                <h3>{item.company}</h3>
                <p className="timeline-date">{item.date}</p>
                <p className="timeline-location">{item.location}</p>
                {item.description && <p className="timeline-description">{item.description}</p>}
                {item.skills && <p className="timeline-skills"><strong>Skills:</strong> {item.skills}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Timeline;