import { useQuery } from "@tanstack/react-query";
import React from "react";

const AllBuyer = () => {
  const { data: allusers = [], refetch } = useQuery({
    queryKey: ["all user"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/all-user");
      const allusers = await res.json();
      return allusers;
    },
  });

  const deleteUser = (id) => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          refetch();
        }
      });
  };

  return (
    <div className=" mt-10">
      <h3 className=" text-xl font-semibold mb-10"> All Users</h3>
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
            {allusers.map((users, i) => (
              <tr className="hover" key={i}>
                <th>{i + 1}</th>
                <td>{users.name}</td>
                <td>{users.email}</td>
                <td>
                  <button className=" btn btn-xs bg-[#0276ac] border-none">
                    {" "}
                    Mack Admin
                  </button>
                </td>
                <td onClick={() => deleteUser(users._id)}>
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

export default AllBuyer;
