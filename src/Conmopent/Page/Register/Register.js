import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const Register = () => {
  const { userSingup, userUpdated, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const name = data.name;
    const email = data.email;
    const password = data.password;
    const seller = data.seller;

    const userInfo = {
      name,
      email,
      password,
      seller,
    };
    //singup start
    //=============
    userSingup(email, password)
      .then((data) => {
        userUpdated(name)
          .then(() => {
            fetch("https://server-two-xi.vercel.app/user", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(userInfo),
            })
              .then((res) => res.json())
              .then((data) => console.log(data));
            navigate("/");
          })
          .catch(() => {});
      })
      .catch((err) => {
        console.log(err);
      });
    //singup end
    //=============
  };
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
            {...register("seller", { required: "Select Option" })}
          >
            <option></option>
            <option> YES </option>
            <option> NO </option>
          </select>
          <label className="label">
            {errors.seller && (
              <span className=" text-red-600"> {errors.seller.message}</span>
            )}
          </label>

          <span>
            {" "}
            have a accout?{" "}
            <Link to="/login" className=" btn btn-info btn-xs">
              {" "}
              Login
            </Link>
          </span>
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
