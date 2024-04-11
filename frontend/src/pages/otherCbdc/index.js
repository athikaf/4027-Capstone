import React, { useState } from "react";
import { allCountries } from "../../constants";
import styles from "./styles.module.scss";
import ConfirmationModal from "../../components/confirmationModal";

const OtherCbdc = () => {
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
    <div className={styles.otherCBDCContainer}>
      <h1>Convert to other Cbdc</h1>
      <br />
      <h2>Total e-cadc = 20 e-cad</h2>
      <br />
      <div>
      <div>
        <label>Amount for convert to </label>
        <input
          name='amount'
          type='number'
          value={amount}
          onChange={(e) => setamount(e.target.value)}
        />
      </div>
      <div>
      <label>Select country </label>
        <select>
          {allCountries.map((e) => (
            <option value={e.code}>{e.name}</option>
          ))}
          {/* <option value='otherOption'>Other option</option> */}
        </select>
      </div>
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
export default OtherCbdc;
