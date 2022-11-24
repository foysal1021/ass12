import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const PhoneDetails = () => {
  const details = useLoaderData();
  console.log(details);
  return (
    <>
      {details.map((detail) => (
        <div className="card lg:w-1/2 mx-auto bg-base-200 my-10 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={detail.img} alt="Shoes" className="rounded-xl w-1/3" />
          </figure>
          <div className="card-body items-center ">
            <div className=" ">
              <h3 className=" text-2xl mb-2 font-semibold"> {detail.name} </h3>
              <p> - price : ৳{detail.price}</p>
              <p> - Orginal Price : ৳{detail.orginalPrice}</p>
              <p> - Used Years : {detail.usedYears}</p>
              <p> - Post Date {detail.postDate}</p>
            </div>
            <Link className=" btn btn-info btn-md w-2/4 mx-auto">
              {" "}
              Book Now
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default PhoneDetails;
