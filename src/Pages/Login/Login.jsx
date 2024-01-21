import { Link, useNavigate } from "react-router-dom";
import loginBg from "../../assets/images/login.jpg";
import { IoClose } from "react-icons/io5";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const { signIn, signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const [loginError, setloginError] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const loginInfo = { email, password };
    console.log(loginInfo);
    setloginError("");
    signIn(email, password)
      .then((result) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Work Today",
          text: "Login Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        setloginError("This user invalid");
      });
  };
  const handeGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        navigate("/");
      })
      .then((error) => {});
  };
  return (
    <div className="px-2">
      <div className="max-w-screen-xl mx-auto py-20">
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row">
            <div className="card lg:w-1/2">
              <form className="card-body" onSubmit={handleLogin}>
                <div className="flex items-center">
                  <h1 className="text-3xl font-bold">Login </h1>
                  <Link to="/">
                    <p className="font-Jost lg:text-4xl md:text-2xl text-xl font-bold ms-2">
                      <span className="text-red">W</span>ork{" "}
                      <span className="text-red">T</span>oday
                    </p>
                  </Link>
                </div>
                {loginError && (
                  <p className="text-red flex items-center">
                    <IoClose className="bg-red text-white rounded-full mr-2" />
                    {loginError}
                  </p>
                )}
                <p className="text-[#969696] py-3">Login to your account.</p>
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
