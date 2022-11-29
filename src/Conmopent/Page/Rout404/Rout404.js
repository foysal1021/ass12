import React from "react";
import { Link } from "react-router-dom";
import errorImg from "../../../Assat/Img/error404.png";

const Rout404 = () => {
  return (
    <div className=" flex justify-center items-center">
      <div className=" text-center">
        <img src={errorImg} alt="" />
        <Link to="/" className=" btn border-none bg-[#0276ac] ">
          {" "}
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default Rout404;
