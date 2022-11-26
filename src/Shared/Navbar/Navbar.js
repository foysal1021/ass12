import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import Manubar from "./Manubar";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const userLogout = () => {
    logout()
      .then(() => {})
      .catch(() => {});
  };
  return (
    <div>
      <div className=" flex justify-between items-center py-5">
        <div> logo</div>
        <div>
          {user?.uid ? (
            <Link onClick={userLogout} to="" className=" btn btn-info ">
              {" "}
              Logout
            </Link>
          ) : (
            <Link to="/login" className=" btn btn-info">
              {" "}
              Login
            </Link>
          )}
        </div>
      </div>
      <Manubar></Manubar>
    </div>
  );
};

export default Navbar;
