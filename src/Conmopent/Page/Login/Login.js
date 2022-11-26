import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const Login = () => {
  const { userLogin, googleLogin } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    userLogin(data.email, data.password)
      .then((result) => {
        // console.log(result);
      })
      .catch((err) => console.log(err));
  };
  ///google login
  const LoginwithGoogle = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        const googleUser = {
          email: user.email,
          name: user.displayName,
          user: "google",
        };
        fetch("http://localhost:5000/googleuser", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(googleUser),
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
      })
      .catch(() => {});
  };

  return (
    <div className=" lg:w-1/2 mx-auto my-10 shadow-md border rounded-xl p-20">
      <h3 className=" text-center font-bold text-2xl"> Login Now</h3>{" "}
      <form className=" " onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control mb-5">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            {...register("email", { required: "Type Email" })}
            className="input input-bordered w-full"
          />
          <label className="label">
            {errors.email && (
              <span className=" text-red-600"> {errors.email.message}</span>
            )}
          </label>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            {...register("password", { required: "Type Password" })}
            className="input input-bordered w-full"
          />
          <span className="label-text-alt mt-1">
            {" "}
            <Link> Forget Password?</Link>{" "}
          </span>
          <label className="label">
            {errors.password && (
              <span className=" text-red-600"> {errors.password.message}</span>
            )}
          </label>
        </div>

        <label className="label mt-2 mb-3">
          <span>
            {" "}
            Are You New?{" "}
            <Link to="/register" className=" btn btn-info btn-xs">
              {" "}
              Register
            </Link>
          </span>
        </label>

        <input type="submit" value="Login" className=" btn btn-info w-full" />
      </form>{" "}
      <div className="divider">OR</div>
      <div className=" mt-5">
        {" "}
        <button onClick={LoginwithGoogle} className=" btn btn-outline w-full">
          {" "}
          Singin With Google{" "}
        </button>
      </div>
    </div>
  );
};

export default Login;
