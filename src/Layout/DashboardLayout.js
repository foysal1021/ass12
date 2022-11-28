import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider/AuthProvider";
import Navbar from "../Shared/Navbar/Navbar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const userEmail = user?.email;
  const [isSeller, setisSeller] = useState(null);
  const [isGoogleSeller, setisGoogleSeller] = useState({});

  //..........normal user............//
  //==================================//
  useEffect(() => {
    fetch(`http://localhost:5000/user/${userEmail}`)
      .then((res) => res.json())
      .then((datas) => {
        datas.map((data) => setisSeller(data));
      });
  }, [userEmail]);

  // google user
  // user/google/:id
  useEffect(() => {
    fetch(`http://localhost:5000/user/google/${userEmail}`)
      .then((res) => res.json())
      .then((datas) => {
        datas.map((data) => setisGoogleSeller(data));
      });
  }, [userEmail]);

  //...........Add Product............//
  //=================================//

  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drower"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content ">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drower" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {/* {isGoogleSeller?.user === "google" && <li> ok </li>} */}

            {isSeller?.seller === "NO" || isGoogleSeller?.user === "google" ? (
              <>
                {" "}
                <li>
                  {" "}
                  <Link className=" btn btn-info" to="/dashboard/myorders">
                    {" "}
                    My Order
                  </Link>
                </li>
              </>
            ) : (
              <></>
            )}

            {isSeller?.seller === "YES" && (
              <>
                <li>
                  {" "}
                  <Link to="/dashboard/my-product"> My Product </Link>
                </li>
                <li>
                  {" "}
                  <Link to="/dashboard/addproduct"> Add Product </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
