import React from "react";
import "./auction.css";

import NftBid from "../NftBid/NftBid";
import BlueStar from "../BlueStar/BlueStar";
function Auction() {
  return (
    <div className="auction d-flex d-col relative">
      <BlueStar className="au-star-1" />
      <BlueStar className="au-star-2" />
      <BlueStar className="au-star-3" />
      <div className="blur"></div>

      <div className="au-info">
        <span className="heading">Live Auction</span>
        <span>
          The largest and unique Super rare NFT marketplace For
          crypto-collectibles
        </span>
      </div>
      <div className="d-flex auction-items">
        <NftBid />
        <NftBid />
        <NftBid />
      </div>
    </div>
  );
}

export default Auction;
