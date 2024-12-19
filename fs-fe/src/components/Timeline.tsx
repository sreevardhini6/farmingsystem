import React from 'react';

interface TimelineProps {
  steps: string[];
}

const Timeline: React.FC<TimelineProps> = ({ steps }) => {
  return (
    <div className="timeline">
      <ul>
        {steps.map((step, index) => (
          <li key={index} className="timeline-step">
            {step}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
