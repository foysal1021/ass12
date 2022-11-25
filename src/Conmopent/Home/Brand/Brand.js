import { useQuery } from "@tanstack/react-query";

import { Link } from "react-router-dom";

const Brand = () => {
  const { data: brands = [] } = useQuery({
    queryKey: ["brand"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/brands");
      const data = await res.json();
      return data;
    },
  });

  return (
    <div className="">
      <h3> Used Smartphone Brands For You</h3>
      <div className=" grid grid-cols-3 lg:grid-cols-5 gap-5 ">
        {brands?.map((brand) => (
          <Link
            key={brand._id}
            to={`/brand/${brand.brandName}`}
            className="card bg-base-300 shadow-xl"
          >
            <figure className="p-5">
              <img src={brand.img} alt="Shoes" className="rounded-xl w-5/6" />
            </figure>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Brand;
