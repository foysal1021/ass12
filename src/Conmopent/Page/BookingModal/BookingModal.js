import React, { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const BookingModal = ({ details }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(details);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const userOrder = {
      email: data.email,
      buyerName: data.name,
      phone: data.phone,
      productName: data.productName,
      price: data.price,
      location: data.addrage,
      img: details.img,
      brand: details.brandName,
    };
    fetch(`http://localhost:5000/order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userOrder),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("booking confirm");
          navigate("/dashboard/myorders");
          fetch(`http://localhost:5000/order/${details._id}`)
            .then((res) => res.json())
            .then((data) => console.log(data));
        }
      });
  };

  return (
    <>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className=" text-2xl font-bold text-center mb-5">
            {" "}
            Booking Now{" "}
          </h3>
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
      <Toaster></Toaster>
    </>
  );
};

export default BookingModal;
