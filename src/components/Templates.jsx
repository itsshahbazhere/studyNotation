import React from "react";
import frameImage from "../assets/frame.png";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import googleIcon from "../assets/google.png";

const Templates = ({ title, desc1, desc2, formType, image, setLoggedIn }) => {
  return (
    <div className="flex md:justify-evenly justify-center md:mt-16 mt-10 p-2 w-11/12 mx-auto mb-10">
      <div className=" md:w-[50%] lg:w-[30%]">
        <div className="flex flex-col">
          <h1 className="text-white text-3xl">{title}</h1>
          <div className="mt-5 leading-relaxed">
            <p className="text-lg text-richBlack-700">{desc1}</p>
            <p className="text-lg text-[#47A5C5] italic">{desc2}</p>
          </div>
        </div>

        <div>
          {formType === "login" ? (
            <LoginForm setLoggedIn={setLoggedIn} />
          ) : (
            <SignUpForm setLoggedIn={setLoggedIn} />
          )}
        </div>

        <div>
          <div className="flex text-richBlack-500 w-full justify-evenly items-center mt-5">
            <div className="w-[50%] h-[1px] bg-richBlack-500"></div>

            <p className="p-1">OR</p>
            <div className="w-[50%] h-[1px] bg-richBlack-500"></div>
          </div>

          <button className="flex items-center justify-center w-full border-richBlack-500 border text-richBlack-700 rounded-lg py-2 mt-5 font-medium">
            <img
              src={googleIcon}
              alt="google-logo"
              className="w-[20px] h-[20px] mr-2 "
            />
            Sign up with google
          </button>
        </div>
      </div>

      <div className=" relative">
        <img
          src={frameImage}
          alt="pattern"
          className="absolute aspect-square m-7 max-w-full max-h-full hidden md:block md:max-w-[250px] md:max-h-[250px] lg:max-w-[450px] lg:max-h-[450px]"
          loading="lazy"
        />
        <img
          src={image}
          alt="student"
          className="max-w-full object-cover aspect-square max-h-full  hidden md:block md:max-w-[250px] md:max-h-[250px] lg:max-w-[450px] lg:max-h-[450px]  relative"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Templates;
