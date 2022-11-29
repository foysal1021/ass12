import React from "react";

const AllBuyer = () => {
  return (
    <div>
      <h3> All Users</h3>
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
            <tr className="hover">
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
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
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBuyer;
