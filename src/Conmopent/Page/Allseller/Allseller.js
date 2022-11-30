import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const Allseller = () => {
  const { user } = useContext(AuthContext);
  const userEmail = user?.email;
  const { data: allsellers = [], refetch } = useQuery({
    queryKey: ["allseller"],
    queryFn: async () => {
      const res = await fetch("https://server-two-xi.vercel.app/allsellers");
      const sellers = res.json();
      return sellers;
    },
  });
  //delete user
  const deleteUser = (id) => {
    fetch(`https://server-two-xi.vercel.app/users/${id}=${userEmail}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          refetch();
        }
      });
  };
  console.log(allsellers);
  // mack admin
  const mackadmin = (id) => {
    fetch(`https://server-two-xi.vercel.app/users/admin/${id}=${userEmail}`)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          refetch();
        }
      });
  };
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
                  {seller.role ? (
                    <button className=" btn btn-xs bg-[#0276ac] border-none">
                      {" "}
                      Admin
                    </button>
                  ) : (
                    <button
                      onClick={() => mackadmin(seller._id)}
                      className=" btn btn-xs bg-[#0276ac] border-none"
                    >
                      {" "}
                      Mack Admin
                    </button>
                  )}
                </td>
                <td onClick={() => deleteUser(seller._id)}>
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
