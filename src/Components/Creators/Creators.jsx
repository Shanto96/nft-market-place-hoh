import React from "react";
import Creator from "./Creator/Creator";
import "./creators.css";
function Creators() {
  return (
    <div className="creators d-flex d-col ">
      <div className="au-info">
        <span className="heading">Our Creators</span>
        <br />
        <span>
          The largest and unique Super rare NFT marketplace For
          crypto-collectibles
        </span>
      </div>
      <div className="creators-container d-flex">
        <Creator />
        <Creator />
        <Creator />
        <Creator />
        <Creator />
        <Creator />
        <Creator />
        <Creator />
        <Creator />
      </div>
      <button className="btn border-btn">Explore More</button>
    </div>
  );
}

export default Creators;
