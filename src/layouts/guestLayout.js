import React from "react";
import { useSelector } from "react-redux";
import NavBar from "../components/NavBar";

const GuestLayout = () => {
  const { token } = useSelector(state => state.auth);
  return <>{token ? <NavBar /> : ""}</>;
};

export default GuestLayout;
