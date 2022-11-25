import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className=" lg:w-1/2 mx-auto my-10 shadow-md border rounded-xl p-20">
      <h3 className=" text-center font-bold text-2xl"> Login Now</h3>{" "}
      <form className=" " onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control mb-5">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            {...register("email")}
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            {...register("password")}
            className="input input-bordered w-full"
          />
          <span className="label-text-alt mt-1">
            {" "}
            <Link> Forget Password?</Link>{" "}
          </span>
        </div>

        <label className="label mt-2 mb-3">
          <span className="label-text ">
            Are you new? <Link className=" font-extrabold"> Register Now</Link>
          </span>
        </label>

        <input type="submit" value="Login" className=" btn btn-info w-full" />
      </form>{" "}
      <div className="divider">OR</div>
      <div className=" mt-5">
        {" "}
        <button className=" btn btn-outline w-full">
          {" "}
          Singin With Google{" "}
        </button>
      </div>
    </div>
  );
};

export default Login;
