import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const AdsBookingModal = ({ details }) => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const userOrder = {
      orderId: details._id,
      email: data.email,
      buyerName: data.name,
      phone: data.phone,
      productName: data.productName,
      price: data.price,
      location: data.addrage,
      img: details.img,
      brand: details.brandName,
      sellstatus: "Ads",
    };
    console.log(userOrder);
    fetch(`http://localhost:5000/order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userOrder),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <>
      <input type="checkbox" id="adsBookingmodal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="adsBookingmodal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3> Ads Booking Modal</h3>
          <form
            className=" grid grid-rows-1 gap-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="form-control w-full">
              <input
                type="text"
                defaultValue={details.name}
                readOnly
                {...register("productName", { required: true })}
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control w-full">
              <input
                type="text"
                defaultValue={user?.displayName}
                readOnly
                {...register("name", { required: true })}
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control w-full">
              <input
                type="email"
                defaultValue={user?.email}
                readOnly
                {...register("email", { required: true })}
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control w-full">
              <input
                type="text"
                defaultValue={` ৳ ${details.price}`}
                readOnly
                {...register("price", { required: true })}
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control w-full">
              <input
                type="number"
                placeholder="Type Phone Number"
                {...register("phone", { required: "type phone" })}
                className="input input-bordered w-full "
              />
              <label className="label">
                {errors.phone && (
                  <span className=" text-red-600"> {errors.phone.message}</span>
                )}
              </label>
            </div>
            <div className="form-control w-full">
              <input
                type="text"
                placeholder="Type Your Location"
                {...register("addrage", { required: "type addrage" })}
                className="input input-bordered w-full "
              />
              <label className="label">
                {errors.addrage && (
                  <span className=" text-red-600">
                    {" "}
                    {errors.addrage.message}
                  </span>
                )}
              </label>
            </div>

            <input
              className=" btn btn-info w-full"
              type="submit"
              value="Book Now"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default AdsBookingModal;
