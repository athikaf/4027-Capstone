import React, { useState } from "react";
import { allCountries } from "../../constants";
import styles from "./styles.module.scss";

const Transfer = () => {
  const [accountNumber, setAccountNuber] = useState();
  const [WalletAddress, setWalletAddress] = useState();
  const [email, setEmail] = useState();

  const handleConfirmatiom = () => {
    return console.log("open modal");
  };

  return (
    <div className={styles.otherCBDCContainer}>
      <h1>Transfer Cbdc</h1>
      <br />
      <br />
      <div>
        <div>
          <label>Recipient account number </label>
          <input
            name='amount'
            type='number'
            value={accountNumber}
            onChange={(e) => setAccountNuber(e.target.value)}
          />
        </div>
        <div>
          <label>Recipient Wallet address </label>
          <input
            name='amount'
            type='number'
            value={accountNumber}
            onChange={(e) => setWalletAddress(e.target.value)}
          />
        </div>
        <div>
          <label>Recipient Email </label>
          <input
            name='email'
            type='text'
            value={accountNumber}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <br />
      <button onClick={handleConfirmatiom}>Transfer</button>
    </div>
  );
};
export default Transfer;
