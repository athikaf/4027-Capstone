import React, { useState } from "react";


const CentralBankDashboard = () => {
  const [tableVisible, setTableVisible] = useState(true);

  const toggleTableVisibility = () => {
    setTableVisible(!tableVisible);
  };

  return (
    <div>
      <h1>Central Bank Dashboard</h1>
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
              onClick={toggleTableVisibility}
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
                  <div >
                    <div
                      className='number'
                    >
                      0.00
                    </div>
                  </div>
                </td>
              </tr>
              <tr id='acctSummary-parent-details-P5B7E4D44'>
                <td>
                    Student Banking Advantage Plan - *****32*6388
                  <br />
                </td>
                <td className='balance'>
                  <div >
                    <div
                      className='number'
                    >
                      0.96
                    </div>
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
      </div>
    </div>
  );
};

export default CentralBankDashboard;
