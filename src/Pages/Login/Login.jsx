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
                <h1 className="text-3xl font-bold">Login</h1>
                <p>Login to your account.</p>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">E-mail Address</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Type email"
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
                    placeholder="Enter your password"
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
                      <Link className="underline text-red" to="/signup">
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
