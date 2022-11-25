import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const BrandDetails = () => {
  const Brands = useLoaderData();
  return (
    <div className="my-10">
      <h3 className=" text-2xl  font-semibold mb-10">
        Total {Brands.length} {Brands.length > 1 ? "Phones" : "Phone"}{" "}
      </h3>
      <div className=" grid grid-cols-2 lg:grid-cols-5 gap-5">
        {Brands.map((brand) => (
          <div key={brand._id} className="card bg-base-300 shadow-xl p-8">
            <figure className=" ">
              <img src={brand.img} alt="Shoes" className="rounded-xl" />
            </figure>
            <p className=" text-center"> {brand.name} </p>
            <Link
              to={`/phone-details/${brand._id}`}
              className=" btn btn-info btn-md mt-3"
            >
              {" "}
              view
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandDetails;
