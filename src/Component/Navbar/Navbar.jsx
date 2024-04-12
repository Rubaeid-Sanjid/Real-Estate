import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/house_1018624.png";

const Navbar = () => {
  const navlink = (
    <>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/updateProfile"}>Update Profile</NavLink>
      <NavLink to={"/userProfile"}>User Profile</NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100">
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
          <img className="w-[10%]" src={logo} alt="home" />
          <button className="px-4 rounded-xl btn-ghost text-xl font-bold text-left">
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
        <Link to="/login">
          <button className="btn bg-[#486df0] text-white">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
