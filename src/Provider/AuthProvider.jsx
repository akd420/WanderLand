/* eslint-disable react/prop-types */
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
  } from "firebase/auth";
  import { createContext, useEffect, useState } from "react";
  import auth from "../firebase/firebaseConfig";
  
  export const AuthContext = createContext(null);
  const googleProvider = new GoogleAuthProvider();
  
  const AuthProvider = ({ children }) => {
      const [user,setUser] = useState(null);
      const [loading,setLoading] = useState(true);
  
    //google login
    const googleLogin = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
    };
  
    //register user
    const createUser = (email,password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    };
  
      //sign in user
    const signInUser = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    }
  
    //sign out
  
    const signOutUser = () => {
      return signOut(auth)
    }
  
    useEffect(()=>{
      onAuthStateChanged(auth,(user)=>{
          setUser(user);
          setLoading(false);
      });
    },[])
  
  
    const authenticate = {
      user,
      googleLogin,
      createUser,
      signInUser,
      signOutUser,
      loading
    };
  
    return (
      <AuthContext.Provider value={authenticate}>{children}</AuthContext.Provider>
    );
  };
  
  export default AuthProvider;
  