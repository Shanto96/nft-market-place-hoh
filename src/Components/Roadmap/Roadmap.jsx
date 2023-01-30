import React from "react";
import BlueStar from "../BlueStar/BlueStar";
import EventInfo from "./EventInfo/EventInfo";
import "./roadmap.css";

function Roadmap() {
  return (
    <div className="roadmap d-flex d-col">
      <BlueStar />
      <BlueStar />
      <div className="blur"></div>
      <div className="blur"></div>
      <BlueStar />
      <BlueStar />
      <BlueStar />

      <div className="au-info">
        <span className="heading">Road Map 2022</span>
        <span>
          The largest and unique Super rare NFT marketplace For
          crypto-collectibles
        </span>
      </div>
      <div className="event-container d-flex">
        <div className="left-events relative">
          <div className="d-tab left-bar absolute"></div>
          <EventInfo /> <EventInfo /> <EventInfo />
        </div>
        <div className="center-line"></div>
        <div className="right-events relative">
          <div className="d-tab right-bar absolute"></div>
          <EventInfo right /> <EventInfo right /> <EventInfo right />
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
