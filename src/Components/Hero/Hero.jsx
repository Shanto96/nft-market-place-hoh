import React from "react";
import "./hero.css";
import HB from "../../img/heartBeat.png";
import Eth from "../../img/ethereum.png";
import User from "../../img/user.jpeg";
import Nft1 from "../../img/nftImg2.jpg";
import Nft2 from "../../img/nftImg1.jpg";
import Star from "../../img/star.png";
import StarBlue from "../../img/starblue.png";
import Rlogo from "../../img/roundLogo.png";
import Line from "../../img/curvedLine.png";

import { BsArrowRight } from "react-icons/bs";
function Hero() {
  return (
    <div className="hero d-flex">
      <div className="h-left ">
        {" "}
        <h2 className="heading">
          Super NFT
          <span>Marketplace</span>
        </h2>
        <img src={HB} alt="" />
        <span className="hero-description">
          The largest and unique Super rare NFT marketplace For
          crypto-collectibles
        </span>
        <div className="hero-btn-container">
          <button className="btn">Connect Wallet</button>
          <button>
            Create NFT <BsArrowRight />
          </button>
        </div>
        <span className="sub-heading">Last 7 days popular search</span>
        <div className="d-flex d-col">
          <div className="hero-btns-container">
            <button className="btn btn-border">All</button>
            <button className="btn btn-border">Music</button>
            <button className="btn btn-border">3d Abstract</button>
          </div>
          <div className="hero-btns-container">
            <button className="btn btn-border">Sports</button>
            <button className="btn btn-border">Cartoon</button>
            <button className="btn btn-border">Virtual World</button>
            <button className="btn btn-border">Classic</button>
          </div>
        </div>
      </div>
      <div className="h-right">
        <div className="h-crypto-container">
          <div className="crypto-container-info">
            <span> 210 Digital Artwork</span>
            <span className="eth-price">
              <img src={Eth} alt="" /> 3.2 ETH{" "}
            </span>
            <img src="" alt="" />
            <div className="crypto-img">
              <img src={Nft1} alt="" />
            </div>
            <span>Golden Hour</span>
            <span className="user">
              <img src={User} alt="" className="c-user" />
              John Doe
            </span>
          </div>
        </div>{" "}
        <div className="h-crypto-container second-crypto">
          <div className="crypto-container-info">
            <span> 210 Digital Artwork</span>
            <span className="eth-price">
              <img src={Eth} alt="" /> 3.2 ETH{" "}
            </span>
            <div className="crypto-img">
              {" "}
              <img src={Nft2} alt="" />{" "}
            </div>

            <span>Golden Hour</span>
            <span className="user">
              <img src={User} alt="" className="c-user" />
              John Doe
            </span>
          </div>
        </div>
      </div>
      <div className="blur blur1"></div>
      <div className="blur blur2"></div>
      <img src={Star} alt="" className="absolute starw1" />
      <img src={StarBlue} alt="" className="absolute star1" />
      <img src={StarBlue} alt="" className="absolute star2" />
      <img src={StarBlue} alt="" className="absolute star3" />
      <img src={StarBlue} alt="" className="absolute star4" />
      <img src={StarBlue} alt="" className="absolute star5" />
      <img src={StarBlue} alt="" className="absolute star6" />

      <img src={Rlogo} alt="" className="absolute r-logo" />
      <img src={Line} alt="" className="absolute line" />
    </div>
  );
}

export default Hero;
