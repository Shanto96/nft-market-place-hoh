import React from "react";
import Eth from "../../img/ethereum.png";
import User from "../../img/user.jpeg";
import Nft1 from "../../img/nft1.jpeg";

function NftBid() {
  return (
    <div className="h-crypto-container a-crypto-container">
      <div className="crypto-container-info">
        <div className="title d-flex">
          <div className="info d-flex d-col">
            <span> 210 Digital Artwork</span>
            <span className="eth-price">
              <img src={Eth} alt="" /> 3.2 ETH{" "}
            </span>
          </div>
          <button className="bid-btn">Place Bid</button>
        </div>

        <img src="" alt="" />
        <div className="crypto-img">
          <img src={Nft1} alt="" />
        </div>
        <div className=" auc-user-info d-flex">
          <div className="d-flex d-col">
            <span>Golden Hour</span>
            <span className="user">
              <img src={User} alt="" className="c-user" />
              John Doe
            </span>
          </div>
          <div className="bid-img-container">
            <img src={User} alt="" className="c-user" />
            <img src={User} alt="" className="c-user" />
            <img src={User} alt="" className="c-user" />
            <img src={User} alt="" className="c-user" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NftBid;
