import React from "react";
import Manubar from "./Manubar";

const Navbar = () => {
  return (
    <div>
      <div className=" flex justify-between">
        <div> logo </div>
        <div> login</div>
      </div>
      <Manubar></Manubar>
    </div>
  );
};

export default Navbar;
