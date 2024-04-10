import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { handleLogout } from "../../Redux/actions";
import { Navigate, useNavigate } from "react-router-dom";
import { ROUTES } from "../../router/routes";
import styles from "./styles.module.scss";

const SubsidiaryBankDashboard = () => {
  const [tableVisible, setTableVisible] = useState(true);
  const [dcTableVisible, setDcTableVisible] = useState(true);
  const [otherDcTableVisible, setOtherDcTableVisible] = useState(true);

  const navigate = useNavigate();

  const accountTableVisibility = () => {
    setTableVisible(!tableVisible);
  };
  const digitalCurrencyTableVisibility = () => {
    setDcTableVisible(!dcTableVisible);
  };
  const otherCBDCTableVisibility = () => {
    setOtherDcTableVisible(!otherDcTableVisible);
  };
  const dispatch = useDispatch();

  const Logout = () => {
    dispatch(handleLogout());
  };
  const handleConvertECad = () => {
    return navigate(`${ROUTES.SUBSIDIARY_BANK}/${ROUTES.CONVERSION_ECAD}`);
  };
  const handleConvertToOtherCBDC = () => {
    return navigate(`${ROUTES.SUBSIDIARY_BANK}/${ROUTES.OTHER_CBDC}`);
  };
  const handelTransferCBDC = () =>{
    navigate(`${ROUTES.TRANSFER}`);
  }

  return (
    <div className={styles.sbContainer}>
      <h1> Bank Dashboard</h1>
      <div className='regular-data-holder toggle-button-summary'>
        <div
          id='BankingBlockAboveSection'
          className='BankingBlockAboveSection'
        ></div>
        <br />
        <span>
          <h3>
            <a
              id='banking'
              role='button'
              className='table-caption toggle-summary-collapse'
              title='Click to collapse account table for Banking'
              onClick={accountTableVisibility}
            >
              Banking
            </a>
            <span className='other'></span>
          </h3>
          {tableVisible && (
            <table
              cellSpacing='0'
              summary='Banking accounts'
              className='standard-table ie7text'
            >
              <colgroup>
                <col width='70%' />
                <col width='30%' className='col-balance' />
                {/* <col width='10%' /> */}
              </colgroup>
              <thead style={{ display: "table-header-group" }}>
                <tr>
                  <th scope='col'>Account</th>
                  <th scope='col' className='balance'>
                    Balance $
                  </th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th scope='row' className='tfooter-header'>
                    Total Banking Balance
                  </th>
                  <td className='balance'>
                    <div>
                      <span>CAD</span>
                      <div className='number'>$0.96</div>
                    </div>
                  </td>
                </tr>
              </tfoot>
              <tbody style={{ display: "table-row-group" }}>
                <tr>
                  <td colSpan='3' style={{ display: "none" }}>
                    <div
                      id='BankingBlockFirstRow'
                      className='BankingBlockFirstRow'
                    ></div>
                  </td>
                </tr>
                <tr id='acctSummary-parent-details-N0B3FAB26'>
                  <td>
                    Momentum PLUS Savings - ********71*5271
                    <br />
                  </td>
                  <td className='balance'>
                    <div>
                      <div className='number'>0.00</div>
                    </div>
                  </td>
                </tr>
                <tr id='acctSummary-parent-details-P5B7E4D44'>
                  <td>
                    Student Banking Advantage Plan - *****32*6388
                    <br />
                  </td>
                  <td className='balance'>
                    <div>
                      <div className='number'>0.96</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan='3' style={{ display: "none" }}>
                    <div
                      id='BankingBlockLastRow'
                      className='BankingBlockLastRow'
                    ></div>
                  </td>
                </tr>
              </tbody>
            </table>
          )}
        </span>
        <br />
        <button onClick={handleConvertECad}>Convert to e-cad</button>
        <button onClick={() => alert("This section is under progress")}>
          Redeem
        </button>
      </div>
      <div className='regular-data-holder toggle-button-summary'>
        <div
          id='BankingBlockAboveSection'
          className='BankingBlockAboveSection'
        ></div>
        <br />
        <span>
          <h3>
            <a
              id='banking'
              role='button'
              className='table-caption toggle-summary-collapse'
              title='Click to collapse account table for Banking'
              onClick={digitalCurrencyTableVisibility}
            >
              E-Cad
            </a>
            <span className='other'></span>
          </h3>
          {dcTableVisible && (
            <table
              cellSpacing='0'
              summary='Banking accounts'
              className='standard-table ie7text'
            >
              <colgroup>
                <col width='70%' />
                <col width='30%' className='col-balance' />
                {/* <col width='10%' /> */}
              </colgroup>
              <thead style={{ display: "table-header-group" }}>
                <tr>
                  <th scope='col'>Digital Currency </th>
                  <th scope='col' className='balance'>
                    Total
                  </th>
                </tr>
              </thead>
              <tfoot>
                <tr></tr>
              </tfoot>
              <tbody style={{ display: "table-row-group" }}>
                <tr>
                  <td colSpan='3' style={{ display: "none" }}>
                    <div
                      id='BankingBlockFirstRow'
                      className='BankingBlockFirstRow'
                    ></div>
                  </td>
                </tr>
                <tr id='acctSummary-parent-details-N0B3FAB26'>
                  <td>
                    E-cad
                    <br />
                  </td>
                  <td className='balance'>
                    <div>
                      <div className='number'>20</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan='3' style={{ display: "none" }}>
                    <div
                      id='BankingBlockLastRow'
                      className='BankingBlockLastRow'
                    ></div>
                  </td>
                </tr>
              </tbody>
            </table>
          )}
        </span>
        <br />
        <button onClick={handleConvertToOtherCBDC}>
          Convert to other cbdc
        </button>
      </div>
      <div className='regular-data-holder toggle-button-summary'>
        <div
          id='BankingBlockAboveSection'
          className='BankingBlockAboveSection'
        ></div>
        <br />
        <span>
          <h3>
            <a
              id='banking'
              role='button'
              className='table-caption toggle-summary-collapse'
              title='Click to collapse account table for Banking'
              onClick={otherCBDCTableVisibility}
            >
              Other CBDC's
            </a>
            <span className='other'></span>
          </h3>
          {otherDcTableVisible && (
            <table
              cellSpacing='0'
              summary='Banking accounts'
              className='standard-table ie7text'
            >
              <colgroup>
                <col width='70%' />
                <col width='30%' className='col-balance' />
                {/* <col width='10%' /> */}
              </colgroup>
              <thead style={{ display: "table-header-group" }}>
                <tr>
                  <th scope='col'>Digital Currency </th>
                  <th scope='col' className='balance'>
                    Total
                  </th>
                </tr>
              </thead>
              <tfoot>
                <tr></tr>
              </tfoot>
              <tbody style={{ display: "table-row-group" }}>
                <tr>
                  <td colSpan='3' style={{ display: "none" }}>
                    <div
                      id='BankingBlockFirstRow'
                      className='BankingBlockFirstRow'
                    ></div>
                  </td>
                </tr>
                <tr id='acctSummary-parent-details-N0B3FAB26'>
                  <td>
                    E-Euro
                    <br />
                  </td>
                  <td className='balance'>
                    <div>
                      <div className='number'>20</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan='3' style={{ display: "none" }}>
                    <div
                      id='BankingBlockLastRow'
                      className='BankingBlockLastRow'
                    ></div>
                  </td>
                </tr>
              </tbody>
            </table>
          )}
        </span>
        <br />
        <button onClick={handelTransferCBDC}>Transfer</button>
      </div>
    </div>
  );
};

export default SubsidiaryBankDashboard;
