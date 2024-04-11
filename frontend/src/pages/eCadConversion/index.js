import React, { useState } from "react";
import styles from "./styles.module.scss";
import ConfirmationModal from "../../components/confirmationModal";

const ECadConversion = () => {
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
      <h1>Convert to Digital Currency</h1>
      <h2>Total Cad = 200$</h2>
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
      <button onClick={handleSubmit}>submit</button>
      <ConfirmationModal
        isOpen={showModal}
        onSubmit={handleModalSubmit}
        onCancel={closeModal}
      />
    </div>
  );
};
export default ECadConversion;
