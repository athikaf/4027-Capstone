import React, { useState, useEffect } from "react";
import {
  centralBankWalletBalance,
  subsidiaryBankWalletBalance,
} from "../../constants";
import { useLocation } from "react-router-dom";

const Wallet = () => {
  const [walletBalance, setWalletBalance] = useState(0);
  const location = useLocation();
  useEffect(() => {
    // Mock API calls - Replace with actual API calls
    const fetchCentralBankData = async () => {
      // Simulate fetching data for Central Bank
      if (location?.pathname?.includes("central_bank")) {
        setWalletBalance(centralBankWalletBalance);
      }
    };

    const fetchSubsidiaryBankData = async () => {
      // Simulate fetching data for Subsidiary Bank
      if (location?.pathname?.includes("subsidiary_bank")) {
        setWalletBalance(subsidiaryBankWalletBalance);
      }
    };

    fetchCentralBankData();
    fetchSubsidiaryBankData();
  }, [location.pathname]);
  return (
    <div>
      <h2>Wallet Balance</h2>
      <p>Your current balance: ${walletBalance}</p>
    </div>
  );
};

export default Wallet;
