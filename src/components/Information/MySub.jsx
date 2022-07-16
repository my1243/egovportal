import React from "react";


const MySub = () => {

    return (
        <>
            <div>
                <div>
                    <h1 className="ml-20 mt-10 font-bold text-3xl">My Subject</h1>
                </div>
                <div className="sub_info flex lg:flex-row md:flex-col shadow-md shadow-black ml-20 mt-10  lg:w-2/3 md:w-5/6">
                    <div className="sub flex flex-row gap-28 mt-10 mb-10 ml-10">
                        <div className="font-medium">
                            <h2 className="mb-2">Subject code</h2>
                            <h2 className="mb-2">Rec code</h2>
                            <h2 className="mb-2">Theory Min Pass 1 :</h2>
                            <h2 className="mb-2">Theory Min Pass 1 :</h2>
                            <h2 className="mb-2">Theory total :</h2>
                            <h2 className="mb-2">Sessional min pass 1 :</h2>
                            <h2 className="mb-2">Sessional min pass 1 :</h2>
                            <h2 className="mb-2">Sessional total :</h2>
                            <h2 className="mb-2">Program :</h2>
                            <h2 className="mb-2">Elective :</h2>
                            <h2>Syllabus :</h2>
                        </div>
                        <div className="text-orange-800 font-medium lg:-ml-12 md:ml-44 sc">
                            <h2 className="mb-2">SC</h2>
                            <h2 className="mb-2">RS</h2>
                            <h2 className="mb-2">TMP1</h2>
                            <h2 className="mb-2">TMP2</h2>
                            <h2 className="mb-2">TT</h2>
                            <h2 className="mb-2">SMP1</h2>
                            <h2 className="mb-2">SMP2</h2>
                            <h2 className="mb-2">ST</h2>
                            <h2 className="mb-2">PRO</h2>
                            <h2 className="mb-2">EL</h2>
                            <h2>SYLL</h2>
                        </div>
                        <div className="border-2 lg:bg-orange-500 lg:border-orange-500 h-96 -mt-5 lg:ml-10 -mb-7 md:border-white br">
                        </div>
                    </div>
                    <div className="flex flex-row gap-28 lg:mt-10 md:-mt-7 mb-10 lg:ml-32 md:ml-10 pr">
                        <div className="font-medium">
                            <h2 className="mb-2">Pr Min pass 1 :</h2>
                            <h2 className="mb-2">Pr min pass 2 :</h2>
                            <h2 className="mb-2">Pr total :</h2>
                            <h2 className="mb-2">TW min pass 1 :</h2>
                            <h2 className="mb-2">TW min pass 2 :</h2>
                            <h2 className="mb-2">TW total :</h2>
                            <h2 className="mb-2">Total min pass :</h2>
                            <h2 className="mb-2">Total marks :</h2>
                            <h2 className="mb-2">Session :</h2>
                            <h2>Credit</h2>
                        </div>
                        <div className="text-orange-800 font-medium md:ml-52 lg:ml-10 pmp">
                            <h2 className="mb-2">PMP 1</h2>
                            <h2 className="mb-2">PMP 2</h2>
                            <h2 className="mb-2">PT</h2>
                            <h2 className="mb-2">TWMP1</h2>
                            <h2 className="mb-2">TWMP2</h2>
                            <h2 className="mb-2">TWT</h2>
                            <h2 className="mb-2">TMP</h2>
                            <h2 className="mb-2">TM</h2>
                            <h2 className="mb-2">SESS</h2>
                            <h2>CRE</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-10 mb-10 ml-4 mr-4">
                <table className="table_a table-auto w-full shadow-md shadow-black">
                    <thead className="bg-orange-500 h-20 text-white">
                        <tr>
                            <th className="border-4 border-white">SC</th>
                            <th className="border-4 border-white">ALIAS</th>
                            <th className="border-4 border-white">PRO</th>
                            <th className="border-4 border-white">RS</th>
                            <th className="border-4 border-white">SESS</th>
                            <th className="border-4 border-white">EL</th>
                            <th className="border-4 border-white">CRE</th>
                            <th className="border-4 border-white">TMP 1</th>
                            <th className="border-4 border-white">TMP 2</th>
                            <th className="border-4 border-white">TT</th>
                            <th className="border-4 border-white">SMP 1</th>
                            <th className="border-4 border-white">SMP 2</th>
                            <th className="border-4 border-white">ST</th>
                            <th className="border-4 border-white">PMP 1</th>
                            <th className="border-4 border-white">PMP 2</th>
                            <th className="border-4 border-white">PT</th>
                            <th className="border-4 border-white">TWMP 1</th>
                            <th className="border-4 border-white">TWMP 2</th>
                            <th className="border-4 border-white">TWT</th>
                            <th className="border-4 border-white">TMP</th>
                            <th className="border-4 border-white">TM</th>
                            <th className="border-4 border-white">SYLL</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-orange-100">
                            <td data-label="SC" className="text-center border-4 border-white">AF-410</td>
                            <td data-label="ALIAS" className="text-center border-4 border-white">FMA</td>
                            <td data-label="PRO" className="text-center border-4 border-white">BT</td>
                            <td data-label="RS" className="text-center border-4 border-white">A</td>
                            <td data-label="SESS" className="text-center border-4 border-white">4</td>
                            <td data-label="EL" className="text-center border-4 border-white">NO</td>
                            <td data-label="CRE" className="text-center border-4 border-white">3</td>
                            <td data-label="TMP 1" className="text-center border-4 border-white">24</td>
                            <td data-label="TMP 2" className="text-center border-4 border-white">18</td>
                            <td data-label="TT" className="text-center border-4 border-white">60</td>
                            <td data-label="SMP 1" className="text-center border-4 border-white">16</td>
                            <td data-label="SMP 2" className="text-center border-4 border-white">12</td>
                            <td data-label="ST" className="text-center border-4 border-white">40</td>
                            <td data-label="PMP 1" className="text-center border-4 border-white">--</td>
                            <td data-label="PMP 2" className="text-center border-4 border-white">--</td>
                            <td data-label="PT" className="text-center border-4 border-white">--</td>
                            <td data-label="TWMP 1" className="text-center border-4 border-white">--</td>
                            <td data-label="TWMP 2" className="text-center border-4 border-white">--</td>
                            <td data-label="TWT" className="text-center border-4 border-white">--</td>
                            <td data-label="TMP" className="text-center border-4 border-white">45</td>
                            <td data-label="TM" className="text-center border-4 border-white">100</td>
                            <td data-label="SYLL" className="text-center border-4 border-white">---</td>
                        </tr>
                        <tr className="bg-orange-300">
                            <td data-label="SC" className="text-center border-4 border-white">AF-410</td>
                            <td data-label="ALIAS" className="text-center border-4 border-white">FMA</td>
                            <td data-label="PRO" className="text-center border-4 border-white">BT</td>
                            <td data-label="RS" className="text-center border-4 border-white">A</td>
                            <td data-label="SESS" className="text-center border-4 border-white">4</td>
                            <td data-label="EL" className="text-center border-4 border-white">NO</td>
                            <td data-label="CRE" className="text-center border-4 border-white">3</td>
                            <td data-label="TMP 1" className="text-center border-4 border-white">24</td>
                            <td data-label="TMP 2" className="text-center border-4 border-white">18</td>
                            <td data-label="TT" className="text-center border-4 border-white">60</td>
                            <td data-label="SMP 1" className="text-center border-4 border-white">16</td>
                            <td data-label="SMP 2" className="text-center border-4 border-white">12</td>
                            <td data-label="ST" className="text-center border-4 border-white">40</td>
                            <td data-label="PMP 1" className="text-center border-4 border-white">--</td>
                            <td data-label="PMP 2" className="text-center border-4 border-white">--</td>
                            <td data-label="PT" className="text-center border-4 border-white">--</td>
                            <td data-label="TWMP 1" className="text-center border-4 border-white">--</td>
                            <td data-label="TWMP 2" className="text-center border-4 border-white">--</td>
                            <td data-label="TWT" className="text-center border-4 border-white">--</td>
                            <td data-label="TMP" className="text-center border-4 border-white">45</td>
                            <td data-label="TM" className="text-center border-4 border-white">100</td>
                            <td data-label="SYLL" className="text-center border-4 border-white">---</td>

                        </tr>
                        <tr className="bg-orange-100">
                            <td data-label="SC" className="text-center border-4 border-white">AF-410</td>

                            <td data-label="ALIAS" className="text-center border-4 border-white">FMA</td>
                            <td data-label="PRO" className="text-center border-4 border-white">BT</td>
                            <td data-label="RS" className="text-center border-4 border-white">A</td>
                            <td data-label="SESS" className="text-center border-4 border-white">4</td>
                            <td data-label="EL" className="text-center border-4 border-white">NO</td>
                            <td data-label="CRE" className="text-center border-4 border-white">3</td>
                            <td data-label="TMP 1" className="text-center border-4 border-white">24</td>
                            <td data-label="TMP 2" className="text-center border-4 border-white">18</td>
                            <td data-label="TT" className="text-center border-4 border-white">60</td>
                            <td  data-label="SMP 1" className="text-center border-4 border-white">16</td>
                            <td data-label="SMP 2" className="text-center border-4 border-white">12</td>
                            <td data-label="ST" className="text-center border-4 border-white">40</td>
                            <td data-label="PMP 1" className="text-center border-4 border-white">--</td>
                            <td data-label="PMP 2" className="text-center border-4 border-white">--</td>
                            <td data-label="PT" className="text-center border-4 border-white">--</td>
                            <td data-label="TWMP 1" className="text-center border-4 border-white">--</td>
                            <td data-label="TWMP 2" className="text-center border-4 border-white">--</td>
                            <td data-label="TWT" className="text-center border-4 border-white">--</td>
                            <td data-label="TMP" className="text-center border-4 border-white">45</td>
                            <td data-label="TM" className="text-center border-4 border-white">100</td>
                            <td data-label="SYLL" className="text-center border-4 border-white">---</td>

                        </tr>

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default MySub;