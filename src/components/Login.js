import React from "react";
import Header from "./Header";
import { BG_URL } from "../utils/constants";

const Login = () => {
  return (
    <div className="h-full">
      <Header />
      <div class="absolute inset-0 bg-black opacity-50"></div>
      <div className="h-full">
        <img
          src={BG_URL}
          alt="Background"
          className="h-full w-full object-contain"
        />
      </div>
    </div>
  );
};

export default Login;
