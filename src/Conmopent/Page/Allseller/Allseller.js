import { useQuery } from "@tanstack/react-query";
import React from "react";

const Allseller = () => {
  const { data: allsellers = [] } = useQuery({
    queryKey: ["allseller"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/allsellers");
      const sellers = res.json();
      return sellers;
    },
  });

  return (
    <div className=" my-10 ">
      <h3 className=" text-2xl font-bold my-10"> All Sellers </h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th> Admin</th>
              <th> Action</th>
            </tr>
          </thead>
          <tbody>
            {allsellers.map((seller, i) => (
              <tr className="hover" key={seller._id}>
                <th>{i + 1}</th>
                <td>{seller.name}</td>
                <td>{seller.email}</td>
                <td>
                  <button className=" btn btn-xs bg-[#0276ac] border-none">
                    {" "}
                    Mack Admin
                  </button>
                </td>
                <td>
                  {" "}
                  <button className=" btn btn-xs btn-error"> delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Allseller;
