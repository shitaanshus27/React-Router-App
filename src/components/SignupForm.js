import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SignupForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setshowPassword] = useState(false);
  const [showConfirmPassword, setshowConfirmPassword] = useState(false);
  const [accountType, setAccounType] = useState("Student");

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    if (formData.password != formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    setIsLoggedIn(true);
    toast.success("Account Created");
    const accountData = { ...formData };
    const finalData = { accountData, accountType };
    console.log(finalData);
    navigate("/dashboard");
  }

  return (
    <div>
      {/*student-Instructor tab*/}
      <div className="flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max">
        <button
          className={`${
            accountType === "student"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200"
          } py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccounType("student")}
        >
          Student
        </button>
        <button
          className={`${
            accountType === "instructor"
              ? "bg-richblack-900 text-richblack-5"
              : "bg-transparent text-richblack-200"
          } py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccounType("instructor")}
        >
          Instructor
        </button>
      </div>

      <form
        onSubmit={submitHandler}
        className="flex flex-col w-full gap-y-4 mt-6"
      >
        <div className="w-full flex flex-row mt-[10px] gap-x-2">
          {/*First Name & Last Name*/}
          <label className="w-full">
            <p className="text-[0.875rem] text-richblack-5 leading-[1.375rem]">
              First Name<sup className="text-pink-200">*</sup>
            </p>
            <input
              type="text"
              name="firstName"
              onChange={changeHandler}
              placeholder="Enter First Name"
              value={FormData.firstName}
              className="mt-1 w-[100%] p-[12px] bg-richblack-800 rounded-[0.5rem] text-richblack-5 border-b border-richblack-200"
              required
            />
          </label>

          <label>
            <p className="text-[0.875rem] text-richblack-5 leading-[1.375rem]">
              Last Name<sup className="text-pink-200">*</sup>
            </p>
            <input
              type="text"
              name="lastName"
              onChange={changeHandler}
              placeholder="Enter Last Name"
              value={FormData.lastName}
              className="mt-1 p-[12px] bg-richblack-800 rounded-[0.5rem] text-richblack-5 border-b border-richblack-200"
              required
            />
          </label>
        </div>

        {/* Email Address*/}
        <label className="mt-[10px]">
          <p className="text-[0.875rem] text-richblack-5 leading-[1.375rem]">
            Email Address<sup className="text-pink-200">*</sup>
          </p>
          <input
            type="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="Enter Email Address"
            name="email"
            className="mt-1 w-full p-[12px] bg-richblack-800 rounded-[0.5rem] text-richblack-5 border-b border-richblack-200"
            required
          />
        </label>

        {/*Create Password & Confirm Password*/}

        <div className="flex w-full justify-between mt-[10px] gap-x-2">
          <label className="relative">
            <p className="text-[0.875rem] text-richblack-5 leading-[1.375rem]">
              Create Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={changeHandler}
              placeholder="Enter Password"
              name="password"
              className="p-[12px] w-[100%] bg-richblack-800 rounded-[0.5rem] text-richblack-5 border-b border-richblack-200"
              required
            />
            <span
              className="absolute right-2 top-[36px] cursor-pointer"
              onClick={() => setshowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <AiOutlineEye fontSize={24} fill="#afb2bf" />
              ) : (
                <AiOutlineEyeInvisible fontSize={24} fill="#afb2bf" />
              )}
            </span>
          </label>

          <label className="relative">
            <p className="text-[0.875rem] text-richblack-5 leading-[1.375rem]">
              Confirm Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              type={showConfirmPassword ? "text" : "password"}
              value={formData.confirmPassword}
              onChange={changeHandler}
              placeholder="Confirm Password"
              name="confirmPassword"
              className="p-[12px] bg-richblack-800 rounded-[0.5rem] text-richblack-5 border-b border-richblack-200"
              required
            />
            <span
              className="absolute right-3 top-[36px] cursor-pointer"
              onClick={() => setshowConfirmPassword((prev) => !prev)}
            >
              {showConfirmPassword ? (
                <AiOutlineEye fontSize={24} fill="#afb2bf" />
              ) : (
                <AiOutlineEyeInvisible fontSize={24} fill="#afb2bf" />
              )}
            </span>
          </label>
        </div>
        <button className=" bg-yellow-50 w-full flex justify-center items-center gap-x-2 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
