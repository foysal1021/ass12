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
            <Link onClick={userLogout} to="" className=" btn btn-info btn-sm">
              {" "}
              Logout
            </Link>
          ) : (
            <>
              <Link to="/login" className=" btn btn-info btn-sm">
                {" "}
                Login
              </Link>
              <Link to="/register" className=" btn btn-info btn-sm ml-5">
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
