import React from "react";

const Graduation = () => {
    return(
        <>
        <div className="lg:w-1/2 w-full">
            <h1 className="my-4 text-4xl font-bold">Graduation</h1>
            <div className="h-80 font-medium rounded-lg border-4 shadow-xl border-orange-500 px-8 py-4 flex justify-evenly flex-col bg-orange-200 w-full">
                <div className="flex justify-between">
                    <h2>Relation Type</h2>
                    <h4>Father</h4>
                </div>
                <div className="flex justify-between">
                    <h2>Full Name</h2>
                    <h4>Patel kamleshkumar Punamchandbhai</h4>
                </div>
                <div className="flex justify-between">
                    <h2>Occupation</h2>
                    <h4>Shop</h4>
                </div>
                <div className="flex justify-between">
                    <h2>Organization Name</h2>
                    <h4>Shree Ram</h4>
                </div>
                <div className="flex justify-between">
                    <h2>Annual Income</h2>
                    <h4>75000.00</h4>
                </div>
            </div>
            </div>
        </>
    )
}

export default Graduation;