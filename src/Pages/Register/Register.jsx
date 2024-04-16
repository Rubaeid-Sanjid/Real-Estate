import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Component/AuthProvider/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (password.length < 6) {
      toast("Password length must be at least 6 character.");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      toast("Must have an Uppercase letter in the password.");
      return;
    }
    if (!/[a-z]/.test(password)) {
      toast("Must have a Lowercase letter in the password.");
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast("Successfully registered.");
        e.target.reset();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="container mx-auto px-8 my-12">
      <div
      className="hero rounded-2xl"
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
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
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
                name="email"
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
                name="photoURL"
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
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#486df0] text-white text-lg">Register</button>
            </div>
            <h4>
              Already have an account ?
              <Link className="underline" to={"/login"}>
                Login
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

export default Register;
