import React from 'react';

function HoursBlock() {
  return (
    <span className="hours-block">
      <span className="hours-row">
        <span className="hours-days">Mon - Sat</span>
        <span className="hours-colon" aria-hidden="true">:</span>
        <span className="hours-time">9:30 AM–6:30 PM</span>
      </span>
      <span className="hours-row">
        <span className="hours-days">Sun</span>
        <span className="hours-colon" aria-hidden="true">:</span>
        <span className="hours-time">Closed</span>
      </span>
    </span>
  );
}

export default HoursBlock;
