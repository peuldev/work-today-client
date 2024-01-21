import { Link, useNavigate } from "react-router-dom";
import registerBg from "../../assets/images/register.jpg";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProviders";
const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const fristName = form.frist_name.value;
    const lastName = form.last_name.value;
    const email = form.email.value;
    const number = form.number.value;
    const age = form.age.value;
    const password = form.password.value;
    const registerInfo = {
      fristName,
      lastName,
      email,
      number,
      age,
      password,
    };
    console.log(registerInfo);
    createUser(email, password)
      .then((result) => {
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
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
                <p className="text-[#969696] py-3">Login to your account.</p>
                <div className="grid lg:grid-cols-2 gap-5">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">First Name</span>
                    </label>
                    <input
                      type="text"
                      className="input input-bordered"
                      required
                      name="frist_name"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Last Name</span>
                    </label>
                    <input
                      type="text"
                      className="input input-bordered"
                      required
                      name="last_name"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">E-mail Address</span>
                    </label>
                    <input
                      type="email"
                      className="input input-bordered"
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
                      required
                      name="number"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Age</span>
                    </label>
                    <input
                      type="number"
                      className="input input-bordered"
                      required
                      name="age"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      className="input input-bordered"
                      required
                      name="password"
                    />
                  </div>
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
