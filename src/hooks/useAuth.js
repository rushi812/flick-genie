import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { addUser } from "../store/userSlice";
import { DEFAULT_USER_AVATAR } from "../utils/constants";
import { useState } from "react";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";

const useAuth = () => {
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const handleUpdateProfile = (user, name) => {
    updateProfile(user, {
      displayName: name,
      photoURL: DEFAULT_USER_AVATAR,
    })
      .then(() => {
        const { uid, email, displayName, photoURL } = auth.currentUser;
        dispatch(addUser({ uid, email, displayName, photoURL }));
      })
      .catch((error) => setErrorMessage(error.message));
  };

  const handleSignUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => userCredential.user)
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(`${errorCode}: ${errorMessage}`);
      });
  };

  const handleSignIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(`${errorCode}: ${errorMessage}`);
      });
  };

  return {
    handleSignIn,
    handleSignUp,
    handleUpdateProfile,
    errorMessage,
    setErrorMessage,
  };
};

export default useAuth;
