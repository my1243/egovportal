import React from "react";

const Contact = () => {
    return(
        <>
        <div className="lg:w-1/2 w-full">
            <h1 className="my-4 text-4xl font-bold">Contact Information</h1>
            <div className="h-80 font-medium rounded-lg border-4 shadow-xl border-orange-500 px-8 py-4 flex justify-evenly flex-col bg-orange-200">
                <div className="flex justify-between">
                    <h2>Address 1</h2>
                    <h4>27</h4>
                </div>
                <div className="flex justify-between">
                    <h2>Address 2</h2>
                    <h4>Harikrishna Society</h4>
                </div>
                <div className="flex justify-between">
                    <h2>Address 3</h2>
                    <h4>Ankleshwar MAhadev Road</h4>
                </div>
                <div className="flex justify-between">
                    <h2>City</h2>
                    <h4>Godhra</h4>
                </div>
                <div className="flex justify-between">
                    <h2>Pincode</h2>
                    <h4>389001</h4>
                </div>
                <div className="flex justify-between">
                    <h2>State</h2>
                    <h4>Gujarat</h4>
                </div>
                <div className="flex justify-between">
                    <h2>Country</h2>
                    <h4>India</h4>
                </div>
                <div className="flex justify-between">
                    <h2>Phone No</h2>
                    <h4>8732937702</h4>
                </div>
                <div className="flex justify-between">
                    <h2>Mobile No</h2>
                    <h4>6359428485</h4>
                </div>
                <div className="flex justify-between">
                    <h2>Email</h2>
                    <h4>vraj.patel4801@gmail.com</h4>
                </div>
            </div>
            </div>
        </>
    )
}

export default Contact;