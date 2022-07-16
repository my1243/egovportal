import React from "react";
import Voucher from "./Voucher";

const FeeVoucher = () => {
  return (
    <>
    <h1 className="text-4xl font-bold mx-6 my-8 sm:mx-12">Fees Information<hr className="rounded-full shadow-xl mt-2 pt-1 max-w-[40rem] bg-gradient-to-r from-[#f4510b] to-[#e9d022]"/></h1>
      <div className="rounded-xl overflow-hidden">
        <div className="px-6 pb-12 sm:pb-24 sm:pt-0 sm:px-12">
          <table className="table-auto rounded-lg border border-black border-collapse overflow-hidden font-medium w-full text-md sm:text-xl bg-orange-400 p-4">
            <thead>
              <tr className="text-white">
                <th className="p-4">Txn Date</th>
                <th>Voucher No</th>
                <th>Session No.</th>
                <th>Fees Amount</th>
                <th>Txn Status</th>
              </tr>
            </thead>
            <tbody className="rounded-lg">
              {[...Array(8)].map(() => {
                return (
                  <>
                    <Voucher/>
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
