import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const LoginForm = ({ setLoggedIn }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  function changeHandler(event) {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    setLoggedIn(true);
    toast.success("Logged In");
    navigate("/dashboard");
  }

  return (
    <form onSubmit={submitHandler} className="mt-6 flex flex-col">
      <label>
        <p className="text-white">
          Email Address <sup className="text-[#EF476F]">*</sup>
        </p>
        <input
          className="w-full p-2 mt-2 text-white bg-richBlack-800 border-b-2 border-blue-500 rounded-lg outline-none transition-all focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
          type="email"
          name="email"
          placeholder="Enter email address"
          onChange={changeHandler}
          value={formData.email}
        />
      </label>
      <label>
        <p className="text-white mt-5">
          Password <sup className="text-[#EF476F]">*</sup>
        </p>

        <div className="w-full flex items-center mt-2 bg-richBlack-800 border-b-2 border-blue-500 rounded-lg transition-all focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-b-transparent">
          <input
            className="flex-grow p-2 w-[85%] text-white bg-transparent outline-none transition-all"
            required
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter password"
            onChange={changeHandler}
            value={formData.password}
          />
          <span
            
            className="w-[10%] text-xl text-richBlack-700 focus:outline-none"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>
        </div>
      </label>

      <div className="flex items-end justify-end">
        <NavLink to="#" className="text-[#47A5C5] ml-auto text-sm">
          Forgot password?
        </NavLink>
      </div>

      <button className="w-full bg-[#FFD60A] rounded-lg py-1.5 mt-8 font-medium">Sign In</button>
    </form>
  );
};

export default LoginForm;
