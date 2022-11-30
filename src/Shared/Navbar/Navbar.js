import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import Manubar from "./Manubar";
import logo from "../../Assat/Img/logo.jpg";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const userLogout = () => {
    logout()
      .then(() => {
        navigate("/login");
      })
      .catch(() => {});
  };
  return (
    <div>
      <div className=" flex justify-between items-center">
        <div className=" flex items-center">
          {" "}
          <img className=" " src={logo} alt="" />
        </div>
        <div>
          {user?.uid ? (
            <Link onClick={userLogout} className=" flex items-center">
              <FaUser className=" mr-2" /> <span> Logout</span>
            </Link>
          ) : (
            <>
              <Link to="/login" className="  btn-sm text-[20px]">
                {" "}
                Login
              </Link>
              <Link to="/register" className="  btn-sm ml-2 text-[20px]">
                {" "}
                Register
              </Link>
            </>
          )}
        </div>
      </div>
      <Manubar></Manubar>
    </div>
  );
};

export default Navbar;
