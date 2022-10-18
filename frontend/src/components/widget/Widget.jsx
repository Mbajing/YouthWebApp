import React from "react";
import "./widget.css";

function Widget({ title, number }) {
  return (
    <div className="widget">
      <div className="widget__title">{title}</div>
      <div className="widget__data">{number}</div>
    </div>
  );
}

export default Widget;
