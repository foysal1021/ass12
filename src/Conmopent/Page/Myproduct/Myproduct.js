import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const Myproduct = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;

  const { data: myProduct = [], refetch } = useQuery({
    queryKey: ["myproduct", email],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/myproduct/${email}`);
      const phone = await res.json();
      return phone;
    },
  });

  // delete phone
  const DeletePhone = (id) => {
    fetch(`http://localhost:5000/phones/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          refetch();
        }
      });
  };

  // ads product find in mongodb
  const AdsProduct = (id) => {
    fetch(`http://localhost:5000/ADSid/${id}`)
      .then((res) => res.json())
      .then((datas) =>
        datas.map((data) => (
          <>
            {fetch("http://localhost:5000/adsItem", {
              method: "POST", // or 'PUT'
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            })
              .then((res) => res.json())
              .then((items) => {
                if (items.acknowledged) {
                  toast.success("ads is running");
                  refetch();
                }
              })}
          </>
        ))
      );
  };

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
              <th className=" ">Advertise</th>
              <th className=" ">Action</th>
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
                <>
                  {product.status === "available" ? (
                    <td>
                      <button
                        className=" btn btn-sm btn-success"
                        onClick={() => AdsProduct(product._id)}
                      >
                        Ads
                      </button>
                    </td>
                  ) : (
                    <td>-</td>
                  )}
                </>
                <td>
                  {" "}
                  <button
                    onClick={() => DeletePhone(product._id)}
                    className=" btn btn-xs btn-error"
                  >
                    delete
                  </button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Toaster />
      </div>
    </div>
  );
};

export default Myproduct;
