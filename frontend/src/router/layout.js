import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import { ROUTES } from "./routes";
import Navbar from "../components/navbar";

export const PrivateLayout = () => {
  const isLoggedIn = useSelector((state) => state?.auth?.data);
const userData = useSelector((state)=> state?.auth?.user)

  
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
  const user = useSelector((state) => state?.auth?.user);

  console.log("fddfff", isLoggedIn);
  return isLoggedIn ?(user?.name !== "Admin"  ?<Navigate to={ROUTES.SUBSIDIARY_BANK} /> : <Navigate to={"/central_bank"} />)  : <Outlet />;
};
