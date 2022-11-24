import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";

const Brand = () => {
  const { data: brands = [] } = useQuery({
    queryKey: ["brand"],
    queryFn: async () => {
      const res = await fetch("brand.json");
      const data = await res.json();
      return data;
    },
  });
  console.log(brands);
  return (
    <div>
      <h3> Used Smartphone Brands For You</h3>
      <div className=" grid grid-cols-5 gap-5 ">
        {brands?.map((brand, i) => (
          <div className="card bg-base-300 shadow-xl">
            <figure className="p-5">
              <img src={brand.img} alt="Shoes" className="rounded-xl w-5/6" />
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brand;
