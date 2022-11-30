import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const AllBuyer = () => {
  const { user } = useContext(AuthContext);
  const userEmail = user?.email;
  const { data: allusers = [], refetch } = useQuery({
    queryKey: ["all user"],
    queryFn: async () => {
      const res = await fetch("https://server-two-xi.vercel.app/all-user");
      const allusers = await res.json();
      return allusers;
    },
  });

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
                  {users.role ? (
                    <button className=" btn btn-xs bg-[#0276ac] border-none">
                      {" "}
                      Admin
                    </button>
                  ) : (
                    <button
                      onClick={() => mackadmin(users._id)}
                      className=" btn btn-xs bg-[#0276ac] border-none"
                    >
                      {" "}
                      Mack Admin
                    </button>
                  )}
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
