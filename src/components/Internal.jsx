import React from "react";


const Internal = () => {
    return (
        <>
            <div>
                <div>
                    <h1 className="font-bold text-3xl ml-16 mt-10">Sessional Result</h1>
                </div>
                <div className="mb-10  mt-20 mr-4 ml-4">
                    <table className="table_I table-auto w-full h-96 shadow-md shadow-black">
                        <thead className="bg-orange-500 h-20 text-white">
                            <tr>
                                <th className="text-center border-4 border-white">Subject</th>
                                <th className="border-4 text-center border-white">Attendance obtained <br></br> (sessional_1)</th>
                                <th className="border-4 text-center border-white">Attendance Total <br></br> (sessional_1)</th>
                                <th className="border-4 border-white text-center">Marks obtained <br></br> (sessional_1)</th>
                                <th className="border-4 border-white text-center">Total <br></br>marks <br></br> (sessional_1)</th>
                                <th className="border-4 border-white text-center">Attendance obtained<br></br> (sessional_2)</th>
                                <th className="border-4 text-center border-white">Attendance total <br></br> (sessional_1)</th>
                                <th className="border-4 border-white text-center">Marks obtained <br></br> (sessional_2)</th>
                                <th className="border-4 border-white text-center">Total<br></br> marks <br></br> (sessional_2)</th>
                                <th className="border-4 border-white text-center">Attendance obtained<br></br> (sessional_3)</th>
                                <th className="border-4 text-center border-white">Attendance total <br></br> (sessional_3)</th>
                                <th className="border-4 border-white text-center">Marks obtained <br></br> (sessional_3)</th>
                                <th className="border-4 border-white text-center">Total <br></br>marks<br></br>(sessional_3)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-orange-100">
                                <td data-label="Subject" className="text-center border-4 border-white">DBMS<br></br>(IT-303)</td>
                                <td data-label="Attendance obtained (s-1)" className="text-center border-4 border-white">14</td>
                                <td data-label="Attendance Total (s-1)" className="text-center border-4 border-white">16</td>
                                <td data-label="Marks obtained (s-1)" className="text-center border-4 border-white">33</td>
                                <td data-label="Total marks (s-1)" className="text-center border-4 border-white">36</td>
                                <td data-label="Attendance obtained (s-2)" className="text-center border-4 border-white">13</td>
                                <td data-label="Attendance total (s-2)" className="text-center border-4 border-white">16</td>
                                <td data-label="Marks obtained (s-2)" className="text-center border-4 border-white">30</td>
                                <td data-label="Total marks (s-2)" className="text-center border-4 border-white">36</td>
                                <td data-label="Attendance obtained (s-3)" className="text-center border-4 border-white">15</td>
                                <td data-label="Attendance total (s-3)" className="text-center border-4 border-white">16</td>
                                <td data-label="Marks obtained (s-3)" className="text-center border-4 border-white">34</td>
                                <td data-label="Total marks (s-3)" className="text-center border-4 border-white">36</td>
                            </tr>
                            <tr className="bg-orange-300">
                            <td data-label="Subject" className="text-center border-4 border-white">DBMS<br></br>(IT-303)</td>
                                <td data-label="Attendance obtained (s-1)" className="text-center border-4 border-white">14</td>
                                <td data-label="Attendance total (s-1)" className="text-center border-4 border-white">16</td>
                                <td data-label="Marks obtained (s-1)" className="text-center border-4 border-white">33</td>
                                <td data-label="Total marks (s-1)" className="text-center border-4 border-white">36</td>
                                <td data-label="Attendence obtained (s-2)" className="text-center border-4 border-white">13</td>
                                <td data-label="Attendence total (s-2)" className="text-center border-4 border-white">16</td>
                                <td data-label="Marks obtained (s-2)" className="text-center border-4 border-white">30</td>
                                <td data-label="Total marks (s-2)" className="text-center border-4 border-white">36</td>
                                <td data-label="Attendence obtained (s-3)" className="text-center border-4 border-white">15</td>
                                <td data-label="Attendence total (s-3)" className="text-center border-4 border-white">16</td>
                                <td data-label="Marks obtained (s-3)" className="text-center border-4 border-white">34</td>
                                <td data-label="Total marks(s-3)" className="text-center border-4 border-white">36</td>
                            </tr>
                            <tr className="bg-orange-100">

                            <td data-label="Subject" className="text-center border-4 border-white">DBMS<br></br>(IT-303)</td>
                                <td data-label="Attendence obtained (s-1)" className="text-center border-4 border-white">14</td>
                                <td data-label="Attendence total (s-1)" className="text-center border-4 border-white">16</td>
                                <td data-label="Marks obtained (s-1)" className="text-center border-4 border-white">33</td>
                                <td data-label="Total marks(s-1)" className="text-center border-4 border-white">36</td>
                                <td data-label="Attendence obtained (s-2)" className="text-center border-4 border-white">13</td>
                                <td data-label="Attendence total (s-2)" className="text-center border-4 border-white">16</td>
                                <td data-label="Marks obtained (s-2)" className="text-center border-4 border-white">30</td>
                                <td data-label="Total marks (s-2)" className="text-center border-4 border-white">36</td>
                                <td data-label="Attendence obtained (s-3)" className="text-center border-4 border-white">15</td>
                                <td data-label="Attendence total (s-3)" className="text-center border-4 border-white">16</td>
                                <td data-label="Marks obtained (s-3)" className="text-center border-4 border-white">34</td>
                                <td data-label="Total marks (s-3)" className="text-center border-4 border-white">36</td>
                            </tr>
                            <tr className="bg-orange-300">
                            <td data-label="Subject" className="text-center border-4 border-white">DBMS<br></br>(IT-303)</td>
                                <td data-label="Attendence obtained (s-1)" className="text-center border-4 border-white">14</td>
                                <td data-label="Attendence total (s-1)" className="text-center border-4 border-white">16</td>
                                <td data-label="Marks obtained (s-1)" className="text-center border-4 border-white">33</td>
                                <td data-label="Total marks (s-1)" className="text-center border-4 border-white">36</td>
                                <td data-label="Attendence obtained (s-2)" className="text-center border-4 border-white">13</td>
                                <td data-label="Attendence total (s-2)" className="text-center border-4 border-white">16</td>
                                <td data-label="Marks obtained (s-2)" className="text-center border-4 border-white">30</td>
                                <td data-label="Total marks (s-2)" className="text-center border-4 border-white">36</td>
                                <td data-label="Attendence obtained (s-3)" className="text-center border-4 border-white">15</td>
                                <td data-label="Attendence total (s-3)" className="text-center border-4 border-white">16</td>
                                <td data-label="Marks obtained (s-3)" className="text-center border-4 border-white">34</td>
                                <td data-label="Total marks (s-3)" className="text-center border-4 border-white">36</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Internal;