import React, { useState } from "react";
import styles from "./styles.module.scss";
import ConfirmationModal from "../../components/confirmationModal";

const Transfer = () => {
  const [accountNumber, setAccountNuber] = useState();
  const [walletAddress, setWalletAddress] = useState();
  const [email, setEmail] = useState();

  const [showModal, setShowModal] = useState(false);
  const othersCBDC = [
    { digitalCurrency: "Select CBDC", amount: "" },
    { digitalCurrency: "E-EURO", amount: 20 },
    { digitalCurrency: "E-INR", amount: 50 },
    { digitalCurrency: "E-USD", amount: 60 },
  ];

  const handleTransfer = (event) => {
    event.preventDefault();
    setShowModal(true);
  };
  const handleModalSubmit = () => {
    console.log("add logic");
    setShowModal(false);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.otherCBDCContainer}>
      <h1>Transfer Cbdc</h1>
      <br />
      <br />
      <div>
        <div>
          <label>Select currency </label>
          <select>
            {othersCBDC.map((e) => (
              <option value={e.amount}>{e.digitalCurrency}</option>
            ))}
            {/* <option value='otherOption'>Other option</option> */}
          </select>
        </div>
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
            type='text'
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
          />
        </div>
        <div>
          <label>Recipient Email </label>
          <input
            name='email'
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <br />
      <button onClick={handleTransfer}>Transfer</button>
      <ConfirmationModal
        isOpen={showModal}
        onSubmit={handleModalSubmit}
        onCancel={closeModal}
      />
    </div>
  );
};
export default Transfer;
