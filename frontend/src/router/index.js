import React, { useLayoutEffect } from "react";
import { ROUTES } from "./routes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CentralBankDashboard from "../pages/centralBank";
import SubsidiaryBankDashboard from "../pages/subsidiaryBank";
import Home from "../pages/home";
import About from "../pages/about";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.APP} element={<Home />} />
        <Route
          path={ROUTES.CENTRAL_BANK}
          element={<CentralBankDashboard />}
        ></Route>

        <Route
          path={ROUTES.SUBSIDIARY_BANK}
          element={<SubsidiaryBankDashboard />}
        ></Route>

        <Route path={ROUTES.ABOUT} element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
