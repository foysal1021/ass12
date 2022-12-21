import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "react-router-dom";

const Brand = () => {
  const [loading, setLoading] = useState(true);
  const { data: brands = [] } = useQuery({
    queryKey: ["brand"],
    queryFn: async () => {
      const res = await fetch("https://server-two-xi.vercel.app/brands");
      const data = await res.json();
      return data;
    },
  });

  return (
    <div className=" mt-20">
      <h3 className=" text-2xl font-semibold mb-5">
        {" "}
        Used Smartphone Brands For You
      </h3>
      {loading === true && (
        <div className=" text-center">
          {" "}
          <progress className="progress w-52 "></progress>
        </div>
      )}

      <div className=" grid grid-cols-3 lg:grid-cols-5 gap-5 ">
        {brands?.map((brand) => (
          <Link
            key={brand._id}
            to={`/brand/${brand.brandName}`}
            className="card bg-base-300 shadow-xl"
          >
            <figure className="p-5">
              <img src={brand.img} alt="Shoes" className="rounded-xl w-5/6" />
              {loading === true && setLoading(false)}
            </figure>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Brand;
