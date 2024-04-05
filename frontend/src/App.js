import logo from "./logo.svg";
import "./App.css";
import Router from "./router";
import {
  subsidiaryBankTransactions,
  subsidiaryBankWalletBalance,
  centralBankTransactions,
  centralBankWalletBalance,
} from "./constants";

function App() {
  return (
    <div className='App'>
      <Router />
    </div>
  );
}

export default App;
