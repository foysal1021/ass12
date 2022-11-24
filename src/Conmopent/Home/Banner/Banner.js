import React from "react";
import bannerImg from "../../../Assat/Img/smartphone.14bb354.png";

const Banner = () => {
  return (
    <div className=" flex justify-between items-center ">
      <div>
        {" "}
        SELL YOUR <br></br> <span> SMARTPHONE</span> <br></br> FOR QUICK CASH
      </div>
      <div>
        <img src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
