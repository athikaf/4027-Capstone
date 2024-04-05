import React, { useState, useEffect } from "react";
import {
  subsidiaryBankTransactions,
  centralBankTransactions,
} from "../../constants";
import { useLocation } from "react-router-dom";

const Transactions = ({ transactions }) => {
  const [bankTransactions, setBankTransactions] = useState([]);
  const location = useLocation();
  useEffect(() => {
    // Mock API calls - Replace with actual API calls
    const fetchCentralBankData = async () => {
      // Simulate fetching data for Central Bank
      if (location.pathname.includes("central_bank")) {
        setBankTransactions(centralBankTransactions);
      }
    };

    const fetchSubsidiaryBankData = async () => {
      // Simulate fetching data for Subsidiary Bank
      if (location.pathname.includes("subsidiary_bank")) {
        setBankTransactions(subsidiaryBankTransactions);
      }
    };

    fetchCentralBankData();
    fetchSubsidiaryBankData();
  }, [location.pathname]);
  return (
    <div>
      <h2>Transaction History</h2>
      <ul>
        {bankTransactions?.map((transaction) => (
          <li key={bankTransactions.id}>
            <strong>{bankTransactions.description}</strong> - $
            {bankTransactions.amount} ({bankTransactions.date})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Transactions;
