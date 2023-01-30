import React from "react";
import "./eventInfo.css";
function EventInfo({ right }) {
  return (
    <div className={right ? "r-event d-flex d-col" : "event d-flex d-col"}>
      <span className="month">January</span>
      <span className="sub-heading">Brief</span>
      <span className="text">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
        provident saepe voluptate quod, vitae error.
      </span>
    </div>
  );
}

export default EventInfo;
