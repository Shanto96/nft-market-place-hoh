import React from "react";
import "./about.css";
import Elipse from "../../img/elipse.png";
import Star from "../../img/starblue.png";
function About() {
  return (
    <div className="relative d-flex jc-center w-100">
      <div className="absolute glass ab-glass"></div>
      <img src={Star} alt="" className="absolute astar1" />
      <img src={Star} alt="" className="absolute astar2" />
      <img src={Star} alt="" className="absolute astar3" />
      <img src={Star} alt="" className="absolute astar4" />
      <div className="blur blur1"></div>
      <div className="blur  ablur-2"></div>
      <div className="blur"></div>
      <div className="about d-flex">
        <div className="a-left">
          <img src={Elipse} alt="" />
        </div>
        <div className="a-right">
          <span className="heading a-heading">Why Choose Us</span>
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam fugiat
            facilis, expedita dolores magnam corrupti tenetur eius suscipit.
            Magni natus ratione fugiat voluptatibus ullam animi accusantium illo
            quis facilis magnam?
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi,
            inventore?Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Unde, perspiciatis!
          </span>
        </div>
      </div>
    </div>
  );
}

export default About;
