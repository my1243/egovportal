import React, { useState } from "react";

const Voucher = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <tr
        onClick={() => setIsActive(!isActive)}
        className="tr px-3 py-2 font-medium text-center text-lg cursor-pointer even:bg-[#ffd1b1] odd:bg-orange-300">
        <td className="td p-4 txn-dt" data-label="Txn Date">2020-12-09</td>
        <td className="td" data-label="voucher No">T20IT378581</td>
        <td className="td" data-label="Session No">1</td>
        <td className="td" data-label="Fees Amount">78500.00</td>
        <td className="td txn-st" data-label="Txn Status">PAID</td>
      </tr>
      {isActive && (
        <tr className="voucher-tr">
          <td className="voucher-td" colSpan={5}><div className="bg-orange-200 mb-2 text-lg transition-all duration-500 ease-in">
            <Voucher_card />
          </div>
          </td>
        </tr>
      )}
    </>
  );
};

const Voucher_card = () => {
  return (
    <>
      <div className="fee-info mb-2 flex flex-col sm:flex-row justify-center text-lg bg-orange-200 w-full sm:divide-x-2 p-2 divide-orange-300">
        <div className="flex flex-col justify-evenly w-full sm:w-1/2 px-4 pt-4 sm:p-4">
          <div className="flex justify-between">
            <h1>Transaction Date</h1>
            <h3>2020-12-09</h3>
          </div>
          <div className="flex justify-between">
            <h1>Voucher No.</h1>
            <h3>T20IT378581</h3>
          </div>
          <div className="flex justify-between">
            <h1>Batch Year</h1>
            <h3>2020</h3>
          </div>
          <div className="flex justify-between">
            <h1>Session No.</h1>
            <h3>1</h3>
          </div>
          <div className="flex justify-between">
            <h1>Admission Type</h1>
            <h3>SF</h3>
          </div>
          <div className="flex justify-between">
            <h1>Fees Amount</h1>
            <h3>78500.00</h3>
          </div>
          <div className="flex justify-between">
            <h1>Transaction Status</h1>
            <h3>PAID</h3>
          </div>
        </div>
        <div className="flex flex-col justify-evenly w-full sm:w-1/2 px-4 pb-4 sm:p-4">
          <div className="flex justify-between">
            <h1>Pay Mode</h1>
            <h3>CASH</h3>
          </div>
          <div className="flex justify-between">
            <h1>Cheque No.</h1>
            <h3>-</h3>
          </div>
          <div className="flex justify-between">
            <h1>Cheque Date</h1>
            <h3>-</h3>
          </div>
          <div className="flex justify-between">
            <h1>Bank Branch</h1>
            <h3>-</h3>
          </div>
          <div className="flex justify-between">
            <h1>Paid Date</h1>
            <h3>2021-06-09</h3>
          </div>
          <div className="flex justify-between">
            <h1>Reconsile Date</h1>
            <h3>2021-06-09</h3>
          </div>
          <div className="flex justify-between">
            <h1>Reconsile No.</h1>
            <h3>2020IT1033</h3>
          </div>
        </div>
      </div>

      <div className="btn-voucherDiv px-sm-6 px-2 pb-sm-6 pb-2">
        <button className="p-2 mx-2 bg-orange-500 text-white font-medium rounded-md flex gap-x-2 items-center">
          <h1>Regenerate <i class="fa-solid fa-pen-to-square"></i></h1>
          <svg
            width="16px"
            height="16px"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path d="m3.25 13.25h9m-8.5-6.5 4 3.5 4-3.5m-4-5v8.5" />
          </svg>
        </button>
        <button className="p-2 bg-orange-500 text-white font-medium rounded-md flex gap-x-2 items-center">
          <h1>Print Voucher</h1>
          <i class="fa-solid fa-download"></i>
        </button>
      </div>
    </>
  );
};

export default Voucher;
