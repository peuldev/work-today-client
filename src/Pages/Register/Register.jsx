import { Link, useNavigate } from "react-router-dom";
import registerBg from "../../assets/images/register.jpg";
import { IoClose } from "react-icons/io5";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";
const Register = () => {
  const { createUser, updateUserProfile } = useAuth();
  const [registerError, setRegisterError] = useState("");
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.number.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;
    const registerInfo = {
      name,
      email,
      phone,
      password,
      photoURL,
    };
    console.log(registerInfo);
    // password check
    if (password.length < 6) {
      setRegisterError("password less than 6 characters");
      return;
    }

    // number check
    if (phone.length < 11) {
      setRegisterError("Number less than 11 characters");
      return;
    }

    // letter cheak
    else if (!/[A-Z]/.test(password)) {
      setRegisterError("don't have a capital letter");
      return;
    }
    // error reset
    setRegisterError("");

    // create user
    createUser(email, password)
      .then((result) => {
        updateUserProfile(name, photoURL).then(() => {
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
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        setRegisterError(error.message);
      });
  };
  return (
    <div className="px-2">
      <div className="max-w-screen-xl mx-auto py-20">
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row">
            <div className="text-center lg:w-1/2 lg:text-left">
              <img className="rounded" src={registerBg} alt="" />
            </div>
            <div className="card lg:w-1/2">
              <form className="card-body" onSubmit={handleRegister}>
                <div className="flex items-center">
                  <h1 className="text-3xl font-bold">Welcome to</h1>
                  <Link to="/">
                    <p className="font-Jost lg:text-4xl md:text-2xl text-xl font-bold ms-2">
                      <span className="text-red">W</span>ork{" "}
                      <span className="text-red">T</span>oday
                    </p>
                  </Link>
                </div>
                {registerError && (
                  <p className="text-red flex items-center">
                    <IoClose className="bg-red text-white rounded-full mr-2" />
                    {registerError}
                  </p>
                )}
                <p className="text-[#969696] py-3">Login to your account.</p>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered"
                    placeholder="Type name"
                    required
                    name="name"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">E-mail Address</span>
                  </label>
                  <input
                    type="email"
                    className="input input-bordered"
                    placeholder="Type email"
                    required
                    name="email"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phone Number</span>
                  </label>
                  <input
                    type="number"
                    className="input input-bordered"
                    placeholder="Type numbber"
                    required
                    name="number"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    className="input input-bordered"
                    placeholder="Type password"
                    required
                    name="password"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Profile Image</span>
                  </label>
                  {/* <input
                    type="text"
                    className="input input-bordered"
                    placeholder="Photo Url"
                    required
                    name="photoURL"
                  /> */}
                  <input
                    type="file"
                    className="file-input file-input-bordered"
                    name="photoURL"
                  />
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn text-white bg-red hover:bg-[#D24545]"
                    type="submit"
                    value="Create Account"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
