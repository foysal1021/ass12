import { useQuery } from "@tanstack/react-query";
import React from "react";
import AdsBookingModal from "../AdsBookingModal/AdsBookingModal";

const Advertiseditems = () => {
  const { data: adsProduct = [] } = useQuery({
    queryKey: ["Advertiseditems"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/advertisedProduct");
      const items = await res.json();
      return items;
    },
  });
  //   console.log(adsProduct);

  return (
    <div>
      <h3> Best For You </h3>
      <>
        {adsProduct.map((detail) => (
          <div
            key={detail._id}
            className="card lg:w-1/2 mx-auto bg-base-200 my-10 shadow-xl"
          >
            <figure className="px-10 pt-10">
              <img src={detail.img} alt="Shoes" className="rounded-xl w-1/3" />
            </figure>
            <div className="card-body items-center ">
              <div className=" ">
                <h3 className=" text-2xl mb-2 font-semibold">
                  {" "}
                  {detail.name}{" "}
                </h3>
                <p> - Brand : {detail.brandName}</p>
                <p> - price : ৳{detail.price}</p>
                <p> - Orginal Price : ৳{detail.orginalPrice}</p>
                <p> - Used Years : {detail.usedYears}</p>
                <p> - Post Date : {detail.postDate}</p>
                <p> - Condition : {detail.codition}</p>
                <p> - Meet Location : {detail.location}</p>
                <p> - Status : {detail.status}</p>
                <p> - Phone : {detail.phone}</p>
              </div>

              <label
                htmlFor="adsBookingmodal"
                className="btn btn-info w-2/4 mx-auto"
              >
                Book Now
              </label>
            </div>
            <AdsBookingModal details={detail}></AdsBookingModal>
          </div>
        ))}
      </>
    </div>
  );
};

export default Advertiseditems;
