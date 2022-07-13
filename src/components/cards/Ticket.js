import React from "react";

const Ticket = () => {
    return(
        <>
            <div className="h-80 font-medium rounded-lg border-2 shadow-xl border-orange-500 px-8 py-4 flex justify-evenly flex-col bg-orange-200">
                <div className="flex justify-between">
                    <h2>Exam Code</h2>
                    <h4>-</h4>
                </div>
                <div className="flex justify-between">
                    <h2>Exam No</h2>
                    <h4>-</h4>
                </div>
                <div className="flex justify-between">
                    <h2>Session No</h2>
                    <h4>1</h4>
                </div>
                <div className="flex justify-between">
                    <h2>Exam Type</h2>
                    <h4>-</h4>
                </div>
                <div className="flex justify-between">
                    <h2>Exam Category</h2>
                    <h4>-</h4>
                </div>
                <div className="flex justify-between">
                    <h2>Month</h2>
                    <h4>July</h4>
                </div>
                <div className="flex justify-between">
                    <h2>Year</h2>
                    <h4>2022</h4>
                </div>
                <div className="flex justify-between">
                    <h2>View Hall Ticket</h2>
                    <h4><a className="underline text-blue-800 font-medium">view hallticket</a></h4>
                </div>
                <div className="flex justify-between items-center">
                    <h1>Hall Ticket</h1>
                    <button className="p-2 bg-white rounded-md">Download</button>
                </div>
            </div>
        </>
    )
}

export default Ticket;