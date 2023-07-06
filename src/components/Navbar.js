import React from "react";
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const Navbar = (props) => {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className="flex justify-between items-center w-11/12 max-w-[1168px] py-4 mx-auto">
      <Link to="/">
        <img src={logo} width={160} height={32} loading="lazy"></img>
      </Link>

      <nav>
        <ul className="flex text-richblack-100 gap-x-6">
          <li>
            <Link to="/" className=" hover:text-white">
              Home
            </Link>
          </li>
          <li>
            <Link to="/" className=" hover:text-white">
              About
            </Link>
          </li>
          <li>
            <Link to="/" className=" hover:text-white">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/*Login-SignUp-LogOut-DashBoard*/}
      <div className="flex items-center gap-x-4">
        {!isLoggedIn && (
          <Link to="/login">
            <button className="bg-richblack-800 text-richblack-100 hover:text-white py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
              Login
            </button>
          </Link>
        )}
        {!isLoggedIn && (
          <Link to="/signup">
            <button className="bg-richblack-800  text-richblack-100 hover:text-white  py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
              Sign Up
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link
            to="/"
            onClick={() => {
              setIsLoggedIn(false);
              toast.success("Logged Out");
            }}
          >
            <button className="bg-richblack-800  text-richblack-100 hover:text-white py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
              Log Out
            </button>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/dashboard">
            <button className="bg-richblack-800  text-richblack-100 hover:text-white  py-[8px] px-[12px] rounded-[8px] border border-richblack-700">
              Dashboard
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
