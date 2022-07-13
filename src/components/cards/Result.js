import React from "react";

const Result = () => {
    return(
        <>
            <div className="h-72 font-medium rounded-lg border-2 shadow-xl border-orange-500 px-8 py-4 flex justify-evenly flex-col bg-orange-200">
                <div className="flex justify-between">
                    <h2>Batch Year</h2>
                    <h4>2020</h4>
                </div>
                <div className="flex justify-between">
                    <h2>Session No</h2>
                    <h4>1</h4>
                </div>
                <div className="flex justify-between">
                    <h2>Reg Exam No</h2>
                    <h4>SF</h4>
                </div>
                <div className="flex justify-between">
                    <h2>Rem1 Exam No</h2>
                    <h4>-</h4>
                </div>
                <div className="flex justify-between">
                    <h2>External Result</h2>
                    <h4><a className="underline text-blue-800 font-medium">view result</a></h4>
                </div>
                <div className="flex justify-between">
                    <h2>Internal Result</h2>
                    <h4><a className="underline text-blue-800 font-medium">view result</a></h4>
                </div>
                <div className="flex justify-between items-center">
                    <h1>Provisional Marksheet</h1>
                    <button className="p-2 bg-white rounded-md">Download</button>
                </div>
            </div>
        </>
    )
}

export default Result;