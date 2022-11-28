import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const Myproduct = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;

  const [myProduct, setMyproduct] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/myproduct/${email}`)
      .then((res) => res.json())
      .then((datas) => setMyproduct(datas));
  }, [email]);

  return (
    <div className=" mt-5">
      <h3 className=" text-3xl font-semibold mb-5"> My Product </h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr className=" text-center">
              <th className=" "></th>
              <th className=" ">Image</th>
              <th className=" ">Brand</th>
              <th className=" ">Model</th>
              <th className=" ">Price</th>
              <th className=" ">Status</th>
            </tr>
          </thead>
          <tbody>
            {myProduct.map((product, i) => (
              <tr className=" hover text-center" key={product._id}>
                {" "}
                <td className=" ">{i + 1}</td>
                <td className=" w-1/12 ">
                  {" "}
                  <img className="" src={product.img} alt="" />{" "}
                </td>
                <td className=" ">{product.brandName}</td>
                <td className=" ">{product.name}</td>
                <td className=" ">৳{product.price}</td>
                <td className=" ">
                  <button className=" btn btn-xs btn-info">
                    {" "}
                    {product.status}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Myproduct;
