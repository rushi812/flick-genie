import React from "react";
import { LOGO_URL } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => navigate("/"))
      .catch((error) => navigate("/error"));
  };

  return (
    <div className="absolute w-full h-auto px-8 py-2 z-[1]">
      <div className="flex items-center justify-between">
        <img src={LOGO_URL} alt="Netflix Logo" className="w-44" />
        {!!user && (
          <div className="flex items-center gap-2">
            <img
              className="rounded-md overflow-hidden h-8 w-8"
              src={user.photoURL}
              alt="User Profile"
            />
            <button
              className="px-4 py-1 text-center bg-red-600 text-white rounded-md"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
