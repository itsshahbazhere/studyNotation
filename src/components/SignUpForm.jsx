import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignUpForm = ({ setLoggedIn }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    createPassword: "",
    confirmPassword: "",
  });

  const [showCreatePassword, setShowCreatePassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [accountType, setAccountType] = useState("student");

  const navigate = useNavigate();

  function changeHandler(event) {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    if (formData.createPassword !== formData.confirmPassword) {
      toast.error("Password do not match");
      return;
    }
    setLoggedIn(true);
    toast.success("Account Created");
    const accountData = {
      ...formData,
    };

    console.log("your account data is:");
    console.log(accountData);
    navigate("/dashboard");
  }

  return (
    <div>

      <div className="flex items-center justify-between px-1 bg-richBlack-800 w-[210px] h-[44px] my-6 rounded-full text-white">
        <button
          onClick={() => setAccountType("student")}
          className={`w-[97px] h-[36px] rounded-full transition-all duration-400 ${
            accountType === "student" ? "bg-richBlack-900" : "bg-transparent"
          }`}
        >
          Student
        </button>

        <button
          onClick={() => setAccountType("instructor")}
          className={`w-[97px] h-[36px] rounded-full transition-all duration-400 ${
            accountType === "instructor" ? "bg-richBlack-900" : "bg-transparent"
          }`}
        >
          Instructor
        </button>
      </div>

  
      <form onSubmit={submitHandler}>
        <div className="flex w-full justify-between gap-x-5">
          
          <label className="w-full">
            <p className="text-white">
              First Name <sup className="text-[#EF476F]">*</sup>
            </p>
            <input
              className="w-full p-2 mt-2 text-white bg-richBlack-800 border-b-2 border-blue-500 rounded-lg outline-none transition-all focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
              placeholder="Enter First Name"
              type="text"
              name="firstName"
              onChange={changeHandler}
              value={formData.firstName}
            />
          </label>

          <label className="w-full">
            <p className="text-white">
              Last Name <sup className="text-[#EF476F]">*</sup>
            </p>
            <input
              className="w-full p-2 mt-2 text-white bg-richBlack-800 border-b-2 border-blue-500 rounded-lg outline-none transition-all focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
              placeholder="Enter Last Name"
              type="text"
              name="lastName"
              onChange={changeHandler}
              value={formData.lastName}
            />
          </label>
        </div>

        <label>
          <p className="text-white mt-4">
            Email Address<sup className="text-[#EF476F]">*</sup>
          </p>
          <input
            className="w-full p-2 mt-2 text-white bg-richBlack-800 border-b-2 border-blue-500 rounded-lg outline-none transition-all focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
            type="email"
            name="email"
            placeholder="Enter Email Address"
            onChange={changeHandler}
            value={formData.email}
          />
        </label>

        <div className="flex justify-between mt-4 gap-x-5">
          <label className="w-full">
            <p className="text-white">
              Create Password<sup className="text-[#EF476F]">*</sup>
            </p>
            <div className="w-full flex items-center mt-2 bg-richBlack-800 border-b-2 border-blue-500 rounded-lg transition-all focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-b-transparent">
              <input
                className="flex-grow p-2 w-[70%] text-white bg-transparent outline-none transition-all"
                required
                placeholder="Enter Password"
                type={showCreatePassword ? "text" : "password"}
                name="createPassword"
                onChange={changeHandler}
                value={formData.createPassword}
              />
              <span
                className="w-[20%] text-xl text-richBlack-700 focus:outline-none"
                onClick={() => setShowCreatePassword((prev) => !prev)}
              >
                {showCreatePassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}

              </span>
            </div>
          </label>
          <label className="w-full">
            <p className="text-white">
              Confirm Password<sup className="text-[#EF476F]">*</sup>
            </p>
            <div className="w-full flex items-center mt-2 bg-richBlack-800 border-b-2 border-blue-500 rounded-lg transition-all focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-b-transparent">
              <input
                className="flex-grow p-2 w-[70%] text-white bg-transparent outline-none transition-all"
                required
                placeholder="Confirm Password"
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                onChange={changeHandler}
                value={formData.confirmPassword}
              />
              <span
                className="w-[20%] text-xl text-richBlack-700 focus:outline-none"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
              >
                {showConfirmPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </span>
            </div>
          </label>
        </div>

        <button className="w-full bg-[#FFD60A] rounded-lg py-1.5 mt-8 font-medium">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
