import React from "react";
import Writer from "../Writer/Writer";
import BlueStar from "../BlueStar/BlueStar";
import "./writers.css";
function writers() {
  return (
    <div className="writers d-flex d-col">
      <div className="blur"></div>
      <BlueStar />
      <BlueStar />
      <BlueStar />

      <div className="au-info">
        <span className="heading">Top Collections</span>
        <br />
        <span>
          The largest and unique Super rare NFT marketplace For
          crypto-collectibles
        </span>
      </div>
      <div className="writer-items d-flex">
        <Writer />
        <Writer />
        <Writer />
      </div>
      <button className="btn border-btn">Explore More</button>
    </div>
  );
}

export default writers;
