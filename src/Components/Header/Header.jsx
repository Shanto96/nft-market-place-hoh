import React from "react";
import "./header.css";
import Logo from "../../img/logo.png";
import { CiSearch } from "react-icons/ci";
import { ImExit } from "react-icons/im";
import { BsArrowBarUp } from "react-icons/bs";

export default function Header() {
  return (
    <div className="header d-flex">
      <div className="h-logo-container">
        <img src={Logo} alt="" className="header-logo" />
      </div>
      <div className="nav">
        <ul>
          <li>Discover</li>
          <li>
            Marketplace <span className="high-light">Pro</span>
          </li>
          <li>How it Work</li>
        </ul>
      </div>
      <div className="button-container h-btn d-flex">
        <CiSearch size={"2rem"} />
        <button className="btn border-btn h-btn">Connect Wallet</button>
        <div className="e-wraper">
          <BsArrowBarUp className="" size={"1.5rem"} />
        </div>
      </div>
    </div>
  );
}
