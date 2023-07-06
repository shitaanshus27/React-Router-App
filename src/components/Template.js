import React from "react";
import frameImage from "../assets/frame.png";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import { FcGoogle } from "react-icons/fc";

const Template = ({ title, desc1, desc2, image, formType, setIsLoggedIn }) => {
  return (
    <div className="mx-auto flex w-11/12 max-w-[1160px] py-12 gap-x-12 gap-y-0 justify-between md:flex-wrap md:gap-10 sm:flex-wrap sm:gap-10">
      <div className="w-11/12 max-w-[450px] mx-auto md:mx-0">
        <h1 className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.35rem]">
          {title}
        </h1>
        <p className="text-[1.125rem] leading-[1.625rem] mt-4">
          <span className="text-richblack-100 block">{desc1}</span>
          <span className="text-blue-100 italic">{desc2}</span>
        </p>
        {formType === "signup" ? (
          <SignupForm setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        )}
        <div className="w-full flex items-center gap-x-2 my-4">
          <div className="flex-1 h-[1px] bg-richblack-700"></div>
          <p className="text-richblack-700 font-medium text-[0.875rem] leading-[1.375rem]">
            OR
          </p>
          <div className="flex-1 h-[1px] bg-richblack-700"></div>
        </div>
        <button className="w-full flex justify-center items-center gap-x-2 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-100 border border-richblack-700">
          <FcGoogle className="text-2xl" />
          <p>Sign in with Google</p>
        </button>
      </div>

      <div className="relative w-11/12 max-w-[450px] mx-auto md:mx-0">
        <img
          src={frameImage}
          alt="Pattern"
          width={558}
          height={504}
          loading="lazy"
        ></img>

        <img
          src={image}
          alt="Students"
          width={558}
          height={490}
          className="absolute z-10 -top-4 right-4"
          loading="lazy"
        ></img>
      </div>
    </div>
  );
};

export default Template;
