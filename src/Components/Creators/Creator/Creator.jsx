import React from "react";
import "./creator.css";
import User from "../../../img/user.jpeg";
import Eth from "../../../img/ethereum.png";

function Creator() {
  return (
    <div className="creator  d-flex">
      <img src={User} className="cr-user" alt="" />
      <div className="creator-info d-flex d-col">
        <span className="creator-name">Emerson Philips</span>
        <span>
          <img src={Eth} alt="" /> 3.2 ETH{" "}
        </span>
      </div>
      <span className="follow">Follow</span>
    </div>
  );
}

export default Creator;
