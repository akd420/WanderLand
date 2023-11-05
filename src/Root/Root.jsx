import { Outlet } from "react-router-dom";

import { Toaster } from "react-hot-toast";
import Navbar from "../Component/Shared/NavBar";
import Footer from "../Component/Shared/Footer";

const Root = () => {

  return (
    <div>
        <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      <Toaster></Toaster>
    </div>
  );
};

export default Root;
