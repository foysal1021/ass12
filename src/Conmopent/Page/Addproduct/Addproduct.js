import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Addproduct = () => {
  const { user } = useContext(AuthContext);

  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/brands")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);

  const imgBBkey = process.env.REACT_APP_imgBBkey;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const image = data.img[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?&key=${imgBBkey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((datas) => {
        const img = datas.data.url;

        if (datas.success) {
          const product = {
            name: data.name,
            brandName: data.brand,
            price: data.price,
            codition: data.codition,
            location: data.location,
            about: data.aboutPhone,
            phone: data.phone,
            usedYears: data.usedYear,
            sellerEmail: user?.email,
            orginalPrice: "",
            postDate: "",
            userStatus: "",
            img: img,
          };
          fetch("http://localhost:5000/upload-phone", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data) {
                toast.success("product added");
              }
            });
        }
      });
  };

  return (
    <div className=" ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" grid grid-rows-1 gap-3 rounded-2xl border shadow-lg my-10  w-4/5 p-10  mx-auto"
      >
        <h1 className=" text-center text-3xl font-semibold"> Add Product </h1>

        {/* product name */}
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Mobile Name</span>
          </label>
          <input
            {...register("name", { required: "type phone name" })}
            type="text"
            className="input input-bordered w-full"
          />
          <label className="label">
            {errors.name && (
              <span className=" text-red-600"> {errors.name.message}</span>
            )}
          </label>
        </div>

        {/* category   */}
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text"> Brand Name</span>
          </label>

          <select
            className="select select-bordered w-full"
            {...register("brand", { required: "type brand name" })}
          >
            {brands.map((brand) => (
              <option key={brand._id}> {brand.brandName}</option>
            ))}

            {/* <option>Greedo</option> */}
          </select>
          <label className="label">
            {errors.brand && (
              <span className=" text-red-600"> {errors.brand.message}</span>
            )}
          </label>
        </div>

        {/* product price */}
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text"> Price</span>
          </label>
          <input
            {...register("price", { required: "type price" })}
            type="number"
            className="input input-bordered w-full"
          />{" "}
          <label className="label">
            {errors.price && (
              <span className=" text-red-600"> {errors.price.message}</span>
            )}
          </label>
        </div>
        {/* product condition price */}
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Pregent Condition </span>
          </label>
          <input
            {...register("codition", { required: "type phone condition" })}
            placeholder="exam : good, fair, excellent"
            type="text"
            className="input input-bordered w-full"
          />
          <label className="label">
            {errors.codition && (
              <span className=" text-red-600"> {errors.codition.message}</span>
            )}
          </label>
        </div>
        {/* mobile  */}
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text"> Phone Number </span>
          </label>
          <input
            {...register("phone", { required: "type phone number" })}
            type="number"
            className="input input-bordered w-full"
          />
          <label className="label">
            {errors.phone && (
              <span className=" text-red-600"> {errors.phone.message}</span>
            )}
          </label>
        </div>
        {/* loation  */}
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text"> Meet Location </span>
          </label>
          <input
            {...register("location", { required: "type meet location" })}
            type="text"
            className="input input-bordered w-full"
          />
          <label className="label">
            {errors.location && (
              <span className=" text-red-600"> {errors.location.message}</span>
            )}
          </label>
        </div>

        {/* used year   */}
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Used Year </span>
          </label>
          <input
            {...register("usedYear", { required: "type use year" })}
            type="text"
            className="input input-bordered w-full"
          />
          <label className="label">
            {errors.usedYear && (
              <span className=" text-red-600"> {errors.usedYear.message}</span>
            )}
          </label>
        </div>

        {/* img */}
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Upload Image </span>
          </label>
          <input
            {...register("img", { required: "upload phone img" })}
            type="file"
            className="file-input file-input-bordered w-full "
          />
          <label className="label">
            {errors.img && (
              <span className=" text-red-600"> {errors.img.message}</span>
            )}
          </label>
        </div>

        {/* description   */}
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text"> About Your Phone </span>
          </label>
          <textarea
            {...register("aboutPhone", { required: "type about phone" })}
            className="textarea textarea-bordered h-40"
            placeholder="about your phone"
          ></textarea>
          <label className="label">
            {errors.aboutPhone && (
              <span className=" text-red-600">
                {" "}
                {errors.aboutPhone.message}
              </span>
            )}
          </label>
        </div>
        <input className=" btn btn-info" type="submit" value="Add Product" />
      </form>
      <Toaster />
    </div>
  );
};

export default Addproduct;
