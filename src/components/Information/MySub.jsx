import React from "react";

const MySub = () => {
  return (
    <>
      <div>
        <h1 className="mx-2 md:mx-12 m-4 lg:text-4xl text-xl font-bold pb-2">
          My Subjects
          <hr className="rounded-full shadow-xl mt-2 pt-1 max-w-[40rem] bg-gradient-to-r from-[#f4510b]  to-[#e9d022]" />
        </h1>
        <div className="font-medium flex md:flex-row flex-col border border-orange-500 md:divide-x-2 divide-orange-500 p-0 md:p-2 shadow-md bg-orange-200 rounded-lg mx-2 md:mx-12">
          <div className="flex flex-col justify-evenly w-full md:w-1/2 px-4 pt-4 pb-0 md:p-4">
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
          <div className="flex flex-col justify-evenly w-full md:w-1/2 px-4 pt-0 pb-4 md:p-4">
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
      <div className="my-10 mx-2 md:mx-12">
        <table className="table_a table-auto rounded-lg overflow-hidden w-full shadow-md">
          <thead className="bg-orange-500 h-12 text-white">
            <tr>
              <th className="border border-white">SC</th>
              <th className="border border-white">ALIAS</th>
              <th className="border border-white">PRO</th>
              <th className="border border-white">RS</th>
              <th className="border border-white">SESS</th>
              <th className="border border-white">EL</th>
              <th className="border border-white">CRE</th>
              <th className="border border-white">TMP 1</th>
              <th className="border border-white">TMP 2</th>
              <th className="border border-white">TT</th>
              <th className="border border-white">SMP 1</th>
              <th className="border border-white">SMP 2</th>
              <th className="border border-white">ST</th>
              <th className="border border-white">PMP 1</th>
              <th className="border border-white">PMP 2</th>
              <th className="border border-white">PT</th>
              <th className="border border-white">TWMP 1</th>
              <th className="border border-white">TWMP 2</th>
              <th className="border border-white">TWT</th>
              <th className="border border-white">TMP</th>
              <th className="border border-white">TM</th>
              <th className="border border-white">SYLL</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-orange-100">
              <td data-label="SC" className="text-center border border-white">
                AF-410
              </td>
              <td
                data-label="ALIAS"
                className="text-center border border-white"
              >
                FMA
              </td>
              <td data-label="PRO" className="text-center border border-white">
                BT
              </td>
              <td data-label="RS" className="text-center border border-white">
                A
              </td>
              <td data-label="SESS" className="text-center border border-white">
                4
              </td>
              <td data-label="EL" className="text-center border border-white">
                NO
              </td>
              <td data-label="CRE" className="text-center border border-white">
                3
              </td>
              <td
                data-label="TMP 1"
                className="text-center border border-white"
              >
                24
              </td>
              <td
                data-label="TMP 2"
                className="text-center border border-white"
              >
                18
              </td>
              <td data-label="TT" className="text-center border border-white">
                60
              </td>
              <td
                data-label="SMP 1"
                className="text-center border border-white"
              >
                16
              </td>
              <td
                data-label="SMP 2"
                className="text-center border border-white"
              >
                12
              </td>
              <td data-label="ST" className="text-center border border-white">
                40
              </td>
              <td
                data-label="PMP 1"
                className="text-center border border-white"
              >
                --
              </td>
              <td
                data-label="PMP 2"
                className="text-center border border-white"
              >
                --
              </td>
              <td data-label="PT" className="text-center border border-white">
                --
              </td>
              <td
                data-label="TWMP 1"
                className="text-center border border-white"
              >
                --
              </td>
              <td
                data-label="TWMP 2"
                className="text-center border border-white"
              >
                --
              </td>
              <td data-label="TWT" className="text-center border border-white">
                --
              </td>
              <td data-label="TMP" className="text-center border border-white">
                45
              </td>
              <td data-label="TM" className="text-center border border-white">
                100
              </td>
              <td data-label="SYLL" className="text-center border border-white">
                ---
              </td>
            </tr>
            <tr className="bg-orange-300">
              <td data-label="SC" className="text-center border border-white">
                AF-410
              </td>
              <td
                data-label="ALIAS"
                className="text-center border border-white"
              >
                FMA
              </td>
              <td data-label="PRO" className="text-center border border-white">
                BT
              </td>
              <td data-label="RS" className="text-center border border-white">
                A
              </td>
              <td data-label="SESS" className="text-center border border-white">
                4
              </td>
              <td data-label="EL" className="text-center border border-white">
                NO
              </td>
              <td data-label="CRE" className="text-center border border-white">
                3
              </td>
              <td
                data-label="TMP 1"
                className="text-center border border-white"
              >
                24
              </td>
              <td
                data-label="TMP 2"
                className="text-center border border-white"
              >
                18
              </td>
              <td data-label="TT" className="text-center border border-white">
                60
              </td>
              <td
                data-label="SMP 1"
                className="text-center border border-white"
              >
                16
              </td>
              <td
                data-label="SMP 2"
                className="text-center border border-white"
              >
                12
              </td>
              <td data-label="ST" className="text-center border border-white">
                40
              </td>
              <td
                data-label="PMP 1"
                className="text-center border border-white"
              >
                --
              </td>
              <td
                data-label="PMP 2"
                className="text-center border border-white"
              >
                --
              </td>
              <td data-label="PT" className="text-center border border-white">
                --
              </td>
              <td
                data-label="TWMP 1"
                className="text-center border border-white"
              >
                --
              </td>
              <td
                data-label="TWMP 2"
                className="text-center border border-white"
              >
                --
              </td>
              <td data-label="TWT" className="text-center border border-white">
                --
              </td>
              <td data-label="TMP" className="text-center border border-white">
                45
              </td>
              <td data-label="TM" className="text-center border border-white">
                100
              </td>
              <td data-label="SYLL" className="text-center border border-white">
                ---
              </td>
            </tr>
            <tr className="bg-orange-100">
              <td data-label="SC" className="text-center border border-white">
                AF-410
              </td>

              <td
                data-label="ALIAS"
                className="text-center border border-white"
              >
                FMA
              </td>
              <td data-label="PRO" className="text-center border border-white">
                BT
              </td>
              <td data-label="RS" className="text-center border border-white">
                A
              </td>
              <td data-label="SESS" className="text-center border border-white">
                4
              </td>
              <td data-label="EL" className="text-center border border-white">
                NO
              </td>
              <td data-label="CRE" className="text-center border border-white">
                3
              </td>
              <td
                data-label="TMP 1"
                className="text-center border border-white"
              >
                24
              </td>
              <td
                data-label="TMP 2"
                className="text-center border border-white"
              >
                18
              </td>
              <td data-label="TT" className="text-center border border-white">
                60
              </td>
              <td
                data-label="SMP 1"
                className="text-center border border-white"
              >
                16
              </td>
              <td
                data-label="SMP 2"
                className="text-center border border-white"
              >
                12
              </td>
              <td data-label="ST" className="text-center border border-white">
                40
              </td>
              <td
                data-label="PMP 1"
                className="text-center border border-white"
              >
                --
              </td>
              <td
                data-label="PMP 2"
                className="text-center border border-white"
              >
                --
              </td>
              <td data-label="PT" className="text-center border border-white">
                --
              </td>
              <td
                data-label="TWMP 1"
                className="text-center border border-white"
              >
                --
              </td>
              <td
                data-label="TWMP 2"
                className="text-center border border-white"
              >
                --
              </td>
              <td data-label="TWT" className="text-center border border-white">
                --
              </td>
              <td data-label="TMP" className="text-center border border-white">
                45
              </td>
              <td data-label="TM" className="text-center border border-white">
                100
              </td>
              <td data-label="SYLL" className="text-center border border-white">
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
