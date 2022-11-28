import React from "react";
import bannerImg from "../../../Assat/Img/smartphone.14bb354.png";

const Banner = () => {
  return (
    <div className=" flex justify-between items-center mt-20">
      <div className=" text-6xl font-bold">
        <p>SELL YOUR</p>
        <p className=" my-5 text-[#00a4cf]">SMARTPHONE</p>
        <p>FOR QUICK CASH</p>
      </div>
      <div>
        <img src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
