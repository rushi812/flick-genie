import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { changeLanguage } from "../store/configSlice";
import { toggleGPTSearch } from "../store/gptSlice";
import { addUser, removeUser } from "../store/userSlice";
import { LOGO_URL, SUPPORTED_LANGUAGES } from "../utils/constants";
import { auth } from "../utils/firebase";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const handleGPTSearchClick = () => {
    dispatch(toggleGPTSearch());
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

  return (
    <div className="absolute w-full h-auto px-8 py-2 z-[1] bg-gradient-to-b from-black">
      <div className="flex items-center justify-between">
        <img src={LOGO_URL} alt="Netflix Logo" className="w-44" />
        {!!user && (
          <div className="flex items-center gap-2">
            {showGPTSearch && (
              <select
                className="p-1 bg-gray-500 text-white"
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGES.map(({ identifier, name }) => (
                  <option key={identifier} value={identifier}>
                    {name}
                  </option>
                ))}
              </select>
            )}
            <button
              className="px-4 py-1 text-center bg-purple-600 hover:bg-purple-700 text-white rounded-md"
              onClick={handleGPTSearchClick}
            >
              {showGPTSearch ? "Home" : "GPT Search"}
            </button>
            <img
              className="rounded-md overflow-hidden h-8 w-8"
              src={user.photoURL}
              alt="User Profile"
            />
            <button
              className="px-4 py-1 text-center bg-red-600 hover:bg-red-700 text-white rounded-md"
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
