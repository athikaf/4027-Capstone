import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import { ROUTES } from "./routes";
import Navbar from "../components/navbar";

export const PrivateLayout = () => {
  const isLoggedIn = useSelector((state) => state?.auth?.data);
  
  console.log(isLoggedIn, "isLogedin");
  return isLoggedIn ? (
    <Fragment>
      <Navbar />
      <Outlet />
    </Fragment>
  ) : (
    <Navigate to={"/login"} />
  );
};

export const PublicLayout = () => {
  const isLoggedIn = useSelector((state) => state?.auth?.data);
  console.log("fddfff", isLoggedIn);
  return isLoggedIn ? <Navigate to={ROUTES.SUBSIDIARY_BANK} /> : <Outlet />;
};
