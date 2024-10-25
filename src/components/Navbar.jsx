import React from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-hot-toast";
import logo from "../assets/Logo.svg";

const Navbar = (props) => {
  let loggedIn = props.loggedIn;
  let setLoggedIn = props.setLoggedIn;

  return (
    <div className="flex justify-evenly items-center flex-wrap  p-2 mx-auto bg-richBlack-500 w-full">
      <NavLink to="/">
        <img src={logo} alt="logo" width={160} height={32} loading="lazy" />
      </NavLink>

      <div>
        <ul className="flex gap-x-6 text-richBlack-700 text-lg">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/">About</NavLink>
          <NavLink to="/">Contact</NavLink>
        </ul>
      </div>

      {/* login signup logout dashboard */}
      <div className="flex gap-x-6">
        {!loggedIn && (
          <NavLink to="/login">
            <button className="border border-blue-500 text-richBlack-700 bg-richBlack-800 px-3 py-2 rounded-md">
            
              Log in
            </button>
          </NavLink>
        )}
        {!loggedIn && (
          <NavLink to="/signup">
            <button className="border border-blue-500 text-richBlack-700 bg-richBlack-800 px-4 py-2 rounded-md">
              Sign up
            </button>
          </NavLink>
        )}
        {loggedIn && (
          <NavLink to="/">
            <button
              className="border border-blue-500 text-richBlack-700 bg-richBlack-800 px-4 py-2 rounded-md"
              onClick={() => {
                setLoggedIn(false);
                toast.success("Logged Out");
              }}
            >
              Log out
            </button>
          </NavLink>
        )}
        {loggedIn && (
          <NavLink to="/dashboard">
            <button className="border border-blue-500 text-richBlack-700 bg-richBlack-800 px-4 py-2 rounded-md">
              Dashboard
            </button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
