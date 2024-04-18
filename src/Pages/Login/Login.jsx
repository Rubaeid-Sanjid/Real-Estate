import { Link, useNavigate } from "react-router-dom";
import googleLogo from "../../assets/google-logo-image.png";
import facebookLogo from "../../assets/Facebook-logo.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../Component/AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const [showPassword, setShowPassword] = useState(false);

  const { loginUser, loginWithApps } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        toast("Login Successful.");
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
        toast(error.message);
      });
  };

  const handleGoogleLogin = () => {
    loginWithApps(googleProvider)
      .then((result) => {
        console.log(result.user);
        toast("Login Successful.");
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleFacebookLogin = () => {
    loginWithApps(facebookProvider)
      .then((result) => {
        console.log(result.user);
        toast("Login Successful.");
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="container mx-auto lg:px-8 px-3 my-12">
      <Helmet>
        <title>Residence Realm | Login</title>
      </Helmet>
      <div
        className="hero rounded-2xl"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/5RMkW1Z/analog-landscape-city-with-buildings-1.jpg)",
        }}
      >
        <div className="hero-overlay rounded-2xl"></div>
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left text-white lg:w-1/2 lg:mr-6">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Unlock exclusive access to personalized property searches, saved
              favorites, and real-time updates by logging in now. Your dream
              home awaits just a login away.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-2/3 left-[90%] cursor-pointer"
                >
                  {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#486df0] text-white text-lg">
                  Login
                </button>
              </div>
              <div className="">
                <button
                  onClick={handleGoogleLogin}
                  className="w-full px-4 py-2 border flex justify-center gap-2 rounded-lg mb-2"
                >
                  <img className="w-6 h-6" src={googleLogo} alt="google logo" />
                  <span>Login with Google</span>
                </button>
                <button
                  onClick={handleFacebookLogin}
                  className="w-full px-4 py-2 border flex justify-center gap-2 rounded-lg"
                >
                  <img
                    className="w-6 h-6"
                    src={facebookLogo}
                    alt="facebook logo"
                  />
                  <span>Login with Facebook</span>
                </button>
              </div>
              <h4>
                Do not have any account ?
                <Link className="underline" to={"/register"}>
                  Register Now
                </Link>
              </h4>
            </form>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
