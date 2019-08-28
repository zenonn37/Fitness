import React from "react";
import { useSelector } from "react-redux";
import NavBar from "../components/NavBar";
import SidePanel from "../components/SidePanel";

const GuestLayout = () => {
  const { token } = useSelector(state => state.auth);
  return <div>
    {token ? <NavBar /> : ""}
    {/* {token ? <SidePanel /> : ""} */}

  </div>;
};

export default GuestLayout;
