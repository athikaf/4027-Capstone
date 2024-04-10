import logo from "./logo.svg";
import "./App.css";
import Router from "./router";
import {
  subsidiaryBankTransactions,
  subsidiaryBankWalletBalance,
  centralBankTransactions,
  centralBankWalletBalance,
} from "./constants";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { PublicLayout, PrivateLayout } from "./router/layout";
import { store, persistor } from "./Redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Login from "./components/login";
import SubsidiaryBankDashboard from "./pages/subsidiaryBank";
import ECadConversion from "./pages/eCadConversion";
import { ROUTES } from "./router/routes";
import Home from "./pages/home";

function App() {
  return (
    <Provider store={store}>
      {/* <Router /> */}
      <PersistGate persistor={persistor}>
        {/* <BrowserRouter>
          <Routes>
            <Route element={<PublicLayout />}>
              <Route path={ROUTES.LOGIN} element={<Login />} />
            </Route>
            <Route element={<PrivateLayout />}>
              <Route path={ROUTES.HOME} element={<Home />} />
              <Route path={ROUTES.SUBSIDIARY_BANK}>
                <Route
                  path={ROUTES.SUBSIDIARY_BANK}
                  element={<SubsidiaryBankDashboard />}
                />
                <Route
                  path={ROUTES.CONVERSION_ECAD}
                  element={<ECadConversion />}
                ></Route>
              </Route>
            </Route>
            <Route path='*' element={<Navigate to={ROUTES.LOGIN} />} />
          </Routes>
        </BrowserRouter> */}
        <Router />
      </PersistGate>
    </Provider>
  );
}

export default App;
