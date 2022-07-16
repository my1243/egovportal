import React from "react";

const ExamGrade = () => {
    return (
        <>
            <div>
            <h1 className="mx-8 md:mx-12 m-4 text-4xl font-bold pb-2">
            Exam Grade Info
          <hr className="rounded-full shadow-xl mt-2 pt-1 max-w-[40rem] bg-gradient-to-r from-[#f4510b]  to-[#e9d022]" /></h1>
                <div className="lg:mr-12 lg:ml-12 sm:mx-4 mb-12">
                    <table className="table_a rounded-lg overflow-hidden table-auto h-96 w-full shadow-md">
                        <thead className="bg-orange-500 h-16 text-white">
                            <tr>
                                <th className="border border-white">Institute</th>
                                <th className="border border-white">Program</th>
                                <th className="border border-white">Grade code</th>
                                <th className="border border-white">Grade Desc</th>
                                <th className="border border-white">Grade Point</th>
                                <th className="border border-white">From Percentage</th>
                                <th className="border border-white">To Percentage</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-orange-100">
                                <td data-label="Institute" className="text-center border border-white">Faculty of technology</td>
                                <td data-label="Program" className="text-center border border-white">Bachelor of technology</td>
                                <td data-label="Grade code" className="text-center border border-white">AA</td>
                                <td data-label="Grade Desc" className="text-center border border-white">Outstanding</td>
                                <td data-label="Grade Point" className="text-center border border-white">10.00</td>
                                <td data-label="From Percentage" className="text-center border border-white">84.50</td>
                                <td data-label="To Percentage" className="text-center border border-white">100.00</td>
                            </tr>
                            <tr className="bg-orange-300">

                                <td data-label="Institute" className="text-center border border-white">Faculty of technology</td>
                                <td data-label="Program" className="text-center border border-white">Bachelor of technology</td>
                                <td data-label="Grade code" className="text-center border border-white">AA</td>
                                <td data-label="Grade Desc" className="text-center border border-white">Outstanding</td>
                                <td data-label="Grade Point" className="text-center border border-white">10.00</td>
                                <td data-label="From Percentage" className="text-center border border-white">84.50</td>
                                <td data-label="To Percentage" className="text-center border border-white">100.00</td>
                            </tr>
                            <tr className="bg-orange-100">


                                <td  data-label="Institute" className="text-center border border-white">Faculty of technology</td>
                                <td data-label="Program" className="text-center border border-white">Bachelor of technology</td>
                                <td data-label="Grade code" className="text-center border border-white">AA</td>
                                <td data-label="Grade Desc" className="text-center border border-white">Outstanding</td>
                                <td data-label="Grade Point" className="text-center border border-white">10.00</td>
                                <td data-label="From Percentage" className="text-center border border-white">84.50</td>
                                <td data-label="To Percentage" className="text-center border border-white">100.00</td>
                            </tr>
                            <tr className="bg-orange-300">

                                <td data-label="Institute" className="text-center border border-white">Faculty of technology</td>
                                <td data-label="Program" className="text-center border border-white">Bachelor of technology</td>
                                <td data-label="Grade code" className="text-center border border-white">AA</td>
                                <td data-label="Grade Desc" className="text-center border border-white">Outstanding</td>
                                <td data-label="Grade Point" className="text-center border border-white">10.00</td>
                                <td data-label="From Percentage" className="text-center border border-white">84.50</td>
                                <td data-label="To Percentage" className="text-center border border-white">100.00</td>
                            </tr>

                            <tr className="bg-orange-100">

                                <td data-label="Institute" className="text-center border border-white">Faculty of technology</td>
                                <td data-label="Program" className="text-center border border-white">Bachelor of technology</td>
                                <td data-label="Grade code" className="text-center border border-white">AA</td>
                                <td data-label="Grade Desc" className="text-center border border-white">Outstanding</td>
                                <td data-label="Grade Point" className="text-center border border-white">10.00</td>
                                <td data-label="From Percentage" className="text-center border border-white">84.50</td>
                                <td data-label="To Percentage" className="text-center border border-white">100.00</td>
                            </tr>

                            <tr className="bg-orange-300">

                                <td data-label="Institute" className="text-center border border-white">Faculty of technology</td>
                                <td data-label="Program" className="text-center border border-white">Bachelor of technology</td>
                                <td data-label="Grade code" className="text-center border border-white">AA</td>
                                <td data-label="Grade Desc" className="text-center border border-white">Outstanding</td>
                                <td data-label="Grade Point" className="text-center border border-white">10.00</td>
                                <td data-label="From Percentage" className="text-center border border-white">84.50</td>
                                <td data-label="To Percentage" className="text-center border border-white">100.00</td>
                            </tr>

                            <tr className="bg-orange-100">

                                <td data-label="Institute" className="text-center border border-white">Faculty of technology</td>
                                <td data-label="Program" className="text-center border border-white">Bachelor of technology</td>
                                <td data-label="Grade code" className="text-center border border-white">AA</td>
                                <td data-label="Grade Desc" className="text-center border border-white">Outstanding</td>
                                <td data-label="Grade Point" className="text-center border border-white">10.00</td>
                                <td data-label="From Percentage" className="text-center border border-white">84.50</td>
                                <td data-label="To Percentage" className="text-center border border-white">100.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ExamGrade;