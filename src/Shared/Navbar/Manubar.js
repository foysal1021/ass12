import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Manubar = () => {
  const { user } = useContext(AuthContext);

  const { data: adsProduct = [] } = useQuery({
    queryKey: ["Advertiseditems"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/advertisedProduct");
      const items = await res.json();
      return items;
    },
  });
  // console.log(adsProduct.length > 0 && "ok");

  const navItem = (
    <>
      <li>
        {" "}
        <Link to="/">Home</Link>{" "}
      </li>
      {user?.uid && (
        <li>
          {" "}
          <Link to="/dashboard"> Dashboard</Link>
        </li>
      )}

      <li>
        {" "}
        <Link to="/blog"> Blog</Link>
      </li>
      <li>
        {" "}
        {adsProduct.length > 0 && (
          <Link to="/Advertiseditems"> Advertised items </Link>
        )}
      </li>
    </>
  );
  return (
    <div className="navbar  text-[20px] bg-[#00a4cf] rounded">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItem}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{navItem}</ul>
      </div>
      <div className="navbar-end"></div>
      <label
        htmlFor="dashboard-drower"
        tabIndex={1}
        className="btn btn-ghost lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>
    </div>
  );
};

export default Manubar;
