import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className=" lg:w-1/2 mx-auto my-10 shadow-md border rounded-xl p-20">
      <h3 className=" text-center font-bold text-2xl"> Register Now</h3>{" "}
      <form className=" " onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control mb-5">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            {...register("name", { required: "Type Your Name" })}
            className="input input-bordered w-full"
          />
          <label className="label">
            {errors.name && (
              <span className=" text-red-600"> {errors.name.message}</span>
            )}
          </label>
        </div>
        <div className="form-control mb-5">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            {...register("email", { required: "Type Your Email" })}
            className="input input-bordered w-full"
          />
          <label className="label">
            {errors.email && (
              <span className=" text-red-600"> {errors.email.message}</span>
            )}
          </label>
        </div>
        <div className="form-control mb-5">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            {...register("password", { required: "Type Your Password" })}
            className="input input-bordered w-full"
          />{" "}
          <label className="label">
            {errors.password && (
              <span className=" text-red-600"> {errors.password.message}</span>
            )}
          </label>
        </div>

        <div className="form-control mb-5">
          <label className="label">
            <span className="label-text">Are You Seller?</span>
          </label>
          <select
            className="select select-bordered w-full "
            {...register("accoutStatus", { required: "Select Option" })}
          >
            <option></option>
            <option> YES </option>
            <option> NO </option>
          </select>
          <label className="label">
            {errors.accoutStatus && (
              <span className=" text-red-600">
                {" "}
                {errors.accoutStatus.message}
              </span>
            )}
          </label>
        </div>

        <input
          type="submit"
          value="Register"
          className=" btn btn-info w-full"
        />
      </form>{" "}
    </div>
  );
};

export default Register;
