import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { IoClose } from "react-icons/io5";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Register = () => {
  const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
  const axiosSecure = useAxiosSecure();
  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const [registerError, setRegisterError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const imageFile = { image: data.photo[0] };
    const res = await axiosSecure.post(image_hosting_api, imageFile, {
      headers: {
        "content-Type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      // now sent the menu item data to the  server with the image url
      const loginInfo = {
        name: data.name,
        email: data.email,
        account: parseFloat(data.bank_account),
        salary: parseFloat(data.salary),
        designation: data.designation,
        image: res.data.data.display_url,
      };
      const user = await axiosSecure.post("/user", loginInfo);
      if (user.data.insertedId) {
        createUser(data.email, data.password)
          .then((result) => {
            updateUserProfile(data.name, data.photoURL).then(() => {
              console.log("user profile info update");
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Work Today",
                text: "Account Created Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            });
            navigate("/");
          })
          .catch((error) => {
            setRegisterError(error.message);
          });
      }
    }
  };
  return (
    <div className="max-w-screen-xl mx-auto py-20">
      <div className="flex items-center justify-center">
        <h1 className="lg:text-4xl text-3xl font-bold font-Jost">Register</h1>
        <Link to="/">
          <p className="font-Jost lg:text-4xl text-3xl font-bold ms-2">
            <span className="text-red">W</span>ork{" "}
            <span className="text-red">T</span>oday
          </p>
        </Link>
      </div>
      <div className="pt-4 ms-8">
        {registerError && (
          <p className="text-red flex items-center">
            <IoClose className="bg-red text-white rounded-full mr-2" />
            {registerError}
          </p>
        )}
      </div>
      <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid lg:grid-cols-2 gap-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text">
                Name <span className="text-red">*</span>
              </span>
            </label>
            <input
              type="name"
              placeholder="Type name"
              className="input input-bordered"
              {...register("name", { required: true })}
            />
            {errors.name && <span className="text-red">name is required</span>}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">
                Email <span className="text-red">*</span>
              </span>
            </label>
            <input
              type="email"
              placeholder="Type email"
              className="input input-bordered"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red">email is required</span>
            )}
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text ">
              Bank Account <span className="text-red">*</span>
            </span>
          </label>
          <input
            type="number"
            placeholder="Type bank account no"
            className="input input-bordered"
            {...register("bank_account", { required: true })}
          />
          {errors.bank_account && (
            <span className="text-red">bank account is required</span>
          )}
        </div>

        <div className="grid lg:grid-cols-3 gap-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Salary</span>
            </label>
            <input
              type="number"
              placeholder="Type salary amount"
              className="input input-bordered"
              {...register("salary", { required: true })}
            />
            {errors.salary && (
              <span className="text-red">salary amount is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="form-control w-full ">
              <label className="label">
                <span className="label-text">
                  Designation <span className="text-red">*</span>
                </span>
              </label>
              <select
                {...register("designation", { required: true })}
                defaultValue="defaul"
                className="select select-bordered"
              >
                <option disabled value="defaul">
                  Pick one
                </option>
                <option value="employee">Employee</option>
                <option value="hr">HR</option>
                <option value="admin">Admin</option>
              </select>
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">
                Password <span className="text-red">*</span>
              </span>
            </label>
            <input
              type="password"
              placeholder="Type password"
              className="input input-bordered"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-red">password is required</span>
            )}
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">
              Photo <span className="text-red">*</span>
            </span>
          </label>
          <input
            type="file"
            {...register("photo", { required: true })}
            className="file-input file-input-bordered"
          />
          {errors.photo && <span className="text-red">photo is required</span>}
        </div>
        <div className="form-control mt-6">
          <input
            className="btn text-white bg-red hover:bg-[#D24545]"
            type="submit"
            value="Register"
          />
        </div>
        <div>
          <p>
            <small>
              Already have an account?{" "}
              <Link className="underline text-red" to="/login">
                Log In
              </Link>{" "}
            </small>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
