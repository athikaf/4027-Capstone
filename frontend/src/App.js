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
      <PersistGate persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  );
}

export default App;
