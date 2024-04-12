import { Link } from "react-router-dom";
import googleLogo from "../../assets/google-logo-image.png";
const Login = () => {
  return (
    <div
      className="hero h-[500px] rounded-2xl mt-12"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/5RMkW1Z/analog-landscape-city-with-buildings-1.jpg)",
      }}
    >
      <div className="hero-overlay rounded-2xl"></div>
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left text-white lg:w-1/2 mr-6">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Unlock exclusive access to personalized property searches, saved
            favorites, and real-time updates by logging in now. Your dream home
            awaits just a login away.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div>
              <button className="px-4 py-2 border flex gap-2 rounded-lg">
                <img className="w-6 h-6" src={googleLogo} alt="google logo" />
                <span>Login with Google</span>
              </button>
            </div>
            <h4>Do not have any account ? <Link className="underline" to={"/register"}>Register Now</Link></h4>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
