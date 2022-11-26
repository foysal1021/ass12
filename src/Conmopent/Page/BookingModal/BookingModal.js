import React, { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
const BookingModal = ({ details }) => {
  const { user } = useContext(AuthContext);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
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
          <h3 className="text-lg font-bold mb-5">{details.name}</h3>
          <form
            className=" grid grid-rows-1 gap-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="form-control w-full">
              <input
                type="text"
                defaultValue={user?.displayName}
                readOnly
                {...register("name", { required: "Your Name" })}
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control w-full">
              <input
                type="email"
                defaultValue={user?.email}
                readOnly
                {...register("email", { required: "Your email" })}
                className="input input-bordered w-full "
              />
            </div>
            <div className="form-control w-full">
              <input
                type="text"
                defaultValue={` ৳ ${details.price}`}
                readOnly
                {...register("price", { required: "price" })}
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
            </div>
            <div className="form-control w-full">
              <input
                type="text"
                placeholder="Type Your Addrage"
                {...register("addrage", { required: "type addrage" })}
                className="input input-bordered w-full "
              />
            </div>

            <input className=" btn btn-info w-full" type="submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
