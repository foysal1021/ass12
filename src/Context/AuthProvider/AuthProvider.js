import React, { createContext } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../../Firebase/Firebase.init";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  // user singup start
  //==================
  const userSingup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // user singup end
  //===================

  // user Login (start)
  //=====================
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //=====================
  // user Login (start)

  const authInfo = { userSingup, userLogin };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
