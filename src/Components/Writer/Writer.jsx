import React from "react";
import "./writer.css";
import NFT1 from "../../img/nftImg1.jpg";
import NFT2 from "../../img/nftImg2.jpg";
import NFT3 from "../../img/nftImg3.jpg";

function Writer() {
  return (
    <div className="writer">
      <span>Created By</span>
      <span> James Watson</span>
      <div className="writer-img-container">
        <div className="w-nft ">
          <img src={NFT3} alt="" />
        </div>
        <div className="w-nft-container d-flex d-col">
          <div className="w-nft">
            <img src={NFT2} alt="" />
          </div>
          <div className="w-nft">
            <img src={NFT1} alt="" />
          </div>
        </div>
      </div>
      <span className="sub-heading">Punk Art Collection</span>
      <span>
        created by <span className="w-name">James Watson</span>
      </span>
    </div>
  );
}

export default Writer;
