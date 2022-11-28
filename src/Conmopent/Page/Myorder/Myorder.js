import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const Myorder = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;
  //   console.log(email);

  const [myOrders, setMyorders] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/myorder/${email}`)
      .then((res) => res.json())
      .then((data) => setMyorders(data));
  }, [email]);

  // console.log(myOrders);

  return (
    <div>
      <h3> My Orders</h3>
      <table className="table w-full">
        <thead>
          <tr className=" text-center">
            <th className=" "></th>
            <th className=" ">Image</th>
            <th className=" ">Brand</th>
            <th className=" ">Model</th>
            <th className=" ">Price</th>
            <th className=" ">Action</th>
          </tr>
        </thead>
        <tbody>
          {myOrders.map((orders, index) => (
            <tr className=" hover text-center" key={orders._id}>
              {" "}
              <td className=" ">{index + 1}</td>
              <td className=" w-1/12 ">
                {" "}
                <img className="" src={orders.img} alt="" />{" "}
              </td>
              <td className=" ">{orders.brand}</td>
              <td className=" ">{orders.productName}</td>
              <td className=" ">{orders.price}</td>
              <td className=" ">
                <button className=" btn btn-xs btn-error">Cancle</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Myorder;
