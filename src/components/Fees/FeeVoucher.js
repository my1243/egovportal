import React from "react";
import Voucher from "./Voucher";

const FeeVoucher = () => {
  return (
    <>
      <h1 className="text-4xl font-bold mx-6 my-8 sm:mx-12">
        Fees Information
        <hr className="rounded-full shadow-xl mt-2 pt-1 max-w-[40rem] bg-gradient-to-r from-[#f4510b] to-[#e9d022]" />
      </h1>
      <div className="rounded-xl overflow-hidden">
        <div className="tableDiv pb-12 sm:pb-24 sm:pt-0 sm:mx-12">
          <table className="table rounded-lg border border-collapse overflow-hidden font-medium w-full shadow-lg text-md sm:text-xl px-2 py-4">
            <thead className="bg-orange-500">
              <tr className="text-white tr">
                <th className="p-4 th">Txn Date</th>
                <th className="th">Voucher No</th>
                <th className="th">Session No.</th>
                <th className="th">Fees Amount</th>
                <th className="th">Txn Status</th>
              </tr>
            </thead>
            <tbody className="rounded-lg">
              {[...Array(8)].map(() => {
                return (
                  <>
                    <Voucher />
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default FeeVoucher;
