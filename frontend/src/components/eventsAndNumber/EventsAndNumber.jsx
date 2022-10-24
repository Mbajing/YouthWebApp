import React from "react";
import "./eventsAndNumber.css";
function EventsAndNumber({ total }) {
  return <span className="event-number">Events({total})</span>;
}

export default EventsAndNumber;
