import React, { useEffect } from "react";
import { LOGO_URL } from "../utils/constants";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../store/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
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
