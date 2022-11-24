import React from "react";
import { useLoaderData } from "react-router-dom";

const BrandDetails = () => {
  const data = useLoaderData();
  console.log(data[0].brandName);
  return (
    <div>
      <h3> total phone {data.length} </h3>
    </div>
  );
};

export default BrandDetails;
