/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import "../../fireBaseConfig";

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [loding, setLoding] = useState(false);
  const [currentUser, setCurrentUser] = useState();
  // sign up method

  useEffect(() => {
    const auth = getAuth();
    const Unsubcribe = onAuthStateChanged(auth, (user) => {
      console.log(user);
      console.log(auth)
      setLoding(true);
      setCurrentUser(user);
    });
    return Unsubcribe;
  }, []);
  const signUp = async (email, password, username) => {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password, username);
    await updateProfile(auth.currentUser, { displayName: currentUser });
    const user = auth.currentUser;
    setCurrentUser({ ...user });
  };

  const login = (email, password) => {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    const auth = getAuth();
    return signOut(auth);
  };

  const value = {
    loding,
    currentUser,
    signUp,
    login,
    logOut,
  };
  return (
    <AuthContext.Provider value={value}>
      {loding && <h1>Loding....</h1>}
      {loding && children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
