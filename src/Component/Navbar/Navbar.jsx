import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/house_1018624.png";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        toast("Logged Out Successfully.");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const navlink = (
    <div className="text-lg font-semibold flex gap-4">
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/updateProfile"}>Update Profile</NavLink>
      {user && <NavLink to={"/userProfile"}>User Profile</NavLink>}
    </div>
  );
  return (
    <div className="navbar bg-[#e5e9ef] px-16 py-3">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navlink}
          </ul>
        </div>
        <div className="flex">
          <img className="w-14 h-14" src={logo} alt="home" />
          <button className="rounded-xl btn-ghost text-2xl font-bold text-left">
            Residence
            <br />
            Realm
          </button>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">{navlink}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex gap-2 items-center">
            <div className="avatar">
              <div className="w-16 rounded-full">
                <img title={user.displayName} src={user.photoURL} />
              </div>
            </div>
            <button onClick={handleLogout} className="btn">
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn bg-[#486df0] text-white">Login</button>
          </Link>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Navbar;
