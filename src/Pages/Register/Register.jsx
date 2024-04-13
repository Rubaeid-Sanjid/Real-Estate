import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div
      className="hero rounded-2xl mt-12"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/W0YYPyw/low-angle-greyscale-shot-residential-buildings-opposite-each-other-1.jpg)",
      }}
    >
      <div className="hero-overlay rounded-2xl"></div>
      <div className="hero-content flex-col mt-5">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card shrink-0 w-96 shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
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
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="photo URL"
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
              <button className="btn btn-primary">Register</button>
            </div>
            
            <h4>Already have an account ? <Link className="underline" to={"/login"}>Login</Link></h4>
          </form>
        </div>
      </div>
    </div>
    );
};

export default Register;