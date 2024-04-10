import React, { useLayoutEffect, useState } from "react";
import { ROUTES } from "./routes";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import CentralBankDashboard from "../pages/centralBank";
import SubsidiaryBankDashboard from "../pages/subsidiaryBank";
import Home from "../pages/home";
import About from "../pages/about";
import Login from "../components/login";
import { PrivateLayout, PublicLayout } from "./layout";
import ECadConversion from "../pages/eCadConversion";
import OtherCbdc from "../pages/otherCbdc";
import Transfer from "../pages/transfer";

const Router = () => {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path={ROUTES.LOGIN} element={<Login />} />
        </Route>
        <Route element={<PrivateLayout />}>
          {/* <Route path={ROUTES.HOME} element={<Home />} /> */}
          <Route path={ROUTES.SUBSIDIARY_BANK}>
            <Route
              path={ROUTES.SUBSIDIARY_BANK}
              element={<SubsidiaryBankDashboard />}
            />
            <Route
              path={ROUTES.CONVERSION_ECAD}
              element={<ECadConversion />}
            />
            <Route
              path={ROUTES.OTHER_CBDC}
              element={<OtherCbdc />}
            />
            <Route path={ROUTES.TRANSFER} element={<Transfer />} />
          </Route>
        </Route>
        <Route path='*' element={<Navigate to={ROUTES.LOGIN} />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
