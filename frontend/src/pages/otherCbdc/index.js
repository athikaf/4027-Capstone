import React, { useState } from "react";
import { allCountries } from "../../constants";
import styles from "./styles.module.scss";

const OtherCbdc = () => {
  const [amount, setamount] = useState(0);
  const handleConfirmatiom = () => {
    return console.log("open modal");
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
      <button onClick={handleConfirmatiom}>submit</button>
    </div>
  );
};
export default OtherCbdc;
