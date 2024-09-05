import React from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="absolute w-full px-8 py-2 z-[1]">
      <img src={LOGO_URL} alt="Netflix Logo" className="w-44" />
    </div>
  );
};

export default Header;
