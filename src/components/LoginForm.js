import React from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-hot-toast";

const LoginForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In");
    console.log("Printing FormData");
    console.log(formData);
    navigate("/dashboard");
  }

  const [showPassword, setshowPassword] = useState(false);

  return (
    <form
      onSubmit={submitHandler}
      className="flex flex-col w-full gap-y-4 mt-6"
    >
      <label className="w-full">
        <p className="text-[0.875rem] text-richblack-5 leading-[1.375rem]">
          Email Address<sup className=" text-pink-200">*</sup>
        </p>
        <input
          type="email"
          value={formData.email}
          onChange={changeHandler}
          placeholder="Enter Email Address"
          name="email"
          className="w-full p-[12px] bg-richblack-800 rounded-[0.5rem] text-richblack-5 border-b border-richblack-200"
          required
        />
      </label>

      <label className="w-full relative">
        <p className="text-[0.875rem] text-richblack-5 leading-[1.375rem]">
          Password<sup className="text-pink-200">*</sup>
        </p>
        <input
          type={showPassword ? "text" : "password"}
          value={formData.password}
          onChange={changeHandler}
          placeholder="Enter Password"
          name="password"
          className="w-full p-[12px] bg-richblack-800 rounded-[0.5rem] text-richblack-5 border-b border-richblack-200"
          required
        />

        <span
          className="absolute right-3 top-[35px] cursor-pointer"
          onClick={() => setshowPassword((prev) => !prev)}
        >
          {showPassword ? (
            <AiOutlineEye fontSize={24} fill="#afb2bf" />
          ) : (
            <AiOutlineEyeInvisible fontSize={24} fill="#afb2bf" />
          )}
        </span>

        <Link to="#">
          <p className="max-w-max text-xs mt-1 text-blue-100 ml-auto">
            Forgot Password
          </p>
        </Link>
      </label>

      <button className=" bg-yellow-50 w-full flex justify-center items-center gap-x-2 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900">
        Sign In
      </button>
    </form>
  );
};

export default LoginForm;
