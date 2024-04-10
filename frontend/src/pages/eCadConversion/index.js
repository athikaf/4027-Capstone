import React, { useState } from "react";
import styles from "./styles.module.scss";

const ECadConversion = () => {
  const [amount, setamount] = useState(0);
  const handleConfirmatiom = () => {
    return console.log("open modal");
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
      <button onClick={handleConfirmatiom}>submit</button>
    </div>
  );
};
export default ECadConversion;
