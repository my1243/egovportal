import React from "react";

const Profile = () => {
    return(
        <>
            <h1 className="mx-8 md:mx-12 m-4 text-4xl font-bold">Student Profile</h1>
            <div className="flex flex-col lg:flex-row p-4 justify-between items-center h-[80vh] mx-8 md:mx-12 mb-12 font-medium rounded-lg border-4 border-orange-600 bg-orange-200">
                <div className="border-b-2 lg:border-r-2 lg:border-b-0 border-orange-600 flex justify-between flex-col h-full gap-2 py-4 md:p-8 w-full lg:w-2/3">
                    <div className="flex justify-between">
                        <h2>DDU Reproting Date</h2>
                        <h4>10/11/2020</h4>
                    </div>
                    <div className="flex justify-between">
                        <h2>Admission Type</h2>
                        <h4>SF</h4>
                    </div>
                    <div className="flex justify-between">
                        <h2>First Name</h2>
                        <h4>VrajKumar</h4>
                    </div>
                    <div className="flex justify-between">
                        <h2>Last Name</h2>
                        <h4>Patel</h4>
                    </div>
                    <div className="flex justify-between">
                        <h2>Name Format</h2>
                        <h4>LFM</h4>
                    </div>
                    <div className="flex justify-between">
                        <h2>Full Name</h2>
                        <h4>Patel VrajKumar Kamleshkumar</h4>
                    </div>
                    <div className="flex justify-between">
                        <h2>Gender</h2>
                        <h4>Male</h4>
                    </div>
                    <div className="flex justify-between">
                        <h2>Birth Date</h2>
                        <h4>14/01/2003</h4>
                    </div>
                    <div className="flex justify-between">
                        <h2>Birth Place</h2>
                        <h4>Godhra</h4>
                    </div>
                    <div className="flex justify-between">
                        <h2>ACPC Seat Allotment Date</h2>
                        <h4>10/11/2020</h4>
                    </div>
                    <div className="flex justify-between">
                        <h2>Is D2d</h2>
                        <h4>0</h4>
                    </div>
                </div>
                <div className="flex justify-between flex-col h-full gap-2 py-4 md:p-8 w-full lg:w-2/3">
                    <div className="flex justify-between">
                        <h2>Enrollemnt Year</h2>
                        <h4>2020</h4>
                    </div>
                    <div className="flex justify-between">
                        <h2>Degree</h2>
                        <h4>B.Tech I.T.</h4>
                    </div>
                    <div className="flex justify-between">
                        <h2>Qualifying Exam Roll No.</h2>
                        <h4>232814</h4>
                    </div>
                    <div className="flex justify-between">
                        <h2>Session Type</h2>
                        <h4>Not Set</h4>
                    </div>
                    <div className="flex justify-between">
                        <h2>Session No</h2>
                        <h4>5</h4>
                    </div>
                    <div className="flex justify-between">
                        <h2>Batch Year</h2>
                        <h4>2020</h4>
                    </div>
                    <div className="flex justify-between">
                        <h2>Student Code</h2>
                        <h4>20ITUOS071</h4>
                    </div>
                    <div className="flex justify-between">
                        <h2>Old Student Code</h2>
                        <h4>T20IT37647</h4>
                    </div>
                    <div className="flex justify-between">
                        <h2>Students Allotment</h2>
                        <h4>Y</h4>
                    </div>
                    <div className="flex justify-between">
                        <h2>Merit Rank</h2>
                        <h4>1570</h4>
                    </div>
                    <div className="flex justify-between">
                        <h2>Re Shuffle Status</h2>
                        <h4>IN</h4>
                    </div>
                    <div className="flex justify-between">
                        <h2>Re Shuffle Phase</h2>
                        <h4>2</h4>
                    </div>
                    <div className="flex justify-between">
                        <h2>Cast Category Code</h2>
                        <h4>Open</h4>
                    </div>
                </div>
                <div className="order-first lg:order-last flex justify-between items-end flex-col h-full p-8 w-1/3">
                    <img className="rounded-full" src="../images/default-user.png" alt="avatar"/>
                </div>
            </div>
        </>
    )
}

export default Profile;