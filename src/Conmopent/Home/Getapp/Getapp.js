import React from "react";
import img from "../../../Assat/Img/survey-application-1936954-1637160-removebg-preview.png";

const Getapp = () => {
  return (
    <div className=" flex justify-between items-center px-4 mt-20 bg-[#00a4cf] rounded">
      <div className=" w-1/2">
        {" "}
        <img className=" " src={img} alt="" />{" "}
      </div>
      <div className=" w-1/2">
        <h3 className=" mb-2 text-3xl font-bold"> Download Our App</h3>
        <p className=" text-[20px]">
          Buying & Selling is easier from our app too! To <br></br>buy or sell
          on the go, download our app.
        </p>
      </div>
    </div>
  );
};

export default Getapp;
