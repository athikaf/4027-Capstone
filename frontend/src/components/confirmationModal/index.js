import React from "react";
import styles from "./styles.module.scss";


const ConfirmationModal = ({ isOpen, onSubmit, onCancel }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modal_overlay}>
      <div className={styles.modal}>
        <h2>Confirmation</h2>
        <p>Are you sure you want to submit?</p>
        <div className={styles.modal_buttons}>
          <button onClick={onSubmit}>Confirm</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
