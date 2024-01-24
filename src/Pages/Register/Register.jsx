import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
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
      <form className="card-body">
        <div className="grid lg:grid-cols-2 gap-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="name"
              placeholder="Type name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Type email"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text ">Bank Account</span>
          </label>
          <input
            type="number"
            placeholder="Type bank account no"
            className="input input-bordered"
            required
          />
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
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Designation</span>
            </label>
            <select className="select select-bordered">
              <option disabled selected>
                Pick one
              </option>
              <option value="employee">Employee</option>
              <option value="hr">HR</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Type password"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="file" className="file-input file-input-bordered" />
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
