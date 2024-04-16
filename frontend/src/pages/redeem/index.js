import React, { useState } from "react";
import styles from "./styles.module.scss";
import ConfirmationModal from "../../components/confirmationModal";

const Redeem = () => {
  const [amount, setamount] = useState(0);

  const [showModal, setShowModal] = useState(false);
  const handleSubmit = (event) => {
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
    <div className={styles.conversionContainer}>
      <h1>Redeem Digital Currency</h1>
      <h2>Total e-Cad = 150</h2>
      <br />
      <div>
        <label>Enter your amount </label>
        <input
          name='amount'
          type='number'
          value={amount}
          onChange={(e) => setamount(e.target.value)}
        />
      </div>

      <br />
      <button onClick={handleSubmit}>Redeem</button>
      <ConfirmationModal
        isOpen={showModal}
        onSubmit={handleModalSubmit}
        onCancel={closeModal}
      />
    </div>
  );
};
export default Redeem;
