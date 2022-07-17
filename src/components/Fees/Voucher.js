import React, { useState } from "react";

const Voucher = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <tr
        onClick={() => setIsActive(!isActive)}
        className="tr px-3 py-2 font-medium text-center text-lg cursor-pointer even:bg-[#ffd1b1] odd:bg-orange-300">
        <td className="td p-4 rmv-padding res-text-td" data-label="Txn Date">2020-12-09</td>
        <td className="td res-text-td" data-label="voucher No">T20IT378581</td>
        <td className="td res-text-td" data-label="Session No">1</td>
        <td className="td res-text-td" data-label="Fees Amount">78500.00</td>
        <td className="td rmv-padding res-text-td" data-label="Txn Status">PAID</td>
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
            <p className="res-text">Transaction Date</p>
            <p className="res-text">2020-12-09</p>
          </div>
          <div className="flex justify-between">
            <p className="res-text">Voucher No.</p>
            <p className="res-text">T20IT378581</p>
          </div>
          <div className="flex justify-between">
            <p className="res-text">Batch Year</p>
            <p className="res-text">2020</p>
          </div>
          <div className="flex justify-between">
            <p className="res-text">Session No.</p>
            <p className="res-text">1</p>
          </div>
          <div className="flex justify-between">
            <p className="res-text">Admission Type</p>
            <p className="res-text">SF</p>
          </div>
          <div className="flex justify-between">
            <p className="res-text">Fees Amount</p>
            <p className="res-text">78500.00</p>
          </div>
          <div className="flex justify-between">
            <p className="res-text">Transaction Status</p>
            <p className="res-text">PAID</p>
          </div>
        </div>
        <div className="flex flex-col justify-evenly w-full sm:w-1/2 px-4 pb-4 sm:p-4">
          <div className="flex justify-between">
            <p className="res-text">Pay Mode</p>
            <p className="res-text">CASH</p>
          </div>
          <div className="flex justify-between">
            <p className="res-text">Cheque No.</p>
            <p className="res-text">-</p>
          </div>
          <div className="flex justify-between">
            <p className="res-text">Cheque Date</p>
            <p className="res-text">-</p>
          </div>
          <div className="flex justify-between">
            <p className="res-text">Bank Branch</p>
            <p className="res-text">-</p>
          </div>
          <div className="flex justify-between">
            <p className="res-text">Paid Date</p>
            <p className="res-text">2021-06-09</p>
          </div>
          <div className="flex justify-between">
            <p className="res-text">Reconsile Date</p>
            <p className="res-text">2021-06-09</p>
          </div>
          <div className="flex justify-between">
            <p className="res-text">Reconsile No.</p>
            <p className="res-text">2020IT1033</p>
          </div>
        </div>
      </div>

      <div className="btn-voucherDiv px-sm-6 px-2 pb-sm-6 pb-2">
        <button className="p-2 mx-2 bg-orange-500 text-white font-medium rounded-md flex gap-x-2 items-center">
          Regenerate <i class="fa-solid fa-location-arrow"></i>
        </button>
        <button className="p-2 bg-orange-500 text-white font-medium rounded-md flex gap-x-2 items-center">
          Print Voucher
          <i class="fa-solid fa-download"></i>
        </button>
      </div>
    </>
  );
};

export default Voucher;
