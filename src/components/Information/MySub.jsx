import React from "react";

const MySub = () => {
  return (
    <>
      <div>
        <h1 className="mx-2 md:mx-12 m-4 font-bold pb-2">
          My Subjects
          <hr className="rounded-full shadow-xl mt-2 pt-1 max-w-[40rem] bg-gradient-to-r from-[#f4510b]  to-[#e9d022]" />
        </h1>
        <div className="res-text font-medium flex md:flex-row flex-col border border-orange-500 md:divide-x-2 divide-orange-500 p-4 shadow-md bg-orange-200 rounded-lg mx-2 md:mx-1 mb-4">
          <div className="flex flex-col justify-evenly w-full md:w-1/2 pb-0 md:p-4">
            <div className="flex justify-between">
              <h2>Subject code</h2>
              <h2>SC</h2>
            </div>
            <div className="flex justify-between">
              <h2>Rec code</h2>
              <h2>RS</h2>
            </div>
            <div className="flex justify-between">
              <h2>Theory Min Pass 1 :</h2>
              <h2>TMP1</h2>
            </div>
            <div className="flex justify-between">
              <h2>Theory Min Pass 1 :</h2>
              <h2>TMP2</h2>
            </div>
            <div className="flex justify-between">
              <h2>Theory total :</h2>
              <h2>TT</h2>
            </div>
            <div className="flex justify-between">
              <h2>Sessional min pass 1 :</h2>
              <h2>SMP1</h2>
            </div>
            <div className="flex justify-between">
              <h2>Sessional min pass 2 :</h2>
              <h2>SMP2</h2>
            </div>
            <div className="flex justify-between">
              <h2>Sessional total :</h2>
              <h2>ST</h2>
            </div>
            <div className="flex justify-between">
              <h2>Program :</h2>
              <h2>PRO</h2>
            </div>
            <div className="flex justify-between">
              <h2>Elective :</h2>
              <h2>EL</h2>
            </div>
            <div className="flex justify-between">
              <h2>Syllabus :</h2>
              <h2>SYLL</h2>
            </div>
          </div>
          <div className="flex flex-col justify-evenly w-full md:w-1/2 md:p-4">
            <div className="flex justify-between">
              <h2>Pr Min pass 1 :</h2>
              <h2>PMP 1</h2>
            </div>
            <div className="flex justify-between">
              <h2>Pr min pass 2 :</h2>
              <h2>PMP 2</h2>
            </div>
            <div className="flex justify-between">
              <h2>Pr total :</h2>
              <h2>PT</h2>
            </div>
            <div className="flex justify-between">
              <h2>TW min pass 1 :</h2>
              <h2>TWMP1</h2>
            </div>
            <div className="flex justify-between">
              <h2>TW min pass 2 :</h2>
              <h2>TWMP2</h2>
            </div>
            <div className="flex justify-between">
              <h2>TW total :</h2>
              <h2>TWT</h2>
            </div>
            <div className="flex justify-between">
              <h2>Total min pass :</h2>
              <h2>TMP</h2>
            </div>
            <div className="flex justify-between">
              <h2>Total marks :</h2>
              <h2>TM</h2>
            </div>
            <div className="flex justify-between">
              <h2>Session :</h2>
              <h2>SESS</h2>
            </div>
            <div className="flex justify-between">
              <h2>Credit</h2>
              <h2>CRE</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="tableDiv pb-12 sm:pb-24 sm:pt-0 sm:mx-12">
        <table className="table rounded-lg border border-collapse overflow-hidden font-medium w-full shadow-lg text-md sm:text-xl px-2 py-4">
          <thead className="bg-orange-500">
            <tr className="text-white tr">
              <th className="th p-4 res-text-th">SC</th>
              <th className="th res-text-th">ALIAS</th>
              <th className="th res-text-th">PRO</th>
              <th className="th res-text-th">RS</th>
              <th className="th res-text-th">SESS</th>
              <th className="th res-text-th">EL</th>
              <th className="th res-text-th">CRE</th>
              <th className="th res-text-th">TMP 1</th>
              <th className="th res-text-th">TMP 2</th>
              <th className="th res-text-th">TT</th>
              <th className="th res-text-th">SMP 1</th>
              <th className="th res-text-th">SMP 2</th>
              <th className="th res-text-th">ST</th>
              <th className="th res-text-th">PMP 1</th>
              <th className="th res-text-th">PMP 2</th>
              <th className="th res-text-th">PT</th>
              <th className="th res-text-th">TWMP 1</th>
              <th className="th res-text-th">TWMP 2</th>
              <th className="th res-text-th">TWT</th>
              <th className="th res-text-th">TMP</th>
              <th className="th res-text-th">TM</th>
              <th className="th res-text-th">SYLL</th>
            </tr>
          </thead>
          <tbody>
            <tr className="tr px-3 py-2 font-medium text-center text-lg cursor-pointer even:bg-[#ffd1b1] bg-orange-300">
              <td data-label="SC" className="td rmv-padding p-4 res-text-td">
                AF-410
              </td>
              <td
                data-label="ALIAS"
                className="td res-text-td"
              >
                FMA
              </td>
              <td data-label="PRO" className="td res-text-td">
                BT
              </td>
              <td data-label="RS" className="td res-text-td">
                A
              </td>
              <td data-label="SESS" className="td res-text-td">
                4
              </td>
              <td data-label="EL" className="td res-text-td">
                NO
              </td>
              <td data-label="CRE" className="td res-text-td">
                3
              </td>
              <td
                data-label="TMP 1"
                className="td res-text-td"
              >
                24
              </td>
              <td
                data-label="TMP 2"
                className="td res-text-td"
              >
                18
              </td>
              <td data-label="TT" className="td res-text-td">
                60
              </td>
              <td
                data-label="SMP 1"
                className="td res-text-td"
              >
                16
              </td>
              <td
                data-label="SMP 2"
                className="td res-text-td"
              >
                12
              </td>
              <td data-label="ST" className="td res-text-td">
                40
              </td>
              <td
                data-label="PMP 1"
                className="td res-text-td"
              >
                --
              </td>
              <td
                data-label="PMP 2"
                className="td res-text-td"
              >
                --
              </td>
              <td data-label="PT" className="td res-text-td">
                --
              </td>
              <td
                data-label="TWMP 1"
                className="td res-text-td"
              >
                --
              </td>
              <td
                data-label="TWMP 2"
                className="td res-text-td"
              >
                --
              </td>
              <td data-label="TWT" className="td res-text-td">
                --
              </td>
              <td data-label="TMP" className="td res-text-td">
                45
              </td>
              <td data-label="TM" className="td res-text-td">
                100
              </td>
              <td data-label="SYLL" className="td res-text-td">
                ---
              </td>
            </tr>
            <tr className="tr px-3 py-2 font-medium text-center text-lg cursor-pointer even:bg-[#ffd1b1] bg-[#ffd1b1]">
              <td data-label="SC" className="td rmv-padding p-4 res-text-td">
                AF-709
              </td>
              <td
                data-label="ALIAS"
                className="td res-text-td"
              >
                CCN
              </td>
              <td data-label="PRO" className="td res-text-td">
                CD
              </td>
              <td data-label="RS" className="td res-text-td">
                D
              </td>
              <td data-label="SESS" className="td res-text-td">
                3
              </td>
              <td data-label="EL" className="td res-text-td">
                NO
              </td>
              <td data-label="CRE" className="td res-text-td">
                7
              </td>
              <td
                data-label="TMP 1"
                className="td res-text-td"
              >
                23
              </td>
              <td
                data-label="TMP 2"
                className="td res-text-td"
              >
                12
              </td>
              <td data-label="TT" className="td res-text-td">
                60
              </td>
              <td
                data-label="SMP 1"
                className="td res-text-td"
              >
                14
              </td>
              <td
                data-label="SMP 2"
                className="td res-text-td"
              >
                16
              </td>
              <td data-label="ST" className="td res-text-td">
                40
              </td>
              <td
                data-label="PMP 1"
                className="td res-text-td"
              >
                --
              </td>
              <td
                data-label="PMP 2"
                className="td res-text-td"
              >
                --
              </td>
              <td data-label="PT" className="td res-text-td">
                --
              </td>
              <td
                data-label="TWMP 1"
                className="td res-text-td"
              >
                --
              </td>
              <td
                data-label="TWMP 2"
                className="td res-text-td"
              >
                --
              </td>
              <td data-label="TWT" className="td res-text-td">
                --
              </td>
              <td data-label="TMP" className="td res-text-td">
                40
              </td>
              <td data-label="TM" className="td res-text-td">
                100
              </td>
              <td data-label="SYLL" className="td res-text-td">
                ---
              </td>
            </tr>
            <tr className="tr px-3 py-2 font-medium text-center text-lg cursor-pointer even:bg-[#ffd1b1] bg-orange-300">
              <td data-label="SC" className="td rmv-padding p-4 res-text-td">
                AF-602
              </td>

              <td
                data-label="ALIAS"
                className="td res-text-td"
              >
                MAPI
              </td>
              <td data-label="PRO" className="td res-text-td">
                KL
              </td>
              <td data-label="RS" className="td res-text-td">
                S
              </td>
              <td data-label="SESS" className="td res-text-td">
                4
              </td>
              <td data-label="EL" className="td res-text-td">
                NO
              </td>
              <td data-label="CRE" className="td res-text-td">
                6
              </td>
              <td
                data-label="TMP 1"
                className="td res-text-td"
              >
                28
              </td>
              <td
                data-label="TMP 2"
                className="td res-text-td"
              >
                14
              </td>
              <td data-label="TT" className="td res-text-td">
                60
              </td>
              <td
                data-label="SMP 1"
                className="td res-text-td"
              >
                13
              </td>
              <td
                data-label="SMP 2"
                className="td res-text-td"
              >
                16
              </td>
              <td data-label="ST" className="td res-text-td">
                40
              </td>
              <td
                data-label="PMP 1"
                className="td res-text-td"
              >
                --
              </td>
              <td
                data-label="PMP 2"
                className="td res-text-td"
              >
                --
              </td>
              <td data-label="PT" className="td res-text-td">
                --
              </td>
              <td
                data-label="TWMP 1"
                className="td res-text-td"
              >
                --
              </td>
              <td
                data-label="TWMP 2"
                className="td res-text-td"
              >
                --
              </td>
              <td data-label="TWT" className="td res-text-td">
                --
              </td>
              <td data-label="TMP" className="td res-text-td">
                45
              </td>
              <td data-label="TM" className="td res-text-td">
                100
              </td>
              <td data-label="SYLL" className="td res-text-td">
                ---
              </td>
            </tr>
            <tr className="tr px-3 py-2 font-medium text-center text-lg cursor-pointer even:bg-[#ffd1b1] bg-[#ffd1b1]">
              <td data-label="SC" className="td rmv-padding p-4 res-text-td">
                AF-290
              </td>
              <td
                data-label="ALIAS"
                className="td res-text-td"
              >
                DSA
              </td>
              <td data-label="PRO" className="td res-text-td">
                AD
              </td>
              <td data-label="RS" className="td res-text-td">
                A
              </td>
              <td data-label="SESS" className="td res-text-td">
                4
              </td>
              <td data-label="EL" className="td res-text-td">
                NO
              </td>
              <td data-label="CRE" className="td res-text-td">
                3
              </td>
              <td
                data-label="TMP 1"
                className="td res-text-td"
              >
                24
              </td>
              <td
                data-label="TMP 2"
                className="td res-text-td"
              >
                18
              </td>
              <td data-label="TT" className="td res-text-td">
                60
              </td>
              <td
                data-label="SMP 1"
                className="td res-text-td"
              >
                16
              </td>
              <td
                data-label="SMP 2"
                className="td res-text-td"
              >
                12
              </td>
              <td data-label="ST" className="td res-text-td">
                40
              </td>
              <td
                data-label="PMP 1"
                className="td res-text-td"
              >
                --
              </td>
              <td
                data-label="PMP 2"
                className="td res-text-td"
              >
                --
              </td>
              <td data-label="PT" className="td res-text-td">
                --
              </td>
              <td
                data-label="TWMP 1"
                className="td res-text-td"
              >
                --
              </td>
              <td
                data-label="TWMP 2"
                className="td res-text-td"
              >
                --
              </td>
              <td data-label="TWT" className="td res-text-td">
                --
              </td>
              <td data-label="TMP" className="td res-text-td">
                45
              </td>
              <td data-label="TM" className="td res-text-td">
                100
              </td>
              <td data-label="SYLL" className="td res-text-td">
                ---
              </td>
            </tr>
            <tr className="tr px-3 py-2 font-medium text-center text-lg cursor-pointer even:bg-[#ffd1b1] bg-orange-300">
              <td data-label="SC" className="td rmv-padding p-4 res-text-td">
                AF-305
              </td>

              <td
                data-label="ALIAS"
                className="td res-text-td"
              >
                CO
              </td>
              <td data-label="PRO" className="td res-text-td">
                BL
              </td>
              <td data-label="RS" className="td res-text-td">
                A
              </td>
              <td data-label="SESS" className="td res-text-td">
                4
              </td>
              <td data-label="EL" className="td res-text-td">
                NO
              </td>
              <td data-label="CRE" className="td res-text-td">
                3
              </td>
              <td
                data-label="TMP 1"
                className="td res-text-td"
              >
                24
              </td>
              <td
                data-label="TMP 2"
                className="td res-text-td"
              >
                18
              </td>
              <td data-label="TT" className="td res-text-td">
                60
              </td>
              <td
                data-label="SMP 1"
                className="td res-text-td"
              >
                16
              </td>
              <td
                data-label="SMP 2"
                className="td res-text-td"
              >
                12
              </td>
              <td data-label="ST" className="td res-text-td">
                40
              </td>
              <td
                data-label="PMP 1"
                className="td res-text-td"
              >
                --
              </td>
              <td
                data-label="PMP 2"
                className="td res-text-td"
              >
                --
              </td>
              <td data-label="PT" className="td res-text-td">
                --
              </td>
              <td
                data-label="TWMP 1"
                className="td res-text-td"
              >
                --
              </td>
              <td
                data-label="TWMP 2"
                className="td res-text-td"
              >
                --
              </td>
              <td data-label="TWT" className="td res-text-td">
                --
              </td>
              <td data-label="TMP" className="td res-text-td">
                45
              </td>
              <td data-label="TM" className="td res-text-td">
                100
              </td>
              <td data-label="SYLL" className="td res-text-td">
                ---
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MySub;
