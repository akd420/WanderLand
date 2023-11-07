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
import { useQuery } from "@tanstack/react-query";
// import useAxios from "../Hooks/useAxios";
import axios from "axios";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //google login
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //register user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //sign in user
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //sign out
  const signOutUser = () => {
    return signOut(auth);
  };

  const { data: blogs, isLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:5000/blogs");
      return response.data;
    },
  });


  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = {email: userEmail};
      setUser(currentUser);
      setLoading(false);
      if(currentUser){
        // axiosSecure.post("/jwt", loggedUser)
        axios.post("http://localhost:5000/jwt", loggedUser,{ withCredentials: true})
        .then((res) => {
          console.log("token response",res.data);
        })
      }
      else{
        // axiosSecure.post("/logout", loggedUser)
        axios.post("http://localhost:5000/logout", loggedUser,{ withCredentials: true})
        .then((res) => {
          console.log("logout response",res.data);
        })
      }
    });
  });

  const authenticate = {
    user,
    googleLogin,
    createUser,
    signInUser,
    signOutUser,
    loading,
    blogs,
    isLoading,
  };

  return (
    <AuthContext.Provider value={authenticate}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
