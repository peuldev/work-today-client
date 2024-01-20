import { Link } from "react-router-dom";
import loginBg from "../../assets/images/login.jpg";

const Login = () => {
  return (
    <div className="px-2">
      <div className="max-w-screen-xl mx-auto py-20">
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row">
            <div className="card lg:w-1/2">
              <form className="card-body">
                <div className="flex items-center">
                  <h1 className="text-3xl font-bold">Login </h1>
                  <Link to="/">
                    <p className="font-Jost lg:text-4xl md:text-2xl text-xl font-bold ms-2">
                      <span className="text-red">W</span>ork{" "}
                      <span className="text-red">T</span>oday
                    </p>
                  </Link>
                </div>
                <p className="text-[#969696] py-3">Login to your account.</p>
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
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    className="input input-bordered"
                    required
                    name="password"
                  />
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn text-white bg-red hover:bg-[#D24545]"
                    type="submit"
                    value="Login"
                  />
                </div>
                <div>
                  <p>
                    <small>
                      Don’t have an account yet ?{" "}
                      <Link className="underline text-red" to="/register">
                        Join Now
                      </Link>{" "}
                    </small>
                  </p>
                </div>
              </form>
            </div>
            <div className="text-center lg:w-1/2 lg:text-left">
              <img className="rounded" src={loginBg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
