import React, { useState } from "react";
import Header from "./Header";
import { BG_URL } from "../utils/constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleToggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="h-full relative">
      <Header />
      <div class="absolute inset-0 bg-black opacity-50" />
      <div className="h-full">
        <img
          src={BG_URL}
          alt="Background"
          className="h-full w-full object-cover"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[450px] w-full">
          <div className="px-12 py-16 bg-black bg-opacity-70 rounded-s">
            <h1 className="text-[2rem] text-white mb-7 font-bold">
              {!isSignIn ? "Sign Up" : "Sign In"}
            </h1>
            <form className="flex flex-col gap-4">
              {!isSignIn && (
                <input
                  type="text"
                  placeholder="Full Name"
                  className="p-4 bg-transparent text-gray-400 border-gray-400 border-[1px] rounded-s"
                />
              )}
              <input
                type="text"
                placeholder="Email Address"
                className="p-4 bg-transparent text-gray-400 border-gray-400 border-[1px] rounded-s"
              />
              <input
                type="password"
                placeholder="Password"
                className="p-4 bg-transparent text-gray-400border-gray-400 border-[1px] rounded-s"
              />
              <button className="px-4 py-1 text-center min-h-10 bg-red-600 text-white rounded-s">
                {!isSignIn ? "Sign Up" : "Sign In"}
              </button>
              <p className="text-gray-400 text-center">OR</p>
              <div onClick={handleToggleSignIn}>
                {!isSignIn ? (
                  <>
                    <span className="text-gray-400 font-light mr-2">
                      Already Registered?
                    </span>
                    <span className="text-white text-center font-normal hover:text-gray-300 hover:underline cursor-pointer">
                      Sign in now
                    </span>
                  </>
                ) : (
                  <>
                    <span className="text-gray-400 font-light mr-2">
                      New to FlikGenie?
                    </span>
                    <span className="text-white text-center font-normal hover:text-gray-300 hover:underline cursor-pointer">
                      Sign up now
                    </span>
                  </>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
